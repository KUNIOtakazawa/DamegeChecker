const MaxSaveCount = 80;

/**同期データの取得結果 */
class SyncDataFetchResult{
  constructor(FetchResult) {
    if (FetchResult["Partial"]) {
      FetchResult["All"]["Toram_Data_Archive"] = FetchResult["Partial"]["Archive"];
      FetchResult["All"]["Toram_LocalItems"] = FetchResult["Partial"]["Local"];           
    }
    /**KeyとJsonではない値のセット */
    this.All = FetchResult["All"];
    /**データ取得できた場合にTrue */
    this.OK = FetchResult["IsComplete"];
    /**ホストID */
    this.ID = FetchResult["ID"];
    /**リスナーID */
    this.ListenerID = FetchResult["ListenerID"];
    /**ホストとして取得できた場合にTrue */
    this.HostFetch = () => this.ID.length > 0;
  }
}

//ローカルストレージへの一連の操作方法を定義。
class Refresh{
  /**
   * ローカルストレージが使用できる場合にTrue
   */
  IsAviableLocalStorage = true;
  /**
   * アーカイブ有効
   */
  IsArchive = false;
  /**
   * 改定バージョン、Verを上げた時は過去のVerは削除される。
   * ※使う予定は基本的にない。
   */
  Version = 1.0;
  /**同期モードの重複取得防止用 */
  SendCapturedFunc = null;
  CapturedTime = Date.now();
  Local = {};
  SaveName = {};
  OneData = null;

  constructor() {
    //初期設定
    if (window.localStorage) {
      const UserData = (() => {
        try {
          return localStorage.getItem("Toram").Jparse();
        } catch {
          return null;
        }
      })();
      if (!localStorage.getItem("Toram") || UserData === null) {
        const configdata = {
          CreateDate:
            (() => { const D = new Date; return `${D.getFullYear()}/${D.getMonth()+1}/${D.getDate()}` })(),
          FirstVersion: this.Version,
          UserID: `${Date.now()}-${Math.floor(Math.random() * 1000)}`
        }
        localStorage.setItem("Toram", JSON.stringify(configdata));
        localStorage.setItem("Toram_Data_IsArchive", true);
      }else {
        if (!UserData["UserID"]) {
          UserData["UserID"] = `${Date.now()}-${Math.floor(Math.random() * 1000) + 1000}`
        }

        localStorage.setItem("Toram", UserData.Json());
      }
      const Ans = JSON.parse(localStorage.getItem("Toram_Data_IsArchive"));
      this.IsArchive = Ans === null ? true : Ans;

    } else {
      this.IsAviableLocalStorage = false;
      for (let i = 1; i <= MaxSaveCount; i++) {
        this.Local[i] = null;
        this.SaveName[i] = null;
      }
    }
    /**
       * データを保存します。
       * ローカルストレージが使えない場合、引数省略時はクラス内に取り込みます。
       * @param { string } SaveData JSONデータ
       * @param { string } SaveName データの名称
       * @param { number } Send 格納する番号1-MaxSaveCount
       * @type { boolean } 
     */
    this.Save = (SaveData, SaveName, Send = 0) => {
      if (typeof SaveData !== "string") return false;
      if (1 > Send || Send > MaxSaveCount) return false;
        
      if (!this.IsAviableLocalStorage) {
        this.Local[Send] = SaveData;
        this.SaveName[Send] = SaveName;
        return true;
      }

      localStorage.setItem(`Toram_Data${Send}`, SaveData);
      const Names = {
        Varsion: this.Version,
        Name: SaveName,
      }
      localStorage.setItem(`Toram_SaveName${Send}`, JSON.stringify(Names));
      return true;
    }
    this.NameChange = (Num, NewName) => {
      if (1 > Num || Num > MaxSaveCount) return false;

      if (!this.IsAviableLocalStorage) {
        this.SaveName[Num] = NewName;
        return true;
      }
      const SendName = `Toram_SaveName${Num}`;
      const value = JSON.parse(localStorage.getItem(SendName));
      value["Name"] = NewName;
      localStorage.setItem(SendName, JSON.stringify(value));
      return true;
    }
    /**
     * 履歴として保存、ローカルストレージが存在しない場合は何もしない。
     * @param { string } SaveData JSONデータ 
     */
    this.SaveNotList = (SaveData) => {
      if (!this.IsAviableLocalStorage) return;
      localStorage.setItem("Toram_Data_Archive", SaveData);
    }
    /**
       * 対象番号のデータを削除します。
       * @param { Number } DataNumber 削除するデータ番号(1-MaxSaveCount)
       * @type { void }
    */
    this.Delete = (DataNumber = 0) => {
      if (1 > DataNumber || DataNumber > MaxSaveCount) return;
      if (this.IsAviableLocalStorage) {
        localStorage.removeItem(`Toram_SaveName${DataNumber}`);
        localStorage.removeItem(`Toram_Data${DataNumber}`);
      } else {
        this.Local[DataNumber] = null;
        this.SaveName[DataNumber] = null;
      }
    }
    /**
     * 一時保存のデータを保存または取得する。
     * @param { JSON } Data データ
     */
    this.DataCapture = (Data = null) => {
      if (Data === null) return this.OneData;
      this.OneData = Data;
    }
    /**
       * 保存しているものの名称リストを返却します。データ無しはnull
       * @type { Array } [ number[] , string[] ]
       * @return  number[] , string[] ]
    */
    this.GetList = () => {
      const values = [];

      if (this.IsAviableLocalStorage) {
        for (let i = 1; i <= MaxSaveCount; i++) {
          const NameData = JSON.parse(localStorage.getItem(`Toram_SaveName${i}`));
          if (NameData === null) continue;
          values.push([i, NameData["Name"]]);
        }
      } else {
        for (let i = 1; i <= MaxSaveCount; i++) {
          if (this.SaveName[i] === null) continue;
          values.push([i, this.SaveName[i]]);
        }
      }
      return values.length > 0 ? values : null;
    }
    /**
     * データがない番号リストを返却する。
     * 全てにデータがある場合は空のArray返却
     * @type { Array }
     */
    this.GetNoDataList = () => {
      const values = [];

      if (this.IsAviableLocalStorage) {
        for (let i = 1; i <= MaxSaveCount; i++) {
          const NameData = localStorage.getItem(`Toram_SaveName${i}`);
          if (NameData !== null) continue;
          values.push(i);
        }
      } else {
        for (let i = 1; i <= MaxSaveCount; i++) {
          if (this.SaveName[i] !== null) continue;
          values.push(i);
        }
      }
      return values.length > 0 ? values : null;
    }
    /**
     * 番号に対応するデータを返却します。
     * @param { number } DataNumber 
     */
    this.GetData = (DataNumber) => {
      if (1 > DataNumber || DataNumber > MaxSaveCount) return null;
      const Value = (() => {
        if (!this.IsAviableLocalStorage) {
          return this.Local[DataNumber];
        } else {
          const data = localStorage.getItem(`Toram_Data${DataNumber}`);
          return data;
        }
      })();
      return Value;
    }
    /**
     * 履歴保存のセーブデータを返却。
     */
    this.GetArchiveData = () => {
      if (!this.IsAviableLocalStorage || !this.IsArchive) return null;
      //\n変換は累積セーブデータ内に紛れ込んだ場合のエラー対策
      const archive = localStorage.getItem("Toram_Data_Archive");
      return archive && archive.length > 10 ? archive : null; 
    }
    this.IsArchiveData = (Answer) => {
      localStorage.setItem("Toram_Data_IsArchive", JSON.stringify(Answer));
    }
    /**
     * 対応する名称のデータに差し替える。
     * @param {element} TargetElement Elem
     * @param {string } ElemTitle Top/Sample/Save/Config 
     */
    this.Render = (TargetElement , ElemTitle) => {
      TargetElement.innerHTML = "";
      Judey.$cls('ArchiveMenu_Info').RemChild();
      TargetElement.insertAdjacentHTML("beforeend", RenderElemet[ElemTitle]);
      if (!RenderEvent[ElemTitle]) return;
      RenderEvent[ElemTitle]();

      //表示修正
      Judey.$tag("label").EachElem(e => {
        if (e.innerHTML.includes("span") === false) {
          const elem = Judey.$elem(e);
          elem.Html(`<span>${elem.Text()}</span>`);
    
          elem.Class("Flex");
        }
      });
    }
    this.InfoRender = (Text, IsFeedOut = true) => {
      const Elem = Judey.$cls('ArchiveMenu_Info').RemChild().Child("p");
      Elem.Text(Text);
      if (IsFeedOut) Fadeout(Elem);
    }
    /**
     * 
     * ローカルストレージの情報を削除します。
     */
    this.AllClear = () => {
      if (!localStorage) return;
      localStorage.KeyEach(key => {
        if (key !== "Toram" && key !== "Toram_ExtensionComponents") {
          localStorage.removeItem(key);
        }
      });
    };
    /**キャプチャーモードの値を取得または設定する。 */
    this.CapturedMode = (value) => {
      if (!localStorage) return "0";
      if (value !== undefined) {
        localStorage.setItem("Toram_CapturedSaveMode", value);
        return;
      } 
      return localStorage.getItem("Toram_CapturedSaveMode") ?? "0";
    }
    /**キャプチャーID(同期ホストID)の値を取得または設定する。 */
    this.CapturedID = (value) => {
      if (!localStorage) return;

      if (value === false) {
        localStorage.removeItem("Toram_CapturedID");
        return;
      }      
      else if (value !== undefined) {
        localStorage.setItem("Toram_CapturedID", value);
        return;
      }

      return localStorage.getItem("Toram_CapturedID");      
    }
    /**リスナーキャプチャーID(同期リスナーID)の値を取得または設定する。 */
    this.ListenerCapturedID = (value) => {
      if (!localStorage) return;

      if (value === false) {
        localStorage.removeItem("Toram_ListenerCapturedID");
        return;
      }      
      else if (value !== undefined) {
        localStorage.setItem("Toram_ListenerCapturedID", value);
        return;
      }

      return localStorage.getItem("Toram_ListenerCapturedID");      
    }
    /**同期モードのID情報を表示する。 */
    this.ViewCapturedID = async () => {
      if (this.CapturedMode() === "0") {
        return await MainRender.AsyncAnswer("同期モード設定状態ではありません。", Answer.CloseOnly);
      }

      const HostElem = `
        <div style="margin-top:5px;">
          <div>
            <span class="Config_Text">同期ホストコード：<span style="color:var(--RedGrad3);">${this.CapturedID() ?? ""}</span></span>
            <button type="button" class="ClipCopy1 HandOver_Btn2">コピー</button>
            <span class="Config_Text" style="margin-left:5px" id="copyiedid1"></span>
          </div>
          <p>
            同期データの編集権があります。<br>
            編集したデータはサーバーに記録され、コードの利用者は<br>
            常に最新のデータを取得します。<br>
            ※ホストコード利用者が複数いる場合、は最新の更新のみ記録します。
          </p>
        </div>
      `;
      const ListenerElem = `
        <div style="margin-top:5px;">
          <div >
            <span class="Config_Text">同期リスナーコード：<span style="color:var(--RedGrad3);">${this.ListenerCapturedID() ?? ""}</span></span>
            <button type="button" class="ClipCopy2 HandOver_Btn2">コピー</button>
            <span class="Config_Text" style="margin-left:5px" id="copyiedid2"></span>
          </div>
          <p>
            同期データの読み取りと限定的な更新(準備中)ができます。<br>
            コード利用者は常に最新のデータを取得します。<br>
            承認を得た場合のみデータを更新することができます。
          </p>
        </div>
      `;   

      let viewelem = "";
      if (this.CapturedID()) viewelem += HostElem
      if (this.ListenerCapturedID()) viewelem += ListenerElem;

      await MainRender.AsyncAnswer(viewelem, Answer.CloseOnly, () => {
        Judey.$cls("ClipCopy1").Event("click", async _ => {
          await navigator.clipboard.writeText(this.CapturedID());
          Judey.$cls("ClipCopy1").Rem();
          Judey.$id("copyiedid1").Text("コピーしました!");
        });
        Judey.$cls("ClipCopy2").Event("click", async _ => {
          await navigator.clipboard.writeText(this.ListenerCapturedID());
          Judey.$cls("ClipCopy2").Rem();
          Judey.$id("copyiedid2").Text("コピーしました!");
        }); 
      });
    };
    /**同期モード適用時のデータ送信設定 */
    this.SendCapturedSaveData = () => {
      if (!localStorage) return CapturedResult.DisableStorage;
      
      let Timeout = null;
      
      const CreateTimeout = () => {
        clearTimeout(Timeout);
        Timeout = setTimeout(SendCaptureData, 4e3);
      }
      /**データ送信実行 */
      const SendCaptureData = async () => {
        if (Date.now() - Method.CapturedTime < 4000) return;
        const NowCapturedSaveMode = this.CapturedMode();
        if (NowCapturedSaveMode !== "1") {
          if (NowCapturedSaveMode !== "2") {
            this.CapturedMode("0");
            this.CapturedID(false);
            this.ListenerCapturedID(false);            
          }

          Method.SendCapturedFunc = null;
          
          clearTimeout(Timeout);

          Judey.$query("select,input").RemEvent("change", CreateTimeout);
          Judey.$query(".Epuipment_Listitem,input[type='radio'],.SetEquipmentPropertyButtons").RemEvent("click", CreateTimeout);

          return CapturedResult.ModeOff;
        }

        Method.CapturedTime = Date.now();
        await this.SendCapturedSaveData_OnlySend();
      }
      
      Method.SendCapturedFunc = CreateTimeout;

      Judey.$query("select:not(.ArchiveMenuArea select),input:not(.ArchiveMenuArea input)").Event("change", CreateTimeout);
      Judey.$query(".Epuipment_Listitem,input[type='radio'],.SetEquipmentPropertyButtons").Event("click", CreateTimeout);
      return CapturedResult.ModeOn;
    }
    /**同期モード実行時に部分データを送信する。 */
    this.SendCapturedSaveData_OnlySend = async () => {
      if (!this.CapturedID()) return;
      const Result = {
        Data: {
          Archive: Repair.CreateJsonValues().Jparse(),
          Local: MainMethod.GetMyLocal(),
        },
        Capture: SendResult.Partial,
        ID: this.CapturedID() ?? "",
      };

      if (Result.ID === "") return;

      try {
        const ResultData = await API("./API/SendCaptured.php", Result.Json()?.replaceAll('\n', ''));
        if (ResultData["ID"]) {
          this.CapturedID(ResultData["ID"])
        }
      } catch (error) {
        this.EndCapturedMode();
        MainRender.CheckAnswer("取得エラーのため同期を強制解除しました。\n", false, Answer.OKOnly);
      }
    }
    /**同期モード実行時にデータを送信する。 */
    this.SendCapturedAllData_OnlySend = async () => {
      if (!this.CapturedID()) return;
      if (!localStorage) return CapturedResult.DisableStorage;

      const Mode = this.CapturedMode();
      const ID = this.CapturedID();

      if (Mode !== "1" || ID === "") {
        return false;
      }
      
      //Archive更新
      Method.SaveNotList(Repair.CreateJsonValues())?.replaceAll('\n', '');

      const Result = {
        Data: this.GetLocalAll().Jparse(),
        Capture: SendResult.All,
        ID: ID,
      };

      try {
        await API("./API/SendCaptured.php", Result.Json());
        return true;
      } catch (error) {
        return false;
      }
    }

    /**同期モードを終了する。 */
    this.EndCapturedMode = () => {
      this.CapturedMode("0");
      this.CapturedID(false);
      this.ListenerCapturedID(false);

      if (typeof Method.SendCapturedFunc === "function") {
        Judey.$query("select,input,.SetEquipmentPropertyButtons").RemEvent("change", Method.SendCapturedFunc);
        Judey.$query(".Epuipment_Listitem,input[type='radio'],.SetEquipmentPropertyButtons").RemEvent("click", Method.SendCapturedFunc);
        Method.SendCapturedFunc = null;
      }

      const Result = {
        Capture: SendResult.Delete,
        ID: Method.CapturedID() ?? ""
      }
      API("./API/SendCaptured.php", Result.Json());
      return ;
    };
    /**同期モードを開始し、データを送信する。自身の環境にIDを設定する。*/
    this.StartCapturedMode = async () => {
      if (!localStorage) return CapturedResult.DisableStorage;
      
      const Result = {
        Data: Method.GetLocalAll().Jparse(),
        Capture: SendResult.All,
        ID: "",
      }
      try {
        const ResultData = await API("./API/SendCaptured.php", Result.Json()?.replaceAll('\n', ''));
        if (ResultData["ID"]) {
          this.CapturedMode("1");
          this.CapturedID(ResultData["ID"]);
          this.ListenerCapturedID(ResultData["ListenerID"]);
          this.SendCapturedSaveData(false);

          return true;
        } else {
          this.EndCapturedMode();
        }
      } catch (error) {
        this.EndCapturedMode();
      }
    }
    /**同期データを取得する。 */
    this.GetCapturedAllData = async (SearchID = null) => {
      if (!localStorage) return false;
      
      const ID = this.CapturedID();
      const ListenerID = this.ListenerCapturedID();

      if (ID === null && SearchID === null) return false;

      const FetchParam = {
        Capture: SendResult.Fetch,
        ID: SearchID ?? ID,
        ListenerID: SearchID ?? ListenerID,
        UserID:localStorage.getItem("Toram").Jparse().UserID
      };

      try {
        const ResultData = await API("./API/SendCaptured.php", FetchParam.Json());
        if (ResultData === false || !ResultData["IsComplete"]) return false;

        return new SyncDataFetchResult(ResultData);

      } catch (error) {
        return null;
      }

    }
    /**同期データを反映させる。 @param {SyncDataFetchResult} SyncData */
    this.SetCapturedAllData = async(SyncData) => {
      try {
        Method.RepairData(SyncData.All);

        this.CapturedMode(SyncData.HostFetch() ? "1" : "2");
        this.CapturedID(SyncData.ID);
        this.ListenerCapturedID(SyncData.ListenerID);

        return true;
      } catch(e) {
        console.error(e);
        return false;
      }
    }
    /**引継ぎとアーカイブ復元 */
    this.RepairData = (Data) => {
      const Keys = Object.keys(Data);
      if (Keys.indexOf("Toram") === -1) return;

      this.AllClear();

      for (let Key of Keys) {
        if(typeof Data[Key] !== "string")
          localStorage.setItem(Key, Data[Key].Json());
        else
          localStorage.setItem(Key, Data[Key]);
      }

      //適用情報を再設定する。
      this.RepairConfigAll();
    }
    /**現在のローカル設定値の全モードを再適用する。 */
    this.RepairConfigAll = () => {
      MainMethod.DeleteLocalCustom();
      MainMethod.SetNewLocalCustom();//カスタム装備系統の再適用
      MainMethod.CheckColorMode();//カラーモードの適用
      MainMethod.SetFakeSelector(); //ドロップダウン表示の変更

      MainRender.Crystal();//カスタム装備系統のリスト反映
      MainRender.PaletteSelector(Judey.$query("input[type='number']"));//数値選択方式の変更適用
      MainRender.EquipmetIncludeProperty();//武器情報登録機能の変更適用
      MainRender.EquipmentTabName();
      MainRender.HideEquipment();
      
      Repair.DataReflesh(this.GetArchiveData());//アーカイブ保存データの適用と表示設定

      Method.SendCapturedSaveData();
    }
    //ローカルストレージの内容をすべて取得する。
    this.GetLocalAll = () => {
      try {
        const Result = {};
        localStorage.KeyEach(Key => {
          //数値のみの場合はJSON.parseが成功する。
          const Value = localStorage.getItem(Key);

          if (Key !== "Toram_ExtensionComponents") {
            if (Value.match(/[\:\{\[\}\]}]|true|false|null/g) || Number(Value))
            Result[Key] = Value?.replaceAll('\n', '').Jparse();
          else
            Result[Key] = Value.replaceAll("'","").replaceAll('"','')?.replaceAll('\n', '');
          }
        })

        return Result.Json();

      } catch (error) {
        return null;
      }
    }
    //時間記録
    this.CodeStamp = (GetData = undefined) =>{
      if (GetData === undefined) {
        localStorage.setItem("Toram_HandOver", Date.now());
      } else if(GetData === true) {
        return localStorage.getItem("Toram_HandOver");
      } else if (GetData === false) {
        localStorage.removeItem("Toram_HandOver");
      }
    }
    this.GetSaveTarget = () => {
      const value = localStorage.getItem("Toram_SaveTarget");
      return value || 1;
    }
    this.SetSaveTarget = (num) => {
      localStorage.setItem("Toram_SaveTarget", num);
    }
  }
}
/**同期状態 */
class CapturedResult{
  static DisableStorage = "DisableStorage";
  static ModeOff = "ModeOff";
  static ModeOn = "ModeOn";

  static Info = (ModeResult) => {
    switch (ModeResult) {
      case CapturedResult.DisableStorage: return "ローカルストレージが見つかりませんでした。";
      case CapturedResult.ModeOff: return "同期状態を解除しました。";
      case CapturedResult.ModeOn: return "同期を開始しました。";
    }
  }
}
/**転送オプション */
class SendResult{
  /**分離 */
  static Partial = "Partial";
  /**全て */
  static All = "All";
  /**転送解除 */
  static Delete = "Delete";
  /**情報取得 */
  static Fetch = "Fetch";
}
//ローカルストレージのセーブデータへの更新補助
class ModifySave{
  constructor() {
    const SaveMax = MaxSaveCount;
    const SaveNameText = "Toram_SaveName";
    const SaveText = "Toram_Data";
    
    /** セーブリザルト */
    let Result = [];
    let NameResult = [];

    if (IsLocalStorage === false) return;
    for (let i = 0; i <= SaveMax; i++) {
      if (!localStorage.getItem(SaveNameText + i)) continue;
      const DataSet = {
        Name: localStorage.getItem(SaveNameText + i),
        Data: localStorage.getItem(SaveText + i),
      };

      Result.push(DataSet);
      NameResult.push(localStorage.getItem(SaveNameText + i).Jparse().Name);
    }

    /**ローカルストレージから全てのセーブデータを削除する。 */
    const DeleteAllSaveList = () => {
      for (let i = 0; i <= SaveMax; i++) {
        localStorage.removeItem(SaveNameText + i);
        localStorage.removeItem(SaveText + i);
      }
    };

    /**セーブ名称を取得する。 */
    this.GetSaveNames = () => NameResult;

    /**指定番号のセーブを1つ上にあげる */
    this.ListUpTargetNo = (ListNoZeroBase, IsUpModyfy) => {
      if (IsLocalStorage === false) return
      if (ListNoZeroBase < 1 && IsUpModyfy) return;
      if (NameResult.length < ListNoZeroBase && !IsUpModyfy) return;

      const UpTargetNo = Number(ListNoZeroBase);
      const DownTargetNo = UpTargetNo + (IsUpModyfy ? -1 : 1);

      [Result[DownTargetNo], Result[UpTargetNo]] = [Result[UpTargetNo], Result[DownTargetNo]];
      [NameResult[DownTargetNo], NameResult[UpTargetNo]] = [NameResult[UpTargetNo], NameResult[DownTargetNo]];
    }
    /**現在のセーブ情報で書換する。*/
    this.SetAllSave = () => {
      if (IsLocalStorage === false) return;
      if (Result === null) return;

      DeleteAllSaveList();

      for (let i = 0; i < Result.length; i++){
        localStorage.setItem(SaveNameText + (i + 1), Result[i]["Name"]);
        localStorage.setItem(SaveText+ (i + 1), Result[i]["Data"]);
      }
      localStorage.setItem("Toram_SaveTarget", "1");
    }
  }
}
/** ローカスストレージへの操作方法を提供 */
const Method = new Refresh();

/** 対象のJudey要素をフェードアウト表示する。 */
const Fadeout = async judeyelem => {
  await new Promise(_ => setTimeout(_, 1000));
  for (let i = 100; i > 1; i--){
    await new Promise(_ => setTimeout(_, 10));
    judeyelem.Style(`opacity:${i / 100};`);
  }
  judeyelem.Rem();
}
/** Fetchメソッド */
const API = async (url, Data) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body:Data
    })
    const value = await res.text();
    return res.ok ? value?.replaceAll('\n', '').Jparse() : false; 
    
  } catch (error) {
    return false;
  }

}
/**ローディング提供 */
const CreateLoding = () => {
  const LodingElem = Judey.$Element("div","lodingrefs","Reference_Back");
  LodingElem.Child("div","","sk-circle");
  for (let i = 1; i <= 12; i++){
    LodingElem.Child("div", "", `sk-circle${i + 1},sk-child`).Breaker();
  };
  LodingElem.Breaker();
  Judey.$tag("body").AppendFirst(LodingElem);
  setTimeout(() => {
    Judey.$id("lodingrefs").Rem();
  }, 15e3);
}
/**ローディング要素を削除する。 */
const DeleteLoding = () => {
  Judey.$id("lodingrefs").Rem();
};

/** データの抽出、復元方法を定義 */
const Repair = {
  //再構成に必要なデータ生成
  CreateJsonValues: () => {
    try {     
      const Result = {
        Status: {},
        OtherInfo:{},
        AdditionStatus: {
          All: {},
          PartialAll: {},
        }
      };
      
      //Status
      Object.keys(Data.Status).filter(v => ["Level",...STATUS].includes(v)).forEach(Key => {
        Result.Status[Key] = Data.Status[Key];
      });
      
      //OtherInfo,AdditionStatus
      Result.OtherInfo = Data.OtherInfo.New();
      Object.keys(Data.AdditionStatus).filter(Key => ["All", "PartialAll"].includes(Key) === false)
        .forEach(Key => Result.AdditionStatus[Key] = Data.AdditionStatus[Key].New());
      
      //BuffSkills
      ["SimpleBuff", "SkillBuff", "SelfBuff", "UserCustomBuff", "OtherEquipmentEffect"].forEach(Key => {
        const Root = SelectionData[Key] || {};
        const ActiveSkillKey = Object.keys(Root)
          .filter(SkillKey => Root[SkillKey].IsActive === true);
        
        Result[Key] = ActiveSkillKey.map(Key => {
          /** @type { Interface_AddBuff } */
          const Skill = Root[Key];
          const Lv = Skill?.Lv ?? 0;
          const SecondLv = Skill?.SecondLv ?? 0;
          const TherdLv = Skill?.TherdLv ?? 0;

          if (Lv == 0) return Key;
          return `${Key}Level${Lv}@${SecondLv}@${TherdLv}`;
          })
      });

      return Result.Json();
  
    } catch (ex) {
      console.log(ex);
      alert("この動作を繰り返してしまう場合はサイト管理者へお問い合わせください。");
      window.location.reload();
    }

  },
  //再構成:内部/外部両方
  DataReflesh: (JNewData) => {
    try {
      const F = MainMethod;
      /** @type{ Data } */
      const NewData = JSON.parse(JNewData?.replaceAll('\n', ''));

      //データ調査
      if (!MainMethod.CheckAdditions(NewData["AdditionStatus"], true)) return false;
      
      //AdditionStatus.Allの初期化
      F.NewAll();
      
      //アイテム項目『回避』追加対応
      if (!NewData?.AdditionStatus?.ItemBuff?.FREE) {
        NewData.AdditionStatus.ItemBuff["FREE"] = MainMethod.AddDataUnit(SelectionData.ItemBuff.FREE[0], "0");
      }
      //アイテム項目『魔法防御』追加対応
      if (!NewData?.AdditionStatus?.ItemBuff?.MagicDefense) {
        NewData.AdditionStatus.ItemBuff["MagicDefense"] = MainMethod.AddDataUnit(SelectionData.ItemBuff.MagicDefense[0], "0");
      }

      //2024/5/2追加：読み込みデータ内のカスタム装備品復元メソッド
      const CustomEquipmentKeys = [];
      MainMethod.GetMyLocal().ValueEach(value => {
        value.KeyEach(key => CustomEquipmentKeys.push(key));
      });
      
      /**今のデータ内に存在しないカスタム装備品、またはデフォルト装備品の情報を新規のカスタム装備品として再登録する。 */ 
      const RepairCumtomEquipment = (EquipmentValueSet, LocalStorageEquipmentGroupKey, SelectionDataRoot, IsCustomEquipment) => {
        //既存のユニークキーを使用して装備品を登録する場合にTrue
        const HasEquipmentUniqueKey = IsCustomEquipment && EquipmentValueSet?.Name !== undefined && CustomEquipmentKeys.includes(EquipmentValueSet.Name) == false;
        //装備品の名称、取れない場合はデフォルトの名前
        const EquipmentNewName = EquipmentValueSet?.Unit?.Name ?? "復元したカスタム装備品";
        const NewEquipmentUniqueKey =
          MainMethod.SetSingleLocalCustom(LocalStorageEquipmentGroupKey, EquipmentNewName, HasEquipmentUniqueKey ? EquipmentValueSet.Name : undefined);
        
        const EquipmentPropertyKeys = new AddEquipment().Keys();
        const ResultEquipment = SelectionDataRoot[NewEquipmentUniqueKey].New();

        if (!EquipmentValueSet?.Unit) return null;
        
        //装備品プロパティ値を返却用装備品にコピー
        EquipmentValueSet.Unit.KeyEach(UnitKey => {
          if (EquipmentPropertyKeys.includes(UnitKey)) {
            ResultEquipment[UnitKey] = EquipmentValueSet.Unit[UnitKey]?.New();
          };
        });

        const ResultEquipmentDataSet = MainMethod.AddDataUnit(ResultEquipment, NewEquipmentUniqueKey);

        MainMethod.SetSingleLocalCustom(LocalStorageEquipmentGroupKey, ResultEquipmentDataSet, NewEquipmentUniqueKey);
        return ResultEquipmentDataSet;
      };
      //データ上書き
      const Funcs = {
        //対象が無いタイプへの互換性維持
        SetEnchant_SetOther: () => {
          const Addition = ["Enchant2", "Enchant3", "Other2", "Other3", "Other4", "Other5", "Other6", "Other7"];
          const NoneData = F.AddDataUnit({ Base: {}, Group: "-", Name: "装備なし" }, "NonesData");

          for (let Key of Addition) {
            if (NewData.AdditionStatus[Key]) continue;
            Data.AdditionStatus[Key] = NoneData.New();
          }
        },
        //階層がない項目系の反映
        SetNoneChildParametas: () => {
          const Skill_Regist = ["SimpleBuff", "SkillBuff", "SelfBuff", "UserCustomBuff", "OtherEquipmentEffect"];
          const GroupItems = ["Crystal", "Cooking", "ItemBuff"];
          const Addition_Keys = Object.keys(NewData.AdditionStatus)
            .filter(key => [...Skill_Regist, ...GroupItems, "All", "PartialAll"].includes(key) === false);
          
          Addition_Keys.forEach(key => {
            const ValueSet = NewData.AdditionStatus[key];
            const Target = SelectionData[key];
            const TargetItem = Target[ValueSet?.Name]?.New();

            const ReplacedEquipmentValueSet = (() => {
              //カスタム装備品を新規で作成して返却する場合
              if (TargetItem === undefined) {
                const ReplacedValueSet = RepairCumtomEquipment(ValueSet, key, Target, String(ValueSet?.Name).length === 13);

                if (ReplacedValueSet !== null) return ReplacedValueSet;
              }
              
              //装備品の名称がセーブデータと違う場合
              //2024/8/3 カスタム装備品は無視する。
              if (String(ValueSet?.Name).length !== 13 && TargetItem?.Name !== ValueSet?.Unit?.Name) {
                const ReplacedValueSet = RepairCumtomEquipment(ValueSet, key, Target, false);

                if (ReplacedValueSet !== null) return ReplacedValueSet;
              }

              //既に登録してある装備品の場合
              if (TargetItem) {
                return ValueSet.New();
              }

              //上記に一致しない場合
              const NewDataKey = (() => {
                const DataKeys = Object.keys(Target);

                for (let DataKey of DataKeys) {
                  if (ValueSet.Unit.Name === Target[DataKey].Name) {
                    return DataKey;//同名のデータがあった場合は入れ替え
                  }
                }

                return "0";//見つからなかった場合は初期値を返却
              })();
              
              return F.AddDataUnit(Target[NewDataKey], NewDataKey);
            })();

            F.SendAllStatus(ReplacedEquipmentValueSet?.Unit?.Base);
            Data.AdditionStatus[key] = ReplacedEquipmentValueSet.New();
            Target[ReplacedEquipmentValueSet?.Name] = ReplacedEquipmentValueSet?.Unit?.New();
        
          });
        },
        //子要素があるアイテム達
        //Crystal,Cooking,ItemBuff
        //ただし、Crystal以外は値が変わる要素を持っていないので無条件で戻す。
        //Error時は0のデータセットが入る。
        SetHasChildParametas: () => {
          const Crystals = ["Wepon", "Armor", "Addition", "Option"];

          //Cooking
          NewData.AdditionStatus["Cooking"]?.KeyEach(key => {
            const ValueSet = NewData.AdditionStatus.Cooking[key]?.New();
            if (ValueSet === undefined) return;

            try {
              Data.AdditionStatus.Cooking[key] = ValueSet;
            } catch(e) {
              Data.AdditionStatus.Cooking[key] = MainMethod.AddDataUnit({}, 0);
              console.log(e);
            }

            F.SendAllStatus(F.GetDataUnit(Data.AdditionStatus.Cooking[key]));
          });

          //Cookinng ItemBuff
          ["Crystal", "ItemBuff"].forEach(type => {
            NewData.AdditionStatus[type]?.KeyEach(key => {
              try {
               const ValueSet = NewData.AdditionStatus[type][key]?.New();
                if (ValueSet === undefined) return;

                const IsCrystal = type === "Crystal";
                const SelectionData_RootKey = (() => {
                  if (!IsCrystal) return key;
                  if (String(ValueSet?.Name ?? "").match(/[NM][0-9]*/g) || ValueSet?.Unit?.Type === "Nomal") return "Nomal";

                  return Crystals[Math.floor((key - 1) / 2)];
                })();
                const SelectionData_Root = SelectionData[type][SelectionData_RootKey];

                const { Unit, Name } = ValueSet;
                const HasSelectionData = !!SelectionData_Root[Name];

                if (HasSelectionData) {
                  if (Unit.TimeStamp) {
                    Data.AdditionStatus[type][key] = Unit.TimeStamp === SelectionData_Root[Name].TimeStamp
                      ? ValueSet
                      : MainMethod.AddDataUnit(SelectionData_Root[Name].New(), Name);
                  } else {
                    Data.AdditionStatus[type][key] = ValueSet;
                  }
                } else {
                  //SelectionDataにKeyが存在していないパターン
                  if (String(ValueSet?.Name).length !== 13) {
                    Data.AdditionStatus[type][key] = F.AddDataUnit(SelectionData_Root[0], "0");
                  }
                  else {
                    const GroupKey = IsCrystal
                      ? `Cry_${SelectionData_RootKey}`
                      : `ItemBuff_${SelectionData_RootKey}`;
                    
                    Data.AdditionStatus[type][key] = RepairCumtomEquipment(ValueSet, GroupKey, SelectionData_Root, true).New();
                  }
                }               
              } catch (e) {
                Data.AdditionStatus[type][key] = MainMethod.AddDataUnit(new SelectorBase("なし", {}), 0);
              }

              F.SendAllStatus(F.GetDataUnit(Data.AdditionStatus[type][key]));
            });
          });
          
        },
        //その他選択されていなかったプロパティの反映
        SetOtherParametas: () => {
          //Status設定
          if (!NewData["Status"].MEN) NewData["Status"].MEN = 1;
          if (!NewData["Status"].CRT) NewData["Status"].CRT = 1;
          if (!NewData["Status"].TEC) NewData["Status"].TEC = 1;
          const StatusKeys = Object.keys(NewData["Status"]).filter(key => ["Level", ...STATUS].includes(key));
          
          StatusKeys.forEach(key => Data["Status"][key] = NewData["Status"][key]);

          //敵とスキル以外の値を復元
          const keys = Object.keys(NewData["OtherInfo"]).filter(v => !["Enemy", "Skill"].includes(v));
          for (let key of keys) {
            Data["OtherInfo"][key] = NewData["OtherInfo"][key];
            //スペルミス補正
            if (key === "EquipmentSelecter") {
              Data["OtherInfo"].EquipmentSelector = NewData["OtherInfo"][key];
              delete Data["OtherInfo"].EquipmentSelecter;
            }
          }
        },
        //スキルバフの情報復元
        SetSkillBuff: () => {
          const Skills = ["SimpleBuff", "SkillBuff", "SelfBuff", "UserCustomBuff"];

          //PartialAll
          Data.AdditionStatus.PartialAll = {};
          const PartialData = {};
          for (let Root of Skills) {
            F.MargeData([Repair._RepairSkill(NewData, Root)], PartialData);
          }
          F.SendAllStatus(PartialData, true);                
        },
        //レジスタ等の情報復元
        SetOtherEquipmentEffect: () => {

          const Result = {};
          F.MargeData([Repair._RepairSkill(NewData, "OtherEquipmentEffect")], Result);
          F.SendAllStatus(Result, false);
        },
        //反映した情報でhtmlを再生成
        SetHTML_Skills_WeponSelector: () => {
          MainRender.SubWepon();
          //メソッド実行時に初期化されるため再定義。
          Data.OtherInfo.SubWepon = NewData["OtherInfo"]["SubWepon"];

          MainRender.SkillSelector();
          //MainRender.PassiveSkill();
          //MainRender.SelfBuffSkill();
        },
        //ステータスの情報反映
        SetHTML_InputStatusParametas: () => {
          MainRender.StatusInputProperty();
          MainRender.EnableStatusPoint();
        },
        SetHTML_Enemy: () => {
          const EnemyName = NewData.OtherInfo.Enemy.Name;
          /** @return { Array<Enemy,Numner>} */
          const CreateEnemySeach = () => {
            const Enemy = NewData.OtherInfo.Enemy;
            if (!Enemy?.FirstTime) return Repair._FindData("Enemy", EnemyName);
            const [Elem, Key] = [SelectionData.Enemy[Enemy.FirstTime], Enemy.FirstTime];
            return Elem !== undefined
              ? [Elem, Key]
              : [SelectionData.Enemy[1], 1];
          }
          
          const Item = CreateEnemySeach();

          //数値コピー
          if ((Item[0].Name === NewData.OtherInfo.Enemy.Name) && (Item[1] == 999)) {
            if (Item[0]["TimeStamp"] === undefined) {
              Object.keys(Item[0]).forEach(Key => {
                if (!["function", "object"].includes(typeof Item[0][Key])
                  && NewData.OtherInfo.Enemy[Key])
                  Item[0][Key] = NewData.OtherInfo.Enemy[Key]
              });
            }
          }

          //2024/10/26追加
          if (Item[0].IsRaidBoss === true) {
            Item[0].lv = NewData.OtherInfo.Enemy["lv"];
          }

          Data.OtherInfo.Enemy = SelectionData.Enemy[Item[1]];
          //リスト再生成
          MainRender.Enemy();

          Repair._SelectionSeach(Judey.id("EnemySelector"), Item[1]);
          F.SwitchEnemyInfo(Item[1]);
          F.ShowEnemyValues();
        },
        SetHTML_Skill: () => {
          const BtnElems = Judey.cls("SkillsSelector");
          for (let i = 0; i < BtnElems.length; i++) {
            if (BtnElems[i].value === "Skills-All") {
              Judey.$elem(BtnElems[i]).Class("Selectedskill");
            } else {
              Judey.$elem(BtnElems[i]).RemClass("Selectedskill");
            }
          }

          const Reference = Judey.$id("ChangeSkillPowers").Class("NoneText");
          const SkillName = NewData.OtherInfo.Skill.Name;

          if (SkillName === undefined && typeof NewData.OtherInfo.Skill === "string" && SelectionData.ComboSkill[NewData.OtherInfo.Skill]) {
            Judey.$query("li.SkillComboSelector_Item[data-target='Combo']").Dispatch("click");
            
            Data.OtherInfo.Skill = NewData.OtherInfo.Skill;
            Judey.$id("ComboSelector").InpText(NewData.OtherInfo.Skill).Dispatch("change");

          } else {
            Judey.$id("SkillSelector").RemChild();
            MainRender.ATKSkills("All");//制限なしで生成

            Judey.$query("li.SkillComboSelector_Item[data-target='Once']").Dispatch("click");
            
            const Item = Repair._FindData("Skill", SkillName);
            //数値コピー(カスタムのみ)
            if (Item[0].Name === NewData.OtherInfo.Skill.Name && Item[1] === "0") {
              Object.keys(Item[0].First.Base).forEach(Key => {
                if (!["function", "object"].includes(typeof Item[0].First.Base[Key])
                  && NewData.OtherInfo.Skill.First.Base[Key])
                  Item[0].First.Base[Key] = NewData.OtherInfo.Skill.First.Base[Key]
              });

              //参照の変更(絶対カスタムのみ)
              Item[0].First.Base.Reference = Item[0].First.Base.IsMagicalSkill
                ? Refs => Refs.Status.MATK
                : Refs => Refs.Status.AllATK;
            }

            Data.OtherInfo.Skill = SelectionData.Skill[Item[1]];
            Repair._SelectionSeach(Judey.id("SkillSelector"), Item[1]);
            MainRender.SkillEffect(Data);

            if (Item[1] == 0) {
              //威力変更表示
              Reference.RemClass("NoneText");
            }
          }
        },
        SetHTML_Wepons: () => {
          const calc = (ary) => {
            for (let value of ary) {
              const elem = Judey.id(`OtherInfo-${value}`);
              if (ary.indexOf(value) < 2) {
                elem.value = Data["OtherInfo"][value];
              } else {
                Repair._SelectionSeach(elem, Data["OtherInfo"][value]);
              }
            }
          }
          const WeponText = ["WeponATK", "Stable", "Wepon", "Smelting"];
          calc(WeponText);
          const SubWepon = WeponText.map(text => `Sub${text}`);
          calc(SubWepon);
        },
        SetHTML_Crystal: () => {
          MainRender.Crystal();
          const CrystalText = ["Wepon", "Armor", "Addition", "Option"];
          for (let i = 1; i < 9; i++) {
            const Text = CrystalText[Math.floor((i - 1) / 2)];
            const value = `${Text}-${Data.AdditionStatus.Crystal[i]["Name"]}`;
            Repair._SelectionSeach(Judey.id(`Crystal_${Text}_${i}`), value);
            Repair._SelectionSeach(Judey.id(`Crystal_${Text}_${i}`), `Nomal-${Data.AdditionStatus.Crystal[i]["Name"]}`);
          }
        },
        SetHTML_ItemBuff: () => {
          MainRender.ItemBuff();
          const ItemText = Object.keys(Data.AdditionStatus.ItemBuff);
          for (let value of ItemText) {
            const elem = Judey.id(`Item_${value}`);
            Repair._SelectionSeach(elem, Data.AdditionStatus.ItemBuff[value]["Name"]);
          }
        },
        SetHTML_CookingBuff: () => {
          const Root = Data.AdditionStatus.Cooking;
          for (let i = 1; i < 6; i++) {
            const EatName = Root[i]["Name"];
            const Eatvalue = Root[i]["Unit"][EatName];
            const EatNo = SelectionData.Cooking[EatName]?.Up?.indexOf(Eatvalue);
            
            Repair._SelectionSeach(Judey.id(`EatList_${i}`), `${EatName}-${i}`);
            Repair._SelectionSeach(Judey.id(`EatLv_${i}`),
              EatNo === undefined || EatNo === -1 || !EatNo
                ? 0
                : EatNo
            )
          }
        },
        SetHTML_SkillBuff_OtherEquipmentEffect: () => {
          Repair._CheckedSkillItems
            (NewData["SimpleBuff"], "SimpleBuffSelectors");
        
          //武器種別強化スキル：表示側
          Repair._CheckedSkillItems
            (NewData["SelfBuff"], "SelfBuffSelectors");
        
          //パッシブバフ:表示/内部
          Repair._CheckedSkillItems
            (NewData["SkillBuff"], "PbuffSelectors");
          
          //カスタムバフ
          Repair._CheckedSkillItems(NewData["UserCustomBuff"], "UserCustomBuffSelectors");
          
          //レジスタレット：表示
          MainRender.OtherEquipmentEffect();
          if (NewData["OtherEquipmentEffect"]) {
            Repair._CheckedSkillItems(NewData["OtherEquipmentEffect"], "OtherEquipmentEffectSelectors");
          }
        },
        SetHTML_OtherInfoInputs: () => {
          //Isキーの抽出
          const IsKeys = Object.keys(Data.OtherInfo)
            .filter(v => v.match(/(Is|ArmorOption)/g) !== null);
          
          //valueの形式に合わせる。
          const ValueKeys = (() => {
            const Info = Data.OtherInfo;
            let value = [];
            for (let Iskey of IsKeys) {
              const Ans =
                (Info[Iskey] === true) ? "On"
                  : (Info[Iskey] === false) ? "Off"
                    : Info[Iskey];
              value.push(`${Iskey}-${Ans}`);
            }
            return value;
          })();
          
          const AttributeOption = Judey.cls("InputOption");
          for (let i = 0; i < AttributeOption.length; i++) {
            const OptValue = AttributeOption[i].value;
            if (ValueKeys.findIndex(v => OptValue === v) > -1) {
              AttributeOption[i].checked = "checked";
            }
          }
          MainMethod.SwitchToraumaRate(Data.OtherInfo.ToraumaRate, false);

          //ダメージ表示
          if (Data.OtherInfo["IsExpectedShow"]) {
            Judey.$cls("ExpectedDameges").RemClass("NoneText");
            Judey.$cls("DamegeTD").Class("NoneText");
            Judey.query(".ExpectedOption[value='IsExpectedShow-On']").checked = "checked";
          } else {
            Judey.$cls("ExpectedDameges").Class("NoneText");
            Judey.$cls("DamegeTD").RemClass("NoneText");
          }
        },
      };
      Object.keys(Funcs).forEach(Func => Funcs[Func]());
      

      BaseCalculation();

      MainRender.EquipView(Data.OtherInfo.EquipmentSelector);
      MainRender.CrystalReference();
      MainRender.FakePreviewValue();

      return true;

    } catch (error) {
      console.log(error);
      MainMethod.SetBase();
      alert("データのロードに失敗しました。\n" + error.message);
      ErrDescriptions.push(error.message);
    }     
  },
  /** SelectionData[Root]内にNamesが存在していれば参照とKeyの値を返却する。 */
  _FindData:(Root, Names) => {
    const DataRoot = SelectionData[Root];
    const Keys = Object.keys(DataRoot);
    for (let Key of Keys) {
      if (DataRoot[Key]?.Name === Names) return [DataRoot[Key], Key];
    }
    return DataRoot[0] ? [DataRoot[0], 0] : [DataRoot[1], 1];
  },
  //指定スキルの表示側操作⇒checked付与+IsActive⇒True
  //RootName:SelectionData側のルート名称
  _CheckedSkillItems: (KeyObject, ClassName) => {
    const BaseBuffs = Judey.cls(ClassName);
    for (let skillkey of KeyObject ?? []) {
      for (let i = 0; i < BaseBuffs.length; i++){
        if (BaseBuffs[i].value === `${skillkey}-On`) {
          BaseBuffs[i].checked = "checked";
          break;
        }
      }
    }
  },
  //指定ルートのスキルリセットと再構成、新規値を返却
  _RepairSkill: (NewData, RootName) => {
    const Root = SelectionData[RootName];
    //データ初期化
    {
      const Keys = Object.keys(Root);
      for (let key of Keys) {
        if (!Root[key]) continue;
        /** @type {Interface_AddBuff} */
        const elem = Root[key];
        elem.IsActive = false;

        //OtherInfo再設定
        if (elem?.Root !== undefined && elem?.Root !== "") {
          Data.OtherInfo[elem.Root] =
            (elem?.RootValue === undefined
              ? false : "none");
        }

        if (elem?.IsCheckerActive !== undefined) elem.IsCheckerActive = false;
        
        //レベル適用がないスキルはここまで
        if (!elem.Change) continue;

        //最大レベル指定がある場合はその数値を適用する。
        const LvResult = {
          Lv:elem.Default ?? elem.Max,
          SecondLv: elem.SecondLvMax,
          TherdLv: elem.TherdLvMax
        };

        elem.SwitchData(LvResult, false);
      }
    }
    //データ再定義
    const Values = {};
    const Keys = NewData[RootName];
    /** * @type { Array } */
    let ResultKey = Keys?.New();

    if (!Keys) return {};
    if (Keys.length === 0) return Values;
      
    for (let Key of Keys) {
      //このデータセット内に特定のスキルが存在しない場合はFalseだけを追加して次に進む。
      if (!Root[!Key.includes("Level") ? Key : Key.split("Level")[0]]) {
        const disablekey = !Key.includes("Level") ? Key : Key.split("Level")[0];
        if (Data.OtherInfo[disablekey]) {
          Data.OtherInfo[disablekey] = false; 
        }
        continue;
      }
      //ONにするスキル要素
      const elem = (() => {
        const SkillResult = Root[!Key.includes("Level") ? Key : Key.split("Level")[0]];

        //新設：武器種が一致しない場合は除外
        const WepCheck = SkillResult?.Wepons && !SkillResult.Wepons?.includes(NewData.OtherInfo.Wepon);
        const SubWepCheck = SkillResult?.SubWepons && !SkillResult.SubWepons?.includes(NewData.OtherInfo.SubWepon);
        if (WepCheck || SubWepCheck) {
          ResultKey = ResultKey.filter(FilKey => !FilKey === Key);
          return null;
        }
        
        //レベル表記のないものはそのまま返却する。
        if (Key.match(/Level(\d{2}|\d{1}).*/g) === null) return Root[Key];
        try {
          //レベル変更適用
          const [Name, Lv] = Key.split("Level");
          const [FirstLv, SecondLv, TherdLv] = Lv.includes("@") ? Lv.split("@").map(Key => Number(Key)) : [Number(Lv), 0, 0];

          const LvResutlt = {
            Lv: FirstLv,
            SecondLv: SecondLv,
            TherdLv: TherdLv,
          };

          SkillResult.SwitchData(LvResutlt, false);

          return SkillResult;          
        } catch (error) {
          console.error(error);
          return null;
        }
      })()

      if (!elem) continue;

      //適用に変更
      elem.IsActive = true;

      //IsCheckerActive持ちはBaseCulclation側で処理する。
      if (elem["IsCheckerActive"] !== undefined)continue;

      //OtherInfo再設定
      if (elem["Root"]  && elem["Root"]  !== "") {
        const RootAns = [false, null, undefined, ""].includes(elem["RootValue"]);
        if (RootAns === true) {
          Data.OtherInfo[elem["Root"]] = elem.Lv || true;
        } else {
          Data.OtherInfo[elem["Root"]] = elem.RootValue;
        }
      }

      //PartialAll適用値設定
      MainMethod.MargeData([elem.Base], Values);
    }
    //キー修正
    //修正後のキー情報はhtmlの要素指定に使用
    NewData[RootName] = ResultKey.map(v => v.replace(/Level(\d{2}|\d{1}).*/g, ""));
    return Values;
  },
  //指定のリストアイテムを選択
  _SelectionSeach: (elem, value) => {
    const Seach = (Target) => {
      if (Target.value == value) {
        Target.selected = true;
        return true;
      }
      return false;
    }
    for (let i = 0; i < elem.children.length; i++){
      const target = elem.children[i];
      if (target.tagName === "OPTGROUP") {
        for (let y = 0; y < target.children.length; y++){
          const optlist = target.children[y];
          if (Seach(optlist)) return;
        }
        continue;
      }
      if (Seach(target)) return;
    }
  },
}
/** メニューのレンダリング要素を記述 */
const RenderElemet = {
  Top: `
    <p class="MenuContent_Top_UpdateArchive">★更新履歴の確認</p>
    <p class="MenuContent_Top_Manual">★マニュアル</p>
    <h3 class="MenuContent_Top_Title">サンプルデータ</h3>
    <p class="MenuContent_Top_Text">サンプル装備セットの参照</p>
    <h3 class="MenuContent_Top_Title">セーブデータ</h3>
    <p class="MenuContent_Top_Text">データの保存、呼び出し、参照</p>
    <h3 class="MenuContent_Top_Title">サブシステム</h3>
    <p class="MenuContent_Top_Text">登録系のシステム</p>
    <h3 class="MenuContent_Top_Title">リンク</h3>
    <p class="MenuContent_Top_Text">トーラムのツール、サイト紹介</p>
    <h3 class="MenuContent_Top_Title">データ管理</h3>
    <p class="MenuContent_Top_Text">データ管理、共有情報の設定</p>
    <h3 class="MenuContent_Top_Title">設定</h3>
    <p class="MenuContent_Top_Text">入力方法、表示内容の設定</p>
  `,
  Sample: `
    <p class="MenuContent_Sample_Text">サンプルを選択してください。</p>
    <select name="sampledata" id="MenuContent_Sample_Selector">
      <option value="HB">槍</option>
      <option value="OH">剣盾</option>
      <option value="TH">両手剣</option>
      <option value="DS">双剣</option>
      <option value="BW">弓</option>
      <option value="BG">自動弓</option>
      <option value="SF">杖</option>
      <option value="KTN">抜刀剣</option>
      <option value="MA">手甲</option>
    </select>
    <button type="button" id="MenuContent_Sample_Button">読込</button>
    <p class="MenuContent_Sample_Text">サンプルデータは4スロ構成です。</p>
    <p class="MenuContent_Sample_Info"></p>
  `,
  Save: `
    <div class="MenuContent_Save_SelectArea">
      <p class="MenuContent_Save_Text">
        セーブデータを選択してください。
      </p>
      <select name="saveselector" id="MenuContent_Save_SaveSelector">
      </select>
      <input type="text" class="NoneText" id="MenuContent_Save_ChangeTitle">
      <ul class="Flex SaveList">
        <li class="SaveList_Item" data-work="Load">読み込み</li>
        <li class="SaveList_Item" data-work="UpDate">更新</li>
        <li class="SaveList_Item" data-work="NameChange">名称変更</li>
        <li class="SaveList_Item" data-work="Delete">削除|ᐕ)…</li>
        <li class="SaveList_Item" data-work="Modify">リストの入れ替え</li>
        <li class="SaveList_Item" data-work="Share">セーブデータの共有</li>
      </ul>
    </div>
    <div class="SaveShareArea">
      <p class="Config_Text">
        入手したセーブ共有コード使用してセーブデータを追加します。
      </p>
      <input type="text" class="SaveShare_Input">
      <button type="button" class="SaveShare_SearchBtn" value="Check">読み込み</button>
    </div>
    <div class="MenuContent_Save_NewArea">
      <p class="MenuContent_Save_NewTitleText">
        新規登録は以下にタイトルを入力し、<br>
        【新規登録】をクリックしてください。<br>
        ※空欄の場合は自動的に名称が入ります。
      </p>
      <input type="text" id="MenuContent_Save_NewTitle">
      <p class="SaveList_Item2">新規登録</p>
    </div>
    <p class="MenuContent_Save_Info"></p>
  `,
  SubSystem: `
  <p class="SubSystemLinkTitle" data-value="UserCustom">プリセットカスタム</p>
  <p class="SubSystemText">
    任意のプリセットを登録します。
  </p>
  <p class="SubSystemLinkTitle" data-value="BuffCustom">バフスキルカスタム</p>
  <p class="SubSystemText">
    任意のバフスキルを登録します。
  </p> 
  <p class="SubSystemLinkTitle" data-value="EnemyCustom">敵カスタム</p>
  <p class="SubSystemText">
    任意のモンスターを登録します。
  </p> 
  `,
  LinkSite: `
    <div class='Link_Compornent'>
    <a href="https://toram.adventurer-s-gadget.com/" />
      <div class='Flex'>
        <img src="picture/ToramGadget.png" class="Link_Picture" alt="ToramGadget">
        <h2 class='Link_Title Link_Title_ToramGadget'>Toram Gadget</h2>    
      </div>
    </a>
    <p class='Link_Description'>
      トーラムのツールを作成されているサイトです。</br>
      Lettuce(日記シミュレーター)等が公開されています。
    </p>
    </div>
    <div class='Link_Compornent'>
    <a href="http://rinriko.starfree.jp/" />
      <div class='Flex'>
        <img src="picture/rinriko.png" class="Link_Picture" alt="りんりこ*くろーぜっと">
        <h2 class='Link_Title Link_Title_ToramGadget'>りんりこ⋆くろーぜっと</h2>    
      </div>
    </a>
    <p class='Link_Description'>
      装備品の色情報が確認できるサイトです。</br>
      武器、装備品の他レジスタやボス情報も閲覧できます。
    </p>
    </div>    
  `,
  DataConfig: `
    <p class="Config_MainText">現在のデータ</p>
    <div class="Config_DataConfigNowPreview">
      <div class="Config_DataConfigNowPreview_ViewNeme Flex">
        <span>名称：</span>
        <span>メインデータ</span>
      </div>
      <div class="Flex">
          <span>データ作成日：</span>
          <span data-type="AppendDate">2022/10/29</span>
        </div>
      <div class="Config_DataConfigNowPreview_CountInfos Flex">
        <div class="Config_DataConfigNowPreview_CountInfo Flex">
          <span>セーブデータ：</span>
          <span data-type="SaveCount">7個</span>
        </div>
        <div class="Config_DataConfigNowPreview_CountInfo Flex">
          <span>カスタム装備品：</span>
          <span data-type="EquipmentCount">58個</span>
        </div>
      </div>
      <div class="Config_DataConfig_Options">
      </div>
      <div class="Config_DataConfigNowPreview_ChangeBtns Flex">
        <button type="button" value="change">名称の変更</button>
        <button type="button" value="delete">データ削除</button>
        <button type="button" value="share">共有する</button>
      </div>
    </div>
    <div class="Config_DataConfig_ComponentSelectors Flex">
      <span>データの変更</span>
      <select class="ExtensionCompornentSelector"></select>
    </div>
    <p class="Config_MainText">データの追加</p>
    <div class="Config_DataConfigAppends Flex">
      <span class="Config_Text">空のサブデータを追加</span>
      <button type="button" id="Config_DataConfig_AppendBtns_EmptyData">追加</button>
    </div>
    <div class="Config_DataConfigAppends Flex">
      <span class="Config_Text">コードからデータを取得</span>
      <button type="button" id="Config_DataConfig_AppendBtns_ShareCode">取得</button>
    </div>
    <p class="Config_MainText" id="configtext">管理</p>
    <div class="Config_DataCongig_SyncEnableArea">
      <div class="Config_DataConfigAppends Flex">
        <span class="Config_Text">同期コードの確認</span>
        <button type="button" id="Config_DataConfig_SyncBtns_ShowCode">確認</button>
      </div>
      <!-- <div class="Config_DataConfigAppends Flex">
        <span class="Config_Text">データ書き換えの提案</span>
        <button type="button" id="Config_DataConfig_SyncBtns_SyncRequest">提案</button>
      </div>
      <div class="Config_DataConfigAppends Flex">
        <span class="Config_Text">提案内容の承認</span>
        <button type="button" id="Config_DataConfig_SyncBtns_SyncApproval">承認?</button>
      </div> -->
      <div class="Config_DataConfigAppends Flex">
        <span class="Config_Text">同期の解除</span>
        <button type="button" id="Config_DataConfig_SyncBtns_EndSync">解除</button>
      </div>    
    </div>
    <div class="Config_DataCongig_DisableMainArea">
      <div class="Config_DataConfigAppends Flex">
        <span class="Config_Text">ユーザーカスタムを取得</span>
        <button type="button" id="Config_DataConfig_GetBtns_CustomEquipments">取得</button>
      </div>
      <div class="Config_DataConfigAppends Flex">
        <span class="Config_Text">メインの入力設定を取得</span>
        <button type="button" id="Config_DataConfig_GetBtns_MainConfig">取得</button>
      </div>      
    </div>
      `,
  Config: `
    <p class="Config_MainText">前回の続きから始める</p>
    <p class="Config_Text">
      有効の場合は、再閲覧時最後に保存された入力値の状態で表示されるようになります。
    </p>
    <div class="RADIOSET">
      <input type="radio" id="newsavestart1" class="NewSaveSelect _radio" name="newsavestart" value="On" checked>
      <label for="newsavestart1" class="Config_SelectText _label _cherry">有効</label>
      <input type="radio" id="newsavestart2" class="NewSaveSelect _radio" name="newsavestart" value="Off">
      <label for="newsavestart2" class="Config_SelectText _label _gray">無効</label>
    </div>
    <p class="Config_MainText">サイトのカラーテーマ</p>
    <p class="Config_Text">OS設定に連動、または強制的に設定を行います。</p>
    <div class="RADIOSET">
      <input type="radio" id="sitetemacolors1" class="SiteColorSelect _radio" name="sitetemacolors" value="OSColor">
      <label for="sitetemacolors1" class="Config_SelectText _label _pinkgold">OS連動</label>    
      <input type="radio" id="sitetemacolors2" class="SiteColorSelect _radio" name="sitetemacolors" value="Light">
      <label for="sitetemacolors2" class="Config_SelectText _label _white">ライト</label>
    </div>
    <div class="RADIOSET">
      <input type="radio" id="sitetemacolors3" class="SiteColorSelect _radio" name="sitetemacolors" value="Dark">
      <label for="sitetemacolors3" class="Config_SelectText _label _bluehawaii">ダーク</label>    
      <input type="radio" id="sitetemacolors6" class="SiteColorSelect _radio" name="sitetemacolors" value="Cyber">
      <label for="sitetemacolors6" class="Config_SelectText _label _bluehawaii">サイバー</label>
      <input type="radio" id="sitetemacolors7" class="SiteColorSelect _radio" name="sitetemacolors" value="Cyber2">
      <label for="sitetemacolors7" class="Config_SelectText _label _bluehawaii">サイバー2</label>
    </div>  
    <div class="RADIOSET">
      <input type="radio" id="sitetemacolors4" class="SiteColorSelect _radio" name="sitetemacolors" value="Carrot">
      <label for="sitetemacolors4" class="Config_SelectText _label _bluehawaii">キャロン</label>
      <input type="radio" id="sitetemacolors5" class="SiteColorSelect _radio" name="sitetemacolors" value="CarrotW">
      <label for="sitetemacolors5" class="Config_SelectText _label _bluehawaii">キャロメイ</label>
    </div>
    <p class="Config_MainText">数値入力モード</p>
    <p class="Config_Text">
      数値入力方法を変更できます。
    </p>
    <div class="RADIOSET">
      <input type="radio" id="InputModeSelect1" class="InputModeSelect _radio" name="InputModeSelect" value="0">
      <label for="InputModeSelect1" class="Config_SelectText _label _pinkgold">デフォルト</label>
      <input type="radio" id="InputModeSelect2" class="InputModeSelect _radio" name="InputModeSelect" value="1">
      <label for="InputModeSelect2" class="Config_SelectText _label _bluehawaii">パレット1</label>
      <input type="radio" id="InputModeSelect3" class="InputModeSelect _radio" name="InputModeSelect" value="2">
      <label for="InputModeSelect3" class="Config_SelectText _label _cherry">パレット2</label>
    </div>
    <div class="RADIOSET">
      <input type="radio" id="InputModeSelect5" class="InputModeSelect _radio" name="InputModeSelect" value="4">
      <label for="InputModeSelect5" class="Config_SelectText _label _cherry">パレット3</label>
    </div>
    <p class="Config_MainText">装備品選択モード</p>
    <p class="Config_Text">
      装備品選択時の表示方法を変更できます。
    </p>
    <div class="RADIOSET">
      <input type="radio" id="FakeSelectorModeSelect1" class="FakeSelectorModeSelect _radio" name="FakeSelectorModeSelect" value="0">
      <label for="FakeSelectorModeSelect1" class="Config_SelectText _label _pinkgold">クラシック</label>
      <input type="radio" id="FakeSelectorModeSelect2" class="FakeSelectorModeSelect _radio" name="FakeSelectorModeSelect" value="1">
      <label for="FakeSelectorModeSelect2" class="Config_SelectText _label _bluehawaii">一覧表示</label>
      <input type="radio" id="FakeSelectorModeSelect3" class="FakeSelectorModeSelect _radio" name="FakeSelectorModeSelect" value="2">
      <label for="FakeSelectorModeSelect3" class="Config_SelectText _label _cherry">ランキング</label>
    </div>
    <div class="FakeSelectorRankSelectors">
      <div class="Flex">
        <span>優先度1</span>
        <select data-rank="1"></select>
      </div>
      <div class="Flex">
        <span>優先度2</span>
        <select data-rank="2"></select>
      </div>
      <div class="Flex">
        <span>優先度3</span>
        <select data-rank="3"></select>
      </div>
    </div>
    <p class="Config_MainText">装備－クリスタ連携機能</p>
    <p class="Config_Text">
      装備品とクリスタをセットで変更できるようになります。
    </p>
    <div class="RADIOSET">
      <input type="radio" id="crystalset1" class="CrystalsetSelector _radio" name="crystalset" value="1">
      <label for="crystalset1" class="Config_SelectText _label _cherry">有効</label>
      <input type="radio" id="crystalset2" class="CrystalsetSelector _radio" name="crystalset" value="0" checked>
      <label for="crystalset2" class="Config_SelectText _label _gray">無効</label>
    </div>
    <p class="Config_MainText">装備セットダメージ連携機能</p>
    <p class="Config_Text">
      装備品と装備品内クリスタを1つのセットとして<br>
      装備品同士のダメージ比較を行います。<br>
      ※クリスタ連携機能が有効化時のみ機能します。
    </p>
    <div class="RADIOSET">
      <input type="radio" id="equipmentcrystalset1" class="EquipmentCrystalsetSelector _radio" name="equipmentcrystalset" value="1">
      <label for="equipmentcrystalset1" class="Config_SelectText _label _cherry">有効</label>
      <input type="radio" id="equipmentcrystalset2" class="EquipmentCrystalsetSelector _radio" name="equipmentcrystalset" value="0" checked>
      <label for="equipmentcrystalset2" class="Config_SelectText _label _gray">無効</label>
    </div>
    <p class="Config_MainText">武器プロパ登録</p>
    <p class="Config_Text">
      装備品に武器の性能情報を登録します。<br>
      装備変更時、比較時に情報が反映されるようになります。<br>
    </p>
    <div class="RADIOSET">
      <input type="radio" id="wepattributeset1" class="WepAttributeSetSelector _radio" name="wepattributeset" value="1">
      <label for="wepattributeset1" class="Config_SelectText _label _cherry">有効</label>
      <input type="radio" id="wepattributeset2" class="WepAttributeSetSelector _radio" name="wepattributeset" value="0" checked>
      <label for="wepattributeset2" class="Config_SelectText _label _gray">無効</label>
    </div>
    <p class="Config_MainText">PTバフスキル優先表示設定</p>
    <p class="Config_Text">
      PT系バフスキルの表示優先度を指定します。<br>
      有効にした場合は上位に表示されるようになります。<br>
    </p>
    <div class="RADIOSET">
      <input type="radio" id="buffskillrankselector1" class="BuffSkillRankSelector _radio" name="buffskillrankselector" value="1">
      <label for="buffskillrankselector1" class="Config_SelectText _label _cherry">有効</label>
      <input type="radio" id="buffskillrankselector2" class="BuffSkillRankSelector _radio" name="buffskillrankselector" value="0" checked>
      <label for="buffskillrankselector2" class="Config_SelectText _label _gray">無効</label>
    </div>
    <p class="Config_MainText">自由入力欄4-7非表示</p>
    <p class="Config_Text">
      自由入力欄4-7を非表示にします。<br>
      <span style="color:var(--RedGrad3);">4-7に設定している情報は消えません!</span><br>
    </p>
    <div class="RADIOSET">
      <input type="radio" id="hideequipmentselector1" class="HideEquipmentSelector _radio" name="hideequipmentselector" value="1">
      <label for="hideequipmentselector1" class="Config_SelectText _label _cherry">有効</label>
      <input type="radio" id="hideequipmentselector2" class="HideEquipmentSelector _radio" name="hideequipmentselector" value="0" checked>
      <label for="hideequipmentselector2" class="Config_SelectText _label _gray">無効</label>
    </div>
  `
}
/** メニューのイベントを記述 */
const RenderEvent = {
  Top: async () => {
    Judey.$cls('ArchiveMenu_Info').Child("p").Text("※LocalStorage未対応の場合は機能が制限されます。")
      .Style("color:red;");
    
    Judey.$cls("MenuContent_Top_UpdateArchive").Event("click", async () => {
      const res = await import("./UpdateArchive.min.js" + "?" + Date.now());
      res.ViewArchive(false);
    });
    Judey.$cls("MenuContent_Top_Manual").Event("click", () => window.location.href = "Manual");
  },
  Sample: () => {
    const Selector = Judey.id("MenuContent_Sample_Selector");
    Judey.$id("MenuContent_Sample_Button")
      .Event("click", async (_) => {
        Method.InfoRender("読み込み中…", false);
        CreateLoding();
        const res = await import(`../SampleData/${Selector.value}.js`);
        Judey.$cls("Reference_Back").Rem();
        Repair.DataReflesh(res.Data);
        Method.InfoRender("読み込み完了しました。", true);

        Method.SendCapturedSaveData_OnlySend();
      })
  },
  Save: () => {
    const DataList = Method.GetList();
    const NoDataList = Method.GetNoDataList();
    const DataSelector = Judey.$id("MenuContent_Save_SaveSelector");
    const SelectList = Judey.$cls("SaveList_Item");
    
    /**セーブ画面を再描画する。 */
    const MenuReset = (Text, AfterFunc) => {
      Render(Judey.cls("ArchiveMenu_Contents"), "Save");
      Method.InfoRender(Text, true);

      if (AfterFunc !== undefined && typeof (AfterFunc) === "function") AfterFunc();
    }    
    
    const DataLoad = Values => {
      const ResData = Method.GetData(Number(Values[0]));
      const Ans = Repair.DataReflesh(ResData);
      if (Ans === false) {
        Method.Delete(Number(Values[0]));
        Method.SetSaveTarget(1);
        MenuReset("ロードできません。不正参照の為データは削除されました。");
      }
      Method.SetSaveTarget(Values[0]);
      Method.SendCapturedAllData_OnlySend();
      Method.InfoRender(`${Values[1]} を呼び出しました。`, true);
    }
    /**
     * 
     * @param {[Number,String,DataValue]} Values 
     */
    const DataUpDate = Values => {
      MainRender.CheckAnswer(
        "更新してよろしいですか?",
        false,
        Answer.YESNo,
        () => {
          if (Method.Save(Values[2], Values[1], Values[0])) {
            Method.SetSaveTarget(Values[0]);
            Method.SendCapturedAllData_OnlySend();
            Method.InfoRender("更新しました。", true);
          } else {
            Method.InfoRender("保存できませんでした。", false);
            window.location.reload();
            return;
          }
        },
        ()=>Method.InfoRender("キャンセルしました。", true)
      )
    }
    const NameChange = (DataNo,NowName) => {
      MainRender.CheckAnswer(`
          <p class=''>現在の名称：${NowName}<br>新しい名称を入力してください<br>空欄の場合はそれっぽい名称が勝手に入ります。</p>
          <input type="text" value="" id="SaveDataNameChange"></input>
        `,
        false,
        Answer.UpdateCancel,
        () => {
          DataNo = Number(DataNo);
          const NewName = MainMethod.CreateSaveName(Judey.$id("SaveDataNameChange").InpText());
          const Result = Method.GetData(DataNo);

          if (Method.Save(Result, NewName, DataNo)) {
            Method.InfoRender("更新しました。", true);
            Method.SendCapturedAllData_OnlySend();
            DataSelector.$Nquery(`option[value="${DataNo}"]`).Text(NewName);

          } else {
            Method.InfoRender("保存できませんでした。", false);
            window.location.reload();
            return;
          }
        })
      }
    const DataDelete = (Num,Title) => {
      MainRender.CheckAnswer(
        `『${Title}』 を削除します。<br>この操作は取り消せません。<br>本当に実行しますか?`,
        true,
        Answer.YESNo,
        () => {
          Method.Delete(Number(Num));
          Method.SetSaveTarget(1);
          Method.SendCapturedAllData_OnlySend();
          MenuReset("削除しました。");          
        },
        () => {
          Method.InfoRender("キャンセルしました。", true);
          Judey.$cls("Config_ChangeAnsArea").Rem();
        })
    }

    const ModifySaveList = () => {
      const Save = new ModifySave();

      const elem = Judey.$Element("div", "", "Reference_Back");
      elem.AppendLast(`
        <div class='ModifySave_Frame'>
        <p class='ModifySave_TopText'>ボタンで名称の順番を入れ替え<br>『変更する』で内容を確定させます。</p>
          <ul class='ModifySaveList'></ul>
          <div class='Flex'>
            <button type="button" class='ModifySaveBtn' data-mode="change">変更する</button>
            <button type="button" class='ModifySaveBtn' data-mode="cancel">キャンセル</button>          
          </div>
        </div>
      `)
      
      const ListElem = elem.$Ncls("ModifySaveList");
      const SaveList = Save.GetSaveNames();
      for (let i = 0; i < SaveList.length; i++){
        ListElem.AppendLast(
          `<li class='ModifySaveListItem Flex' data-key="${i}">
            <span class='ModifySaveListItem_Text'>${SaveList[i]}</span> 
            <div class='ModifySaveListItem_Icon' data-modify="up">⇧</div>
            <div class='ModifySaveListItem_Icon' data-modify="down">⇩</div>
          </li>`
        );
      }
      Judey.$tag("form").AppendLast(elem);
      
      Judey.$cls("ModifySaveListItem_Icon").Event("click", (e) => {
        const ListNo = Number(e.target.parentElement.dataset.key);
        const ModifyMode = e.target.dataset.modify;
        const IsUpModyfy = ModifyMode === "up";

        if (ListNo === 0 && IsUpModyfy) return;
        if (ListNo === (SaveList.length - 1) && !IsUpModyfy) return;
        
        Save.ListUpTargetNo(ListNo,IsUpModyfy);

        const ModifyNo = IsUpModyfy ? -1 : 1;
        const BaseElem = Judey.$elem(e.target.parentElement);
        const DownTargetElem = Judey.$query(`.ModifySaveListItem[data-key="${ListNo + ModifyNo}"]`);
        
        if(IsUpModyfy)
          DownTargetElem.AppendBefore(BaseElem);
        else
          DownTargetElem.AppendAfter(BaseElem);
        
        //Key書換
        BaseElem.Attr({ "data-key": ListNo + ModifyNo });
        DownTargetElem.Attr({ "data-key": ListNo });

        //文字のエフェクト追加
        Judey.$cls("ModifySaveListItem_Text").RemClass("ModifySaveListItem_TextChange");
        const ChangeTarngetTexts = Judey.$query(`
          .ModifySaveListItem[data-key="${ListNo + ModifyNo}"] .ModifySaveListItem_Text`
        );
        ChangeTarngetTexts.Class("ModifySaveListItem_TextChange");
        setTimeout(() => ChangeTarngetTexts.RemClass("ModifySaveListItem_TextChange"), 600); 
      })
      
      Judey.$query(".ModifySaveBtn[data-mode='change']").Event("click", () => {
        MainRender.CheckAnswer(
          "変更を確定してよろしいですか？",
          false,
          Answer.YESNo,
          () => {
            Save.SetAllSave();
            Method.SendCapturedAllData_OnlySend();
            Judey.$cls("Reference_Back").Rem();
            MenuReset("セーブリストを更新しました。");
          },
        )
      })
      Judey.$query(".ModifySaveBtn[data-mode='cancel']").Event("click", () => {
        Method.InfoRender("キャンセルしました。", true);
        Judey.$cls("Reference_Back").Rem();
      })
    }

    /**セーブ共有最終共通メソッド */
    const SaveShare_CommonSet = (SaveData, SaveName, NowData) => {
      const TopText = NowData
        ? "現在の入力データをセーブ共有コードとして発行します。"
        : "現在選択しているセーブデータの共有コードを発行します。";
      
      const Text =
      `${TopText}
       セーブ名：${SaveName}
       発行してよろしいですか？
       ※コンボデータは共有されません。
     `;

     MainRender.CheckAnswer(Text, false, Answer.OKCancel,
       async () => { 
         const SendData = {
           SaveName: SaveName,
           SaveData: SaveData
         };
         
         const Result = await API("./API/IDpath_Share.php", SendData.Json());
         if (Result === false) {
           Method.InfoRender("設定できませんでした。");
           return;
         }

         MainRender.CheckAnswer(`
          <span class="Config_Text">コード:${Result["ID"]}</span>
          <button type="button" class="ClipCopy HandOver_Btn2">コピー</button>
          <span class="Config_Text" style="margin-left:5px" id="copyiedid"></span>
          <p class="Config_Text">共有先のサイトでこのコードを入力してください。</p>
          <p class="Config_Text" style="color:red">※このコードは繰り返し使用できますが<br>予告なく削除される場合があります。</p>   
        `,
        () => {
          Judey.$cls("ClipCopy").Event("click", async _ => {
            await navigator.clipboard.writeText(Result["ID"]);
            Judey.$cls("ClipCopy").Rem();
            Judey.$id("copyiedid").Text("コピーしました!");
          });        
        },
        Answer.CloseOnly
        );
       },
       () => {
         Method.InfoRender("キャンセルしました。", true);
     });
    }

    const SaveShare = (SaveNo, SaveName) => {
      if (NoDataList.length === 0) {
        Method.InfoRender("セーブ上限です。", true);
        return;
      }

      const SaveData = Method.GetData(SaveNo).Jparse();
      SaveShare_CommonSet(SaveData, SaveName);
    }
    
    if (!DataList) {
      Judey.$query(".MenuContent_Save_SelectArea *:not(.SaveList_Item[data-work='ShareNow'])").Class("NoneText");
      Judey.$cls("SaveList").RemClass("NoneText");

    } else {
      for (let i = 0; i < DataList.length; i++) {
        const values = DataList[i];
        DataSelector
          .Child("option")
          .Attr("value", String(values[0]))
          .Text(values[1]).Breaker();
      }

      //ターゲット指定
      Repair._SelectionSeach(DataSelector.Elem(), Method.GetSaveTarget());
      
      SelectList.Event("click", (e) => {
        const value = DataSelector.Elem().value;
        const valueName = DataSelector.Elem().selectedOptions[0].innerText;
        const Target = e.target.dataset.work;

        if (Target === "Load") DataLoad([value, valueName]);
        if (Target === "UpDate") DataUpDate([value, valueName, Repair.CreateJsonValues()]);
        if (Target === "NameChange") NameChange(value, valueName);
        if (Target === "Delete") DataDelete(value, valueName);
        if (Target === "Modify") ModifySaveList();
        if (Target === "Share") SaveShare(value, valueName);
      });
    }
    if (!NoDataList) {

      Judey.$query(".SaveShareArea,.MenuContent_Save_NewArea").Rem();
    } else {

      //共有データ取得
      Judey.$cls("SaveShare_SearchBtn").Event("click", async _ => {
        const Value = Judey.$cls("SaveShare_Input").InpText();
        Judey.$cls("SaveShare_Input").InpText("");
        
        if (typeof (Value) === "object" || String(Value).length !== 10) {
          Method.InfoRender("正しいキー情報を入力してください。");
          return;
        }

        CreateLoding();
        const Result = await API("./API/Fetch.php?item=2", Value);
        DeleteLoding();
        try {
          if (Result === false) {
            Method.InfoRender("コードに一致するデータがありませんでした。", true);
            return;
          }

          new ModifySave().SetAllSave();
          const ListNo = Method.GetNoDataList()[0];

          const FetchSaveData = Result["Data"][0].Jparse();
          if (!FetchSaveData["SaveName"] && !FetchSaveData["Toram_Data_Archive"]) {
            Method.InfoRender("コードに一致するデータがありませんでした。", true);
            return;
          }

          const { SaveName, SaveData } = FetchSaveData["SaveName"]
            ? FetchSaveData
            : { SaveName: "", SaveData: FetchSaveData["Toram_Data_Archive"] };
          
          const AppendSaveCheck = () => {
            MainRender.CheckAnswer("取得したデータを自身のセーブデータに登録しますか？", false, Answer.YESNo,
              () => {
                Method.Save(SaveData.Json(), SaveName, ListNo);
                MenuReset("セーブデータを保存しました。");
                Method.SendCapturedAllData_OnlySend();
              }
            )
          }
          
          const StorongSaveName = `
            <p>
              データを取得しました。<br>
              <span style="color:var(--RedGrad3);">名称：『${SaveName}』</span><br>
              このデータを読み込みますか？<br>
              読み込んだ場合、現在の入力中のデータに上書きされます。
            </p>
          `
          MainRender.CheckAnswer(StorongSaveName, false, Answer.YESNo,
            () => {
              Repair.DataReflesh(SaveData.Json());
              AppendSaveCheck();
            },
            () => AppendSaveCheck()
          );

        } catch (error) {
          Method.InfoRender("取得できませんでした。", true);
        }

      });
      //新規データ登録
      Judey.$cls("SaveList_Item2").Event("click", _ => {
        const SaveData = Repair.CreateJsonValues();
        const SaveTarget = NoDataList[0];
        const Name = (() => {
          const value = Judey.id("MenuContent_Save_NewTitle").value;
          return MainMethod.CreateSaveName(value);
        })();
        Method.Save(SaveData, Name, SaveTarget);
        Method.SetSaveTarget(SaveTarget);
        Method.SendCapturedAllData_OnlySend();

        MenuReset("データ登録しました。");
      })
    }
    if (!DataList && !NoDataList) {
      Info.Text("LocalStorage未対応。データ一時保存のみに制限されます。");
    }
  },
  SubSystem: () => {
    Judey.$cls("SubSystemLinkTitle").Event("click", async (e) => {
      if (IsLocalStorage === false) {
        alert("この機能は使用できません。");
        return;
      }
      const value = e.target.dataset.value;
      CreateLoding();
      const res = await import(Js_AtherSys);
      Judey.$cls("Reference_Back").Rem();
      const MenuArea = Judey.$cls("ArchiveMenuArea");
      const Icon = Judey.$cls("MenuIcon");
  
      MenuArea.Class("CloseMenu");
      setTimeout(() =>MenuArea.Class("NoneText"), 300);
      Icon.RemClass("CloseMenu");
      
      res.GoSystem(value);
  })
  },
  DataConfig: async () => {
    const Reset = () => Render(Judey.cls("ArchiveMenu_Contents"), "DataConfig");

    const LocalSave = await import(Js_LocalSave); 

    /**現在の表示を切り替える。 */
    const UpdateView = () => {
      const ViewAttributes = LocalSave.FetchViewComponent();
      //表示設定
      Judey.$query(".Config_DataConfigNowPreview_ViewNeme :nth-child(2)").Text(ViewAttributes.ComponentName);
      Judey.$query("span[data-type='AppendDate']").Text(ViewAttributes.AppendDate);
      Judey.$query(".Config_DataConfigNowPreview_CountInfo span[data-type='SaveCount']").Text(`${ViewAttributes.SaveCount}個`);
      Judey.$query(".Config_DataConfigNowPreview_CountInfo span[data-type='EquipmentCount']").Text(`${ViewAttributes.CustomEquipmentCount}個`);
      Judey.$cls("Config_DataConfig_Options").RemChild();
      //データ属性
      const DataType = ViewAttributes.DataAttribute === "MainData" ? "メインデータ"
        : ViewAttributes.DataAttribute === "SubData" ? "サブデータ"
          : "一時データ";
      //モード属性
      const ModeType = ViewAttributes.ModeAttribute === "MyData" ? ""
        : ViewAttributes.ModeAttribute === "SyncHost" ? "同期ホスト"
          : ViewAttributes.ModeAttribute === "SyncListener" ? "同期読取"
            : "";
      if (DataType !== "")
        Judey.$cls("Config_DataConfig_Options").AppendLast(`
          <p class="Config_DataConfig_OptionInfo">${DataType}</p>
        `);
      if (ModeType !== "")
        Judey.$cls("Config_DataConfig_Options").AppendLast(`          
          <p class="Config_DataConfig_OptionInfo">${ModeType}</p>
        `);

      const ComponentSet = LocalSave.FetchComponentSet();
    
      //データ選択リストの作成
      {
        
        Judey.$cls("ExtensionCompornentSelector").RemChild();
        ComponentSet.Components.forEach(component => {
          const selected = component["DataID"] == ComponentSet?.ViewAttributes["DataID"] ? "selected" : "";
          Judey.$cls("ExtensionCompornentSelector").AppendLast(`
            <option value="${component["DataID"]}" ${selected}>${component["ComponentName"]}</option>
          `);
        });      
      }   
      
      const View = ComponentSet.ViewAttributes;
      //一時データの場合
      if (View["DataAttribute"] === "TempData") {
        Judey.$query(".Config_DataConfigNowPreview_ChangeBtns button").Class("NoneText");
        Judey.$query(".Config_DataConfigNowPreview_ChangeBtns button[value='delete']").RemClass("NoneText");
      } else {
        Judey.$query("Config_DataConfigNowPreview_ChangeBtns button").RemClass("NoneText");
      }
      //同期系データの場合
      if (View["ModeAttribute"].includes("Sync")) {
        Judey.$cls("Config_DataCongig_SyncEnableArea").RemClass("NoneText");
      } else {
        Judey.$cls("Config_DataCongig_SyncEnableArea").Class("NoneText");
      }
      //メインデータ、同期リスナー場合
      if (View["DataAttribute"] === "MainData" || View["ModeAttribute"] === "SyncListener" || View["DataAttribute"] === "TempData") {
        Judey.$cls("Config_DataCongig_DisableMainArea").Class("NoneText");
      } else {
        Judey.$cls("Config_DataCongig_DisableMainArea").RemClass("NoneText");
      }
      if ((!View["ModeAttribute"].includes("Sync") && View["DataAttribute"] === "MainData") || View["DataAttribute"] === "TempData") {
        Judey.$id("configtext").Class("NoneText");
      } else {
        Judey.$id("configtext").RemClass("NoneText");
      }

    }

    UpdateView();

    //*----Events----------------------******
    //データ変更
    Judey.$cls("ExtensionCompornentSelector").Event("change", async e => {
      const id = e.target.value;
      await LocalSave.ChangeComponent(id, false);
      UpdateView();
    });

    //名称変更
    Judey.$query(".Config_DataConfigNowPreview_ChangeBtns button[value='change']").Event("click", async e => {
      const NewName = await MainRender.AsyncInputForm("変更後の名称を入力してください。");
      if (NewName.length === 0) return;

      LocalSave.RenameViewComponentName(NewName);
      UpdateView();
      Method.InfoRender("名称を更新しました。");
    });

    //データ削除
    Judey.$query(".Config_DataConfigNowPreview_ChangeBtns button[value='delete']").Event("click", async e => {
      const ViewAttributes = LocalSave.FetchViewComponent();
      if (ViewAttributes.DataAttribute === "MainData") {
        if (await MainRender.AsyncAnswer("メインデータを削除しますか?\n削除後の復元はできません。", Answer.OKCancel) === AnswerResult.Cancel) return;
        if (await MainRender.AsyncAnswer("本当に削除してよろしいですか?", Answer.OKCancel) === AnswerResult.Cancel) return;
        const LastAnswer = await MainRender.AsyncAnswer("サブデータも含めて削除しますか?", Answer.YesNoCancel);
        if (LastAnswer === AnswerResult.OK) {
          //本当にすべてのデータを削除
          Method.IsArchive = false;
          localStorage?.clear();

          await MainRender.AsyncAnswer("全てのデータを削除しました。\nサイトを再読み込みします。", Answer.CloseOnly);
          window.location.reload();

          return;
        } else if(LastAnswer === AnswerResult.NO) {
          //メインデータのみ削除
          for (let key in localStorage) {
            if (key === "Toram") continue;
            if (key === "Toram_ExtensionComponents") continue;
            if (key === "Toram_Data_IsArchive") continue;

            localStorage.removeItem(key);
          }
          
          //初期状態コピー
          const res = await import("../SampleData/BH.js");
          Repair.DataReflesh(res.Data);

          Method.RepairConfigAll();

          LocalSave.RenameViewComponentName("新しいメインデータ");
          LocalSave.ChangeComponent(ViewAttributes.DataID, false);

          await MainRender.AsyncAnswer("メインデータの情報を削除しました。");
          Reset();
        } else {
          Method.InfoRender("キャンセルしました。");
        }
      } else {
        //メインデータ以外
        if (await MainRender.AsyncAnswer("現在のデータを削除します。\nよろしいですか?", Answer.OKCancel) === AnswerResult.Cancel) return;

        if (ViewAttributes.DataAttribute === "SubData") {
          await LocalSave.DeleteComponent(Number(ViewAttributes.DataID));
        } else {
          await LocalSave.ChangeComponent(1, false);
        }

        await MainRender.AsyncAnswer("データを削除しました。", Answer.CloseOnly);
        Reset();
      }
    });

    //データ共有コードの発行
    Judey.$query(".Config_DataConfigNowPreview_ChangeBtns button[value='share']").Event("click", async e => {
      const elem = `
        <div style="text-align:left;margin:5px;1rem;">
          <p>どの共有機能を利用しますか?</p>
          <div style="margin-top:5px;">
            <div class="Flex">
              <p style="font-weight:bold;font-size:1.1rem;text-decoration:underline;">通常共有</p>
              <button type="button" 
                style="margin-left:1rem;width:4rem;background-color:var(--TrueColor);font-weight:bold;"
                class="SaveshareSelectorBtns" value="0">発行</button>
            </div>
            <p style="margin-left:1rem;">
              現在の入力データ、セーブデータ、入力設定を共有します。<br>
              発行されたコードを入力することで、データを取得することができます。<br>
              ※コードは1度しか使えません。
            </p>
          </div>
          <div style="margin-top:5px;">
            <div class="Flex">
              <p style="font-weight:bold;font-size:1.1rem;;text-decoration:underline;">セーブ共有(現入力共有)</p>
              <button type="button" 
                style="margin-left:1rem;width:4rem;background-color:var(--TrueColor);font-weight:bold;"
                class="SaveshareSelectorBtns" value="1">発行</button>
            </div>
            <p style="margin-left:1rem;">
              現在の入力データまたは特定のセーブデータを共有します。<br>
              発行されたコードを入力することで、データを取得することができます。<br>
              ※セーブデータの共有は『セーブデータ』から行ってください。
            </p>
          </div>
          <div style="margin-top:5px;">
            <div class="Flex">
              <p style="font-weight:bold;font-size:1.1rem;;text-decoration:underline;">同期共有</p>
              <button type="button" 
                style="margin-left:1rem;width:4rem;background-color:var(--TrueColor);font-weight:bold;"
                class="SaveshareSelectorBtns" value="2">発行</button>
            </div>
            <p style="margin-left:1rem;">
              現在の入力データ、セーブデータ、入力設定を共有します。<br>
              発行されたコードを入力することで、データを取得することができます。<br>
              同じ同期コード利用者同士で常に同じデータを共有して利用できるようになります。<br>
            </p>
          </div>
        </div>
      `;

      let IssueMode = null;
      await MainRender.AsyncAnswer(elem, Answer.CloseOnly, () => {
        Judey.$cls("SaveshareSelectorBtns").OnceEvent("click", e => {
          IssueMode = Number(e.target.value);
          Judey.$query(".Reference_Answer[value='0']").Dispatch("click");
        });
      });

      if (IssueMode === null) return;
      if (IssueMode === 0) {
        //共有コード発行

        const SaveTimer = Method.CodeStamp(true);
        //コード共有⇒1時間へ短縮
        if (SaveTimer !== null && Number(SaveTimer) > (Date.now() - 36 * 1e5)) {
          Method.InfoRender("生成上限です。時間を置いてお試しください", true);
          return;
        }

        const ans = await MainRender.AsyncAnswer("現在選択しているデータのすべてを共有するコードを発行します。\nコード発行後の変更状態は共有されません。\n現在の状態でコードを発行してよろしいですか?", Answer.OKCancel);
        if (ans !== AnswerResult.OK) {
          Method.InfoRender("キャンセルしました。");
          return;
        }

        CreateLoding();
        Method.CodeStamp();
        const ResultData = Method.GetLocalAll();

        const res = ResultData ? await API("./API/IDpath.php", ResultData) : false;
        Judey.$cls("Reference_Back").Rem();

        if (res === false) {
          Method.Render(Judey.cls("ArchiveMenu_Contents"), "Config");
          Method.InfoRender("生成できませんでした。", true);
          return;
        }   

        MainRender.CheckAnswer(`
          <span class="Config_Text">コード:${res["ID"]}</span>
          <button type="button" class="ClipCopy HandOver_Btn2">コピー</button>
          <span class="Config_Text" style="margin-left:5px" id="copyiedid"></span>
          <p class="Config_Text">共有先のサイトでこのコードを入力してください。</p>
          <p class="Config_Text" style="color:red">※このコードは一度のみ使用可能です。</p>   
        `,
        () => {
          Judey.$cls("ClipCopy").Event("click", async _ => {
            await navigator.clipboard.writeText(res["ID"]);
            Judey.$cls("ClipCopy").Rem();
            Judey.$id("copyiedid").Text("コピーしました!");
          });        
        },
        Answer.CloseOnly
        );
        
      } else if (IssueMode === 1) {
        //セーブ共有コード発行
        const UploadSaveName = await MainRender.AsyncInputForm(
          "現在の入力データをセーブデータとして共有します。\n表示させるセーブ名称を入力してください。",
          `
          <style>
            .AppendTemplateNameBtns{
              display:inline-block;
              margin:10px auto;
              just-contents:space-around;
            }
            .AppendTemplateNameBtns button{
              width:12rem;
              height:1.8rem;
            }
            button.BtnBase[value="0"]{
              background-color:var(--PinkGoldColor);
            }
             button.BtnBase[value="1"]{
              background-color:var(--BtnNewColor);
            }
          </style>
          <div class="AppendTemplateNameBtns Flex">
            <button type="button" class="BtnBase" value="0">それっぽい名称にする</button>
            <button type="button" class="BtnBase" value="1">12神の武器名称?にする</button>
          </div>           
          `,
          () => {
            Judey.$query(".AppendTemplateNameBtns button").Event("click", e => {
              Judey.$id("AsyncInputFormInputText")
                .InpText(e.target.value == 0 ? MainMethod.CreateSaveName() : MainMethod.CreateDataName())
                .Dispatch("change");
            });
          }
        );
        
        if (UploadSaveName.length === 0) return;
        const ans = await MainRender.AsyncAnswer(`セーブ名：『${UploadSaveName}』\n発行してよろしいですか。`, Answer.OKCancel);
        if (ans === AnswerResult.Cancel) {
          Method.InfoRender("キャンセルしました。");
          return;
        } 

        const UploadData = {
          SaveName: UploadSaveName,
          SaveData: Repair.CreateJsonValues().Jparse()
        };

        //
        CreateLoding();
        const Result = await API("./API/IDpath_Share.php", UploadData.Json());
        Judey.$cls("Reference_Back").Rem();

        if (Result === false) {
          Method.InfoRender("設定できませんでした。");
          return;
        }

        MainRender.CheckAnswer(`
          <span class="Config_Text">コード:${Result["ID"]}</span>
          <button type="button" class="ClipCopy HandOver_Btn2">コピー</button>
          <span class="Config_Text" style="margin-left:5px" id="copyiedid"></span>
          <p class="Config_Text">共有先のサイトでこのコードを入力してください。</p>
          <p class="Config_Text" style="color:red">※このコードは繰り返し使用できますが<br>予告なく削除される場合があります。</p>   
        `,
        () => {
          Judey.$cls("ClipCopy").Event("click", async _ => {
            await navigator.clipboard.writeText(Result["ID"]);
            Judey.$cls("ClipCopy").Rem();
            Judey.$id("copyiedid").Text("コピーしました!");
          });        
        },
        Answer.CloseOnly
        );
      } else if (IssueMode === 2) {
        //同期共有コード発行
        const elem = `
          <p>
            以下に注意事項を記載します。<br>
            このまま開始しても問題なければ<br>
            『はい』を選択してください。
          </p>
          <p style="font-size:0.8rem;text-align:left;margin-top:10px;color:crimson;">
            ・ローカルストレージがないブラウザではご利用できません。<br>
            ・数値の変更時にサーバーに現在の入力状態を送信します。<br>
            ・メニュー設定更新時に現在全ての入力状態を送信します。<br>
            ・サイト閲覧時にサーバーからデータを毎回取得します。<br>
            ・サーバーとデータのやり取りを行う都合上若干通信量が増えます。<br>
            ・同期は自発的に解除、管理者から解除を行わない限り解除されません。<br>
            ・この機能は予告なく削除される可能性があります。(データは消えない)<br>
          </p>
        `;
        if (await MainRender.AsyncAnswer(elem, Answer.OKCancel) !== AnswerResult.OK) return;

        CreateLoding();
        const Result = await Method.StartCapturedMode();
        Judey.$cls("Reference_Back").Rem();

        if (!Result) {
          Method.InfoRender("設定できませんでした。");
          return;
        }
        
        await MainRender.AsyncAnswer("設定完了しました。", Answer.CloseOnly);
        await Method.ViewCapturedID();
      }
    });

    //空のサブデータを作成
    Judey.$id("Config_DataConfig_AppendBtns_EmptyData").Event("click", async () => {
      const NewName = await MainRender.AsyncInputForm("サブデータの表示名称を入力してください。");
      if (NewName.length === 0) return;

      const id = await LocalSave.AppendEmptyComponent(NewName);
      
      if (await MainRender.AsyncAnswer("登録完了しました。\nサブデータに切替しますか?", Answer.YESNo)) {
        const CopyMainConfig = await MainRender.AsyncAnswer("メインデータの入力設定を引き継ぎますか?", Answer.YESNo);
        await LocalSave.ChangeComponent(id, CopyMainConfig);
      }
        
      Reset();
      Method.InfoRender("登録完了しました。");
    });

    //コードからデータを取得
    Judey.$id("Config_DataConfig_AppendBtns_ShareCode").Event("click", async () => {
      const DataTypeCheck = await MainRender.AsyncAnswer(`
        <p>
          選択してください。<br>
          『共有コード』または『セーブ共有コード』の場合<br>
          <span style='font-weight:bold;color:var(--RedGrad3);'>⇒≪はい≫</span><br>
          『同期共有コード』または『同期読取コード』の場合<br>
          <span style='font-weight:bold;color:var(--RedGrad3);'>⇒≪いいえ≫</span><br>
        </p>
      `, Answer.YesNoCancel);
      
      if (DataTypeCheck === AnswerResult.Cancel) {
        Method.InfoRender("キャンセルしました。");
        return;
      };

      let Code = "";
      let DataType;
      let FetchData = null;

      const elem = `
          <p>取得コードを入力してください。</p>
          <input type="text" id="AsyncInputFormInputText" style="width:20rem;"/>
          <p id="AsyncInputFormInputTextErr" style="color:var(--RedGrad3)"></p>      
      `;
    
      await MainRender.AsyncAnswer(elem, Answer.GoCancel,
        () => {
          Judey.$id("AsyncInputFormInputText").Event("change", e => Code = e.target.value);
        },
        async () => {
          /**データが無効である場合に実行する。 */
          const DisableCode = (text) => {
            Judey.$id("AsyncInputFormInputTextErr").Text(text);
            Judey.$id("AsyncInputFormInputText").InpText("");
            Code = "";
            FetchData = null;
            DataType = null;

            return false;
          }
          if (Code.length === 0) return DisableCode("入力なしで進めることはできません。");
          if (Code.length !== 10) return DisableCode("正しいコードを入力してください。");
          
          //1.共有/セーブ共有コード
          if (DataTypeCheck === AnswerResult.OK) {
            FetchData = await API("./API/Fetch.php?item=2", Code);

            if (!FetchData || (!location.href.includes("18394358") && FetchData["Data"][1] == "1"))
              return DisableCode("データが見つかりませんでした。");

            DataType =FetchData["Data"][1] == "2" ? "SaveShare" : "Share";
          }
          //2.同期コード
          if (DataTypeCheck === AnswerResult.NO) {
            FetchData = await Method.GetCapturedAllData(Code);
            DataType = "SyncShare";

            if (!FetchData) return DisableCode("データが見つかりませんでした。");
            FetchData = new SyncDataFetchResult(FetchData);
            DataType = FetchData.HostFetch() ? "SyncShare" : "SyncListener";
          }
        },
        () => Code = ""
      );
      
      if (Code.length === 0) return Method.InfoRender("キャンセルしました。");

      /**メイン、サブ、一時 */
      let SaveSelector;

      /**表示ベース */
      const FormElem = (appendelem) => `
             <style>
            .maintext{
              margin-top:5px;font-size:1.1rem;font-weight:bold;text-decoration:underline;
            }
          </style>
          <p>
            データを取得しました。<br>
            保存する形式を選択してください。
          </p>
          ${appendelem}   
      `;
      //共有コード
      if (DataType === "Share") {
        const elem = `
          <p class="maintext">メインデータ</p>
          <p>
            メインデータの情報を取得したデータに書き換えします。
          </p>
          <p class="maintext">サブデータ</p>
          <p>
            取得したデータを新しいサブデータとして追加します。
          </p>
          <p class="maintext">一時データ</p>
          <p>
            取得したデータを一時データとして追加します。<br>
            このデータはサイトの再読み込み時に削除されます。
          </p>
        `;
        const result = await MainRender.AsyncAnswer(FormElem(elem),Answer.SaveSelector1);   
        SaveSelector = result === AnswerResult.Select1 ? "MainData" :
          result === AnswerResult.Select2 ? "SubData" :
            "TempData";    
      }
      //セーブ共有コード
      if (DataType === "SaveShare") {
        const elem = `
          <p class="maintext">サブデータ</p>
          <p>
            取得したデータを新しいサブデータとして追加します。
          </p>
          <p class="maintext">一時データ</p>
          <p>
            取得したデータを一時データとして追加します。<br>
            このデータはサイトの再読み込み時に削除されます。
          </p>
        `;  
        
        const result = await MainRender.AsyncAnswer(FormElem(elem),Answer.SaveSelector2);   
        SaveSelector = result === AnswerResult.Select1 ? "SubData" :
          result === AnswerResult.Select2 ? "TempData" :
            "";   
        
        if (SaveSelector === "")return Method.InfoRender("キャンセルしました。");
      }
      //同期共有ホスト
      if (DataType === "SyncShare") {
        const elem = `
          <p class="maintext">メインデータ</p>
          <p>
            メインデータの情報を取得したデータに書き換えします。
          </p>
          <p class="maintext">サブデータ</p>
          <p>
            取得したデータを新しいサブデータとして追加します。
          </p>
        `;  
        
        const result = await MainRender.AsyncAnswer(FormElem(elem),Answer.SaveSelector3);   
        SaveSelector = result === AnswerResult.Select1 ? "MainData" :
          result === AnswerResult.Select2 ? "SubData" :
            "";   
        
        if (SaveSelector === "")return Method.InfoRender("キャンセルしました。");
      }
       //同期共有リスナー
       if (DataType === "SyncListener") {
        const elem = `
          <p class="maintext">サブデータ</p>
          <p>
            取得したデータを新しいサブデータとして追加します。
          </p>
        `;  
        
        const result = await MainRender.AsyncAnswer(FormElem(elem),Answer.SaveSelector4);   
        SaveSelector = result === AnswerResult.Select1 ? "SubData" :　"";   
        
        if (SaveSelector === "")return Method.InfoRender("キャンセルしました。");
      }


      
      const NewViewName = SaveSelector === "MainData" ? "メインデータ" :
        SaveSelector === "TempData" ? "一時データ"　
          : DataType === "SaveShare" ? (FetchData?.Data?.[0]?.Jparse()?.SasveName ?? "セーブ共有データ" )
            : await MainRender.AsyncInputForm("登録する表示名称を入力してください。");
      
      if (NewViewName === "" || await MainRender.AsyncAnswer("実行してよろしいですか?",Answer.YESNo) !== AnswerResult.OK) {
        Method.InfoRender("キャンセルしました。");
        return;
      };

      //データを登録する。
      await LocalSave.AppendNewComponents(FetchData, SaveSelector, DataType, NewViewName);  

      Reset();
      await MainRender.AsyncAnswer("登録完了しました。", Answer.CloseOnly);
    });

    //同期コードの確認
    Judey.$id("Config_DataConfig_SyncBtns_ShowCode").Event("click", async () => await Method.ViewCapturedID());

    //同期コードの解除
    Judey.$id("Config_DataConfig_SyncBtns_EndSync").Event("click", async () => {
      if (!await MainRender.AsyncAnswer("同期状態を解除してよろしいですか?\n解除した場合でも現在のデータはそのまま残ります。", Answer.OKCancel)) return;
      Method.EndCapturedMode();
      UpdateView();
      await MainRender.AsyncAnswer("同期を解除しました。",Answer.CloseOnly);
    });

    //同期読取からデータ更新提案を行う。(保留)
    Judey.$id("Config_DataConfig_SyncBtns_SyncRequest").Event("click", async () => { 
      const SendData = {
        Archive: Repair.CreateJsonValues(),
        Comment:"",
        UserID: localStorage.getItem("Toram").Jparse().UserID,
        Capture: "Request"
      };

      const elem = `
        <p>
          現在の入力データで更新申請します。※セーブは含みません。<br>
          ホストから承認を得られた場合はデータが書き換わります。<br>
          分かりやすいように変更内容を以下に記述してください。<br>
          ※空欄で進めることもできます。
        </p>
        <textarea style="width: 300px; height: 80px;"></textarea>
      `;

      if (!await MainRender.AsyncAnswer(elem, Answer.GoCancel, () => Judey.$id("synccommnet").Event("change", e => SendData.Comment = e.target.value))) return;
      if (!await MainRender.AsyncAnswer("提案内容をサーバーに送信します。\nよろしいですか?")) return;


      await API("./API/SendCaptured.php", SendData.Json());
      await MainRender.AsyncAnswer("実行しました。");
    });

    //データ更新提案に対してアクションを行う。(保留)
    Judey.$id("Config_DataConfig_SyncBtns_SyncApproval").Event("click", async () => { 
      const SendData = {
        Approval: ans === AnswerResult.OK,
        Comment:"",
        Capture: "Approval"
      };

      const elem = `
        <p>
          現在更新申請された入力データを表示しています。<br>
          承認した場合はこの内容で確定します。<br>
          却下した場合は申請の入力データを破棄します。<br>
          申請者にコメントを返す場合は以下に入力してください。
        </p>
        <textarea style="width: 300px; height: 80px;" id="synccomment"></textarea>
      `;

      const ans = await MainRender.AsyncAnswer(elem, Answer.Approval, () => Judey.$id("synccommnet").Event("change", e => SendData.Comment = e.target.value));
      if (ans === null) return;
      if (!await MainRender.AsyncAnswer("サーバーに送信します。\nよろしいですか?")) return;



      await API("./API/SendCaptured.php", SendData.Json());
      await MainRender.AsyncAnswer("実行しました。");
    });

    //カスタム情報をメインから取得
    Judey.$id("Config_DataConfig_GetBtns_CustomEquipments").Event("click", async () => {
      const comment = `<p>
        メインデータのカスタム装備品、カスタム敵情報をこのデータに追加します。<br>
        以下注意事項を確認し、実行して問題なければ『はい』を選択してください。<br>
        <span style="color:var(--RedGrad3);">・同名装備が存在した場合でも追加します。(重複名称適用有り)</span><br>
        <span style="color:var(--RedGrad3);">・全く同じ情報の場合はメインデータ側を適用します。</span><br>
        <span style="color:var(--RedGrad3);">・追加後の取り消し、追加装備品の一括削除はできません。</span><br>
      </p>`;

      if (!await MainRender.AsyncAnswer(comment, Answer.YESNo)) return;
      
      LocalSave.AppendMainCustom();
      Method.RepairConfigAll();

      UpdateView();
      await MainRender.AsyncAnswer("追加完了しました。", Answer.CloseOnly);
    });
    
    //入力設定をメインから取得
    Judey.$id("Config_DataConfig_GetBtns_MainConfig").Event("click", async () => {
      const comment = `<p>
        メインデータ入力設定をこのデータに適用します。<br>
        実行してよろしいですか?<br>
        ※メニューの『設定』でそれぞれ設定している項目です。
      </p>`;

      if (!await MainRender.AsyncAnswer(comment, Answer.YESNo)) return;
      
      LocalSave.SetMainConfig();
      Method.RepairConfigAll();

      UpdateView();
      await MainRender.AsyncAnswer("メインデータの入力設定を適用しました。", Answer.CloseOnly);
    });
  },
  Config: () => {
    //セーブ
    const elem = Judey.$cls("NewSaveSelect");
    for (let i = 0; i < elem.Elem().length; i++) {
      if (elem.Elem()[i].value === "On" && Method.IsArchive) {
        Judey.id("newsavestart1").checked = true;
      }
      if (elem.Elem()[i].value === "Off" && !Method.IsArchive) {
        Judey.id("newsavestart2").checked = true;
      }
    }
    elem.Event("change", e => {
      const value = e.target.value === "On" ? true : false;
      Method.IsArchiveData(value);
      Method.SendCapturedAllData_OnlySend();
    })
  
    //サイトカラー
    const NowSiteColorMode = localStorage.getItem("Toram_ColorMode");
    Judey.$cls("SiteColorSelect").RemAttr("checked");
  
    if (NowSiteColorMode === null)
      Judey.$query('.SiteColorSelect[value="Light"]').Attr({ checked: true });
    else
      Judey.$query(`.SiteColorSelect[value="${NowSiteColorMode}"]`).Attr({ checked: true });
    
    Judey.$cls('SiteColorSelect').Event("change", (e)=>{
      const Target = e.target.value;
      localStorage.setItem("Toram_ColorMode", Target);

      MainMethod.CheckColorMode();
      Method.SendCapturedAllData_OnlySend();
    })

    //入力モード
    const InputMode = localStorage?.getItem("Toram_InputNumMode");
    if (InputMode === null || InputMode == 0) 
      Judey.query('.InputModeSelect[value="0"]').checked = true;
    else if(InputMode == 1)
      Judey.query('.InputModeSelect[value="1"]').checked = true;
    else if(InputMode == 2)
      Judey.query('.InputModeSelect[value="2"]').checked = true;
    else if(InputMode == 3)
      Judey.query('.InputModeSelect[value="3"]').checked = true;
    else if(InputMode == 4)
      Judey.query('.InputModeSelect[value="4"]').checked = true;
        
    Judey.$cls('InputModeSelect').Event("change", (e) => {
      const Value = e.target.value;
      localStorage?.setItem("Toram_InputNumMode", Value);

      MainRender.PaletteSelector(Judey.$query("input[type='number']"));
      Method.SendCapturedAllData_OnlySend();
    })

    //装備品選択モード
    const FakeSelectorMode = MainMethod.GetFakeSelectorMode();
    const ChangeRankPreview = (value) => {
      if (value === 2) 
        Judey.$cls("FakeSelectorRankSelectors").RemClass("NoneText");
      else
        Judey.$cls("FakeSelectorRankSelectors").Class("NoneText");
  
    }
    Judey.query(`.FakeSelectorModeSelect[value='${FakeSelectorMode}']`).checked = true;
    Judey.$cls("FakeSelectorModeSelect").Event("change", e => {
      const Value = Number(e.target.value);
      MainMethod.SetFakeSelector(Value);
      Method.SendCapturedAllData_OnlySend();

      ChangeRankPreview(Value);
    });
    const FakeSelectorRankValues = MainMethod.GetFakeSelectorRanks();
    Judey.$query(".FakeSelectorRankSelectors select").EachElem((e, index) => {
      const Items = [
        ["Damege", "ダメージ"],
        ["ATK", "ATK"],
        ["MATK", "MATK"],
        ["HP", "HP"],
        ["MP", "MP"],
        ["ASPD", "攻撃速度"],
        ["CSPD", "詠唱速度"],
        ["SPD", "行動速度"],
        ["CriticalDamege", "クリティカルダメージ"],
        ["Critical", "クリティカル率"],
        ["HIT", "HIT"],
        ["Hate", "ヘイト"],
      ];

      const AppendTarget = Judey.$elem(e);
      AppendTarget.AppendLast(`<option value="-">なし</option>`);

      AppendTarget.Child("optgroup").Attr({ label: "降順" });
      Items.forEach(item => AppendTarget.AppendLast(`<option value="Difference${item[0]}">${item[1]}</option>`));
      AppendTarget.Breaker();

      AppendTarget.Child("optgroup").Attr({ label: "昇順" });
      Items.forEach(item => AppendTarget.AppendLast(`<option value="Difference${item[0]}_Asc">${item[1]}--昇順</option>`));
      AppendTarget.Breaker();
      
      AppendTarget.InpText(FakeSelectorRankValues[index]);
    });
    Judey.$query(".FakeSelectorRankSelectors select").Event("change", async e => {
      const Value = e.target.value;
      const Rank = e.target.dataset.rank;

      await MainMethod.SetFakeSelectorRank(Value, Rank);
      MainMethod.SetFakeSelectorRanksViewData();
    })
    ChangeRankPreview(FakeSelectorMode);

    //クリスタ連携
    const CrystalMode = MainMethod.CheckIsEnabedPartialCrystal();
    Judey.$cls("CrystalsetSelector").RemAttr("checked");
    if (CrystalMode === false) 
      Judey.$query(".CrystalsetSelector[value='0']").Attr({ checked: true });
    else
      Judey.$query(".CrystalsetSelector[value='1']").Attr({ checked: true });
    
    Judey.$cls("CrystalsetSelector").Event("change", (e) => {
      const value = e.target.value;
      MainMethod.CheckIsEnabedPartialCrystal(value);
      MainRender.PartialCrystal();
      MainRender.FakePreviewValue();
      Method.SendCapturedAllData_OnlySend();
    });

    //装備品クリスタセットダメージ比較連携
    const EquipmentCrystalSetMode = MainMethod.CheckIsEnabledEquipmentCrystalSetDamege();
    Judey.$cls("EquipmentCrystalsetSelector").RemAttr("checked");
    if (EquipmentCrystalSetMode === false) 
      Judey.$query(".EquipmentCrystalsetSelector[value='0']").Attr({ checked: true });
    else
      Judey.$query(".EquipmentCrystalsetSelector[value='1']").Attr({ checked: true });
    
    Judey.$cls("EquipmentCrystalsetSelector").Event("change", (e) => {
      const value = e.target.value;
      MainMethod.CheckIsEnabledEquipmentCrystalSetDamege(value);
      Method.SendCapturedAllData_OnlySend();
    });
  

    //装備品内武器情報登録機能
    const SetEquipmentPropertyMode = MainMethod.CheckEnableSetEquipmentWeponProperty();
    Judey.$cls("WepAttributeSetSelector").RemAttr("checked");
    if (SetEquipmentPropertyMode  === false) 
      Judey.$query(".WepAttributeSetSelector[value='0']").Attr({ checked: true });
    else
      Judey.$query(".WepAttributeSetSelector[value='1']").Attr({ checked: true });
    
    Judey.$cls("WepAttributeSetSelector").Event("change", (e) => {
      const value = e.target.value;
      MainMethod.CheckEnableSetEquipmentWeponProperty(value);
      MainRender.EquipmetIncludeProperty();
      Method.SendCapturedAllData_OnlySend();
    });

    //バフスキル表示優先度設定
    const BuffSkillRank = MainMethod.GetBuffSkillRank();
    Judey.$cls("BuffSkillRankSelector").RemAttr("checked");
    Judey.$query(`.BuffSkillRankSelector[value='${BuffSkillRank}']`).Attr({ checked: true });
    Judey.$cls("BuffSkillRankSelector").Event("change", async e => MainMethod.SetBuffSkillRank(e.target.value));

    //自由入力欄4-7非表示設定
    const HideEquipment = MainMethod.GetHideEquipment();
    Judey.$cls("HideEquipmentSelector").RemAttr("checked");
    Judey.$query(`.HideEquipmentSelector[value='${HideEquipment}']`).Attr({ checked: true });
    Judey.$cls("HideEquipmentSelector").Event("change", async e => MainMethod.SetHideEquipment(e.target.value));
  }
}

/**修正が必要なデータを修正する。 */
const Repair_MissData =  async (Text) => {
  MainRender.CheckAnswer(Text, false, Answer.OKOnly, () => {
    try {
      ///特定のカスタム装備品の削除
      const LocalData = MainMethod.GetMyLocal();
      const KareCrystalKeys = [];
      const DeleteEquipmentElements = {};

      //クリスタデータからカレリーフ削除
      LocalData.KeyEach(key => {
        if (key.includes("Cry_")) {
          LocalData[key].EntrieEach((itemkey, item) => {
            if (item["Name"] === "カレリーフ") {
              delete LocalData[key][itemkey];
              KareCrystalKeys.push(itemkey);
            }
          });
        }
      });

      //カスタム装備品のカスタムカレリーフをデフォルトカレリーフ(M109)に差し替え
      LocalData.KeyEach(key => {
        if (["Wepon", "Armor", "Addition", "Option"].includes(key)) {
          LocalData[key].KeyEach(itemkey => {
            const ItemData = LocalData[key][itemkey];
            if (KareCrystalKeys.includes(ItemData?.Crystal1)) LocalData[key][itemkey].Crystal1 = "M109";
            if (KareCrystalKeys.includes(ItemData?.Crystal2)) LocalData[key][itemkey].Crystal2 = "M109";
          });
        }
      });

      //現SelectionDataからカレリーフを削除する。
      SelectionData.Crystal.KeyEach(key => {
        SelectionData.Crystal[key].KeyEach(itemkey => {
          if (SelectionData.Crystal[key][itemkey]?.Name === "★カレリーフ")
            delete SelectionData.Crystal[key][itemkey];
        });
      });

      //重複装備データをチェックし、削除を行う。
      LocalData.KeyEach(key => {
        //敵、コンボスキルを除く
        if (key.includes("Combo") === false && key.includes("Enemy") === false) {
          const EquipTypeKey = key.includes("Cry_") ? "Crystal" : key;
          const CrystalType = key.replace("Cry_", "");
          const ItemNames = [];

          LocalData[key].Entries().sort((a, b) => Number(a[0]) - Number(b[0])).forEach(Item => {

            if (Item[1]?.Name !== undefined && ItemNames.includes(Item[1].Name)) {
              //既に同名装備品が含まれていた場合  
              try {
                delete LocalData[key][Item[0]];

                if (key.includes("Cry_")) {
                  delete SelectionData.Crystal[CrystalType][Item[0]];
                }else {
                  delete SelectionData[key][Item[0]];
                }

                DeleteEquipmentElements[EquipTypeKey]["★" + Item[1].Name].DeleteKeys.push(Item[0]);
              } catch(e) {

              }
            } else {
              //同名装備がない場合
              ItemNames.push(Item[1].Name);
              if (DeleteEquipmentElements[EquipTypeKey] === undefined) 
                DeleteEquipmentElements[EquipTypeKey] = {};
                

              if(DeleteEquipmentElements[EquipTypeKey]["★" + Item[1].Name] === undefined)
                DeleteEquipmentElements[EquipTypeKey]["★" + Item[1].Name] = {
                  Equipment: Item[1].New(),
                  EquipmentKey:Item[0],
                  DeleteKeys:[]
                };
            }
          });
        }
      });

      //重複対象でない要素の削除
      DeleteEquipmentElements.KeyEach(key => {
        DeleteEquipmentElements[key].KeyEach(itemkey => {
          if (DeleteEquipmentElements[key][itemkey]["DeleteKeys"]?.length === 0)
            delete DeleteEquipmentElements[key][itemkey];
        });
        if (DeleteEquipmentElements[key].Keys().length === 0)
          delete DeleteEquipmentElements[key];
      });
      
      MainMethod.SetMyLocal(LocalData);

      /**
       * 指定データからカスタムカレリーフをデフォルトカレリーフに差し替える。
       * 指定データから重複データをオリジナルに差し替える。
       * */
      const RepairData = (RefData) => {
        const Target = ["Wepon", "Armor", "Addition", "Option"];
        //装備品
        RefData.AdditionStatus.KeyEach(key => {
          if (Target.includes(key)) {
            const ItemData = RefData.AdditionStatus[key]?.Unit;
            if (KareCrystalKeys.includes(ItemData?.Crystal1)) RefData.AdditionStatus[key].Unit.Crystal1 = "M109";
            if (KareCrystalKeys.includes(ItemData?.Crystal2)) RefData.AdditionStatus[key].Unit.Crystal2 = "M109";
          }
        });
        //クリスタ
        RefData.AdditionStatus.Crystal.KeyEach(key => {
          if (RefData.AdditionStatus.Crystal[key].Json().includes("カレリーフ"))
            RefData.AdditionStatus.Crystal[key] = MainMethod.AddDataUnit(SelectionData.Crystal.Nomal.M109, "M109");
        });

        //重複装備品
        DeleteEquipmentElements.KeyEach(key => {
          if (key !== "Crystal") {
            const EquipmentName = RefData.AdditionStatus[key]?.Unit.Name;

            if (DeleteEquipmentElements[key][EquipmentName]) {

              const EquipmentSet = DeleteEquipmentElements[key][EquipmentName];

              RefData.AdditionStatus[key] = MainMethod.AddDataUnit(EquipmentSet.Equipment, EquipmentSet.EquipmentKey);
              RefData.AdditionStatus[key].Unit.Name = "★" + EquipmentName;
            } 
          } else {
            RefData.AdditionStatus.Crystal.KeyEach(crykey => {
              const EquipmentName = RefData.AdditionStatus.Crystal[crykey]?.Unit.Name;

              if (DeleteEquipmentElements[key][EquipmentName]) {
                const EquipmentSet = DeleteEquipmentElements[key][EquipmentName];
  
                RefData.AdditionStatus.Crystal[crykey] = MainMethod.AddDataUnit(EquipmentSet.Equipment, EquipmentSet.EquipmentKey);
                RefData.AdditionStatus.Crystal[crykey].Unit.Name = "★" + EquipmentName;
              } 
            });
          }
        });

        return RefData;
      }

      //セーブデータのデータを変換する。
      Method.GetList().forEach(ListItem => {
        const [SaveKey, SaveName] = ListItem;
        const SaveDataJson = Method.GetData(SaveKey);

        if (SaveDataJson !== null) {
          const SaveData = SaveDataJson.Jparse();
          RepairData(SaveData);

          Method.Save(SaveData.Json(), SaveName, SaveKey);
        }
      });

      //アーカイブデータを変換する。
      const ArchiveDataJson = Repair.CreateJsonValues();
      const ArchiveData = ArchiveDataJson.Jparse();
      
      RepairData(ArchiveData);
      Method.SaveNotList(ArchiveData.Json());
      
      //書き換えた現作業データを画面に再反映させる。
      Repair.DataReflesh(ArchiveData.Json());

      window.localStorage.setItem("Toram_LocalRepair", "1");

      //同期メソッド適用者はさらにデータ送信
      Method.SendCapturedAllData_OnlySend();

      MainRender.CheckAnswer("修復完了しました。", false, Answer.OKOnly);
    } catch (err) {
      MainRender.CheckAnswer("修復に失敗しました。\n" + err, false, Answer.OKOnly);
    }
  });
}

/**
 * 利用条件を満たしているときはセーブと自動ロードを行う。
 */
export const Start = async () => {
  if (!Method.IsAviableLocalStorage) return;
  
  const Mode = Method.CapturedMode();
  const ID = Method.CapturedID() ?? Method.ListenerCapturedID();
  let IsReplaceCapture = false;

  if (Mode !== "0" && ID !== null) {
    try {
      const Result = await Method.GetCapturedAllData();
      if (Result) {
        Method.SetCapturedAllData(Result);
        Method.SendCapturedSaveData();
        IsReplaceCapture = true;
      } else {
        Method.EndCapturedMode();
        IsReplaceCapture = false;
      }      
    } catch {
      IsReplaceCapture = false;
    }
  }
  if (!IsReplaceCapture && Method.IsArchive) {
    const JsonData = localStorage.getItem("Toram_Data_Archive");
    if (JsonData && JsonData.length > 50) {//50は仮数値。
        const ArchiveData = JSON.parse(JsonData);
      if (ArchiveData !== null && typeof ArchiveData !== "string") {
        Repair.DataReflesh(Method.GetArchiveData());
      }
    }
  }
  setInterval(() => {
    if (!Method.IsArchive) return;
    Method.SaveNotList(Repair.CreateJsonValues());
  }, 1e4);
  return;
}

/**同期モードを再設定する。 */
export const ReStartSyncMode = async () => {
  const Result = await Method.GetCapturedAllData();
  if (!Result) return Method.EndCapturedMode();

  Method.SetCapturedAllData(Result);
  Method.SendCapturedSaveData();
}
export const Render = Method.Render;
/** データを初期化する。 */
export const DataReset = async (IsErr = false) => {
  const res = await import("../SampleData/BH.js");
  Repair.DataReflesh(res.Data);
  if (IsErr) return;
  MainRender.CheckAnswer("初期化しました。", false, Answer.OKOnly);
}
/** 現在のデータを再度読み込む */
export const ReloadData = () => {
  Repair.DataReflesh(Repair.CreateJsonValues());
}
export const IsArchive = Method.IsArchive;
export const Archive = (IsArchive) => Method.IsArchive = IsArchive;
export const IsLocalStorage = Method.IsAviableLocalStorage;
export const GetNowJsonData = () => Repair.CreateJsonValues();
export const PartialCapturedSend = () => Method.SendCapturedSaveData_OnlySend();
export const AllCapturedSend = () => Method.SendCapturedAllData_OnlySend();

/**過去の適用ミスなどのデータを修復対応する。 */
export const RepairMiss_AllData = (Text) => Repair_MissData(Text);

/**現在の入力状態を強制的にアーカイブ保存する。 */
export const SaveNowData = () => {
  Method.SaveNotList(Repair.CreateJsonValues());
}

/**現在のローカル設定値の全モードを再適用する。 */
export const RepairConfigAll = () => Method.RepairConfigAll();

/**同期のKeyは変えずに送信メソッドのみ終了させる。 */
export const EndSync_NonUpdateLocalKey = () => {
  if (typeof Method.SendCapturedFunc === "function") {
    Judey.$query("select,input").RemEvent("change", Method.SendCapturedFunc);
    Judey.$query(".Epuipment_Listitem,input[type='radio'],.SetEquipmentPropertyButtons").RemEvent("click", Method.SendCapturedFunc);
    Method.SendCapturedFunc = null;
  }
}
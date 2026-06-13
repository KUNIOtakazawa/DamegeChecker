const RenderEnd = (Elem, HtmlText) => {
  Elem.insertAdjacentHTML("beforeend", HtmlText);
}

//消す要素群
const MainElems = Judey.$query([
  "PreviewList",
  "Preview",
  "MenuIcon",
  "PreviewWindows",
  "ArchiveMenuArea",
  "Main",
  "Footer",
].reduce((Ans, Now, i) => Ans + (i > 0 ? `,.${Now}` : `.${Now}`), ""));

const LoadElem = Judey.$cls("SystemLoad");  

/** システム開始 */
export const GoSystem = async (Target) => {
  //プレビュー系
  Judey.$cls("Preview").RemClass("ShowPreview");

  //LoadStart
  LoadElem.Class("StartSubSystem");
  await new Promise(_ => setTimeout(_, 300));
  //対象非表示
  MainElems.Style("").Class("NoneText");

  //ロード画面
  setTimeout(() => {
    Judey.$cls("AnotherSystems").RemClass("NoneText");
    LoadElem.RemClass("StartSubSystem");
  }, 500)

  
  const [HeaderColor, System] = Target === "UserCustom"
    ? ["Header_UserCustom", UserCustom]
    : Target === "EnemyCustom"
      ? ["Header_EnemyCustom", EnemyCustom]
      : ["Header_BuffCustom", BuffCustom]
  
  //ヘッダー色変更
  Judey.$cls("Header").Class(HeaderColor); 

  //起動
  System(); 

  //終了方法定義
  Judey.$cls("EndSubSystem").OnceEvent("click", async () => {
    EndSystem();
    const res = await import(Js_Archive);
    MainRender.Crystal();
    MainRender.ItemBuff();
    MainRender.Enemy();
    res.ReloadData();
    res.AllCapturedSend();

    Judey.$id(`Addition_OtherInfo-Other`).Dispatch("click");
    MainRender.PaletteSelector(Judey.$query("input[type='number']"));
  });
}

/** システム終了 */
const EndSystem = () => {
  Judey.$cls("Header").RemClass("Header_UserCustom,Header_EnemyCustom"); 
  Judey.$cls("SubSystem").RemChild();
  LoadElem.Class("ExitSubSystem");
  setTimeout(() => {
    Judey.$cls("Header").Style("");
    MainElems.Style("").RemClass("NoneText");
    Judey.$cls("AnotherSystems").Class("NoneText");
    Judey.$cls("PreviewWindows").Class("NoneText");
  }, 500)
  setTimeout(() => LoadElem.RemClass("ExitSubSystem"), 1000);
}

/** プリセットカスタム */
const UserCustom = () => {
  /** 登録以外選択時の認識用*/
  let IsDeleteMode = false;
  /** LocalStage側のルート情報 */
  let Targert = null;
  /**Equipmens GroupName */
  let TargetName = null;
  /** 登録時に設定されるアクセスキー情報 */
  let TargetKey = null;
  /** Equipment Name */
  let Name = null;
  /** Equipment Component */
  let ValueSet = null;
  /** 旧SelectionDataルート */
  let Old_Root = null;
  /** 変更/削除時に設定される旧アクセスキー情報 */
  let Old_TargetKey = null;
    
    
  //無駄な配列は消す。
  {
    const LocalItems_text = window?.localStorage.getItem("Toram_LocalItems");
    const LocalItems = LocalItems_text ? JSON.parse(LocalItems_text) : {};
    Object.keys(LocalItems).forEach(Key => {
      if (Object.keys(LocalItems[Key]).length === 0) delete LocalItems[Key];
    })
    window?.localStorage.setItem("Toram_LocalItems", JSON.stringify(LocalItems));
  }

  const AdditionElems = {
    "Other": MainMethod.GetEquipmentTabName(false,"Other"),
    "Other2": MainMethod.GetEquipmentTabName(false,"Other2"),
    "Other3": MainMethod.GetEquipmentTabName(false,"Other3"),
    "Other4": MainMethod.GetEquipmentTabName(false,"Other4"),
    "Other5": MainMethod.GetEquipmentTabName(false,"Other5"),
    "Other6": MainMethod.GetEquipmentTabName(false,"Other6"),
    "Other7": MainMethod.GetEquipmentTabName(false,"Other7"),
    "Wepon": MainMethod.GetEquipmentTabName(false,"Wepon"),
    "SubWepon": MainMethod.GetEquipmentTabName(false,"SubWepon"),
    "Armor": MainMethod.GetEquipmentTabName(false,"Armor"),
    "Addition": MainMethod.GetEquipmentTabName(false,"Addition"),
    "Option": MainMethod.GetEquipmentTabName(false,"Option"),
    "Enchant": MainMethod.GetEquipmentTabName(false,"Enchant"),
    "Enchant2": MainMethod.GetEquipmentTabName(false,"Enchant2"),
    "Enchant3": MainMethod.GetEquipmentTabName(false,"Enchant3"),
    "Cry_Wepon": "武器クリスタ",
    "Cry_Armor": "防具クリスタ",
    "Cry_Addition": "追加クリスタ",
    "Cry_Option": "特殊クリスタ",
    "Cry_Nomal": "ノーマルクリスタ",
    "ItemBuff_Attacker":"物理威力",
    "ItemBuff_Defense":"物理防御",
    "ItemBuff_MagicDefense":"魔法防御",
    "ItemBuff_Spped": "速度",
    "ItemBuff_Chant": "詠唱",
    "ItemBuff_Magical":"魔法威力",
    "ItemBuff_AttrPower":"属性攻撃",
    "ItemBuff_AttrDef":"属性防御",
    "ItemBuff_MP": "MP",
    "ItemBuff_HP":"HP",
    "ItemBuff_HIT":"命中",
    "ItemBuff_FREE": "回避",
  }

  /** Topに戻るキャンセルイベントを設定 */
  const CancelEvent = (ElemName = "CancelCustom") => {
    Judey.$cls(ElemName).OnceEvent("click", () => {
      Judey.$cls("NewUserCustom").Rem();
      [Targert, TargetName, TargetKey, Name, ValueSet, Old_Root, Old_TargetKey] =
        [null, null, null, null, null, null, null];
      Phase1();
    })
  }
  /** 次の項目に進める前の要素削除 */
  const PhaseChange = () => Judey.$cls("NewUserCustom").RemChild();
  /** レンダリング*/
  const NewRender = Html => RenderEnd(Judey.cls("NewUserCustom"), Html);
  /* データの新規登録または入れ替え登録を行う。 */
  const SendSelectionData = () => {
    const LocalItems_text = window?.localStorage.getItem("Toram_LocalItems");
    const LocalItems = LocalItems_text ? JSON.parse(LocalItems_text) : {};
    //ルートがない場合は作成
    if (!LocalItems[Targert]) LocalItems[Targert] = {};

    if (Old_TargetKey) {
      //古いデータは削除
      delete LocalItems[Old_Root][Old_TargetKey];

      if (Old_Root.includes("Cry_") || Old_Root.includes("ItemBuff_")) {
        const RootKey = Old_Root.includes("Cry_")
          ? "Crystal"
          : "ItemBuff";
        const RootKey_Item = Old_Root.split("_")[1];

        delete SelectionData[RootKey][RootKey_Item][Old_TargetKey];
        if (Object.keys(SelectionData[RootKey][RootKey_Item]).length === 0)
          delete SelectionData[RootKey][RootKey_Item];

      } else {
        //Equipment
        delete SelectionData[Old_Root][Old_TargetKey];
        if (Object.keys(SelectionData[Old_Root]).length === 0)
          delete SelectionData[Old_Root];

      }

      if (IsDeleteMode) {
        //ローカルストレージへの反映
        window?.localStorage.setItem("Toram_LocalItems", JSON.stringify(LocalItems));
        return;
      }
      //再登録
      if (!LocalItems[Targert]) LocalItems[Targert] = {};
      LocalItems[Targert][TargetKey] = ValueSet;
    } else {
      //初回はタイムスタンプ値がkeyとなる。
      LocalItems[Targert][ValueSet.TimeStamp] = ValueSet;
      TargetKey = ValueSet.TimeStamp;
    }
    //ローカルストレージへの反映
    window?.localStorage.setItem("Toram_LocalItems", JSON.stringify(LocalItems));
    
    //★を付ける。
    ValueSet.Name = "★" + ValueSet.Name;

    //本体データへの値反映
    if (Targert.match("Cry")) {
      if (Targert.match("Nomal")) ValueSet.Type = "Nomal";
      SelectionData["Crystal"][Targert.split("_")[1]][TargetKey] = ValueSet;
    } else if (Targert.includes("ItemBuff_")) {
      SelectionData["ItemBuff"][Targert.split("_")[1]][TargetKey] = ValueSet;
    } else {
      SelectionData[Targert][TargetKey] = ValueSet;
    }
  }
  //初期選択
  const Phase1 = () => {
    Judey.$cls("SubSystemMainTitle").Text("プリセットのカスタム設定");
    const FirstRender = `
      <div class="NewUserCustom">
        <p class="SubSystemText">
            任意のプリセットをサイトの選択項目として反映させます。</br>
            この設定はブラウザのローカルストレージへ保存されます。
        </p>
        <div class="Flex">
            <button type="button" class="MenuBtn CustomBtn NewCustom">新規登録</button>
            <button type="button" class="MenuBtn CustomBtn ChangeCustom">内容変更</button>
            <button type="button" class="MenuBtn CustomBtn DeleteCustom">登録削除</button> 
        </div>
      </div>`
    
    RenderEnd(Judey.cls("SubSystem"), FirstRender)
    Judey.$cls("NewCustom").OnceEvent("click", Phase_Add1);
    Judey.$cls("ChangeCustom").OnceEvent("click", () => {
      IsDeleteMode = false;
      Phase_AllItems();
    });
    Judey.$cls("DeleteCustom").OnceEvent("click", () => {
      IsDeleteMode = true;
      Phase_AllItems();
    });
  }
  //グループ選択
  const Phase_Add1 = () => {
    IsDeleteMode = false;
    PhaseChange();
    const Render = `
      <p class="SubSystemText">登録するグループを選択してください。</p>
      <select name="additiongroup" id="AdditionGroupSelector"></select>
      <div class="Flex">
        <button type="button" class="CustomBtn NextCustom">次に進む</button> 
        <button type="button" class="CustomBtn CancelCustom">キャンセル</button> 
      </div>`
    NewRender(Render);

    const Selector = Judey.$id("AdditionGroupSelector");
    const SetGroupOptions = (keys, GroupName) => {
      const Group = Judey.$Element("optgroup").Attr("label", GroupName);

      keys.forEach(key => Group.AppendLast(`<option value="${key}">${AdditionElems[key]}</option>`));

      Selector.AppendLast(Group);
    }

    //Equipment
    SetGroupOptions(AdditionElems.Keys().filter(key => !key.includes("Cry_") && !key.includes("ItemBuff_")), "装備品");
    //Crystal
    SetGroupOptions(AdditionElems.Keys().filter(key => key.includes("Cry_")), "クリスタ");
    //ItemBuff
    SetGroupOptions(AdditionElems.Keys().filter(key => key.includes("ItemBuff_")), "アイテムバフ");

    CancelEvent(); 
    Selector.InpText(Targert);
    Judey.$cls("NextCustom").Event("click", () => {
      Targert = Selector.Elem().value;
      TargetName = AdditionElems[Targert];

      Phase_Add2();
      //変更からの追加処理
      if (ValueSet === null) return;
      if (Targert.match("Cry") || Targert.match("ItemBuff_")) {
        ValueSet = new SelectorBase(ValueSet.Name, ValueSet.Base);
      } else {
        ValueSet = new AddEquipment(ValueSet.Name, EquipGroup.UserAdd, ValueSet.Base);
      }      
    });
  }
  //名称変更、ValueSet設定
  const Phase_Add2 = () => {
      PhaseChange();
      const Render = `
      <p class="SubSystemText">名称を入力してください。</br>
        空欄で登録はできません。
      </p>
      <input type="text" class="SubSystemTextInput" value="" placeholder="名称" />
      <div class="Flex">
        <button type="button" class="CustomBtn NextCustom">次に進む</button> 
        <button type="button" class="CustomBtn BackCustom">戻る</button> 
        <button type="button" class="CustomBtn CancelCustom">キャンセル</button> 
      </div>`
    NewRender(Render);
    
    
    //変更から来た場合の処理
    if (Name !== null) Judey.cls("SubSystemTextInput").value = Name;

    CancelEvent(); 
    //ひとつ前に戻る。
    Judey.$cls("BackCustom").Event("click", () => {
      Phase_Add1();
    })
    Judey.$cls("NextCustom").Event("click", () => {
      Name = Judey.cls("SubSystemTextInput").value;
      if (Name === "") return;
      if (ValueSet === null) {
        ValueSet = Targert.match("Cry") || Targert.match("ItemBuff_") ? new SelectorBase(Name, {})
        : new AddEquipment(Name, EquipGroup.UserAdd, {});
      } else {
        ValueSet.Name = Name;
      }
      Phase_Input();
    });

  }
  //能力設定
  const Phase_Input = () => {
    /**
     * 能力の表示
     */
    const RenderResult = () => {
      const Elem = Judey.$cls("AdditionsResult").RemChild();
      const Keys = Object.keys(Result);

      Elem.Child("p", "", "AdditionsResult_Title").Text("現在の設定値").Breaker()
        .Child("div","","Flex")
        .Child("div", "", "AdditionsResult_Plus").Breaker()
        .Child("div", "", "AdditionsResult_Minus").Breaker();
      
      if (Keys.length === 0) return;
      
      const [Plus, Minus] = [Judey.$cls("AdditionsResult_Plus"), Judey.$cls("AdditionsResult_Minus")];
      const EnableKeys = BaseStatus.StatusData.Keys();
      for (let Key of Keys) {
        if (EnableKeys.includes(Key) === false) continue;
        if (Result[Key] === 0) continue;
        const [TargetElem, TargetClsss] = Result[Key] > 0 ? [Plus, "Plus"] : [Minus, "Minus"];

        if (AdditionsText[Key]) {
          TargetElem.Child("p", "", TargetClsss)
            .Child("span", "", "AdditionsResult_Text").Text(AdditionsText[Key]).Breaker()
            .Child("span", "", "").Text(`:${Result[Key].toLocaleString("ja-JP")}`).Breaker(2);
        }
      }
    }

    //変更値の反映と表示
    const CreateUnitAttribute = (e) => {
      const F = MainMethod;
      const Attribute = e.target.dataset.key;
      const IsWepon = e.target.dataset.wepon;
      
      /** @type { Property_Attribute } */
      const EquipmentAttribute = PropsAttributeKeyBase[Attribute];
      const value = IsWepon
        ? F.InputValueCheck(e.target.value, 0, 0, 1500)
        : F.InputValueCheck(e.target.value, 0, EquipmentAttribute.MinimumValue, EquipmentAttribute.MaximumValue);
      
      e.target.value = value === 0 ? "" : value;
      
      //値の変更
      Result[Attribute] = value;
      RenderResult();
    }
    

    const AdditionsText = new BaseStatus(false);
    const Result = ValueSet.Base;

    PhaseChange();
    const Render = `
      <div id="AnotherSys_EquipmentSelector">
        <div>
          <p class="ResultText">選択グループ：${TargetName}</p>
          <p class="ResultText">名称：${Name}</p>
          <div class="AdditionsResult"></div>
        </div>
        <div class="Flex BtnSet">
          <button type="button" class="CustomBtn CompleteCustom">${Old_Root ? "再登録" : "登録"}</button> 
          <button type="button" class="CustomBtn BackCustom">戻る</button> 
          <button type="button" class="CustomBtn CancelCustom">キャンセル</button> 
        </div>
      </div>`
    NewRender(Render);
    Judey.$id("AnotherSys_EquipmentSelector").AppendLast(
      MainRender.EquipmentInputElements("UserCustomValues", "AnotherSys_EquipmentSelector_Elements")
    )
    RenderResult();

    Object.keys(Result).forEach(Attr => {
      Judey.query(`.UserCustomValues[data-key=${Attr}]`).value = Result[Attr];
    })
    
    //数値変更イベント
    let Event = true;
    Judey.$cls("UserCustomValues").Event("click", (e) => {
      if (Event) {
        e.target.value = "";
        CreateUnitAttribute(e);
      } 
      Event = true;
    }).Event("change", (e) => {
      CreateUnitAttribute(e);
      Event = false;
    });

    MainRender.PaletteSelector(Judey.$cls("UserCustomValues"));

    CancelEvent(); 
    //ひとつ前に戻る。
    Judey.$cls("BackCustom").Event("click", () => {
      Phase_Add2();
    })
    Judey.$cls("CompleteCustom").Event("click", () => {
      const Elem = Judey.$query(".BtnSet,.SubSystemAdditions,.EquipmentInWeponsATK").Class("NoneText");
      const Render = `
      <div class="AnsSet">
        <p class="SubSystemText">この内容で${Old_Root ? "再登録" : "登録" }してよろしいですか？</p>
        <div class="Flex">
          <button type="button" class="CustomBtn CustomOK">はい</button> 
          <button type="button" class="CustomBtn CustomNo">いいえ</button> 
        </div>      
      </div>`
      NewRender(Render);

      Judey.$id("AnotherSys_EquipmentSelector_Elements").Class("NoneText");
      //やりなおし
      Judey.$cls("CustomNo").Event("click", () => {
        Elem.RemClass("NoneText");
        Judey.$cls("AnsSet").Rem();

        Judey.$id("AnotherSys_EquipmentSelector_Elements").RemClass("NoneText");
      })

      //確定
      Judey.$cls("CustomOK").Event("click", () => {
        ValueSet.TimeStamp = Date.now();//登録時間をタイムスタンプとする。
        if (ValueSet?.Group) {
          ValueSet.Group = EquipGroup.UserAdd;
        }
        SendSelectionData();//情報反映
        alert(`${Old_Root ? "登録内容を変更しました。" : "プリセットを登録しました。"}`);
      })
      CancelEvent("CustomOK");
    })
  }
  //一覧表示
  const Phase_AllItems = () => {
    PhaseChange();
    const Render = `
      <p class="SubSystemText">現在登録しているプリセットの一覧を表示しています。</br>
      ${IsDeleteMode ? "削除" : "変更"}するプリセットを選択してください。
      </p>
      <div class="Items Flex"></div>
      <div class="Flex">
        <button type="button" class="CustomBtn CancelCustom">キャンセル</button> 
      </div>`
    NewRender(Render);
    
    const Elem = Judey.$cls("Items");
    const LocalItems_text = window?.localStorage.getItem("Toram_LocalItems");
    const LocalItems = LocalItems_text ? JSON.parse(LocalItems_text) : {};

    if (Object.keys(LocalItems).length === 0) {
      Elem.Child("p", "", "SubSystemText").Text("登録データがありませんでした。");
      CancelEvent();
      return;
    }

    Object.keys(AdditionElems).forEach(Key => {
      const AdditionElemKeys = LocalItems[Key] ? Object.keys(LocalItems[Key]) : [];
      if (AdditionElemKeys.length > 0) {
        Elem.Child("div", "", "ItemArea")
          .Child("p", "", "ItemArea_Title").Text(AdditionElems[Key]).Breaker();
        Object.keys(LocalItems[Key]).forEach(Item => {
          Elem.Child("div", "", "Flex")
            .Child("span", "", "ItemArea_ItemText").Text(`★${LocalItems[Key][Item].Name}`).Breaker()
            .Child("button", "", "ItemArea_ChangeBtn").Text(`${IsDeleteMode ? "削除" : "変更"}`)
            .Attr("type", "button")
            .Attr("data-target", Key)
            .Attr("data-value", Item).Breaker(2);
        })
        Elem.Breaker();
      }
    })

    CancelEvent();
    Judey.$cls("ItemArea_ChangeBtn").OnceEvent("click", (e) => {
      const [Root, Item] = [e.target.dataset.target, e.target.dataset.value];
      const DataSet = LocalItems[Root][Item];

      Targert = Root;
      TargetKey = Item;
      TargetName = AdditionElems[Root];
      ValueSet = DataSet;
      Name = DataSet.Name;
      //新旧判定用
      Old_Root = Root;
      Old_TargetKey = Item;

      if (IsDeleteMode) {
        Phase_DeleteItems()
      } else {
        Phase_Add1();
      }
    })
  }
  //削除確認
  const Phase_DeleteItems = () => {
    PhaseChange();
    const Render = `
      <p class="SubSystemText">以下のプリセットを削除します。</br>
        セーブデータ、リストからの選択参照は行えなくなります。</br>
        本当によろしいですか？
      </p>
      <div>
        <div class="AdditionsResult">
          <p class="ResultText">選択グループ：${TargetName}</p>
          <p class="ResultText">名称：${Name}</p>
          <p class="SubSystemText">プリセット能力値</p>
        </div>
      </div>
      <div class="Flex">
        <button type="button" class="CustomBtn CustomOK">はい</button> 
        <button type="button" class="CustomBtn CustomNo">いいえ</button> 
      </div>`
    NewRender(Render);
    
    //装備品の能力値入力
    {
      const Elem = Judey.$cls("AdditionsResult");
      const AdditionsText = new BaseStatus(false);
      const Result = ValueSet.Base;
      const Keys = Object.keys(Result);

      Elem.Child("div","","Flex")
        .Child("div", "", "AdditionsResult_Plus").Breaker()
        .Child("div", "", "AdditionsResult_Minus").Breaker();
            
      const [Plus, Minus] = [Judey.$cls("AdditionsResult_Plus"), Judey.$cls("AdditionsResult_Minus")];
      for (let Key of Keys) {
        if (Result[Key] === 0) continue;
        const [TargetElem, TargetClsss] = Result[Key] > 0 ? [Plus, "Plus"] : [Minus, "Minus"];

        if (AdditionsText[Key]) {
          TargetElem.Child("p", "", TargetClsss)
              .Child("span", "", "AdditionsResult_Text").Text(AdditionsText[Key]).Breaker()
              .Child("span", "", "").Text(`:${Result[Key].toLocaleString("ja-JP")}`).Breaker(2);          
        }
      }
    }
    //やりなおし
    Judey.$cls("CustomNo").Event("click", () => {
      alert("キャンセルしました。");
    })

    //確定
    Judey.$cls("CustomOK").Event("click", () => {
      SendSelectionData();//情報反映
      alert("プリセットを削除しました。");
    })
    
    CancelEvent("CustomNo");
    CancelEvent("CustomOK");
  }
  Phase1();
}
/** バフカスタム */
const BuffCustom = () => {
  /** 登録以外選択時の認識用*/
  let IsDeleteMode = false;
  /** LocalStage側のルート情報 */
  let Targert = "UserCustomBuff";
  /** 登録時に設定されるアクセスキー情報 */
  let TargetKey = null;
  /** Buff Component @type { CustomBuff } */
  let ValueSet = null;
  /** 旧SelectionDataルート */
  let Old_Root = "UserCustomBuff";
  /** 変更/削除時に設定される旧アクセスキー情報 */
  let Old_TargetKey = null;
    
  //無駄な配列は消す。
  {
    const LocalItems_text = window?.localStorage.getItem("Toram_LocalItems");
    const LocalItems = LocalItems_text ? JSON.parse(LocalItems_text) : {};
    Object.keys(LocalItems).forEach(Key => {
      if (Object.keys(LocalItems[Key]).length === 0) delete LocalItems[Key];
    })
    window?.localStorage.setItem("Toram_LocalItems", JSON.stringify(LocalItems));
  }

  /** Topに戻るキャンセルイベントを設定 */
  const CancelEvent = (ElemName = "CancelCustom") => {
    Judey.$cls(ElemName).OnceEvent("click", () => {
      Judey.$cls("NewBuffCustom").Rem();
      [TargetKey, ValueSet, Old_TargetKey] =
        [null, null, null];
      
      Phase1();
    })
  }
  /** 次の項目に進める前の要素削除 */
  const PhaseChange = () => Judey.$cls("NewBuffCustom").RemChild();
  /** レンダリング*/
  const NewRender = Html => RenderEnd(Judey.cls("NewBuffCustom"), Html);
  /**フェーズ移動時の定義 */
  const MovePhase = (Next, Back) => {
    Judey.$cls("NextCustom").Event("click", Next);
    Judey.$cls("BackCustom").OnceEvent("click", Back);
  }
  /* データの新規登録または入れ替え登録を行う。 */
  const SendSelectionData = () => {
    const LocalItems_text = window?.localStorage.getItem("Toram_LocalItems");
    const LocalItems = LocalItems_text ? JSON.parse(LocalItems_text) : {};
    //ルートがない場合は作成
    if (!LocalItems[Targert]) LocalItems[Targert] = {};

    if (Old_TargetKey) {
      //古いデータは削除
      delete LocalItems[Old_Root][Old_TargetKey];
      delete SelectionData[Old_Root][Old_TargetKey];

      if (IsDeleteMode) {
        //ローカルストレージへの反映
        window?.localStorage.setItem("Toram_LocalItems", JSON.stringify(LocalItems));
        return;
      }
      //再登録
      if (!LocalItems[Targert]) LocalItems[Targert] = {};
      LocalItems[Targert][TargetKey] = ValueSet;

    } else {
      //初回はタイムスタンプ値がkeyとなる。
      LocalItems[Targert][ValueSet.TimeStamp] = ValueSet;
      TargetKey = ValueSet.TimeStamp;
    }
    //ローカルストレージへの反映
    window?.localStorage.setItem("Toram_LocalItems", JSON.stringify(LocalItems));

    //本体データへの値反映
    SelectionData[Targert][TargetKey] = CustomBuff.GetInstance(ValueSet);
  }

  //初期選択
  const Phase1 = () => {
    Judey.$cls("SubSystemMainTitle").Text("バフスキルのカスタム設定");
    const FirstRender = `
      <div class="NewBuffCustom">
        <p class="SubSystemText">
            任意のバフスキルをサイトの選択項目として反映させます。</br>
            この設定はブラウザのローカルストレージへ保存されます。
        </p>
        <div class="Flex">
            <button type="button" class="MenuBtn CustomBtn NewCustom">新規登録</button>
            <button type="button" class="MenuBtn CustomBtn ChangeCustom">内容変更</button>
            <button type="button" class="MenuBtn CustomBtn DeleteCustom">登録削除</button> 
        </div>
      </div>`
    
    RenderEnd(Judey.cls("SubSystem"), FirstRender)
    Judey.$cls("NewCustom").OnceEvent("click", Phase_Add1);
    Judey.$cls("ChangeCustom").OnceEvent("click", () => {
      IsDeleteMode = false;
      Phase_AllItems();
    });
    Judey.$cls("DeleteCustom").OnceEvent("click", () => {
      IsDeleteMode = true;
      Phase_AllItems();
    });
  }
  //
  const Phase_Add1 = () => {
    if (!ValueSet) {
      ValueSet = new CustomBuff();
    }

    IsDeleteMode = false;
    PhaseChange();

    const Render = `
      <p class="SubSystemText">
        スキルの名称を入力してください。</br>
        18byte（全角9/半角18文字）以上はカットされます。
      </p>
      <input type="text" value="${ValueSet?.Name ?? ""}" id="BuffSkillName" class="mcenter" style="width:12rem;"/>
      <p class="SubSystemText">
        スキルの説明文を入力してください(省略可)</br>
        スキルの詳細を確認した際に表示されます。
      </p>
      <textarea rows="5" cols="40" id="BuffSkillDescription" class="mcenter"></textarea>
      <div class="Flex">
        <button type="button" class="CustomBtn NextCustom">次に進む</button> 
        <button type="button" class="CustomBtn CancelCustom">キャンセル</button> 
      </div>
    `
    NewRender(Render);

    //Default
    Judey.$id("BuffSkillName").InpText(ValueSet.Name);
    Judey.$id("BuffSkillDescription").InpText(ValueSet.RefText);

    Judey.$id("BuffSkillName").Event("change", (e) => {
      const elem = Judey.$elem(e.target);
      
      elem.InpText(e.target.value.bytetrim(18));
      ValueSet.Name = elem.InpText();
    });

    Judey.$id("BuffSkillDescription").Event("change", e =>  ValueSet.RefText = Judey.$elem(e.target).InpText());

    MovePhase(
      () => {
        Judey.$cls("ErrorText").Rem();
        if (Judey.$id("BuffSkillName").InpText().byte() === 0)
          Judey.$id("BuffSkillName").AppendAfter(`
            <p style="color:var(--RedGrad3);width:fit-content;" class="ErrorText mcenter">名称を入力してください。</p>
          `);
        else
          Phase_Input();
      }
    );
    CancelEvent(); 
  }
  //能力設定
  const Phase_Input = () => {
    /**
     * 能力の表示
     */
    const RenderResult = () => {
      const Elem = Judey.$cls("AdditionsResult").RemChild();
      const Keys = Object.keys(Result);

      Elem.Child("p", "", "AdditionsResult_Title").Text("現在の設定値").Breaker()
        .Child("div","","Flex")
        .Child("div", "", "AdditionsResult_Plus").Breaker()
        .Child("div", "", "AdditionsResult_Minus").Breaker();
      
      if (Keys.length === 0) return;
      
      const [Plus, Minus] = [Judey.$cls("AdditionsResult_Plus"), Judey.$cls("AdditionsResult_Minus")];
      const EnableKeys = BaseStatus.StatusData.Keys();
      for (let Key of Keys) {
        if (EnableKeys.includes(Key) === false) continue;
        if (Result[Key] === 0) continue;
        const [TargetElem, TargetClsss] = Result[Key] > 0 ? [Plus, "Plus"] : [Minus, "Minus"];

        if (AdditionsText[Key]) {
          TargetElem.Child("p", "", TargetClsss)
            .Child("span", "", "AdditionsResult_Text").Text(AdditionsText[Key]).Breaker()
            .Child("span", "", "").Text(`:${Result[Key].toLocaleString("ja-JP")}`).Breaker(2);
        }
      }
    }

    //変更値の反映と表示
    const CreateUnitAttribute = (e) => {
      const F = MainMethod;
      const Attribute = e.target.dataset.key;
      const IsWepon = e.target.dataset.wepon;
      
      /** @type { Property_Attribute } */
      const EquipmentAttribute = PropsAttributeKeyBase[Attribute];
      const value = IsWepon
        ? F.InputValueCheck(e.target.value, 0, 0, 1500)
        : F.InputValueCheck(e.target.value, 0, EquipmentAttribute.MinimumValue, EquipmentAttribute.MaximumValue);
      
      e.target.value = value === 0 ? "" : value;
      
      //値の変更
      Result[Attribute] = value;
      RenderResult();
    }
    

    const AdditionsText = new BaseStatus(false);
    const Result = ValueSet.Base;

    PhaseChange();
    const Render = `
      <div id="AnotherSys_EquipmentSelector">
        <div>
          <p class="ResultText">名称：${ValueSet.Name}</p>
          <div class="AdditionsResult"></div>
        </div>
        <div class="Flex BtnSet">
          <button type="button" class="CustomBtn CompleteCustom">${ValueSet.TimeStamp ? "再登録" : "登録"}</button> 
          <button type="button" class="CustomBtn BackCustom">戻る</button> 
          <button type="button" class="CustomBtn CancelCustom">キャンセル</button> 
        </div>
      </div>`
    NewRender(Render);
    Judey.$id("AnotherSys_EquipmentSelector").AppendLast(
      MainRender.EquipmentInputElements("UserCustomValues", "AnotherSys_EquipmentSelector_Elements")
    )
    RenderResult();

    Object.keys(Result).forEach(Attr => {
      Judey.query(`.UserCustomValues[data-key=${Attr}]`).value = Result[Attr];
    })
    
    //数値変更イベント
    let Event = true;
    Judey.$cls("UserCustomValues").Event("click", (e) => {
      if (Event) {
        e.target.value = "";
        CreateUnitAttribute(e);
      } 
      Event = true;
    }).Event("change", (e) => {
      CreateUnitAttribute(e);
      Event = false;
    });

    MainRender.PaletteSelector(Judey.$cls("UserCustomValues"));

    CancelEvent(); 
    //ひとつ前に戻る。
    Judey.$cls("BackCustom").Event("click", () => {
      Phase_Add1();
    })
    Judey.$cls("CompleteCustom").Event("click", () => {
      const Elem = Judey.$query(".BtnSet,.SubSystemAdditions,.EquipmentInWeponsATK").Class("NoneText");
      const Render = `
      <div class="AnsSet">
        <p class="SubSystemText">
          この内容で${ValueSet.TimeStamp ? "再登録" : "登録" }してよろしいですか?
          ${ValueSet.TimeStamp ? "</br>このスキルの有効化状態は解除されます。" :""}
        </p>
        <div class="Flex">
          <button type="button" class="CustomBtn CustomOK">はい</button> 
          <button type="button" class="CustomBtn CustomNo">いいえ</button> 
        </div>      
      </div>`
      NewRender(Render);

      Judey.$id("AnotherSys_EquipmentSelector_Elements").Class("NoneText");
      //やりなおし
      Judey.$cls("CustomNo").Event("click", () => {
        Elem.RemClass("NoneText");
        Judey.$cls("AnsSet").Rem();

        Judey.$id("AnotherSys_EquipmentSelector_Elements").RemClass("NoneText");
      })

      //確定
      Judey.$cls("CustomOK").Event("click", () => {
        ValueSet.TimeStamp = Date.now();//登録時間をタイムスタンプとする。

        SendSelectionData();//情報反映
        alert(`${Old_Root ? "登録内容を変更しました。" : "バフスキルを登録しました。"}`);
      })
      CancelEvent("CustomOK");
    })
  }
  //一覧表示
  const Phase_AllItems = () => {
    PhaseChange();
    const Render = `
      <p class="SubSystemText">現在登録しているバフスキルの一覧を表示しています。</br>
      ${IsDeleteMode ? "削除" : "変更"}するバフスキルを選択してください。
      </p>
      <div class="Items Flex"></div>
      <div class="Flex">
        <button type="button" class="CustomBtn CancelCustom">キャンセル</button> 
      </div>`
    NewRender(Render);
    
    const Elem = Judey.$cls("Items");
    const LocalItems_text = window?.localStorage.getItem("Toram_LocalItems");
    const LocalItems = LocalItems_text ? JSON.parse(LocalItems_text) : {};

    if (!LocalItems[Targert] || Object.keys(LocalItems[Targert]).length === 0) {
      Elem.Child("p", "", "SubSystemText").Text("登録データがありませんでした。");
      CancelEvent();
      return;
    }

    Elem.Child("div", "", "ItemArea")
      .Child("p", "", "ItemArea_Title").Text("バフスキル").Breaker();
    Object.keys(LocalItems[Targert]).forEach(Item => {
      Elem.Child("div", "", "Flex")
        .Child("span", "", "ItemArea_ItemText").Text(`★${LocalItems[Targert][Item].Name}`).Breaker()
        .Child("button", "", "ItemArea_ChangeBtn").Text(`${IsDeleteMode ? "削除" : "変更"}`)
        .Attr("type", "button")
        .Attr("data-target", Targert)
        .Attr("data-value", Item).Breaker(2);
    })
    Elem.Breaker();

    CancelEvent();
    Judey.$cls("ItemArea_ChangeBtn").OnceEvent("click", (e) => {
      const [Root, Item] = [e.target.dataset.target, e.target.dataset.value];
      const DataSet = LocalItems[Root][Item];

      Targert = Root;
      TargetKey = Item;
      ValueSet = DataSet;
      //新旧判定用
      Old_Root = Root;
      Old_TargetKey = Item;

      if (IsDeleteMode) {
        Phase_DeleteItems()
      } else {
        Phase_Add1();
      }
    })
  }
  //削除確認
  const Phase_DeleteItems = () => {
    PhaseChange();
    const Render = `
      <p class="SubSystemText">以下のバフスキルを削除します。</br>
        セーブデータ、リストからの選択参照は行えなくなります。</br>
        本当によろしいですか？
      </p>
      <div>
        <div class="AdditionsResult">
          <p class="ResultText">名称：${ValueSet.Name}</p>
          <p class="SubSystemText">バフスキル効果</p>
        </div>
      </div>
      <div class="Flex">
        <button type="button" class="CustomBtn CustomOK">はい</button> 
        <button type="button" class="CustomBtn CustomNo">いいえ</button> 
      </div>`
    NewRender(Render);
    
    //バフスキルの能力値入力
    {
      const Elem = Judey.$cls("AdditionsResult");
      const AdditionsText = new BaseStatus(false);
      const Result = ValueSet.Base;
      const Keys = Object.keys(Result);

      Elem.Child("div","","Flex")
        .Child("div", "", "AdditionsResult_Plus").Breaker()
        .Child("div", "", "AdditionsResult_Minus").Breaker();
            
      const [Plus, Minus] = [Judey.$cls("AdditionsResult_Plus"), Judey.$cls("AdditionsResult_Minus")];
      for (let Key of Keys) {
        if (Result[Key] === 0) continue;
        const [TargetElem, TargetClsss] = Result[Key] > 0 ? [Plus, "Plus"] : [Minus, "Minus"];

        if (AdditionsText[Key]) {
          TargetElem.Child("p", "", TargetClsss)
              .Child("span", "", "AdditionsResult_Text").Text(AdditionsText[Key]).Breaker()
              .Child("span", "", "").Text(`:${Result[Key].toLocaleString("ja-JP")}`).Breaker(2);          
        }
      }
    }
    //やりなおし
    Judey.$cls("CustomNo").Event("click", () => {
      alert("キャンセルしました。");
    })

    //確定
    Judey.$cls("CustomOK").Event("click", () => {
      SendSelectionData();//情報反映
      alert("スキルを削除しました。");
    })
    
    CancelEvent("CustomNo");
    CancelEvent("CustomOK");
  }
  Phase1();
}
/** 敵カスタム*/
const EnemyCustom = () => {
  /** 登録以外選択時の認識用*/
  let IsDeleteMode = false;
  /** EnemyComponent */
  let ValueSet = null;
  /** EmenyName */
  let Name = null;
  /** 登録時に設定されるアクセスキー情報 */
  let TargetKey = null;
  /** 変更/削除時に設定される旧アクセスキー情報 */
  let Old_TargetKey = null;

  /** Topに戻るキャンセルイベントを設定 */
  const CancelEvent = (ElemName = "CancelCustom") => {
    Judey.$cls(ElemName).OnceEvent("click", () => {
      [ValueSet, Name] = [null, null];
      Judey.$cls("NewUserCustom").Rem();
      Phase1();
    })
  }
  
  /** 要素削除と生成 */
  const PhaseChange = (RenderHtml) =>
    Judey.$cls("NewUserCustom").RemChild().Append(RenderHtml, Judey.InsertLast);

  /** データの新規登録または入れ替え登録を行う。 */
  const SendSelectionData = () => {
    const LocalItems_text = window?.localStorage.getItem("Toram_LocalItems");
    const LocalItems = LocalItems_text ? JSON.parse(LocalItems_text) : {};
    //ルートがない場合は作成
    if (!LocalItems["Enemy"]) LocalItems["Enemy"] = {};

    if (Old_TargetKey) {
      //古いデータは削除
      delete LocalItems["Enemy"][Old_TargetKey];
      delete SelectionData["Enemy"][Old_TargetKey];
      if (Object.keys(LocalItems["Enemy"]).length === 0) delete LocalItems["Enemy"];
      
      //削除モード⇒ローカル反映でEnd
      if (IsDeleteMode) {
        window?.localStorage.setItem("Toram_LocalItems", JSON.stringify(LocalItems));
        return;
      }

      //再登録
      if (!LocalItems["Enemy"]) LocalItems["Enemy"] = {};
      LocalItems["Enemy"][TargetKey] = ValueSet;

    } else {
      //初回はタイムスタンプ値がkeyとなる。
      LocalItems["Enemy"][ValueSet.TimeStamp] = ValueSet;
      LocalItems["Enemy"][ValueSet.TimeStamp]["FirstTime"] = ValueSet.TimeStamp;
      TargetKey = ValueSet.TimeStamp;
    }
    //ローカルストレージへの反映
    window?.localStorage.setItem("Toram_LocalItems", JSON.stringify(LocalItems));
    
    //★を付ける。
    ValueSet.Name = "★" + ValueSet.Name;

    //本体データへの値反映
    SelectionData["Enemy"][TargetKey] = ValueSet;
  }
  //初期選択
  const Phase1 = () => {
    Judey.$cls("SubSystemMainTitle").Text("敵情報のカスタム設定");
    const FirstRender = `
      <div class="NewUserCustom">
        <p class="SubSystemText">
            任意の敵情報をサイトの選択項目として反映させます。</br>
            この設定はブラウザのローカルストレージへ保存されます。
        </p>
        <div class="Flex">
            <button type="button" class="MenuBtn CustomBtn NewCustom">新規登録</button>
            <button type="button" class="MenuBtn CustomBtn ChangeCustom">内容変更</button>
            <button type="button" class="MenuBtn CustomBtn DeleteCustom">登録削除</button> 
        </div>
      </div>`
    
    Judey.$cls("SubSystem").Append(FirstRender, Judey.InsertLast);
    
    Judey.$cls("NewCustom").OnceEvent("click", Phase_Add);
    Judey.$cls("ChangeCustom").OnceEvent("click", () => {
      IsDeleteMode = false;
      Phase_Showtems();
    });
    Judey.$cls("DeleteCustom").OnceEvent("click", () => {
      IsDeleteMode = true;
      Phase_Showtems();
    });
  }
  
  //名称登録
  const Phase_Add = () => {
    const Render = `
    <p class="SubSystemText">敵の名称を入力してください。</br>
      空欄で登録はできません。
    </p>
    <input type="text" class="SubSystemTextInput" value="" placeholder="敵の名称" />
    <div class="Flex">
      <button type="button" class="CustomBtn NextCustom">次に進む</button> 
      <button type="button" class="CustomBtn CancelCustom">キャンセル</button> 
    </div>`
    PhaseChange(Render);
    CancelEvent();
    
    //ひとつ前に戻る。
    Judey.$cls("BackCustom").Event("click", () => Phase1);
    Judey.$cls("NextCustom").Event("click", () => {
      Name = Judey.cls("SubSystemTextInput").value;
      if (Name === "") return;
      if (ValueSet === null) {
        ValueSet = new Enemy(Name, 1, 0, 0, 0, 0, true);
      } else {
        ValueSet.Name = Name;
      }
      Phase_Input();
    })
       //変更から来た場合の処理
    if (Name !== null) Judey.cls("SubSystemTextInput").value = Name; 
  }

  //能力設定
  const Phase_Input = () => {
    const Render = `
      <p class="SubSystemText">敵の能力値を設定してください。</p>
      <div class="EnemyResult">
        <p class="EnemyResult_EnemyNames">
          <span id="EnemyResult_Name"></span>
           Lv：
          <span id="EnemyResult_lv"></span>
        </p>
        <p class="EnemyResult_EnemyInfo"></p>
        <div class="EnemyResult_Texts Flex">
          <div class="EnemyResult_TextSet">
            <span class="EnemyResult_Text">DEF</span>：
            <span id="EnemyResult_def"></span>
          </div>
          <div class="EnemyResult_TextSet">
            <span class="EnemyResult_Text2">物理耐性</span>：
            <span id="EnemyResult_Resist_Physical"></span>          
          </div>
        </div>
        <div class="EnemyResult_Texts Flex">
          <div class="EnemyResult_TextSet">
            <span class="EnemyResult_Text">MDEF</span>：
            <span id="EnemyResult_mdef"></span>
          </div>
          <div class="EnemyResult_TextSet">
            <span class="EnemyResult_Text2">魔法耐性</span>：
            <span id="EnemyResult_Resist_Magic"></span>          
          </div>
        </div>
        <p class="EnemyResultInfoText">※DEF/MDEFは難易度Nomalでの値です。</p>
      </div>
      <div class="Flex BtnSet">
        <button type="button" class="CustomBtn CompleteCustom">
        ${Old_TargetKey ? "再登録" : "登録"}</button> 
        <button type="button" class="CustomBtn BackCustom">戻る</button> 
        <button type="button" class="CustomBtn CancelCustom">キャンセル</button> 
      </div> 
      <div class="EnemyInputArea">
        <div class="Flex">
          <div class="EnemyInputSet">
            <p class="EnemyInput_Text">Lv</p>
            <input type="number" min="1" max="999" value="1"  data-target="lv"
            id="EnemyInput_lv" class="EnemyInputResults">          
          </div>
          <div class="EnemyInputSet EnemyInputRadioSet">
            <span class="EnemyInput_Text2">敵の分類</span>
            <input type="radio" id="boss1" class="EnemyInput_Radio _radio" name="bossans" value="1" checked>
            <label for="boss1" class="_label _cherry EnemyInput_RadioText">ボス</label>
            <input type="radio" id="boss2" class="EnemyInput_Radio _radio" name="bossans" value="0">
            <label for="boss2" class="_label _pinkgold EnemyInput_RadioText">FB/モブ</label>
          </div>
        </div>    
        <div class="Flex">
          <div class="EnemyInputSet">
            <p class="EnemyInput_Text">DEF</p>
            <input type="number" min="0" max="9999" value="0" data-target="def"
              id="EnemyInput_def" class="EnemyInputResults">          
          </div>
          <div class="EnemyInputSet">
            <p class="EnemyInput_Text2">物理耐性</p>
            <input type="number" min="-1000" max="100" value="0" data-target="Resist_Physical"
              id="EnemyInput_Resist_Physical" class="EnemyInputResults">
          </div>
        </div>
        <div class="Flex">
          <div class="EnemyInputSet">
            <p class="EnemyInput_Text">MDEF</p>
            <input type="number" min="0" max="9999" value="0" data-target="mdef"
              id="EnemyInput_mdef" class="EnemyInputResults">       
          </div>
          <div class="EnemyInputSet">
            <p class="EnemyInput_Text2">魔法耐性</p>
            <input type="number" min="-1000" max="100" value="0" data-target="Resist_Magic"
              id="EnemyInput_Resist_Magic" class="EnemyInputResults">        
          </div>
        </div>
      </div>
    `
    PhaseChange(Render);
    CancelEvent();
    
    /** 入力値の反映 */
    const StatusRender = () => {
      const KeysSet = ["lv","def","mdef","Resist_Physical","Resist_Magic"];
      KeysSet.forEach(Key => {
        Judey.id(`EnemyResult_${Key}`).innerText = ValueSet[Key].toLocaleString("ja-JP");
        Judey.id(`EnemyInput_${Key}`).value = ValueSet[Key] !== 0 ? ValueSet[Key] : "";
      });
      if (ValueSet.IsBoss) {
        Judey.$cls("EnemyResultInfoText").RemClass("NoneText");
        Judey.$cls("EnemyResult_EnemyInfo").Text("ボス");
        Judey.$query(".EnemyInput_Radio[value='1']").Attr("checked", "true");
      } else {
        Judey.$cls("EnemyResultInfoText").Class("NoneText");
        Judey.$cls("EnemyResult_EnemyInfo").Text("フィールドボス/モブ");
        Judey.$query(".EnemyInput_Radio[value='0']").Attr("checked", "true");        
      }
      Judey.id("EnemyResult_Name").innerText = ValueSet.Name;
    }

    /** 入力確認 */
    const InputCheck = (Value, Target) => {
      const BaseValue = ["def", "mdef"].includes(Target)
        ? MainMethod.InputValueCheck(Value, 0, 0, 9999)
        : ["Resist_Physical", "Resist_Magic"].includes(Target)
          ? MainMethod.InputValueCheck(Value, 0, -1000, 100)
          : MainMethod.InputValueCheck(Value, 1, 1, 999);
      
      ValueSet[Target] = BaseValue;
      StatusRender();
      return BaseValue !== 0 ? BaseValue : "";
    }

    StatusRender();
  
    //入力イベント
    {
      let Event = true;
      Judey.$cls("EnemyInputResults").Event("click", (e) => {
        if (Event) {
          const Elem = e.target;
          e.target.value = "";
          InputCheck(Elem.value, Elem.dataset.target);
        }
        Event = true;
      }).Event("change", (e) => {
        const Elem = e.target;
        e.target.value = InputCheck(Elem.value, Elem.dataset.target);
        Event = false;
      })

      MainRender.PaletteSelector(Judey.$cls("EnemyInputResults"));
      
      Judey.$cls("EnemyInput_Radio").Event("change", (e) => {
        const IsBoss = e.target.value === "1" ? true : false;
        ValueSet.IsBoss = IsBoss;
        StatusRender();
      })
    }
    //ボタンイベント
    {
      //ひとつ前に戻る。
      Judey.$cls("BackCustom").Event("click", () => {
        Phase_Add();
      })
      //完了確認
      Judey.$cls("CompleteCustom").Event("click", () => {
        const Elem = Judey.$query(".BtnSet,.EnemyInputArea").Class("NoneText");
        const Render = `
        <div class="AnsSet">
          <p class="SubSystemText">この内容で${Old_TargetKey ? "再登録" : "登録" }してよろしいですか？</p>
          <div class="Flex">
            <button type="button" class="CustomBtn CustomOK">はい</button> 
            <button type="button" class="CustomBtn CustomNo">いいえ</button> 
          </div>      
        </div>`

        Judey.$cls("EnemyResult").Append(Render, Judey.After);
        
        //やりなおし
        Judey.$cls("CustomNo").Event("click", () => {
          Elem.RemClass("NoneText");
          Judey.$cls("AnsSet").Rem();
        })
  
        //確定
        Judey.$cls("CustomOK").Event("click", () => {
          ValueSet.TimeStamp = Date.now();//登録時間をタイムスタンプとする。
          SendSelectionData();
          alert(`${Old_TargetKey ? "登録内容を変更しました。" : "敵情報を登録しました。"}`);
        })
        CancelEvent("CustomOK");
      })
    }
  }
  
  //一覧表示
  const Phase_Showtems = () => {
    const Render = `
      <p class="SubSystemText">現在登録している敵の一覧を表示しています。</br>
      ${IsDeleteMode ? "削除" : "変更"}する敵を選択してください。
      </p>
      <div class="Items Flex"></div>
      <div class="Flex">
        <button type="button" class="CustomBtn CancelCustom">キャンセル</button> 
      </div>`
    PhaseChange(Render);
    CancelEvent();

    const Elem = Judey.$cls("Items");
    const LocalItems_text = window?.localStorage.getItem("Toram_LocalItems");
    const LocalItems = LocalItems_text ? JSON.parse(LocalItems_text) : {};

    if (!LocalItems["Enemy"]) {
      Elem.Child("p", "", "SubSystemText").Text("登録データがありませんでした。");
      CancelEvent();
      return;
    }
    
    const Texts = ["ボス", "フィールドボス/モブ"];
    const Keys = (() => {
      const elements = Object.keys(LocalItems["Enemy"]);
      return [
        elements.filter(v => LocalItems["Enemy"][v].IsBoss),
        elements.filter(v => !LocalItems["Enemy"][v].IsBoss)
      ];
    })();

    Keys.forEach((Item, i) => {
      if (Item.length > 0) {
        Elem.Child("div", "", "ItemArea")
          .Child("p", "", "ItemArea_Title").Text(Texts[i]).Breaker();
        Item.forEach(Key => {
          Elem.Child("div", "", "Flex")
          .Child("span", "", "ItemArea_ItemText").Text(`★${LocalItems["Enemy"][Key].Name}`).Breaker()
          .Child("button", "", "ItemArea_ChangeBtn").Text(`${IsDeleteMode ? "削除" : "変更"}`)
          .Attr("type", "button")
          .Attr("data-value", Key).Breaker(2);    
        })
        Elem.Breaker();       
      }
    })

    Judey.$cls("ItemArea_ChangeBtn").OnceEvent("click", (e) => {
      const Item = e.target.dataset.value;
      const DataSet = LocalItems["Enemy"][Item];

      Name = DataSet.Name;
      TargetKey = Item;
      ValueSet = new Enemy(DataSet.Name, DataSet.lv, DataSet.def, DataSet.mdef,
        DataSet.Resist_Physical, DataSet.Resist_Magic, DataSet.IsBoss);
      ValueSet["TimeStamp"] = DataSet.TimeStamp;
      ValueSet["FirstTime"] = DataSet.FirstTime;
      
      //新旧判定用
      Old_TargetKey = Item;

      if (IsDeleteMode) {
        Phase_DeleteItems()
      } else {
        Phase_Add();
      }
    })
  }

  //削除確認
  const Phase_DeleteItems = () => {
    const Render = `
      <p class="SubSystemText">以下の敵を削除します。</br>
        セーブデータ、リストからの選択参照は行えなくなります。</br>
        本当によろしいですか？
      </p>
      <div class="EnemyResult">
        <p class="EnemyResult_EnemyNames">
          <span id="EnemyResult_Name"></span>
           Lv：
          <span id="EnemyResult_lv"></span>
        </p>
        <p class="EnemyResult_EnemyInfo"></p>
        <div class="EnemyResult_Texts Flex">
          <div class="EnemyResult_TextSet">
            <span class="EnemyResult_Text">DEF</span>：
            <span id="EnemyResult_def"></span>
          </div>
          <div class="EnemyResult_TextSet">
            <span class="EnemyResult_Text2">物理耐性</span>：
            <span id="EnemyResult_Resist_Physical"></span>          
          </div>
        </div>
        <div class="EnemyResult_Texts Flex">
          <div class="EnemyResult_TextSet">
            <span class="EnemyResult_Text">MDEF</span>：
            <span id="EnemyResult_mdef"></span>
          </div>
          <div class="EnemyResult_TextSet">
            <span class="EnemyResult_Text2">魔法耐性</span>：
            <span id="EnemyResult_Resist_Magic"></span>          
          </div>
        </div>
        <p class="EnemyResultInfoText">※DEF/MDEFは難易度Nomalでの値です。</p>
      </div>
      <div class="Flex">
        <button type="button" class="CustomBtn CustomOK">はい</button> 
        <button type="button" class="CustomBtn CustomNo">いいえ</button> 
      </div>`
    PhaseChange(Render);
    CancelEvent();
    
    {
      const KeysSet = ["lv","def","mdef","Resist_Physical","Resist_Magic"];
      KeysSet.forEach(Key => {
        Judey.id(`EnemyResult_${Key}`).innerText = ValueSet[Key].toLocaleString("ja-JP");
        Judey.id(`EnemyInput_${Key}`).value = ValueSet[Key] !== 0 ? ValueSet[Key] : "";
      });
      if (ValueSet.IsBoss) {
        Judey.$cls("EnemyResultInfoText").RemClass("NoneText");
        Judey.$cls("EnemyResult_EnemyInfo").Text("ボス");
        Judey.$query(".EnemyInput_Radio[value='1']").Attr("checked", "true");
      } else {
        Judey.$cls("EnemyResultInfoText").Class("NoneText");
        Judey.$cls("EnemyResult_EnemyInfo").Text("フィールドボス/モブ");
        Judey.$query(".EnemyInput_Radio[value='0']").Attr("checked", "true");        
      }
      Judey.id("EnemyResult_Name").innerText = ValueSet.Name;
    }

    //やりなおし
    Judey.$cls("CustomNo").Event("click", () => {
      alert("キャンセルしました。");
    })

    //確定
    Judey.$cls("CustomOK").Event("click", () => {
      SendSelectionData();//情報反映
      alert("削除しました。");
    })
    
    CancelEvent("CustomNo");
    CancelEvent("CustomOK");
  }
  Phase1();
}
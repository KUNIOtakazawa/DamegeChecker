const ImportArchive = async () => await import(Js_Archive);

/**データ属性 */
class DataAttributes{
    /**メインデータ */
    static MainData = "MainData";
    /**サブデータ */
    static SubData = "SubData";
    /**一時保存データ */
    static TempData = "TempData"
}
/**同期データ属性 */
class ModeAttribute{
    /**通常データ */
    static MyData = "MyData";
    /**同期ホストデータ */
    static SyncHost = "SyncHost";
    /**同期リスナーデータ */
    static SyncListener = "SyncListener"
}
/**取得したデータ属性 */
class FetchDataAttributes{
    /**共有コードデータ */
    static Share = "Share";
    /**セーブ共有データ */
    static SaveShare = "SaveShare";
    /**同期共有データ */
    static SyncShare = "SyncShare";
    /**同期共有読取専用データ */
    static SyncShareRead = "SyncListener";
}
class IDInfo{
    constructor() {
        const elements = localStorage?.getItem("Toram").Jparse() ?? {};

        /**固有ユーザーID */
        this.UserID = elements["UserID"];
        /**データ作成日 */
        this.CreateDate = elements["CreateDate"];
        /**データバージョン */
        this.Version = elements["Version"];
    }
}
class LocalSaveViewAttributes{
    /** @param { LocalSaveComponent } LocalSaveComponent */
    constructor(LocalSaveComponent) {
        /**
         * データ追加日
         * @type { Date }
         */
        this.AppendDate = "";
        
        /**
         * 割り振られたデータID 
         * @type { number }
         * */
        this.DataID = "";

        /**データ属性
         * @type { DataAttributes }
         */
        this.DataAttribute = "";

        /**
         * モード属性
         * @type { ModeAttribute }
         */
        this.ModeAttribute = "";

        /**
         * このデータの名称
         * @type { string }
         */
        this.ComponentName = "";

        /**
         * このコンポーネントに保存されているセーブデータの数
         * @type { number }
         */
        this.SaveCount = 0;
        
        /**
         * このコンポーネントに登録されているカスタム装備品の数
         * @type { number }
         */
        this.CustomEquipmentCount = 0;

        if (LocalSaveComponent) {
            this.AppendDate = LocalSaveComponent.AppendDate;
            this.DataID = LocalSaveComponent.DataID;
            this.DataAttribute = LocalSaveComponent.DataAttribute
            this.ModeAttribute = LocalSaveComponent.ModeAttribute;
            this.ComponentName = LocalSaveComponent.ComponentName;
            this.SaveCount = LocalSaveComponent.SaveCount;
            this.CustomEquipmentCount = LocalSaveComponent.CustomEquipmentCount;
        }
    }   
}
/**コンポーネント情報 */
class ComponentSet{
    /**コンポーネント @type {Array<LocalSaveComponent>} */
    Components;
    /**現在のView情報 @type {LocalSaveViewAttributes} */
    ViewAttributes;
    /**次設定するID @type {number} */
    NextID;

}
/**
 * データの単一コンポーネント
 */
class LocalSaveComponent extends LocalSaveViewAttributes{
    /** @param { LocalSaveViewAttributes} ViewAttributes */
    constructor(ViewAttributes) {
        super();
        /**
         * LocalStorageに保存されているセットデータ
         * @type { object }
         */
        this.LocalSaveData = {};

        if (ViewAttributes) {
            this.AppendDate = ViewAttributes.AppendDate;
            this.DataID = ViewAttributes.DataID;
            this.DataAttribute = ViewAttributes.DataAttribute
            this.ModeAttribute = ViewAttributes.ModeAttribute;
            this.ComponentName = ViewAttributes.ComponentName;
            this.SaveCount = ViewAttributes.SaveCount;
            this.CustomEquipmentCount = ViewAttributes.CustomEquipmentCount;            
        }
    }

    /**コンポーネント情報を取得する。 @return {ComponentSet} */
    static _FetchComponentSet = () => localStorage.getItem("Toram_ExtensionComponents").Jparse();
    
    static SetComponentSet = value => localStorage.setItem("Toram_ExtensionComponents", value);

    /**現在のデータのセーブ数を取得する。 */
    static _GetSaveCount() {
        let Result = 0;
        for (let i = 1; i < 1000; i++){
            if (localStorage?.getItem(`Toram_SaveName${i}`))
                Result++;
        }
        return Result;
    }

    /**現在のデータのカスタム装備品の数を取得する。 */
    static _GetCustomEquipmentCount() {
        let Result = 0;

        const LocalItems = localStorage.getItem("Toram_LocalItems")?.Jparse() ?? {};
        LocalItems.KeyEach(key => {
            if (!key.includes("Combo") && !key.includes("Enemy")) {
                Result += LocalItems[key].Keys().length;
            }
        });

        return Result;
    }
    
    /**ComponentsSetに現在IDの更新済み情報を入れる。 */
    static async _SaveSetNowComponent() {
        const ComponentSet = LocalSaveComponent._FetchComponentSet();
        const NowComponentData = new LocalSaveComponent(ComponentSet["ViewAttributes"]);

        //一時データの場合は何もしない。
        if (NowComponentData.DataAttribute === DataAttributes.TempData) return;

        const res = await ImportArchive();
        res.SaveNowData();
        res.Archive(false);

         //情報を配列に登録
         for (let key in localStorage) {
            if (key.includes("Toram") === false) continue;
            if (key === "Toram_ExtensionComponents") continue;

            NowComponentData.LocalSaveData[key] = localStorage?.getItem(key);
        }      

        //UpdateSaveCount
        NowComponentData.SaveCount = this._GetSaveCount();

        //UpdateCustomItemCount
        NowComponentData.CustomEquipmentCount = this._GetCustomEquipmentCount();

        //現在のデータをExtensionComponentsに記録する。
        ComponentSet["Components"].forEach((item, index) => {
            if (item["DataID"] == NowComponentData.DataID) {
                ComponentSet["Components"][index] = NowComponentData.New();    
            }
        });

        LocalSaveComponent.SetComponentSet(ComponentSet.Json());

        res.Archive(true);
    }

    /**メインデータを取得する。 @return { LocalSaveComponent }*/
    static _FetchMainData() {
        const ComponentSet = this._FetchComponentSet()
        
        /** @type { LocalSaveComponent } */
        const MainData = (() => {
            for (let item of ComponentSet["Components"]) {
                if (item["DataAttribute"] === DataAttributes.MainData) {
                    return item;
                }
            }
            return null;
        })();

        if (MainData === null) throw new Error("メインデータが存在しません。");
        
        return MainData
    }

    /**メインデータの設定を現在の表示データに適用する。 */
    static _CopyMainConfig() {
        const MainData = this._FetchMainData();

        for (let key of MainData.LocalSaveData.Keys()) {
            if (key.includes("Toram") === false) continue;
            if (key.includes("Toram_Data")) continue;
            if (key.includes("Toram_SaveName")) continue;
            if (key === "Toram") continue;  
            if (key === "Toram_ExtensionComponents") continue;   
            if (key === "Toram_LocalItems") continue;
            if (key === "Toram_FavoriteItems") continue;
            if (key === "Toram_CapturedSaveMode") continue;
            if (key === "Toram_CapturedID") continue;
            if (key === "Toram_ListenerCapturedID") continue;

            localStorage?.setItem(key, MainData.LocalSaveData[key]);
        }
    } 

    /**メインデータのカスタム装備品と敵情報を現在データに適用する。 */
    static _CopyMainCustomEquipments() {
        const NowCustom = MainMethod.GetMyLocal();

        const MainData = this._FetchMainData();
        const MainCustom = MainData.LocalSaveData["Toram_LocalItems"]?.Jparse() ?? {};
        
        MainCustom.KeyEach(key => {
            if (!NowCustom[key]) {
                NowCustom[key] = MainCustom[key].New();
            } else {
                MainCustom[key].KeyEach(itemkey => {
                    NowCustom[key][itemkey] = MainCustom[key][itemkey].New();
                });
           }
        });

        MainMethod.SetMyLocal(NowCustom);
    }
    
    /**指定したコンポーネント情報にデータ更新する。現在の入力データは記録しない 
     * @param {LocalSaveComponent} OverWriteData  
     * */
    static async _OverWriteComponentData(OverWriteData, FetchMainConfig) {
        const res = await ImportArchive();
        res.Archive(false);
        res.EndSync_NonUpdateLocalKey();

        //現在の設定データを削除し、取得したIDの設定データに書き換えする。
        for (let key in localStorage) {
            if (key.includes("Toram") === false) continue;
            if (key === "Toram_ExtensionComponents") continue;
            if (key === "Toram") continue;

            localStorage?.removeItem(key);
        }
        for (let key of OverWriteData.LocalSaveData.Keys()) {
            if (key === "Toram") continue;
            if (key === "Toram_ExtensionComponents") continue;    
            
            localStorage?.setItem(key, OverWriteData.LocalSaveData[key]);
        }

        if (FetchMainConfig === true) LocalSaveComponent._CopyMainConfig();

        res.Archive(true);
        res.RepairConfigAll();      
    }

    /**現在使用中のコンポーネント情報を取得する。 */
    static FetchNowComponentInfo() {
        const Result = this._FetchComponentSet();

        Result.ViewAttributes.SaveCount = this._GetSaveCount();
        Result.ViewAttributes.CustomEquipmentCount = this._GetCustomEquipmentCount();
        
        const SaveShareMode = Number(localStorage?.getItem("Toram_CapturedSaveMode") ?? 0);
        Result.ViewAttributes.ModeAttribute = SaveShareMode === 0 ? ModeAttribute.MyData :
            SaveShareMode === 1 ? ModeAttribute.SyncHost
                : ModeAttribute.SyncListener;
        
        this.SetComponentSet(Result.Json());

        return Result.ViewAttributes;
    }

    
    /**新しいメインコンポーネント情報を登録する。 */
    static CreateNewComponents() {
        const Component = new LocalSaveViewAttributes();
        Component.AppendDate = new IDInfo().CreateDate;
        Component.DataID = 1;
        Component.DataAttribute = DataAttributes.MainData;
        Component.ComponentName = "メインデータ";
        Component.SaveCount = this._GetSaveCount();
        Component.CustomEquipmentCount = this._GetCustomEquipmentCount();

        //DataType
        if (localStorage?.getItem("Toram_CapturedID") && localStorage?.getItem("Toram_CapturedSaveMode") == 1) {
            Component.ModeAttribute = ModeAttribute.SyncHost;
        } else {
            Component.ModeAttribute = ModeAttribute.MyData;
        }

        const ComponentSet = {
            Components: [new LocalSaveComponent(Component)],
            ViewAttributes: Component,
            NextID: 2
        };

        localStorage?.setItem("Toram_ExtensionComponents", ComponentSet.Json());
    }  

    /**空のデータをサブデータとして追加する。 @param {string} ComponentName */
    static async AppendEmptySubData(ComponentName) {
        const ComponentSet = LocalSaveComponent._FetchComponentSet();
        const NewComponent = new LocalSaveComponent();

        NewComponent.DataID = ComponentSet.NextID;
        NewComponent.AppendDate = (() => { const D = new Date(); return `${D.getFullYear()}/${D.getMonth() + 1}/${D.getDate()}` })();
        NewComponent.ComponentName = ComponentName;
        NewComponent.DataAttribute = DataAttributes.SubData;
        NewComponent.ModeAttribute = ModeAttribute.MyData;
        NewComponent.SaveCount = 0;
        NewComponent.CustomEquipmentCount = 0;
        NewComponent.LocalSaveData = {
            Toram_Data_Archive: (await import("../SampleData/BH.js")).Data
        };

        ComponentSet.Components.push(NewComponent);
        ComponentSet.NextID++;

        LocalSaveComponent.SetComponentSet(ComponentSet.Json());

        return NewComponent.DataID;
    }
    /**
     * データを追加する。
     * @param {object} AppendData 
     * @param {DataAttributes} DataAttribute 
     * @param {FetchDataAttributes} FetchDataAttribute 
     * @param {string} ComponentName 
     */
    static async AppendNewComponents(AppendData, DataAttribute, FetchDataAttribute, ComponentName) {
        const NewComponent = new LocalSaveComponent();
        NewComponent.DataAttribute = DataAttribute;
        NewComponent.ModeAttribute = ModeAttribute.MyData;
        NewComponent.ComponentName = ComponentName;
        NewComponent.AppendDate = (() => { const D = new Date(); return `${D.getFullYear()}/${D.getMonth() + 1}/${D.getDate()}` })();
        
        //取得データの設定
        if (FetchDataAttribute === FetchDataAttributes.Share) {
            const ObjectData = AppendData.Data[0].Jparse();
            ObjectData.KeyEach(key => {
                if (key !== "Toram" && key !== "Toram_ExtensionComponents") {
                    if (typeof ObjectData[key] === "string")
                        NewComponent.LocalSaveData[key] = ObjectData[key];
                    else
                        NewComponent.LocalSaveData[key] = ObjectData[key].Json();
                }
            });
        }
        else if (FetchDataAttribute === FetchDataAttributes.SaveShare) {
            const ObjectData = AppendData.Data[0].Jparse();
            NewComponent.LocalSaveData = {
                Toram_Data_Archive: ObjectData["SaveData"].Json()
            }

            NewComponent.ComponentName = ObjectData["SaveName"];
        }
        else {
            class SyncDataFetchResult2{
                constructor(FetchResult) {
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
            const ObjectData = new SyncDataFetchResult2(AppendData);
            ObjectData.All.KeyEach(key => {
                if (key !== "Toram" && key !== "Toram_ExtensionComponents") {
                    if (typeof ObjectData.All[key] === "string")
                        NewComponent.LocalSaveData[key] = ObjectData.All[key];
                    else
                        NewComponent.LocalSaveData[key] = ObjectData.All[key].Json();
                }
            });

            if (ObjectData.HostFetch()) {
                NewComponent.ModeAttribute = ModeAttribute.SyncHost;
                NewComponent.LocalSaveData["Toram_CapturedSaveMode"] = "1";
                NewComponent.LocalSaveData["Toram_CapturedID"] = ObjectData.ID;
            } else {
                NewComponent.ModeAttribute = ModeAttribute.SyncListener;
                NewComponent.LocalSaveData["Toram_CapturedSaveMode"] = "2";
                NewComponent.LocalSaveData["Toram_CapturedID"] = "";
            }
            NewComponent.LocalSaveData["Toram_ListenerCapturedID"] = ObjectData.ListenerID;
        }

        //同期コード以外で取得した場合は同期IDを無視する。
        if (NewComponent.ModeAttribute === ModeAttribute.MyData) {
            NewComponent.LocalSaveData["Toram_CapturedSaveMode"] = "0";
            NewComponent.LocalSaveData["Toram_CapturedID"] = "";
            NewComponent.LocalSaveData["Toram_ListenerCapturedID"] = "";
        }

        //一時データ
        if (NewComponent.DataAttribute === DataAttributes.TempData) {
            const ComponentSet = LocalSaveComponent._FetchComponentSet();
            ComponentSet.ViewAttributes = new LocalSaveViewAttributes(NewComponent);
            LocalSaveComponent.SetComponentSet(ComponentSet.Json());

            return await this._OverWriteComponentData(NewComponent, true);
        }
        //メインデータ
        if (NewComponent.DataAttribute === DataAttributes.MainData) {
            NewComponent.DataID = 1;

            const ComponentSet = LocalSaveComponent._FetchComponentSet();
            ComponentSet.Components[0] = NewComponent;
            ComponentSet.ViewAttributes = new LocalSaveViewAttributes(NewComponent);   

            LocalSaveComponent.SetComponentSet(ComponentSet.Json());
            return await LocalSaveComponent._OverWriteComponentData(NewComponent);
        }
        //サブデータ
        if (NewComponent.DataAttribute === DataAttributes.SubData) {
            const ComponentSet = LocalSaveComponent._FetchComponentSet();

            NewComponent.DataID = ComponentSet.NextID;
            ComponentSet.Components.push(NewComponent);
            ComponentSet.NextID++;

            LocalSaveComponent.SetComponentSet(ComponentSet.Json());
            return await LocalSaveComponent.ChangeComponent(NewComponent.DataID, false);            
        }
    }
    /**現在のデータを指定したIDのデータに切替する。
     * @param { number } ChangeID 入れ替えするID
     * @param { boolean } UseMainDataConfig メインデータの設定を使用する場合にTrue
     */
    static async ChangeComponent(ChangeID, UseMainDataConfig) {
        const res = await ImportArchive();
        res.Archive(false);
        res.EndSync_NonUpdateLocalKey();

        //現在の記録をExtensionComponentsに帰す。
        await this._SaveSetNowComponent();

        const ComponentSet = this._FetchComponentSet();
        /**
         * 指定したIDのデータを取得する。
         * @type { LocalSaveComponent }
         */
        const TargetComponentData = (() => { 
            let Result = null;
            ComponentSet.Components.forEach((item, index) => {
                if (item["DataID"] == ChangeID) {
                    Result = ComponentSet.Components[index].New();
                }
            });

            return Result;
        })();
        if (TargetComponentData === null) throw new Error("切替先のデータIDが存在しません。");

        ComponentSet.ViewAttributes = new LocalSaveViewAttributes(TargetComponentData);

        //現在の設定データを削除し、取得したIDの設定データに書き換えする。
        for (let key in localStorage) {
            if (key.includes("Toram") === false) continue;
            if (key === "Toram_ExtensionComponents") continue;
            if (key === "Toram") continue;

            localStorage?.removeItem(key);
        }
        for (let key of TargetComponentData.LocalSaveData.Keys()) {
            if (key === "Toram") continue;
            if (key === "Toram_ExtensionComponents") continue;    
            
            localStorage?.setItem(key, TargetComponentData.LocalSaveData[key]);
        }

        LocalSaveComponent.SetComponentSet(ComponentSet.Json());

        if (UseMainDataConfig === true) LocalSaveComponent._CopyMainConfig();

        
        if ([ModeAttribute.SyncHost, ModeAttribute.SyncListener].includes(TargetComponentData.ModeAttribute)) {
            res.Archive(true);
            res.ReStartSyncMode();
            
            return;
        }

        res.Archive(true);
        res.RepairConfigAll();
        
    }
}

/**現在の情報がテンプレートであるか確認し、テンプレートである場合は削除してメインデータに切り替える。 */
export async function DeleteTemplateData() {
    if (LocalSaveComponent._FetchComponentSet().ViewAttributes.DataAttribute === DataAttributes.TempData) {
        await LocalSaveComponent.ChangeComponent(1, false);
    }    
}

/**コンポーネントスロットが存在しているか確認する。 */
export function HasExtensionComponents() {
    try {
        const Components = localStorage?.getItem("Toram_ExtensionComponents")?.Jparse() ?? null;
        if (Components === null) return false;
        if (!Components["Components"]) return false;
        if (!Components["ViewAttributes"]) return false;

        return true;        
    } catch {
        return false;
    }

};

/**コンポーネントを作成する。 */
export function CreateComponents() {
    LocalSaveComponent.CreateNewComponents();
}

/**今のデータ情報を取得する。 */
export function FetchViewComponent() {
    return LocalSaveComponent.FetchNowComponentInfo();
}

/**コンポーネント情報を取得する。 */
export function FetchComponentSet() {
    return LocalSaveComponent._FetchComponentSet();
}

/**現在表示データの名称を書き換えする。 */
export function RenameViewComponentName(value) {
    const Components = LocalSaveComponent._FetchComponentSet();
    Components.ViewAttributes.ComponentName = value;

    Components.Components.forEach(item => {
        if (item.DataID === Components.ViewAttributes.DataID)
            item.ComponentName = value;
    });

    LocalSaveComponent.SetComponentSet(Components.Json());
}

/**コンポーネントを指定した情報に入れ替えする。 */
export async function ChangeComponent(DataID, UserMainData) {
   return await LocalSaveComponent.ChangeComponent(DataID, UserMainData);
}

/**指定したIDのデータを削除し、メインデータを読み込みする。 */
export async function DeleteComponent(DataID) {
    const Components = LocalSaveComponent._FetchComponentSet();

    Components.Components = Components.Components.filter(component => component.DataID != DataID);
    Components.Components = Components.Components.sort((a, b) => a.DataAttribute === DataAttributes.MainData ? -1 : b.DataAttribute === DataAttributes.MainData ? 1 : 0);
    Components.Components.forEach((component, index) => component.DataID = index + 1);
    Components.NextID = Components.Components.length + 1;

    LocalSaveComponent.SetComponentSet(Components.Json());
    return await LocalSaveComponent.ChangeComponent(1, false);
}

/**空のサブデータを追加する。 */
export async function AppendEmptyComponent(NewName) {
    return await LocalSaveComponent.AppendEmptySubData(NewName);
}

/**取得したデータを新しく追加する。 */
export async function AppendNewComponents(AppendData, DataAttr, FetchDataAttre, ComponentName) {
    return await LocalSaveComponent.AppendNewComponents(AppendData, DataAttr, FetchDataAttre, ComponentName);
}

/**メインデータのカスタム装備と敵を現データにコピーする。 */
export  function AppendMainCustom() {
    LocalSaveComponent._CopyMainCustomEquipments();
}
/**メインデータの入力設定をコピーする。 */
export function SetMainConfig() {
    LocalSaveComponent._CopyMainConfig();
}
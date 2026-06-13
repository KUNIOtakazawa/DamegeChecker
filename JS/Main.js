
//加算系補正値common
class BaseStatus {
  static StatusData = {
    HP: "最大HP+",
    HP_Rate: "最大HP(%)",
    MP: "MP+",
    STR: "STR+",
    STR_Rate: "STR(%)",
    INT: "INT+",
    INT_Rate: "INT(%)",
    VIT: "VIT+",
    VIT_Rate: "VIT(%)",
    AGI: "AGI+",
    AGI_Rate: "AGI(%)",
    DEX: "DEX+",
    DEX_Rate: "DEX(%)",
    HIT: "命中+",
    HIT_Rate: "命中(%)",
    FREE: "回避+",
    FREE_Rate:"回避(%)",
    ASPD: "攻撃速度+",
    ASPD_Rate: "攻撃速度(%)",
    CSPD: "詠唱速度+",
    CSPD_Rate: "詠唱速度(%)",
    SPD: "行動速度(%)",
    ATK: "ATK+",
    ATK_Rate: "ATK(%)",
    ATKPenetrate: "物理貫通(%)",
    MATK: "MATK+",
    MATK_Rate: "MATK(%)",
    MATKPenetrate: "魔法貫通(%)",
    WeponATK: "武器ATK+",
    WeponATK_Rate:"武器ATK(%)",
    Critical: "ｸﾘﾃｨｶﾙ率+",
    Critical_Rate: "ｸﾘﾃｨｶﾙ率(%)",
    CriticalDamege: "ｸﾘﾃｨｶﾙﾀﾞﾒｰｼﾞ+",
    CriticalDamege_Rate: "ｸﾘﾃｨｶﾙﾀﾞﾒｰｼﾞ(%)",
    Distance: "近距離の威力(%)",
    LongDistance: "遠距離の威力(%)",
    Attribute: "有利属性攻撃(%)",
    SwordPower: "抜刀攻撃+",
    SwordPower_Rate: "抜刀攻撃(%)",
    Stable: "安定率(%)",
    Resist_Health: "異常耐性(%)",
    Resist_Physical: "物理耐性(%)",
    Resist_Magic: "魔法耐性(%)",
    Hate: "ヘイト(%)",
    HateLittle: "マイナスヘイト(%)",
    MPRecovery: "攻撃MP回復+",
    MPRecovery_Rate: "攻撃MP回復(%)",

    Hide_BaseWeponATK: "基礎武器ATK",
    MainWeponATK: "メイン武器ATK",
    SubWeponATK: "サブ武器ATK",
    
    //2024/4/18~追加分(仮)
    Resist_Fire: "火耐性(%)",
    Resist_Aqua: "水耐性(%)",
    Resist_Wind: "風耐性(%)",
    Resist_Ground: "地耐性(%)",
    Resist_Light: "光耐性(%)",
    Resist_Darkness: "闇耐性(%)",
    Resist_Normal: "無耐性(%)",
    
    Barrier_Physical: "物理バリア+",
    Barrier_Magic: "魔法バリア+",
    Barrier_Per: "割合バリア(%)",
    Barrier_Repair:"バリア速度(%)",

    Matigation_Line: "直線軽減(%)",
    Matigation_Rush: "突進軽減(%)",
    Matigation_Bullet: "弾丸軽減(%)",
    Matigation_Surround: "周囲軽減(%)",
    Matigation_Range: "範囲軽減(%)",
    Matigation_Pain: "痛床軽減(%)",
    Matigation_Meteo: "隕石軽減(%)",
    Matigation_Blade: "射刃軽減(%)",
    Matigation_Kirby: "吸引軽減(%)",
    Matigation_Explosion: "爆発軽減(%)",
    
    ATK$STR: "ATK+(STR)(%)",
    ATK$INT: "ATK+(INT)(%)",
    ATK$VIT: "ATK+(VIT)(%)",
    ATK$AGI: "ATK+(AGI)(%)",  
    ATK$DEX: "ATK+(DEX)(%)",
  
    MATK$STR: "MATK+(STR)(%)",
    MATK$INT:"MATK+(INT)(%)",
    MATK$VIT:"MATK+(VIT)(%)",
    MATK$AGI:"MATK+(AGI)(%)",
    MATK$DEX: "MATK+(DEX)(%)",

    Special_DefBreak: "防御崩し(%)",
    Special_Future: "先読み(%)",
    
    NaturalRecovery_HP: "HP自然回復+",
    NaturalRecovery_HP_Rate:"HP自然回復(%)",
    NaturalRecovery_MP:"MP自然回復+",
    NaturalRecovery_MP_Rate: "MP自然回復(%)",

    Guard_Power: "Guard力(%)",
    Guard_Repair: "Guard回復(%)",
    Avoid_Repair: "Avoid回復(%)",
      
    Pursuit_ATK: "物理追撃(%)",
    Pursuit_MATK: "魔法追撃(%)",
       
    AbsHIT: "絶対命中(%)",
    AbsFREE: "絶対回避(%)",
    ItemSpeed: "道具速度+",
    FirstReturn: "復帰短縮(%)",

    //保留
    DEF: "DEF+",
    DEF_Rate: "DEF(%)",
    MDEF:"MDEF+",
    MDEF_Rate: "MDEF(%)",
  }

  //検索ワード用
  static Status_Words = {
    HP: ["最大HP","えいちぴー"],
    HP_Rate: ["最大HP(%)","HP%","えいちぴーぱーれーと",],
    MP: ["最大MP+","えむぴー"],
    STR: ["STR+","えすてぃーあーる"],
    STR_Rate: ["STR(%)","STR%","えすてぃーあーるぱーれーと"],
    INT: ["INT+","いんと"],
    INT_Rate: ["INT(%)","INT%","いんとぱーれーと"],
    VIT: ["VIT+","びっと"],
    VIT_Rate: ["VIT(%)","VIT%","びっとぱーれーと"],
    AGI: ["AGI+","あじ"],
    AGI_Rate: ["AGI(%)","AGI%","あじぱーれーと"],
    DEX: ["DEX+","でっくす","でくす"],
    DEX_Rate: ["DEX(%)","DEX%","でっくすぱーれーと","でくす"],
    HIT: ["命中+","めいちゅう","ひっと"],
    HIT_Rate: ["命中(%)","命中%","めいちゅう","ひっとれーと"],
    FREE: ["回避+","ふりー","かいひ"],
    FREE_Rate:["回避(%)","回避%","ふりー","かいひぱーれーと"],
    ASPD: ["攻撃速度+","こうげきそくど","えーえすぴーど"],
    ASPD_Rate: ["攻撃速度(%)","攻撃速度%","こうげきそくど","えーえすぴーどぱーれーと"],
    CSPD: ["詠唱速度+","えいしょうそくど","しーえすぴーど"],
    CSPD_Rate: ["詠唱速度(%)","詠唱速度%","えいしょうそくど","しーえすぴーどぱーれーと"],
    SPD: ["行動速度(%)","行動速度%","こうどうそくど"],
    ATK: ["ATK+","あたく","あたっく"],
    ATK_Rate: ["ATK(%)","ATK%","あたく","あたっくぱーれーと"],
    ATKPenetrate: ["物理貫通(%)","物理貫通%","ぶつりかんつう"],
    MATK: ["MATK+","またく"],
    MATK_Rate: ["MATK(%)","MATK%","またくぱーれーと"],
    MATKPenetrate: ["魔法貫通(%)","魔法貫通%","まほうかんつう"],
    WeponATK: ["武器ATK+","ぶきあたく","ぶきあたっく"],
    WeponATK_Rate:["武器ATK(%)","武器ATK%","ぶきあたく","ぶきあたっく"],
    Critical: ["クリティカル率+","ｸﾘﾃｨｶﾙ率+","くりてぃかるりつ"],
    Critical_Rate: ["クリティカル率(%)","クリティカル率%","ｸﾘﾃｨｶﾙ率(%)","くりてぃかるりつぱーれーと"],
    CriticalDamege: ["クリティカルダメージ+","ｸﾘﾃｨｶﾙﾀﾞﾒｰｼﾞ+","くりてぃかるだめーじ"],
    CriticalDamege_Rate: ["クリティカルダメージ(%)","クリティカルダメージ%","ｸﾘﾃｨｶﾙﾀﾞﾒｰｼﾞ(%)","くりてぃかるだめーじぱーれーと"],
    Distance: ["近距離の威力(%)","きんきょりのいりょく"],
    LongDistance: ["遠距離の威力(%)","えんきょりのいりょく"],
    Attribute: ["有利属性攻撃(%)","ゆうりぞくせいこうげき"],
    SwordPower: ["抜刀攻撃+","ばっとうこうげき"],
    SwordPower_Rate: ["抜刀攻撃(%)","抜刀攻撃%","ばっとうこうげきぱーれーと"],
    Stable: ["安定率(%)","あんていりつぱーれーと"],
    Resist_Health: ["異常耐性(%)","いじょうたいせいぱーれーと"],
    Resist_Physical: ["物理耐性(%)","ぶつりたいせいぱーれーと"],
    Resist_Magic: ["魔法耐性(%)","まほうたいせいぱーれーと"],
    Hate: ["ヘイト(%)","へいとぱーれーと"],
    MPRecovery: ["攻撃MP回復+","えむぴーこうげきかいふく"],
    MPRecovery_Rate: ["攻撃MP回復(%)","攻撃MP回復%","えむぴーこうげきかいふく"],

    //2024/4/18~追加分(仮)
    Resist_Fire: ["火耐性(%)","ひたいせいぱーれーと"],
    Resist_Aqua: ["水耐性(%)","みずたいせいぱーれーと"],
    Resist_Wind: ["風耐性(%)","かぜたいせいぱーれーと"],
    Resist_Ground: ["地耐性(%)","ちたいせいぱーれーと"],
    Resist_Light: ["光耐性(%)","ひかりたいせいぱーれーと"],
    Resist_Darkness: ["闇耐性(%)","やみたいせいぱーれーと"],
    Resist_Normal: ["無耐性(%)","むたいせいぱーれーと"],
    
    Barrier_Physical: ["物理バリア+","ぶつりばりあ"],
    Barrier_Magic: ["魔法バリア+","まほうばりあ"],
    Barrier_Per: ["割合バリア(%)","わりあいばりあ"],
    Barrier_Repair:["バリア速度(%)","ばりあそくどぱーれーと"],

    Matigation_Line: ["直線軽減(%)","ちょくせんけいげんぱーれーと"],
    Matigation_Rush: ["突進軽減(%)","とっしんけいげんぱーれーと"],
    Matigation_Bullet: ["弾丸軽減(%)","だんがんけいげんぱーれーと"],
    Matigation_Surround: ["周囲軽減(%)","しゅういけいげんぱーれーと"],
    Matigation_Range: ["範囲軽減(%)","はんいけいげんぱーれーと"],
    Matigation_Pain: ["痛床軽減(%)","いたゆかけいげんぱーれーと"],
    Matigation_Meteo: ["隕石軽減(%)","いんせきけいげんぱーれーと"],
    Matigation_Blade: ["射刃軽減(%)","しゃじんけいげんぱーれーと"],
    Matigation_Kirby: ["吸引軽減(%)","きゅういんけいげんぱーれーと"],
    Matigation_Explosion: ["爆発軽減(%)","ばくはつけいげんぱーれーと"],
    
    ATK$STR: ["ATK+(STR)(%)","あたくあっぷ","えすてぃーあーるぱーれーと"],
    ATK$INT: ["ATK+(INT)(%)","あたくあっぷ","えすてぃーあーるぱーれーと"],
    ATK$VIT: ["ATK+(STR)(%)","あたくあっぷ","えすてぃーあーるぱーれーと"],
    ATK$AGI: ["ATK+(AGI)(%)","あたくあっぷ","あじぱーれーと"],
    ATK$DEX: ["ATK+(DEX)(%)","あたくあっぷ","でくすぱーれーと"],
  
    MATK$STR: ["MATK+(STR)(%)","またくあっぷ","えすてぃーあーるぱーれーと"],
    MATK$INT: ["MATK+(INT)(%)","またくあっぷ","えすてぃーあーるぱーれーと"],
    MATK$VIT: ["MATK+(STR)(%)","またくあっぷ","えすてぃーあーるぱーれーと"],
    MATK$AGI: ["MATK+(AGI)(%)","またくあっぷ","あじぱーれーと"],
    MATK$DEX: ["MATK+(DEX)(%)","またくあっぷ","でくすぱーれーと"],

    Special_DefBreak: ["防御崩し(%)","ぼうぎょくずしぱーれーと"],
    Special_Future: ["先読み(%)","さきよみぱーれーと"],
    
    NaturalRecovery_HP: ["HP自然回復+","えいちぴーしぜんかいふく"],
    NaturalRecovery_HP_Rate: ["HP自然回復(%)","えいちぴーしぜんかいふくぱーれーと"],
    NaturalRecovery_MP:["MP自然回復+","えむぴーしぜんかいふく"],
    NaturalRecovery_MP_Rate: ["MP自然回復(%)","えむぴーしぜんかいふくぱーれーと"],

    Guard_Power: ["Guard力(%)","がーどちから","がーどりょく"],
    Guard_Repair: ["Guard回復(%)","がーどかいふくぱーれーと"],
    Avoid_Repair: ["Avoid回復(%)","あヴぉいどかいふく","アヴォイド"],
      
    Pursuit_ATK: ["物理追撃(%)","ぶつりついげきぱーれーと"],
    Pursuit_MATK: ["魔法追撃(%)","まほうついげきぱーれーと"],
       
    AbsHIT: ["絶対命中(%)","ぜったいめいちゅうぱーれーと"],
    AbsFREE: ["絶対回避(%)","ぜったいかいひぱーれーと"],
    ItemSpeed: ["道具速度+","どうぐそくど"],
    FirstReturn: ["復帰短縮(%)","ふっきたんしゅく"],
  }

  static WeponAttirbuteKeys = [
    "MainWeponATK",
    "MainWepon_Stable",
    "MainWepon_Smelting",
    "SubWeponATK",
    "SubWepon_Stable",
    "SubWepon_Smelting",
  ];
  constructor(RetKeysNames) {
    if (RetKeysNames === true) {
      const Keys = Object.keys(BaseStatus.StatusData);
      let value = {};
      for (let key of Keys) {
        value[key] = 0;
      }
      return value
    } else {
      return BaseStatus.StatusData;
    }
  }
}
class AtackerStatus{
  constructor(RetKeysNames) {
    const Filter = ["ATK", "STR", "INT", "VIT", "AGI", "DEX", "CriticalDamege","Attribute","Distance", "Stable", "Sword"];
    const Keys = Object.keys(BaseStatus.StatusData).filter((Key) => { 
      for (let i = 0; i < Filter.length; i++){
        if (Key.includes(Filter[i])) return true;
      }
    });
    const value = {};
    if (RetKeysNames === true) {
      for (let key of Keys) {
        value[key] = 0;
      }
      return value
    } else {
      for (let key of Keys) {
        value[key] = BaseStatus.StatusData[key];
      }
      return value;
    }
  }
}
/**
 * 同カテゴリー内のグループ包括クラス
 */
class FakeSelectorSet{
  constructor(Damege, FavoriteKeyName, Item, Refs) {
    /**現在のダメージ */
    this.AverageDamage = Damege;
    /**お気に入りに登録するベースのキー名称 */
    this.FavoriteKeyName = FavoriteKeyName;
    /**@type { Array<FakeSelector> } */
    this.Item = Item;
    
    /**現在のATK */
    this.ATK = 0;
    /**現在のMATK */
    this.MATK = 0;
    /**現在のHP */
    this.HP = 0;
    /**現在のMP */
    this.MP = 0;
    /**現在のASPD */
    this.ASPD = 0;
    /**現在のCSPD */
    this.CSPD = 0;
    /**現在のCritical率 */
    this.Critical = 0;
    /**現在のHIT */
    this.HIT = 0;
    /**現在のヘイト*/
    this.Hate = 0;
    /**現在の行動速度 */
    this.SPD = 0;

    if (Refs?.Status) {
      this.ATK = Refs.Status.AllATK;
      this.MATK = Refs.Status.MATK;
      this.HP = Refs.Status.HP;
      this.MP = Refs.Status.MP;
      this.ASPD = Refs.Status.ASPD;
      this.CSPD = Refs.Status.CSPD;
      this.SPD = Refs.Status.SPD;
      this.Critical = Refs.Status.Critical;
      this.HIT = Refs.Status.HIT;
      this.Hate = Refs.Status.Hate;
    };
  }
}
/**
 * 同グループ内の装備品情報
 */
class FakeSelector{
  constructor(Desc) {
      /**グループの名称 @type {string | undefined } */
    this.Description = Desc;
    /** 装備アイテム　@type  { Array<FakeSelectorItem> }*/
    this.Item = [];
  }

  SortItem = () => {
    const GetRank = (a, b, key) => {
      const CheckKey = key.replace("_Asc", "");
      if (a[CheckKey] === undefined) return 0;

      return !key.includes("_Asc") ? (b[CheckKey] - a[CheckKey]) : (a[CheckKey] - b[CheckKey]);
    }
    this.Item.sort((a, b) => {
      const { FakeDifference_Key1, FakeDifference_Key2, FakeDifference_Key3 } = Data.NotSavedInfo;
      const first = GetRank(a, b, FakeDifference_Key1);
      const second = GetRank(a, b, FakeDifference_Key2);
      const therd = GetRank(a, b, FakeDifference_Key3);

      if (first !== 0) return first;
      if (second !== 0) return second;
      if (therd !== 0) return therd;
      return 0;
    });
  }
}
/**
 * 単体装備品の情報
 */
class FakeSelectorItem{
  constructor(KeyNo, Equipment, IsFavorite) {
    /**値キー */
    this.KeyNo = KeyNo;
    /**装備品 */
    this.Equipment = Equipment;
    /**この装備にした時の平均ダメージ */
    this.AverageDamege = null;
    /**現在の平均ダメージとの差 */
    this.DifferenceDamege = null;
    /**追加定義 */
    this.Extension = {};
    /**お気に入り設定されている場合にTrue */
    this.IsFavorite = IsFavorite;
    /**現在のATKとの差 */
    this.DifferenceATK;
    /**現在のMATKとの差 */
    this.DifferenceMATK;
    /**現在のHPとの差 */
    this.DifferenceHP;
    /**現在のMPとの差 */
    this.DifferenceMP;
    /**現在のASPDとの差 */
    this.DifferenceASPD;
    /**現在のCSPDとの差 */
    this.DifferenceCSPD;
    /**現在のCritical率との差 */
    this.DifferenceCritical;
    /**現在のHITとの差 */
    this.DifferenceHIT;
    /** 現在のヘイトとの差*/
    this.DifferenceHate;
    /**現在の行動速度との差 */
    this.DifferenceSPD;
  }
  /**
   * 引数に記録されている状態からの際を記録する。
   * @param { FakeSelectorSet } FakeSet 
   */
  SetDifferenceStatus = (FakeSet, Refs) => {
    this.DifferenceATK = Refs.Status.AllATK - FakeSet.ATK;
    this.DifferenceMATK = Refs.Status.MATK - FakeSet.MATK;
    this.DifferenceHP = Refs.Status.HP - FakeSet.HP;
    this.DifferenceMP = Refs.Status.MP - FakeSet.MP;
    this.DifferenceASPD = Refs.Status.ASPD - FakeSet.ASPD;
    this.DifferenceCSPD = Refs.Status.CSPD - FakeSet.CSPD;
    this.DifferenceSPD = Refs.Status.SPD - FakeSet.SPD;
    this.DifferenceCritical = Refs.Status.Critical - FakeSet.Critical;
    this.DifferenceHIT = Refs.Status.HIT - FakeSet.HIT;
    this.DifferenceHate = Refs.Status.Hate - FakeSet.Hate;  
  }
}
//ForEnemy
class Enemy {
  static _Text = { nomal: [0, 1], hard: [10, 2], luna: [20, 4], ulti: [40, 6] };
  constructor(Name, Level, DEF, MDEF, Physical, Magic, IsBoss, IsNonAttribute = false, IsRaidBoss =false) {
    this.Name = Name;
    this.lv = Level;
    this.def = DEF;
    this.mdef = MDEF;
    this.Lv = (dif = null) => this.lv + this._Difficulty("level", dif);
    this.DEF = (dif = null) => this.def * this._Difficulty("def", dif);
    this.MDEF = (dif = null) => this.mdef * this._Difficulty("def", dif);
    this.Resist_Physical = Physical;
    this.Resist_Magic = Magic;
    this.IsBoss = IsBoss;
    this.IsNonAttribute = IsNonAttribute;
    this.IsRaidBoss = IsRaidBoss;
  }
  _Difficulty = (v = "level", dif) => {
    const IsDifficulty =
      (this.IsBoss === false || this.IsRaidBoss) ? "nomal" :(dif || Data.OtherInfo.IsDifficulty) ;
    const ans = v === "level" ? 0 : 1;
    return Enemy._Text[IsDifficulty][ans];
  };

  static Difficulty_RequireDifHit = (TargetEnemy, Difficulty) => {
    const EnemyFree = TargetEnemy?.FREE ?? 0;
    const Rate = TargetEnemy?.IsBoss ? Enemy._Text[Difficulty][1] ?? 1 : 1;
    return EnemyFree * Rate;
  }
}
/**攻撃スキルを構成する為のクラス */
class AddSkillSet{
  /**
   * 
   * @param { String } SkillName スキル名称
   * @param { SkillGroup } SkillGroup スキル分類
   * @param { Torauma } ShowTorauma 参照慣れ分類
   * @param { Torauma } GiveTorauma 付与慣れ分類
   * @param { Number } SkillHitCount スキルヒット数(アシュラ用)
   * @param { Number } MP 消費MP
   * @param { Array<AddSkill> } DamegeRefs SkillSetArray
   */
  constructor(SkillName, SkillGroup, GiveTorauma, SkillHitCount, MP, DamegeRefs, ShowTorauma) {
    this.Name = SkillName;
    this.Group = SkillGroup;
    this.Torauma = GiveTorauma;
    if (ShowTorauma) this.ShowTorauma = ShowTorauma;
    this.Count = SkillHitCount;
    this.MP = MP;
    
    DamegeRefs?.forEach((elem, i) => {
      this[SKILLKEYS[i]] = elem;
    });
  }
}

//ForSkill
class AddSkill {
  constructor(
    Reference,
    B_Power,
    B_FixedPower,
    MaxRange,
    IsMagicalSkill =false,
    IsDEF = true,
    IsPhysical = true,
    IsDistance = true,
    IsSwordPower = false,
    Option = null,
    /**
     * CutRate:小数点以下の数値反映確認値
     * Attribute:スキルの固定属性
     * G_Hit:必中
     * AbsCrit:確定クリティカル
     * NoneCombo:コンボ効果無効
     * IsLongRange:ロングレンジ適用確認
     * AbsAttribute:確定有利属性
     * OnlyMagicStable:魔法属性扱いだが、魔法有利ボーナスは適用しない。
     * */
  ) {
    this.Reference = Reference; //ATKとMATKの判定はスキル毎のこの数値参照
    this.BasePower = B_Power;
    this.BaseFixedPower = B_FixedPower;
    this.MaxRange = MaxRange;
    this.IsMagicalSkill = IsMagicalSkill;
    this.IsDEF = IsDEF;
    this.IsPhysical = IsPhysical;
    this.IsDistance = IsDistance;
    this.IsSwordPower = IsSwordPower;
    this.CutRate = 0;
    this.PowerEffect = "";
    if (Option === null) return;
    Object.keys(Option).forEach(Key => this[Key] = Option[Key]);
    
  }
}
class MagicSkill extends AddSkill{
  constructor(B_Power, B_FixedPower, MaxRange, IsDistance, Option = null) {
    super(
      Refs => Refs.Status.MATK,
      B_Power,
      B_FixedPower,
      MaxRange,
      true,
      false,
      false,
      IsDistance,
      false,
      Option
    );
    this.PowerEffect = "MATK"
  }
}
class PhysicsSkill extends AddSkill{
  constructor(B_Power, B_FixedPower, MaxRange, IsDistance, IsSwordPower = false, Option = null) {
    super(
      Refs => Refs.Status.AllATK,
      B_Power,
      B_FixedPower,
      MaxRange,
      false,
      true,
      true,
      IsDistance,
      IsSwordPower,
      Option
    );
    this.PowerEffect = "ATK"
  }
}
//SkillCharge
class SkillCharge{
  constructor(DefaultSkillLv, MinLv, MaxLv) {
    this.DefaultLv = DefaultSkillLv;
    this.MinLv = MinLv;
    this.MaxLv = MaxLv;
  }
}
class SkillChargeType{
  /** 段数 */
  static Step = 4;
  /** チャージ数 */
  static Charge = 1;
  /** 溜め*/
  static Stock = 2;
  /** 敵 */
  static Enemy = 3;
  /**メートル */
  static M = 5;
}
//コンボスキルのスキル構成
class SkillComponent{
  constructor(ComboName, ComboMode, SkillSetArray,FirstToraumaArray,ToraumaMovement) {
    this.Name = ComboName;
    this.ComboMode = ComboMode;
    this.SkillSetArray = SkillSetArray;
    //モードにより使用
    this.FirstTorauma = FirstToraumaArray;//初期慣れ値
    this.ToraumaMovement = ToraumaMovement;//慣れ変動値
    this.AllTorauma = Torauma.Create(100, 100, 100);//スキル使用後の慣れセット
    this.ResultToraumaArray = [];
    this.AllMP = 0;
  }
}
class SkillSet{
  constructor(SkillPropertyName = null, ComboRate = 1, ToraumeRate = 1, IsCritical = null, IsAttribute = null,
    Stable = null, ComboAttribute = null,
    Torauma = null,ShowTorauma = null, HitRate = null, CriticalRate = null) {
    this.SkillPropertyName = SkillPropertyName;
    this.ComboRate = ComboRate;
    this.ToraumaRate = ToraumeRate;
    this.IsCritical = IsCritical;//Critical,Glaze,base
    this.IsAttribute = IsAttribute;//Attribute,Awake,false
    this.Stable = Stable;
    this.ComboAttribute = ComboAttribute;//コンボ種類
    this.Torauma = Torauma;//慣れ指定:表示用
    this.ShowTorauma = ShowTorauma;//慣れ参照指定:表示用
    this.ToraumaCount = 1;//慣れ回数
    //
    this.HitRate = HitRate;
    this.CriticalRate = CriticalRate;    
    this.MP = 0;
    this.IsEnable = true;
  };
}  
class Combo{
  /** 効果なし */
  static Nomal = "none";
  /** 連撃 */
  static Eco = "eco";
  /** 強打 */
  static Strong = "strong";
  /** 充填*/
  static Save = "save";
  /** 吸血 */
  static Blood = "blood";
  /** 起点 */
  static First = "first";
  /** 反射 */
  static Reflect = "reflect"
  static Text = Res => {
    switch (Res) {
      case Combo.Eco: return "連撃";
      case Combo.Strong: return "強打";
      case Combo.Save: return "充填";
      case Combo.Blood: return "吸血";
      case Combo.First: return "起点";
      case Combo.Reflect: return "反射";
      default: return "";
    }
  }
}
class ComboModes{
  /** デフォルト入力の編集禁止モード */
  static Master = "master";
  /** 単純連結モード */
  static Connect = "connect";
  /** コンボ効果厳格適用モード */
  static Combo = "combo";
  /** Combo+慣れ変動厳格適用モード */
  static Battle = "battle";
  /** 倍率自由入力モード */
  static Free = "free";
  static Text = Res =>{
    switch (Res) {
      case ComboModes.Master: return "サンプル";
      case ComboModes.Connect: return "コネクトモード";
      case ComboModes.Combo: return "コンボモード";
      case ComboModes.Battle: return "戦闘モード";
      case ComboModes.Free: return "自由戦闘モード";
    }
  }
}
class Torauma{
  /** 通常慣れ*/
  static Nomal = "nomal";
  /** 物理慣れ */
  static Physical = "physical";
  /** 魔法慣れ */
  static Magic = "magic";
  /** 慣れ無し */
  static No = "no";
  static Text = (Res) => {
    switch (Res) {
      case Torauma.Nomal: return "通常慣れ";
      case Torauma.Physical: return "物理慣れ";
      case Torauma.Magic: return "魔法慣れ";
    }
  }
  static Text2 = (Res) => {
    switch (Res) {
      case Torauma.Nomal: return "通常参照";
      case Torauma.Physical: return "物理参照";
      case Torauma.Magic: return "魔法参照";
    }
  }
  static Create = (Nomal, Physical, Magic) => {
    const Result = {
      nomal: Nomal,
      physical: Physical,
      magic: Magic,
    }
    return Result;
  }
}
class WeponAttribute{
  /** 無属性 */
  static Nomal = false;
  /** 属性攻撃 */
  static Other = "Other";
  /** 弱点属性 */
  static Attribute = true;
  /** 不利属性 */
  static NonAttribute = "Bad";
  static Text = Res => {
    switch (Res) {
      case WeponAttribute.Nomal: return "無属性";
      case WeponAttribute.Other: return "属性有";
      case WeponAttribute.Attribute: return "弱点属性";
      case WeponAttribute.NonAttribute: return "不利属性";
    }
  }
}
//common
class SelectorBase{
  constructor(Name, Base,FilterNo = 0) {
    this.Name = Name;
    this.Base = Base;
    this.FilterNo = FilterNo;
  }
}
//On,Offbase
class AddBuff extends SelectorBase{
  constructor(Name, Base = {}, TreeNo, Options = {}) {
    super(Name, Base);
    this.TreeNo = TreeNo;
    this.IsActive = false;
    this.Max = 10;
    if (Options["Wepons"]) this.Wepons = Options["Wepons"];//武器制限
    if (Options["SubWepons"]) this.SubWepons = Options["SubWepons"];//武器制限
    if (Options["SetWepons"]) this.SetWepons = Options["SetWepons"];//セット武器制限
    if (Options["Root"]) this.Root = Options["Root"];//OtherInfo
    if (Options["RootValue"]) this.RootValue = Options["RootValue"];//OtherInfo
    if (Options["Change"]) {
      this.Change = Options["Change"];//LvSwitch
      this.Lv = 10;
      this.SwitchData = (ChangeRefs, IsSendData) => {
        const CheckLv = (TargetName) => {
          if (this[TargetName] === undefined) return 0;
          if (ChangeRefs[TargetName] === null || ChangeRefs[TargetName] === undefined) return Number(this[TargetName]);
          
          const TargetLv = ChangeRefs[TargetName];
          const MaxProp = (TargetName === "Lv" ? "" : TargetName) + "Max";
          const MinLv = TargetName === "Lv" ?  1 : 0;

          return Number(TargetLv < 1 ? MinLv : TargetLv > this[MaxProp] ? this[MaxProp] : TargetLv);
        }
        const First = CheckLv("Lv");
        const Second = CheckLv("SecondLv");
        const Therd = CheckLv("TherdLv");

        if (First !== 0) this.Lv = First;
        if (ChangeRefs["SecondLv"] !== undefined) this.SecondLv = Second;
        if (ChangeRefs["TherdLv"] !== undefined) this.TherdLv = Therd;        

        const SendData = MainMethod.SendStatus(this.Base, this.Change(First, Second, Therd), true);
        if (IsSendData) MainMethod.SendAllStatus(SendData, true);
      }
    }
    if (Options["Max"]) {
      this.Max = Options["Max"];
      this.Lv = Options["Max"];
    }
    if (Options["Min"]) {
      this.Min = Options["Min"];
    }
    if (Options["Default"]) {
      this.Default = Options["Default"];
      this.Lv = Options["Default"];
    }
    if (Options["Second"]) {
      this.SecondLv = Options["Second"];
      this.SecondLvMin = Options["SecondLvMin"] ?? 1;
      this.SecondLvMax = Options["Second"];
    }
    if (Options["Therd"]) {
      this.TherdLv = Options["Therd"];
      this.TherdLvMax = Options["Therd"];
    }
    if (Options["Root2"]) this.Root2 = Options["Root2"];
    if (Options["Root3"]) this.Root3 = Options["Root3"];

    if (Options["Checker"]) {//パッシブスキルの追加判定
      this.Checker = Options["Checker"];
      this.IsCheckerActive = false;
      this.IsLostStatus = Options["IsLostStatus"] !== undefined ? Options["IsLostStatus"] : false;
    } 
    if (Options["Replacer"]) this.Replacer = Options.Replacer;
  };
  /**スキルを適用できる状態の場合にTrue */
  EnableSkill = Refs => {
    const { Wepon, SubWepon } = Refs.OtherInfo;

    if (this?.SetWepons) {
      if (this.SetWepons[Wepon] === null) return true;

      const SubWepons = this.SetWepons[Wepon] ?? this.SetWepons["Any"];
      if (SubWepons === undefined) return false;

      return !SubWepons || (typeof (SubWepons) === "string" ? SubWepons === SubWepon : SubWepons.includes(SubWepon));
    }
    //メイン武器の一致
    const Check_Wepon = !this?.Wepons || this.Wepons.includes(Wepon);
    //サブ武器の一致
    const Check_SubWepon = !this?.SubWepons || this.SubWepons.includes(SubWepon);

    return Check_Wepon && Check_SubWepon;
  }
}

class CustomBuff extends AddBuff{
  constructor() {
    super("", {}, SkillTree.UserCustom);
    this._wepons = null;
    this.RefText = "";
    this.DisableAbilityText = "";
    this.TimeStamp;
    this.FirstTime;
  }

  get Wepons() { return this._wepons === null ? Data.Wepon.Keys() : this._wepons; };
  set Wepons(value) { this._wepons = value; };

  /** ユーザーバフはメイン名称と同じ */
  get MainName() { return this.Name };
  /** 現在のバフスキルのHTMLを生成する。 */
  get AbilityText() { return MainMethod.BaseReferenceText(this.Base, "UserCustomBuffSkills,Flex"); };

  static GetInstance = (value)=>{
    const Result = new CustomBuff();
    value.KeyEach(key => Result[key] = value[key]);

    Result.IsActive = false;

    return Result;
  }
}
//ForEquipment
class AddEquipment extends SelectorBase{
  constructor(Name, Group, Base, FilterNo = 0, Crystal1 = null, Crystal2 = null) {
    super(Name, Base, FilterNo);
    this.Group = Group;
    this.Crystal1 = Crystal1;
    this.Crystal2 = Crystal2;
  }
  /** @param Target { AddEquipment } @returns { AddEquipment }*/
  static ReSet = Target => {
    const { Name, Group, Base, FilterNo, Crystal1, Crystal2, TimeStamp } = Target.New();
    const Result = new this(Name ?? "", Group ?? "-", Base ?? {}, FilterNo ?? 0, Crystal1 ?? null, Crystal2 ?? null);
    if (TimeStamp) Result.TimeStamp = TimeStamp;
    return Result;
  }
}
class EquipGroup{
  static Attributes = {
    User:"★ユーザーカスタム",
    "-": "----",
    None: "----",
    Attribute:"スミス/属性有利",
    Common:"スミス/汎用",
    Drop:"ドロップ品",
    Create: "鍛冶屋品",
    Scroll: "忍術巻物",
    Knight: "短剣",
    Knight_Event:"短剣:イベント品",
    Arrow: "矢",
    Sheild:"盾",
    SHDrop: "盾:ドロップ品",
    SHCreate:"盾:鍛冶屋品",
    Slayers:"スレイヤーズ",
    EventEquip:"イベント装備品",
    Halloween_6: "ハロウィン6章",
    Halloween_7: "ハロウィン7章",
    Halloween_8: "ハロウィン8章",
    Halloween_9: "ハロウィン9章",
    Xmas: "クリスマス2022",
    Xmas2023: "クリスマス2023",
    Xmas2024: "クリスマス2024",
    Xmas2025: "クリスマス2025",
    Valentine2025: "バレンタイン2025",
    Valentine2026: "バレンタイン2026",
    WhiteDay2024: "ホワイトデー2024",
    WhiteDay2025: "ホワイトデー2025",
    WhiteDay2026: "ホワイトデー2026",
    Spring2024: "春イベント2024",
    DLEvent: "DLイベント",
    HighLv_Alterdarl: "高難易度:アルタダール",
    Edwards: "高難易度:エトワーズ",
    HighLv_Castile: "高難易度:カスティリア",
    SnowEvent: "雪合戦",
  };
  //AttributeA.KeyEach((Key) => EquipGroup.prototype[Key+"AAA"] = Attribute[Key]);
  static RetPropBase = (GetKey) => {
    return GetKey ? Object.keys(EquipGroup.Attributes) : Object.values(EquipGroup.Attributes);
  };
  static GetKeys = () => Object.keys(EquipGroup.Attributes);
  static GetValues = () => Object.values(EquipGroup.Attributes);

  static None = "None";//分類無し
  static UserAdd = "User";
  static Attribute = "Attribute";
  static Common = "Common";
  static Drop = "Drop";
  static Create = "Create";
  static Scroll = "Scroll";
  static AR = "Arrow";
  static SH = "Sheild";
  static SHDrop = "SHDrop";
  static SHCreate = "SHCreate";
  static KN = "Knight";
  static Knight_Event = "Knight_Event";
  static Slayer = "Slayers";
  static Edwards = "Edwards";
  static EventEquip = "EventEquip";
  static Halloween_6 = "Halloween_6";
  static Halloween_7 = "Halloween_7";
  static Halloween_8 = "Halloween_8";
  static Halloween_9 = "Halloween_9";
  static HighLv_Alterdarl = "HighLv_Alterdarl";
  static Xmas = "Xmas";
  static Xmas2023 = "Xmas2023";
  static Xmas2024 = "Xmas2024";
  static Xmas2025 = "Xmas2025";
  static Valentine2025 = "Valentine2025";
  static Valentine2026 = "Valentine2026";
  static WhiteDay2024 = "WhiteDay2024";
  static WhiteDay2025 = "WhiteDay2025";
  static WhiteDay2026 = "WhiteDay2026";
  static Spring2024 = "Spring2024";
  static DLEvent = "DLEvent";
  static HighLv_Castile = "HighLv_Castile";
  static SnowEvent = "SnowEvent";
}
class SkillGroup{
  /**全ての武器 */
  static All = "All";
  /**剣系統*/
  static Sword = "Sword";
  /**双剣系統 */
  static DualSword = "DualSword";
  /**槍系統 */
  static Halberd = "Halberd";
  /**刀系統 */
  static Mononof = "Mononof";
  /**弓系統 */
  static Shoot = "Shoot";
  /**魔法系統 */
  static Magic = "Magic";
  /**魔法剣士系統*/
  static MagicWarrior = "MagicWarrior";
  /**その他 */
  static Other = "Other"
}
class SkillAttribute{
  static No = 0;
  static Fire = 1;
  static Aqua = 2;
  static Wind = 3;
  static Ground = 4;
  static Darkness = 5;
  static Light = 6;
  static Unkown = 7;

  static Text = Attribute => {
    switch (Attribute) {
      case SkillAttribute.No: return "無属性";
      case SkillAttribute.Fire: return "火属性";
      case SkillAttribute.Aqua: return "水属性";
      case SkillAttribute.Wind: return "風属性";
      case SkillAttribute.Ground: return "地属性";
      case SkillAttribute.Darkness: return "闇属性";
      case SkillAttribute.Light: return "光属性";
      default: "";
    };
  }
}
class SkillTree{
  static GetTreeName = Num => {
    const Text = [
      "マスタリ",//0
      "ブレードスキル",
      "シュートスキル",
      "マジックスキル",
      "マーシャルスキル",
      "ハルバードスキル",//5
      "モノノフスキル",
      "デュアルソードスキル",
      "クラッシャースキル",
      "スプライトスキル",
      "マジックブレードスキル",//10
      "プリーストスキル",
      "ウィザードスキル",
      "ダークパワースキル",
      "ナイフスキル",
      "シールドスキル",//15
      "ナイトスキル",
      "ハンタースキル",
      "アサシンスキル",
      "ニンジャスキル",
      "サポートスキル",//20
      "サバイバルスキル",
      "バトルスキル",
      "ペット使用スキル(赤バフ)",
      "その他",
      "ミンストレルスキル",//25
      "レジスタレット",
      "ギルド料理",
      "パルチザンスキル",//28
      "ユーザーカスタム",//29
      "ネクロマンサースキル",//30
    ]
    if (Num < 0 || Num >= Text.length) return "";
    return Text[Num];
  }
  static Other = -1;
  static Brede = 1;
  static Shoot = 2;
  static Magic = 3;
  static Martial = 4;
  static Halberd = 5;
  static Mononof = 6;
  static DualSword = 7;
  static Crucher = 8;
  static Sprites = 9;
  static MagicBlade = 10;
  static Priest = 11;
  static Wizard = 12;
  static DarkPower = 13;
  static Knife = 14;
  static Shield = 15;
  static Knight = 16;
  static Hunter = 17;
  static Assassin = 18;
  static Ninja = 19;
  static Support = 20;
  static Survival = 21;
  static Battle = 22;
  static Minstrel = 25;
  static Partisan = 28;
  static UserCustom = 29;
  static Necro = 30;
}
/**CheckAnswer,AsyncAnswerの表示ボタン種類 */
class Answer{
  static YESNo = 1;
  static OKCancel = 2;
  static AddCancel = 3;
  static UpdateCancel = 4;
  static OKOnly = 5;
  static AnathorOK = 6;
  static Captured = 7;
  static Search = 8;
  static CloseOnly = 9;
  static GoCancel = 10;
  static YesNoCancel = 11;
  static SaveSelector1 = 12;
  static SaveSelector2 = 13;
  static SaveSelector3 = 14;
  static SaveSelector4 = 15;
  static Approval = 16;
  static Selectors = 17;

  static Text = Ans => {
    switch (Ans) {
      case Answer.YESNo: return ["はい", "いいえ"];
      case Answer.OKCancel: return ["はい", "キャンセル"];
      case Answer.AddCancel: return ["登録", "キャンセル"];
      case Answer.UpdateCancel: return ["更新", "キャンセル"];
      case Answer.OKOnly: return ["はい"];
      case Answer.CloseOnly: return ["閉じる"];
      case Answer.AnathorOK: return ["OK!", "終わる!!"];
      case Answer.Captured: return ["新規作成", "ID入力", "キャンセル"];
      case Answer.Search: return ["検索", "キャンセル"];
      case Answer.GoCancel: return ["進める", "キャンセル"];
      case Answer.YesNoCancel: return ["はい", "いいえ", "キャンセル"];
      case Answer.SaveSelector1: return ["メイン", "サブ", "一時"];
      case Answer.SaveSelector2: return ["サブ", "一時", "キャンセル"];
      case Answer.SaveSelector3: return ["メイン", "サブ", "キャンセル"];
      case Answer.SaveSelector4: return ["サブ", "キャンセル"];
      case Answer.Approval: return ["承認", "却下", "キャンセル"];
      case Answer.Selectors: return ["選択1", "選択2", "選択3"];
    }
  }
}
/**AsyncAnswerの戻り値 */
class AnswerResult{
  /**肯定された状態 */
  static OK = true;
  /**否定された状態 */
  static NO = false;
  /**キャンセル(否定)された状態 */
  static Cancel = null;
  /**選択肢１ */ 
  static Select1 = 11;
  /**選択肢2 */
  static Select2 = 12;
  /**選択肢3 */
  static Select3 = 13;
}
/**装備比較モードの状態定義 */
class EquipmentComparison{
  /**精錬値比較モード */
  static Smelting = "Smelting";
  /**ステータスパラメータ比較モード */
  static StatusParam = "StatusParam";
  /**補正値パラメータ比較モード */
  static EquipmentParam = "EquipmentParam";
  /**装備品入れ替え比較モード */
  static Equipment = "Equipment";
  /**敵入れ替え比較モード */
  static Enemy = "Enemy";
  /**スキル入れ替えモード */
  static Skill = "Skill";
  /**キャプチャーモード(比較状態なし) */
  static Capture = "Capture";
}
/**拡張ステータスの作成用クラス */
class AddEquipmentExtension{
  constructor(ExtensionEnum,KeyNo, Description ,CheckFunc) {
    this.ExtensionCode = ExtensionEnum;
    this.KeyNo = KeyNo;
    this.Description = Description;
    this.CheckFunc = CheckFunc;
  }
}
/**拡張ステータスの結果 */
class EquipmentExtensionResult{
  constructor(StatusResult, OK) {
    this.OK = OK;
    this.StatusResult = StatusResult;
  }
}
/**装備品の特殊ステータスを扱う */
class EquipmentExtension{
  EnableTarget = [];
  constructor(Refs = Data) {
    const AryResult = [];
    const SetArray = () => {
      const GetName_Key = (Target) => {
        const Result = MainMethod.GetIncludeUnitData(Target);
        return [Result[0].Name, Result[1]];
      }

      ["Wepon", "Armor", "Addition", "Option", "SubWepon"].forEach(Key => {
        const Ary = GetName_Key(Refs.AdditionStatus[Key]);
        if (Ary[1].toString().length !== 13) {
          const Target = SelectionData[Key][Ary[1]];

          if (Target && Target.Name === Ary[0]) {
            Ary.push(EquipmentExtensionenum[Key]);
            Ary.push(Key);
            AryResult.push(Ary);
          }          
        }
      });

      const NumModifyCrystalKey = Num => {
        if (Num <= 2) return "Wepon";
        if (Num <= 4) return "Armor";
        if (Num <= 6) return "Addition";
        if (Num <= 8) return "Option";
      }
      Refs.AdditionStatus.Crystal.KeyEach(Key => {
        const PropKey = NumModifyCrystalKey(Key);
        const Ary = GetName_Key(Refs.AdditionStatus.Crystal[Key]);
        
        if (Ary[1].toString().length !== 13) {
          const Target = SelectionData.Crystal[PropKey][Ary[1]];
          if (Target && Target.Name === Ary[0]) {
            Ary.push(EquipmentExtensionenum[`Cry_${PropKey}`]);
            Ary.push(Key);
            AryResult.push(Ary);
          } else {
            const Target2 = SelectionData.Crystal.Nomal[Ary[1]];
            if (Target2 && Target2.Name == Ary[0]) {
              Ary.push(EquipmentExtensionenum.Cry_Nomal);
              Ary.push(Key);
              AryResult.push(Ary);
            }
          }
        }
      })
      this.Result = AryResult;
    }
    SetArray();
  }
  /**有効確認をし、有効なデータの合計値を取得する。 */
  GetStatus = (Refs) => {
    try {
      const StatusResult = {};

      this.Result.forEach(Values => {
        const NowEquipProp = Values[3];
        const Code = Values[2];
        const PropKey = Values[1];

        /** @type {[AddEquipmentExtension]} */
        const SearchTargets = [];
        SelectionData.Extension.KeyEach(Key => {
          const target = SelectionData.Extension[Key];
          if (target.ExtensionCode == Code && target.KeyNo == PropKey)
            SearchTargets.push(target);
        });

        SearchTargets.forEach(Values => {
          /** @type { EquipmentExtensionResult } */
          const Res = Values.CheckFunc(Refs);
          if (Res.OK) {
            MainMethod.MargeData(Res.StatusResult, StatusResult);

            const SendData = Values.New();
            SendData["Result"] = Res.StatusResult;
            SendData["PropKey"] = NowEquipProp;
            this.EnableTarget.push(SendData);
          }
        })
      })
      return StatusResult;
    } catch (error) {
      console.log(error);
      return {};
    }
  };
  /**補正値情報を書換をし、引数の情報を戻り値として返す。 */
  ModifyStatus = (Refs) => {
    const ModifyStatus = this.GetStatus(Refs);
    try {
      MainMethod.SendAllStatus(ModifyStatus, false, Refs);
    } catch (error) {
      
    } finally {
      return Refs;
    }
  };
  /**限定的に補正値情報を、TargetFunctonメソッド完了後に元の値に戻す */
  LimitedModifyStatus = (Refs, TargetFuncton) => {
    const ModifyStatus = this.GetStatus(Refs);
    try {
      MainMethod.SendAllStatus(ModifyStatus, false, Refs);
      Data.NotSavedInfo.ExtensionStatus = ModifyStatus;
      Data.NotSavedInfo.ExtensionInfos = this.EnableTarget;

      if (typeof TargetFuncton === "function") TargetFuncton(Refs);
    } catch (error) {
      console.error(error);
    } finally {
      MainMethod.SendAllStatus(MainMethod.SendStatus(ModifyStatus, {}), false, Refs);
    }
  };
}
/**分類Enum @retrun { EquipmentExtensionenum } */
const EquipmentExtensionenum = {
  Wepon: 0,
  Armor: 1,
  Addition: 2,
  Option: 3,
  SubWepon: 4,
  Cry_Wepon: 5,
  Cry_Armor: 6,
  Cry_Addition: 7,
  Cry_Option: 8,
  Cry_Nomal: 9,
}
/**スキル特性情報の表示に必要な情報の提供 */
class SkillEffectShowData{
  /**魔法スキルの場合にTrue @type {boolean} */
  IsMagicSkill;
  /**DEFを参照する場合にTrue @type {boolean} */
  IsDef;
  /**物理耐性を参照する場合にTrue @type {boolean}  */
  IsPhysical;
  /**ロングレンジが有効な場合にTrue @type {boolean}  */
  IsLongRange;
  /**距離情報 @type { DistanceOptionEnum } */
  Distance;
  /**抜刀威力が有効の場合にTrue @type {boolean} */
  IsSwordPower;
  /**確定クリティカルの場合にTrue @type {boolean}  */
  IsAbsCrit;
  /**必中属性の場合にTrue @type {boolean} */
  IsG_Hit;
  /**コンボ無効の場合にTrue @type {boolean} */
  NoneCombo;
  /**物理貫通能力がある場合に0以上を入力する。 @type {Number} */
  ATKPenetrate = 0;
  /**魔法貫通能力がある場合に0以上を入力する。 @type {Number} */
  MATKPenetrate = 0;
  /**スキルの固定属性 @type {SkillAttribute} */
  Attribute;
  /**慣れ参照情報 @type {Torauma} */
  ShowTorauma;
  /**発生慣れ情報 @type {Torauma} */
  EnchantTorauma;
  /**スキル追加特性 */
  SpecialEffect;
  /**威力参照 */
  PowerEffect;
}

class DistanceOptionEnum {
  /**有効 */
  static Enable = 0;
  /**無効 */
  static Disable = 1;
  /**近距離のみ有効 */
  static OnlyDistance = 2;
  /**遠距離のみ有効 */
  static OnlyLongDistance = 3;
  /**強制近距離適用 */
  static AbsDistance = 4;
  /**強制遠距離適用 */
  static AbsLongDistance = 5;
}

class InterFace_StatuBase { Level; HP; MP; ATK; BaseATK; DSATK; BaseDSATK; AllATK; MATK; BaseMATK; Stable; SubStable; HIT; FREE; ASPD; BaseCSPD; CSPD; STR; INT; VIT; AGI; DEX; STR_After; INT_After; VIT_After; AGI_After; DEX_After; TEC; MEN; SPD; Resist_Health; Resist_Physical; Resist_Magic; CriticalDamege; CriticalDamegeForMagic; Critical; CriticalForMagic; AllAttribute; Attribute };
class InterFace_ReferenceBase {
  OtherInfo;
  /** @type {InterFace_StatuBase} */
  Status;
  AdditionStatus = {
    All,
    PartialAll
  };
};
class InterFace_LocalItems{
  Wepon;
  Armor;
  Addition;
  SubWepon;
  Option;
  Enchant;
  Enchant2;
  Enchant3;
  Other;
  Other2;
  Other3;
  Other4;
  Other5;
  Other6;
  Other7;
  Crystal = {
    Wepon,
    Armor,
    Addition,
    Option,
  };
  Enemy;
  /** @type {Array} */
  ComboSkill;
}
class Interface_AddBuff extends AddBuff{
  MainName;
  RefText;
  AbilityText;
  MainSelectorText;
  SecondSelectorText;
  TherdSelectorText;
  SecondLv;
  SecondLvMax;
  TherdLv;
  TherdLvMax;
}

/**ブロック単位 */
class Property_Group{
  constructor(PreviewName, KeyName, Elements) {
    /**表示名 @type { String }*/
    this.PriviewName = PreviewName;
    /**Key名称 @type { String } */
    this.KeyName = KeyName;
    /**表示配下 @type { Array<Property_AttrGroup> } */
    this.Elements = Elements;
  }  
};
/**一行 */
class Property_AttrGroup{
  constructor(PreviewAttributeName, Elements) {
    /**プロパティ名　@type {String} */
    this.PreviewAttributeName = PreviewAttributeName;
    /** Input表示させる情報たち @type { Array<Property_Attribute>}*/
    this.Elements = Elements;
  }
};
/**Inputの情報 */
class Property_Attribute{
  constructor(AttributeKey, MinimumValue, MaximumValue, PaletteValus) {
    /**対応するKeyの名称 */
    this.AttributeKey = AttributeKey;
    /**プロパティに指定できる最小値 */
    this.MinimumValue = MinimumValue;
    /**プロパティに指定できる最大値 */
    this.MaximumValue = MaximumValue;
    /**パレットモード時に表示される候補値 */
    this.PaletteValues = PaletteValus;
  }
};

/**期待値ダメージの結果セット */
class ExpectResult{
  /**最大ダメージ */
  MaxDamege = 0;
  /**期待値 */
  ExpectDamege = () => ExpectResult.Check(Math.floor(this.CriticalDamege + this.Critical_GlazeDamege + this.NomalDamege + this.Nomal_GlazeDamege));
  /**平均安定率 */
  Stable = 0;
  /**クリティカル率 */
  CriticalRate = 0;
  /**Glazeクリティカル率 */
  GlazeCriticalRate = 0;
  /**Glazeを含めたクリティカル率 */
  TotalCriticalRate = () => ExpectResult.Check(this.CriticalRate + this.GlazeCriticalRate);
  /**白ダメ率 */
  NomalRate = 0;
  /**ミス率 */
  MissRate = () => 100 - this.CriticalRate - this.GlazeCriticalRate - this.NomalRate;
  /**命中率 */
  HitRate = 0;
  /**威力発揮率 */
  ExpectRate = ()=> ExpectResult.Check(Math.floor(this.ExpectDamege() / this.MaxDamege * 1e4) / 100);
  /**合計クリティカルダメージ */
  CriticalDamege = 0;
  /**合計クリティカルGlazeダメージ */
  Critical_GlazeDamege = 0;
  /**合計白ダメージ */
  NomalDamege = 0;
  /**合計白Glazeダメージ※現状未実装 */
  Nomal_GlazeDamege = 0;
  /**クリティカルダメージの割合 */
  Rate_Critical = () => ExpectResult.Check(this.CriticalDamege / this.ExpectDamege() * 100);
  /**クリティカルグレーズダメージの割合 */
  Rate_GlazeCritical = () => ExpectResult.Check(this.Critical_GlazeDamege / this.ExpectDamege() * 100);
  /**白ダメージの割合 */
  Rate_Nomal = () => ExpectResult.Check(this.NomalDamege / this.ExpectDamege() * 100);

  static Check = (Value) => isNaN(Value) ? 0 : Value;
};

const PropsAttributeElemens = [
  new Property_Group("威力系統", "Group_Power", [
    new Property_AttrGroup("ATK", [
      new Property_Attribute("ATK_Rate", -1e3, 1e3, "-13,13,3,6"),
      new Property_Attribute("ATK", -99999, 99999, "-27,27")
    ]),
    new Property_AttrGroup("MATK", [
      new Property_Attribute("MATK_Rate", -1e3, 1e3, "-13,13,3,6"),
      new Property_Attribute("MATK", -99999, 99999, "-27,27")
    ]),
    new Property_AttrGroup("武器ATK", [
      new Property_Attribute("WeponATK_Rate", -1e3, 1e3, "10,20,30"),
      new Property_Attribute("WeponATK", -99999, 99999, "10,20,30")
    ]),
    new Property_AttrGroup("物理貫通", [
      new Property_Attribute("ATKPenetrate", -1e3, 1e3, "-7,-6,6,7")
    ]),
    new Property_AttrGroup("魔法貫通", [
      new Property_Attribute("MATKPenetrate", -1e3, 1e3, "-7,-6,6,7")
    ]),
    new Property_AttrGroup("属性有利", [
      new Property_Attribute("Attribute", -1e3, 1e3, "20,21,22")
    ]),
    new Property_AttrGroup("抜刀威力", [
      new Property_Attribute("SwordPower_Rate", -1e3, 1e3, "-10,10,15,20"),
      new Property_Attribute("SwordPower", -99999, 99999, "100,200,300")
    ]),
    new Property_AttrGroup("近距離の威力", [
      new Property_Attribute("Distance", -1e3, 1e3, "3,6,7,8")
    ]),
    new Property_AttrGroup("遠距離の威力", [
      new Property_Attribute("LongDistance", -1e3, 1e3, "3,6,7,8")
    ]),
    new Property_AttrGroup("ｸﾘﾃｨｶﾙﾀﾞﾒｰｼﾞ", [
      new Property_Attribute("CriticalDamege_Rate", -1e3, 1e3, "3,10,11,12"),
      new Property_Attribute("CriticalDamege", -99999, 99999, "20,21,22,23")
    ]),
    new Property_AttrGroup("ｸﾘﾃｨｶﾙ率", [
      new Property_Attribute("Critical_Rate", -1e3, 1e3, "26,27,28,29"),
      new Property_Attribute("Critical", -99999, 99999, "26,27,28,29")
    ]),
    new Property_AttrGroup("安定率", [
      new Property_Attribute("Stable", -999, 999, "3,5,7")
    ]),
    new Property_AttrGroup("基礎武器ATK", [
      null,
      new Property_Attribute("Hide_BaseWeponATK", -999, 999, "")
    ])
  ]),
  new Property_Group("ステータス系統", "Group_Status", [
    new Property_AttrGroup("最大HP", [
      new Property_Attribute("HP_Rate", -1e3, 1e3, "10,20,30"),
      new Property_Attribute("HP", -999999, 999999, "100,1000,5000")
    ]),
    new Property_AttrGroup("最大MP", [
      null,
      new Property_Attribute("MP", -99999, 99999, "100,200,300")
    ]),
    new Property_AttrGroup("STR", [
      new Property_Attribute("STR_Rate", -1e3, 1e3, "-10,3,5,10"),
      new Property_Attribute("STR", -99999, 99999, "-29,-28,28,29")
    ]),
    new Property_AttrGroup("INT", [
      new Property_Attribute("INT_Rate", -1e3, 1e3, "-10,3,5,10"),
      new Property_Attribute("INT", -99999, 99999, "-29,-28,28,29")
    ]),
    new Property_AttrGroup("VIT", [
      new Property_Attribute("VIT_Rate", -1e3, 1e3, "-10,3,5,10"),
      new Property_Attribute("VIT", -99999, 99999, "-29,-28,28,29")
    ]),
    new Property_AttrGroup("AGI", [
      new Property_Attribute("AGI_Rate", -1e3, 1e3, "-10,3,5,10"),
      new Property_Attribute("AGI", -99999, 99999, "-29,-28,28,29")
    ]),
    new Property_AttrGroup("DEX", [
      new Property_Attribute("DEX_Rate", -1e3, 1e3, "-10,3,5,10"),
      new Property_Attribute("DEX", -99999, 99999, "-29,-28,28,29")
    ]),
    new Property_AttrGroup("命中", [
      new Property_Attribute("HIT_Rate", -1e3, 1e3, "-14,14"),
      new Property_Attribute("HIT", -99999, 99999, "-6,6")
    ]),
    new Property_AttrGroup("回避", [
      new Property_Attribute("FREE_Rate", -1e3, 1e3, "-14,14"),
      new Property_Attribute("FREE", -99999, 99999, "-6,6")
    ]),
    new Property_AttrGroup("攻撃速度", [
      new Property_Attribute("ASPD_Rate", -1e3, 1e3, "10,20,30"),
      new Property_Attribute("ASPD", -99999, 99999, "100,200,300")
    ]),
    new Property_AttrGroup("詠唱速度", [
      new Property_Attribute("CSPD_Rate", -1e3, 1e3, "10,20,30"),
      new Property_Attribute("CSPD", -99999, 99999, "100,200,300")
    ]),
  ]),
  new Property_Group("継戦補助系統", "Group_KeepAssist", [
    new Property_AttrGroup("行動速度", [
      new Property_Attribute("SPD", -1e3, 1e3, "1,2,3,5"),
    ]),
    new Property_AttrGroup("攻撃MP回復", [
      new Property_Attribute("MPRecovery_Rate", -1e3, 1e3, "10,20,30"),
      new Property_Attribute("MPRecovery", -1e3, 1e3, "5,10,15")
    ]),
    new Property_AttrGroup("物理耐性", [
      new Property_Attribute("Resist_Physical", -1e3, 1e3, "10,20,30"),
    ]),
    new Property_AttrGroup("魔法耐性", [
      new Property_Attribute("Resist_Magic", -1e3, 1e3, "10,20,30"),
    ]),
    new Property_AttrGroup("異常耐性", [
      new Property_Attribute("Resist_Health", -1e3, 1e3, "10,20,30"),
    ]),
    new Property_AttrGroup("ヘイト", [
      new Property_Attribute("Hate", -1e3, 1e3, "10,30,50"),
    ]),
    new Property_AttrGroup("復帰短縮", [
      new Property_Attribute("FirstReturn", -1e3, 1e3, "10,20,30"),
    ]),
    new Property_AttrGroup("HP自然回復", [
      new Property_Attribute("NaturalRecovery_HP_Rate", -1e3, 1e3, "10,20,100"),
      new Property_Attribute("NaturalRecovery_HP", -1e3, 1e3, "10,20,30")
    ]),
    new Property_AttrGroup("MP自然回復", [
      new Property_Attribute("NaturalRecovery_MP_Rate", -1e3, 1e3, "10,20,100"),
      new Property_Attribute("NaturalRecovery_MP", -1e3, 1e3, "10,20,30")
    ]),
  ]),
  new Property_Group("戦闘補助系統", "Group_BattleAssist", [
    new Property_AttrGroup("防御崩し", [
      new Property_Attribute("Special_DefBreak", -100, 100, "10,20,30")
    ]),
    new Property_AttrGroup("先読み", [
      new Property_Attribute("Special_Future", -100, 100, "10,20,30")
    ]),
    new Property_AttrGroup("Guard力", [
      new Property_Attribute("Guard_Power", -100, 100, "20,40,50")
    ]),
    new Property_AttrGroup("Guard回復", [
      new Property_Attribute("Guard_Repair", -100, 100, "20,40,50")
    ]),
    new Property_AttrGroup("Avoid回復", [
      new Property_Attribute("Avoid_Repair", -100, 100, "10,20,30")
    ]),
    new Property_AttrGroup("道具速度", [
      null,
      new Property_Attribute("ItemSpeed", -100, 100, "1,2,3"),
    ]),
    new Property_AttrGroup("絶対命中", [
      new Property_Attribute("AbsHIT", -100, 100, "5,10,15"),
    ]),
    new Property_AttrGroup("絶対回避", [
      new Property_Attribute("AbsFREE", -100, 100, "5,10,15"),
    ]),
  ]),
  new Property_Group("ステータスアップ系統", "Group_StatusPower", [
    new Property_AttrGroup("ATK+(STR)", [
      new Property_Attribute("ATK$STR", -1e3, 1e3, "30,50,100"),
    ]),
    new Property_AttrGroup("ATK+(INT)", [
      new Property_Attribute("ATK$INT", -1e3, 1e3, "30,50,100"),
    ]),
    new Property_AttrGroup("ATK+(VIT)", [
      new Property_Attribute("ATK$VIT", -1e3, 1e3, "30,50,100"),
    ]),
    new Property_AttrGroup("ATK+(AGI)", [
      new Property_Attribute("ATK$AGI", -1e3, 1e3, "30,50,100"),
    ]),
    new Property_AttrGroup("ATK+(DEX)", [
      new Property_Attribute("ATK$DEX", -1e3, 1e3, "30,50,100"),
    ]),
    new Property_AttrGroup("MATK+(STR)", [
      new Property_Attribute("MATK$STR", -1e3, 1e3, "30,50,100"),
    ]),
    new Property_AttrGroup("MATK+(INT)", [
      new Property_Attribute("MATK$INT", -1e3, 1e3, "30,50,100"),
    ]),
    new Property_AttrGroup("MATK+(VIT)", [
      new Property_Attribute("MATK$VIT", -1e3, 1e3, "30,50,100"),
    ]),
    new Property_AttrGroup("MATK+(AGI)", [
      new Property_Attribute("MATK$AGI", -1e3, 1e3, "30,50,100"),
    ]),
    new Property_AttrGroup("MATK+(DEX)", [
      new Property_Attribute("MATK$DEX", -1e3, 1e3, "30,50,100"),
    ]),
  ]),
  new Property_Group("属性耐性系統", "Group_AttributeResistor", [
    new Property_AttrGroup("火耐性", [
      new Property_Attribute("Resist_Fire", -1e3, 1e3, "10,20,30"),
    ]),
    new Property_AttrGroup("水耐性", [
      new Property_Attribute("Resist_Aqua", -1e3, 1e3, "10,20,30"),
    ]),
    new Property_AttrGroup("風耐性", [
      new Property_Attribute("Resist_Wind", -1e3, 1e3, "10,20,30"),
    ]),
    new Property_AttrGroup("地耐性", [
      new Property_Attribute("Resist_Ground", -1e3, 1e3, "10,20,30"),
    ]),
    new Property_AttrGroup("光耐性", [
      new Property_Attribute("Resist_Light", -1e3, 1e3, "10,20,30"),
    ]),
    new Property_AttrGroup("闇耐性", [
      new Property_Attribute("Resist_Darkness", -1e3, 1e3, "10,20,30"),
    ]),
    new Property_AttrGroup("無耐性", [
      new Property_Attribute("Resist_Normal", -1e3, 1e3, "10,20,30"),
    ]),
  ]),
  new Property_Group("軽減耐性系統", "Group_FloorResistor", [
    new Property_AttrGroup("直線軽減", [
      new Property_Attribute("Matigation_Line", -1e3, 1e3, "10,20,30"),
    ]),
    new Property_AttrGroup("突進軽減", [
      new Property_Attribute("Matigation_Rush", -1e3, 1e3, "10,20,30"),
    ]),
    new Property_AttrGroup("弾丸軽減", [
      new Property_Attribute("Matigation_Bullet", -1e3, 1e3, "10,20,30"),
    ]),
    new Property_AttrGroup("周囲軽減", [
      new Property_Attribute("Matigation_Surround", -1e3, 1e3, "10,20,30"),
    ]),
    new Property_AttrGroup("範囲軽減", [
      new Property_Attribute("Matigation_Range", -1e3, 1e3, "10,20,30"),
    ]),
    new Property_AttrGroup("痛床軽減", [
      new Property_Attribute("Matigation_Pain", -1e3, 1e3, "10,20,30"),
    ]),
    new Property_AttrGroup("隕石軽減", [
      new Property_Attribute("Matigation_Meteo", -1e3, 1e3, "10,20,30"),
    ]),
    new Property_AttrGroup("射刃軽減", [
      new Property_Attribute("Matigation_Blade", -1e3, 1e3, "10,20,30"),
    ]),
    new Property_AttrGroup("吸引軽減", [
      new Property_Attribute("Matigation_Kirby", -1e3, 1e3, "10,20,30"),
    ]),
    new Property_AttrGroup("爆発軽減", [
      new Property_Attribute("Matigation_Explosion", -1e3, 1e3, "10,20,30"),
    ]),
  ]),
  new Property_Group("バリア/追撃系統", "Group_BarrierPursuit", [
    new Property_AttrGroup("物理バリア", [
      null,
      new Property_Attribute("Barrier_Physical", -9999, 9999, "1000,2000,3000")
    ]),
    new Property_AttrGroup("魔法バリア", [
      null,
      new Property_Attribute("Barrier_Magic", -9999, 9999, "1000,2000,3000")
    ]),
    new Property_AttrGroup("割合バリア", [
      new Property_Attribute("Barrier_Per", -9999, 9999, "1000,2000,3000"),
    
    ]),
    new Property_AttrGroup("バリア速度", [
      new Property_Attribute("Barrier_Repair", -1e3, 1e3, "10,20,30"),
    ]),
    new Property_AttrGroup("物理追撃", [
      new Property_Attribute("Pursuit_ATK", -1e3, 1e3, "10,20,30"),
    ]),
    new Property_AttrGroup("魔法追撃", [
      new Property_Attribute("Pursuit_MATK", -1e3, 1e3, "10,20,30"),
    ]),
  ]),

];
const PropsAttributeKeyBase = {};
//基本的なデータ
const Data = {
  //入力値と表示用の合計値
  Status: {
    Level: 1,
    HP: 100,
    MP: 100,
    ATK: 3,
    BaseATK: 3,
    DSATK: 0,
    BaseDSATK: 0,
    AllATK: 3,
    DBringer:0,
    MATK: 6,
    BaseMATK: 6,
    BaseHBMATK: 0,
    HBMATK: 0,
    WMATK: 0,
    Stable: 1,
    SubStable: 0,
    HIT: 1,
    FREE: 78,
    ASPD: 1009,
    BaseCSPD: 4,
    CSPD: 4,
    STR: 1,
    INT: 1,
    VIT: 1,
    AGI: 1,
    DEX: 1,
    STR_After: 1,
    INT_After: 1,
    VIT_After: 1,
    AGI_After: 1,
    DEX_After: 1,
    CRT: 1,
    MEN: 1,
    TEC: 1,
    SPD: 0,
    TSPD: 0,
    Resist_Health: 0,
    Resist_Physical: 0,
    Resist_Magic: 0,
    CriticalDamege: 150,
    CriticalDamegeForMagic: 0,

    TStable: 1,
    TSubStable: 0,
    Resist_TPhysical: 0,
    Resist_TMagic: 0,
    TCriticalDamege: 150,
    TCriticalDamegeForMagic: 0,
    Special_TDefBreak: 0,
    Special_TFuture: 0,

    Critical: 25,
    CriticalForMagic: 0,
    AllAttribute: 0,
    Attribute: 0,
    Special_DefBreak: 0,
    Special_Future: 0,
    Hate:0,
  },
  //計算に必要な情報格納
  OtherInfo: {
    Wepon: "BH",
    WeponATK: 0,
    Stable: 0,
    Smelting: 0,
    SubWepon: "BH",
    SubWeponATK: 0,
    SubStable: 0,
    SubSmelting: 0,
    ArmorOption: "nomal", //heavy,nomal,light
    Skill: null,
    Enemy: null,
    ToraumaRate: 100,
    HitRate: 1,
    EnemyCriticalRate: 1,
    IsExpectedShow: false,
    EquipmentSelector: "Wepon", //Wepon,Amor,Addition,Option,Enchant,Other
    IsDifficulty: "nomal", //nomal,hard,luna,ulti
    IsCritical: "Critical", //Critical,Glaze,base
    IsDistance: "short", //short,long,none
    IsRaidWepon: false,//true,false
    IsStrong: true,
    ComboRate: null,
    IsAttribute: true,
    IsWeponAttribute: false,
    IsSwordPower: true,
    IsBrave: false,
    IsManaReCharge:false,
    IsHighCycle: false,
    IsQuickMotion: false,
    IsLongRange: false,
    IsTwoHKTN: false,
    IsSwordMaster: false,
    IsConversion: false,//パッシブバフ
    IsActiveConversion: false,//アクティブバフ
    _ConversionMATK: 0,
    IsDSPassive1: false,
    IsDSPassive2: false,
    IsShowDamage: "All", //First,Second,Therd
    IsShowSkillEffect: "First",//ShowSkillEffectDataItemProperty
    IsATKup: false,
    IsATKup2: false,
    IsMATKup: false,
    IsMATKup2: false,
    IsAuraBrade: "none",
    IsPassiveAuraBrade: false,
    IsMasterOfSH: false,
    IsSpellBurst: false,
    IsSamuraiBow: false,
    IsBreakDown: false,
    IsBreaker: false,
    IsMABreaker: false,
    IsMagicWarrior: false,
    IsMAmaster: false,
    IsSubWeponsPenalty: "none", //MA,MD,SH
    IsStronger: false,
    IsStrongerMagic: false,

    IsFreeStance: false,
    IsMagicArrow: false,
    IsAirSlide: false,
    IsAssassinStub: false,

    IsAshura: false,
    IsEnhance: false,
    IsStabilis: false,
    IsMagicGuide:false,
    IsOverLimit: false,
    IsMagicResearch: false,
    IsDarkness: false,
    IsTwinSrash: false,
    IsNinja:false,
    IsNindo: false,
    IsNinjaPower1: false,
    IsNinjaPower2: false,
    IsNinjaWind:false,
    IsKairiki: false,
    IsGodHand: false,
    IsBGHunter: false,
    IsHotKnows: false,
    ChargeLv: 0,
    IsFamilly:false,
    IsMagicMaster: false,
    IsCastMaster: false,
    IsEternal1: false,
    IsEternal2: false,
    IsArcSaber: false,
    IsChainCast: false,
    IsChainCastCount: false,
    IsIndomitable: false,
    IsEnchantedBurst: false,
    IsDualBringer: false,
    IsGaryoTensei: false,

    IsResonance_Power: false,
    IsResonance_Speed: false,
    IsResonance_Hit: false,
    IsFrontLine: false,
    IsOrgasSlash: false,
    IsRapidChage: false,
    IsCamouflage: false,
    IsFocus: false,
    IsKnightPledge: false,
    IsKnightPledgeUser: false,
    IsKnightPledgeSmelting: false,
    IsAssassinationMaster: false,
    IsReaper: false,
    IsStrongRuna: false,
    IsGodHB: false,
    IsMONONOFWind: false,
    IsMONONOFWind2: false,
    IsTwinStorm: false,
  },
  //保存しない情報
  NotSavedInfo: {
    PassiveRate: false,
    BraveRate: false,
    /**@type { Status | AtackerStatus | { Smelting:number , SubSmelting:number} |  EnamyName:String  | null } */
    ComparisonResult: null,
    ComparisonMode: EquipmentComparison.Capture,
    ExtensionStatus: {},
    /** @type { [AddEquipmentExtension] } */
    ExtensionInfos: [],

    FakeDifference_Text1:"",
    FakeDifference_Key1:"",
    FakeDifference_Text2:"",
    FakeDifference_Key2: "",
    FakeDifference_Text3:"",
    FakeDifference_Key3:"",
  },
  //全ての補正加算値
  AdditionStatus: {
    All: new BaseStatus(true),
    PartialAll: {},
    Wepon: null,
    Armor: null,
    Addition: null,
    SubWepon: null,
    Option: null,
    Enchant: null,
    Enchant2: null,
    Enchant3: null,
    Other: null,
    Other2: null,
    Other3: null,
    Other4: null,
    Other5: null,
    Other6: null,
    Other7: null,
    Cooking: {
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
    },
    ItemBuff: {
      Attacker: {},
      Defense: {},
      MagicDefense: {},
      Speed: {},
      Chant: {},
      Magical: {},
      AttrPower: {},
      AttrDef: {},
      MP: {},
      HP: {},
      HIT: {},
      FREE:{},
    },
    Crystal: {
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
      6: {},
      7: {},
      8: {},
    },
  },
  //メイン武器
  Wepon: {
    BH: {
      Name: "素手",
      ATK: { STR: 1 },
      MATK: { INT: 3, DEX: 1 },
      ASPD: { Base: 1000, AGI: 9.6 },
      Stable: { Base: 1,  DEX: 0.3508 },
      SubWepon: ["BH", "KN", "AR", "SH", "MD", "MA", "SC"],
      SafeHit: 50,
    },
    OH: {
      Name: "片手剣",
      ATK: { STR: 2, DEX: 2 },
      MATK: { INT: 3, DEX: 1 },
      ASPD: { Base: 100, STR: 0.2, AGI: 4.2 },
      Stable: { STR: 0.025, DEX: 0.075 },
      SubWepon: ["BH", "KN", "AR", "SH", "MD", "MA", "SC"],
      SafeHit: 25,
    },
    DS: {
      Name: "双剣",
      ATK: { STR: 1, DEX: 2, AGI: 1 },
      MATK: { INT: 3, DEX: 1 },
      ASPD: { Base: 100, STR: 0.2, AGI: 4.2 },
      Stable: { STR: 0.025, DEX: 0.075 },
      SubWepon: ["OH"],
      SafeHit: 25,
    },
    TH: {
      Name: "両手剣",
      ATK: { STR: 3, DEX: 1 },
      MATK: { INT: 3, DEX: 1 },
      ASPD: { Base: 50, STR: 0.2, AGI: 2.1 },
      Stable: { DEX: 0.1 },
      SubWepon: ["BH"],
      SafeHit: 15,
    },
    MA: {
      Name: "手甲",
      ATK: { DEX: 0.5, AGI: 2 },
      MATK: { INT: 4, DEX: 1 },
      ASPD: { Base: 120, STR: 0.1, DEX: 0.1, AGI: 4.6 },
      Stable: { DEX: 0.025 },
      SubWepon: ["BH", "KN", "AR", "SH", "MD"],
      SafeHit: 10,
    },
    HB: {
      Name: "旋風槍",
      ATK: { STR: 2.5, AGI: 1.5 },
      MATK: { INT: 2, DEX: 1, AGI: 1 },
      HBMATK: { INT: 4, AGI: 1 },
      ASPD: { Base: 25, STR: 0.2, AGI: 3.5 },
      Stable: { STR: 0.05, DEX: 0.05 },
      SubWepon: ["BH", "KN", "AR"],
      SafeHit: 20,
    },
    KTN: {
      Name: "抜刀剣",
      ATK: { STR: 1.5, DEX: 2.5 },
      MATK: { INT: 1.5, DEX: 1 },
      ASPD: { Base: 200, STR: 0.3, AGI: 3.9 },
      Stable: { STR: 0.075, DEX: 0.025 },
      SubWepon: ["BH", "KN", "SC"],
      SafeHit: 30,
    },
    BW: {
      Name: "弓",
      ATK: { STR: 1, DEX: 3 },
      MATK: { INT: 3, DEX: 1 },
      ASPD: { Base: 75, DEX: 0.2, AGI: 3.1 },
      Stable: { STR: 0.05, DEX: 0.05 },
      SubWepon: ["BH", "AR", "KTN"],
      SafeHit: 10,
    },
    BG: {
      Name: "自動弓",
      ATK: { DEX: 4 },
      MATK: { INT: 3, DEX: 1 },
      ASPD: { Base: 30, DEX: 0.2, AGI: 2.2 },
      Stable: { STR: 0.05 },
      SubWepon: ["BH", "KN", "AR", "SH", "MD", "MA"],
      SafeHit: 5,
    },
    SF: {
      Name: "杖",
      ATK: { STR: 3, INT: 1 },
      MATK: { INT: 4, DEX: 1 },
      ASPD: { Base: 60, AGI: 1.8, INT: 0.2 },
      Stable: { STR: 0.05 },
      SubWepon: ["BH", "KN", "AR", "SH", "MD", "MA", "SC"],
      SafeHit: 30,
    },
    MD: {
      Name: "魔道具",
      ATK: { AGI: 2, INT: 2 },
      MATK: { INT: 4, DEX: 1 },
      ASPD: { Base: 90, AGI: 4, INT: 0.2 },
      Stable: { DEX: 0.1 },
      SubWepon: ["BH", "SC"],
      SafeHit: 10,
    },
  },
  //サブ武器
  SubWepon: {
    BH: { Name: "なし" },
    KN: { Name: "ナイフ" },
    AR: { Name: "矢" },
    SH: { Name: "盾" },
    MD: { Name: "魔道具" },
    MA: { Name: "手甲" },
    KTN: { Name: "抜刀剣" },
    SC: { Name: "巻物" },
    OH: {
      Name: "片手剣",
      ATK: { STR: 1, AGI: 3 },
      Stable: { STR: 0.06, AGI: 0.04 },
    },
  },
  Method: {
    /**現在のレベルから割り振れる残りのステータスポイントを取得する。 */
    GetStatusPoint: (Refs) => { 
      const TargetStatus = ["STR", "INT", "VIT", "AGI", "DEX", "CRT", "MEN", "TEC"];
      const NowStatusPoint = (() => {
        let Result = 0;
        TargetStatus.forEach(key => Result += Refs.Status[key]);
        return Result;
      })();
      
      const Lv = Refs.Status.Level;
      const BonusPoint = Lv < 295 ? 0 : Math.floor((Lv - 295) / 10) * 5;

      return 20 + Lv * 2 + Math.floor((295) / 10 + 1) * 5 + BonusPoint - (NowStatusPoint - 8);
    },
    GetHP: (Refs) => {
      const Result = Math.floor(93 + ((Math.floor(Refs.Status.VIT_After) + 22.41) * Refs.Status.Level) / 3);
      return Result;
    },
    GetTotalHP: (Refs) => {
      const Base = Data.Method.GetTotalStatus(Refs, Data.Method.GetHP(Refs), "HP");

      const Buff_FrontLine = Refs.OtherInfo.IsFrontLine;
      const Bonus = Buff_FrontLine ? (Refs?.Status?.Level ?? 0) * 10 + Buff_FrontLine * 100 : 0;
      const Result = Base + Bonus;

      return Result > 99999 ? 99999 : Result;
    },
    GetMP: (Refs) => {
      const Base = 100 + Refs.Status.Level + Math.floor(Math.floor(Refs.Status.INT_After) / 10);
      const TECMP = Refs.Status.TEC > 1 ? (Refs.Status.TEC - 1) : 0;
      const Result = Base + TECMP;

      return Result > 0 ? Result : 1;
    },
    GetAfterStatus: (Refs, Sname) => {
      const base = Refs.Status?.[Sname] ?? 0;
      const addition = Refs.AdditionStatus.All?.[Sname] ?? 0;
      const addition_Rate = Data.Method._GetAddition(Refs, `${Sname}_Rate`);
      return base * addition_Rate + addition;
    },
    //ATK or MATK
    GetStatusPower: (Refs, Ans) => {
      const Target =
        Ans === "ATK" ? "ATK$" :
          Ans === "MATK" ? "MATK$"
            : "";
            
      if (Target === "") return 0;

      const Keys = ADDITION.filter(v => v.indexOf(Target) === 0);
      let value = 0;
      for (let Key of Keys) {
        const Status = Key.replace(Target, "");
        value += Math.floor(Refs.Status[Status] * Refs.AdditionStatus.All[Key] / 100);
      }
      return value;
    },
    //ATK or MATK or DS or HBMATK
    GetBasePower: (Refs, Ans) => {
      const dt = Refs.OtherInfo;

      const MainWepon = dt.Wepon;
      const SubWepon = dt.SubWepon;
      const WepATK = (() => {
        const WeponATK = dt.WeponATK;
        const StatusBonus = Refs?.AdditionStatus?.All?.Hide_BaseWeponATK ?? 0;
        return WeponATK + StatusBonus;
      })();


      if (Ans === "DS" && MainWepon !== "DS") return 0;
      
      //武器ATK
      const ATK_WeponBase = (() => {
        //素手は適用しない
        if (dt.Wepon === "BH") return 0;

        //MATK適用外の武器種は0
        //if (Ans === "MATK" && ["SF", "MD", "MA"].includes(MainWepon) === false) return 0;

        if (Ans === "HBMATK" && MainWepon !== "HB") return 0;
        
        const [Power, Smelting, Rate] = Ans !== "DS"
          ? [WepATK, dt.Smelting, 100] : [dt.SubWeponATK, dt.SubSmelting, 200];
        const WeponATK = Math.floor(Smelting + Power * (1 + Smelting ** 2 / Rate));
        
        //キャストマスタリデメリット補正←2025/10/28 この仕様いらない
        const CastPower = (() => {
          return 0;
          if (Ans !== "ATK") return 0;

          const CastValue = Refs.OtherInfo.IsCastMaster ?? 0;
          const MgMasterValue = Refs.OtherInfo.IsMagicMaster ?? 0;
          
          if (CastValue === false) return 0;
          
          return Power * 0.03 * Number(MgMasterValue);
        })();

        //武器ATK補正
        const WepATKAddition = Data.Method.GetTotalStatus(Refs, Power, "WeponATK", true) - Power;
        const TotalWeponATK = Math.floor(WeponATK + WepATKAddition - CastPower);
        
        //コンバージョン1
        if (Ans === "ATK") {
          if (dt.IsConversion === true) {
            dt._ConversionMATK = ["OH", "TH", "BG"].includes(MainWepon)
              ? TotalWeponATK
              : Math.floor(TotalWeponATK / 2);
          } else {
            dt._ConversionMATK = 0;
          }
        }

        if (Ans === "ATK") return TotalWeponATK;

        //槍特殊MATK
        if (Ans === "HBMATK") {
          return MainWepon !== "HB" ? 0 : Math.floor(TotalWeponATK * 5 / 8);
        }

        //MATK
        if (Ans === "MATK") {
          const BaseResult = ["SF", "MD"].includes(MainWepon)
            ? TotalWeponATK
            : MainWepon === "MA"
              ? Math.floor(TotalWeponATK / 2)
              : 0;
          
          //コンバージョン基礎値ボーナス
          const ConversionBonus = dt.IsConversion === true && ["OH", "TH", "BG"].includes(MainWepon)
            ? Refs.Status.INT_After
            : 0;
          
          return BaseResult + ConversionBonus;
        }
                
        //DSの武器ATK減算
        //フィロ、バスターブレード、ブレイブオーラ
        const buff_fi = SelectionData.SelfBuff["2-DSeclair"].IsActive ? 0.25 : 0;
        const buff_bu = SelectionData.SelfBuff["5-BusterBlade"].IsActive ? 0.1 : 0;
        const buff_bre = dt.IsBrave ? 0.3 : 0;
        const DSResult = -Power * (buff_fi + buff_bu + buff_bre);

        return TotalWeponATK + DSResult;
      })()

      //矢
      const ATK_Arrow = (() => {
        if (Ans === "MATK") return 0;
        if (MainWepon === "BW" && SubWepon === "AR") return dt.SubWeponATK;
        if (MainWepon === "BW" && SubWepon === "KTN" && dt.IsSamuraiBow) {
          return (() => {
            const base = dt.SubWeponATK;
            const maxvalue = WepATK - Math.floor(WepATK * 0.4);
            return maxvalue > base ? base : maxvalue;
          })();
        }
        if (MainWepon === "BG" && SubWepon === "AR") {
          return Math.floor(dt.SubWeponATK / 2);
        };
        return 0;
      })()

      //ステータス補正
      const ATK_Status = (() => {
        const WeponRoot = Ans !== "DS"
          ? Data.Wepon[MainWepon][Ans]
          : Data.SubWepon["OH"]["ATK"];

        return Data.Method._GetBaseStatus(Refs, WeponRoot);
      })()

      return Data.Status.Level + ATK_WeponBase + ATK_Arrow + ATK_Status + Data.Method.GetStatusPower(Refs, Ans);
    },
    //ATK or MATK or DS or HBMATK
    GetTotalPower: (Refs, Ans, CalcPower = null) => {
      const F = Data.Method;
      const Power = Ans.includes("M") ? "MATK" : "ATK";
      const Base = CalcPower ?? F.GetBasePower(Refs, Power);
      const Total = F.GetTotalStatus(Refs, Base, Power, false);
      
      const Wepon = Refs.OtherInfo.Wepon;
      const SubWepon = Refs.OtherInfo.SubWepon;

      if (Ans === "DS" && Wepon !== "DS") return 0;
      
      //バトルスキル系統の値取得
      const GetRootValue = (Lv) => {
        if (Lv === false) return 0;
        const Addtion = (Lv * 2 + Math.floor(Lv / 2)) / 100;
        return Math.floor(Refs.Status.Level * Addtion);
      }
      //固定値追加効果
      const Addition = (() => {
        const Addtion1 = GetRootValue(Refs.OtherInfo[`Is${Power}up`]);
        const Addtion2 = GetRootValue(Refs.OtherInfo[`Is${Power}up2`]);
        const StatuPower = 0; //F.GetStatusPower(Refs, Ans);//ステータスATKorMATK(%)

        //エンハンス
        const Enchance = (() => {
          if (Refs.OtherInfo.IsEnhance === false) return 0;
          if (Ans === "DS") return 0;

          const DEF = typeof Refs.OtherInfo.Enemy.def === "function"
            ? Refs.OtherInfo.Enemy.def(Refs.OtherInfo.Enemy.lv)
            : Refs.OtherInfo.Enemy.def;
          
          const MDEF = typeof Refs.OtherInfo.Enemy.mdef === "function"
            ? Refs.OtherInfo.Enemy.mdef(Refs.OtherInfo.Enemy.lv)
            : Refs.OtherInfo.Enemy.mdef;
          
          const Def = Math.floor((Power !== "MATK" ? DEF : MDEF) * 0.5);
          return Refs.OtherInfo.Enemy.lv > Def ? Def
            : Refs.OtherInfo.Enemy.lv;
        })();

        //ファミリア
        const Familly = (() => {
          if (Refs.OtherInfo.IsFamilly === false) return 0;
          if (Ans !== "MATK") return 0;

          const Lv = Refs.Status.Level;
          const SkillLv = Refs.OtherInfo.IsFamilly;

          return Math.floor(Lv * SkillLv * 0.025);
        })();

        //チェインキャスト
        const ChainCast = (() => {
          if (Ans !== "MATK" || !["MD", "SF"].includes(Refs.OtherInfo.Wepon)) return 0;
          const ChainCastLv = Refs.OtherInfo.IsChainCast;
          const ChainCastCount = Refs.OtherInfo.IsChainCastCount;
          const ChainCastResult = ChainCastLv > 0
            ? Number(ChainCastLv) * Number(ChainCastCount)
            : 0;
          return ChainCastResult * (Refs.OtherInfo.Wepon === "MD" ? 2 : 1);
        })();

        //カムフラージュ
        const Camouflage = (() => {
          if (Power !== "ATK") return 0;

          const IsCamouflage = Refs.OtherInfo.IsCamouflage;
          if (IsCamouflage === false) return 0;

          const ATK = Math.floor(Math.floor(Refs.Status.Level * 0.5) * IsCamouflage / 10);

          return ATK * (["BW", "BG"].includes(Wepon) ? 2 : 1);
        })();
                
        return Addtion1 + Addtion2 + StatuPower + Enchance + Familly + ChainCast + Camouflage;
      })();
      //武器ペナルティ
      const Penalty_Wepon = (() => {
        const Rate = (() => {
          if (Power === "ATK" && SubWepon === "MD") {
            if (!Refs.OtherInfo.IsMagicWarrior) return 0.15;
            if (Wepon === "OH")
              return 0.1 - Refs.OtherInfo.IsMagicWarrior * 0.01;
            else
              return 0.15 - Refs.OtherInfo.IsMagicWarrior * 0.01;
          }
          return (Power === "MATK" && SubWepon === "MA") ? 0.15 : 0;
        })();
        return Base * Rate;
      })();

      const Conversion = (Power === "MATK") ? Refs.OtherInfo._ConversionMATK : 0;

      const ATKRate = (() => {
        if (Ans !== "DS") return 1;
        return F.GetTotalSubStable(Refs) / 100;
      })()
      
      return Math.floor(
        Math.floor(
          (Total + Addition + Conversion - Penalty_Wepon)
        ) * ATKRate);
    },
    GetDualBringerPower: (Refs,FetchATK) => {
      if (Refs.OtherInfo.IsDualBringer !== true) return 0;

      const { AllATK, MATK } = Refs.Status;
      const MinusResult = {};

      const RefsCopy = Data.Method.CreateBuffer.GetReferenceCopy(Refs, true);
      
      const Work = (Unit) => {
        MainMethod.MargeData(Unit.Base.FilterObject((key, value) => {
          return ["ATK", "ATK_Rate", "MATK", "MATK_Rate"].includes(key) && value < 0;
        }), MinusResult);
      };

      RefsCopy.AdditionStatus.EntrieEach((key, value) => {
        if (!key.includes("All") && !key.includes("Cooking")) {
          if (value?.Name) return Work(value.Unit);
          value.ValueEach(incvalue => Work(incvalue.Unit));
        }
      });
  
      if (FetchATK === true) {
        if (AllATK > MATK) return AllATK;
        const Rate = (MinusResult["ATK_Rate"] ?? 0) / 100 - 0.15 +
        (Refs.OtherInfo.IsMagicWarrior === false ? 0 : Number(Refs.OtherInfo.IsMagicWarrior) * 0.01) +
          (Refs.OtherInfo.Wepon === "OH" ? 0.05 : 0);
        
        const Result = Math.floor(MATK - AllATK + MATK * Rate + (MinusResult["ATK"] ?? 0));

        return AllATK + (Result > 0 ? Result : 0);
      } else {
        if (MATK > AllATK) return MATK;
        const Result = Math.floor(AllATK - MATK + AllATK * (MinusResult["MATK_Rate"] ?? 0) / 100 + (MinusResult["MATK"] ?? 0));

        return MATK + (Result > 0 ? Result : 0);
      }
    },
    //武器種ごとの能力値返却
    _GetBaseStatus: (Refs, Root) => {
      const DataObj = typeof Root !== "string"
        ? Root
        : Data.Wepon[Refs.OtherInfo.Wepon][Root];
      const Sts = Refs.Status;
      const M = value => Math.floor(value);
      return (
        (DataObj?.Base ?? 0) +
        (DataObj?.STR ?? 0) * M(Sts.STR_After) +
        (DataObj?.INT ?? 0) * M(Sts.INT_After) +
        (DataObj?.DEX ?? 0) * M(Sts.DEX_After) +
        (DataObj?.AGI ?? 0) * M(Sts.AGI_After)
      );
    },
    //加算数値返却
    _GetAddition: (Refs, Status) => 1 + (Refs.AdditionStatus.All[Status] || 0) / 100,
    //[%,+]
    _GetAdditionSet: (StatusName, Root) => {
      return [1 + ((Root[`${StatusName}_Rate`] / 100) || 0), (Root[StatusName] || 0)];
    },
    //Total変換:falseで切り捨てを行わない。
    GetTotalStatus: (Refs, Value, Sname, IsFloor = true) => {
      const addition = Refs.AdditionStatus.All;
      const Result =
        Value * Data.Method._GetAddition(Refs, `${Sname}_Rate`) + (addition[Sname] || 0)
      return IsFloor ? Math.floor(Result) : Result;
    },
    //Total変換 小数点以下切り捨て強制。
    GetTotalStatus_Partial: (Refs, Value, Sname) => {
      const Root = Refs.AdditionStatus;
      const [All_Rate, All_Num] = Data.Method._GetAdditionSet(Sname, Root.All);
      const [Skill_Rate, Skill_Num] = Data.Method._GetAdditionSet(Sname, Root.PartialAll);
      
      const Result1 = (() => {
        const values = Skill_Rate <= 1
          ? [Skill_Rate]
          : Skill_Rate <= 1.3
            ? [1, Skill_Rate - 1]
            : Skill_Rate <= 1.6
              ? [1, 0.3, Skill_Rate - 1.3]
              : [1, 0.3, 0.3, Skill_Rate - 1.6];
        
        return values.reduce((a, v) => a + Math.floor(Value * v), 0) + Skill_Num;
      })()
      const Result2 =
        Math.floor(Value * (All_Rate - Skill_Rate) + (All_Num - Skill_Num));
      return Result1 + Result2;
    },
    _GetDSPenalty: (Refs) => {
      const Base = 0.4
      const Pena1 = Refs.OtherInfo.IsDSPassive1;
      const Pena2 = Refs.OtherInfo.IsDSPassive2;
      const Calc = (Target) => Target ? (5 + Target * 3) / 100 : 0; 

      return Base + Calc(Pena1) + Calc(Pena2);
    },
    GetHIT: (Refs) => {
      const Base = Refs.Status.Level + Math.floor(Refs.Status.DEX_After)
      const Penalty = Refs.OtherInfo.Wepon !== "DS" ? 1 : Data.Method._GetDSPenalty(Refs);
      return Math.floor(Data.Method.GetTotalStatus(Refs, Base, "HIT", false) + Base * (Penalty - 1));
    },
    GetFREE: (Refs) => {
      const dt = Refs.Status;
      const arm = Refs.OtherInfo.ArmorOption;
      const M = value => Math.floor(value);
      const base = arm === "nomal"
        ? dt.Level + M(dt.AGI_After)
        : arm === "heavy"
          ? -15 + M(dt.Level * 0.5 + M(dt.AGI_After) * 0.75)
          : 30 + M(dt.Level * 1.25 + M(dt.AGI_After) * 1.75);
      return Data.Method.GetTotalStatus(Refs, base, "FREE");
    },
    _GetBaseCSPD: (Refs) => {
      const dt = Refs.Status;
      const M = value => Math.floor(value);
      return dt.Level + M(M(dt.DEX_After) * 2.94 + M(dt.AGI_After) * 1.16);
    },
    _GetBaseStable: (Refs) => {
      const base = Math.floor(Data.Method._GetBaseStatus(Refs, "Stable"));
      const dt = Refs.OtherInfo;
      const ArrowStable = (() => {
        if (dt.Wepon === "BW" && dt.SubWepon === "AR") return dt.SubStable;
        if (dt.Wepon === "BW" && dt.SubWepon === "KTN" && dt.IsSamuraiBow) {
          return Math.floor(dt.SubStable / 4)
        }
        if (dt.Wepon === "BG" && dt.SubWepon === "AR") return Math.floor(dt.SubStable / 2);
        return 0;
      })()

      return base + ArrowStable;
    },
    GetTotalCSPD: (Refs) => {
      const F = Data.Method;
      const Base = F._GetBaseCSPD(Refs);
      const HighCycle = Refs.OtherInfo.IsHighCycle ? 2.5 : 0;
      return Math.floor(F.GetTotalStatus(Refs, Base, "CSPD", false) + Base * HighCycle);
    },
    GetTotalASPD: (Refs) => {
      const F = Data.Method;
      const Info = Refs.OtherInfo;

      const base = F._GetBaseStatus(Refs, "ASPD") + Refs.Status.Level;
      const total = F.GetTotalStatus(Refs, base, "ASPD", false);

      const arm = Info.ArmorOption;
      const Addtion_arm = ((arm === "nomal") ? 0 : (arm === "light") ? 0.5 : -0.5);
      const Penalty_SH = (Info.IsMasterOfSH || Info.SubWepon !== "SH") ? 0 : -0.5;
      const QuickMotion = Info.IsQuickMotion ? 2.5 : 0;

      return Math.floor(total + base * (Addtion_arm + Penalty_SH + QuickMotion));
    },
    _GetBaseSPD: (Refs) => {
      const base = Refs.Status.ASPD - 1000;
      if (base < 180) return 0;
      return Math.floor(base / 180);
    },
    GetTotalResist: (Refs, IsPhysical, NoCutStatus = false) => {
      const Value =
        Data.Method.GetTotalStatus(Refs, 0, `Resist_${IsPhysical ? "Physical" : "Magic"}`);
      
      if (NoCutStatus) return Value;

      return Value < 50 ? Value
        : Value < 100 ? 50 + Math.floor((Value - 50) / 2)
          : 75 + Math.floor((Value - 100) / 4);
    },
    /**防御崩しの値を取得する。 */
    GetTotalSpecial_DefBreak: (Refs, NoCutStatus = false) => {
      const Value = Data.Method.GetTotalStatus(Refs, 0, "Special_DefBreak");
      return NoCutStatus ? Value : Value < 100 ? Value : 100;
    },
    /**先読みの値を取得する。 */
    GetTotalSpecial_Future: (Refs, NoCutStatus = false) => {
      const Value = Data.Method.GetTotalStatus(Refs, 0, "Special_Future");
      return NoCutStatus ? Value : Value < 100 ? Value : 100;
    },
    GetAwakeAttribute: (Refs, Target = "First", IsPreviw = false) => {
      const Option = Refs.OtherInfo.IsWeponAttribute;
      const IsMagic = Refs.OtherInfo.Skill?.[Target]?.Base.IsMagicalSkill;
      const Wepon = Refs.OtherInfo.Wepon;
      const SkAttr = Refs.OtherInfo.Skill?.[Target]?.Base?.Attribute;
      const AbsAttribute = MainMethod.GetSkillOptions(Refs, Target)?.AbsAttribute ? true : false;
      const EnemyAttribute = Refs.OtherInfo.Enemy?.IsNonAttribute;
      
      const Result = () => {
        if (IsMagic === undefined) return 0;

        const BaseAttribute = (Option === true || AbsAttribute) && SkAttr !== SkillAttribute.No && EnemyAttribute !== true
          ? 25 : 0;
        
        const SkillAttributes = () => {
          const IsMagicAttributeAddition = () => {
            if (Refs.OtherInfo.Skill?.[Target]?.Base?.OnlyMagicStable) return false;
            if (SkAttr === SkillAttribute.No || !IsMagic) return false;
            if (EnemyAttribute && AbsAttribute) return false;
            if (Option === true || AbsAttribute) return true;
            if (["SF", "MD"].includes(Wepon) && (Option === "Other" || Option === "Bad" || SkAttr !== undefined)) return true;
            return false;
          };

          if (IsMagicAttributeAddition() === false) return 0;

          const MagicAddition = Math.floor(Refs.Status.INT / 10);
          const SkillAddition = () => {
            if (!Refs.OtherInfo.IsOverLimit) return 0;
            const OverLimit = Refs.OtherInfo.IsOverLimit;
            const MagicGuid = Refs.OtherInfo.IsMagicGuide;

            return SelectionData.SkillBuff.mg1.IsActive
              ? OverLimit + MagicGuid
              : OverLimit;
          };

          return MagicAddition + SkillAddition()
        };
        const HotKnowsAddition = () => {
          if (Refs.OtherInfo.IsHotKnows === false) return 0;
          if (SkAttr === SkillAttribute.No) return 0;

          const Value = Number.isFinite(Refs.OtherInfo.IsHotKnows) ? Refs.OtherInfo.IsHotKnows * 1.5 : 0;
          return Option === true ? Value : (Option === "Bad" ? -Value : 0);
        };
        
        return BaseAttribute + SkillAttributes() + HotKnowsAddition();
      };     
      return IsPreviw ? Result() : Result() / 100;
    },    
    GetTotalAttribute: (Refs, Target = "First", IsPreviw = false) => {
      const Option = Refs.OtherInfo.IsAttribute;

      if (Option === false && IsPreviw === false) return 1;
      const Base = Data.Method._GetAddition(Refs, "Attribute");
      const Awake = Data.Method.GetAwakeAttribute(Refs,Target);
      return IsPreviw ? (Base + Awake) * 100 - 100
        : Option === true ? Base + Awake
          : Option === "Attribute" ? Base
            : Option === "Awake" ? 1 + Awake
              :1
    },
    _GetBaseCriticalDamege: (Refs) => {
      const str = Math.floor(Refs.Status.STR_After);
      const agi = Math.floor(Refs.Status.AGI_After);

      const value1 = str / 5;
      const value2 = (str + agi) / 10;

      return 150 + (value1 > value2 ? value1 : value2);
    },
    _GetBaseCritical: (Refs) => {
      const StatusBase = 25 + Math.floor(Refs.Status.CRT / 3.4);
      return Math.floor(StatusBase);
    },
    GetTotalCriticalDamege: (Refs, NoCutStatus = false) => {
      const base = Data.Method._GetBaseCriticalDamege(Refs);
      const v = Data.Method.GetTotalStatus(Refs, base, "CriticalDamege");

      if (NoCutStatus) return v;
      
      const overV = v - 300;
      return overV <= 0 ? v : 300 + Math.floor(overV / 2);
    },
    GetTotalCritical: (Refs) => {
      const v = Data.Method._GetBaseCritical(Refs);

      const Penalty = (Refs.OtherInfo.Wepon !== "DS" ? 1 : Data.Method._GetDSPenalty(Refs));
      const PenaltyCritical = v * (Penalty - 1);

      return Math.floor(Data.Method.GetTotalStatus(Refs, v, "Critical", false) + PenaltyCritical);
    },
    GetTotalStable: (Refs, NoCutStatus = false) => {
      const F = Data.Method;

      const base = F._GetBaseStable(Refs) + Refs.OtherInfo.Stable;
      const Stable = F.GetTotalStatus(Refs, base, "Stable");
      
      if (NoCutStatus) return Stable;
      if (Stable > 100) return 100;
      if (Stable < 0) return 0;

      return Stable;
    },
    GetTotalStableForMagic: (Refs) => {
      const EnableStabilis = Refs.OtherInfo.IsStabilis === true;

      const Stable = (() => {
        const BaseStable = Data.Method.GetTotalStable(Refs);
        const SkillStable = EnableStabilis ? 20 : 0;
        
        const ChainCastLv = Refs.OtherInfo.IsChainCast;
        const ChainCastCount = Refs.OtherInfo.IsChainCastCount;
        const ChainCastValue = ChainCastLv > 0
          ? 0.2 * Number(ChainCastLv) * Number(ChainCastCount)
          : 0;
        
        const ChainCastResult = ChainCastValue * (Refs.OtherInfo.Wepon === "SF" ? 2 : 1);
        return Math.floor(BaseStable + SkillStable + ChainCastResult);
      })();

      const MaxOver = EnableStabilis ? 40 : 20;
      const OverStable = (Stable - 80) < MaxOver ? (Stable - 80) : MaxOver;
      const Result = OverStable > 0
        ? [90, 100 + Math.floor(OverStable / 2)]
        : [Math.floor((Stable + 100) / 2), 100];
      Result.push(Math.floor((Result[0] + Result[1]) / 2));
      return Result;
    },
    //双剣用
    GetTotalSubStable: (Refs, NoCutStatus = false) => {
      if (Refs.OtherInfo.Wepon !== "DS") return Refs.OtherInfo.SubStable;
      const wep = Data.SubWepon.OH.Stable;
      const Sts = Refs.Status;

      const base = Math.floor(Refs.OtherInfo.SubStable / 2);
      const StatusStable = Math.floor(
        wep.STR * Math.floor(Sts.STR_After) +
        wep.AGI * Math.floor(Sts.AGI_After)
      );
      const Addition = Refs.AdditionStatus.All.Stable;
      //バーサークでの安定率低下は無効
      const SkillStable = SelectionData.SkillBuff["sm3-2"].IsActive ? 25 : 0;
      const Result = base + Addition + StatusStable + SkillStable;
      if (NoCutStatus) return Result;
      return Result > 100 ? 100 : Result;
    },
    GetCriticalForMagic: (Refs) => {
      const Root = Refs.OtherInfo;
      const EnemyNonAttrubute = Root.Enemy?.IsNonAttribute === true;
      const SkillNoneAttribute = Refs.OtherInfo.Skill?.First?.Base?.Attribute === SkillAttribute.No;
      const SpellBurst = Root.IsSpellBurst ? 0.25 : 0;
      const BreakDown = !EnemyNonAttrubute && !SkillNoneAttribute && Root.IsBreakDown ? 0.5 : 0;

      const Chance = (() => {
        if (SpellBurst === BreakDown) return 0;
        if (Refs.OtherInfo.Wepon !== "SF") return 0;
        const Skill = Refs.OtherInfo.Skill?.First?.Base;
        if (!Skill || Skill.IsMagicalSkill === false) return 0;
        if (Skill.Attribute === SkillAttribute.No || Skill?.Attribute === undefined
          && Refs.OtherInfo.IsWeponAttribute === false) return 0.25;
        return 0;
      })()
      return Math.floor(Refs.Status.Critical * (SpellBurst + BreakDown + Chance));
    },
    GetCriticalDamegeForMagic: (Refs, NoCutStatus = false) => {
      const { IsSpellBurst, IsDualBringer, IsBreakDown } = Refs.OtherInfo;
      const Rate1 = IsSpellBurst === true ? 0.75 : 0.5;
      const { INT, STR } = Refs.Status;
      const Rate2 = IsDualBringer === true && IsBreakDown === true && Refs?.OtherInfo?.Skill?.Group === "MagicWarrior" && INT > STR ? 0.25 : 0;

      const Result = 100 + Math.floor((Data.Method.GetTotalCriticalDamege(Refs, NoCutStatus) - 100) * (Rate1 + Rate2));
      return Result ;
    },
    /**ヘイトを取得する。 */
    GetHate: (Refs) => {
      const Puls = Data.Method.GetTotalStatus(Refs, 0, "Hate");
      const Minus = Data.Method.GetTotalStatus(Refs, 0, "HateLittle");

      return Puls - Minus;
     },
    //パッシブ倍率
    GetPassiveRate: (Refs, TargetSkill) => {
      if (Refs.NotSavedInfo.PassiveRate) return Refs.NotSavedInfo.PassiveRate;
      const Info = Refs.OtherInfo;
      const SKbase = TargetSkill?.["Base"];

      //ロングレンジ
      const LongRange = 
        (
          (SKbase.IsLongRange && Info.IsLongRange) ||
          (SKbase.IsLongRange !== false && Info.IsLongRange && SKbase?.IsDistance && SKbase?.MaxRange > 7)
        ) ? Info.IsLongRange / 100 : 0;
      
      //匠の剣術
      const SwordMaster =
        (Info.IsSwordMaster && Info.Skill?.Wepon?.includes(Info.Wepon))
          ? 0.2 : 0;
      
      //体術鍛錬
      const MAmaster =
        (Info.IsMAmaster !== false && Info.Skill?.Wepon?.includes(Info.Wepon))
          ? Info.IsMAmaster / 100 : 0;

      //強打と集中
      const PowerPlus = SKbase?.IsMagicalSkill
        ? Info.IsStrongerMagic ? 0.2 : 0
        : Info.IsStronger ? 0.2 : 0;
      
      //神の槍捌き
      const GodHB = Info.Skill.Tree === SkillTree.Halberd && SKbase.IsMagicalSkill === false && Info.IsGodHB > 0 && !SKbase.NoneGotHB
        ? Info.IsGodHB / 100
        : 0;
      return 1 + LongRange + SwordMaster + PowerPlus + MAmaster + GodHB;
    },
    //ブレイブ倍率
    GetBraveRate: (Refs) => {
      if (Refs.NotSavedInfo.BraveRate) return Refs.NotSavedInfo.BraveRate;

      const Info = Refs.OtherInfo;

      //ブレイブオーラ
      const SkillBrave = Info.IsBrave ? 0.2 : 0;

      //マナリチャージ
      const ManaReCharge = Info.IsManaReCharge ? -0.25 : 0;

      //オーラブレード
      const Rate = { OH: 0.2, TH: 0.3, DS: 0.1, none: 0 };
      const AuraBrade = Rate[Info.IsAuraBrade] || 0;

      //アシュラオーラ
      const Ashura = (() => {
        if (Info.IsAshura !== true) return 0;

        const Tree = Refs?.OtherInfo?.Skill?.Tree;
        return [SkillTree.Martial, SkillTree.Crucher, SkillTree.Knife, SkillTree.Assassin, SkillTree.DarkPower].includes(Tree)
          ? 0.3
          : 0.1;
      })();

      //エンハンス
      const Enhance = Info.IsEnhance ? 0.1 : 0;

      //画竜点睛
      const Garyo = Info.IsGaryoTensei > 0 && Info.Skill.Group === "Mononof"
        ? Number(Info.IsGaryoTensei) * 0.02
        : 0;
      
      //ナイトプレッジ
      const KnightPledge = (() => { 
        if (Info.IsKnightPledge === false) return 0;
        if (Info.IsKnightPledge < 1) return 0;

        const Smelting = Info.IsKnightPledgeSmelting;
        const BaseRate = Smelting > 3 ? Smelting / 100
          : (Smelting === 3 || Info.IsKnightPledge > 8) ? 0.03
            : (Smelting === 2 || Info.IsKnightPledge > 3) ? 0.02
              : 0.01;
        
        return Info.IsKnightPledgeUser > 0 ? BaseRate / Info.IsKnightPledgeUser : 0;
      })();

      //ツインストーム過熱スタック
      const TwinStorm = Math.floor(Info.IsTwinStorm / 25) / 10;

      return 1 + SkillBrave + ManaReCharge + AuraBrade + Ashura + Enhance + Garyo + KnightPledge + TwinStorm;
    },
    //バッファー
    CreateBuffer: class {
      _Status = [];
      _OtherInfo = [];
      _NotSavedInfo = [];
      All = {};
      PartialAll = {};
      
      constructor() {
        const Add = (Ary, Target) => {
          Ary.forEach(v => {
            this[`${Target}_${v}` ] = Data[Target][v]?.New();
            this[`_${Target}`].push(v);
          })
        }
        Add(Object.keys(Data.Status), "Status");
        Add(Object.keys(Data.NotSavedInfo), "NotSavedInfo");
        Add(Object.keys(Data.OtherInfo).filter(v => !v.match(/up/g)), "OtherInfo");

        this["OtherInfo_Skill"] = Data.OtherInfo.Skill;
        this["OtherInfo_Enemy"] = Data.OtherInfo.Enemy;
        
        ["All", "PartialAll"].forEach(Key => {
          Object.keys(Data.AdditionStatus[Key]).forEach(Prop => {
            this[Key][Prop] = Data.AdditionStatus[Key][Prop];
          })
        })
      }
      /**
       * ダメージ計算に必要な参照を返却
       * @returns {InterFace_ReferenceBase}
       */
      GetReference = () => {
        const Result = {
          AdditionStatus: { All: {}, PartialAll: {} },
          Status: {},
          OtherInfo: {},
          NotSavedInfo:{}
        };
        
        ["All", "PartialAll"].forEach(Key => { 
          Object.keys(this[Key])
            .forEach(Prop => Result.AdditionStatus[Key][Prop] = this[Key][Prop].New());
        })
        
        this._Status.forEach(key => Result.Status[key] = this[`Status_${key}`]?.New());
        this._OtherInfo.forEach(key => Result.OtherInfo[key] = this[`OtherInfo_${key}`]);
        this._NotSavedInfo.forEach(key => Result.NotSavedInfo[key] = this[`NotSavedInfo_${key}`]?.New());

        return Result;
      }
       /**
       * ダメージ計算に必要な参照を返却,第二引数をTrueとした場合は装備情報まで返却。
       * @returns {InterFace_ReferenceBase}
       */
      static GetReferenceCopy = (Refs = null, IsCompleteAdditionsData = false) => {
        const Result = {
          AdditionStatus: { All: {}, PartialAll: {} },
          Status: {},
          OtherInfo: {},
          NotSavedInfo:{},
        };

        Refs ??= Data;

        if (IsCompleteAdditionsData === false) {
          ["All", "PartialAll"].forEach(Key => {
            Object.keys(Refs.AdditionStatus[Key]).forEach(Prop => {
              Result.AdditionStatus[Key][Prop] = Refs.AdditionStatus[Key][Prop];
            })
          });
        } else {
          Result.AdditionStatus = Refs.AdditionStatus.New();
        }

        ["Status", "OtherInfo","NotSavedInfo"].forEach(Key => {
          Object.keys(Refs[Key]).forEach(Prop => Result[Key][Prop] = Refs[Key][Prop]);
        });

        return Result;
      }
    },
    /**引数に存在するスキルのクリティカル発生率を返却する。 */
    GetSkillCriticalRates: (Refs) => {
      const Skill = Refs.OtherInfo.Skill;
      const Enemy = Refs.OtherInfo.Enemy;

      const GetArray = (skill) => {
        const Result = {};
        const EnemyResistCritical = (Enemy?.ResistCritical ?? 100) - 100;

        for (let i = 0; i < SKILLKEYS.length; i++) {
          const Key = SKILLKEYS[i];
  
          if (!skill[Key]) continue;
          //確定クリティカル
          if (skill[Key]?.Base?.AbsCrit) {
            Result[Key] = 100;
            continue;
          }
  
          const BaseCritical = !skill[Key]?.Base?.IsMagicalSkill
            ? Data.Method.GetTotalCritical(Refs)
            : Data.Method.GetCriticalForMagic(Refs);
          
          const CriticalBonus = skill[Key]?.Addition?.Critical;
          const Critical = BaseCritical - EnemyResistCritical +
            (CriticalBonus ? typeof (CriticalBonus) === "function" ? CriticalBonus(Refs) : CriticalBonus : 0);
  
          Result[Key] = Critical < 0 ? 0 : Critical > 99 ? 100 : Critical;
        }
  
        return Result;
      };

      if (typeof (Skill) !== "string") return GetArray(Skill);

      //コンボスキル
      const ComboResult = {};
      SKILLKEYS.forEach(key => ComboResult[key] = []);

      const ComboSkill = SelectionData.ComboSkill[Skill];
      if (!ComboSkill) return {};

      ComboSkill.SkillSetArray.forEach(item => {
        const OnceSkill = SelectionData.Skill[item["SkillPropertyName"]];
        if (OnceSkill!== undefined) {
          const OnceResult = GetArray(OnceSkill);

          OnceResult.KeyEach(key => ComboResult[key].push(OnceResult[key]));
        }
      });
      SKILLKEYS.forEach(key => {
        if (ComboResult[key].length === 0) delete ComboResult[key];
      });

      return ComboResult;
    },
    /**引数に存在するスキルの命中率を返却する。 */
    GetSkillHitRates: (Refs) => {
      const Skill = Refs.OtherInfo.Skill;
      const TargetEnemy = Refs.OtherInfo.Enemy;
      const Difficulty = Refs.OtherInfo.IsDifficulty;
      const EnemyFree = Enemy.Difficulty_RequireDifHit(TargetEnemy, Difficulty);
      
      const GetArray = (skill) => {
        const Result = {};

        const SkillMPBonus = (skill?.MP ?? 100) / 10;
        const MyHit = Refs.Status.HIT;

        for (let i = 0; i < SKILLKEYS.length; i++){
          const Key = SKILLKEYS[i];
  
          if (!skill[Key]) continue;
  
          const G_HIT = skill[Key]?.Option?.G_Hit;
          const IsMagicSkill = skill[Key]?.Base?.IsMagicalSkill;
          //必中
          if (G_HIT || IsMagicSkill) {
            Result[Key] = 100;
            continue;
          }
          
          const HitBonus = skill[Key]?.Addition?.HIT;
          const HitDifference = MyHit + SkillMPBonus * 3 - EnemyFree +
            (HitBonus ? typeof (HitBonus) === "function" ? HitBonus(Refs) : HitBonus : 0);
          
          Result[Key] = HitDifference >= 0 ? 100 : HitDifference < -300 ? 0 : (100 + Math.floor(HitDifference / 3));
        }
        
        return Result;
      };

      if (typeof (Skill) !== "string") return GetArray(Skill);

      //コンボスキル
      const ComboResult = {};
      SKILLKEYS.forEach(key => ComboResult[key] = []);

      const ComboSkill = SelectionData.ComboSkill[Skill];
      if (!ComboSkill) return {};

      ComboSkill.SkillSetArray.forEach(item => {
        const OnceSkill = SelectionData.Skill[item["SkillPropertyName"]];
        if (OnceSkill!== undefined) {
          const OnceResult = GetArray(OnceSkill);

          OnceResult.KeyEach(key => ComboResult[key].push(OnceResult[key]));
        }
      });
      SKILLKEYS.forEach(key => {
        if (ComboResult[key].length === 0) delete ComboResult[key];
      });

      return ComboResult;
    },
    _GetCalcEnemyDefense: (Refs, Show, DisableStatusPenetrate = false) => {
      const addition = Refs.AdditionStatus.All;
      const dif = Refs.OtherInfo.IsDifficulty;
      const info = Refs.OtherInfo;
      const enemy = info.Enemy;
      const skill = info.Skill[Show];
      const SKbase = skill.Base;
      
      //物理貫通
      const SkillParetrate_ATK = () => {
        if (!skill?.Addition?.ATKPenetrate) return 0;
        return typeof skill.Addition.ATKPenetrate === "function"
          ? skill.Addition.ATKPenetrate(Refs)
          : skill.Addition.ATKPenetrate;
      }
      //魔法貫通
      const SkillParetrate_MATK = () => {
        if (!skill?.Addition?.MATKPenetrate) return 0;
        return typeof skill.Addition.MATKPenetrate === "function"
          ? skill.Addition.MATKPenetrate(Refs)
          : skill.Addition.MATKPenetrate;
      }

      const [Base, Penetrate] = SKbase.IsDEF
        ? [typeof enemy.def === "function" ? enemy.def(enemy.lv) : enemy.DEF(dif), addition.ATKPenetrate + SkillParetrate_ATK()]
        : [typeof enemy.mdef === "function" ? enemy.mdef(enemy.lv) : enemy.MDEF(dif), addition.MATKPenetrate + SkillParetrate_MATK()];
      
      const ResultPenet = DisableStatusPenetrate ? 0 : Penetrate;
      
      const PenetRationRate = SKbase.Penetration > 0 ? (1 - SKbase.Penetration / 100) : 1;

      const Eternal = () => {
        if (info.IsEternal1 === false) return 0;

        const SkillLv = info.IsEternal1;
        const SkillPT = info.IsEternal2;
        const EnemeyDef = SKbase.IsDEF
          ? (typeof enemy.def === "function" ? enemy.def(enemy.lv) : enemy.def)
          : typeof enemy.mdef === "function" ? enemy.mdef(enemy.lv) : enemy.mdef;

        const Result = SkillPT * SkillLv * 0.5;
        if (Math.floor(EnemeyDef / 2) <= Result) return Math.floor(EnemeyDef / 2);
        return Math.floor(Result) * PenetRationRate;
      }
      
      const Defs = Math.floor((Base * PenetRationRate) / (info.IsBreaker ? 2 : 1)) - Eternal();
      const Result = (Defs < 0 ? 0 : Defs) * (1 - (ResultPenet > 100 ? 100 : ResultPenet) / 100);

      return Result;
    },
    //ダメージ計算
    GetTotalDamege: (Stable = 1, Show ="First", Reference) => {
      const Sts = Reference.Status;
      const addition = Reference.AdditionStatus.All;
      const info = Reference.OtherInfo;
      /** @type { Enemy } */
      const enemy = info.Enemy;
      const skill = info.Skill[Show];
      const SkillName = info.Skill?.Name;

      if (skill === undefined) return 1;
      if (skill?.Checker) skill.Checker(Reference);

      const SKbase = skill.Base;
      
      const BaseDamege = () => {
        const dif = info.IsDifficulty;//ボス戦難易度
        const LvDeference = Sts.Level - enemy.Lv(dif);

        const ReferenceStatus = () => {
          if (SKbase.IsMagicalSkill) return SKbase.Reference.call(this,Reference);
          if (info.Wepon === "DS" && info.Skill.Group !== "DualSword" && !SkillName.match("カスタム入力")) return Sts.ATK;
          if (info.Wepon === "KTN" && info.IsCritical === "base") return Sts.ATK;
          return SKbase.Reference.call(this,Reference);
        }

        const ShowResist = () => {
          const Resist = SKbase.IsPhysical
            ? typeof enemy.Resist_Physical === "function" ? enemy.Resist_Physical(enemy.lv) : enemy.Resist_Physical
            : typeof enemy.Resist_Magic === "function" ? enemy.Resist_Magic(enemy.lv) : enemy.Resist_Magic;
          return 1 - Resist / 100;
        }

        const FixedStatus = () => {
          const Fixed_Base = SKbase.BaseFixedPower;
          const Fixed_SkillPower = skill?.Fixed ? skill.Fixed(Reference) : 0;
          const Fixed_SwordPoer = info.IsSwordPower && SKbase.IsSwordPower && !info.IsMONONOFWind
            ? addition.SwordPower
            : 0;
          const Fixed_Ashura = info.IsAshura ?
            info.Skill?.Count ? Math.floor(200 / info.Skill.Count) : 200
            : 0;    
          const Fixed_ArcSaber = (() => {
            if (!info.IsArcSaber) return 0;
            if (!SKbase.AbsCrit && info.IsCritical === "base") return 0;

            const Lv = Number(info.IsArcSaber);
            const Result = Sts.Critical * Lv / 10 + (Lv - 10) * Lv;
            return Result > 200 ? 200 : Result > 0 ? Result : 0;
          })();
           
          return Fixed_Base + Fixed_SkillPower + Fixed_SwordPoer + Fixed_Ashura + Fixed_ArcSaber;
        }

        const Result = Math.floor((LvDeference + ReferenceStatus()) * ShowResist() - Data.Method._GetCalcEnemyDefense(Reference, Show) + FixedStatus());
        return (Result > 0 ? Result : 0);
      }

      const SwordPower =
        info.IsSwordPower && SKbase.IsSwordPower && !info.IsMONONOFWind
          ? Data.Method._GetAddition(Reference, "SwordPower_Rate")
          : 1;
            
      const CriticalDamege = () => {
        const Base = (SKbase.IsMagicalSkill ? Sts.CriticalDamegeForMagic : Sts.CriticalDamege) / 100;
        if (SKbase.AbsCrit) return Base;
        if (info.IsCritical === "base") return 1;

        const DSTwins = () => {
          if (!skill["TwinCrit"] || info.IsDistance === "long") return 0;
          return skill.TwinCrit(Reference);
        }
        return Base + DSTwins();
      }

      const Attribute = Data.Method.GetTotalAttribute(Reference,Show);
      
      // true,false,LongDistance,Distance
      const Distance = () => {
        const Distance = Data.Method._GetAddition(Reference, "Distance");
        const LongDistance = Data.Method._GetAddition(Reference, "LongDistance");

        if (info.IsDistance === false || info.IsDistance === undefined || info.IsDistance === "none") return 1;
        if (SKbase.IsDistance === "MaxDistance") return Math.max(Distance, LongDistance);
        if (SKbase.IsDistance === "AbsDistance") return Distance;
        if (SKbase.IsDistance === "AbsLongDistance") return LongDistance;

        if (info.IsDistance === "short"
          && (SKbase.IsDistance === true || SKbase.IsDistance === "Distance"))
          return Distance;
        if (info.IsDistance === "long" && SKbase.MaxRange > 7
          && (SKbase.IsDistance === true || SKbase.IsDistance === "LongDistance"))
          return LongDistance;
        return 1
      };
      
      const SkillDamege = () => {
        const BasePower = typeof SKbase.BasePower === "function"
          ? SKbase.BasePower(Reference)
          : SKbase.BasePower;
        const AdditionPower = skill?.Power ? skill.Power(Reference) : 0;
        
        const CutRate = 10 ** (SKbase["CutRate"] ?? 2);
        return Math.floor((BasePower + AdditionPower) * CutRate) / 100 / CutRate;
      }

      //スキル威力値が０の場合は発動していないものとみなし０ダメージ
      if (SkillDamege() === 0) return 0;

      const Torauma = info.ToraumaRate / 100;

      //レイド倍率
      const RaidWeponRate = () => {
        if (enemy.IsRaidBoss === false) return 1;
        if (Reference.OtherInfo.IsRaidWepon !== true) return 1;
        return 2;
      };
      //コンボ倍率
      const ComboRate = () => {
        //コンボ無効のスキルは無の構えのみ判定する。
        if (skill?.Base?.NoneCombo) {
          return info.IsFreeStance === false ? 1 : (1 + Number(info.IsFreeStance) / 100);
        } 

        if (info.ComboRate) return info.ComboRate;

        //無の構え　コンボ,コンボ強打時は無効化
        const FreeStance =
        info.IsFreeStance === false || info.IsStrong || info.ComboRate !== null 
          ? 0 
          : Number(info.IsFreeStance) / 100
        return (info.IsStrong ? 1.5 : 1) + FreeStance;
      } 

      //パッシブ倍率
      const Passive = Data.Method.GetPassiveRate(Reference, skill);
      
      //ブレイブ系倍率
      const Brave = Data.Method.GetBraveRate(Reference);
      
      const TotalDamege = (() => {
        const Elements = [
          BaseDamege(),
          CriticalDamege(),
          Attribute,
          SkillDamege(),
          SwordPower,
          Stable,
          Torauma,
          RaidWeponRate(),
          ComboRate() * Passive * Distance() * Brave,
        ];
        const Result = Elements.reduce((total, elem) => Math.floor(total * elem), 1);
        return Result > 0 ? Result : 1;
      })();

      return (skill?.Split) ? Math.ceil(TotalDamege / skill.Split) : TotalDamege;
    },
  },
}
/**ダメージ算出に必要な情報の提供 */
class DamegeFactorITems{
  /**白ダメージ部分 */
  BaseDamege;
  /**クリティカルダメージの倍率 */
  CriticalDamege;
  /**抜刀威力の倍率 */
  SwordPowerRate;
  /**距離威力の倍率 */
  Distance;
  /**属性威力の倍率 */
  Attribute;
  /**安定率の倍率 */
  Stable;
  /**パッシブ倍率 */
  PassiveRate;
  /**アクティブ(ブレイブ)倍率 */
  ActiveRate;
  /**スキルダメージ倍率 */
  SkillDamege;
  /**コンボダメージ倍率 */
  ComboRate;
  /**慣れ倍率 */
  ToraumaRate;
}

//選択制の項目
const SelectionData = {
  Wepon: {
    NonesData: new AddEquipment("装備なし", EquipGroup.None, {}),
    0: new AddEquipment("カスタム入力1", EquipGroup.None, {}),
    10: new AddEquipment("有利-ATK%- STR%-クリ率", EquipGroup.Attribute,
      {
        Attribute: 22, ATK_Rate: 10, STR_Rate: 4, Critical: 27,
        NaturalRecovery_HP: -27, FREE: -14
      }),
    11: new AddEquipment("有利-ATK%-AGI%-クリ率", EquipGroup.Attribute,
      {
        Attribute: 22, ATK_Rate: 10, AGI_Rate: 4, Critical: 27,
        NaturalRecovery_HP: -27, FREE: -14
      }),
    20: new AddEquipment("有利-ATK%-DEX%-クリ率", EquipGroup.Attribute,
      {
        Attribute: 22, ATK_Rate: 10, DEX_Rate: 4, Critical: 27,
        NaturalRecovery_HP: -27, FREE: -14
      }),
    30: new AddEquipment("有利-MATK%-INT%-クリ率", EquipGroup.Attribute,
      {
        Attribute: 22, MATK_Rate: 10, INT_Rate: 4, Critical: 27,
        NaturalRecovery_HP: -27, FREE: -14
      }),
    1000: new AddEquipment("有利-クリダメ-STR%-クリ率", EquipGroup.Attribute,
      {
        STR_Rate: 4, CriticalDamege: 22, Attribute: 22, Critical: 27,
        NaturalRecovery_HP: -27, FREE: -14
      }),
    1001: new AddEquipment("有利-クリダメ-AGI%-クリ率", EquipGroup.Attribute,
      {
        AGI_Rate: 4, CriticalDamege: 22, Attribute: 22, Critical: 27,
        NaturalRecovery_HP: -27, FREE: -14
      }),
    1010: new AddEquipment("有利-クリダメ-DEX%-クリ率", EquipGroup.Attribute,
      {
        DEX_Rate: 4, CriticalDamege: 22, Attribute: 22, Critical: 27,
        NaturalRecovery_HP: -27, FREE: -14
      }),
    1020: new AddEquipment("有利-クリダメ-INT%-クリ率", EquipGroup.Attribute,
      {
        INT_Rate: 4, CriticalDamege: 22, Attribute: 22, Critical: 27,
        NaturalRecovery_HP: -27, FREE: -14
      }),
    1030: new AddEquipment("有利-クリダメ-ATK%-クリ率", EquipGroup.Attribute,
      {
        ATK_Rate: 6, CriticalDamege: 20, Attribute: 22, Critical: 27,
        NaturalRecovery_HP: -27, FREE: -14
      }),
    1040: new AddEquipment("有利-クリダメ-MATK%-クリ率", EquipGroup.Attribute,
      {
        MATK_Rate: 6, CriticalDamege: 20, Attribute: 22, Critical: 27,
        NaturalRecovery_HP: -27, FREE: -14
      }),
    2000: new AddEquipment("クリダメ-クリダメ%-ATK%-STR%-クリ率", EquipGroup.Common,
      {
        ATK_Rate: 11, STR_Rate: 10, CriticalDamege: 22, CriticalDamege_Rate: 4, Critical: 27,
        NaturalRecovery_HP: -27, FREE: -14
      }),
    2001: new AddEquipment("クリダメ-クリダメ%-ATK%-STR%-AGI%-クリ率", EquipGroup.Common,
      {
        ATK_Rate: 10, STR_Rate: 10, AGI_Rate: 10, CriticalDamege: 21, Critical: 27,
        NaturalRecovery_HP: -27, FREE: -14
      }),
    2010: new AddEquipment("クリダメ-クリダメ%-ATK%-DEX%-クリ率", EquipGroup.Common,
      {
        ATK_Rate: 10, DEX_Rate: 10, CriticalDamege: 22, CriticalDamege_Rate: 6, Critical: 27,
        NaturalRecovery_HP: -27, FREE: -14
      }),
    2020: new AddEquipment("クリダメ-クリダメ%-MATK%-INT%-クリ率", EquipGroup.Common,
      {
        MATK_Rate: 11, INT_Rate: 10, CriticalDamege: 22, CriticalDamege_Rate: 4, Critical: 27,
        NaturalRecovery_HP: -27, FREE: -14
      }),
    3000: new AddEquipment("DXボンバー封じ", EquipGroup.Create,
      { ATKPenetrate: 30, Barrier_Per: 20, ASPD_Rate: 100, Critical: 75 }),
    "3010": new AddEquipment("光の剣(片手剣)", EquipGroup.Slayer,
      { ATK_Rate: 10, ATKPenetrate: 30, ATK$INT: 150, Critical: 100, HP: 3000, MP: 300, ASPD: 300 }),
    "3011": new AddEquipment("光の剣(両手剣)", EquipGroup.Slayer,
      { ATK_Rate: 10, Attribute: 35, Critical: 100, HP: 3000, MP: 300, ASPD: 300, Resist_Physical: 30, Resist_Magic: 30 }),
    "3012": new AddEquipment("光の剣(抜刀剣)", EquipGroup.Slayer,
      { ATKPenetrate: 10, SwordPower_Rate: 10, Critical: 100, HP: 3000, MP: 300 }),
    "3013": new AddEquipment("ゼロスの杖", EquipGroup.Slayer,
      { MATK_Rate: 10, MATKPenetrate: 15, Stable: 20, CSPD_Rate: 75, ASPD: 1250, Hate: -40 }),
    "3014": new AddEquipment("霊王結魔弾(魔道具)", EquipGroup.Slayer,
      { Distance: 10, MATKPenetrate: 30, CSPD_Rate: 50, Critical_Rate: 100, Hate: -30 }),
    "3015": new AddEquipment("霊王結魔弾(手甲)", EquipGroup.Slayer,
      { Stable: 10, ATKPenetrate: 30, ASPD_Rate: 50, Critical_Rate: 100, Hate: -30, AbsFREE: 20 }),
    3016: new AddEquipment("ライムドグレイブ(プレーン)", EquipGroup.WhiteDay2024,
      {
        Attribute: 35, ATK_Rate: 10, ASPD_Rate: 30,
        Resist_Physical: 20, Matigation_Line: 10, Special_DefBreak: 20, MP: 300,
        MainWeponATK: 827, MainWepon_Stable: 60, MainWepon_Smelting: 15, MainWepon_Wepon: "HB"
      }),
    3017: new AddEquipment("ポトゥムブレイド(無有利)", EquipGroup.DLEvent,
      {
        Attribute: 35, MPRecovery: 7, Stable: -7, SPD: 7, HIT: 777, ATK$VIT: 77.7,
        MainWeponATK: 777, MainWepon_Stable: 77, MainWepon_Smelting: 15, MainWepon_Wepon: "TH"
      }),
    3020: new AddEquipment("ディグニダー", EquipGroup.EventEquip,
      {
        Special_Future: 30, Special_DefBreak: 30, Hate: 30, Critical: 90,
        MainWeponATK: 339, MainWepon_Stable: 90, MainWepon_Wepon: "MA"
      }),
    3030: new AddEquipment("鮭トバの双拳", EquipGroup.EventEquip,
      {
        Distance: 9, ATKPenetrate: 18, MPRecovery: 36, ASPD_Rate: 72,
        Resist_Fire: -30, Guard_Power: -60,
        MainWeponATK: 508, MainWepon_Stable: 70, MainWepon_Smelting: 15, MainWepon_Wepon: "MA"
      }),
    3040: new AddEquipment("精麗の魔道具", EquipGroup.HighLv_Castile, {
      ATK_Rate: 6, MATK_Rate: 12, Critical: 60, Special_Future: 60,
      Resist_Physical: 30, Resist_Magic: 30, SPD: 15,
      Resist_Health: 15
    }),
    "3040dif": new AddEquipment("精麗の魔道具(有利付き)", EquipGroup.HighLv_Castile, {
      Attribute: 25, ATK_Rate: 6, MATK_Rate: 12, Critical: 60, Special_Future: 60,
      Resist_Physical: 30, Resist_Magic: 30, SPD: 15,
      Resist_Health: 15     
    }),
    3050: new AddEquipment("ラスグリフナックル(光有利)", EquipGroup.Drop, {
      Attribute: 10, ATK_Rate: 11, ATKPenetrate: 20, ASPD: 900, Special_Future: 30
    }),
    3060: new AddEquipment("螺鈿真珠の手甲", EquipGroup.Drop, {
      ATK_Rate: 11, MATK_Rate: 11, MPRecovery: 75, HIT_Rate: 50,
      ASPD_Rate: 25, CSPD: 1250, Hate: 60,
      MainWepon_Wepon: "MA", MainWepon_Stable: 90, MainWeponATK: 454
    }),
    3070: new AddEquipment("サリーの短剣(手甲)", EquipGroup.EventEquip, {
      Critical: 100, ASPD_Rate: 100, FREE_Rate: 40, AbsFREE: 20, Pursuit_ATK: 100
      , Resist_Darkness: -30
    }),
    3080: new AddEquipment("カナデのキューブ", EquipGroup.EventEquip, {
      MP: 2000, CSPD: 1000, CSPD_Rate: 100, Special_DefBreak: 40, Resist_Normal: 20
    }),
    3090: new AddEquipment("ツインイーグルⅡ", EquipGroup.DLEvent, {
      MainWepon_Wepon: "MA",MainWeponATK: 458, MainWepon_Stable: 90,
      MPRecovery: 20,
      Special_Future: 20, Special_DefBreak: 20, Critical: 120
    }),
    3100: new AddEquipment("シュライフウィング", EquipGroup.DLEvent, {
      MainWepon_Wepon:"MD",MainWeponATK: 327, MainWepon_Stable: 70,
      ASPD_Rate: 100, CSPD_Rate: 100,
      Resist_Physical: 25, Resist_Magic: 25, Resist_Health: 25,
      Matigation_Bullet: 25
    }),
    3110: new AddEquipment("ライトニングフレイムⅡ", EquipGroup.DLEvent, {
      MainWepon_Wepon: "SF", MainWeponATK: 655, MainWepon_Stable: 60,
      MATKPenetrate: 50, CSPD: 900, CSPD_Rate: 40, AbsFREE: 10
    }),
    10000: new AddEquipment("ソードメイス", EquipGroup.Drop,
      { Distance: 10, Hate: 100, SwordPower_Rate: -50 }),
    "10000dif1": new AddEquipment("ソードメイス(盾装備)", EquipGroup.Drop,
      { Distance: 10, Hate: 100, SwordPower_Rate: -50, ATKPenetrate: 50, Resist_Physical: 25 }),
    "10000dif2": new AddEquipment("ソードメイス(重鎧装備)", EquipGroup.Drop,
      { Distance: 10, Hate: 100, SwordPower_Rate: -50, Critical: 50, Resist_Magic: 25 }),
    
    "free1": new AddEquipment("カスタム入力2", EquipGroup.None, {}),
    "free2": new AddEquipment("カスタム入力3", EquipGroup.None, {}),
  },
  Armor: {
    NonesData: new AddEquipment("装備なし", EquipGroup.None, {}),
    0: new AddEquipment("カスタム入力1", EquipGroup.None, {}),
    10: new AddEquipment("有利-クリダメ%-STR%-クリ率", EquipGroup.Attribute, {
      Attribute: 22, STR_Rate: 10, Critical: 27, CriticalDamege_Rate: 10,
      MATK_Rate: -13, MATKPenetrate: -7, HIT: -14, HIT_Rate: -6
    }),
    11: new AddEquipment("有利-クリダメ%-AGI%-クリ率", EquipGroup.Attribute, {
      Attribute: 22, AGI_Rate: 10, Critical: 27, CriticalDamege_Rate: 10,
      MATK_Rate: -13, MATKPenetrate: -7, HIT: -14, HIT_Rate: -6
    }),
    20: new AddEquipment("有利-クリダメ%-INT%-クリ率", EquipGroup.Attribute, {
      Attribute: 22, INT_Rate: 10, Critical: 27, CriticalDamege_Rate: 10,
      ATK_Rate: -13, ATKPenetrate: -7, HIT: -14, HIT_Rate: -6
    }),
    30: new AddEquipment("有利-クリダメ%-DEX%-クリ率", EquipGroup.Attribute, {
      Attribute: 22, DEX_Rate: 10, Critical: 27, CriticalDamege_Rate: 10,
      MATK_Rate: -13, MATKPenetrate: -7, HIT: -14, HIT_Rate: -6
    }),
    40: new AddEquipment("有利-クリダメ-クリダメ%-クリ率", EquipGroup.Attribute,
      { Attribute: 22, Critical: 27, CriticalDamege_Rate: 10, CriticalDamege: 22 }),
    1000: new AddEquipment("クリダメ-クリダメ%-ATK%-クリ率", EquipGroup.Common, {
      ATK_Rate: 11, Critical: 27, CriticalDamege_Rate: 10, CriticalDamege: 22,
      MATK_Rate: -13, MATKPenetrate: -7, HIT: -14, HIT_Rate: -6
    }),
    1010: new AddEquipment("クリダメ-クリダメ%-DEX%-クリ率", EquipGroup.Common, {
      DEX_Rate: 10, Critical: 27, CriticalDamege_Rate: 10, CriticalDamege: 22,
      MATK_Rate: -13, MATKPenetrate: -7, HIT: -14, HIT_Rate: -6
    }),
    1020: new AddEquipment("クリダメ-クリダメ%-MATK%-クリ率", EquipGroup.Common, {
      MATK_Rate: 11, Critical: 27, CriticalDamege_Rate: 10, CriticalDamege: 22,
      ATK_Rate: -13, ATKPenetrate: -7, HIT: -14, HIT_Rate: -6
    }),
    2000: new AddEquipment("クリダメ-クリダメ%-ATK%-STR%-クリ率", EquipGroup.Common, {
      ATK_Rate: 6, STR_Rate: 10, Critical: 27, CriticalDamege_Rate: 10, CriticalDamege: 22,
      MATKPenetrate: -7, HIT: -14, HIT_Rate: -6
    }),
    2010: new AddEquipment("クリダメ-クリダメ%-ATK%-DEX%-クリ率", EquipGroup.Common, {
      ATK_Rate: 6, DEX_Rate: 10, Critical: 27, CriticalDamege_Rate: 10, CriticalDamege: 22,
      ATKPenetrate: -7, HIT: -14, HIT_Rate: -6
    }),
    2020: new AddEquipment("クリダメ-クリダメ%-MATK%-INT%-クリ率", EquipGroup.Common, {
      MATK_Rate: 6, INT_Rate: 10, Critical: 27, CriticalDamege_Rate: 10, CriticalDamege: 22,
      ATKPenetrate: -7, HIT: -14, HIT_Rate: -6
    }),
    3000: new AddEquipment("小悪魔の衣", EquipGroup.Create,
      {
        ASPD: 1000, CSPD: 1000, Resist_Health: 10, Hate: 15,
        HP_Rate: -30, Resist_Light: -666
      }),
    3010: new AddEquipment("星辰の舟衣", EquipGroup.Edwards, {
      HP: 15e3, Critical: 25, Resist_Physical: 20, Resist_Magic: 20,
      Resist_Health: 10, Resist_Light: 15, Resist_Darkness: 15
    }),
    3011: new AddEquipment("星辰の舟衣(近)", EquipGroup.Edwards, {
      HP: 7500, Critical: 25, Distance: 10, ATKPenetrate: 5, MATKPenetrate: 5,
      Special_Future: 20, Resist_Darkness: 30
    }),
    3012: new AddEquipment("星辰の舟衣(近):両手剣装備", EquipGroup.Edwards, {
      HP: 7500, Critical: 25, Distance: 10, ATKPenetrate: 5, MATKPenetrate: 5,
      Special_Future: 20, Resist_Darkness: 30, MP: 200
    }),
    3013: new AddEquipment("星辰の舟衣(遠)", EquipGroup.Edwards, {
      HP: 7500, Critical: 25, LongDistance: 10, ATKPenetrate: 5, MATKPenetrate: 5,
      Special_DefBreak: 20, Resist_Light: 30
    }),
    3014: new AddEquipment("星辰の舟衣(遠):矢装備", EquipGroup.Edwards, {
      HP: 7500, Critical: 25, LongDistance: 10, ATKPenetrate: 5, MATKPenetrate: 5,
      Special_DefBreak: 20, Resist_Light: 30, ASPD: 500
    }),
    3020: new AddEquipment("水神子の法衣", EquipGroup.Drop,
      {
        HP_Rate: 25, Resist_Physical: 25, Resist_Magic: 25,
        CSPD: 600, CSPD_Rate: 40, Resist_Aqua: 20
      }),
    "3020dif": new AddEquipment("水神子の法衣(抜刀剣装備)", EquipGroup.Drop,
      {
        HP_Rate: 25, Resist_Physical: 25, Resist_Magic: 25,
        CSPD: 600, CSPD_Rate: 40, Resist_Aqua: 20, Critical: 40
      }),
    3030: new AddEquipment("紅月の魔衣", EquipGroup.Halloween_8,
      {
        ATK_Rate: 10, MATK_Rate: 10, HIT_Rate: 10, Critical_Rate: 40,
        Special_Future: 10, Special_DefBreak: 10, Resist_Light: -60
      }),
    "3040dif": new AddEquipment("紅月の魔衣(両手剣装備)", EquipGroup.Halloween_8,
      {
        ATK_Rate: 10, MATK_Rate: 10, HIT_Rate: 10, Critical_Rate: 40,
        Special_Future: 10, Special_DefBreak: 10, Resist_Light: -60, Stable: 10
      }),
    3050: new AddEquipment("スチールメイルP", EquipGroup.HighLv_Alterdarl,
      {
        STR_Rate: 11, ATK_Rate: 10,
        Matigation_Pain: 30, Resist_Wind: -50, Resist_Physical: 50, Resist_Magic: 10
      }),
    "3050dif": new AddEquipment("スチールメイルP(重鎧装備)", EquipGroup.HighLv_Alterdarl,
      {
        STR_Rate: 11, ATK_Rate: 10,
        Matigation_Pain: 30, Resist_Wind: -50, Resist_Physical: 50, Resist_Magic: 10, ASPD_Rate: 50
      }),
    3060: new AddEquipment("スチールメイルM", EquipGroup.HighLv_Alterdarl,
      {
        INT_Rate: 11, MATK_Rate: 10,
        Resist_Physical: 10, Resist_Magic: 50, Matigation_Blade: 30, Resist_Wind: -50,
      }),
    "3060dif": new AddEquipment("スチールメイルM(重鎧装備)", EquipGroup.HighLv_Alterdarl,
      {
        INT_Rate: 11, MATK_Rate: 10, Resist_Physical: 10, Resist_Magic: 50,
        Matigation_Blade: 30, Resist_Wind: -50, ASPD_Rate: 50
      }),
    3070: new AddEquipment("ウィンター衣装Ⅱ", EquipGroup.Xmas2023,
      {
        HP: 9000, MP: 900, MPRecovery: 9, Critical_Rate: 40, WeponATK_Rate: 10
        , ATKPenetrate: 10, MATKPenetrate: 10, Resist_Normal: - 30
      }),
    3080: new AddEquipment("アンティークメイル", EquipGroup.WhiteDay2024,
      {
        MPRecovery: 15, Critical: 15, ASPD_Rate: 20,
        Resist_Physical: 30, Resist_Magic: 30, Matigation_Bullet: 40, Hate: 20
      }),
    3090: new AddEquipment("精麗の煌衣", EquipGroup.HighLv_Castile, {
      MP: 1200, ATK_Rate: 4, MATK_Rate: 4, MPRecovery: 4, Critical: 20, Critical_Rate: 60,
      SPD: 1, Resist_Normal: 20
    }),
    "3090dif1": new AddEquipment("精麗の煌衣(力)", EquipGroup.HighLv_Castile, {
      MP: 600, AGI_Rate: 10, ATK_Rate: 12, Critical: 30, Critical_Rate: 40,
      SPD: 3, Resist_Normal: 30
    }),
    "3090dif2": new AddEquipment("精麗の煌衣(知)", EquipGroup.HighLv_Castile, {
      MP: 600, DEX_Rate: 10, MATK_Rate: 12, Critical: 30, Critical_Rate: 40,
      SPD: 3, Resist_Normal: 30
    }),
    "3090dif3": new AddEquipment("精麗の煌衣(健)", EquipGroup.HighLv_Castile, {
      MP: 600, VIT_Rate: 10, MPRecovery: 12, Critical: 40, Critical_Rate: 20,
      SPD: 5, Resist_Normal: 40
    }),
    "3100": new AddEquipment("サメスイムウェア(体)", EquipGroup.EventEquip, {
      Distance: 10, LongDistance: 5, MP: 500, MPRecovery: 10,
      Pursuit_MATK: 60, ASPD_Rate: 30, CSPD_Rate: 30
    }),
    3200: new AddEquipment("ドゥアトローブ", EquipGroup.EventEquip, {
      Distance: 12, LongDistance: 12, HIT_Rate: 12, Special_Future: 20, Special_DefBreak: 20,
      Barrier_Physical: 3000, Barrier_Magic: 3000, Barrier_Per: 30, Barrier_Repair: 25,
      Resist_Ground:30
    }),
    3210: new AddEquipment("ドゥアトローブ(冥)", EquipGroup.EventEquip, {
      Distance: 12, Stable: 12, HIT_Rate: 24, ASPD: 900, Special_DefBreak: 20,
      Barrier_Magic: 6000, Barrier_Per: 15, Barrier_Repair: 50,
      Resist_Ground: 30
    }),
    3220: new AddEquipment("ドゥアトローブ（審)", EquipGroup.EventEquip, {
      LongDistance: 12, Stable: 12, HIT_Rate: 24, ASPD: 900, Special_Future: 20,
      Barrier_Physical: 6000, Barrier_Per: 15, Barrier_Repair: 50,
      Resist_Ground:30
    }),
    "free1": new AddEquipment("カスタム入力2", EquipGroup.None, {}),
    "free2": new AddEquipment("カスタム入力3", EquipGroup.None, {}),
  },
  Addition: {
    NonesData: new AddEquipment("装備なし", EquipGroup.None, {}),
    0: new AddEquipment("カスタム入力1", EquipGroup.None, {}),
    10: new AddEquipment("トーメントヘルム", EquipGroup.Drop,
      { HP_Rate: 21, Stable: 14, Critical: 5, }),
    20: new AddEquipment("ミーテカチューシャ", EquipGroup.Drop,
      { ATK_Rate: 8, DEX_Rate: 7, Critical: 5, NaturalRecovery_MP_Rate: -12 }),
    30: new AddEquipment("マジカルストール", EquipGroup.Drop,
      { MATK_Rate: 6, INT_Rate: 7, HP: 500, }),
    40: new AddEquipment("トゥゲザークラウン", EquipGroup.EventEquip,
      { HP: 1800, STR: 8, Resist_Physical: 30, Hate: 42 }),
    50: new AddEquipment("魔王の兜", EquipGroup.Drop,
      { Critical: 16, CSPD_Rate: 80, Stable: 2, MP: 600, HP: -2000 }),
    51: new AddEquipment("恵方巻ポトゥム", EquipGroup.EventEquip,
      { Resist_Physical: 20, Resist_Magic: 20, Resist_Health: 10, FirstReturn: 30 }),
    60: new AddEquipment("砂賊団のお面", EquipGroup.Drop,
      { SwordPower_Rate: 12, ATKPenetrate: 12, Resist_Ground: 12 }),
    61: new AddEquipment("ブローカーマスク", EquipGroup.EventEquip,
      { ATK_Rate: 10, ATKPenetrate: 10, MPRecovery: 5 }),
    "61dif": new AddEquipment("ブローカーマスク(抜刀剣装備)", EquipGroup.EventEquip,
      { ATK_Rate: 10, ATKPenetrate: 10, MPRecovery: 5, SwordPower_Rate: 5 }),
    70: new AddEquipment("ナイアータティアラ", EquipGroup.Drop,
      { ATKPenetrate: 15, Critical: 25, HIT_Rate: 100, ASPD: -1000 }),
    80: new AddEquipment("疼く右腕", EquipGroup.Drop,
      { ATK_Rate: 8, STR_Rate: 7, Special_DefBreak: 9, Resist_Health: -10, }),
    1000: new AddEquipment("ほおひげ", EquipGroup.Create,
      { STR_Rate: 5, Distance: 6, ASPD: 400 }),
    1010: new AddEquipment("トーメントヘルム", EquipGroup.Create,
      { HP_Rate: 25, Stable: 15, Critical: 5, }),
    1020: new AddEquipment("クマーハット", EquipGroup.EventEquip,
      { ATK_Rate: 5, Critical: 15, Resist_Normal: -10 }),
    1030: new AddEquipment("レースヘッドドレス", EquipGroup.Create,
      { ATK_Rate: 7, SwordPower_Rate: 8, DEX_Rate: 6, }),
    1040: new AddEquipment("マジカルストール", EquipGroup.Create,
      { MATK_Rate: 7, INT_Rate: 7, HP: 500, }),
    1050: new AddEquipment("クリスマスツリー", EquipGroup.EventEquip,
      { ATK_Rate: 8, ATKPenetrate: 16, Matigation_Rush: 32, Hate: 4 }),
    1051: new AddEquipment("バウガイ帽子", EquipGroup.EventEquip,
      { ATK_Rate: 5, Distance: 5, HP_Rate: 10, ATKPenetrate: 10, SPD: 5, ASPD: -1350 }),
    1060: new AddEquipment("キャットテイル", EquipGroup.Create,
      { Stable: 15, AGI_Rate: 5 }),
    1070: new AddEquipment("レターハット", EquipGroup.EventEquip,
      { AGI: 8, WeponATK_Rate: 16, ASPD: 320, ASPD_Rate: 64 }),
    1071: new AddEquipment("キャスケット", EquipGroup.Create,
      { Stable: 20, Resist_Physical: -20, Resist_Magic: -20 }),
    1079: new AddEquipment("ドラゴンマント", EquipGroup.Create,
      { HP: 1e4, ATKPenetrate: 9, MATKPenetrate: 9, SwordPower_Rate: 8 }),
    1080: new AddEquipment("飛竜のマント", EquipGroup.Create,
      { ATKPenetrate: 20, Stable: -2 }),
    "1080dif": new AddEquipment("飛竜のマント(短剣装備時)", EquipGroup.Create,
      { ATKPenetrate: 20, Stable: -2, Hate: -100 }),
    1081: new AddEquipment("ビックホーン", EquipGroup.Create,
      { ATK_Rate: 9, Stable: 6, SPD: 3 }),
    1090: new AddEquipment("ディシーブケラト", EquipGroup.Drop,
      { ATKPenetrate: 10, Stable: 10, Critical: 10, ASPD: 500 }),
    1100: new AddEquipment("ディシーブフテラ", EquipGroup.Drop,
      { MATKPenetrate: 10, Stable: 10, Critical: 10, CSPD: 500 }),
    1110: new AddEquipment("占い師ベール", EquipGroup.Create,
      { Stable: 10, CSPD: 500, CSPD_Rate: 25 }),
    1120: new AddEquipment("スケイルホーン", EquipGroup.Create,
      { Distance: 9, HIT_Rate: 40, Resist_Physical: 20, Resist_Magic: 20 }),
    1130: new AddEquipment("コリンのお面", EquipGroup.EventEquip,
      { HP_Rate: 40, Resist_Physical: 5, Resist_Magic: 5, Resist_Health: 5, SPD: 5 }),
    1140: new AddEquipment("ギフトポトゥム", EquipGroup.EventEquip,
      { ATK_Rate: 10, MATK_Rate: 10, Critical: 10, CriticalDamege: 10 }),
    1150: new AddEquipment("黒聖のスカーフ", EquipGroup.Xmas,
      { MATK_Rate: 9, HP: 4000, CSPD_Rate: 30, Resist_Magic: 30, Resist_Light: 30 }),
    1160: new AddEquipment("黒聖のマフラー", EquipGroup.Xmas,
      { ATK_Rate: 9, HP: 4000, ASPD_Rate: 30, Resist_Physical: 30, Resist_Light: 30 }),
    1170: new AddEquipment("ハートコック帽", EquipGroup.EventEquip,
      { ATKPenetrate: 15, MATKPenetrate: 15, MP: 300 }),
    1180: new AddEquipment("天使のポムチョコ", EquipGroup.EventEquip,
      {
        ATK_Rate: 10, MATK_Rate: 10,
        Special_DefBreak: 10, Special_Future: 10
      }),
    1190: new AddEquipment("ブローカーハット", EquipGroup.EventEquip,
      { CriticalDamege_Rate: 8, LongDistance: 4, MP: 600 }),
    1200: new AddEquipment("シュメッタヘアピン", EquipGroup.Drop,
      { MATK_Rate: 9, INT_Rate: 9, Resist_Magic: 9 }),
    1210: new AddEquipment("ナミダマーク", EquipGroup.Drop,
      { MATK_Rate: 8, Stable: 4, WeponATK_Rate: 2 }),
    1220: new AddEquipment("水神子の龍角", EquipGroup.Drop,
      { Distance: 5, SPD: 5, Pursuit_ATK: 200 }),
    "1220dif1": new AddEquipment("水神子の龍角(抜刀剣装備)", EquipGroup.Drop,
      { Distance: 5, SPD: 5, Pursuit_ATK: 200, SwordPower_Rate: 5 }),
    "1220dif2": new AddEquipment("水神子の龍角(盾装備)", EquipGroup.Drop,
      { Distance: 5, SPD: 5, Pursuit_ATK: 200, MATK_Rate: 5 }),
    1230: new AddEquipment("ウエストレット", EquipGroup.Drop,
      { CriticalDamege_Rate: 9, MATKPenetrate: 9, NaturalRecovery_MP_Rate: 9 }),
    1239: new AddEquipment("ゴシック魔女帽", EquipGroup.Create,
      { MATKPenetrate: 20, Critical: 25, Critical_Rate: 50 }),
    1240: new AddEquipment("硬守のヘルメット", EquipGroup.Drop,
      { MDEF_Rate: 10, Resist_Health: 20, Resist_Normal: 30 }),
    1250: new AddEquipment("襟付きミニマント", EquipGroup.Create,
      { STR_Rate: 9, ATK_Rate: 9, Special_Future: 18, ATK$AGI: -100 }),
    1260: new AddEquipment("プライバシーライン", EquipGroup.Create,
      { Critical_Rate: 40, Resist_Light: 30, HIT_Rate: -20 }),
    1270: new AddEquipment("クッキーの腰羽", EquipGroup.EventEquip,
      { LongDistance: 10, DEX_Rate: 5, HIT_Rate: 25 }),
    "1270dif1": new AddEquipment("クッキーの腰羽(矢装備)", EquipGroup.EventEquip,
      { LongDistance: 10, DEX_Rate: 5, HIT_Rate: 50 }),
    "1270dif2": new AddEquipment("クッキーの腰羽(魔道具装備)", EquipGroup.EventEquip,
      { LongDistance: 10, DEX_Rate: 5, HIT_Rate: 25, MATKPenetrate: 25 }),
    1280: new AddEquipment("丸サングラス", EquipGroup.EventEquip,
      { AGI_Rate: 9, Critical: 18 }),
    "1280dif1": new AddEquipment("丸サングラス(手甲装備)", EquipGroup.EventEquip,
      { AGI_Rate: 9, Critical: 18, ATK_Rate: 9 }),
    "1280dif2": new AddEquipment("丸サングラス(抜刀剣装備)", EquipGroup.EventEquip,
      { AGI_Rate: 9, Critical: 18, CSPD: 900 }),
    1290: new AddEquipment("シャコー帽", EquipGroup.Create,
      { ATK_Rate: 10, DEX_Rate: 10, HIT_Rate: 10 }),
    1300: new AddEquipment("バットイヤー帽子", EquipGroup.Halloween_6,
      { LongDistance: 7, FREE: 60, AbsFREE: 5 }),
    1320: new AddEquipment("乗っかり魔女猫", EquipGroup.Halloween_6,
      { MP: 400, Critical: 20, MATKPenetrate: 10 }),
    1330: new AddEquipment("フランケンボルト", EquipGroup.Halloween_6,
      { HIT_Rate: 40, Resist_Health: 20, ATK$VIT: 80 }),
    1340: new AddEquipment("ハロウィン帽子", EquipGroup.Halloween_7,
      { Critical_Rate: 75, CSPD_Rate: 25, Barrier_Per: 5 }),
    1350: new AddEquipment("しにがみフード", EquipGroup.Halloween_7,
      {
        SwordPower_Rate: 8, ATK_Rate: 4, Critical_Rate: -20,
        Avoid_Repair: 12
      }),
    1360: new AddEquipment("ぐるぐる包帯頭", EquipGroup.Halloween_8,
      { Distance: 9, Critical: 18, SwordPower_Rate: -9, Resist_Fire: -18 }),
    "1360dif": new AddEquipment("ぐるぐる包帯頭(抜刀剣装備)", EquipGroup.Halloween_8,
      { Distance: 9, Critical: 18, SwordPower_Rate: 3, Resist_Fire: -18 }),
    1370: new AddEquipment("ダンディウルフ", EquipGroup.Halloween_8,
      { ATKPenetrate: 20, Critical: 10 }),
    "1370dif": new AddEquipment("ダンディウルフ(矢装備)", EquipGroup.Halloween_8,
      { ATKPenetrate: 20, Critical: 10, ATK_Rate: 5 }),
    1380: new AddEquipment("ハロウィンテディ", EquipGroup.Halloween_8,
      { Resist_Physical: 10, Resist_Magic: 10, Barrier_Per: 10 }),
    "1380dif": new AddEquipment("ハロウィンテディ(重鎧装備)", EquipGroup.Halloween_8,
      { Resist_Physical: 10, Resist_Magic: 10, Barrier_Per: 10, ASPD_Rate: 50 }),
    1390: new AddEquipment("ハロウィンブレラ", EquipGroup.Halloween_8,
      { ATK_Rate: 10, STR_Rate: 8, Critical: 6 }),
    "1390dif": new AddEquipment("ハロウィンブレラ(忍術巻物装備)", EquipGroup.Halloween_8,
      { ATK_Rate: 10, STR_Rate: 8, Critical: 20 }),
    1400: new AddEquipment("夜闇のランタン", EquipGroup.Halloween_8,
      { HP_Rate: 30, Resist_Health: 25, Critical: 20, Hate: 35 }),
    1410: new AddEquipment("ハッピーハロウィン", EquipGroup.Halloween_8,
      { MP: 900, MPRecovery: 6, Resist_Physical: 30 }),
    1420: new AddEquipment("紅月の外套", EquipGroup.Halloween_8,
      { MP: 250, DEX_Rate: 10, ASPD: 500, CriticalDamege_Rate: 10, Resist_Fire: 25 }),
    1430: new AddEquipment("紅月の帽子", EquipGroup.Halloween_8,
      { MP: 250, INT_Rate: 10, CSPD_Rate: 50, MATKPenetrate: 10, Resist_Fire: 25 }),
    1440: new AddEquipment("スチールヘルム", EquipGroup.HighLv_Alterdarl,
      {
        HP_Rate: 50, ASPD_Rate: 40, CSPD: 800,
        Matigation_Bullet: 30
      }),
    "1440dif": new AddEquipment("スチールヘルム(重鎧装備)", EquipGroup.HighLv_Alterdarl,
      {
        HP_Rate: 50, ASPD_Rate: 40, CSPD: 800,
        Matigation_Bullet: 30, HIT: 100, Critical_Rate: 100
      }),
    1450: new AddEquipment("抑えきれぬ邪眼", EquipGroup.Create,
      { Distance: 9, STR_Rate: 9, Resist_Darkness: 9, HIT_Rate: -9 }),
    1460: new AddEquipment("サイドポニー", EquipGroup.Drop,
      { ATK_Rate: 9, AGI_Rate: 9, FREE_Rate: 9 }),
    1470: new AddEquipment("リースクラウン", EquipGroup.Xmas2023,
      { MATK_Rate: 9, DEX_Rate: 8, Resist_Health: 8 }),
    1480: new AddEquipment("ニットベル帽", EquipGroup.Xmas2023, {
      LongDistance: 9, MPRecovery: 8,
      Pursuit_ATK: 70, Matigation_Meteo: 35
    }),
    1490: new AddEquipment("ツリーケープ", EquipGroup.Xmas2023, {
      MATK_Rate: 8, MATKPenetrate: 16, Matigation_Line: 32, Hate: 4
    }),
    1500: new AddEquipment("魅力的なくちびる", EquipGroup.Create, {
      Resist_Physical: 40, Resist_Health: 20, SPD: 10
    }),
    1510: new AddEquipment("フルフェイス", EquipGroup.Create, {
      CSPD: 700, Hate: -70
    }),
    "1510dif": new AddEquipment("フルフェイス(忍術巻物装備)", EquipGroup.Create, {
      CSPD: 1000, Hate: -70, Critical: 30
    }),
    1520: new AddEquipment("ホワイトデーリボン", EquipGroup.WhiteDay2024,
      { MP: 400, Critical: 30, MATKPenetrate: 20 }),
    1530: new AddEquipment("コリンクーヘン", EquipGroup.WhiteDay2024,
      { Resist_Health: 40 }),
    "1530dif1": new AddEquipment("コリンクーヘン(軽鎧装備)", EquipGroup.WhiteDay2024,
      { Resist_Health: 20, ASPD_Rate: 40 }),
    "1530dif2": new AddEquipment("コリンクーヘン(重鎧装備)", EquipGroup.WhiteDay2024,
      { Resist_Health: 20, CSPD_Rate: 40 }),
    1540: new AddEquipment("ホワイトニット帽", EquipGroup.WhiteDay2024,
      { ATKPenetrate: 10, SPD: 5 }),
    "1540dif": new AddEquipment("ホワイトニット帽(忍術巻物装備)", EquipGroup.WhiteDay2024,
      { ATKPenetrate: 10, SPD: 5, SwordPower_Rate: 15 }),
    1550: new AddEquipment("クッキーの被り物", EquipGroup.WhiteDay2024,
      { ATK_Rate: 10, MATK_Rate: 10, ATKPenetrate: 10, MATKPenetrate: 10 }),
    1560: new AddEquipment("立派なヒゲ", EquipGroup.Create,
      { MATKPenetrate: 5, Critical_Rate: 50, CSPD_Rate: 50 }),
    1570: new AddEquipment("ホースシッポ", EquipGroup.Create,
      {
        ASPD_Rate: 120, FREE_Rate: 60,
        Avoid_Repair: 30, AbsFREE: 15
      }),
    1580: new AddEquipment("ストロームヘルム", EquipGroup.Drop,
      { HP: 1e4, NaturalRecovery_HP_Rate: 100 }),
    1590: new AddEquipment("ブリータマスク", EquipGroup.Spring2024,
      { ATK_Rate: 10, Stable: 8 }),
    "1590dif1": new AddEquipment("ブリータマスク(軽鎧装備)", EquipGroup.Spring2024,
      { ATK_Rate: 10, Stable: 8, ATKPenetrate: 4, Resist_Normal: -12 }),
    "1590dif2": new AddEquipment("ブリータマスク(重鎧装備)", EquipGroup.Spring2024,
      { ATK_Rate: 10, Stable: 8, SPD: 4, Resist_Normal: -12 }),
    1600: new AddEquipment("春昼ハット", EquipGroup.Spring2024,
      { ATK_Rate: 10, Critical: 15, Avoid_Repair: 20 }),
    "1600dif": new AddEquipment("春昼ハット(双剣装備)", EquipGroup.Spring2024,
      { ATK_Rate: 10, Critical: 30, Avoid_Repair: 40 }),
    1610: new AddEquipment("春昼ヘッドドレス", EquipGroup.Spring2024,
      { LongDistance: 10, MP: 200, Matigation_Kirby: 30 }),
    "1610dif1": new AddEquipment("春昼ヘッドドレス(自動弓装備)", EquipGroup.Spring2024,
      { LongDistance: 10, MP: 200, Matigation_Kirby: 30, Critical_Rate: 40 }),
    "1610dif2": new AddEquipment("春昼ヘッドドレス(杖装備)", EquipGroup.Spring2024,
      { LongDistance: 10, MP: 200, Matigation_Kirby: 30, MATK_Rate: 5 }),
    1620: new AddEquipment("スターダストガード", EquipGroup.EventEquip,
      { MP: 300, Hate: 50, Special_Future: 20, Barrier_Per: 10, FREE: -40 }),
    2000: new AddEquipment("おばけキャンデー", EquipGroup.Drop,
      { MATK_Rate: 7, MATK: 70, CSPD: 700, Critical: -666 }),
    2010: new AddEquipment("乗っかりフラッペン", EquipGroup.DLEvent, {
      MP: 200, Special_DefBreak: 20, Special_Future: 20
    }),
    2020: new AddEquipment("気になるカッパ君", EquipGroup.Drop, {
      Resist_Physical: 20, Resist_Magic: 20,
      Resist_Aqua:20
    }),
    "2020dif1": new AddEquipment("気になるカッパ君(軽鎧装備)", EquipGroup.Drop, {
      Resist_Physical: 20, Resist_Magic: 20,
      Resist_Aqua:20, Resist_Health:20
    }),
    "2020dif2": new AddEquipment("気になるカッパ君(重鎧装備)", EquipGroup.Drop, {
      Resist_Physical: 20, Resist_Magic: 20,
      Resist_Aqua:20, Barrier_Per:20
    }),
    2030: new AddEquipment("王者のベルト", EquipGroup.Drop, {
      Critical: 20, MP: 100
    }),
    2040: new AddEquipment("精麗の髪飾り", EquipGroup.HighLv_Castile, {
      SwordPower_Rate: 12, HIT_Rate: 24, Barrier_Per: 18.
    }),
    2050: new AddEquipment("団子帽子(串)", EquipGroup.EventEquip, {
      STR_Rate: 9, SwordPower_Rate: 12, ATKPenetrate: 15,
      HP: 3600, Matigation_Pain: 36
    }),
    2060: new AddEquipment("ふわもこフード", EquipGroup.EventEquip, {
      ATK_Rate: 11, MATK_Rate: 11, MP: 300, Hate: -30
    }),
    2070: new AddEquipment("エルモターバン", EquipGroup.Drop, {
      STR_Rate: 10, INT_Rate: 10, ATKPenetrate: 10, MATKPenetrate: 10
    }),
    2080: new AddEquipment("ラフレシア帽", EquipGroup.Drop, {
      Resist_Physical: 20, Resist_Magic: 20, Hate: -20
    }),
    2090: new AddEquipment("骸骨ツインリボン", EquipGroup.Halloween_9, {
      LongDistance: 10, STR_Rate: 8, Critical: 6
    }),
    2100: new AddEquipment("ゾンビトロフィー", EquipGroup.Halloween_9, {
      Critical: 35, ASPD: 700, ATK$VIT: 100, Resist_Light: -35
    }),
    2110: new AddEquipment("うさゾンリュック", EquipGroup.Halloween_9, {
      LongDistance: 3, Critical: 30, CSPD_Rate: 30, Resist_Darkness: 30
    }),
    2110: new AddEquipment("うさゾンリュック", EquipGroup.Halloween_9, {
      LongDistance: 3, Critical: 30, CSPD_Rate: 30, Resist_Darkness: 30
    }),
    2120: new AddEquipment("死霊のヴェール", EquipGroup.Halloween_9, {
      Distance: 11, Resist_Health: 10, DEX_Rate: 9, Matigation_Rush: -8
    }),
    2121: new AddEquipment("エクトピエズム", EquipGroup.Halloween_9, {
      MP: 500, SPD: 4, Special_Future: 30,
    }),
    "2121dif1": new AddEquipment("エクトピエズム(軽鎧装備)", EquipGroup.Halloween_9, {
      MP: 500, SPD: 4, Special_Future: 30, Avoid_Repair: 20
    }),
    "2121dif2": new AddEquipment("エクトピエズム(重鎧装備)", EquipGroup.Halloween_9, {
      MP: 500, SPD: 4, Special_Future: 30, Guard_Repair: 10, Guard_Power: 10
    }),
    2122: new AddEquipment("ファントムケープ", EquipGroup.Halloween_9, {
      HP_Rate: 30, SPD: 5, Hate: -50, AbsFREE: 10
    }),
    "2122dif1": new AddEquipment("ファントムケープ(盾装備)", EquipGroup.Halloween_9, {
      HP_Rate: 30, SPD: 5, Hate: 50, AbsFREE: 10
    }),
    "2122dif2": new AddEquipment("ファントムケープ(双剣装備)", EquipGroup.Halloween_9, {
      HP_Rate: 30, SPD: 10, Hate: -50, AbsFREE: 10,
    }),
    2130: new AddEquipment("おしゃぶり", EquipGroup.Create, {
      VIT_Rate: 10, MATK$VIT: 100, CSPD: 500, Resist_Health: 5
    }),
    2140: new AddEquipment("レトロサングラス", EquipGroup.Create, {
      SwordPower_Rate: 12, Critical: 10, MPRecovery: 8
    }),
    2150: new AddEquipment("エポレットマント", EquipGroup.Create, {
      Pursuit_ATK: 100, LongDistance: 10, ASPD: 500
    }),
    2160: new AddEquipment("ダンサースカート", EquipGroup.Create, {
      Avoid_Repair: 30, CSPD_Rate: 120, HIT_Rate: 60, AbsHIT: 15
    }),
    2170: new AddEquipment("アクマヴェール", EquipGroup.Create, {
      MATK_Rate: 11, Stable: 10, Special_DefBreak: 9
    }),
    2180: new AddEquipment("重鉄の腰甲", EquipGroup.Create, {
      Resist_Physical: 25, Resist_Magic: 25, Resist_Health: 10, SPD: -1
    }),
    2190: new AddEquipment("リボンピアス", EquipGroup.Create, {
      Distance: 10, Resist_Physical: 20, Resist_Magic: 20
    }),
    2200: new AddEquipment("アクセツインテール", EquipGroup.Drop, {
      AGI_Rate: 10, LongDistance: 10, Critical_Rate: 10, Matigation_Explosion: 30
    }),
    2210: new AddEquipment("ウエストローブ", EquipGroup.Create, {
      MATKPenetrate: 20, ASPD_Rate: 40, Hate: -60
    }),
    2220: new AddEquipment("グラシャルウィング", EquipGroup.EventEquip, {
      ATK_Rate: 10, ATKPenetrate: 10, HIT_Rate: 10
    }),
    2230: new AddEquipment("チェック柄ベレー", EquipGroup.Xmas2024, {
      AGI_Rate: 8, ASPD_Rate: 16, Hate: -32
    }),
    2240: new AddEquipment("雪だるまリュック", EquipGroup.Xmas2024, {
      Stable: 25, CSPD_Rate: 50, Critical_Rate: 75
    }),
    2250: new AddEquipment("クリスマスキャンドル", EquipGroup.Xmas2024, {
      Critical: 30, Resist_Magic: 30, Barrier_Per: 20, Resist_Health: 20
    }),
    2260: new AddEquipment("ジンジャースマイル", EquipGroup.Xmas2024, {
      ASPD: 1000, Pursuit_ATK: 100, Pursuit_MATK: 100
    }),
    2270: new AddEquipment("サンタおっきい帽子", EquipGroup.Xmas2024, {
      ATK_Rate: 10, MATK_Rate: 10, HP: 6000, MP: 300
    }),
    2280: new AddEquipment("小人の帽子", EquipGroup.Xmas2024, {
      STR_Rate: 8, DEX_Rate: 8, Distance: 8, SPD: -8
    }),
    2290: new AddEquipment("ジンジャーウインク", EquipGroup.Xmas2024, {
      ATKPenetrate: 18, ATK_Rate: 9, Matigation_Meteo: 27, Critical_Rate: -5
    }),
    2300: new AddEquipment("ジンジャーサンタ", EquipGroup.Xmas2024, {
      MATK_Rate: 11, INT_Rate: 10, HP: 9000, Resist_Darkness: 8
    }),
    2310: new AddEquipment("マルミミハット", EquipGroup.Valentine2025, {
      MPRecovery: 15, ASPD_Rate: 30, CSPD: 600
    }),
    2320: new AddEquipment("バレンタインケープ", EquipGroup.Valentine2025, {
      MATK_Rate: 9, INT_Rate: 9, Resist_Health: 9, Hate: -9
    }),
    2330: new AddEquipment("エンゼルテディ", EquipGroup.Valentine2025, {
      LongDistance: 10, ATKPenetrate: 5, SPD: 1
    }),
    2340: new AddEquipment("本命覆面チョコ", EquipGroup.Valentine2025, {
      ATK_Rate: 10, STR_Rate: 10, Critical: 10, MP: -300,
    }),
    2350: new AddEquipment("パティシエ帽子", EquipGroup.Valentine2025, {
      SwordPower_Rate: 12, LongDistance: 7, Special_DefBreak: 20, Resist_Fire: 20
    }),
    2360: new AddEquipment("異国の前掛け", EquipGroup.Create, {
      MATK_Rate: 9, CSPD: 900, Resist_Ground: 20, ATK_Rate: -9
    }),
    2370: new AddEquipment("一周巻きマフラー", EquipGroup.SnowEvent, {
      ATK_Rate: 9, HP_Rate: 30, MP: 900
    }),
    2380: new AddEquipment("マカロンヘッド", EquipGroup.Valentine2025, {
      MATKPenetrate: 25, CSPD: 750, CSPD_Rate: 50
    }),
    2390: new AddEquipment("ズキューンハート", EquipGroup.WhiteDay2025, {
      HIT_Rate: 50, SPD: 5, Stable: -5
    }),
    2400: new AddEquipment("チョコくまミミ", EquipGroup.WhiteDay2025, {
      CriticalDamege_Rate: 15, CSPD_Rate: 30, Hate: -60
    }),
    2410: new AddEquipment("フラワーバック", EquipGroup.WhiteDay2025, {
      MPRecovery: 20, HIT: 20, Critical: 20, Resist_Wind: 20
    }),
    2420: new AddEquipment("ブルーローズウィング", EquipGroup.WhiteDay2025, {
      Distance: 11, ASPD: 1000, FREE: 100, Avoid_Repair: 10,
      LongDistance: -10, HP: -2000
    }),
    2430: new AddEquipment("てるてるポトゥム", EquipGroup.EventEquip, {
      MPRecovery: 20, Critical: 20, ASPD: 400, CSPD_Rate: 40, Resist_Aqua: 30, Matigation_Pain: 30
    }),
    2440: new AddEquipment("シャドウホーン(ハード)", EquipGroup.EventEquip, {
      HP: 5000, AGI_Rate: 10, ATK_Rate: 10, HIT: 100, HIT_Rate: 50,
      AbsHIT: 5, Resist_Normal: -25
    }),
    2450: new AddEquipment("海賊骸帽", EquipGroup.EventEquip, {
      LongDistance:10,DEX_Rate:10,Stable:10,Resist_Light:-30
    }),
    2460: new AddEquipment("頭乗りサメっ子", EquipGroup.EventEquip, {
      Distance: 10, Critical_Rate: 80, Matigation_Range: 30, Special_DefBreak: 4
    }),
    2470: new AddEquipment("ポトゥムビアサーバー", EquipGroup.EventEquip, {
      Resist_Health:6,SPD:9,Special_Future:12,Resist_Normal:15,Resist_Fire:30
    }),
    2480: new AddEquipment("サメスイムテール", EquipGroup.EventEquip, {
      Distance: 5, LongDistance: 10, Critical_Rate: 20,
      ASPD_Rate: 15, CSPD_Rate: 15, Avoid_Repair: 5
    }),
    2490: new AddEquipment("ドゥアトマスク", EquipGroup.EventEquip, {
      SPD: 10, AbsFREE: 15, CSPD_Rate: 20
    }),
    2500: new AddEquipment("なりきり辺境伯", EquipGroup.Xmas2025, {
      MATK_Rate: 12, ASPD: 600, CSPD_Rate: 40, Barrier_Per: 15, Resist_Darkness: -30
    }),
    2510: new AddEquipment("トゲトゲチョーカー", EquipGroup.Drop, {
      Hate: 30, Critical: 25, Resist_Physical: 20, Resist_Health: 15
    }),
    2520: new AddEquipment("ゴシックチョコ帽子", EquipGroup.Valentine2026, {
      Distance: 12, AGI_Rate: 8, Resist_Fire: -10
    }),
    2530: new AddEquipment("スナイパーレンズ", EquipGroup.Create, {
      LongDistance: 12, Stable: 10, ATKPenetrate: 20
    }),
    2540: new AddEquipment("一眼レフヘッド", EquipGroup.Create, {
      HIT: 100, HIT_Rate: 100, AbsHIT: 10, SPD: -10
    }),
    2550: new AddEquipment("トナカホーン", EquipGroup.Create, {
      Distance: 11, STR_Rate: 10, HP: 900, Resist_Magic: -10
    }),
    "free1": new AddEquipment("カスタム入力2", EquipGroup.None, {}),
    "free2": new AddEquipment("カスタム入力3", EquipGroup.None, {}),
  },
  Option: {
    NonesData: new AddEquipment("装備なし", EquipGroup.None, {}),
    0: new AddEquipment("カスタム入力1", EquipGroup.None, {}),
    10: new AddEquipment("時駆けの懐中時計", EquipGroup.Drop,
      { ASPD: 1000, Resist_Magic: -9, Resist_Physical: -9, }),
    11: new AddEquipment("闇のお守り(耐)", EquipGroup.Drop,
      { HP: 900, MP: 300, Resist_Physical: 10, Resist_Magic: 10 }),
    20: new AddEquipment("幻惑の茸香", EquipGroup.Drop,
      { MP: 500, Hate: -25, }),
    30: new AddEquipment("マキナリング", EquipGroup.Drop,
      { MP: 300, Resist_Health: -10 }),
    40: new AddEquipment("ロゼッタストーン", EquipGroup.Drop,
      { CSPD: 1000, Resist_Physical: -10, Resist_Magic: -10 }),
    50: new AddEquipment("戦いの切株鼓", EquipGroup.Drop,
      { HP_Rate: 25, Critical: 25, Hate: 25 }),
    1000: new AddEquipment("悪戯の懐中時計", EquipGroup.Drop,
      { ASPD: 1000, Resist_Physical: -90, Resist_Magic: -90, MP: 200, }),
    1010: new AddEquipment("輝く海のお守り", EquipGroup.Drop,
      { Resist_Health: 5, Stable: 10, }),
    1020: new AddEquipment("爛漫の守石", EquipGroup.Drop,
      { MP: 200, ASPD: 750, CSPD: 750, Resist_Health: -8, }),
    1030: new AddEquipment("剛力の守石", EquipGroup.Create,
      { ATK_Rate: 4, Stable: 3, Critical_Rate: 20, }),
    1040: new AddEquipment("叡智の守石", EquipGroup.Create,
      { MATK_Rate: 4, INT_Rate: 3, CSPD_Rate: 20, }),
    1050: new AddEquipment("昼桜の守石", EquipGroup.Create,
      { MP: 100, ASPD: 750, CSPD: 250, Resist_Health: - 4 }),
    1060: new AddEquipment("黒巫女のお守り", EquipGroup.Drop,
      { MP: 800, CSPD: 200, Hate: -50 }),
    1070: new AddEquipment("チョコの指輪Ⅲ", EquipGroup.Create,
      { MP: 550, ATK: 40, ASPD: 400 }),
    1080: new AddEquipment("熊戦士の帯", EquipGroup.Drop,
      { Distance: 2, Critical: 15 }),
    1081: new AddEquipment("熊戦士の帯(両手剣装備)", EquipGroup.Drop,
      { Distance: 2, Critical: 30 }),
    1082: new AddEquipment("熊戦士の帯(手甲装備)", EquipGroup.Drop,
      { Distance: 2, Critical: 15, SPD: 5 }),
    1090: new AddEquipment("鮭トバのお守り", EquipGroup.Drop,
      { MP: 200, Stable: 10, MATKPenetrate: 5 }),
    1110: new AddEquipment("海星手裏剣", EquipGroup.Drop,
      { Critical: 20, Stable: -10 }),
    "1110dif": new AddEquipment("海星手裏剣(忍術巻物装備)", EquipGroup.Drop,
      { Critical: 20, Stable: -10, SwordPower_Rate: 5, ATKPenetrate: 5 }),
    1120: new AddEquipment("苦南瓜のお守り", EquipGroup.Halloween_8,
      { MP: 300, Critical: 3, SPD: 3 }),
    "1120dif": new AddEquipment("苦南瓜のお守り(片手剣装備)", EquipGroup.Halloween_8,
      { MP: 300, Critical: 3, SPD: 3, SwordPower_Rate: -3 }),
    1130: new AddEquipment("スチールリング(力)", EquipGroup.HighLv_Alterdarl,
      { HP: 1500, MP: 300, ATK_Rate: 5, Hate: -10 }),
    1140: new AddEquipment("スチールリング(魔)", EquipGroup.HighLv_Alterdarl,
      { HP: 1500, MP: 300, MATK_Rate: 5, Hate: -10 }),
    1150: new AddEquipment("スチールリング(閃)", EquipGroup.HighLv_Alterdarl,
      { HP: 1500, MP: 300, Critical_Rate: 60 }),
    1160: new AddEquipment("スチールリング(耐)", EquipGroup.HighLv_Alterdarl,
      { HP: 1500, MP: 300, Resist_Physical: 15, Resist_Magic: 15 }),
    1170: new AddEquipment("竜落子の腕輪", EquipGroup.Drop,
      { MP: 400, Critical: 20 }),
    1180: new AddEquipment("真珠のお守り", EquipGroup.Drop,
      { MP: 500, Critical: 10, STR_Rate: 1, INT_Rate: 1, AGI_Rate: 1, DEX_Rate: 1 }),
    1190: new AddEquipment("紅真珠のお守り", EquipGroup.Drop,
      { MP: 500, Critical: 10, ATKPenetrate: 5, STR_Rate: 1, INT_Rate: 1, AGI_Rate: 1, DEX_Rate: 1 }),
    1200: new AddEquipment("蒼真珠のお守り", EquipGroup.Drop,
      { MP: 500, Critical: 10, MATKPenetrate: 5, STR_Rate: 1, INT_Rate: 1, AGI_Rate: 1, DEX_Rate: 1 }),
    1210: new AddEquipment("翠真珠のお守り", EquipGroup.Drop,
      { MP: 500, Critical: 10, WeponATK_Rate: 5, STR_Rate: 1, INT_Rate: 1, AGI_Rate: 1, DEX_Rate: 1 }),
    1220: new AddEquipment("紫真珠のお守り", EquipGroup.Drop,
      { MP: 500, Critical: 10, Stable: 5, STR_Rate: 1, INT_Rate: 1, AGI_Rate: 1, DEX_Rate: 1 }),
    1230: new AddEquipment("ブローカーの印", EquipGroup.EventEquip,
      {
        MP: 100, Special_DefBreak: 10, Special_Future: 10,
        Hate: 20, Stable: -20, FREE_Rate: -20
      }),
    1240: new AddEquipment("ゴリ・タリスマン", EquipGroup.Xmas2024, {
      HP: 3500, MP: 300, Critical: 25, Stable: -2
    }),
    1250: new AddEquipment("王獣の腕輪", EquipGroup.Drop, {
      MP:500,FREE:50,SPD:5,Critical_Rate:-50
    }),
    1260: new AddEquipment("海霧のコンパス", EquipGroup.EventEquip, {
      HP: 1e4, CSPD: 1000, Hate: -25, Resist_Health: -50
    }),
    1270: new AddEquipment("ゴスペルリング", EquipGroup.Drop, {
      MP: 350, Critical: 25
    }),
    "free1": new AddEquipment("カスタム入力2", EquipGroup.None, {}),
    "free2": new AddEquipment("カスタム入力3", EquipGroup.None, {}),
  },
  SubWepon: {
    NonesData: new AddEquipment("装備なし", EquipGroup.None, {}),
    0: new AddEquipment("カスタム入力", EquipGroup.None, {}),
    "ar1": new AddEquipment("皇女の矢", EquipGroup.AR,
      {
        SubWepon_Wepon: "AR", SubWeponATK: 83, SubWepon_Stable: 15,
        ASPD_Rate: 10, ATKPenetrate: 10, Hate: -10, DEF_Rate: -30
      }),
    "ar2": new AddEquipment("皇魔の矢", EquipGroup.AR, {
      SubWepon_Wepon: "AR", SubWeponATK: 120, SubWepon_Stable: 10,
      HIT_Rate: 15
    }),
    "ar3": new AddEquipment("ドリルボルト", EquipGroup.AR,
      {
        SubWepon_Wepon: "AR", SubWeponATK: 120, SubWepon_Stable: 10,
        ATKPenetrate: 10, CriticalDamege: 2, Hate: 20
      }),
    "ar4": new AddEquipment("蝙蝠の牙矢", EquipGroup.Halloween_8,
      {
        SubWepon_Wepon: "AR", SubWeponATK: 136, SubWepon_Stable: 20,
        ATKPenetrate: 10, Critical: 10, HIT: -20
      }),
    "kn1": new AddEquipment("宵桜の短刀", EquipGroup.Knight_Event, {
      SubWepon_Wepon: "KN", SubWeponATK: 130, SubWepon_Stable: 0,
      MPRecovery: 6, ASPD: 400
    }),
    "kn2": new AddEquipment("朱桜の短刀", EquipGroup.Knight_Event, {
      SubWepon_Wepon: "KN", SubWeponATK: 170, SubWepon_Stable: 0,
      Critical: 14, HIT: 7, Avoid_Repair: 10
    }),
    "kn3": new AddEquipment("シワケーナイフ", EquipGroup.Knight_Event, {
      SubWepon_Wepon: "KN", SubWeponATK: 60, SubWepon_Stable: 0,
      Critical: 15, Special_Future: 3, Resist_Darkness: - 15
    }),
    "kn4": new AddEquipment("異形の短刀", EquipGroup.KN,
      {
        SubWepon_Wepon: "KN", SubWeponATK: 72, SubWepon_Stable: 0,
        CriticalDamege: 3, CriticalDamege_Rate: 3, MDEF_Rate: -33
      }),
    "kn5": new AddEquipment("堕天使の短刀", EquipGroup.KN, {
      SubWepon_Wepon: "KN", SubWeponATK: 150, SubWepon_Stable: 0,
      ATK_Rate: 3, CriticalDamege: 3
    }),
    "kn6": new AddEquipment("ナックルナイフ", EquipGroup.KN, {
      SubWepon_Wepon: "KN", SubWeponATK: 60, SubWepon_Stable: 0,
      ATKPenetrate: 5, Special_DefBreak: 10, DEF: 15
    }),
    "kn7": new AddEquipment("ミズーネナイフ", EquipGroup.KN, {
      SubWepon_Wepon: "KN", SubWeponATK: 71, SubWepon_Stable: 0,
      Avoid_Repair: 10, ATKPenetrate: 5, ASPD: 250
    }),
    "kn8": new AddEquipment("呪われた短剣", EquipGroup.KN,
      {
        SubWepon_Wepon: "KN", SubWeponATK: 60, SubWepon_Stable: 0,
        ATKPenetrate: 5, WeponATK: 13, HP: -200, Resist_Health: -5
      }),
    "kn9": new AddEquipment("インセクトナイフ", EquipGroup.KN,
      {
        SubWepon_Wepon: "KN", SubWeponATK: 110, SubWepon_Stable: 0,
        HIT: 30, ASPD: 200, Avoid_Repair: 10
      }),
    "kn10": new AddEquipment("桜雲姫の護身刀", EquipGroup.Knight_Event, {
      SubWepon_Wepon: "KN", SubWeponATK: 110, SubWepon_Stable: 0,
      Stable: 5, MP: 100,
      Guard_Repair: 25, Guard_Power: 25
    }),
    "kn11": new AddEquipment("守護の短剣", EquipGroup.KN,
      {
        SubWepon_Wepon: "KN", SubWeponATK: 80, SubWepon_Stable: 0,
        HP_Rate: 10, Resist_Physical: 10, Resist_Magic: 10
      }),
    "kn12": new AddEquipment("朱桜の護身刀", EquipGroup.Knight_Event,
      {
        SubWepon_Wepon: "KN", SubWeponATK: 200, SubWepon_Stable: 0,
        MP: 250, Resist_Physical: 10, Resist_Magic: 15, Hate: -15
      }),
    "kn13": new AddEquipment("花蕾の短剣", EquipGroup.Knight_Event,
      {
        SubWepon_Wepon: "KN", SubWeponATK: 15, SubWepon_Stable: 0,
        MATK_Rate: 1, CSPD: 300, Resist_Health: 5
      }),
    "kn14": new AddEquipment("ホーリーナイフ", EquipGroup.KN, {
      SubWepon_Wepon: "KN", SubWeponATK: 100, SubWepon_Stable: 0,
      MATK_Rate: 2, Resist_Darkness: 10
    }),
    "kn15": new AddEquipment("蛙戦士の短剣", EquipGroup.KN,
      {
        SubWepon_Wepon: "KN", SubWeponATK: 360, SubWepon_Stable: 0,
        Distance: 1, SPD: 3, HIT_Rate: 5, Hate: -10
      }),
    "kn16": new AddEquipment("アンガーナイフ", EquipGroup.Drop, {
      SubWepon_Wepon: "KN", SubWeponATK: 219, SubWepon_Stable: 0,
      Special_Future: 5, Critical: 20, Hate: 80
    }),
    "kn15dif1": new AddEquipment("蛙戦士の短剣(片手剣装備)", EquipGroup.KN,
      {
        SubWepon_Wepon: "KN", SubWeponATK: 250, SubWepon_Stable: 0,
        Distance: 1, SPD: 3, HIT_Rate: 5, Hate: -10, Critical_Rate: 20
      }),
    "kn15dif2": new AddEquipment("蛙戦士の短剣(自動弓装備)", EquipGroup.KN,
      {
        SubWepon_Wepon: "KN", SubWeponATK: 250, SubWepon_Stable: 0,
        Distance: 1, SPD: 3, HIT_Rate: 5, Hate: -10, CSPD_Rate: 20
      }),
    "kn16": new AddEquipment("メディカルメッサー", EquipGroup.Halloween_9, {
      SubWepon_Wepon: "KN", SubWeponATK: 295, SubWepon_Stable: 0,
      Critical: 20, Critical_Rate: 20, Special_DefBreak: 10, Resist_Health: 10
    }),
    "kn17": new AddEquipment("戦律の短剣", EquipGroup.Xmas2025, {
      SubWepon_Wepon: "KN", SubWeponATK: 365, SubWepon_Stable: 0,
      ATK_Rate: 2, AGI_Rate: 2, Stable: 4, SPD: 4, Resist_Light: -16
    }),
    "kn18": new AddEquipment("チューニングナイフ", EquipGroup.EventEquip, {
      SubWepon_Wepon: "KN", SubWeponATK: 222, SubWepon_Stable: 0,
      Stable: 10, Critical: 10, Matigation_Blade: 10
    }),
    "sh1": new AddEquipment("岩竜の重盾",
      EquipGroup.SHCreate, {
      SubWepon_Wepon: "SH", SubWeponATK: 152, SubWepon_Stable: 15,
      Guard_Repair: 32, Guard_Power: 24,
      ASPD_Rate: 20, Resist_Normal: 20, Hate: 40, Resist_Health: 4,
    }),
    "sh1dif": new AddEquipment("岩竜の重盾",
      EquipGroup.SHDrop, {
      SubWepon_Wepon: "SH", SubWeponATK: 152, SubWepon_Stable: 15,
      Guard_Repair: 32, Guard_Power: 24,
      ASPD_Rate: 30, Resist_Normal: 30, Hate: 30, Resist_Health: 3
    }),
    "sh2": new AddEquipment("シーデビルバイト", EquipGroup.SHDrop, {
      SubWepon_Wepon: "SH", SubWeponATK: 54, SubWepon_Stable: 15,
      Guard_Repair: 25, Guard_Power: 25,
      Hate: 50, HIT: 50, Pursuit_ATK: 50, Matigation_Meteo: 15
    }),
    "sh3": new AddEquipment("悪霊魚の丸盾", EquipGroup.SHDrop,
      {
        SubWepon_Wepon: "SH", SubWeponATK: 120, SubWepon_Stable: 15,
        DEX_Rate: 3, ATKPenetrate: 6, ASPD: 600, Resist_Aqua: 15
      }),
    "sh4": new AddEquipment("悪戯の丸盾", EquipGroup.SHDrop,
      {
        SubWepon_Wepon: "SH", SubWeponATK: 104, SubWepon_Stable: 15,
        Guard_Repair: 6, Guard_Power: 66,
        ASPD: 400, CSPD_Rate: 20, Hate: -10
      }),
    "sh5": new AddEquipment("悪爵の防輪", EquipGroup.SHDrop,
      {
        SubWepon_Wepon: "SH", SubWeponATK: 100, SubWepon_Stable: 15,
        Guard_Repair: 50, Guard_Power: 10,
        HP_Rate: 5, CSPD: 500, Resist_Health: 5, Resist_Magic: 15, Resist_Darkness: 10
      }),
    "sh5dif1": new AddEquipment("悪爵の防輪(杖装備)", EquipGroup.SHDrop,
      {
        SubWepon_Wepon: "SH", SubWeponATK: 100, SubWepon_Stable: 15,
        Guard_Repair: 50, Guard_Power: 10,
        HP_Rate: 5, CSPD: 500, Resist_Health: 5, Resist_Magic: 15,
        Resist_Darkness: 5, Hate: 50
      }),
    "sh5dif2": new AddEquipment("悪爵の防輪", EquipGroup.SHCreate,
      {
        SubWepon_Wepon: "SH", SubWeponATK: 100, SubWepon_Stable: 15,
        Guard_Repair: 50, Guard_Power: 10,
        HP_Rate: 10, CSPD: 750, Resist_Health: 5, Resist_Magic: 5, Resist_Darkness: 5
      }),    
    "sh6": new AddEquipment("十露盤の盾", EquipGroup.Drop, {
      SubWepon_Wepon: "SH", SubWeponATK: 120, SubWepon_Stable: 15,
      Guard_Repair: 35, Guard_Power: 25,
      MPRecovery: 10, CSPD: 300, Resist_Light: 30, Hate: 60
    }),
    "sh7": new AddEquipment("ビーチボール盾", EquipGroup.Drop, {
      SubWepon_Wepon: "SH", SubWeponATK: 100, SubWepon_Stable: 15,
      Guard_Repair: 40, Guard_Power: 20, MP: 300,
      Special_Future:5,Special_DefBreak:5,
      Resist_Fire:15,Resist_Light:15
    }),
    sh7: new AddEquipment("エアリアシールド", EquipGroup.Drop, {
      SubWepon_Wepon: "SH", SubWeponATK: 76, SubWepon_Stable: 15,
      Guard_Repair: 29, Guard_Power: 29, ATKPenetrate: 3, ASPD_Rate: 20
    }),
    sh7dif1: new AddEquipment("エアリアシールド", EquipGroup.Create, {
      SubWepon_Wepon: "SH", SubWeponATK: 76, SubWepon_Stable: 15,
      Guard_Repair: 29, Guard_Power: 29, ATKPenetrate: 4, ASPD_Rate: 20
    }),
    "sh8": new AddEquipment("銀の盾(Bemmo)", EquipGroup.Create, {
      SubWepon_Wepon: "SH", SubWeponATK: 100, SubWepon_Stable: 15,
      Guard_Repair: 25, Guard_Power: 25, HP: 1e5, FirstReturn: 25, Resist_Normal: 25
    }),
    "sc1": new AddEquipment("忍術巻物・金遁", EquipGroup.Scroll,
      { SubWepon_Wepon: "SC", SubWeponATK: 150, SubWepon_Stable: 0 ,Critical: 5 }),
    "sc2": new AddEquipment("忍術巻物・火遁", EquipGroup.Scroll,
      { SubWepon_Wepon: "SC", SubWeponATK: 150, SubWepon_Stable: 0 ,MATK_Rate: 1 }),
    "sc2dif": new AddEquipment("忍術巻物・火遁(杖装備)", EquipGroup.Scroll,
      { SubWepon_Wepon: "SC", SubWeponATK: 150, SubWepon_Stable: 0 ,MATK_Rate: 1, MATKPenetrate: 5 }),
    "sc3": new AddEquipment("忍術巻物・雷遁", EquipGroup.Scroll,
      { SubWepon_Wepon: "SC", SubWeponATK: 150, SubWepon_Stable: 0 ,Stable: 5 }),
    "sc3dif": new AddEquipment("忍術巻物・雷遁(抜刀剣装備)", EquipGroup.Scroll,
      { SubWepon_Wepon: "SC", SubWeponATK: 150, SubWepon_Stable: 0 ,Stable: 5, HIT_Rate: 10 }),
    "sc4": new AddEquipment("忍術巻物・水遁", EquipGroup.Scroll,
      { SubWepon_Wepon: "SC", SubWeponATK: 150, SubWepon_Stable: 0 ,Resist_Health: 5 }),
    "sc4dif": new AddEquipment("忍術巻物・水遁(魔道具装備)", EquipGroup.Scroll,
      { SubWepon_Wepon: "SC", SubWeponATK: 150, SubWepon_Stable: 0 ,Resist_Health: 5, Hate: -10 }),
    "sc5": new AddEquipment("忍術巻物・土遁", EquipGroup.Scroll,
      { SubWepon_Wepon: "SC", SubWeponATK: 150, SubWepon_Stable: 0 ,HP_Rate: 5 }),
    "sc6": new AddEquipment("忍術巻物・風遁", EquipGroup.Scroll,
      { SubWepon_Wepon: "SC", SubWeponATK: 150, SubWepon_Stable: 0 ,ASPD: 250 }),
    "sc6dif": new AddEquipment("忍術巻物・風遁(抜刀剣装備)", EquipGroup.Scroll
      , { SubWepon_Wepon: "SC", SubWeponATK: 150, SubWepon_Stable: 0 ,ASPD: 250, Critical: 5 }),
    "free1": new AddEquipment("カスタム入力2", EquipGroup.None, {}),
    "free2": new AddEquipment("カスタム入力3", EquipGroup.None, {}),
  },
  Enchant: {
    NonesData: new AddEquipment("装備なし", EquipGroup.None, {}),
    0: new AddEquipment("カスタム入力", EquipGroup.None, {}),
    1: new AddEquipment("その1", EquipGroup.None, { Distance: 3 }),
    2: new AddEquipment("その2", EquipGroup.None, { Distance: 3, CriticalDamege_Rate: 2 }),
    3: new AddEquipment("その3", EquipGroup.None, { Distance: 3, ATKRate: 3 }),
    4: new AddEquipment("その4", EquipGroup.None, { Distance: 3, ATKPenetrate: 10 }),
    5: new AddEquipment("その5", EquipGroup.None, { ATKPenetrate: 18 }),
    6: new AddEquipment("その6", EquipGroup.None, { ATKPenetrate: 21 }),
    7: new AddEquipment("サンプルセット", EquipGroup.None,
      { Critical: 5, Stable: 2, AGI_Rate: 1, CriticalDamege: 3, MPRecovery: 14 }
    ),
    "free1": new AddEquipment("カスタム入力2", EquipGroup.None, {}),
    "free2": new AddEquipment("カスタム入力3", EquipGroup.None, {}),
  },
  Enchant2: {
    NonesData: new AddEquipment("装備なし", EquipGroup.None, {}),
    0: new AddEquipment("カスタム入力", EquipGroup.None, {}),
    "free1": new AddEquipment("カスタム入力2", EquipGroup.None, {}),
    "free2": new AddEquipment("カスタム入力3", EquipGroup.None, {}),
  },
  Enchant3: {
    NonesData: new AddEquipment("装備なし", EquipGroup.None, {}),
    0: new AddEquipment("カスタム入力", EquipGroup.None, {}),
    "free1": new AddEquipment("カスタム入力2", EquipGroup.None, {}),
    "free2": new AddEquipment("カスタム入力3", EquipGroup.None, {}),
  },
  Other: {
    NonesData: new AddEquipment("装備なし", EquipGroup.None, {}),
    0: new AddEquipment("カスタム入力", EquipGroup.None, {}),
    1: new AddEquipment("MP", EquipGroup.None, { MP: 100 }),
    2: new AddEquipment("HP", EquipGroup.None, { HP: 1000 }),
    3: new AddEquipment("MP + HP", EquipGroup.None, { MP: 100, HP: 1000 }),
    4: new AddEquipment("MP + ASPD", EquipGroup.None, { MP: 100, ASPD: 100 }),
    5: new AddEquipment("MP + ASPD + CSPD", EquipGroup.None, { MP: 100, ASPD: 100, CSPD: 100 }),
    6: new AddEquipment("MP200", EquipGroup.None, { MP: 200 }),
    "free1": new AddEquipment("カスタム入力2", EquipGroup.None, {}),
    "free2": new AddEquipment("カスタム入力3", EquipGroup.None, {}),
  },
  Other2: {
    NonesData: new AddEquipment("装備なし", EquipGroup.None, {}),
    0: new AddEquipment("カスタム入力", EquipGroup.None, {}),
  },
  Other3: {
    NonesData: new AddEquipment("装備なし", EquipGroup.None, {}),
    0: new AddEquipment("カスタム入力", EquipGroup.None, {}),
  },
  Other4: {
    NonesData: new AddEquipment("装備なし", EquipGroup.None, {}),
  },
  Other5: {
    NonesData: new AddEquipment("装備なし", EquipGroup.None, {}),
  },
  Other6: {
    NonesData: new AddEquipment("装備なし", EquipGroup.None, {}),
  },
  Other7: {
    NonesData: new AddEquipment("装備なし", EquipGroup.None, {}),
  },
  Crystal: {
    Wepon: {
      0: new SelectorBase("なし", {}),
      1: new SelectorBase("マダンゴ",
        { ATK_Rate: 4, ATKPenetrate: 20, Hate: -10, Resist_Health: -15, MP: -200 }),
      2: new SelectorBase("タリズブルト",
        { ATK_Rate: 8, STR_Rate: 6, Critical_Rate: 6, DEF_Rate: -21 }),
      4: new SelectorBase("クースト",
        { MATK_Rate: 7, Critical: 7, Hate: -15 }),
      5: new SelectorBase("虐爪の鉄魔女",
        {
          Distance: 5, MPRecovery: 10,
          Barrier_Physical: 2000, Barrier_Magic: 2000
        }),
      6: new SelectorBase("轟竜ボビナリー", {
        Distance: 7, MPRecovery: 15,
        Barrier_Physical: 3000, Barrier_Magic: 3000
      }),
      30: new SelectorBase("炎竜ブランマ",
        { Distance: 6, ATKPenetrate: 7, MP: 400 }),
      40: new SelectorBase("バルター",
        { ATK_Rate: 7, DEX_Rate: 5, ASPD_Rate: 3, }),
      41: new SelectorBase("欺竜ミミューガ",
        { ATK_Rate: 9, DEX_Rate: 7, ASPD_Rate: 5, }),
      50: new SelectorBase("マルドゥーラ",
        { ATK_Rate: 7, MPRecovery: 4, Special_Future: 12 }),
      51: new SelectorBase("ベリュム",
        { ATK_Rate: 9, MPRecovery: 6, Special_Future: 13, MP: -100 }),
      52: new SelectorBase("デフォーミス",
        { ATK_Rate: 11, MPRecovery: 8, Special_Future: 14, MP: -200 }),
      100: new SelectorBase("アルマイト",
        { MATKPenetrate: 20, MATK_Rate: 5, CSPD_Rate: -15, }),
      101: new SelectorBase("イレスティダ",
        { MATK_Rate: 8, MATKPenetrate: 6, Hate: -9, MDEF_Rate: -24 }),
      102: new SelectorBase("オキュラシーネ",
        { MATK_Rate: 9, MP: 300, Special_DefBreak: 13 }),
      103: new SelectorBase("ピステウス",
        { MATK_Rate: 7, DEX_Rate: 5, CSPD_Rate: 3 }),
      104: new SelectorBase("悪竜ファジーノ",
        { MATK_Rate: 9, DEX_Rate: 7, CSPD_Rate: 5 }),
      105: new SelectorBase("楽竜レドルギ",
        {
          ATK_Rate: 10, MATK_Rate: 10,
          NaturalRecovery_HP_Rate: -12, NaturalRecovery_MP_Rate: -12
        }),
      200: new SelectorBase("コロンデッド",
        { ASPD: 1000, Distance: 10, MP: -2e3 }),
      201: new SelectorBase("血塗られた結晶",
        { MPRecovery: 7, CriticalDamege: 6, Hate: 10 }),
      900: new SelectorBase("ポムーチェン",
        { ATK_Rate: 5, AGI_Rate: 5, Hate: -5 }),
      1000: new SelectorBase("白狂牙レイ・フェン",
        { ATK_Rate: 7, AGI_Rate: 4, MPRecovery: 1, HP_Rate: -12 }),
      1001: new SelectorBase("愛猫爪ガルーシャ",
        { ATK_Rate: 10, AGI_Rate: 4, Resist_Health: 2, MPRecovery: 2, HP_Rate: -12 }),
      1010: new SelectorBase("死霊使いウササマⅡ",
        { MATK_Rate: 7, CSPD_Rate: 14, SPD: 3, HP_Rate: -15, MPRecovery_Rate: -30 }),
      1020: new SelectorBase("勇者ポトゥムⅡ",
        { HP_Rate: 11, Barrier_Per: 12, HIT_Rate: 13, Hate: 14 }),
      1021: new SelectorBase("勇者ポトゥムⅢ",
        { HP_Rate: 12, Barrier_Per: 14, HIT_Rate: 16, Hate: 18 }),
      1022: new SelectorBase("勇者ポトゥムⅣ", {
        HP_Rate: 13, Barrier_Per: 16, HIT_Rate: 19, Hate: 22
      }),
      1030: new SelectorBase("戯龍の道化師",
        { HIT_Rate: 10, Critical: 10, ASPD: 200, CSPD: 200 }),
      1040: new SelectorBase("怪傑の童鼠",
        { LongDistance: 4, SwordPower_Rate: 4, Hate: -20 }),
      1050: new SelectorBase("疾紅の独眼狼",
        { Distance: 8, Special_Future: 4, Resist_Physical: -16, Resist_Magic: 8 }),
      "1050dif1": new SelectorBase("疾紅の独眼狼(短剣装備)",
        { Distance: 8, Special_Future: 4, Resist_Physical: -16, Resist_Magic: 8, CriticalDamege_Rate: 1 }),
      "1050dif2": new SelectorBase("疾紅の独眼狼(双剣装備)",
        { Distance: 8, Special_Future: 4, Resist_Physical: -16, Resist_Magic: 8, Hate: -20 }),
      1060: new SelectorBase("トリアグルズ",
        {
          ATK_Rate: 10, MATK_Rate: 10,
          Matigation_Blade: 20, Matigation_Bullet: 20,
          Hate: -40,
        }),
      1070: new SelectorBase("ハナヘビ",
        { Stable: 5, MATKPenetrate: 20, Hate: -15 }),
      1080: new SelectorBase("ポムーチェンⅡ",
        { ATK_Rate: 9, AGI_Rate: 7, Hate: -15 }),
      1081: new SelectorBase("ポムーチェンⅢ",
        { ATK_Rate: 12, AGI_Rate: 10, Hate: -20 }),
      1090: new SelectorBase("黒衣の聖誕姫",
        { ATK_Rate: 9, STR_Rate: 3, MATK_Rate: 9, INT_Rate: 3, LongDistance: -6 }),
      "1090dif": new SelectorBase("黒衣の聖誕姫(盾装備)",
        { ATK_Rate: 9, STR_Rate: 3, MATK_Rate: 9, INT_Rate: 3, LongDistance: -6, Hate: -50 }),
      1100: new SelectorBase("ドン・プロフンド", { ATK_Rate: 10, STR_Rate: 7, Critical_Rate: 8, DEF_Rate: -27 }),
      1101: new SelectorBase("ドイ", {
        ATK_Rate: 12, STR_Rate: 8, Critical_Rate: 10, DEF_Rate: -33
      }),
      1110: new SelectorBase("ディアルク",
        { MATK_Rate: 8, MATKPenetrate: 20, CSPD_Rate: -16 }),
      1120: new SelectorBase("バテュード",
        { MATK_Rate: 10, MATKPenetrate: 7, Hate: -11, MDEF_Rate: -30 }),
      1130: new SelectorBase("ドリドディ",
        { LongDistance: 10, HIT_Rate: 17, HP_Rate: -25 }),
      1140: new SelectorBase("原初の誘月華",
        {
          ATK_Rate: 10, MATK_Rate: 10, HP_Rate: 10,
          Special_Future: 10, Special_DefBreak: 10, MP: -200
        }),
      1150: new SelectorBase("王者メギストンⅦ", {
          HP: 2200, Critical: 29,
          Resist_Fire: 6, Resist_Aqua: 6, Resist_Wind: 6,
          Resist_Ground: 6, Resist_Light: 3, Resist_Darkness: 3,
          Resist_Normal: 3
      }),
      1160: new SelectorBase("フビット",
        { ATK_Rate: 6, ATKPenetrate: 20, Hate: -15, Resist_Health: -15, MP: -200 }),
      1170: new SelectorBase("メンティ", {
        MATK_Rate: 11, MP: 300, Special_DefBreak: 14
      }),
      "1170def": new SelectorBase("メンティ(盾装備)", {
        MATK_Rate: 11, MP: 300, Special_DefBreak: 14, ASPD: 250
      }),
      1180: new SelectorBase("メデューソ", {
        Guard_Repair: 10, Guard_Power: 10
      }),
      1190: new SelectorBase("春方の夢見草", {
        MATK_Rate: 11, Critical: 13, Hate: -13
      }),
      1200: new SelectorBase("真・魔晶の獣", {
        MP: 400, Distance: 8, ATKPenetrate: 10
      }),
      1210: new SelectorBase("バクザン", {
        ATK_Rate: 11, DEX_Rate: 9, ASPD_Rate: 7
      }),
      1220: new SelectorBase("ストゥームン", {
        ATK_Rate: 5, MATK_Rate: 5, Distance: 5,
        ASPD_Rate:5,Resist_Aqua:5
      }),
      1230: new SelectorBase("幻奏の辺境伯", {
        ATK_Rate: 12, STR_Rate: 4, MATK_Rate: 12, INT_Rate: 4,
        LongDistance: -6
      }),
      1240: new SelectorBase("マギフィレーシア改",
        { ATK_Rate: 13, AGI_Rate: 4, Resist_Health: 4, MPRecovery: 4, HP_Rate: -12 }),
      1250: new SelectorBase("デスタレス", {
        ATK_Rate: 13, DEX_Rate: 4,
        Special_DefBreak: 10, Hate: -20,
        MP: -200
      }),
      1260: new SelectorBase("ロンディネ", {
        MATK_Rate: 11, DEX_Rate: 9, CSPD_Rate: 7
      }),
      1270: new SelectorBase("ハウドヴィス",{
        ATK_Rate: 12, MATK_Rate: 12,
        NaturalRecovery_HP_Rate: -14,
        NaturalRecovery_MP_Rate: -14
      })
    },
    Armor: {
      0: new SelectorBase("なし", {}),
      1: new SelectorBase("魔人クウィーザ",
        { MP: 1000, CSPD: 300, SPD: 1 }),
      2: new SelectorBase("デーモナグア",
        { ATK_Rate: 8, Critical: 8, MP: -400, HP: -400, }),
      "2dif": new SelectorBase("デーモナグア(盾装備)",
        { ATK_Rate: 8, Critical: 8, MP: -400, HP: -400, Distance: 4 }),
      107: new SelectorBase("ザポ",
        { ATK_Rate: 10, Critical: 10, HP: -400, MP: -400 }),
      "107dif": new SelectorBase("ザポ(盾装備)",
        { ATK_Rate: 10, Critical: 10, HP: -400, MP: -400, Distance: 5, STR_Rate: 1 }),
      3: new SelectorBase("デラックスファイター",
        { ATK_Rate: 2, Distance: 6, HIT_Rate: 10, HP: 5e3, Barrier_Per: 5 }),
      106: new SelectorBase("デラックスファイターⅡ",
        { ATK_Rate: 3, Distance: 6, HIT_Rate: 15, HP: 6e3, Barrier_Per: 5 }),
      4: new SelectorBase("うさ餅",
        { MP: 300, ATK_Rate: 6, SwordPower_Rate: 6, Resist_Normal: -10 }),
      5: new SelectorBase("ジェンマ",
        { SwordPower_Rate: 7, ATKPenetrate: 5, CriticalDamege: 6 }),
      6: new SelectorBase("ミーティア", {
        SwordPower_Rate: 9, ATKPenetrate: 5, CriticalDamege: 7
      }),
      100: new SelectorBase("ユヴェリア",
        { MP: 300, Resist_Physical: 3, Resist_Magic: 3, Distance: 6, Hate: -15, }),
      101: new SelectorBase("ユールラッズ",
        { MATK_Rate: 7, INT_Rate: 3, CSPD_Rate: 35, MPRecovery_Rate: 10 }),
      Xmas2019_1: new SelectorBase("対鏡の玄影",
        { MATK_Rate: 6, HP: 1500, MP: 300, Avoid_Repair: -10 }),
      Xmas2022_1: new SelectorBase("ブラックベリィ",
        { MATK_Rate: 9, HP: 3000, MP: 400, Avoid_Repair: -20 }),
      Xmas2025_1: new SelectorBase("グロック",
        { MATK_Rate: 12, HP: 4500, MP: 500, Avoid_Repair: -30 }),
      103: new SelectorBase("鉄の女帝",
        { MATK_Rate: 5, MATKPenetrate: 10, HP_Rate: 20, Resist_Physical: 10, CSPD_Rate: 20, MP: -300 }),
      104: new SelectorBase("レオナルド博士",
        { MATK_Rate: 2, LongDistance: 6, Critical_Rate: 10, HP: 5e3, Resist_Health: 5 }),
      105: new SelectorBase("レオナルド博士Ⅱ",
        { MATK_Rate: 3, LongDistance: 6, Critical_Rate: 20, HP: 6e3, Resist_Health: 5 }),

      200: new SelectorBase("岩竜フェルゼン",
        { HP: 5000, WeponATK_Rate: 5 }),
      201: new SelectorBase("ビルロッシュ",
        { HP_Rate: 60, Resist_Physical: -7, Resist_Magic: -7 }),
      "201dif": new SelectorBase("ビルロッシュ(片手or手甲装備)",
        { HP_Rate: 60, Resist_Physical: -7, Resist_Magic: -7, Hate: 15 }),
      202: new SelectorBase("マリ", {
        HP_Rate: 70, Resist_Physical: -3, Resist_Magic: -3
      }),
      300: new SelectorBase("ドクターポムポム",
        { Distance: 7, Resist_Health: 7, Critical_Rate: 7 }),
      301: new SelectorBase("ガーナマナ",
        { HP: 3000, Resist_Physical: 3, Resist_Magic: 3, Distance: 6, Hate: 15 }),
      302: new SelectorBase("シビラレース",
        {
          ATK_Rate: 5, MATK_Rate: 5,
          ATKPenetrate: 5, MATKPenetrate: 5, Critical: 15, MP: -100
        }),
      303: new SelectorBase("咲麗の朱桜",
        { CriticalDamege: 4, Distance: 2, HP: 4000 }),
      304: new SelectorBase("バウガイ",
        { CriticalDamege: 7, Distance: 5, HP: 7000 }),
      305: new SelectorBase("ナス力",
        { HP_Rate: 15, Hate: 30, DEF: 45 }),
      306: new SelectorBase("アルタダール",
        { Stable: 11, STR_Rate: 6, VIT_Rate: 6 }),
      "306dif1": new SelectorBase("アルタダール(軽鎧装備)",
        { Stable: 6, STR_Rate: 6, VIT_Rate: 6, Distance: 11 }),
      "306dif2": new SelectorBase("アルタダール(重鎧装備)",
        { Stable: 6, STR_Rate: 6, VIT_Rate: 6, LongDistance: 11 }),
      307: new SelectorBase("ゲーグナー",
        { MATK_Rate: 10, INT_Rate: 6, CSPD_Rate: 40, MPRecovery_Rate: 10 }),
      308: new SelectorBase("バングルドム",
        { ATK_Rate: 10, MATK_Rate: 10, ASPD_Rate: 10, CSPD_Rate: 10, HP_Rate: -20 }),
      "308dif1": new SelectorBase("バングルドム(盾装備)",
        { ATK_Rate: 10, MATK_Rate: 10, ASPD_Rate: 10, CSPD_Rate: 10, HP_Rate: -20, DEX_Rate: 5 }),
      "308dif2": new SelectorBase("バングルドム(軽鎧装備)",
        { ATK_Rate: 10, MATK_Rate: 10, ASPD_Rate: 10, CSPD_Rate: 10, HP_Rate: -20, MATKPenetrate: 5 }),
      "308dif3": new SelectorBase("バングルドム(盾/軽鎧装備)",
        { ATK_Rate: 10, MATK_Rate: 10, ASPD_Rate: 10, CSPD_Rate: 10, HP_Rate: -20, DEX_Rate: 5, MATKPenetrate: 5 }),
      309: new SelectorBase("ムルグウン・ハンド", {
        Distance: 6, LongDistance: 4, HIT_Rate: 5, HP: 1e4, MP: -100
      }),
      310: new SelectorBase("ダンドリオン", {
        MP: 500, MPRecovery: 4, CSPD: 300
      }),
      "310dif": new SelectorBase("ダンドリオン(軽鎧装備)", {
        MP: 500, MPRecovery: 4, CSPD: 300, Stable: 6
      }),
      320: new SelectorBase("ビーモズ", {
        ATK_Rate: 6, MATK_Rate: 6, ATKPenetrate: 8, MATKPenetrate: 8,
        Critical: 17, MP: -150
      }),
      330: new SelectorBase("ビスキーバ", {
        MP: 900, Barrier_Per: 19, Critical: 7, CriticalDamege_Rate: 2
      }),
      331: new SelectorBase("グランプロムス", {
        HP: 6000, WeponATK_Rate: 4, SPD: 2, Pursuit_ATK: 100
      }),
      332: new SelectorBase("メルゼハール", {
        HP_Rate: 25, Resist_Physical: 15, MATK_Rate: 13, MATKPenetrate: 10,
        CSPD_Rate:25,MP:-200
      }),
      333: new SelectorBase("クロモモ忍者", {
        HP: 10000, CriticalDamege: 9, LongDistance: 6
      }),
      334: new SelectorBase("モンジャ", {
        HP: 10000, CriticalDamege: 9, Distance: 6
      }),
      335: new SelectorBase("プイエット", {
        ATK_Rate: 12, Critical: 12,
        HP: -400, MP: -400
      }),
      336: new SelectorBase("豪雷破閃", {
        ATK_Rate: 7, MATK_Rate: 7,
        Distance: 7, Critical: 15, Critical_Rate: 15,
        HP: 7000, Special_Future: 10, SPD: 2
      }),
    },
    Addition: {
      0: new SelectorBase("なし", {}),
      2: new SelectorBase("ゴード",
        { ATK_Rate: 7, ASPD_Rate: 80, LongDistance: -15, }),
      3: new SelectorBase("アルフェニーケ",
        { ATK_Rate: 3, ATKPenetrate: 10, HP_Rate: 18, Hate: -15 }),
      4: new SelectorBase("ヴェランレフィーナ",
        { ATK_Rate: 8, ATKPenetrate: 10, Critical: 12, MATK_Rate: -4, Resist_Physical: -20 }),
      "4dif": new SelectorBase("ヴェランレフィーナ(重装備)",
        { ATK_Rate: 8, ATKPenetrate: 10, Critical: 12, MATK_Rate: -4, Resist_Physical: 4 }),
      5: new SelectorBase("キングウシキング",
        { Distance: 8, HIT: 40, MP: 200, HP_Rate: -20, }),
      6: new SelectorBase("デカアルポカ",
        { Distance: 6, HP: 300, MP: 300 }),
      16: new SelectorBase("卒竜ザイビオ",
        { ATK_Rate: 5, Critical: 15, MP: 100, Special_DefBreak: 5 }),
      17: new SelectorBase("灼竜イグネウス",
        { Critical: 15, CriticalDamege: 8, AGI_Rate: 3 }),
      549: new SelectorBase("いにしえの女帝",
        { MATK_Rate: 3, Distance: -10, CSPD_Rate: 50 }),
      50: new SelectorBase("いにしえの女帝Ⅱ",
        { MATK_Rate: 5, Distance: -20, CSPD_Rate: 30 }),
      51: new SelectorBase("やしろあずき母Ⅱ",
        { MATK_Rate: 5, LongDistance: 3, CSPD_Rate: 20, Hate: -10 }),
      52: new SelectorBase("†闇王†",
        { ATK_Rate: 5, Distance: 3, ASPD_Rate: 20, Hate: -10 }),
      53: new SelectorBase("深謀の青影",
        { Distance: 8, LongDistance: 8, SwordPower_Rate: 8, MP: -150 }),
      100: new SelectorBase("ペリプラスティ改",
        { MATK_Rate: 5, CSPD_Rate: 75, LongDistance: -16, }),
      101: new SelectorBase("海底遺跡の怪物",
        { MATK_Rate: 8, CriticalDamege: 8, HP: 1e3 }),
      "101dif": new SelectorBase("海底遺跡の怪物(重装備)",
        { MATK_Rate: 8, CriticalDamege: 8, HP: 1e3, Hate: 20 }),
      102: new SelectorBase("ミエリ",
        { MATKPenetrate: 10, Critical_Rate: 20, ASPD: 400, CSPD: 400, HP: -20 }),
      103: new SelectorBase("マギフィレーシア",
        { MATK_Rate: 9, INT_Rate: 3, Stable: 6 }),
      "103dif1": new SelectorBase("マギフィレーシア(杖装備)",
        { MATK_Rate: 9, INT_Rate: 3, Stable: 6, Special_DefBreak: 10 }),
      "103dif2": new SelectorBase("マギフィレーシア(魔道具装備)",
        { MATK_Rate: 9, INT_Rate: 3, Stable: 6, Matigation_Blade: 20 }),
      200: new SelectorBase("オルグノヴァ",
        { Critical: 20, HIT: 60, MP: 300, CSPD: 600, }),
      210: new SelectorBase("ゼルドナ",
        { CSPD: 800, MP: 400, HP_Rate: -20 }),
      220: new SelectorBase("アマルゴン",
        { ASPD: 800, HP_Rate: 30, MP: -300 }),
      221: new SelectorBase("フォルバロウズ",
        { LongDistance: 9, MP: 200, FREE_Rate: 10, AbsFREE: 5 }),
      "221dif": new SelectorBase("フォルバロウズ(自動弓装備)",
        { LongDistance: 9, MP: 200, FREE_Rate: 10, AbsFREE: 5, Distance: 9 }),
      222: new SelectorBase("エリプマーブ",
        { MPRecovery: 18, Resist_Fire: 12, CriticalDamege: 6 }),
      223: new SelectorBase("ガルナッシュ",
        { MATK_Rate: 3, MATKPenetrate: 10, HP_Rate: 18, Hate: -15 }),
      224: new SelectorBase("ペルルラージ",
        { Distance: 10, HP_Rate: 30, Critical_Rate: 50, MP: -100 }),
      "224dif": new SelectorBase("ペルルラージ(軽鎧装備)",
        { Distance: 10, HP_Rate: 30, Critical_Rate: 50, MP: -100, ATKPenetrate: -10 }),
      225: new SelectorBase("ジルヴァ", {
        MATK_Rate: 8, CriticalDamege: 6, DEX_Rate: 3, HIT_Rate: -20
      }),
      226: new SelectorBase("ジブリールⅢ", {
        Distance: 9, LongDistance: 11, MP: 100, Critical: 16,
        Special_Future: 3, NaturalRecovery_MP: 6, NaturalRecovery_MP_Rate: 12
      }),
      227: new SelectorBase("カスティリア", {
        Distance: 12, LongDistance: 6, HIT_Rate: 10, ASPD: -900
      }),
      "227dif1": new SelectorBase("カスティリア(魔道具装備)", {
        Distance: 12, LongDistance: 6, HIT_Rate: 10, ASPD: -900, SPD: 5
      }),
      "227dif2": new SelectorBase("カスティリア(忍術巻物装備)", {
        Distance: 12, LongDistance: 6, HIT_Rate: 10, ASPD: -900, MATKPenetrate: 10
      }),
      228: new SelectorBase("フォービダンサー", {
        Distance: 10, LongDistance: 10, SwordPower_Rate: 10, MP: -200
      }),
      229: new SelectorBase("アイヤーク", {
        MATK_Rate: 10, MATKPenetrate: 10, HP_Rate: 24, Hate: -15
      }),
      230: new SelectorBase("ゴブリン・ズコット", {
        ATK_Rate: 10, ATKPenetrate: 10, HP_Rate: 24, Hate: -15
      }),
      231: new SelectorBase("キングウシキングⅡ", {
        Distance: 12, HIT: 50, MP: 200, HP_Rate: - 30
      }),
      232: new SelectorBase("グーラ", {
        ATK_Rate:10,Critical:15,MP:200,Special_DefBreak:10
      }),
      233: new SelectorBase("魔影の騎屍", {
        ATK_Rate: 6, Distance: 6, Stable: 6,
        MP: -100, Resist_Light: -10, FirstReturn: -10
      }),
      234: new SelectorBase("トップスターポトゥム", {
        ASPD: 900, CSPD: 900, HP_Rate: -10, MP: -150
      }),
      235: new SelectorBase("カナヨガン", {
        ATK_Rate: 12, ATKPenetrate: 10, Critical: 16, MATK_Rate: -4,
        Resist_Physical: -20
      }),
      236: new SelectorBase("デラダンビット", {
        MATK_Rate: 12, CriticalDamege: 8, DEX_Rate: 5, HIT_Rate: -20
      })
    },
    Option: {
      0: new SelectorBase("なし", {}),
      2: new SelectorBase("ヴェネーナⅡ",
        { MP: 600, MATK_Rate: 2, ATK_Rate: 2, Stable: 3 }),
      3: new SelectorBase("タートロキート",
        { ATK_Rate: 6, MATK_Rate: 6, SPD: 2 }),
      4: new SelectorBase("死告の亡霊",
        { SwordPower_Rate: 10, HIT_Rate: 15, Hate: -20 }),
      50: new SelectorBase("兵竜ダルバ",
        { Critical: 11, WeponATK_Rate: 14, HIT_Rate: 17, MP: -200 }),
      60: new SelectorBase("トゥルス",
        { Special_DefBreak: 10, ATKPenetrate: 10 }),
      "60dif": new SelectorBase("トゥルス(両手剣装備)",
        {
          Special_DefBreak: 10, ATKPenetrate: 10,
          Guard_Repair: 25, Guard_Power: 25
        }),
      200: new SelectorBase("ロン・ヴォルガ",
        { ASPD: 1e3, Critical_Rate: 20, CSPD_Rate: -80 }),
      201: new SelectorBase("ゼーレザウガ",
        { Critical: 15, Resist_Physical: 5, Resist_Magic: 5, ItemSpeed: -1 }),
      202: new SelectorBase("クリズムーエル",
        { MPRecovery: 11, HP: 3e3, Stable: 1 }),
      "202dif": new SelectorBase(
        "ブリータ",
        { MPRecovery: 15, HP: 5e3, Stable: 2 }
      ),
      203: new SelectorBase("パティシア",
        { MPRecovery: 15, HIT: 25 }),
      204: new SelectorBase("幽森の黒巫女",
        { CSPD_Rate: 20, Avoid_Repair: 10, MATKPenetrate: 5, MP: -300 }),
      "204dif": new SelectorBase("幽森の黒巫女(盾装備)",
        { CSPD_Rate: 20, Avoid_Repair: 10, MATKPenetrate: 5, MP: -300, Stable: 5, ATK_Rate: -10 }),
      205: new SelectorBase("オルグノヴァⅡ",
        {
          ATK_Rate: 5, ATKPenetrate: 5, SwordPower_Rate: 5, MP: 150,
          NaturalRecovery_MP_Rate: 15, Matigation_Blade: 15, FirstReturn: -60
        }),
      210: new SelectorBase("ブローカーゴブリン",
        { MP: 300, LongDistance: 3, DEX_Rate: 3 }),
      "210dif1": new SelectorBase("ブローカーゴブリン(矢装備)",
        { MP: 300, LongDistance: 8, DEX_Rate: 3 }),
      "210dif2": new SelectorBase("ブローカーゴブリン(盾)",
        { MP: 300, LongDistance: 3, DEX_Rate: 3, Hate: 25 }),
      211: new SelectorBase("シカノカーミ",
        { Distance: 5, MPRecovery: 20, HIT: 50 }),
      "211dif": new SelectorBase("シカノカーミ(槍装備)",
        { Distance: 5, MPRecovery: 20, HIT: 50, LongDistance: 5 }),
      220: new SelectorBase("ドミナレドル", {
        ATK_Rate: 8, MATK_Rate: 8, ASPD_Rate: 20, Matigation_Pain: 20
      }),
      221: new SelectorBase("エトワーズ",
        { Critical_Rate: 40, ASPD: 1100, SPD: 5, CSPD_Rate: -70 }),
      222: new SelectorBase("ヴォードレイ",
        { Resist_Physical: 5, Resist_Magic: 5, CriticalDamege: -150 }),
      223: new SelectorBase("茄竜オヴァビオ",
        { MP: 300, Distance: 4, ASPD: 500, LongDistance: -12 }),
      "223dif": new SelectorBase("茄竜オヴァビオ(忍術巻物装備)",
        { MP: 300, Distance: 4, ASPD: 500, LongDistance: -12, SwordPower_Rate: 5, Critical: 5 }),
      224: new SelectorBase("叫声の禍影",
        { MP: 300, Critical_Rate: 20, CSPD: 1000, DEF_Rate: -40 }),
      225: new SelectorBase("ヒュミーダ",
        { MP: 700, ATK_Rate: 4, MATK_Rate: 4, Stable: 4 }),
      226: new SelectorBase("ポトゥムッターⅡ", {
        MP: 400, SPD: 1, Hate: -30, Resist_Normal: 25
      }),
      227: new SelectorBase("深海の晶怪獣", {
        Distance: 4, Stable: 4,
        Resist_Physical: 6, Resist_Magic: 6, MP: -200
      }),
      "227dif": new SelectorBase("深海の晶怪獣", {
        Distance: 4, Stable: 4,
        Resist_Physical: 6, Resist_Magic: 6, MP: -200,
        Resist_Health:5
      }),
      228: new SelectorBase("ゼーレザウガⅡ", {
        Critical: 20, Resist_Physical: 10, Resist_Magic: 10, ItemSpeed: -1
      }),
      229: new SelectorBase("マバーキ", {
        HP: 3000, HP_Rate: 20, Barrier_Per: 15, ATK$VIT: 25
      }),
      230: new SelectorBase("黒リグシー", {
        MPRecovery: 20, ASPD: 300, Resist_Health: 10, Hate: 40
      }),
      231: new SelectorBase("機械神メイプル", {
        MP: 200, Distance: 10, Resist_Physical: 10, Resist_Magic: 10, Resist_Health: 5,
        Barrier_Per:5
      }),
      232: new SelectorBase("オロバイド", {
        Resist_Physical:10,Resist_Magic:10,
        Resist_Darkness:20,Hate:20
      }),
      233: new SelectorBase("ポトゥムッターⅢ", {
        MP: 500, SPD: 2, Hate: -30, Resist_Normal: 30
      }),
      100: new SelectorBase("星の魔導士",
        { MATK_Rate: 9, CSPD_Rate: 9, Special_Future: 9 }),
      "100dif1": new SelectorBase("星の魔導士(杖装備)",
        { MATK_Rate: 9, CSPD_Rate: 9, Special_Future: 9, Hate: -9 }),
      "100dif2": new SelectorBase("星の魔導士(盾装備)",
        { MATK_Rate: 9, CSPD_Rate: 9, Special_Future: 9, Hate: 9 }),
      "fa": new SelectorBase("ドン・イエティ", { ATK: 100, ASPD: -1e3 }),
      "fm": new SelectorBase("バーバ", { MATK: 100, CSPD: -1e3 }),
    },
    Nomal: {
      N0: new SelectorBase("フラキブラキ",
        { Distance: 7, HIT_Rate: 3, MP: 200, HP: -100, Critical: -5 }),
      N1: new SelectorBase("アゲラダイオス",
        { ATK_Rate: 6, CriticalDamege: 8, SPD: -1, Resist_Magic: -15 }),
      N2: new SelectorBase("黒い影",
        { ATK_Rate: 8, MATK_Rate: 8, MPRecovery: 3, MP: -150 }),
      N4: new SelectorBase("タップラー(旧)",
        { SwordPower_Rate: 12, FREE_Rate: -4, MP: -50 }),
      "N4diffo": new SelectorBase("タップラー(新)",
        { SwordPower_Rate: 9, FREE_Rate: -4, MP: -50 }),
      "N4diffo2": new SelectorBase("タップラー(新)抜刀剣装備",
        { SwordPower_Rate: 12, FREE_Rate: -4, MP: -50 }),
      "N4diff": new SelectorBase("リリカロラ(旧)",
        { SwordPower_Rate: 18, FREE_Rate: -5, MP: -100 }),
      "N4diff2": new SelectorBase("リリカロラ(新)",
        { SwordPower_Rate: 11, FREE_Rate: -5, MP: -100 }),
      "N4diff3": new SelectorBase("リリカロラ(新)抜刀剣装備",
        { SwordPower_Rate: 14, FREE_Rate: -5, MP: -100 }),
      N5: new SelectorBase("ガルドゴーレム",
        { ATK_Rate: 9, MATK_Rate: 9, ASPD: -225, CSPD: -225 }),
      N6: new SelectorBase("リノライオス",
        { HP_Rate: 10, ASPD_Rate: 15, ATK_Rate: 5 }),
      N7: new SelectorBase("ドラケオル",
        { STR: 6, Distance: 3, LongDistance: 6, Resist_Magic: -12 }),
      N8: new SelectorBase("尉竜ルディス",
        { Distance: 9, HIT_Rate: 5, MP: 200, HP: -300, Critical: -7 }),
      N9: new SelectorBase("ジョコ", {
        Distance: 12, HIT_Rate: 7, MP: 200,
        Critical: -9, HP: -500
      }),
      N100: new SelectorBase("ドゥターネン",
        {
          Special_Future: 6, Special_DefBreak: 6,
          HIT_Rate: 30, Hate: 10
        }),
      N101: new SelectorBase("セラフマキナ",
        { Resist_Health: 3, Resist_Physical: 3, Resist_Magic: 3 }),
      N102: new SelectorBase("ぬーとれーす",
        { ATK_Rate: 2, MATK_Rate: 2, ASPD: 150, CSPD: 150, }),
      N103: new SelectorBase("タコーケン",
        {
          ASPD: 150, CSPD: 200, MPRecovery: 5, Critical: 10,
          Resist_Fire: -4, Resist_Health: -2, Matigation_Blade: -1
        }),
      N104: new SelectorBase("ナンチャ",
        { Stable: 5, HIT_Rate: 5, Critical_Rate: 5 }),
      N105: new SelectorBase("コッファニア",
        { Distance: 4, Stable: 4, LongDistance: -12 }),
      N106: new SelectorBase("モケロー",
        { HP_Rate: 5, CSPD_Rate: 10 }),
      N107: new SelectorBase("リマシナ",
        { Resist_Health: 5, Resist_Physical: 5, Resist_Magic: 5 }),
      N108: new SelectorBase("ルトセーザ",
        { ATK_Rate: 10, MATK_Rate: 10, MPRecovery: 4, MP: -200 }),
      M109: new SelectorBase("カレリーフ",
        { ATK_Rate: 9, CriticalDamege: 12, SPD: 0, Resist_Magic: -15 }
      ),
      N110: new SelectorBase("彼方の残影", {
        Distance: 10, ATKPenetrate: 5, ASPD: -250
      }),
      N111: new SelectorBase("ピヌグールガ", {
        ATK_Rate: 11, MATK_Rate: 11,
        ASPD: -300, CSPD: -300
      }),
      N112: new SelectorBase("暴獣リグシー", {
        HP_Rate: 15, ASPD_Rate: 20, ATK_Rate: 10, MP: -100
      }),
      N113: new SelectorBase("コロン大親分",{
        MATK_Rate: 10, Critical_Rate: 20, HIT: -40
      }),
      N114: new SelectorBase("チュルミナ", {
        Stable:6,HIT_Rate:6,Critical_Rate:6
      }),
      N300: new SelectorBase("クリティカル率+5",
        { Critical: 5 }),
    },
  },
  Extension: [
    new AddEquipmentExtension(
      EquipmentExtensionenum.Wepon,
      10000,
      "盾装備時：\n物理貫通+50%   物理耐性+25%\n重鎧装備時：\nクリティカル率+50   魔法耐性+25%",
      Refs => {
        const { SubWepon, ArmorOption } = Refs.OtherInfo;
        const Result = {};

        if (SubWepon === "SH") {
          Result["ATKPenetrate"] = 50;
          Result["Resist_Physical"] = 25;
        }
        if (ArmorOption === "heavy") {
          Result["Critical"] = 50;
          Result["Resist_Magic"] = 25;
        }

        return new EquipmentExtensionResult(
          Result,
          Result.Keys().length > 0,
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Wepon,
      3070,
      "軽鎧装備時：Avoid回復+40%\n最大HP-20%",
      Refs => {
        return new EquipmentExtensionResult(
          { Avoid_Repair:40,HP_Rate:-20 },
          Refs.OtherInfo.ArmorOption === "light"
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Armor,
      3011,
      "両手剣装備時：MP+200",
      Refs => {
        return new EquipmentExtensionResult(
          { MP: 200 },
          Refs.OtherInfo.Wepon === "TH"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Armor,
      3013,
      "矢装備時：攻撃速度+500",
      Refs => {
        return new EquipmentExtensionResult(
          { ASPD: 500 },
          Refs.OtherInfo.SubWepon === "AR"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Armor,
      3020,
      "抜刀剣装備時：クリティカル率+40",
      Refs => {
        return new EquipmentExtensionResult(
          { Critical: 40 },
          Refs.OtherInfo.Wepon === "KTN" || Refs.OtherInfo.SubWepon === "KTN"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Armor,
      3040,
      "両手剣装備時：安定率+10%",
      Refs => {
        return new EquipmentExtensionResult(
          { Stable: 10 },
          Refs.OtherInfo.Wepon === "TH"
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Armor,
      3050,
      "重鎧装備時：攻撃速度+50%",
      Refs => {
        return new EquipmentExtensionResult(
          { ASPD_Rate: 50 },
          Refs.OtherInfo.ArmorOption === "heavy"
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Armor,
      3060,
      "重鎧装備時：攻撃速度+50%",
      Refs => {
        return new EquipmentExtensionResult(
          { ASPD_Rate: 50 },
          Refs.OtherInfo.ArmorOption === "heavy"
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Addition,
      61,
      "抜刀剣装備時：抜刀威力+5%",
      Refs => {
        return new EquipmentExtensionResult(
          { SwordPower_Rate: 5 },
          Refs.OtherInfo.Wepon === "KTN" || Refs.OtherInfo.SubWepon === "KTN"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Addition,
      1080,
      "短剣装備時：ヘイト-100%",
      Refs => {
        return new EquipmentExtensionResult(
          { Hate: -100 },
          Refs.OtherInfo.SubWepon === "KN"
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Addition,
      1220,
      "抜刀剣装備時：抜刀威力+5%\n盾装備時：MATK+5%",
      Refs => {
        const Wep = Refs.OtherInfo.Wepon;
        const SubWep = Refs.OtherInfo.SubWepon;
        const Ans = [Wep, SubWep].includes("KTN") || SubWep === "SH";
        const Result =
          [Wep, SubWep].includes("KTN") ? { SwordPower_Rate: 5 }
            : SubWep === "SH" ? { MATK_Rate: 5 }
              : {};
        
        return new EquipmentExtensionResult(
          Result,
          Ans
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Addition,
      1270,
      "魔道具装備時：魔法貫通+25%\n矢装備時：命中+25%",
      Refs => {
        const Wep = Refs.OtherInfo.Wepon;
        const SubWep = Refs.OtherInfo.SubWepon;
        const Ans = [Wep, SubWep].includes("MD") || SubWep === "AR";
        const Result =
          [Wep, SubWep].includes("MD") ? { MATKPenetrate: 25 }
            : SubWep === "AR" ? { HIT_Rate: 25 }
              : {};
        
        return new EquipmentExtensionResult(
          Result,
          Ans
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Addition,
      1280,
      "手甲装備時：ATK+9%\n抜刀剣装備時：詠唱速度+900",
      Refs => {
        const Wep = Refs.OtherInfo.Wepon;
        const SubWep = Refs.OtherInfo.SubWepon;
        const Ans = [Wep, SubWep].includes("MA") || [Wep, SubWep].includes("KTN");
        const Result =
          [Wep, SubWep].includes("MA") ? { ATK_Rate: 9 }
            : [Wep, SubWep].includes("KTN") ? { CSPD: 900 }
              : {};
        
        return new EquipmentExtensionResult(
          Result,
          Ans
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Addition,
      1360,
      "抜刀剣装備時：抜刀威力+12%",
      Refs => {
        return new EquipmentExtensionResult(
          { SwordPower_Rate: 12 },
          [Refs.OtherInfo.Wepon, Refs.OtherInfo.SubWepon].includes("KTN")
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Addition,
      1370,
      "矢装備時：ATK+5%",
      Refs => {
        return new EquipmentExtensionResult(
          { ATK_Rate: 5 },
          Refs.OtherInfo.SubWepon === "AR"
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Addition,
      1380,
      "重鎧装備時：攻撃速度+50%",
      Refs => {
        return new EquipmentExtensionResult(
          { ASPD_Rate: 50 },
          Refs.OtherInfo.ArmorOption === "heavy"
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Addition,
      1390,
      "忍術巻物装備時：クリティカル率+14",
      Refs => {
        return new EquipmentExtensionResult(
          { Critical: 14 },
          Refs.OtherInfo.SubWepon === "SC"
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Addition,
      1440,
      "重鎧装備時：\n命中+100   クリティカル率+100%",
      Refs => {
        return new EquipmentExtensionResult(
          { HIT: 100, Critical_Rate: 100 },
          Refs.OtherInfo.ArmorOption === "heavy"
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Addition,
      1510,
      "忍術巻物装備時：詠唱速度+300   クリティカル率+30",
      Refs => {
        return new EquipmentExtensionResult(
          { CSPD: 300, Critical: 30 },
          Refs.OtherInfo.SubWepon === "SC"
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Addition,
      1530,
      "軽鎧装備時：\n異常耐性-20%   攻撃速度+40%\n重鎧装備時：\n異常耐性-20%   詠唱速度+40%",
      Refs => {
        const Armor = Refs.OtherInfo.ArmorOption;
        const Ans = Armor === "heavy" ? { Resist_Health: -20, CSPD_Rate: 40 } :
          Armor === "light" ? { Resist_Health: - 20, ASPD_Rate: 40 }
            : {};
        
        return new EquipmentExtensionResult(
          Ans,
          Ans.Keys().length !== 0
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Addition,
      1540,
      "忍術巻物装備時：抜刀威力+15%",
      Refs => {
        return new EquipmentExtensionResult(
          { SwordPower_Rate: 15 },
          Refs.OtherInfo.SubWepon === "SC"
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Addition,
      1590,
      "軽鎧装備時：物理貫通+4%   無耐性-12%\n重鎧装備時：行動速度+4%   無耐性-12%",
      Refs => {
        const Armor = Refs.OtherInfo.ArmorOption;
        const Ans = Armor === "heavy" ? { SPD: 4, Resist_Normal: -12 } :
          Armor === "light" ? { ATKPenetrate: 4, Resist_Normal: -12 }
            : {};
        
        return new EquipmentExtensionResult(
          Ans,
          Ans.Keys().length > 0
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Addition,
      1600,
      "双剣装備時：\nクリティカル率+15   Avoid回復+20%",
      Refs => {
        return new EquipmentExtensionResult(
          { Critical: 15, Avoid_Repair: 20 },
          Refs.OtherInfo.Wepon === "DS"
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Addition,
      1610,
      "自動弓装備時：クリティカル率+40%\n杖装備時：MATK+5%",
      Refs => {
        const Wepon = Refs.OtherInfo.Wepon;
        const Result = Wepon === "BG" ? { Critical_Rate: 40 }
          : Wepon === "SF" ? { MATK_Rate: 5 }
            : {};
        
        return new EquipmentExtensionResult(
          Result,
          Result.Keys().length > 0
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Addition,
      2020,
      "軽鎧装備時：異常耐性+20%\n重鎧装備時：割合バリア20%",
      Refs => {
        const Armor = Refs.OtherInfo.ArmorOption;
        const Ans = Armor === "heavy" ? { Barrier_Per: 20 } :
          Armor === "light" ? { Resist_Health: 20 }
            : {};
        
        return new EquipmentExtensionResult(
          Ans,
          Ans.Keys().length !== 0
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Addition,
      2030,
      "双剣装備時：安定率+12%\n両手剣装備時：近距離の威力+10%\n短剣装備時：物理貫通+14%\n忍術巻物装備時：行動速度+6%",
      Refs => {
        const Result = {};
        const { Wepon, SubWepon } = Refs.OtherInfo;

        if (Wepon === "DS") Result["Stable"] = 12;
        if (Wepon === "TH") Result["Distance"] = 10;
        if (SubWepon == "KN") Result["ATKPenetrate"] = 14;
        if (SubWepon === "SC") Result["SPD"] = 6;

        return new EquipmentExtensionResult(
          Result,
          Result.Keys().length > 0
        );
      },
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Addition,
      2110,
      "自動弓装備時：遠距離の威力+3%\n矢装備時：遠距離の威力+3%",
      Refs => {
        const Result = {};
        const { Wepon, SubWepon } = Refs.OtherInfo;

        if (Wepon === "BG" && SubWepon === "AR") Result["LongDistance"] = 6;
        else if (Wepon === "BG" || SubWepon === "AR") Result["LongDistance"] = 3;
        
        return new EquipmentExtensionResult(
          Result,
          Result.Keys().length > 0
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Addition,
      2121,
      "軽鎧装備時：\nAvoid回復+20%\n重鎧装備時：\nGurad回復+10% Gurad力+10%",
      Refs => {
        const Armor = Refs.OtherInfo.ArmorOption;
        const Ans = Armor === "heavy" ? { Guard_Repair: 10, Guard_Power: 10 } :
          Armor === "light" ? { Avoid_Repair: 20 }
            : {};
        
        return new EquipmentExtensionResult(
          Ans,
          Ans.Keys().length !== 0
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Addition,
      2122,
      "盾装備時：ヘイト+100%\n双剣装備時：行動速度+5%",
      Refs => {
        const { Wepon, SubWepon } = Refs.OtherInfo;
        const Result = {};

        if (Wepon === "DS") Result["Hate"] = 100;
        if (SubWepon === "SH") Result["SPD"] = 5;

        return new EquipmentExtensionResult(
          Result,
          Result.Keys().length > 0
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Addition,
      2150,
      "短剣装備時：近距離の威力：+10%\n自動弓装備時：攻撃速度+500",
      Refs => {
        const Result = {};
        const { Wepon, SubWepon } = Refs.OtherInfo;

        if (SubWepon === "KN") Result["Distance"] = 10;
        if (Wepon === "BG") Result["ASPD"] = 500;

        return new EquipmentExtensionResult(
          Result,
          Result.Keys().length > 0
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Addition,
      2180,
      "重鎧装備時：物理耐性+5%\n魔法耐性+5% 異常耐性+5%",
      Refs => {
        return new EquipmentExtensionResult(
          { Resist_Physical: 5, Resist_Magic: 5, Resist_Health: 5 },
          Refs.OtherInfo.ArmorOption === "heavy"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Addition,
      2380,
      "忍術巻物装備時：物理貫通+25%",
      Refs => {
        return new EquipmentExtensionResult(
          { ATKPenetrate: 25 },
          Refs.OtherInfo.SubWepon === "SC"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Addition,
      2490,
      "片手剣装備時：先読み+15%\n杖装備時：クリティカル率+30",
      Refs => {
        const { Wepon, SubWepon } = Refs.OtherInfo;
        const Result = Wepon === "OH" || SubWepon === "OH" ? { Special_Future: 15 }
          : Wepon === "SC" ? { Critical: 30 }
            : {};
        return new EquipmentExtensionResult(
          Result,
          Result.Keys().length > 0
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Addition,
      2520,
      "軽鎧装備時：行動速度+5%\n物理耐性-10% 魔法耐性-15%",
      Refs => {
        return new EquipmentExtensionResult(
          { SPD: 5, Resist_Physical: -10, Resist_Magic: -15, },
          Refs.OtherInfo.ArmorOption === "light"
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Option,
      1080,
      "両手剣装備時：クリティカル率+15\n手甲装備時：行動速度+5%",
      Refs => {
        const Wep = Refs.OtherInfo.Wepon;
        const SubWep = Refs.OtherInfo.SubWepon;
        const Ans = [Wep, SubWep].includes("MA") || Wep === "TH";
        const Result =
          [Wep, SubWep].includes("MA") ? { SPD: 5 }
            : Wep === "TH" ? { Critical: 15 }
              : {};
        
        return new EquipmentExtensionResult(
          Result,
          Ans
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Option,
      1110,
      "忍術巻物装備時：\n抜刀威力+5%   物理貫通+5%",
      Refs => {
        return new EquipmentExtensionResult(
          { SwordPower_Rate: 5, ATKPenetrate: 5 },
          Refs.OtherInfo.SubWepon === "SC"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Option,
      1120,
      "片手剣装備時：抜刀威力-3%",
      Refs => {
        return new EquipmentExtensionResult(
          { SwordPower_Rate: -3 },
          Refs.OtherInfo.Wepon === "OH"
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.SubWepon,
      "kn15",
      "片手剣装備時：クリティカル率+20%\n自動弓装備時：詠唱速度+20%",
      Refs => {
        const Wep = Refs.OtherInfo.Wepon;
        const Ans = ["OH", "BG"].includes(Wep);
        const Result = Wep === "OH" ? { Critical_Rate: 20 }
          : Wep === "BG" ? { CSPD_Rate: 20 }
            : {};
        
        return new EquipmentExtensionResult(
          Result,
          Ans
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.SubWepon,
      "sh5",
      "杖装備時：ヘイト+50%",
      Refs => {
        return new EquipmentExtensionResult(
          { Hate: 50 },
          Refs.OtherInfo.Wepon === "SF"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.SubWepon,
      "sc2",
      "杖装備時：魔法貫通+5%",
      Refs => {
        return new EquipmentExtensionResult(
          { MATKPenetrate: 5 },
          Refs.OtherInfo.Wepon === "SF"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.SubWepon,
      "sc3",
      "抜刀剣装備時：命中+10%",
      Refs => {
        return new EquipmentExtensionResult(
          { HIT_Rate: 10 },
          Refs.OtherInfo.Wepon === "KTN"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.SubWepon,
      "sc4",
      "魔道具装備時：ヘイト-10%",
      Refs => {
        return new EquipmentExtensionResult(
          { Hate: -10 },
          Refs.OtherInfo.Wepon === "MD"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.SubWepon,
      "sc6",
      "抜刀剣装備時：クリティカル率+5%",
      Refs => {
        return new EquipmentExtensionResult(
          { Critical: 5 },
          Refs.OtherInfo.Wepon === "KTN"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Wepon,
      900,
      "手甲装備時：絶対回避+5%",
      Refs => {
        const { Wepon, SubWepon } = Refs.OtherInfo;

        return new EquipmentExtensionResult(
          { AbsHIT: 5 },
          Wepon === "MA" || SubWepon === "MA"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Wepon,
      1050,
      "短剣装備時：クリティカルダメージ+1%\n双剣装備時：ヘイト-20%",
      Refs => {
        const Wep = Refs.OtherInfo.Wepon;
        const SubWep = Refs.OtherInfo.SubWepon;
        const Ans = Wep === "DS" || SubWep === "KN";
        const Result = Wep === "DS" ? { Hate: -20 }
          : SubWep === "KN" ? { CriticalDamege_Rate: 1 }
            : {};
        
        return new EquipmentExtensionResult(
          Result,
          Ans
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Wepon,
      1080,
      "手甲装備時：絶対回避+5%",
      Refs => {
        const { Wepon, SubWepon } = Refs.OtherInfo;

        return new EquipmentExtensionResult(
          { AbsHIT: 5 },
          Wepon === "MA" || SubWepon === "MA"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Wepon,
      1081,
      "手甲装備時：絶対回避+10%",
      Refs => {
        const { Wepon, SubWepon } = Refs.OtherInfo;

        return new EquipmentExtensionResult(
          { AbsHIT: 10 },
          Wepon === "MA" || SubWepon === "MA"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Wepon,
      1090,
      "盾装備時：ヘイト-50%",
      Refs => {
        return new EquipmentExtensionResult(
          { Hate: -50 },
          Refs.OtherInfo.SubWepon === "SH"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Wepon,
      1170,
      "盾装備時：攻撃速度+250",
      Refs => {
        return new EquipmentExtensionResult(
          { ASPD: 250 },
          Refs.OtherInfo.SubWepon === "SH"
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Wepon,
      1180,
      "軽鎧装備時：ヘイト+20%\n重鎧装備時：行動速度+1%",
      Refs => {
        const Armor = Refs.OtherInfo.ArmorOption;
        const Ans = Armor === "heavy" ? { SPD: 1 } :
          Armor === "light" ? { Hate: 20 }
            : {};
        
        return new EquipmentExtensionResult(
          Ans,
          Ans.Keys().length !== 0
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Wepon,
      1220,
      "双剣装備時：\n行動速度+2% 最大HP-9%\n魔道具装備時：\nINT+5%",
      Refs => {
        const { Wepon, SubWepon } = Refs.OtherInfo;
        const Ans = Wepon === "DS" ? { SPD: 2, HP_Rate: -9 }
          : Wepon === "MD" || SubWepon === "MD" ? { INT_Rate: 5 }
            : {};
      
        return new EquipmentExtensionResult(
          Ans,
          Ans.Keys().length !== 0
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Wepon,
      1230,
      "盾装備時：ヘイト-50%",
      Refs => {
        return new EquipmentExtensionResult(
          { Hate: -50 },
          Refs.OtherInfo.SubWepon === "SH"
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Armor,
      2,
      "盾装備時：近距離の威力+4%",
      Refs => {
        return new EquipmentExtensionResult(
          { Distance: 4 },
          Refs.OtherInfo.SubWepon === "SH"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Armor,
      107,
      "盾装備時：近距離の威力+5%  STR+1%",
      Refs => {
        return new EquipmentExtensionResult(
          { Distance: 5, STR_Rate: 1 },
          Refs.OtherInfo.SubWepon === "SH"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Armor,
      201,
      "片手剣装備時：ヘイト+15%\n手甲装備時：ヘイト+15%",
      Refs => {
        const { Wepon, SubWepon } = Refs.OtherInfo;
        const Result = {};

        if (Wepon === "OH" && SubWepon === "MA") Result["Hate"] = 30;
        else if (["OH", "MA"].includes(Wepon) || SubWepon === "MA") Result["Hate"] = 15;
         
        return new EquipmentExtensionResult(
          Result,
          Result.Keys().length > 0
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Armor,
      202,
      "片手剣装備時：ヘイト+20%\n手甲装備時：ヘイト+20%",
      Refs => {
        const { Wepon, SubWepon } = Refs.OtherInfo;
        const Result = {};

        if (Wepon === "OH" && SubWepon === "MA") Result["Hate"] = 40;
        else if (["OH", "MA"].includes(Wepon) || SubWepon === "MA") Result["Hate"] = 20;
         
        return new EquipmentExtensionResult(
          Result,
          Result.Keys().length > 0
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Armor,
      306,
      "軽鎧装備時：\n近距離の威力+11%   安定率-5%\n重鎧装備時：\n遠距離の威力+11%   安定率-5%",
      Refs => {
        const Opt = Refs.OtherInfo.ArmorOption;
        const Result = Opt === "light" ? { Distance: 11, Stable: -5 }
          : Opt === "heavy" ? { LongDistance: 11, Stable: - 5 }
            : {};
        
        return new EquipmentExtensionResult(
          Result,
          Result.Keys().length > 0
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Armor,
      308,
      "盾装備時：DEX+5%\n軽鎧装備時：魔法貫通+5%",
      Refs => {
        const Info = Refs.OtherInfo;
        const Result = {};

        if (Info.ArmorOption === "light")
          Result["MATKPenetrate"] = 5;
        if (Info.SubWepon === "SH")
          Result["DEX_Rate"] = 5;
        
        return new EquipmentExtensionResult(
          Result,
          Result.Keys().length !== 0
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Armor,
      310,
      "軽鎧装備時：安定率+6%",
      Refs => {
        return new EquipmentExtensionResult(
          { Stable: 6 },
          Refs.OtherInfo.ArmorOption === "light"
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Armor,
      333,
      "忍術巻物装備時：ヘイト-25%",
      Refs => {
        return new EquipmentExtensionResult(
          { Hate: -25 },
          Refs.OtherInfo.SubWepon === "SC"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Armor,
      334,
      "忍術巻物装備時：Avoid回復+25%",
      Refs => {
        return new EquipmentExtensionResult(
          { Avoid_Repair: 25 },
          Refs.OtherInfo.SubWepon === "SC"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Armor,
      335,
      "盾装備時：近距離の威力+6%  STR+2%",
      Refs => {
        return new EquipmentExtensionResult(
          { Distance: 6, STR_Rate: 2 },
          Refs.OtherInfo.SubWepon === "SH"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Armor,
      336,
      "両手剣装備時：先読み+10%",
      Refs => {
        return new EquipmentExtensionResult(
          { Special_Future:10 },
          Refs.OtherInfo.Wepon === "TH"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Addition,
      4,
      "重鎧装備時：物理耐性+24%",
      Refs => {
        return new EquipmentExtensionResult(
          { Resist_Physical: 24 },
          Refs.OtherInfo.ArmorOption === "heavy"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Addition,
      101,
      "重装備時：ヘイト+20%",
      Refs => {
        return new EquipmentExtensionResult(
          { Hate: 20 },
          Refs.OtherInfo.ArmorOption === "heavy"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Addition,
      103,
      "杖装備時：防御崩し+10%\n魔道具装備時：射刃軽減+20%",
      Refs => {
        const { Wepon, SubWepon } = Refs.OtherInfo;
        const HasSF = Wepon === "SF";
        const HasMD = Wepon === "MD" || SubWepon === "MD";
        const Result = HasSF && HasMD
          ? { Special_DefBreak: 10, Matigation_Blade: 20 }
          : HasSF
            ? { Special_DefBreak: 10 }
            : HasMD
              ? { Matigation_Blade: 20 }
              : {};
        
        return new EquipmentExtensionResult(
          Result,
          Result.Keys().length > 0
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Addition,
      221,
      "自動弓装備時：近距離の威力+9%",
      Refs => {
        return new EquipmentExtensionResult(
          { Distance: 9 },
          Refs.OtherInfo.Wepon === "BG"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Addition,
      224,
      "軽鎧装備時：物理貫通-10%",
      Refs => {
        return new EquipmentExtensionResult(
          { ATKPenetrate: -10 },
          Refs.OtherInfo.ArmorOption === "light"
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Addition,
      227,
      "魔道具装備時：行動速度+5%\n忍術巻物装備時：魔法貫通+10%",
      Refs => {
        const { Wepon, SubWepon } = Refs.OtherInfo;
        const Result = {};

        if (Wepon === "MD" || SubWepon === "MD") Result["SPD"] = 5;
        if (SubWepon === "SC") Result["MATKPenetrate"] = 10;

        return new EquipmentExtensionResult(
          Result,
          Result.Keys().length > 0
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Addition,
      229,
      "杖装備時：行動速度+1%",
      Refs => {
        return new EquipmentExtensionResult(
          { SPD: 1 },
          Refs.OtherInfo.Wepon === "SF"
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Addition,
      230,
      "盾装備時：行動速度+1%",
      Refs => {
        return new EquipmentExtensionResult(
          { SPD: 1 },
          Refs.OtherInfo.SubWepon === "SH"
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Addition,
      235,
      "重鎧装備時：物理耐性+24%",
      Refs => {
        return new EquipmentExtensionResult(
          { Resist_Physical: 24 },
          Refs.OtherInfo.ArmorOption === "heavy"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Option,
      60,
      "両手剣装備時：\nGuard回復+25% Guard力+25%",
      Refs => {
        return new EquipmentExtensionResult(
          { Guard_Repair: 25, Guard_Power: 25 },
          Refs.OtherInfoWepon === "TH"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Option,
      204,
      "盾装備時：\n安定率+5%   ATK-10%",
      Refs => {
        return new EquipmentExtensionResult(
          { Stable: 5, ATK_Rate: -10 },
          Refs.OtherInfo.SubWepon === "SH"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Option,
      210,
      "弓装備時：遠距離の威力+5%\n盾装備時：ヘイト+25%",
      Refs => {
        const SubWep = Refs.OtherInfo.SubWepon;
        const Ans = ["AR", "SH"].includes(SubWep);
        const Result = SubWep === "AR" ? { LongDistance: 5 }
          : SubWep === "SH" ? { Hate: 25 }
            : {};
        
        return new EquipmentExtensionResult(
          Result,
          Ans
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Option,
      211,
      "旋風槍装備時：遠距離の威力+5%",
      Refs => {
        return new EquipmentExtensionResult(
          { LongDistance: 5 },
          Refs.OtherInfo.Wepon === "HB"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Option,
      100,
      "杖装備時：ヘイト-9%\n盾装備時：ヘイト+9%",
      Refs => {
        const Wep = Refs.OtherInfo.Wepon;
        const SubWep = Refs.OtherInfo.SubWepon;
        const Ans = (Wep === "SF" && SubWep === "SH") || (Wep !== "SF" && SubWep !== "SH");
        const Result = Ans ? {}
          : Wep === "SF" ? { Hate: -9 }
            :  { Hate: 9 };
        
        return new EquipmentExtensionResult(
          Result,
          Result.Keys().length > 0
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Option,
      223,
      "忍術巻物装備時：\n抜刀威力+5% クリティカル率+5",
      Refs => {
        return new EquipmentExtensionResult(
          { SwordPower_Rate: 5, Critical: 5 },
          Refs.OtherInfo.SubWepon === "SC"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Option,
      227,
      "盾装備時：異常耐性5%",
      Refs => {
        return new EquipmentExtensionResult(
          {Resist_Health: 5},
          Refs.OtherInfo.SubWepon === "SH"
        )  
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Option,
      230,
      "軽鎧装備時：バリア速度+10%\n重鎧装備時：割合バリア10%",
      Refs => {
        const Opt = Refs.OtherInfo.ArmorOption;
        const Result = Opt === "light" ? { Barrier_Repair: 10 }
          : Opt === "heavy" ? { Barrier_Per: 10 }
            : {};
        
        return new EquipmentExtensionResult(
          Result,
          Result.Keys().length > 0
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Option,
      231,
      "重鎧装備時：物理耐性+5%\n魔法耐性+5%\n割合バリア+10%",
      Refs => {
        return new EquipmentExtensionResult(
          { Resist_Physical: 5, Resist_Magic: 5, Barrier_Per: 10 },
          Refs.OtherInfo.ArmorOption === "heavy"
        )
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Nomal,
      "N4diffo",
      "抜刀剣装備時：抜刀威力+3%",
      Refs => {
        return new EquipmentExtensionResult(
          { SwordPower_Rate: 3 },
          Refs.OtherInfo.Wepon === "KTN" || Refs.OtherInfo.SubWepon === "KTN"
        );
      }
    ),
    new AddEquipmentExtension(
      EquipmentExtensionenum.Cry_Nomal,
      "N4diff2",
      "抜刀剣装備時：抜刀威力+3%",
      Refs => {
        return new EquipmentExtensionResult(
          { SwordPower_Rate: 3 },
          Refs.OtherInfo.Wepon === "KTN" || Refs.OtherInfo.SubWepon === "KTN"
        );
      }
    ),
  ],
  ItemBuff: {
    Attacker: {
      0: new SelectorBase("なし", {}),
      1: new SelectorBase("みなぎる丸薬", { ATK: 50, ATK_Rate: 5 }),
      2: new SelectorBase("ペネトレートオイル", { ATK_Rate: 3, ATKPenetrate: 10 }),
      3: new SelectorBase("スラッシュオイル", { SwordPower: 100, SwordPower_Rate: 5 }),
      4: new SelectorBase("松茸スープ", { WeponATK_Rate: 10, MPRecovery: 10 }),
      5: new SelectorBase("ランタンケーキ", { ATK_Rate: 10 }),
      6: new SelectorBase("ドーピング剤", { ATK_Rate: 4, STR_Rate: 2, HIT_Rate: 1 }),
      7: new SelectorBase("パンプソンパフェ", { ATK_Rate: 6 }),
      8: new SelectorBase("ポム屋の焼き団子", { WeponATK_Rate: 5, ATKPenetrate: 5 }),
      9: new SelectorBase("モニスタグミ", { ATKPenetrate: 5, Critical_Rate: 40 }),
    },
    Defense: {
      0: new SelectorBase("なし", {}),
      1: new SelectorBase("銀杏の炊き込みご飯", { Resist_Physical: 25, Resist_Magic: 25 }),
      2: new SelectorBase("弾力ゼリー", { Resist_Physical: 25, ATK_Rate: -25, MATK_Rate: -25 }),
      3: new SelectorBase("謎のポーション(Y)", { ATK_Rate: 1 }),
    },
    MagicDefense: {
      0: new SelectorBase("なし", {}),
      1: new SelectorBase("謎のポーション(P)", { MATK_Rate: 1 }),
      2: new SelectorBase("キラキラパウダー", { Hate: 10 }),
    },
    Speed: {
      0: new SelectorBase("なし", {}),
      1: new SelectorBase("ギガスピードポッド", { ASPD: 750 }),
      2: new SelectorBase("テラスピードポッド", { ASPD: 1000 }),
      3: new SelectorBase("ちらし寿司", { ASPD: 500, ASPD_Rate: 25 }),
    },
    Chant: {
      0: new SelectorBase("なし", {}),
      1: new SelectorBase("リスニングホン", { CSPD: 700 }),
      2: new SelectorBase("ぶどうゼリー", { CSPD: 300, MP: 300 }),
      3: new SelectorBase("いなり寿司",{CSPD:500,CSPD_Rate:25}),
    },
    Magical: {
      0: new SelectorBase("なし", {}),
      1: new SelectorBase("魔導師の秘薬", { MATK_Rate: 5, MATK: 50 }),
      2: new SelectorBase("魔法障壁の石版", { MATK_Rate: 3, MATKPenetrate: 10 }),
      3: new SelectorBase("苦いプルプル", { MATK_Rate: -4, CSPD: 800 }),
      4: new SelectorBase("リリーフグミ", { MATK_Rate: 6 }),
      5: new SelectorBase("ポム屋のお雑煮", { WeponATK_Rate: 5, MATKPenetrate: 5 }),
      6: new SelectorBase("ミイラロール", { MATKPenetrate: 5, Critical_Rate: 40 }),
    },
    AttrPower: {
      0: new SelectorBase("なし", {}),
      1: new SelectorBase("かぼちゃの飴玉(有利共通)", { Attribute: 5, ASPD: 100, CSPD: 100 }),
      2: new SelectorBase("ゾンビケーキ(有利共通)", { Attribute: 5, ASPD: 100, CSPD: 100 }),
      3: new SelectorBase("かぼちゃのクッキー(有利共通)", { Attribute: 5, ASPD: 100, CSPD: 100 }),
      4: new SelectorBase("ジンジャーケーキ(有利共通)", { Attribute: 5, ASPD: 100, CSPD: 100 }),
      5: new SelectorBase("ジャックプリン(有利共通)", { Attribute: 5, ASPD: 100, CSPD: 100 }),
      6: new SelectorBase("ブラックバーム(有利共通)", { Attribute: 5, ASPD: 100, CSPD: 100 }),
      7: new SelectorBase("パンプキンスープ(有利共通)", { Attribute: 5, ASPD: 100, CSPD: 100 }),
    },
    AttrDef: {
      0: new SelectorBase("なし", {}),
      1: new SelectorBase("属性ケーキ類(共通)", { MP: 100 }),
      2: new SelectorBase("たこけん焼き(共通)", { Critical: 15 }),
    },
    MP: {
      0: new SelectorBase("なし", {}, 1),
      1: new SelectorBase("アドマジクルⅢ", { MP: 300 }, 2),
      5: new SelectorBase("アドマジクルⅣ", { MP: 400 }, 3),
      2: new SelectorBase("アドマジクルⅤ", { MP: 500 }, 4),
      6: new SelectorBase("アドマジクルⅥ", { MP: 600 }, 5),
      7: new SelectorBase("アドマジクルSP", { MP: 1000 }, 6),
      3: new SelectorBase("ロノーゴ海老ソテー", { MP: 300, CSPD: 250 }, 7),
      4: new SelectorBase("ソウルプリン", { MP: 300, HP: 1000 }, 8),
      8: new SelectorBase("キニナーレ", { MP: 100, Hate: 20 }, 9),
    },
    HP: {
      0: new SelectorBase("なし", {}),
      1: new SelectorBase("プラスバイタⅤ", { HP: 2500 }),
      2: new SelectorBase("プラスバイタⅥ", { HP: 3000 }),
      3: new SelectorBase("ドラゴンステーキ", { HP: 1500, ASPD: 250 }),
      4: new SelectorBase("かたいラム肉", { HP: 750, STR: 5 },1),
      5: new SelectorBase("シュガークッキー", { HP: 1500, MP: 200 }),
      6: new SelectorBase("油揚げ", { HP_Rate: 1, HIT: 15 }),
      7: new SelectorBase("リュアーク鎮静剤", { HP: 1000, Resist_Physical: 5 }),
      8: new SelectorBase("焼けたラム肉", { HP: 1250, STR: 3 }, 2),
      9: new SelectorBase("クジラ肉", { HP: 5000 }),
      10: new SelectorBase("茹でロブスター", { HP: 5000, MP: -100 }),
      11: new SelectorBase("猛者の赤褌", { HP: 500, Hate: -15 }),
      12: new SelectorBase("ドンドゥルマ", { HP_Rate:-15,Hate:30}),
    },
    HIT: {
      0: new SelectorBase("なし", {}),
      1: new SelectorBase("戦霊の輪", { HIT: 60 }),
      2: new SelectorBase("エスカルバター焼き", { HIT: 30, Critical: 5 }),
      3: new SelectorBase("葉桜茶", { HIT_Rate: 12, Critical: 6 , Stable: -3}),
    },
    FREE: {
      0: new SelectorBase("なし", {}),
      1: new SelectorBase("白いプルプル", { FREE: 50 }),
      2: new SelectorBase("黄金ポム酒", { HIT: 50, FREE: 50 }),
    }
  },
  Cooking: {
    0: { Name: "なし" },
    STR: { Name: "おかかおにぎり(STR)", Up: [2, 4, 6, 8, 10, 14, 18, 22, 26, 30] },
    DEX: { Name: "鮭おにぎり(DEX)", Up: [2, 4, 6, 8, 10, 14, 18, 22, 26, 30] },
    INT: { Name: "梅干しおにぎり(INT)", Up: [2, 4, 6, 8, 10, 14, 18, 22, 26, 30] },
    AGI: { Name: "明太子おにぎり(AGI)", Up: [2, 4, 6, 8, 10, 14, 18, 22, 26, 30] },
    VIT: { Name: "ツナマヨおにぎり(VIT)", Up: [2, 4, 6, 8, 10, 14, 18, 22, 26, 30] },
    HIT: { Name: "しょうゆラーメン(命中)", Up: [6, 12, 18, 24, 30, 44, 58, 72, 86, 100] },
    Attribute: {
      Name: "属性パスタ(属性有利共通)",
      Up: [1, 2, 3, 4, 5, 7, 9, 11, 13, 15],
    },
    Critical: { Name: "たこ焼き(クリ率)", Up: [2, 4, 6, 8, 10, 14, 18, 22, 26, 30] },
    MPRecovery: { Name: "焼きそば(攻撃MP回復)", Up: [2, 4, 6, 8, 10, 14, 18, 22, 26, 30] },
    HP: {
      Name: "黄金チャーハン(HP)",
      Up: [400, 800, 1200, 1600, 2000, 2600, 3200, 3800, 4400, 5000]
    },
    MP: {
      Name: "あんかけチャーハン(MP)",
      Up: [60, 120, 180, 240, 300, 440, 580, 720, 860, 1000]
    },
    WeponATK: { Name: "マルゲリータピザ(武器ATK+)", Up: [6, 12, 18, 24, 30, 44, 58, 72, 86, 100] },
    ATK: { Name: "ディアボラピザ(ATK+)", Up: [6, 12, 18, 24, 30, 44, 58, 72, 86, 100] },
    MATK: { Name: "シーフードピザ(MATK+)", Up: [6, 12, 18, 24, 30, 44, 58, 72, 86, 100] },
    Hate: { Name: "ビーフシチュー(ヘイト+)", Up: [6, 12, 18, 24, 30, 44, 58, 72, 86, 100] },
    HateLittle: {
      Name: "ホワイトシチュー(ヘイト-)",
      Up: [6, 12, 18, 24, 30, 44, 58, 72, 86, 100]
    },
    Resist_Physical: { Name: "ビーフバーガー(物理耐性)", Up: [4, 8, 12, 16, 20, 26, 32, 38, 44, 50] },
    Resist_Magic: { Name: "フィッシュバーガー(魔法耐性)", Up: [4, 8, 12, 16, 20, 26, 32, 38, 44, 50] },
  },
  SkillBuff: {
    "Ms-blade": new AddBuff("ﾌﾞﾚｰﾄﾞﾏｽﾀﾘ",
      { ATK_Rate: 3, WeponATK_Rate: 30 }, 0,
      {
        Wepons: ["OH", "TH", "DS"],
        Change: (Lv) => {
          const ATK_Rate = Lv > 7 ? 3 : Lv > 2 ? 2 : 1;
          const WeponATK_Rate = Lv * 3;
          return { ATK_Rate, WeponATK_Rate }
        }
      }),
    "Ms-shoot": new AddBuff("ｼｭｰﾄﾏｽﾀﾘ",
      { ATK_Rate: 3, WeponATK_Rate: 30 }, 0,
      {
        Wepons: ["BW", "BG"],
        Change: (Lv) => {
          const ATK_Rate = Lv > 7 ? 3 : Lv > 2 ? 2 : 1;
          const WeponATK_Rate = Lv * 3;
          return { ATK_Rate, WeponATK_Rate }
        }
      }),
    "Ms-magic": new AddBuff("ﾏｼﾞｯｸﾏｽﾀﾘ",
      { MATK_Rate: 3, WeponATK_Rate: 30 }, 0,
      {
        Wepons: ["SF", "MD"],
        Root: "IsMagicMaster",
        Change: (Lv) => {
          const MATK_Rate = Lv > 7 ? 3 : Lv > 2 ? 2 : 1;
          const WeponATK_Rate = Lv * 3;
          return { MATK_Rate, WeponATK_Rate }
        },
      }),
    "Ms-halberd": new AddBuff("ﾊﾙﾊﾞｰﾄﾞﾏｽﾀﾘ",
      { ATK_Rate: 3, WeponATK_Rate: 30 }, 0,
      {
        Wepons: ["HB"],
        Change: (Lv) => {
          const ATK_Rate = Lv > 7 ? 3 : Lv > 2 ? 2 : 1;
          const WeponATK_Rate = Lv * 3;
          return { ATK_Rate, WeponATK_Rate }
        }
      }),
    "Ms-Marchal": new AddBuff("ﾏｰｼｬﾙﾏｽﾀﾘ",
      { ATK_Rate: 3, WeponATK_Rate: 30 }, 0,
      {
        Wepons: ["MA"],
        Change: (Lv) => {
          const ATK_Rate = Lv > 7 ? 3 : Lv > 2 ? 2 : 1;
          const WeponATK_Rate = Lv * 3;
          return { ATK_Rate, WeponATK_Rate }
        }
      }),
    "Ms-Shield": new AddBuff("ｼｰﾙﾄﾞﾏｽﾀﾘ",
      {}, 0, {
      Wepons: ["BH", "OH", "BG", "SF", "MA"],
      Root: "IsMasterOfSH",
      Checker: () => Data.OtherInfo.SubWepon === "SH",
      IsLostStatus: false,
    }),
    "Ms-Mononof": new AddBuff("武士道",
      { HP: 100, MP: 100, HIT: 10, ATK_Rate: 3, WeponATK_Rate: 30 }, 0,
      {
        Wepons: ["KTN"],
        Change: (Lv) => {
          const [HP, MP, HIT] = [Lv * 10, Lv * 10, Lv * 1];
          const [ATK_Rate, WeponATK_Rate] = [Lv > 7 ? 3 : Lv > 2 ? 2 : 1, Lv * 3];
          return { HP, MP, HIT, ATK_Rate, WeponATK_Rate }
        }
      }),
    Mononof: new AddBuff("武士道",
      { HP: 100, MP: 100, HIT: 10 }, 6, {
      Wepons: ["OH", "TH", "DS", "BW", "BG", "SF", "MD", "HB", "MA", "BH"],
      Change: (Lv) => {
        const [HP, MP, HIT] = [Lv * 10, Lv * 10, Lv * 1];
        return { HP, MP, HIT }
      }
    }),
    "mf1-1": new AddBuff("明鏡止水",
      { Critical: 40, CriticalDamege_Rate: -5 }, 6, {
      Wepons: ["OH", "TH", "DS", "BW", "BG", "SF", "MD", "HB", "MA", "BH"],
      Change: (Lv) => {
        const [Critical, CriticalDamege_Rate] = [20 + Lv * 2, -15 + Lv];
        return { Critical, CriticalDamege_Rate }
      }
    }
    ),
    "mf1-2": new AddBuff("明鏡止水",
      { Critical: 65 }, 6,
      {
        Wepons: ["KTN"],
        Change: (Lv) => Object.fromEntries([["Critical", 45 + Lv * 2]])
      }
    ),
    mf2: new AddBuff("忍道", { FREE: 10, Hate: -5 }, 19, {
      Change: (Lv) => { return { FREE: Lv, Hate: -Math.floor(Lv / 2) } },
      Root: "IsNindo",
    }),
    mf3: new AddBuff("不撓不屈", { WeponATK: 50, SwordPower_Rate: 20, HIT: 100, Hide_BaseWeponATK: 50 }, 6, {
      Wepons: ["KTN"],
      Root: "IsIndomitable",
      Max: 100,
      Change: (Lv) => { return SelectionData.SkillBuff.mf3.Base },
      Replacer: Refs => {
        const FLv = Math.floor(Refs.OtherInfo.IsIndomitable / 10);
        if (FLv < 1) return {};

        return {
          HIT: FLv * 10,
          WeponATK: FLv > 1 ? FLv * 5 : 0,
          WeponATK_Rate: FLv === 10 ? 30 : 0,
          SwordPower_Rate: FLv > 2 ? FLv * (FLv > 6 ? 2 : 1) : 0,
          Hide_BaseWeponATK: FLv >= 6 ? FLv * 5 : 0
        };
      }
    }),
    "sm1-1": new AddBuff("両手持ち",
      { WeponATK_Rate: 10, HIT_Rate: 10, Critical: 5, Stable: 5 }, 6,
      {
        Wepons: ["OH", "TH", "BW", "BG", "SF", "MD", "HB", "MA"],
        Checker: () => {
          const Wep = Data.OtherInfo.SubWepon;
          if (Wep === "BH") return true;
          if (Wep === "SC" && SelectionData.SkillBuff.mf2.Lv === 10
            && SelectionData.SkillBuff.mf2.IsActive === true) return true;
          return false;
        },
        IsLostStatus: true,
      }
    ),
    "sm1-2": new AddBuff("両手持ち",
      { WeponATK_Rate: 10, HIT_Rate: 10, Critical: 10, Stable: 10 }, 6,
      {
        Wepons: ["KTN"],
        Root: "IsTwoHKTN",
        Checker: () => {
          const Wep = Data.OtherInfo.SubWepon;
          if (Wep === "BH") return true;
          if (Wep === "SC" && Data.OtherInfo.IsNindo === 10
            && SelectionData.SkillBuff.mf2.IsActive === true) return true;
          return false;
        },
        IsLostStatus: true,
      }
    ),
    sm2: new AddBuff("素早い斬撃", { ASPD: 100, ASPD_Rate: 10 }, 1,
      {
        Wepons: ["OH", "TH", "DS"],
        Change: (Lv) => {
          const [ASPD, ASPD_Rate] = [Lv * 10, Lv];
          return { ASPD, ASPD_Rate }
        }
      }),
    "sm3-1": new AddBuff("バーサーク",
      { ASPD: 1000, ASPD_Rate: 100, Critical: 25, Stable: -50 }, 1,
      { Wepons: ["BW", "BG", "SF", "MD", "HB", "MA", "BH"] }
    ),
    "sm3-2": new AddBuff("バーサーク",
      { ASPD: 1000, ASPD_Rate: 100, Critical: 25, Stable: -25 }, 1,
      { Wepons: ["OH", "DS"] }
    ),
    "sm3-3": new AddBuff("バーサーク",
      { ASPD: 1000, ASPD_Rate: 100, Critical: 50, Stable: -25 }, 1,
      {
        Wepons: ["TH"],
        Replacer: Refs => {
          const OrgasSlash = Refs.OtherInfo.IsOrgasSlash;
          return {
            ASPD: 1000,
            ASPD_Rate: 100,
            Critical: 50,
            Stable: OrgasSlash > 1 ? -12.5 : -25
          }
        }
      }
    ),
    sm4: new AddBuff("匠の剣術", {}, 1,
      { Wepons: ["OH", "TH", "DS"], Root: "IsSwordMaster" }
    ),
    sm5: new AddBuff("P:ｵｰﾗﾌﾞﾚｰﾄﾞ", {}, 1, {
      Wepons: ["OH"],
      Change: (Lv) => { return {} },
      Root: "IsPassiveAuraBrade",
    }),
    hb1: new AddBuff("クイックオーラ",
      { ASPD: 500, ASPD_Rate: 25 }, 5, {
        Change: (Lv) => {
          return {
            ASPD: Lv * 50,
            ASPD_Rate: Math.floor(Lv / 2 * 5)
          }
        }
    }
    ),
    hb2: new AddBuff("会心の捌き",
      { Critical: 5, Critical_Rate: 5 }, 5,
      { Wepons: ["HB"] }
    ),
    hb3: new AddBuff("ﾄﾙﾈｰﾄﾞﾗﾝｽ",
      { FREE_Rate: 100, CriticalDamege: 20 }, 5,
      {
        Wepons: ["HB"],
        Change: (Lv) => {
          return {
            CriticalDamege: Lv * 2,
            FREE_Rate: Lv * 10
          }
        }
      }),
    "hb4-1": new AddBuff("神速の捌手",
      { SPD: 30, ASPD: 900, MP: -300, Resist_Physical: -225, Resist_Magic: -225 }, 5,
      {
        Wepons: ["OH", "TH", "DS", "BW", "BG", "SF", "MD", "KTN", "MA", "BH"],
        Change: (Lv) => {
          return {
            SPD: 10 * Lv,
            ASPD: 300 * Lv,
            MP: -100 * Lv,
            Resist_Physical: -75 * Lv,
            Resist_Magic: -75 * Lv,
          }
        },
        Max: 3
      }),
    "hb4-2": new AddBuff("神速の捌手",
      { SPD: 30, ASPD: 1200, MP: -300, Resist_Physical: -75, Resist_Magic: -75 }, 5,
      {
        Wepons: ["HB"],
        Change: (Lv) => {
          return {
            SPD: 10 * Lv,
            ASPD: 400 * Lv,
            MP: -100 * Lv,
            Resist_Physical: -25 * Lv,
            Resist_Magic: -25 * Lv,
          }
        },
        Max: 3
      }),
    hb5: new AddBuff("神の槍捌き", {}, 5, {
      Wepons: ["HB"],
      Root:"IsGodHB",
      Change: _ => { return {} }
    }),
    ma1: new AddBuff("体術鍛錬", { ASPD: 100, ASPD_Rate: 10 }, 4, {
      Wepons: ["MA"],
      Root: "IsMAmaster",
      Change: (Lv) => {
        const [ASPD, ASPD_Rate] = [Lv * 10, Lv];
        return { ASPD, ASPD_Rate }
      }
    }),
    "ma2-1": new AddBuff("強力な追撃", {}, 4, {
      Wepons: ["MA"],
      Change: (Lv) => { return { HIT_Rate: Lv * 2 } },
    }),
    "ma2-2": new AddBuff("強力な追撃", {}, 4, {
      Wepons: ["BH", "OH", "SF", "BG"],
      Change: (Lv) => { return { HIT_Rate: Lv } },
      Checker: () => Data.OtherInfo.SubWepon === "MA",
      IsLostStatus: true
    }),
    sh1: new AddBuff("ボウガンハンター", { WeponATK_Rate: 25 }, 17, {
      Wepons: ["BG"],
      Root: "IsBGHunter",
      Checker: () => Data.OtherInfo.SubWepon !== "AR",
      IsLostStatus: true,
    }),
    shield1: new AddBuff("ﾌｫｰｽｼｰﾙﾄﾞ", { HP: 500, Resist_Physical: 10 }, 15,
      {
        SubWepons: ["SH"],
        Change: (Lv) => { return { HP: Lv * 50, Resist_Physical: Lv } },
        IsLostStatus: true,
      }),
    shield2: new AddBuff("ﾏｼﾞｶﾙｼｰﾙﾄﾞ", { HP: 500, Resist_Magic: 10 }, 15,
      {
        SubWepons: ["SH"],
        Change: (Lv) => { return { HP: Lv * 50, Resist_Magic: Lv } },
        IsLostStatus: true,
      }),
    sf1: new AddBuff("スペルバースト", {}, 22, { Root: "IsSpellBurst" }),
    ar1: new AddBuff("武士弓術", {}, 2, {
      Root: "IsSamuraiBow",
      SetWepons:{"BW" : "KTN"}
    }),
    "skillbuff_ar2": new AddBuff("ﾂｲﾝｽﾄｰﾑ", { ASPD: 1000 }, 2, {
      Wepons: ["BG"],
      Root: "IsTwinStorm",
      Max: 99,
      Default: 1,
      Change: _ => { return { ASPD : 1000 } }
    }),
    MagicWarrior: new AddBuff("魔法戦士の心得",
      { MATK: 25, CSPD: 100, CSPD_Rate: 15 }, 10, {
        Wepons: ["BH", "OH", "SF", "BG", "MA"],
        Root: "IsMagicWarrior",
        Change: (Lv) => {
          const [MATK, CSPD, CSPD_Rate] = Lv < 6 ? [Lv * 2, Lv * 10, Lv * 1]
            : [(10 + (Lv - 5) * 3), Lv * 10, (5 + (Lv - 5) * 2)];
          return { MATK, CSPD, CSPD_Rate }
        },
        Checker: () => Data.OtherInfo.SubWepon === "MD",
        IsLostStatus: true,
    }),
    mg1: new AddBuff("魔術の導", { CSPD: 500 }, 12, {
      Wepons: ["SF", "MD"],
      Change: () => { return SelectionData.SkillBuff.mg1.Base; },
      Root: "IsMagicGuide",
      Replacer: (Refs) => {
        const My = SelectionData.SkillBuff.mg1;

        return {
          CSPD: Refs.OtherInfo.IsOverLimit ? My.Lv * 50 : 0
        };
      }
    }),
    mg2: new AddBuff("ｷｬｽﾄﾏｽﾀﾘ", {
      ATK_Rate: -25, CSPD_Rate: 85, CSPD: 1500
    }, 12, {
      Wepons: ["SF", "MD"],
      Root: "IsCastMaster",
      Change: (Lv, SecondLv, TherdLv) => {
        const LvMinList = [0, 1, 6, 7, 8, 13, 14, 19, 24, 29, 34, 39, 44, 49, 54];
        const TherdMin = Lv + LvMinList[SecondLv];
        const TherdMax = SecondLv * 10 + Lv;

        if (TherdMax < TherdLv) {
          SelectionData.SkillBuff.mg2.TherdLv = TherdMax;
        } else if (TherdMin > TherdLv) {
          SelectionData.SkillBuff.mg2.TherdLv = TherdMin;
        };

        return {
          ATK_Rate: -50 + Math.ceil(Lv * 2.5),
          CSPD_Rate: Lv * 1.5 + SecondLv * Lv * 0.5,
          CSPD: SelectionData.SkillBuff.mg2.TherdLv * Lv,
        }
      },
      Second: 14,
      Therd: 150,
    }),
    mg3: new AddBuff("ファミリア", { MP: 200 }, 12, {
      Wepons: ["SF", "MD", "BH", "OH", "BG"],
      Root: "IsFamilly",
      Change: (Lv) => {
        return { MP: 100 + Lv * 10 };
      },
      Checker: () => {
        const Wepon = Data.OtherInfo.Wepon;
        const SubWepon = Data.OtherInfo.SubWepon;

        if (["SF", "MD"].includes(Wepon)) return true;
        if (SubWepon === "MD") return true;
        return false;
      },
      IsLostStatus: true,
    }),
    mg4: new AddBuff("ﾁｪｲﾝｷｬｽﾄ", {}, 3, {
      Wepons: ["SF", "MD"],
      Root: "IsChainCast",
      Root2: "IsChainCastCount",
      Change: () => {
        return {}
      },
      Second: 10,
    }),
    oh1: new AddBuff("クリティカルup",
      { Critical: 5, CriticalDamege_Rate: 5 }, 22),
    oh2: new AddBuff("MPブースト", { MP: 300 }, 21, {
      Change: (Lv) => { return { MP: Lv * 30 } },
    }),
    oh3: new AddBuff("コンバージョン", {}, 10,
      {
        Wepons: ["OH", "TH", "BG", "MA"],
        Root: "IsConversion",
      }
    ),
    oh4: new AddBuff("HPブースト",
      { HP_Rate: 20, HP: 1000 }, 22,
      {
        Change: (Lv) => { return { HP_Rate: Lv * 2, HP: Lv * 100 } }
      }),
    exATK1: new AddBuff("攻撃力up", {}, 22, {
      Root: "IsATKup",
      Change: () => { return {} },
    }
    ),
    exATK2: new AddBuff("驚異の威力", {}, 22, {
      Root: "IsATKup2",
      Change: () => { return {} },
    }
    ),
    exMATK1: new AddBuff("魔法力up", {}, 22, {
      Root: "IsMATKup",
      Change: () => { return {} },
    }
    ),
    exMATK2: new AddBuff("更なる魔力", {}, 22, {
      Root: "IsMATKup2",
      Change: () => { return {} },
    }
    ),
    exHIT: new AddBuff("命中UP", { HIT: 10 }, 22, {
      Change: (Lv) => { return { HIT: Lv } },
    }),
    exFREE: new AddBuff("回避UP", { FREE: 10 }, 22, {
      Change: (Lv) => { return { FREE: Lv } },
    }),
    LongRange: new AddBuff("ロングレンジ", {}, 2, {
      Root: "IsLongRange",
      Change: () => { return {} },
    }),
    DSpena1: new AddBuff("ﾃﾞｭｱﾙﾏｽﾀﾘ", {}, 0, {
      Wepons: ["DS"], Root: "IsDSPassive1",
      Change: () => { return {} },
    }
    ),
    DSpena2: new AddBuff("双剣の鍛錬", { ASPD: 500 }, 7, {
      Wepons: ["DS"], Root: "IsDSPassive2",
      Change: (Lv) => { return { ASPD: Lv * 50 } },
    }
    ),
    "ds1-1": new AddBuff("神速の軌跡", { AGI: 15, SwordPower_Rate: 25 }, 7,
      {
        Wepons: ["DS"],
        Change: (Lv) => {
          const [AGI, SwordPower_Rate] = [Lv < 6 ? Lv : 5 + 2 * (Lv - 5), 15 + Lv];
          return { AGI, SwordPower_Rate }
        }
      }
    ),
    "ds1-2": new AddBuff("神速の軌跡", { AGI: 15, SwordPower_Rate: 15 }, 7,
      {
        Wepons: ["OH", "TH", "KTN", "BW", "BG", "SF", "MD", "HB", "MA", "BH"],
        Change: (Lv) => {
          const [AGI, SwordPower_Rate] = [Lv < 6 ? Lv : 5 + 2 * (Lv - 5), 5 + Lv];
          return { AGI, SwordPower_Rate }
        }
      }
    ),
    ninja0: new AddBuff("忍術", {}, 19, {
      Root: "IsNinja",
      Change: () => { return {} },
    }),
    ninja1: new AddBuff("忍術鍛錬Ⅰ", {}, 19, {
      Root: "IsNinjaPower1",
      Change: () => { return {} },
    }),
    ninja2: new AddBuff("忍術鍛錬Ⅱ", {}, 19, {
      Root: "IsNinjaPower2",
      Change: () => { return {} },
    }),
    dp1: new AddBuff("ｴﾀｰﾅﾙﾅｲﾄﾒｱ", { HP_Rate: 20 }, 13, {
      Root: "IsEternal1",
      Root2: "IsEternal2",
      Change: (Lv, SecondLv) => {
        const SecondMin = 15 + Lv;
        const SecondMax = 70 + Lv;

        if (SecondLv < SecondMin) {
          SelectionData.SkillBuff.dp1.SecondLv = SecondMin;
        } else if (SecondMax < SecondLv) {
          SelectionData.SkillBuff.dp1.SecondLv = SecondMax;
        }

        return { HP_Rate: Lv * 2 };
      },
      Second: 80,
    }),
    pal1: new AddBuff("前線維持Ⅱ", {}, 28, {
      Root: "IsFrontLine",
      Change: () => { return {} }
    }),
    "hunter5-3": new AddBuff("狩人の知識", {}, 17, {
      Wepons: ["BG"],
      Root:"IsHunterDic",
      Change: () => { return {} }
    }),
    "skillbuff_mf1": new AddBuff("瑞風", { Distance: 15, CriticalDamege: 15, HIT: 150 }, 6, {
      SetWepons:{
        "KTN" : null,
        "BW" : "KTN"
      },
      Max: 3,
      Second:5,
      SecondLvMin: 0,
      Change: (Lv, SecondLv) => {
        const BaseBonus = Lv * SecondLv;
        return {
          Distance: BaseBonus,
          CriticalDamege: BaseBonus,
          HIT: 10 * BaseBonus
        };
      }
    }),
  },
  SimpleBuff: {
    IsBrave: new AddBuff("ブレイブオーラ", { WeponATK_Rate: 30 }, 20, {
      Root: "IsBrave",
      Change: (Lv) => {
        return {
          WeponATK_Rate: 30,
          HIT_Rate: Lv === 1 ? -50 : 0
        }
      },
      Max: 2,
    }),
    IsHighCycle: new AddBuff("ハイサイクル", { CSPD: 550 }, 20, { Root: "IsHighCycle" }),
    IsQuickMotion: new AddBuff("ｸｲｯｸﾓｰｼｮﾝ", { ASPD: 1100 }, 20, { Root: "IsQuickMotion" }),
    IsWarcry: new AddBuff("ウォークライ", { ATK_Rate: 10 }, 1),
    IsPriere: new AddBuff("プリエール", { MATK_Rate: 10 }, 11),
    IsPetBrave: new AddBuff("ブレイブアップ",
      { ATK: 75, ATK_Rate: 10, ASPD: 300, ASPD_Rate: 20 }, 23),
    IsPetMind: new AddBuff("マインドアップ",
      { MATK: 75, MATK_Rate: 10, CSPD: 300, CSPD_Rate: 20 }, 23),
    IsPetCut: new AddBuff("カットアップ",
      { Resist_Physical: 35, Resist_Magic: 35 }, 23),
    IsPetCri: new AddBuff("ｸﾘﾃｨｶﾙｱｯﾌﾟ", { CriticalDamege: 12 }, 23),
    IsEnhance: new AddBuff("エンハンス", {}, 9, { Root: "IsEnhance" }),
    IsStabilis: new AddBuff("スタビリス",
      { Critical_Rate: 40, Critical: 15 }, 9, { Root: "IsStabilis" }),
    IsHotKnows: new AddBuff("熱情の歌", {}, 25, {
      Root: "IsHotKnows",
      Change: () => { return {} },
    }),
    IsProtect: new AddBuff("プロテクション", { Resist_Physical: 30, Resist_Magic: -15 }, 15),
    IsAegis: new AddBuff("イージス", { Resist_Physical: -15, Resist_Magic: 30 }, 15),
    IsManaReCharge: new AddBuff("マナリチャージ", {}, 20, { Root: "IsManaReCharge" })
  },
  SelfBuff: {
    "mf1": new AddBuff("怪力乱神", { ATK: 100 }, 6, {
      Change: (Lv) => Object.fromEntries([["ATK", Lv * 10]]),
      Root: "IsKairiki",
    }),
    "mf2": new AddBuff("画竜点睛", {}, 6, {
      Root: "IsGaryoTensei",
      Wepons: ["BW","KTN"],
      SubWepons: ["BH", "SC", "KN"],
      Change: Lv => { return {} }
    }),
    "selfbuff_mf3": new AddBuff("一陣の風", {}, 6, {
      SetWepons:{
        "KTN" : null,
        "BW" : "KTN"
      },
      Root: "IsMONONOFWind",
      Max: 3,
      Default: 1,
      Change: Lv => { return SelectionData.SelfBuff.selfbuff_mf3.Base},
      Replacer: (Refs) => {
        const { SwordPower, SwordPower_Rate } = Refs.AdditionStatus.All;
        return {
          ATK : SwordPower,
          ATK_Rate: SwordPower_Rate,
          Hide_BaseWeponATK: SwordPower_Rate
        }
      }
    }),
    "selfbuff_mf4": new AddBuff("一陣の風・改", {}, 6, {
      SetWepons:{
        "KTN" : null,
        "BW" : "KTN"
      },
      Root: "IsMONONOFWind2",
      Change: () => { return {} }
    }),
    "ds1": new AddBuff("ﾌｨﾛｴｸﾚｰﾙ", { SwordPower_Rate: 10 }, 7,
      {
        Wepons: ["OH", "TH", "KTN", "BW", "BG", "SF", "MD", "HB", "MA", "BH"],
        Change: (Lv) => { return { SwordPower_Rate: Lv } },
      }
    ),
    "2-DSeclair": new AddBuff("フィロエクレール",
      { SwordPower_Rate: 10, WeponATK_Rate: 25 }, 7,
      { Wepons: ["DS"] }
    ),
    "ds3": new AddBuff("ｼｭﾂﾙﾑﾘｰﾊﾟｰ", { Distance: 100 }, 7,
      {
        Wepons: ["DS"],
        Root:"IsReaper",
        Change: (Lv) => {
          return { Distance: Lv < 10 ? 10 : Lv }
        },
        Max: 100
      },

    ),
    "ds4": new AddBuff("ﾊﾟﾘﾝｸﾞｿｰﾄﾞ", { ATK_Rate: 10, ASPD_Rate: 100 }, 7, {
      Wepons: ["DS"],
      Change: (Lv) => { return { ATK_Rate: Lv, ASPD_Rate: Lv * 10 } },
    }),
    "ds5": new AddBuff("ツインスラッシュ", {}, 7,
      {
        Wepons: ["DS"],
        Root: "IsTwinSrash",
      }),
    "ds6": new AddBuff("ｾｲﾊﾞｰｵｰﾗ", { ASPD_Rate: 1e4, HIT: 5000 }, 7, {
      Wepons: ["DS"],
      Change: (Lv, SecondLv) => {
        return {
          ASPD_Rate: 10 * Lv * SecondLv,
          HIT: 5 * Lv * SecondLv,
        }
      },
      Second: 100,
    }),
    "ds7": new AddBuff("ｱｰｸｾｲﾊﾞｰ", {}, 7, {
      Wepons: ["DS"],
      Root: "IsArcSaber",
      Change: (Lv) => { return {} },
    }),
    "4-OH": new AddBuff("ｵｰﾗﾌﾞﾚｰﾄﾞ", {}, 1,
      { Wepons: ["OH"], Root: "IsAuraBrade", RootValue: "OH" }
    ),
    "4-TH": new AddBuff("オーラブレード", {}, 1,
      { Wepons: ["TH"], Root: "IsAuraBrade", RootValue: "TH" }
    ),
    "4-DS": new AddBuff("オーラブレード", {}, 1,
      { Wepons: ["DS"], Root: "IsAuraBrade", RootValue: "DS" }
    ),
    "5-BusterBlade": new AddBuff("バスターブレード",
      { WeponATK_Rate: 10 }, 1,
      { Wepons: ["OH", "TH", "DS"] }
    ),
    "bw1": new AddBuff("パライズショット", { Stable: 10 }, 2,
      {
        SetWepons: {
          "BW": null,
          "BG": null,
          Any:"AR",
        },
      }
    ),
    "oh1-1": new AddBuff("シーカーリウス",
      { ATKPenetrate: 25, ATK: 100 }, 18,
      { Wepons: ["OH", "BG", "KTN", "SF", "HB", "MA", "BH"], SubWepons: ["KN", "SC"] }
    ),
    "oh1-2": new AddBuff("シーカーリウス",
      { ATKPenetrate: 10, ATK: 50 }, 18,
      { SubWepons: ["BH", "AR", "SH", "MD", "MA", "KTN", "OH"] }
    ),
    "ma1": new AddBuff("破壊者", { Stable: -10 }, 8,
      {
        Wepons: ["MA"],
        Root: "IsMABreaker",
        Replacer:(Refs)=>{
          return {
            Stable: -10,
            Hide_BaseWeponATK: Math.floor(Refs.OtherInfo.WeponATK * 0.5)
          }
        }
      }
    ),
    "ma2": new AddBuff("ｱｼｭﾗｵｰﾗ", { Critical: 75 }, 4,
      { Wepons: ["MA"], Root: "IsAshura" }
    ),
    "cr1": new AddBuff("ゴッドハンド", {}, 8,
      { Wepons: ["MA"], Max: 3, Root: "IsGodHand", Change: () => { return {} } }
    ),
    "ninja1": new AddBuff("風遁の術", {}, 19,
      {
        Wepons: ["BH", "OH", "SF", "MD", "KTN"],
        SubWepons: ["SC"],
        Root: "IsNinjaWind",
        Replacer: (Refs) => {
          const { IsNinja } = Refs.OtherInfo;
          if (!IsNinja > 0) return {};

          return {
            Critical: IsNinja,
            ASPD: Refs.Status.DEX_After,
            SwordPower_Rate: 10
          };
        }
      }),
    mg1: new AddBuff("ｵｰﾊﾞｰﾘﾐｯﾄ", { CSPD: -1000 }, 12, {
      Wepons: ["SF", "MD"],
      Root: "IsOverLimit",
      Change: (Lv) => { return { CSPD: Lv * -100 } },
    }),
    mg2: new AddBuff("急速チャージ", {}, 3, {
      SetWepons: {
        "SF": null,
        "MD": null,
        Any: "MD",
      },
      Root: "IsRapidChage",
      Change: () => { return SelectionData.SelfBuff.mg2.Base },
      Replacer: (Refs) => {
        const My = SelectionData.SelfBuff.mg2;
        const Result = {
          MATK: My.Lv * 10,
          MATKPenetrate: 0
        };

        const Penet = Refs.AdditionStatus.All?.MATKPenetrate ?? 0;
        if (Penet >= 50) return Result;

        Result["MATKPenetrate"] = My.Lv * 2 - ((Penet + My.Lv * 2) <= 50 ? 0 : (Penet + My.Lv * 2 - 50));

        return Result;
      },
      Max:15,
    }),
    mg3: new AddBuff("魔術研究", {}, 12, {
      Wepons: ["SF", "MD", "BH", "OH", "BG", "MA"],
      Root: "IsMagicResearch",
      Change: () => { return {} }
    }),
    mw1: new AddBuff("P:コンバージョン", {}, 10, {
      Weopons: ["OH", "BG", "MA"],
      SubWepons: ["MD"],
      Root:"IsActiveConversion",
    }),
    mw2: new AddBuff("ｴﾝﾁｬﾝﾄﾊﾞｰｽﾄ", {}, 10, {
      Wepons: ["OH", "BG", "MA"],
      SubWepons: ["MD"],
      Root: "IsEnchantedBurst"
    }),
    mw3: new AddBuff("ﾃﾞｭｱﾙﾌﾞﾘﾝｶﾞｰ-旧", {}, 10, {
      Weopons: ["OH", "BG", "MA"],
      SubWepons: ["MD"],
      Root:"IsDualBringer",
    }),
    mw4: new AddBuff("レゾナンス？", {}, 10, {
      SubWepons: ["MD"],
      Change: () => { return SelectionData.SelfBuff.mw4.Base },
      Replacer: (Refs) => {
        const My = SelectionData.SelfBuff.mw4;
        const Info = Refs.OtherInfo;
        const Lv = My.Lv;
        const SubSmelting = Info.SubSmelting;

        const Result = [
          {
            ATK: Lv * 2 + SubSmelting * 2,
            MATK: Lv * 2 + SubSmelting * 2
          },
          {
            ASPD: Lv * 25 + SubSmelting * 50,
            CSPD: Lv * 25 + SubSmelting * 50
          },
          {
            HIT: Lv * 2 + SubSmelting * 3 + 35,
            Critical: Lv * 2 + SubSmelting * 3 + 10,
          }
        ];
        if (Info.IsResonance_Power > 0) {
          Result[0].ATK = Math.floor(Result[0].ATK * (0.05 + Info.IsResonance_Power * 0.05));
          Result[0].MATK = Math.floor(Result[0].MATK * (0.05 + Info.IsResonance_Power * 0.05));

          return Result[0];
        }
        if (Info.IsResonance_Speed > 0) {
          Result[1].ASPD = Math.floor(Result[1].ASPD * (0.05 + Info.IsResonance_Speed * 0.05));
          Result[1].CSPD = Math.floor(Result[1].CSPD * (0.05 + Info.IsResonance_Speed * 0.05));        

          return Result[1];
        }
        if (Info.IsResonance_Hit > 0) {
          Result[2].HIT = Math.floor(Result[2].HIT * (0.05 + Info.IsResonance_Hit * 0.05));
          Result[2].Critical = Math.floor(Result[2].Critical * (0.05 + Info.IsResonance_Hit * 0.05));        

          return Result[2];          
        }
        return Result[Math.floor(3 * Math.random())];
      }
    }),
    sm1: new AddBuff("ｵｰｶﾞｽﾗｯｼｭ", {}, 1, {
      Wepons: ["TH"],
      Root: "IsOrgasSlash",
      Change: (Lv) => { return {} },
    }),
    "hunter5-1": new AddBuff("フォーカス", {
      LongDistance: 5,
      Distance:5
    }, 17, {
      Wepons:["BW","BG"],
      Root: "IsFocus",
      Change: () => SelectionData.SelfBuff["hunter5-1"].Base,
      Repacer: (Refs) => {
        const result = {
          LongDistance: Math.floor((Refs.OtherInfo.IsFocus ?? 0) / 2)
        }
        
        if (["KN", "SH"].includes(Refs.OtherInfo.SubWepon)) {
          result["Distance"] = Math.floor((Refs.OtherInfo.IsFocus ?? 0) / 2);
        }

        return result;
      }
    }),
    "hunter5-2": new AddBuff("ｶﾑﾌﾗｰｼﾞｭ", {
      Critical: 40, Hate: -60
    }, 17, {
      Root: "IsCamouflage",
      Change: (Lv) => {
        return {
          Critical: Lv * 4,
          Hate: - (20 + Lv * 4)
        };
      }
    }),
    "knight5-3": new AddBuff("ﾅｲﾄﾌﾟﾚｯｼﾞ", {}, 16, {
      Root: "IsKnightPledge",
      Root2: "IsKnightPledgeUser",
      Root3:"IsKnightPledgeSmelting",
      Second: 4,
      SecondLv: 1,
      Therd:15,
      Change: (Lv) => { return {} },
    }),
    "assassin5-1": new AddBuff("暗殺の極意", {}, 18, {
      Root:"IsAssassinationMaster"
    }),
    hb1: new AddBuff("トールハンマー", {},5,{
      Wepons: ["HB"],
      Root: "IsThorHammer",
      Replacer: (Refs) => {
        return {
          MATKPenetrate: 20,
          HIT: Refs.Status.INT
        }
      }
    }),
  },
  UserCustomBuff: {
  },
  OtherEquipmentEffect: {
    GuildHP: new AddBuff("おいしい食材取引", { HP: 1000 }, 27, {
      Change: (Lv) => { return { HP: Lv * 100 } },
      Max: 10,
    }),
    GuildMP: new AddBuff("新鮮な果物取引", { MP: 100 }, 27, {
      Change: (Lv) => { return { MP: Lv * 10 } },
      Max: 10,
    }),
    RegistletATK: new AddBuff("物理攻撃アップ", { ATK: 30 }, 26, {
      Change: (Lv) => { return { ATK: Lv } },
      Max: 30,
    }),
    RegistletMATK: new AddBuff("魔法攻撃アップ", { MATK: 30 }, 26, {
      Change: (Lv) => { return { MATK: Lv } },
      Max: 30,
    }),
    RegistletHP: new AddBuff("最大HPアップ", { HP: 1000 }, 26, {
      Change: (Lv) => { return { HP: Lv * 10 } },
      Max: 100,
    }),
    RegistletMP: new AddBuff("最大MPアップ", { MP: 100 }, 26, {
      Change: (Lv) => { return { MP: Lv } },
      Max: 100,
    }),
    RegistletHIT: new AddBuff("命中アップ", { HIT: 10 }, 26, {
      Change: (Lv) => { return { HIT: Lv } },
      Max: 10,
    }),
    RegistletFREE: new AddBuff("回避アップ", { FREE: 10 }, 26, {
      Change: (Lv) => { return { FREE: Lv } },
      Max: 10,
    }),
    RegistletASPD: new AddBuff("攻撃速度アップ", { ASPD: 100 }, 26, {
      Change: (Lv) => { return { ASPD: Lv } },
      Max: 100,
    }),
    RegistletCSPD: new AddBuff("魔法速度アップ", { CSPD: 100 }, 26, {
      Change: (Lv) => { return { CSPD: Lv } },
      Max: 100,
    }),
    RegistletDestiny: new AddBuff("運命共同体", { ATK_Rate: 3, MATK_Rate: 3 }, 26, {
      Change: (_, Second) => { return { ATK_Rate: Second, MATK_Rate: Second } },
      Max: 1,
      Second: 3
    }),
    RegistletFreeStance: new AddBuff("無の構え", {}, 26, {
      Change: () => { return {} },
      Max: 10,
      Root: "IsFreeStance",
    }),
    RegistletMagicArrow: new AddBuff("術式アロー・追撃", {}, 26, {
      Change: () => { return {} },
      Max: 4,
      Root: "IsMagicArrow",
    }),
    RegistletAirSlide: new AddBuff("エアスライド・圧縮", {}, 26, {
      Change: () => { return {} },
      Max: 10,
      Root: "IsAirSlide",
    }),
    RegistletAssassinStub: new AddBuff("アサシンスタブ・強化", {}, 26, {
      Change: () => { return {} },
      Max: 10,
      Root: "IsAssassinStub",
    }),
    ResistletResonance_Power: new AddBuff("レゾナンス・火力", {}, 26, {
      Change: () => { return {} },
      Max: 9,
      Root: "IsResonance_Power"
    }),
    ResistletResonance_Speed: new AddBuff("レゾナンス・加速", {}, 26, {
      Change: () => { return {} },
      Max: 9,
      Root: "IsResonance_Speed"
    }),
    ResistletResonance_Hit: new AddBuff("レゾナンス・集中", {}, 26, {
      Change: () => { return {} },
      Max: 9,
      Root: "IsResonance_Hit"
    }),
    ResistletRuna: new AddBuff("ﾙｰﾅﾃﾞｨｻﾞｽﾀｰ・強襲", {}, 26, {
      Change: () => { return {} },
      Max:1,
      Root: "IsStrongRuna"
    }),
  },
  Skill: {
    0: {
      Name: "カスタム入力",
      Torauma: Torauma.Nomal,
      Group: "All",
      Count: 1,
      MP: 100,
      First: {
        Base: new PhysicsSkill(100, 0, 8, true, true, null)
      }
    },
    "Sword-1-10": {
      Name: "ハードヒット",
      Tree: SkillTree.Brede,
      Group: "Sword",
      Wepon: ["OH", "TH"],
      Count: 1,
      MP: 100,
      First: {
        Base: new PhysicsSkill(150, 100, 4, true)
      }
    },
    "Sword-3-10": {
      Name: "バスターブレード",
      Tree: SkillTree.Brede,
      Torauma: Torauma.Physical,
      Group: "Sword",
      Wepon: ["OH", "TH"],
      Count: 3,
      MP: 300,
      First: {
        Base: new PhysicsSkill(750, 300, 7, true, false, { AbsCrit: true }),
        Power: Refs => {
          const Wepon = Refs.OtherInfo.Wepon;
          
          if (Wepon === "OH") {
            const BaseBonus = Refs.Status.DEX / 2;
            const AuraPassive = Refs.OtherInfo.IsPassiveAuraBrade;

            if (AuraPassive > 0)
              return BaseBonus * 2 + AuraPassive * 20;
            else
              return BaseBonus;
          } else if (Wepon === "TH") {
            return Refs.Status.STR;
          } else {
            return 0;
          }
        },
        Effect: "片手剣装備時：威力+基礎DEX/2%\n両手剣装備時：威力+基礎STR%",
      }
    },
    "Sword-4-10": {
      Name: "メテオブレイカー",
      Tree: SkillTree.Brede,
      Torauma: Torauma.Physical,
      Group: "Sword",
      Wepon: ["OH", "TH"],
      Count: 2,
      MP: 600,
      First: {
        Base: new PhysicsSkill(600, 600, 4, true),
        Power: Refs => (Refs.OtherInfo.Wepon === "TH" ? 200 + Refs.Status.STR / 10 : 0),
        Effect:"両手剣装備時：威力+200% + 基礎STR/10%"
      },
      Second: {
        Base: new PhysicsSkill(600, 0, 4, true),
        Power: Refs => (Refs.OtherInfo.Wepon === "OH" ? Refs.Status.DEX / 2 : 0),
        Effect:"片手剣装備時：威力+基礎DEX/2%"
      },
    },
    "Sword-5-10": {
      Name: "ムーンスラッシュ",
      Tree: SkillTree.Brede,
      Torauma: Torauma.Physical,
      Group: "Sword",
      Wepon: ["OH", "TH", "DS"],
      Count: 2,
      MP: 400,
      First: {
        Base: new PhysicsSkill(1000, 400, 4, true),
      },
      Second: {
        Base: new PhysicsSkill(0, 0, 3, true),
        Power: Refs => Refs.Status.STR_After,
        Fixed: Refs => Refs.Status.INT / 2,
        Effect:"威力+補正後STR%\n固定値+基礎INT/2"
      }
    },
    "Sword-5-20": {
      Name: "オーラブレード",
      Tree: SkillTree.Brede,
      Torauma: Torauma.Physical,
      Group: "Sword",
      Wepon: ["OH", "TH", "DS"],
      Count: 2,
      MP: 200,
      First: {
        Base: new PhysicsSkill(1500, 200, 8, true, false)
      }
    },
    "Sword-5-30-1": {
      Name: "シャットアウト(通常)",
      Tree: SkillTree.Brede,
      Torauma: Torauma.Physical,
      Group: "Sword",
      Wepon: ["OH", "TH", "DS"],
      Count: 1,
      MP: 100,
      First: {
        Base: new PhysicsSkill(500, 100, 3, true),
        Power: Refs => {
          const Wep = Refs.OtherInfo.Wepon;
          if (Wep === "TH") return 1000;
          if (Wep === "OH") return Math.floor(Refs.Status.DEX / 2);
          if (Wep === "DS") return Math.floor(Refs.Status.AGI / 4);
          return 0;
        },
        Fixed: Refs => Refs.OtherInfo.Wepon === "DS" ? 100 : 0,
        Effect:"両手剣装備時：威力+1000%\n片手剣装備時：威力+基礎DEX/2%\n双剣装備時：威力+基礎AGI/4%\n双剣装備時：固定値+100"
      }
    },
    "Sword-5-30-2": {
      Name: "シャットアウト(出血付与時)",
      Torauma: Torauma.Physical,
      Tree: SkillTree.Brede,
      Group: "Sword",
      Wepon: ["OH", "TH", "DS"],
      Count: 1,
      MP: 100,
      First: {
        Base: new PhysicsSkill(500, 100, 3, true),
        Power: Refs => {
          const Wep = Refs.OtherInfo.Wepon;
          if (Wep === "TH") return 1500;
          if (Wep === "OH") return 2000 + Math.floor(Refs.Status.DEX / 2) * 2;
          if (Wep === "DS") return 2000 + Math.floor(Refs.Status.AGI / 4) * 2;
          return 0;
        },
        Fixed: Refs => Refs.OtherInfo.Wepon === "DS" ? 100 : 0,
        Addition: {
          ATKPenetrate: (Refs) => {
            const Wep = Refs.OtherInfo.Wepon;
            if (["OH", "DS"].includes(Wep) == false) return 0;

            const BasePenet = Refs.AdditionStatus.All.ATKPenetrate;
            return BasePenet * (Wep === "OH" ? 3 : 1);
          }
        },
        Effect:"両手剣装備時：威力+1500%\n片手剣装備時：威力+2000% + 基礎DEX% 物理貫通4倍計算\n双剣装備時：威力+2000% + 基礎AGI/2% 物理貫通2倍計算\n双剣装備時：固定値+100"
      }
    },
    "Sword-5-40": {
      Name: "オーガスラッシュ",
      Tree: SkillTree.Brede,
      Group: "Sword",
      Wepon: ["TH"],
      Count: 2,
      MP: 500,
      First: {
        Base: new PhysicsSkill(0, 0, 3, true, false),
        Power: Refs => Refs.OtherInfo.Wepon === "TH" ? (Refs.Status.STR + Refs.Status.VIT) : 0,
        Fixed: Refs => Refs.OtherInfo.Wepon === "TH" ? Refs.Status.DEX_After : 0,
        Addition: {
          ATKPenetrate: Refs => {
            const Skill = Refs.OtherInfo.IsOrgasSlash;
            if (Skill === false) return 0;

            return 10 * Skill;
          }
        },
        Effect:"両手剣装備時：威力+(基礎STR+基礎VIT)% 固定値+補正後DEX",
      },
      Second: {
        Base: new PhysicsSkill(0, 500, 3, true, false),
        Power: Refs => {
          const Skill = Refs.OtherInfo.IsOrgasSlash;
          if (Skill === false) return 0;

          return 200 * Skill;
        },
        Addition: {
          ATKPenetrate: Refs => {
            const Skill = Refs.OtherInfo.IsOrgasSlash;
            if (Skill === false) return 0;

            return 10 * Skill;
          }
        },
      },
    },
    "Night-4-10": {
      Name: "ルヴニール",
      Tree: SkillTree.Knight,
      Torauma: Torauma.No,
      ShowTorauma: Torauma.Physical,
      Group: "Sword",
      Count: 3,
      MP: 400,
      First: {
        Base: new PhysicsSkill(600, 400, 4, true),
        Power: Refs => Refs.Status.DEX * 2,
        Effect:"威力+基礎DEX×2%"
      },
      Second: {
        Base: new PhysicsSkill(600, 400, 4, true),
        Power: Refs => Refs.Status.DEX * 2,
        Effect:"威力+基礎DEX×2%"
      },
      Therd: {
        Base: new PhysicsSkill(600, 400, 4, true),
        Power: Refs => Refs.Status.DEX * 2,
        Effect:"威力+基礎DEX×2%"
      },
    },
    "Shoot-4-10-1": {
      Name: "クロスファイア(3溜め)",
      Tree: SkillTree.Shoot,
      Torauma: Torauma.Physical,
      Group: "Shoot",
      Wepon: ["BW", "BG"],
      Count: 4,
      MP: 400,
      First: {
        Base: new PhysicsSkill(2700, 400, 12, true),
        Power: Refs => (Refs.OtherInfo.Wepon === "BW" ? 50 + Refs.Status.DEX / 5 : 0) * 3,
        Effect: "弓装備時：威力+50% + 基礎DEX/5%"
      },
      Second: {
        Base: new PhysicsSkill(400, 400, 12, false),
        Power: Refs => (Refs.OtherInfo.Wepon === "BG" ? 200 : 0),
        Addition: {
          ATKPenetrate: Refs => (Refs.OtherInfo.Wepon === "BG") ? Refs.Status.DEX / 10 : 0
        },
        Effect:"自動弓装備時：威力+100×(溜め-1)% 物理貫通+基礎DEX/10%"
      },
    },
    "Shoot-4-10-2": {
      Name: "クロスファイア(3溜め)+デコイ",
      Tree: SkillTree.Shoot,
      Torauma: Torauma.Physical,
      Group: "Shoot",
      Wepon: ["BW", "BG"],
      Count: 4,
      MP: 400,
      First: {
        Base: new PhysicsSkill(2700, 400, 12, true),
        Power: Refs => (Refs.OtherInfo.Wepon === "BW" ? 50 + Refs.Status.DEX / 5 : 0) * 3,
        Effect: "弓装備時：威力+50% + 基礎DEX/5%"
      },
      Second: {
        Base: new PhysicsSkill(400, 400, 12, false),
        Power: Refs => (Refs.OtherInfo.Wepon === "BG" ? 200 : 0),
        Addition: {
          ATKPenetrate: Refs => (Refs.OtherInfo.Wepon === "BG") ? Refs.Status.DEX / 10 : 0
        },
        Effect:"自動弓装備時：威力+100×(溜め-1)% 物理貫通+基礎DEX/10%"
      },
      Therd: {
        Base: new PhysicsSkill(540, 80, 12, true),
      },
    },
    "Shoot-4-10-3-Edit": {
      Name: "クロスファイア(溜め可変)",
      Tree: SkillTree.Shoot,
      Torauma: Torauma.Physical,
      Group: "Shoot",
      Wepon: ["BW", "BG"],
      Count: 4,
      MP: 400,
      Charge: new SkillCharge(1, 1, 5),
      ChargeType: SkillChargeType.Stock,
      First: {
        Base: new PhysicsSkill(0, 400, 12, true),
        Power: Refs => {
          const WeponBonus = Refs.OtherInfo.Wepon === "BW" ? 50 + Refs.Status.DEX / 5 : 0;
          return (WeponBonus + 900) * Refs.OtherInfo.ChargeLv;
        },
        Effect: "弓装備時：威力+50% + 基礎DEX/5%"
      },
      Second: {
        Base: new PhysicsSkill(0, 0, 12, false),
        Power: Refs => {
          const WeponBonus = Refs.OtherInfo.Wepon === "BG" ? 100 : 0;
          return (WeponBonus + 200) * (Refs.OtherInfo.ChargeLv - 1);
        },
        Fixed: Refs => Refs.OtherInfo.ChargeLv > 1 ? 400 : 0,
        Addition: {
          ATKPenetrate: Refs => (Refs.OtherInfo.Wepon === "BG") ? Refs.Status.DEX / 10 : 0
        },
        Effect:"自動弓装備時：威力+100×(溜め-1)% 物理貫通+基礎DEX/10%"
      }
    },
    "Shoot-4-10-4-Edit": {
      Name: "クロスファイア(溜め可変)+デコイ",
      Tree: SkillTree.Shoot,
      Torauma: Torauma.Physical,
      Group: "Shoot",
      Wepon: ["BW", "BG"],
      Count: 4,
      MP: 400,
      Charge: new SkillCharge(1, 1, 5),
      ChargeType: SkillChargeType.Stock,
      First: {
        Base: new PhysicsSkill(0, 400, 12, true),
        Power: Refs => {
          const WeponBonus = Refs.OtherInfo.Wepon === "BW" ? 50 + Refs.Status.DEX / 5 : 0;
          return (WeponBonus + 900) * Refs.OtherInfo.ChargeLv;
        },
        Effect: "弓装備時：威力+50% + 基礎DEX/5%"
      },
      Second: {
        Base: new PhysicsSkill(0, 0, 12, false),
        Power: Refs => {
          const WeponBonus = Refs.OtherInfo.Wepon === "BG" ? 100 : 0;
          return (WeponBonus + 200) * (Refs.OtherInfo.ChargeLv - 1);
        },
        Fixed: Refs => Refs.OtherInfo.ChargeLv > 1 ? 400 : 0,
        Addition: {
          ATKPenetrate: Refs => (Refs.OtherInfo.Wepon === "BG") ? Refs.Status.DEX / 10 : 0
        },
        Effect:"自動弓装備時：威力+100×(溜め-1)% 物理貫通+基礎DEX/10%"
      },
      Therd: {
        Base: new PhysicsSkill(0, 80, 12, true),
        Power: Refs => 180 * Refs.OtherInfo.ChargeLv
      },
    },
    "Shoot-5-10-1": {
      Name: "旋身番撃ち",
      Tree: SkillTree.Shoot,
      Torauma: Torauma.Physical,
      Group: "Shoot",
      Count: 1,
      MP: 300,
      First: {
        Base: new PhysicsSkill(1000, 300, 12, true),
        Power: Refs => Refs.Status.DEX,
        Effect:"威力+基礎DEX%"
      }, 
    },
    "Shoot-5-10-2": {
      Name: "旋身番撃ち(追撃のみ+最大値)",
      Tree: SkillTree.Shoot,
      Torauma: Torauma.Physical,
      Group: "Shoot",
      Count: 1,
      MP: 300,
      First: {
        Base: new PhysicsSkill(100, 0, 0, true, false, { NoneCombo : true }),
        Power: Refs => Refs.Status.DEX_After / 2,
        Addition: { ATKPenetrate: 50 },
        Effect:"威力+補正後DEX/2%"
      },  
    },
    "Shoot-5-10-21": {
      Name: "旋身番撃ち(追撃のみ+最大値)2",
      Tree: SkillTree.Shoot,
      Torauma: Torauma.Physical,
      Group: "Shoot",
      Count: 1,
      MP: 300,
      First: {
        Base: new PhysicsSkill(100, 0, 0, true),
        Power: Refs => Refs.Status.DEX_After / 2,
        Addition: { ATKPenetrate: 50 },
        Effect:"威力+補正後DEX/2%"
      },  
    },
    "Shoot-5-20-1": {
      Name: "コンクェスター",
      Tree: SkillTree.Shoot,
      Torauma: Torauma.Physical,
      Group: "Shoot",
      Count: 1,
      MP: 1200,
      First: {
        Base: new PhysicsSkill(1500, 1200, 8, "MaxDistance"),
        Power: Refs => {
          if (Refs.OtherInfo.IsTwinStorm >= 5) {
            return Refs.Status.DEX * 2 - (Refs.OtherInfo.SubWepon === "KTN"
          ? Refs.Status.DEX * 2
          : Refs.OtherInfo.SubWepon === "MD"
            ? Refs.Status.DEX * 2 + Refs.Status.INT
                : 0) + 1500;
            
          } else {
            return Refs.Status.DEX - (Refs.OtherInfo.SubWepon === "KTN"
              ? Refs.Status.DEX
              : Refs.OtherInfo.SubWepon === "MD"
                ? Refs.Status.DEX - Refs.Status.INT / 2
                : 0);
            
          }
        },
        Fixed: Refs => Refs.OtherInfo.SubWepon === "KTN" || Refs.OtherInfo.SubWepon === "MD" ? -600 : 0,
      },
      Effect:"抜刀剣装備時：固定値-600\n魔道具装備時：威力+基礎INT/2% 固定値-600\n上記以外：威力+基礎DEX%"
    },
    "Shoot-5-30-1": {
      Name: "パラボラキャノン",
      Tree: SkillTree.Shoot,
      Torauma: Torauma.Physical,
      Group: "Shoot",
      Count: 1,
      MP: 400,
      First: {
        Base: new PhysicsSkill(1000, 400, 11, "AbsLongDistance", false, { IsLongRange: true }),
        Power: Refs => Refs.Status.DEX_After,
        Effect:"威力+補正後DEX%"
      },
    },
    "Shoot-5-30-2": {
      Name: "パラボラキャノン(+トラップ)",
      Tree: SkillTree.Shoot,
      Torauma: Torauma.Physical,
      Group: "Shoot",
      Count: 1,
      MP: 400,
      First: {
        Base: new PhysicsSkill(1000, 400, 11, "AbsLongDistance", false, { IsLongRange: true }),
        Power: Refs => Refs.Status.DEX_After,
        Effect:"威力+補正後DEX%"
      },
      Second: {
        Base: new PhysicsSkill(1250, 400, 11, "AbsLongDistance", false, { IsLongRange: true }),
        Power: Refs => Refs.Status.DEX,
        Effect:"威力+基礎DEX%"
      },
    },
    "Shoot-5-40-1": {
      Name: "ワイドスプレッド(1hit)",
      Tree: SkillTree.Shoot,
      Torauma: Torauma.Physical,
      Group: "Shoot",
      Count: 5,
      MP: 200,
      First: {
        Base: new PhysicsSkill(300, 200, 12, false, false, { Penetration: 80, IsLongRange: false }),
        Effect:"防御無視80%(スキルLv:10)",
      },
    },
    "Shoot-5-40-2": {
      Name: "ワイドスプレッド(5hit)",
      Tree: SkillTree.Shoot,
      Torauma: Torauma.Physical,
      Group: "Shoot",
      Count: 5,
      MP: 200,
      First: {
        Base: new PhysicsSkill(300, 200, 12, false, false, { Penetration: 80, IsLongRange: false }),
        Effect:"防御無視80%(スキルLv:10)",
      },
      Second: {
        Base: new PhysicsSkill(300, 200, 12, false, false, { Penetration: 80, IsLongRange: false }),
        Effect:"防御無視80%(スキルLv:10)",
      },
      Therd: {
        Base: new PhysicsSkill(300, 200, 12, false, false, { Penetration: 80, IsLongRange: false }),
        Effect:"防御無視80%(スキルLv:10)",
      },
      Fourth: {
        Base: new PhysicsSkill(300, 200, 12, false, false, { Penetration: 80, IsLongRange: false }),
        Effect:"防御無視80%(スキルLv:10)",
      },
      Fifth: {
        Base: new PhysicsSkill(300, 200, 12, false, false, { Penetration: 80, IsLongRange: false }),
        Effect:"防御無視80%(スキルLv:10)",
      }
    },
    "Shoot-5-50-1": {
      Name: "ペネトレイター(5hit)",
      Tree: SkillTree.Shoot,
      Torauma: Torauma.Physical,
      Group: "Shoot",
      Count: 5,
      MP: 600,
      First: {
        Base: new PhysicsSkill(1250, 600, 12, true, false),
        Power: Refs => Refs.Status.DEX / 2,
        Fixed: Refs => {
          const def = Data.Method._GetCalcEnemyDefense(Refs, "First", true);
          return Math.floor(def *0.25);
        },
        Effect:"威力+基礎DEX/2%　固定値+敵の計算後DEFの25%",
      },
      Second: {
        Base: new PhysicsSkill(1250, 600, 12, true, false),
        Power: Refs => Refs.Status.DEX / 2,
        Fixed: Refs => {
          const def = Data.Method._GetCalcEnemyDefense(Refs, "First", true);
          return Math.floor(def *0.5);
        },
        Effect:"威力+基礎DEX/2%　固定値+敵の計算後DEFの50%",
      },
      Therd: {
        Base: new PhysicsSkill(1250, 600, 12, true, false),
        Power: Refs => Refs.Status.DEX / 2,
        Fixed: Refs => {
          const def = Data.Method._GetCalcEnemyDefense(Refs, "First", true);
          return Math.floor(def *0.75);
        },
        Effect:"威力+基礎DEX/2%　固定値+敵の計算後DEFの75%",
      },
      Fourth: {
        Base: new PhysicsSkill(1250, 600, 12, true, false),
        Power: Refs => Refs.Status.DEX / 2,
        Fixed: Refs => {
          return Data.Method._GetCalcEnemyDefense(Refs, "First", true);
        },
        Effect:"威力+基礎DEX/2%　固定値+敵の計算後DEF",
      },
      Fifth: {
        Base: new PhysicsSkill(1250, 600, 12, true, false),
        Power: Refs => Refs.Status.DEX / 2,
        Fixed: Refs => {
          const enemy = Refs.OtherInfo.Enemy;
          return Data.Method._GetCalcEnemyDefense(Refs, "First", true);
        },
        Effect:"威力+基礎DEX/2%　固定値+敵の計算後DEF",
      },
    },
    "Hunter-3-10": {
      Name: "サンライズアロー",
      Tree: SkillTree.Hunter,
      Torauma: Torauma.Physical,
      Group: "Shoot",
      Count: 1,
      MP: 200,
      First: {
        Base: new PhysicsSkill(200, 200, 12, true),
        Power: Refs => (Refs.OtherInfo.SubWepon === "AR" || Refs.OtherInfo.IsBGHunter) ? Refs.Status.DEX_After : 0,
      },
      Effect:"矢装備時：威力+補正後DEX%\n"
    },
    "Hunter-3-20": {
      Name: "サイクロンアロー",
      Tree: SkillTree.Hunter,
      Torauma: Torauma.Physical,
      Group: "Shoot",
      Count: 1,
      MP: 100,
      First: {
        Base: new PhysicsSkill(100, 100, 12, true, false, null),
        Power: Refs => Refs.OtherInfo.SubWepon === "AR" ? Math.floor(Refs.Status.DEX_After / 2) : 0,
      },
      Effect:"矢装備時：補正後DEX/2%"
    },
    "Hunter-4-10": {
      Name: "サテライトアロー",
      Tree: SkillTree.Hunter,
      Torauma: Torauma.Physical,
      Group: "Shoot",
      Count: 3,
      MP: 300,
      First: {
        Base: new PhysicsSkill(1000, 300, 12, false),
        Power: Refs => (Refs.OtherInfo.SubWepon === "AR" || Refs.OtherInfo.IsBGHunter) ? Math.floor(Refs.Status.DEX_After) : 0,
        Addition: { ATKPenetrate: 100 },
        Effect:"矢装備時：威力+補正後DEX%"
      },
      Second: {
        Base: new PhysicsSkill(1000, 300, 12, false),
        Power: Refs => (Refs.OtherInfo.SubWepon === "AR" || Refs.OtherInfo.IsBGHunter) ? Math.floor(Refs.Status.DEX_After) : 0,
        Addition: { ATKPenetrate: 100 },
        Effect:"矢装備時：威力+補正後DEX%"
      },
      Therd: {
        Base: new PhysicsSkill(1000, 300, 12, false),
        Power: Refs => (Refs.OtherInfo.SubWepon === "AR" || Refs.OtherInfo.IsBGHunter) ? Math.floor(Refs.Status.DEX_After) : 0,
        Addition: { ATKPenetrate: 100 },
        Effect:"矢装備時：威力+補正後DEX%"
      },
    },
    "Hunter-4-20-1": {
      Name: "バーティカルエア(距離0-3m)",
      Tree: SkillTree.Hunter,
      Torauma: Torauma.Physical,
      Group: "Shoot",
      Count: 3,
      MP: 400,
      First: {
        Base: new PhysicsSkill(750, 250, 12, "Distance", false, null),
      }
    },
    "Hunter-4-20-2": {
      Name: "バーティカルエア(距離4-7m)",
      Tree: SkillTree.Hunter,
      Torauma: Torauma.Physical,
      Group: "Shoot",
      Count: 3,
      MP: 400,
      First: {
        Base: new PhysicsSkill(750, 250, 12, "Distance", false, null),
      },
      Second: {
        Base: new PhysicsSkill(500, 100, 12, "Distance", false, null),
        Addition: {
          ATKPenetrate: Refs => 25 + (Refs.OtherInfo.SubWepon === "AR" ? 25 : 0),
        },
        Effect:"矢装備時：物理貫通+25%"
      }
    },
    "Hunter-4-20-3": {
      Name: "バーティカルエア(距離8m以上)",
      Tree: SkillTree.Hunter,
      Torauma: Torauma.Physical,
      Group: "Shoot",
      Count: 3,
      MP: 400,
      First: {
        Base: new PhysicsSkill(750, 250, 12, "LongDistance", false, null),
      },
      Second: {
        Base: new PhysicsSkill(500, 100, 12, "LongDistance", false, null),
        Addition: {
          ATKPenetrate: Refs => 25 + (Refs.OtherInfo.SubWepon === "AR" ? 25 : 0),
        },
        Effect:"矢装備時：物理貫通+25%"
      },
      Therd: {
        Base: new PhysicsSkill(250, 50, 12, "LongDistance", false, null),
        Addition: {
          ATKPenetrate: Refs => 50 + (Refs.OtherInfo.SubWepon === "AR" ? 50 : 0),
        },
        Effect:"矢装備時：物理貫通+50%"
      }
    },
    "Hunter-4-30-1": {
      Name: "マルチプル(汎)-シャープスナイプ",
      Tree: SkillTree.Hunter,
      Torauma: Torauma.Physical,
      Group: "Shoot",
      Count: 1,
      MP: 200,
      First: {
        Base: new PhysicsSkill(1000, 200, 12, true, false, null),
        Power: (Refs) => {
          const Bonus = Refs.Status.DEX / 2;
          const Buff = (Refs.OtherInfo.IsHunterDic ?? 0) * 25;
          
          return Bonus + Buff;
        },
        Effect:"威力+基礎DEX/2%"
      }
    },
    "Hunter-4-30-2": {
      Name: "マルチプル(短剣)-ヴォルフアサルト",
      Tree: SkillTree.Hunter,
      Torauma: Torauma.Physical,
      Group: "Shoot",
      Count: 1,
      MP: 200,
      First: {
        Base: new PhysicsSkill(1000, 200, 12, true, false, null),
        Power: Refs => {
          const Bonus = Refs.OtherInfo.SubWepon === "KN" ? Refs.Status.AGI_After : 0;
          const Buff = (Refs.OtherInfo.IsHunterDic ?? 0) * 25;

          return Bonus + Buff
        },
        Split: 2,
        Effect:"短剣装備時：威力+補正後AGI%"
      },
      Second: {
        Base: new PhysicsSkill(1000, 200, 12, true, false, null),
        Power: Refs => {
          const Bonus = Refs.OtherInfo.SubWepon === "KN" ? Refs.Status.AGI_After : 0;
          const Buff = (Refs.OtherInfo.IsHunterDic ?? 0) * 25;

          return Bonus + Buff
        },
        Split: 2,
        Effect:"短剣装備時：威力+補正後AGI%"
      },
    },
    "Hunter-4-30-3": {
      Name: "マルチプル(盾)-シャッスギャルド",
      Tree: SkillTree.Hunter,
      Torauma: Torauma.Physical,
      Group: "Shoot",
      Count: 1,
      MP: 200,
      First: {
        Base: new PhysicsSkill(1000, 200, 12, true, false, null),
        Power: Refs => {
          const Bonus = Refs.OtherInfo.SubWepon === "SH" ? Refs.Status.VIT_After : 0;
          const Buff = (Refs.OtherInfo.IsHunterDic ?? 0) * 25;

          return Bonus + Buff
        },
        Effect:"盾装備時：威力+補正後VIT%"
      }
    },
    "Hunter-4-30-4": {
      Name: "マルチプル(魔道具)-ハイレインスナイプ",
      Tree: SkillTree.Hunter,
      Torauma: Torauma.Magic,
      Group: "Shoot",
      Count: 1,
      MP: 200,
      First: {
        Base: new MagicSkill(750, 200, 12, true, null),
        Power: (Refs) => (Refs.OtherInfo.IsHunterDic ?? 0) * 25,
      },
      Second: {
        Base: new PhysicsSkill(750, 200, 12, true, false, null),
        Power: (Refs) => (Refs.OtherInfo.IsHunterDic ?? 0) * 25,
      }
    },
    "Magic-1-10-1": {
      Name: "術式/アロー(1hit)",
      Tree: SkillTree.Magic,
      Torauma: Torauma.Magic,
      Group: "Magic",
      Count: 6,
      MP: 100,
      First: {
        Base: new MagicSkill(125, 140, 12, true),
        Power: Refs => Refs.OtherInfo.Wepon === "SF" ? 25 : 0,
        Effect:"杖装備時：威力+25%"
      },
    },
    "Magic-1-10-2": {
      Name: "術式/アロー(Fullhit)",
      Tree: SkillTree.Magic,
      Torauma: Torauma.Magic,
      Group: "Magic",
      Count: 6,
      MP: 100,
      First: {
        Base: new MagicSkill(0, 140, 12, true),
        Power: Refs => {
          const PowerBase = 125 + (Refs.OtherInfo.Wepon === "SF" ? 25 : 0);
          const Regist = Refs.OtherInfo.IsMagicArrow;
          const BaseHit = Refs.OtherInfo.Wepon === "MD" ? 8 : 6;

          if (!Regist) return PowerBase * BaseHit;
          return PowerBase * (BaseHit + Number(Regist));
        },
        Effect:"杖装備時：威力+25%"
      }
    },
    "Magic-2-10-1": {
      Name: "術式/ランサー(1hit)",
      Tree: SkillTree.Magic,
      Torauma: Torauma.Magic,
      Group: "Magic",
      Count: 3,
      MP: 300,
      First: {
        Base: new MagicSkill(400, 340, 12, true),
        Power: Refs => (Refs.OtherInfo.Wepon === "SF"
          ? 150 + Refs.Status.INT_After / 5
          : (Refs.OtherInfo.Wepon === "MD" || Refs.OtherInfo.SubWepon === "MD")
            ? Refs.Status.INT_After / 5
            : 0
        ),
        Effect:"杖装備時：威力+150 + 補正後INT/5%\n魔道具装備時：威力+補正後INT/5%"
      },
    },
    "Magic-2-10-2": {
      Name: "術式/ランサー(Fullhit)",
      Tree: SkillTree.Magic,
      Torauma: Torauma.Magic,
      Group: "Magic",
      Count: 3,
      MP: 300,
      First: {
        Base: new MagicSkill(400, 340, 12, true),
        Power: Refs => (Refs.OtherInfo.Wepon === "SF"
          ? 150 + Refs.Status.INT_After / 5
          : (Refs.OtherInfo.Wepon === "MD" || Refs.OtherInfo.SubWepon === "MD")
            ? Refs.Status.INT_After / 5
            : 0
        ),
        Effect:"杖装備時：威力+150 + 補正後INT/5%\n魔道具装備時：威力+補正後INT/5%"
      },
      Second: {
        Base: new MagicSkill(400, 340, 12, true),
        Power: Refs => (Refs.OtherInfo.Wepon === "SF"
          ? 150 + Refs.Status.INT_After / 5
          : (Refs.OtherInfo.Wepon === "MD" || Refs.OtherInfo.SubWepon === "MD")
            ? Refs.Status.INT_After / 5
            : 0
        ),
        Effect:"杖装備時：威力+150 + 補正後INT/5%\n魔道具装備時：威力+補正後INT/5%"
      },
      Therd: {
        Base: new MagicSkill(400, 340, 12, true),
        Power: Refs => (Refs.OtherInfo.Wepon === "SF"
          ? 150 + Refs.Status.INT_After / 5
          : (Refs.OtherInfo.Wepon === "MD" || Refs.OtherInfo.SubWepon === "MD")
            ? Refs.Status.INT_After / 5
            : 0
        ),
        Effect:"杖装備時：威力+150 + 補正後INT/5%\n魔道具装備時：威力+補正後INT/5%"
      },
      Fourth: {
        Base: new MagicSkill(0, 340, 12, true),
        Power: Refs => {
          const { Wepon, SubWepon } = Refs.OtherInfo.Wepon;
          if (Wepon === "SF") return 0;
          if (Wepon !== "MD" && SubWepon !== "MD") return 0;

          return 400 + Refs.Status.INT_After / 5;
        },
        Effect:"魔道具装備時：威力+補正後INT/5%"
      },
      Fifth: {
        Base: new MagicSkill(0, 340, 12, true),
        Power: Refs => {
          const { Wepon, SubWepon } = Refs.OtherInfo.Wepon;
          if (Wepon === "SF") return 0;
          if (Wepon !== "MD" && SubWepon !== "MD") return 0;

          return 400 + Refs.Status.INT_After / 5;
        },
        Effect:"魔道具装備時：威力+補正後INT/5%"
      },
    },
    "Magic-2-20": {
      Name: "術式/ブラスト",
      Tree: SkillTree.Magic,
      Torauma: Torauma.Magic,
      Group: "Magic",
      Count: 1,
      MP: 300,
      First: {
        Base: new MagicSkill(1000,380, 4, true),
        Power: (Refs) => {
          const { Wepon } = Refs.OtherInfo;
          if (Wepon === "SF") return 150 + Refs.Status.INT_After / 5;
          if (Wepon === "MD") return Refs.Status.INT_After / 5;
          return 0;
        },
        Effect: "杖装備時：威力+150+補正後INT/5\n魔道具装備時：威力+補正後INT/5"
      }
    },
    "Magic-3-10": {
      Name: "術式/インパクト",
      Tree: SkillTree.Magic,
      Torauma: Torauma.Magic,
      Group: "Magic",
      Count: 1,
      MP: 200,
      First: {
        Base: new MagicSkill(250, 200, 3, true, { Attribute: SkillAttribute.No }),
        Power: Refs => {
          const { Wepon, SubWepon } = Refs.OtherInfo;
          if (Wepon === "SF") return 0;
          if (Wepon === "MD" || SubWepon === "MD") return 250;
          return 0;
        }
      },
      Effect:"魔道具装備時：威力+250%"
    },
    "Magic-3-20-1": {
      Name: "術式/ストーム(1/6hit)",
      Tree: SkillTree.Magic,
      Torauma: Torauma.Magic,
      Group: "Magic",
      Count: 6,
      MP: 400,
      First: {
        Base: new MagicSkill(200, 420, 12, true),
        Power: Refs => Refs.OtherInfo.Wepon === "SF" ? 100 : 0,
        Effect:"杖装備時：威力+100%"
      },
    },
    "Magic-3-20-2": {
      Name: "術式/ストーム(6/6hit)",
      Tree: SkillTree.Magic,
      Torauma: Torauma.Magic,
      Group: "Magic",
      Count: 6,
      MP: 400,
      First: {
        Base: new MagicSkill(200, 420, 12, true),
        Power: Refs => Refs.OtherInfo.Wepon === "SF" ? 100 : 0,
        Effect:"杖装備時：威力+100%"
      },
      Second: {
        Base: new MagicSkill(200, 420, 12, true),
        Power: Refs => Refs.OtherInfo.Wepon === "SF" ? 100 : 0,
        Effect:"杖装備時：威力+100%"
      },
      Therd: {
        Base: new MagicSkill(200, 420, 12, true),
        Power: Refs => Refs.OtherInfo.Wepon === "SF" ? 100 : 0,
        Effect:"杖装備時：威力+100%"
      },
      Fourth: {
        Base: new MagicSkill(200, 420, 12, true),
        Power: Refs => Refs.OtherInfo.Wepon === "SF" ? 100 : 0,
        Effect:"杖装備時：威力+100%"
      },
      Fifth: {
        Base: new MagicSkill(200, 420, 12, true),
        Power: Refs => Refs.OtherInfo.Wepon === "SF" ? 100 : 0,
        Effect:"杖装備時：威力+100%"
      },
      Sixth: {
        Base: new MagicSkill(200, 420, 12, true),
        Power: Refs => Refs.OtherInfo.Wepon === "SF" ? 100 : 0,
        Effect:"杖装備時：威力+100%"
      },
    },
    "Magic-4-10": {
      Name: "術式/フィナウ",
      Tree: SkillTree.Magic,
      Torauma: Torauma.Magic,
      Group: "Magic",
      Count: 3,
      MP: 1600,
      First: {
        Base: new MagicSkill(3000, 3000, 12, true, { Attribute: SkillAttribute.No }),
        Power: Refs =>
          Refs.OtherInfo.Wepon === "SF" ? 750 + Refs.Status.INT : (Refs.OtherInfo.Wepon === "MD" || Refs.OtherInfo.SubWepon === "MD") ? Refs.Status.INT : 0,
        Effect:"無属性魔法\n杖装備時：威力+750% + 基礎INT%\n魔道具装備時：基礎INT%"
      },
      Second: {
        Base: new MagicSkill(2000, 300, 12, true, { Attribute: SkillAttribute.No }),
        Effect:"無属性魔法"
      },
      Therd: {
        Base: new MagicSkill(1000, 30, 12, true, { Attribute: SkillAttribute.No }),
        Effect:"無属性魔法"
      },
    },
    "Magic-4-20": {
      Name: "術式/バースト",
      Tree: SkillTree.Magic,
      Torauma: Torauma.Magic,
      Group: "Magic",
      Count: 1,
      MP: 500,
      First: {
        Base: new MagicSkill(2100, 500, 12, true),
        Power: Refs => Refs.OtherInfo.Wepon === "SF"
          ? Refs.Status.INT
          : (Refs.OtherInfo.Wepon === "MD" || Refs.OtherInfo.SubWepon === "MD")
            ? Refs.Status.INT / 2
            : 0,
        Effect:"杖装備時：基礎INT%\n魔道具装備時：基礎INT/2%"
      }
    },
    "Magic-5-10-1": {
      Name: "術式/マジックカノン(チャージ60%)3hit",
      Tree: SkillTree.Magic,
      Torauma: Torauma.Magic,
      Group: "Magic",
      Count: 3,
      MP: 700,
      First: {
        Base: new MagicSkill(600, 760, 12, true),
        Power: Refs => Refs.OtherInfo.Wepon === "SF" ? Refs.Status.INT : 0,
        Fixed: Refs => (Refs.OtherInfo.Wepon === "MD") ? 120 : 0,
        Effetc:"杖装備時：威力+基礎INT%\n魔道具装備時：固定値+120"
      },
      Second: {
        Base: new MagicSkill(600, 760, 12, true),
        Power: Refs => Refs.OtherInfo.Wepon === "SF" ? Refs.Status.INT : 0,
        Fixed: Refs => (Refs.OtherInfo.Wepon === "MD") ? 120 : 0,
        Effetc:"杖装備時：威力+基礎INT%\n魔道具装備時：固定値+120"
      },
      Therd: {
        Base: new MagicSkill(600, 760, 12, true),
        Power: Refs => Refs.OtherInfo.Wepon === "SF" ? Refs.Status.INT : 0,
        Fixed: Refs => (Refs.OtherInfo.Wepon === "MD") ? 120 : 0,
        Effetc:"杖装備時：威力+基礎INT%\n魔道具装備時：固定値+120"
      },
    },
    "Magic-5-10-2": {
      Name: "術式/マジックカノン(チャージ100%)1/5hit",
      Tree: SkillTree.Magic,
      Torauma: Torauma.Magic,
      Group: "Magic",
      Count: 5,
      MP: 700,
      First: {
        Base: new MagicSkill(600, 800, 12, true),
        Power: Refs => Refs.OtherInfo.Wepon === "SF" ? Refs.Status.INT : 0,
        Fixed: Refs => (Refs.OtherInfo.Wepon === "MD") ? 200 : 0,
        Effetc:"杖装備時：威力+基礎INT%\n魔道具装備時：固定値+200"
      },
    },
    "Magic-5-10-3": {
      Name: "術式/マジックカノン(チャージ100%)5/5hit",
      Tree: SkillTree.Magic,
      Torauma: Torauma.Magic,
      Group: "Magic",
      Count: 5,
      MP: 700,
      First: {
        Base: new MagicSkill(600, 800, 12, true),
        Power: Refs => Refs.OtherInfo.Wepon === "SF" ? Refs.Status.INT : 0,
        Fixed: Refs => (Refs.OtherInfo.Wepon === "MD") ? 200 : 0,
        Effetc:"杖装備時：威力+基礎INT%\n魔道具装備時：固定値+200"
      },
      Second: {
        Base: new MagicSkill(600, 800, 12, true),
        Power: Refs => Refs.OtherInfo.Wepon === "SF" ? Refs.Status.INT : 0,
        Fixed: Refs => (Refs.OtherInfo.Wepon === "MD") ? 200 : 0,
        Effetc:"杖装備時：威力+基礎INT%\n魔道具装備時：固定値+200"
      },
      Therd: {
        Base: new MagicSkill(600, 800, 12, true),
        Power: Refs => Refs.OtherInfo.Wepon === "SF" ? Refs.Status.INT : 0,
        Fixed: Refs => (Refs.OtherInfo.Wepon === "MD") ? 200 : 0,
        Effetc:"杖装備時：威力+基礎INT%\n魔道具装備時：固定値+200"
      },
      Fourth: {
        Base: new MagicSkill(600, 800, 12, true),
        Power: Refs => Refs.OtherInfo.Wepon === "SF" ? Refs.Status.INT : 0,
        Fixed: Refs => (Refs.OtherInfo.Wepon === "MD") ? 200 : 0,
        Effetc:"杖装備時：威力+基礎INT%\n魔道具装備時：固定値+200"
      },
      Fifth: {
        Base: new MagicSkill(600, 800, 12, true),
        Power: Refs => Refs.OtherInfo.Wepon === "SF" ? Refs.Status.INT : 0,
        Fixed: Refs => (Refs.OtherInfo.Wepon === "MD") ? 200 : 0,
        Effetc:"杖装備時：威力+基礎INT%\n魔道具装備時：固定値+200"
      },
    },
    "Magic-5-10-4": {
      Name: "術式/マジックカノン(チャージ200%)1/5hit",
      Tree: SkillTree.Magic,
      Torauma: Torauma.Magic,
      Group: "Magic",
      Count: 3,
      MP: 700,
      First: {
        Base: new MagicSkill(1200, 900, 12, true),
        Power: Refs => Refs.OtherInfo.Wepon === "SF" ? Refs.Status.INT : 0,
        Fixed: Refs => (Refs.OtherInfo.Wepon === "MD") ? 400 : 0,
        Effetc:"杖装備時：威力+基礎INT%\n魔道具装備時：固定値+400"
      },
    },
    "Magic-5-10-5": {
      Name: "術式/マジックカノン(チャージ200%)5/5hit",
      Tree: SkillTree.Magic,
      Torauma: Torauma.Magic,
      Group: "Magic",
      Count: 5,
      MP: 700,
      First: {
        Base: new MagicSkill(1200, 900, 12, true),
        Power: Refs => Refs.OtherInfo.Wepon === "SF" ? Refs.Status.INT : 0,
        Fixed: Refs => (Refs.OtherInfo.Wepon === "MD") ? 400 : 0,
        Effetc:"杖装備時：威力+基礎INT%\n魔道具装備時：固定値+400"
      },
      Second: {
        Base: new MagicSkill(1200, 900, 12, true),
        Power: Refs => Refs.OtherInfo.Wepon === "SF" ? Refs.Status.INT : 0,
        Fixed: Refs => (Refs.OtherInfo.Wepon === "MD") ? 400 : 0,
        Effetc:"杖装備時：威力+基礎INT%\n魔道具装備時：固定値+400"
      },
      Therd: {
        Base: new MagicSkill(1200, 900, 12, true),
        Power: Refs => Refs.OtherInfo.Wepon === "SF" ? Refs.Status.INT : 0,
        Fixed: Refs => (Refs.OtherInfo.Wepon === "MD") ? 400 : 0,
        Effetc:"杖装備時：威力+基礎INT%\n魔道具装備時：固定値+400"
      },
      Fourth: {
        Base: new MagicSkill(1200, 900, 12, true),
        Power: Refs => Refs.OtherInfo.Wepon === "SF" ? Refs.Status.INT : 0,
        Fixed: Refs => (Refs.OtherInfo.Wepon === "MD") ? 400 : 0,
        Effetc:"杖装備時：威力+基礎INT%\n魔道具装備時：固定値+400"
      },
      Fifth: {
        Base: new MagicSkill(1200, 900, 12, true),
        Power: Refs => Refs.OtherInfo.Wepon === "SF" ? Refs.Status.INT : 0,
        Fixed: Refs => (Refs.OtherInfo.Wepon === "MD") ? 400 : 0,
        Effetc:"杖装備時：威力+基礎INT%\n魔道具装備時：固定値+400"
      },
    },
    "Magic-5-10-6-Edit": {
      Name: "術式/マジックカノン(チャージ可変)Fullhit",
      Tree: SkillTree.Magic,
      Torauma: Torauma.Magic,
      Group: "Magic",
      Count: 5,
      MP: 700,
      Charge: new SkillCharge(1, 1, 200),
      ChargeType: SkillChargeType.Charge,
      First: {
        Base: new MagicSkill(0, 700, 12, true),
        Power: Refs => {
          const WeponBonus = Refs.OtherInfo.Wepon === "SF" ? Refs.Status.INT : 0;
          const Ch = Refs.OtherInfo.ChargeLv;
          const ChargeBonus = (() => {
            switch (true) {
              case Ch < 20: return 30 * Ch;
              case Ch <= 100: return 600;
              case Ch < 120: return 600 + 30 * (Ch - 100);
              default: return 1200;
            }
          })();
          return WeponBonus + ChargeBonus;
        },
        Fixed: Refs => {
          const Ch = Refs.OtherInfo.ChargeLv;
          const Rate = (Refs.OtherInfo.Wepon === "MD") ? 3 : 1;
          return Ch * Rate;
        },
        Effetc:"杖装備時：威力+基礎INT%"
      },
      Second: {
        Base: new MagicSkill(0, 0, 12, true),
        Power: Refs => {
          const Ch = Refs.OtherInfo.ChargeLv;
          if (Ch <= 20) return 0;

          const WeponBonus = Refs.OtherInfo.Wepon === "SF" ? Refs.Status.INT : 0;
          const ChargeBonus = (() => {
            switch (true) {
              case Ch < 40: return 30 * (Ch - 20);
              case Ch <= 120: return 600;
              case Ch < 140: return 600 + 30 * (Ch - 120);
              default: return 1200;
            }
          })();
          return WeponBonus + ChargeBonus;
        },
        Fixed: Refs => {
          const Ch = Refs.OtherInfo.ChargeLv;
          if (Ch <= 20) return 0;

          const Rate = (Refs.OtherInfo.Wepon === "MD") ? 3 : 1;
          return 700 + Ch * Rate;
        },
        Effetc:"杖装備時：威力+基礎INT%"
      },
      Therd: {
        Base: new MagicSkill(0, 0, 12, true),
        Power: Refs => {
          const Ch = Refs.OtherInfo.ChargeLv;
          if (Ch <= 40) return 0;

          const WeponBonus = Refs.OtherInfo.Wepon === "SF" ? Refs.Status.INT : 0;
          const ChargeBonus = (() => {
            switch (true) {
              case Ch < 60: return 30 * (Ch - 40);
              case Ch <= 140: return 600;
              case Ch < 160: return 600 + 30 * (Ch - 140);
              default: return 1200;
            }
          })();
          return WeponBonus + ChargeBonus;
        },
        Fixed: Refs => {
          const Ch = Refs.OtherInfo.ChargeLv;
          if (Ch <= 40) return 0;

          const Rate = (Refs.OtherInfo.Wepon === "MD") ? 3 : 1;
          return 700 + Ch * Rate;
        },
        Effetc:"杖装備時：威力+基礎INT%"
      },
      Fourth: {
        Base: new MagicSkill(0, 0, 12, true),
        Power: Refs => {
          const Ch = Refs.OtherInfo.ChargeLv;
          if (Ch <= 60) return 0;

          const WeponBonus = Refs.OtherInfo.Wepon === "SF" ? Refs.Status.INT : 0;
          const ChargeBonus = (() => {
            switch (true) {
              case Ch < 80: return 30 * (Ch - 60);
              case Ch <= 160: return 600;
              case Ch < 180: return 600 + 30 * (Ch - 160);
              default: return 1200;
            }
          })();
          return WeponBonus + ChargeBonus;
        },
        Fixed: Refs => {
          const Ch = Refs.OtherInfo.ChargeLv;
          if (Ch <= 60) return 0;

          const Rate = (Refs.OtherInfo.Wepon === "MD") ? 3 : 1;
          return 700 + Ch * Rate;
        },
        Effetc:"杖装備時：威力+基礎INT%"
      },
      Fifth: {
        Base: new MagicSkill(0, 0, 12, true),
        Power: Refs => {
          const Ch = Refs.OtherInfo.ChargeLv;
          if (Ch <= 80) return 0;

          const WeponBonus = Refs.OtherInfo.Wepon === "SF" ? Refs.Status.INT : 0;
          const ChargeBonus = (() => {
            switch (true) {
              case Ch < 100: return 30 * (Ch - 80);
              case Ch <= 180: return 600;
              default: return 600 + 30 * (Ch - 180);
            }
          })();
          return WeponBonus + ChargeBonus;
        },
        Fixed: Refs => {
          const Ch = Refs.OtherInfo.ChargeLv;
          if (Ch <= 80) return 0;

          const Rate = (Refs.OtherInfo.Wepon === "MD") ? 3 : 1;
          return 700 + Ch * Rate;
        },
        Effetc:"杖装備時：基礎威力+INT%"
      },
    },
    "Magic-5-20-1": {
      Name: "術式/フォール(1(隕石3hit)/3hit)",
      Tree: SkillTree.Magic,
      Torauma: Torauma.Magic,
      Group: "Magic",
      Count: 9,
      MP: 400,
      First: {
        Base: new MagicSkill(500, 400, 12, false),
        Power: Refs => (Refs.OtherInfo.Wepon === "SF") ? Refs.Status.INT / 3 : 0,
        Effect:"杖装備時：威力+基礎INT/3%"
      },
      Second: { Base: new MagicSkill(400, 400, 12, false) },
      Therd: { Base: new MagicSkill(300, 400, 12, false) },
    },
    "Magic-5-20-2": {
      Name: "術式/フォールFullhit",
      Tree: SkillTree.Magic,
      Torauma: Torauma.Magic,
      Group: "Magic",
      Count: 9,
      MP: 400,
      First: {
        Base: new MagicSkill(1500, 400, 12, false),
        Power: Refs => (Refs.OtherInfo.Wepon === "SF") ? Refs.Status.INT : 0,
        Effect:"杖装備時：威力+基礎INT%"
      },
      Second: { Base: new MagicSkill(1200, 400, 12, false) },
      Therd: { Base: new MagicSkill(900, 400, 12, false) },
    },
    "Priest-4-10-1": {
      Name: "ネメシス(追撃1hitあたり)",
      Tree:SkillTree.Priest,
      Torauma: Torauma.Physical,
      Group: "Magic",
      Count: 20,
      MP: 200,
      First: {
        Base: new PhysicsSkill(1000, 600, 12, true),
        Power: Refs => (Refs.OtherInfo.SubWepon === "SH" ? Refs.Status.STR_After : 0),
        Effect:"盾装備時：威力+補正後STR%"
      },
      Second: {
        Base: new MagicSkill(500, 300, 12, false),
        Power: Refs => (Refs.Status.INT_After > 500 ? 500 : Refs.Status.INT_After) / 2,
        Effect:"威力+補正後INT%"
      },
    },
    "Priest-4-10-2": {
      Name: "ネメシス(追撃のみ+1hitあたり)",
      Tree:SkillTree.Priest,
      Torauma: Torauma.Physical,
      Group: "Magic",
      Count: 20,
      MP: 200,
      First: {
        Base: new MagicSkill(500, 300, 12, false),
        Power: Refs => (Refs.Status.INT_After > 500 ? 500 : Refs.Status.INT_After) / 2,
        Effect:"威力+補正後INT%"
      },
    },
    "Priest-4-10-3-Edit": {
      Name: "ネメシス(追撃のみ+hit数可変)",
      Tree:SkillTree.Priest,
      Torauma: Torauma.Physical,
      Group: "Magic",
      Count: 20,
      MP: 200,
      Charge: new SkillCharge(1, 1, 20),
      ChargeType: SkillChargeType.Stock,
      First: {
        Base: new MagicSkill(0, 300, 12, false),
        Power: Refs => {
          const Bonus = (Refs.Status.INT_After > 500 ? 500 : Refs.Status.INT_After) / 2;
          return (500 + Bonus) * Refs.OtherInfo.ChargeLv;
        },
        Effect:"威力+補正後INT%"
      },
    },
    "Halberd-3-10-1": {
      Name: "ダイブインパクト",
      Tree:SkillTree.Halberd,
      Torauma: Torauma.Physical,
      Group: "Halberd",
      Count: 2,
      MP: 400,
      First: {
        Base: new PhysicsSkill(400, 400, 4, false),
        Power: Refs => Refs.Status.STR_After / 4,
        Effect:"威力+補正後STR/4%"
      },
      Second: {
        Base: new PhysicsSkill(600, 0, 4, false),
        Power: Refs => Refs.Status.INT_After,
        Effect:"威力+補正後INT%"
      },
    },
    "Halberd-3-20-1": {
      Name: "ストライクスタブ(通常時)",
      Tree:SkillTree.Halberd,
      Torauma: Torauma.Physical,
      Group: "Halberd",
      Count: 3,
      MP: 200,
      First: {
        Base: new PhysicsSkill(200, 100, 4, true),
        Power: Refs => Refs.Status.STR_After / 5,
        Fixed: Refs => Refs.OtherInfo.Wepon === "HB" ? 100 : 0,
        Addition: {
          Critical: (Refs) => {
            const BaseCritical = 25 + Math.floor((Refs?.Status?.CRT ?? 0) / 3.4);
            const Bonus = 1 + ((Refs?.AdditionStatus?.All?.Critical_Rate ?? 0) / 100);
            const Split = Refs?.OtherInfo?.Wepon === "HB" ? 2 : 4;
            const Total = Math.floor(BaseCritical * Bonus);

            return Math.floor(Total / Split) - Total;
          }
        },
        Effect:"威力+補正後STR/5%\n槍装備時：固定値+100"
      },
      Second: {
        Base: new PhysicsSkill(200, 100, 4, true),
        Power: Refs => Refs.Status.STR_After / 5,
        Fixed: Refs => Refs.OtherInfo.Wepon === "HB" ? 100 : 0,
        Addition: {
          Critical: (Refs) => {
            const BaseCritical = 25 + Math.floor((Refs?.Status?.CRT ?? 0) / 3.4);
            const Bonus = 1 + ((Refs?.AdditionStatus?.All?.Critical_Rate ?? 0) / 100);
            const Split = Refs?.OtherInfo?.Wepon === "HB" ? 2 : 4;
            const Total = Math.floor(BaseCritical * Bonus);

            return Math.floor(Total / Split) - Total;
          }
        },
        Effect:"威力+補正後STR/5%\n槍装備時：固定値+100"
      },
      Therd: {
        Base: new PhysicsSkill(200, 100, 4, true),
        Power: Refs => Refs.Status.STR_After / 5,
        Fixed: Refs => Refs.OtherInfo.Wepon === "HB" ? 100 : 0,
        Addition: {
          Critical: (Refs) => {
            const BaseCritical = 25 + Math.floor((Refs?.Status?.CRT ?? 0) / 3.4);
            const Bonus = 1 + ((Refs?.AdditionStatus?.All?.Critical_Rate ?? 0) / 100);
            const Split = Refs?.OtherInfo?.Wepon === "HB" ? 2 : 4;
            const Total = Math.floor(BaseCritical * Bonus);

            return Math.floor(Total / Split) - Total;
          }
        },
        Effect:"威力+補正後STR/5%\n槍装備時：固定値+100"
      },
    },
    "Halberd-3-20-2": {
      Name: "ストライクスタブ(敵状態異常時)",
      Tree:SkillTree.Halberd,
      Torauma: Torauma.Physical,
      Group: "Halberd",
      Count: 3,
      MP: 200,
      First: {
        Base: new PhysicsSkill(300, 100, 4, true),
        Power: Refs => Refs.Status.STR_After / 5 + (Refs.OtherInfo.Wepon === "HB" ? 100 : 0),
        Fixed: Refs => Refs.OtherInfo.Wepon === "HB" ? 100 : 0,
        Addition: {
          Critical: (Refs) => {
            const BaseCritical = 25 + Math.floor((Refs?.Status?.CRT ?? 0) / 3.4);
            const Bonus = 1 + ((Refs?.AdditionStatus?.All?.Critical_Rate ?? 0) / 100);
            const Split = Refs?.OtherInfo?.Wepon === "HB" ? 2 : 4;
            const Total = Math.floor(BaseCritical * Bonus);

            return Math.floor(Total / Split) - Total;
          }
        },
        Effect:"威力+補正後STR/5%\n槍装備時：威力+100% 固定値+100"
      },
      Second: {
        Base: new PhysicsSkill(300, 100, 4, true),
        Power: Refs => Refs.Status.STR_After / 5 + (Refs.OtherInfo.Wepon === "HB" ? 100 : 0),
        Fixed: Refs => Refs.OtherInfo.Wepon === "HB" ? 100 : 0,
        Addition: {
          Critical: (Refs) => {
            const BaseCritical = 25 + Math.floor((Refs?.Status?.CRT ?? 0) / 3.4);
            const Bonus = 1 + ((Refs?.AdditionStatus?.All?.Critical_Rate ?? 0) / 100);
            const Split = Refs?.OtherInfo?.Wepon === "HB" ? 2 : 4;
            const Total = Math.floor(BaseCritical * Bonus);

            return Math.floor(Total / Split) - Total;
          }
        },
        Effect:"威力+補正後STR/5%\n槍装備時：威力+100% 固定値+100"
      },
      Therd: {
        Base: new PhysicsSkill(300, 100, 4, true),
        Power: Refs => Refs.Status.STR_After / 5 + (Refs.OtherInfo.Wepon === "HB" ? 100 : 0),
        Fixed: Refs => Refs.OtherInfo.Wepon === "HB" ? 100 : 0,
        Addition: {
          Critical: (Refs) => {
            const BaseCritical = 25 + Math.floor((Refs?.Status?.CRT ?? 0) / 3.4);
            const Bonus = 1 + ((Refs?.AdditionStatus?.All?.Critical_Rate ?? 0) / 100);
            const Split = Refs?.OtherInfo?.Wepon === "HB" ? 2 : 4;
            const Total = Math.floor(BaseCritical * Bonus);

            return Math.floor(Total / Split) - Total;
          }
        },
        Effect:"威力+補正後STR/5%\n槍装備時：威力+100% 固定値+100"
      },
    },
    "Halberd-3-30-1": {
      Name: "バスターランス",
      Tree:SkillTree.Halberd,
      Torauma: Torauma.Physical,
      Group: "Halberd",
      Count: 1,
      MP: 100,
      First: {
        Base: new PhysicsSkill(500, 100, 12, true),
        Power: Refs => (Refs.Status.STR_After + Refs.Status.AGI_After) / 2,
        Effect:"威力+(補正後STR + 補正後AGI)/2%"
      }
    },
    "Halberd-3-30-2": {
      Name: "パニッシュバスターランス",
      Tree:SkillTree.Halberd,
      Torauma: Torauma.Magic,
      Group: "Halberd",
      Count: 1,
      MP: 100,
      First: {
        Base: new PhysicsSkill(600, 200, 12, true),
        Power: Refs => (Refs.Status.STR_After + Refs.Status.AGI_After) / 2,
        Effect:"威力+(補正後STR + 補正後AGI)/2%"
      }
    },
    "Halberd-4-10": {
      Name: "ドラゴントゥース",
      Tree:SkillTree.Halberd,
      Torauma: Torauma.Physical,
      Group: "Halberd",
      Count: 2,
      MP: 500,
      First: {
        Base: new PhysicsSkill(750, 0, 12, true),
        Addition: { ATKPenetrate: 100, Critical: 75 },
        Effect:"クリティカル率+75"
      },
      Second: {
        Base: new PhysicsSkill(750, 0, 12, true),
        Addition: { ATKPenetrate: 100, Critical: 75 },
        Effect:"クリティカル率+75"
      },
    },
    "Halberd-4-20": {
      Name: "ライトニングへイル",
      Tree: SkillTree.Halberd,
      Torauma: Torauma.Magic,
      Group: "Halberd",
      Couht: 1,
      MP: 200,
      First: {
        Base: new AddSkill(Refs => Refs.Status.HBMATK, 200, 200, 8, true, false, false, false, false, { AbsCrit: true ,PowerEffect:"槍MATK", IsLongRange: false }),
        Power: Refs => Refs.Status.INT_After / 10,
        Effect:"威力+補正後INT/10%"
      }
    },
    "Halberd-4-30": {
      Name: "クロノスドライブ(最大回数)",
      Tree: SkillTree.Halberd,
      Torauma: Torauma.Physical,
      Group: "Halberd",
      Count:14,
      MP: 400,
      First: {
        Base: new PhysicsSkill(600, 400, 4, true, false)
      },
      Second: {
        Base: new PhysicsSkill(50 * 13, 500, 4, false, false, { NoneCombo: true ,NoneGotHB: true}),
        Power: Refs => Math.floor(Refs.Status.INT_After / 5) * 13,
        Effect:"威力+総INT/5%"
      }
    },
    "Halberd-4-30-1": {
      Name: "クロノスドライブ(本体)",
      Tree: SkillTree.Halberd,
      Torauma: Torauma.Physical,
      Group: "Halberd",
      Count:14,
      MP: 400,
      First: {
        Base: new PhysicsSkill(600, 400, 4, true, false)
      }
    },
    "Halberd-4-30-2": {
      Name: "クロノスドライブ(追撃)",
      Tree: SkillTree.Halberd,
      Torauma: Torauma.No,
      ShowTorauma:Torauma.Magic,
      Group: "Halberd",
      Count:14,
      MP: 400,
      First: {
        Base: new PhysicsSkill(50 * 13, 500, 4, false, false, { NoneCombo: true ,NoneGotHB: true}),
        Power: Refs => Math.floor(Refs.Status.INT_After / 5) * 13,
        Effect:"威力+総INT/5%"
      }
    },
    "Halberd-5-10-1": {
      Name: "ドラゴニックチャージ(3m+進度2)",
      Tree:SkillTree.Halberd,
      Torauma: Torauma.Physical,
      Group: "Halberd",
      Count: 2,
      MP: 300,
      First: {
        Base: new PhysicsSkill(1050, 300, 8, "Distance"),
        Addition: { ATKPenetrate: 20 },
        Option: {
          G_Hit: true,
        }
      },
      Second: {
        Base: new AddSkill(Refs => Math.floor(Refs.Status.AllATK + Refs.Status.HBMATK / 2),
          1050, 300, 8, false, false, true, true, false, { AbsCrit: true, PowerEffect: "ATK + (槍MATK × 0.5)" }),
        Checker: function (Refs) {
          const { IsDistance } = Refs.OtherInfo;

          this.Base.BasePower = IsDistance !== "long" ? 1050 : 0;
        }
      },
    },
    "Halberd-5-10-2-Edit": {
      Name: "ドラゴニックチャージ(3m+チャージ可変)",
      Tree:SkillTree.Halberd,
      Torauma: Torauma.Physical,
      Group: "Halberd",
      Count: 2,
      MP: 300,
      Charge: new SkillCharge(10, 1, 100),
      ChargeType: SkillChargeType.Charge,
      First: {
        Base: new PhysicsSkill(1000, 300, 8, "Distance"),
        Power: Refs => 10 * Refs.OtherInfo.ChargeLv,
        Addition: { ATKPenetrate: 20 },
        Option: {
          G_Hit: true,
        },
      },
      Second: {
        Base: new AddSkill(Refs => Math.floor(Refs.Status.AllATK + Refs.Status.HBMATK / 2),
          1000, 300, 8, false, false, true, true, false, { AbsCrit: true, PowerEffect: "ATK + (槍MATK × 0.5)" }),
        Power: Refs => Refs.OtherInfo.IsDistance !== "long" ? 10 * Refs.OtherInfo.ChargeLv : 0, 
        Checker: function (Refs) {
          const { IsDistance } = Refs.OtherInfo;

          this.Base.BasePower = IsDistance !== "long" ? 1000 : 0;
        }
      },
    },
    "Halberd-5-10-3-Edit": {
      Name: "ドラゴニックチャージ(距離可変+チャージ100%)",
      Tree:SkillTree.Halberd,
      Torauma: Torauma.Physical,
      Group: "Halberd",
      Count: 2,
      MP: 300,
      Charge: new SkillCharge(1, 0, 11),
      ChargeType: SkillChargeType.M,
      First: {
        Base: new PhysicsSkill(2000, 300, 8, true),
        Addition: {
          ATKPenetrate: Refs => {
            const Lv = Refs.OtherInfo.ChargeLv ?? 0;
            return Lv < 2 ? 0 : (Lv - 1) * 10;
          }
        },
        Option: {
          G_Hit: true,
        },
        Effect:"物理貫通+(距離-1)×10%※最低0%"
      },
      Second: {
        Base: new AddSkill(Refs => Math.floor(Refs.Status.AllATK + Refs.Status.HBMATK / 2),
          2000, 300, 8, false, false, true, true, false, { AbsCrit: true, PowerEffect: "ATK + (槍MATK × 0.5)" }),
        Checker: function (Refs) {
          const { IsDistance } = Refs.OtherInfo;

          this.Base.BasePower = IsDistance !== "long" ? 2000 : 0;
        }
      },
    },
    "Halberd-5-10-4-Edit": {
      Name: "ドラゴニックチャージ(距離可変+進度2)",
      Tree:SkillTree.Halberd,
      Torauma: Torauma.Physical,
      Group: "Halberd",
      Count: 2,
      MP: 300,
      Charge: new SkillCharge(1, 0, 11),
      ChargeType: SkillChargeType.M,
      First: {
        Base: new PhysicsSkill(1050, 300, 8, true),
        Addition: {
          ATKPenetrate: Refs => {
            const Lv = Refs.OtherInfo.ChargeLv ?? 0;
            return Lv < 2 ? 0 : (Lv - 1) * 10;
          }
        },
        Option: {
          G_Hit: true,
        },
        Effect:"物理貫通+(距離-1)×10%※最低0%"
      },
      Second: {
        Base: new AddSkill(Refs => Math.floor(Refs.Status.AllATK + Refs.Status.HBMATK / 2),
          1050, 300, 8, false, false, true, true, false, { AbsCrit: true, PowerEffect: "ATK + (槍MATK × 0.5)" }),
        Checker: function (Refs) {
          const { IsDistance } = Refs.OtherInfo;

          this.Base.BasePower = IsDistance !== "long" ? 1000 : 0;
        }
      },
    },
    "Halberd-5-20": {
      Name: "ディメンジョンティル",
      Tree:SkillTree.Halberd,
      Torauma: Torauma.No,
      ShowTorauma: Torauma.Physical,
      Group: "Halberd",
      Count: 1,
      MP: 200,
      First: {
        Base: new PhysicsSkill(2000, 200, 0, false),
        Power: Refs => Math.floor(Math.floor(Refs.Status.STR * 0.2) * 5) + Math.floor(Math.floor(Refs.Status.AGI * 0.2) * 5),
        Effect:"威力+基礎STR%+基礎AGI%"
      }
    },
    "Halberd-5-30-10": {
      Name: "トールハンマー(単発)",
      Torauma: Torauma.Magic,
      Group: "Halberd",
      Count: 1,
      MP: 400,
      First: {
        Base: new AddSkill(Refs => Refs.Status.HBMATK, 1500, 400, 12, true, false, false, false, false, { AbsCrit: true ,PowerEffect:"槍MATK", IsLongRange: false })
      }
    },
    "Halberd-5-30-20": {
      Name: "トールハンマー(追撃3hit総ダメ)",
      Torauma: Torauma.Magic,
      Group: "Halberd",
      Count: 1,
      MP: 400,
      First: {
        Base: new AddSkill(Refs => Refs.Status.HBMATK, 1500, 400, 12, true, false, false, false, false, { AbsCrit: true ,PowerEffect:"槍MATK", IsLongRange: false })
      },
      Second: {
        Base: new AddSkill(Refs => Refs.Status.HBMATK, 1200, 200, 8, true, false, false, false, false, { AbsCrit: true ,PowerEffect:"槍MATK", IsLongRange: false }),
        Power: Refs => Math.floor(Math.floor(Math.floor(Refs.Status.INT_After) / 10) * 6),
        Effect:"総威力+(補正後INT/10%) × 6"
      }
    },
    "Halberd-5-30-25": {
      Name: "トールハンマー(追撃3hit)",
      Torauma: Torauma.Magic,
      Group: "Halberd",
      Count: 1,
      MP: 400,
      First: {
        Base: new AddSkill(Refs => Refs.Status.HBMATK, 1500, 400, 12, true, false, false, false, false, { AbsCrit: true ,PowerEffect:"槍MATK", IsLongRange: false })
      },
      Second: {
        Base: new AddSkill(Refs => Refs.Status.HBMATK, 200, 200, 8, true, false, false, false, false, { AbsCrit: true ,PowerEffect:"槍MATK", IsLongRange: false }),
        Power: Refs => Math.floor(Math.floor(Math.floor(Refs.Status.INT_After) / 10) * 1),
        Effect:"総威力+(補正後INT/10%) × 1"
      },
      Therd: {
        Base: new AddSkill(Refs => Refs.Status.HBMATK, 400, 200, 8, true, false, false, false, false, { AbsCrit: true ,PowerEffect:"槍MATK", IsLongRange: false }),
        Power: Refs => Math.floor(Math.floor(Math.floor(Refs.Status.INT_After) / 10) * 2),
        Effect:"総威力+(補正後INT/10%) × 2"
      },
      Fourth: {
        Base: new AddSkill(Refs => Refs.Status.HBMATK, 600, 200, 8, true, false, false, false, false, { AbsCrit: true ,PowerEffect:"槍MATK", IsLongRange: false }),
        Power: Refs => Math.floor(Math.floor(Math.floor(Refs.Status.INT_After) / 10) * 3),
        Effect:"総威力+(補正後INT/10%) × 3"
      },
    },
    "Halberd-5-30-30": {
      Name: "トールハンマー(追撃5hit総ダメ)",
      Torauma: Torauma.Magic,
      Group: "Halberd",
      Count: 1,
      MP: 400,
      First: {
        Base: new AddSkill(Refs => Refs.Status.HBMATK, 1500, 400, 12, true, false, false, false, false, { AbsCrit: true ,PowerEffect:"槍MATK", IsLongRange: false })
      },
      Second: {
        Base: new AddSkill(Refs => Refs.Status.HBMATK, 3000, 200, 8, true, false, false, false, false, { AbsCrit: true ,PowerEffect:"槍MATK", IsLongRange: false }),
        Power: Refs => Math.floor(Math.floor(Math.floor(Refs.Status.INT_After) / 10) * 15),
        Effect:"総威力+(補正後INT/10%) × 15"
      }
    },
    "Halberd-5-30-40": {
      Name: "トールハンマー(追撃7hit総ダメ)",
      Torauma: Torauma.Magic,
      Group: "Halberd",
      Count: 1,
      MP: 400,
      First: {
        Base: new AddSkill(Refs => Refs.Status.HBMATK, 1500, 400, 12, true, false, false, false, false, { AbsCrit: true ,PowerEffect:"槍MATK", IsLongRange: false })
      },
      Second: {
        Base: new AddSkill(Refs => Refs.Status.HBMATK, 5600, 200, 8, true, false, false, false, false, { AbsCrit: true ,PowerEffect:"槍MATK", IsLongRange: false }),
        Power: Refs => Math.floor(Math.floor(Math.floor(Refs.Status.INT_After) / 10) * 28),
        Effect:"総威力+(補正後INT/10%) × 28"
      }
    },
        "Halberd-5-30-50": {
      Name: "トールハンマー(追撃8hit総ダメ)",
      Torauma: Torauma.Magic,
      Group: "Halberd",
      Count: 1,
      MP: 400,
      First: {
        Base: new AddSkill(Refs => Refs.Status.HBMATK, 1500, 400, 12, true, false, false, false, false, { AbsCrit: true ,PowerEffect:"槍MATK", IsLongRange: false })
      },
      Second: {
        Base: new AddSkill(Refs => Refs.Status.HBMATK, 7200, 200, 8, true, false, false, false, false, { AbsCrit: true ,PowerEffect:"槍MATK", IsLongRange: false }),
        Power: Refs => Math.floor(Math.floor(Math.floor(Refs.Status.INT_After) / 10) * 36),
        Effect:"総威力+(補正後INT/10%) × 36"
      }
    },
    "Mononof-3-10": {
      Name: "八相発破",
      Tree:SkillTree.Mononof,
      Torauma: Torauma.Physical,
      Group: "Mononof",
      Count: 3,
      MP: 500,
      First: {
        Base: new PhysicsSkill(600, 150, 3, true, true),
        Option: { G_Hit: true },
      },
      Second: {
        Base: new PhysicsSkill(300, 150, 3, true, true),
        Option: { G_Hit: true },
      },
      Therd: {
        Base: new PhysicsSkill(300, 150, 3, true, true),
        Option: { G_Hit: true },
      }
    },
    "Mononof-3-20": {
      Name: "桜花爛漫",
      Tree:SkillTree.Mononof,
      Torauma: Torauma.Physical,
      Group: "Mononof",
      Count: 3,
      MP: 500,
      First: {
        Base: new PhysicsSkill(700, 150, 3, true, true),
        Option: { G_Hit: true },
      },
      Second: {
        Base: new PhysicsSkill(400, 150, 3, true, true),
        Option: { G_Hit: true },
      },
      Therd: {
        Base: new PhysicsSkill(400, 150, 3, true, true),
        Option: { G_Hit: true },
      }
    },
    "Mononof-1-10": {
      Name: "一閃",
      Tree:SkillTree.Mononof,
      Torauma: Torauma.Physical,
      Group: "Mononof",
      Count: 2,
      MP: 100,
      First: {
        Base: new PhysicsSkill(50, 0, 2, true, true)
      },
      Second: {
        Base: new PhysicsSkill(150, 100, 2, true, true)
      }
    },
    "Mononof-4-10-1": {
      Name: "天流乱星(4段目)",
      Tree:SkillTree.Mononof,
      Torauma: Torauma.Physical,
      Group: "Mononof",
      Count: 1,
      MP: 100,
      First: {
        Base: new PhysicsSkill(1600, 100, 3, true, true),
        Power: Refs => Refs.OtherInfo.IsIndomitable >= 50 ? 400 : 0,
        Addition: {
          HIT: 120
        },
        Effect:"HIT補正+120"
      },
    },
    "Mononof-4-10-2-Edit": {
      Name: "天流乱星(段数可変)",
      Tree:SkillTree.Mononof,
      Torauma: Torauma.Physical,
      Group: "Mononof",
      Count: 1,
      MP: 100,
      Charge: new SkillCharge(1, 1, 4),
      ChargeType: SkillChargeType.Step,
      First: {
        Base: new PhysicsSkill(0, 100, 3, true, true),
        Power: Refs => { 
          const Base = 400;
          const Bonus = Refs.OtherInfo.IsIndomitable >= 50 ? 100 : 0;

          return (Base + Bonus) * Refs.OtherInfo.ChargeLv;
        },
        Addition: {
          HIT:(Refs) => Refs.OtherInfo.ChargeLv * 30
        },
        Effect:"HIT補正+段数*30"
      }
    },
    "Mononof-4-10-3": {
      Name: "天流乱星・斬納(4段目)",
      Tree:SkillTree.Mononof,
      Torauma: Torauma.Physical,
      Group: "Mononof",
      Count: 1,
      MP: 0,
      First: {
        Base: new PhysicsSkill(2100, 300, 3, true, true),
        Option: {
          G_Hit: true,
        }
      }
    },
    "Mononof-4-10-4-Edit": {
      Name: "天流乱星・斬納(段数可変)",
      Tree:SkillTree.Mononof,
      Torauma: Torauma.Physical,
      Group: "Mononof",
      Count: 1,
      MP: 0,
      Charge: new SkillCharge(1, 1, 4),
      ChargeType: SkillChargeType.Step,
      First: {
        Base: new PhysicsSkill(1300, 300, 3, true, true),
        Power: Refs => 200 * Refs.OtherInfo.ChargeLv,
        Option: {
          G_Hit: true,
        }
      }
    },
    "Mononof-5-10": {
      Name: "霞雪月花",
      Tree:SkillTree.Mononof,
      Torauma: Torauma.Physical,
      Group: "Mononof",
      Count: 2,
      MP: 500,
      First: {
        Base: new PhysicsSkill(1500, 500, 3, true, true, { IsLongRange: false }),
        Checker: function (Refs) {
          this.Base.IsLongRange = (Refs.OtherInfo.Wepon === "BW" && Refs.OtherInfo.SubWepon === "KTN");
        }
      },
      Second: {
        Base: new PhysicsSkill(100, 200, 3, true, true, { CutRate: 0, IsLongRange: false }),
        Power: Refs => Math.floor(Refs.Status.DEX_After) / 2.5,
        Checker: function (Refs) {
          this.Base.IsLongRange = (Refs.OtherInfo.Wepon === "BW" && Refs.OtherInfo.SubWepon === "KTN");
        },
        Addition: {
          ATKPenetrate: Refs => Math.floor(Refs.Status.DEX / 5)
        },
        Effect:"威力+補正後DEX×0.4% 物理貫通ボーナス+基礎DEX/5%"
      }
    },
    "Mononof-5-10-2": {
      Name: "霞雪月花(1/4hit+追撃ダメージ)",
      Tree:SkillTree.Mononof,
      Torauma: Torauma.Physical,
      Group: "Mononof",
      Count: 2,
      MP: 500,
      First: {
        Base: new PhysicsSkill(1500 / 4, 500, 3, true, true, { IsLongRange: false }),
        Checker: function (Refs) {
          this.Base.IsLongRange = (Refs.OtherInfo.Wepon === "BW" && Refs.OtherInfo.SubWepon === "KTN");
        }
      },
      Second: {
        Base: new PhysicsSkill(100, 200, 3, true, true, { CutRate: 0, IsLongRange: false }),
        Power: Refs => Math.floor(Refs.Status.DEX_After) / 2.5,
        Checker: function (Refs) {
          this.Base.IsLongRange = (Refs.OtherInfo.Wepon === "BW" && Refs.OtherInfo.SubWepon === "KTN");
        },
        Addition: {
          ATKPenetrate: Refs => Math.floor(Refs.Status.DEX / 5)
        },
        Effect:"威力+補正後DEX×0.4%\n物理貫通ボーナス+基礎DEX/5%"
      }
    },
    "Mononof-5-10-3": {
      Name: "天流乱星・斬維：4段目(霞雪月花)",
      Tree:SkillTree.Mononof,
      Torauma: Torauma.Physical,
      Group: "Mononof",
      Count: 2,
      MP: 500,
      First: {
        Base: new PhysicsSkill(1500, 500, 3, true, true, { CutRate: 2 }),
      },
      Second: {
        Base: new PhysicsSkill(1600, 200, 3, true, true, { CutRate: 0 }),
        Power: Refs => Math.floor(Refs.Status.DEX_After) * 2,
        Addition: {
          ATKPenetrate: Refs => Math.floor(Refs.Status.DEX / 5)
        },
        Effect:"威力+補正後DEX×0.4%\n物理貫通ボーナス+基礎DEX/5%"
      }
    },
    "Mononof-5-10-4-edit": {
      Name: "天流乱星・斬維：段位可変(霞雪月花)",
      Tree:SkillTree.Mononof,
      Torauma: Torauma.Physical,
      Group: "Mononof",
      Count: 2,
      MP: 500,
      Charge: new SkillCharge(0, 0, 4),
      ChargeType: SkillChargeType.Step,
      First: {
        Base: new PhysicsSkill(1500, 500, 3, true, true, { CutRate: 2 }),
      },
      Second: {
        Base: new PhysicsSkill(0, 200, 3, true, true, { CutRate: 0 }),
        Power: Refs => {
          const StepLv = Refs.OtherInfo.ChargeLv;
          const DexBonus = [2 / 5, 1 / 2, 2 / 3, 1, 2][StepLv];
          const BasePower = StepLv === 0 ? 100 : (400 * StepLv);

          return Math.floor(BasePower + Math.floor(Refs.Status.DEX_After) * DexBonus);
        },
        Addition: {
          ATKPenetrate: Refs => Math.floor(Refs.Status.DEX / 5)
        },
        Effect:"威力+補正後DEX×(最大2倍)%\n物理貫通ボーナス+基礎DEX/5%"
      }
    },
    "Mononof-5-20": {
      Name: "無影斬-新仕様",
      Tree:SkillTree.Mononof,
      Torauma: Torauma.Nomal,
      Group: "Mononof",
      Count: 1,
      MP: 300,
      First: {
        Base: new PhysicsSkill(900, 300, 3, true, true, { IsLongRange: false }),
        Power: Refs => Refs.Status.DEX / 2,
        Checker: function (Refs) {
          this.Base.IsLongRange = (Refs.OtherInfo.Wepon === "BW" && Refs.OtherInfo.SubWepon === "KTN");
        },
        Addition: {
          HIT: 2000
        },
        Effect:"威力+基礎DEX/2%"
      },
    },
    "Mononof-5-30": {
      Name: "天上天下無双斬り",
      Tree:SkillTree.Mononof,
      Torauma: Torauma.Physical,
      Group: "Mononof",
      Count: 1,
      MP: 500,
      First: {
        Base: new PhysicsSkill(3000, 500, 2, true, true),
        Power: Refs => Refs.OtherInfo.WeponATK,
        Fixed: Refs => Refs.OtherInfo.IsBreaker ? 500 : 0,
        Addition: {
          ATKPenetrate: Refs => Refs.OtherInfo.IsKairiki * 10
        },
        Option: {
          G_Hit: true,
        },
        Effect:"威力+武器ATK値%\n物理貫通+怪力乱神Lv×10%\n破壊時固定値+500"
      },
    },
    "Mononof2-3-a0": {
      Name: "雲雀(進度連動)",
      Tree: SkillTree.Mononof,
      Torauma: Torauma.Nomal,
      Group: "Mononof",
      Count: 2,
      MP: 300,
      First: {
        Base: new PhysicsSkill(0, 300, 12, "AbsDistance", false),
        Power: Refs => {
          const { IsMONONOFWind, IsMONONOFWind2 } = Refs.OtherInfo;
          if (!IsMONONOFWind) return 0;
          return 900 + (IsMONONOFWind - 1) * 100 + (IsMONONOFWind2 ?? 0) * 45;
        },
      },
    },
    "Mononof2-3-b0": {
      Name: "雁渡(進度連動)",
      Tree: SkillTree.Mononof,
      Torauma: Torauma.Nomal,
      Group: "Mononof",
      Count: 2,
      MP: 300,
      First: {
        Base: new PhysicsSkill(0, 300, 12, "AbsDistance", false),
        Power: Refs => {
          const { IsMONONOFWind, IsMONONOFWind2 } = Refs.OtherInfo;
          if (!IsMONONOFWind) return 0;
          return 900 - (IsMONONOFWind - 1) * 150 + (IsMONONOFWind2 ?? 0) * 30;
        },
        Addition: {
          ATKPenetrate: (Refs) => Refs.AdditionStatus.All.ATKPenetrate * 3
        },
        Effect: "物理貫通4倍計算",
        Split:2
      },
      Second: {
        Base: new PhysicsSkill(0, 300, 12, "AbsDistance", false),
        Power: Refs => {
          const { IsMONONOFWind, IsMONONOFWind2 } = Refs.OtherInfo;
          if (!IsMONONOFWind) return 0;
          return 900 - (IsMONONOFWind - 1) * 150 + (IsMONONOFWind2 ?? 0) * 30;
        },
        Addition: {
          ATKPenetrate: (Refs) => Refs.AdditionStatus.All.ATKPenetrate * 3
        },
        Effect: "物理貫通4倍計算",
        Split:2
      }
    },
    "Mononof2-3-c0": {
      Name: "居吹(進度連動)",
      Tree: SkillTree.Mononof,
      Torauma: Torauma.Nomal,
      Group: "Mononof",
      Count: 2,
      MP: 300,
      First: {
        Base: new PhysicsSkill(0, 300, 12, "AbsDistance", false),
        Power: Refs => {
          const { IsMONONOFWind, IsMONONOFWind2 } = Refs.OtherInfo;
          if (!IsMONONOFWind) return 0;
          return 900 + (IsMONONOFWind - 1) * 50 + (IsMONONOFWind2 ?? 0) * 45;
        },
        Split:2
      },
      Second: {
        Base: new PhysicsSkill(0, 300, 12, "AbsDistance", false),
        Power: Refs => {
          const { IsMONONOFWind, IsMONONOFWind2 } = Refs.OtherInfo;
          if (!IsMONONOFWind) return 0;
          return 900 + (IsMONONOFWind - 1) * 50 + (IsMONONOFWind2 ?? 0) * 45;
        },
        Split:2
      },
    },
    "Mononof2-3-d0": {
      Name: "荒南風(進度連動)",
      Tree: SkillTree.Mononof,
      Torauma: Torauma.Nomal,
      Group: "Mononof",
      Count: 2,
      MP: 300,
      First: {
        Base: new PhysicsSkill(0, 300, 12, "AbsDistance", false),
        Power: Refs => {
          const { IsMONONOFWind, IsMONONOFWind2 } = Refs.OtherInfo;
          if (!IsMONONOFWind) return 0;
          return 700 + (IsMONONOFWind - 1) * 150 + (IsMONONOFWind2 ?? 0) * 35;
        },
      },
    },
    "Mononof2-4-10": {
      Name: "颯(最短)",
      Tree: SkillTree.Mononof,
      Torauma: Torauma.Physical,
      Group: "Mononof",
      Count: 1,
      MP: 400,
      First: {
        Base: new PhysicsSkill(900, 400, 12, "Distance", false),
      },
    },
    "Mononof2-4-20": {
      Name: "颯(最長)",
      Tree: SkillTree.Mononof,
      Torauma: Torauma.Physical,
      Group: "Mononof",
      Count: 1,
      MP: 400,
      First: {
        Base: new PhysicsSkill(1800, 400, 12, "Distance", false),
      },
    },
    "Mononof2-4-z0":{
      Name: "刹那絢爛・四季折々(進度連動)",
      Tree: SkillTree.Mononof,
      Torauma: Torauma.Physical,
      ShowTorauma:Torauma.Nomal,
      Group: "Mononof",
      Count:4,
      MP: 300,
      First: {
        Base: new PhysicsSkill(0, 300, 12, true, false, { AbsHIT: true ,AbsAttribute : true}),
        Power: Refs => {
          const { IsMONONOFWind, IsMONONOFWind2 } = Refs.OtherInfo;
          if (!IsMONONOFWind) return 0;
          return 2100 - (IsMONONOFWind - 1) * 150 + (IsMONONOFWind2 ?? 0) * 30;
        },
        Addition:{
          ATKPenetrate: 100
        },
    
      },
      Second: {
        Base: new PhysicsSkill(0, 300, 12, true, false, { AbsHIT: true ,AbsAttribute : true}),
        Power: Refs => {
          const { IsMONONOFWind, IsMONONOFWind2 } = Refs.OtherInfo;
          if (!IsMONONOFWind) return 0;
          return 2350 + (IsMONONOFWind - 1) * 50 + (IsMONONOFWind2 ?? 0) * 45;
        },
        Addition:{
          ATKPenetrate: 100
        },
      
      },
      Therd: {
        Base: new PhysicsSkill(0, 300, 12, true, false, { AbsHIT: true ,AbsAttribute : true}),
        Power: Refs => {
          const { IsMONONOFWind, IsMONONOFWind2 } = Refs.OtherInfo;
          if (!IsMONONOFWind) return 0;
          return 2050 + (IsMONONOFWind - 1) * 150 + (IsMONONOFWind2 ?? 0) * 35;
        },
        Addition:{
          ATKPenetrate: 100
        },
      },
      Fourth: {
        Base: new PhysicsSkill(0, 300, 12, true, false, { AbsHIT: true ,AbsAttribute : true}),
        Power: Refs => {
          const { IsMONONOFWind, IsMONONOFWind2 } = Refs.OtherInfo;
          if (!IsMONONOFWind) return 0;
          return 2450 + (IsMONONOFWind - 1) * 100 + (IsMONONOFWind2 ?? 0) * 45;
        },
        Addition:{
          ATKPenetrate: 100
        },
      }
    },
    "Martial-3-10": {
      Name: "ラッシュ",
      Tree:SkillTree.Martial,
      Torauma: Torauma.Physical,
      Group: "Martial",
      Count: 1,
      MP: 400,
      Wepon: ["MA"],
      First: {
        Base: new PhysicsSkill(700, 200, 6, true),
        Power: Refs => [Refs.OtherInfo.Wepon, Refs.OtherInfo.SubWepon].includes("MA") ? 200 + Refs.Status.AGI * 2 : 0,
        Fixed: Refs => [Refs.OtherInfo.Wepon, Refs.OtherInfo.SubWepon].includes("MA") ? 200 : 0,
        Effetc:"手甲装備時：威力+200% + 基礎AGI×2% 固定値+200"
      }
    },
    "Martial-4-10": {
      Name: "チャリオット",
      Tree:SkillTree.Martial,
      Torauma: Torauma.Physical,
      Group: "Martial",
      Wepon: ["MA"],
      Count: 1,
      MP: 500,
      First: {
        Base: new PhysicsSkill(1000, 250, 10, true), 
        Power: Refs => [Refs.OtherInfo.Wepon, Refs.OtherInfo.SubWepon].includes("MA") ? 250 + Refs.Status.AGI : 0,
        Fixed: Refs => [Refs.OtherInfo.Wepon, Refs.OtherInfo.SubWepon].includes("MA") ? 250 : 0,
        Effect:"手甲装備時：威力+250% + 基礎AGI% 固定値+250"
      }
    },
    "Martial-4-20": {
      Name: "フラッシュアーツ",
      Tree:SkillTree.Martial,
      Torauma: Torauma.Nomal,
      ShowTorauma:Torauma.Nomal,
      Group: "Martial",
      Wepon: ["MA"],
      Count: 1,
      MP: 100,
      First: {
        Base: new PhysicsSkill(600, 100, 4, true),
        Power: Refs => Refs.Status.AGI / 3,
        Effect:"威力+基礎AGI/3%"
      }
    },
    "DS-1-10": {
      Name: "ツインスラッシュ",
      Tree:SkillTree.DualSword,
      Group: "DualSword",
      Count: 1,
      MP: 200,
      First: {
        Base: new PhysicsSkill(250, 200, 4, true, false),
        TwinCrit: Refs => {
          if (Refs.OtherInfo.Wepon !== "DS") return 0;
          if (!Refs.OtherInfo.IsTwinSrash) return 0;
          return 1;
        }
      }
    },
    "DS-2-10-1": {
      Name: "エアスライド(追撃fullHit)",
      Tree:SkillTree.DualSword,
      Torauma: Torauma.Magic,
      Group: "DualSword",
      Count: 4,
      MP: 100,
      First: {
        Base: new PhysicsSkill(150, 100, 4, false, false),
        Power: Refs => (Refs.OtherInfo.IsAirSlide ?? 0) * 5,
        Effect:"威力+レジスタ(エアスライド・圧縮)Lv × 5%"
      },
      Second: {
        Base: new PhysicsSkill(150, 0, 4, false, false),
        Power: Refs => (Refs.OtherInfo.IsAirSlide ?? 0) * 15,
        Effect:"威力+レジスタ(エアスライド・圧縮)Lv × 15%"
      },
    },
    "DS-2-10-2": {
      Name: "エアスライド(追撃なし)",
      Tree:SkillTree.DualSword,
      Torauma: Torauma.Magic,
      Group: "DualSword",
      Count: 4,
      MP: 100,
      First: {
        Base: new PhysicsSkill(150, 100, 4, false, false),
        Power: Refs => (Refs.OtherInfo.IsAirSlide ?? 0) * 5,
        Effect:"威力+レジスタ(エアスライド・圧縮)Lv × 5%"
      },
    },
    "DS-4-10": {
      Name: "シャイニングクロス(4m)",
      Tree:SkillTree.DualSword,
      Torauma: Torauma.Physical,
      Group: "DualSword",
      Count: 1,
      MP: 600,
      First: {
        Base: new PhysicsSkill(400, 300, 12, true),
        Power: Refs =>
          Refs.Status.STR_After / 5 + Refs.Status.AGI_After / 5 + Refs.Status.DEX_After / 5,
        Effect:"威力+(補正後STR/5 + 補正後AGI/5 + 補正後DEX/5)%"
      },
      Second: {
        Base: new PhysicsSkill(400, 300, 12, true),
        Power: Refs =>
          Refs.Status.STR_After / 5 + Refs.Status.AGI_After / 5 + Refs.Status.DEX_After / 5,
        Effect:"威力+(補正後STR/5 + 補正後AGI/5 + 補正後DEX/5)%"
      },
    },
    "DS-4-10-2": {
      Name: "赫焉シャイニングクロス(4m)",
      Tree:SkillTree.DualSword,
      Torauma: Torauma.Physical,
      Group: "DualSword",
      Count: 1,
      MP: 600,
      First: {
        Base: new PhysicsSkill(400, 300, 12, true),
        Power: Refs =>
          Refs.Status.STR_After / 4 + Refs.Status.AGI_After / 4 + Refs.Status.DEX_After / 4,
        Effect:"威力+(補正後STR/4 + 補正後AGI/4 + 補正後DEX/4)%"
      },
      Second: {
        Base: new PhysicsSkill(400, 300, 12, true),
        Power: Refs =>
          Refs.Status.STR_After / 4 + Refs.Status.AGI_After / 4 + Refs.Status.DEX_After / 4,
        Effect:"威力+(補正後STR/4 + 補正後AGI/4 + 補正後DEX/4)%"
      },
    },
    "DS-4-20": {
      Name: "シュツルムリーパー",
      Tree:SkillTree.DualSword,
      Torauma: Torauma.Physical,
      Group: "DualSword",
      Count: 2,
      MP: 400,
      First: {
        Base: new PhysicsSkill(500, 200, 8, "LongDistance", true),
        Power: Refs => Refs.Status.DEX / 2.5,
        Effect:"威力+基礎DEX×0.4%"
      },
      Second: {
        Base: new PhysicsSkill(500, 200, 8, "LongDistance", true),
        Power: Refs => Refs.Status.DEX / 2.5,
        Effect:"威力+基礎DEX×0.4%"
      }
    },
    "DS-5-10": {
      Name: "エアスライサー",
      Tree:SkillTree.DualSword,
      Torauma: Torauma.Magic,
      Group: "DualSword",
      Count: 2,
      MP: 100,
      First: {
        Base: new PhysicsSkill(300, 100, 8, true),
        Power: Refs => {
          const Status = Refs.Status.DEX;
          const Buff = Refs.OtherInfo.IsAirSlide

          return Status + (Buff ? Number(Buff) : 0) * 20;
        },
        Effect:"威力+基礎DEX%",
      },
      Second: {
        MP: 200,
        Base: new PhysicsSkill(1500, 200, 8, true),
        Power: Refs => Refs.Status.STR,
        TwinCrit: Refs => {
          if (Refs.OtherInfo.Wepon !== "DS") return 0;
          if (!Refs.OtherInfo.IsTwinSrash) return 0;
          return Refs.OtherInfo.IsDarkness ? 1 : 0.5;
        },
        Effect:"クリティカルダメージ補正\n威力+基礎STR%",
      },
    },
    "DS-5-20-0": {
      Name: "ルーナディザスター+追撃5hit",
      Tree:SkillTree.DualSword,
      Torauma: Torauma.Physical,
      Group: "DualSword",
      Count: 3,
      MP: 400,
      First: {
        Base: new PhysicsSkill(1000, 400, 12, true, true),
        Power: Refs => Math.floor(Refs.Status.DEX_After * 2 / 3),
        Checker: function (Refs) {
          const { IsReaper, IsStrongRuna } = Refs.OtherInfo;

          this.Base.IsDistance = IsReaper > 0 && IsStrongRuna > 0 ? "AbsDistance" : true;
        },
        Split: 2,
        Effect:"威力+補正後DEX×2/3%"
      },
      Second: {
        Base: new PhysicsSkill(1000, 400, 12, true, true),
        Power: Refs => Math.floor(Refs.Status.DEX_After * 2 / 3),
        Checker: function (Refs) {
          const { IsReaper, IsStrongRuna } = Refs.OtherInfo;

          this.Base.IsDistance = IsReaper > 0 && IsStrongRuna > 0 ? "AbsDistance" : true;
        },
        Split: 2,
        Effect:"威力+補正後DEX×2/3%"
      },
      Therd: {
        Base: new PhysicsSkill(1500, 0, 12, "AbsLongDistance"),
        Addition: { ATKPenetrate: 50 },
      },
    },
    "DS-5-20-1": {
      Name: "ルーナディザスター+追撃1hit",
      Tree:SkillTree.DualSword,
      Torauma: Torauma.Physical,
      Group: "DualSword",
      Count: 3,
      MP: 400,
      First: {
        Base: new PhysicsSkill(1000, 400, 12, true, true),
        Power: Refs => Math.floor(Refs.Status.DEX_After * 2 / 3),
        Checker: function (Refs) {
          const { IsReaper, IsStrongRuna } = Refs.OtherInfo;

          this.Base.IsDistance = IsReaper > 0 && IsStrongRuna > 0 ? "AbsDistance" : true;
        },
        Split: 2,
        Effect:"威力+補正後DEX×2/3%"
      },
      Second: {
        Base: new PhysicsSkill(1000, 400, 12, true, true),
        Power: Refs => Math.floor(Refs.Status.DEX_After * 2 / 3),
        Checker: function (Refs) {
          const { IsReaper, IsStrongRuna } = Refs.OtherInfo;

          this.Base.IsDistance = IsReaper > 0 && IsStrongRuna > 0 ? "AbsDistance" : true;
        },
        Split: 2,
        Effect:"威力+補正後DEX×2/3%"
      },
      Therd: {
        Base: new PhysicsSkill(300, 0, 12, "AbsLongDistance"),
        Addition: { ATKPenetrate: 50 },
      },
    },

    "DS-5-20-3": {
      Name: "ルーナディザスター(追撃無し)",
      Tree:SkillTree.DualSword,
      Torauma: Torauma.Physical,
      Group: "DualSword",
      Count: 3,
      MP: 400,
      First: {
        Base: new PhysicsSkill(1000, 400, 12, true, true),
        Power: Refs => Math.floor(Refs.Status.DEX_After * 2 / 3),
        Checker: function (Refs) {
          const { IsReaper, IsStrongRuna } = Refs.OtherInfo;

          this.Base.IsDistance = IsReaper > 0 && IsStrongRuna > 0 ? "AbsDistance" : true;
        },
        Split: 2,
        Effect:"威力+補正後DEX×2/3%"
      },
      Second: {
        Base: new PhysicsSkill(1000, 400, 12, true, true),
        Power: Refs => Math.floor(Refs.Status.DEX_After * 2 / 3),
        Checker: function (Refs) {
          const { IsReaper, IsStrongRuna } = Refs.OtherInfo;

          this.Base.IsDistance = IsReaper > 0 && IsStrongRuna > 0 ? "AbsDistance" : true;
        },
        Split: 2,
        Effect:"威力+補正後DEX×2/3%"
      },
    },
    "DS-5-30-1": {
      Name: "ツインバスターブレード(敵1体)",
      Tree:SkillTree.DualSword,
      Torauma: Torauma.Physical,
      Group: "DualSword",
      Count: 2,
      MP: 300,
      First: {
        Base: new PhysicsSkill(750, 300, 4, true, false, { AbsCrit: true }),
        Power: Refs => Math.floor(Refs.Status.DEX / 2 + Refs.Status.AGI / 2),
        Effect:"威力+(基礎DEX/2 + 基礎AGI/2)%"
      },
      Second: {
        Base: new PhysicsSkill(500, 300, 4, true, true, { AbsCrit: true }),
        Power: Refs => Refs.Status.STR / 2,
        Effect:"威力+基礎STR/2%"
      }
    },
    "DS-5-30-2-Edit": {
      Name: "ツインバスターブレード(敵数可変)",
      Tree:SkillTree.DualSword,
      Torauma: Torauma.Physical,
      Group: "DualSword",
      Count: 2,
      MP: 300,
      Charge: new SkillCharge(1, 1, 10),
      ChargeType: SkillChargeType.Enemy,
      First: {
        Base: new PhysicsSkill(750, 300, 4, true, false, { AbsCrit: true }),
        Power: Refs => Refs.Status.DEX / 2 + Refs.Status.AGI / 2,
        Effect:"威力+(基礎DEX/2 + 基礎AGI/2)%"
      },
      Second: {
        Base: new PhysicsSkill(500, 300, 4, true, true),
        Power: Refs => Refs.Status.STR / 2 * Refs.OtherInfo.ChargeLv,
        Effect:"威力+基礎STR/2%"
      }
    },
    "DS-4-30": {
      Name: "エアリアルレイ",
      Tree:SkillTree.DualSword,
      Torauma: Torauma.Physical,
      Group: "DualSword",
      Count: 1,
      First: {
        Base: new PhysicsSkill(500, 300, 4, true, false, {}),
        Power: Refs => {
          const { STR, AGI, DEX } = Refs.Status;

          if (Refs.OtherInfo.SubWepon === "MD") return Math.max(STR, AGI, DEX) * 0.6;
          if (Refs.OtherInfo.Wepon !== "DS") return Refs.Status.DEX_After;
          
          return 500 + Math.max(STR, AGI, DEX) / 2;
        },
        /* Fixed:Refs=> Refs.OtherInfo.SubWepon === "MD" ? 75 : 0 , */
/*         Checker: function (Refs) {
          const MagicSkill = Refs.OtherInfo.SubWepon === "MD";
          const Longrange = ["MD", "SC", "AR"].includes(Refs.OtherInfo.SubWepon);

          this.Base.Reference = (Refecence) => Refecence.Status[MagicSkill ? "MATK" : "AllATK"];
          this.Base.IsMagicalSkill = MagicSkill;
          this.Base.IsPhysical = !MagicSkill;
          this.Base.IsDEF = !MagicSkill;
          this.Base.IsDistance = Longrange ? true : "Distance";
          this.Base.MaxRange = Longrange ? 12 : 4;
          this.Base.PowerEffect = MagicSkill ? "MATK" : "ATK"
        }, */
        Effect:"双剣装備時：威力+500 + MAX(基礎STR、基礎AGI、基礎DEX) / 2\n双剣以外：威力+補正後DEX", 
      }
    },
    "DS-4-40": {
      Name: "ホライゾナルカット",
      Tree:SkillTree.DualSword,
      Torauma: Torauma.Physical,
      Group: "DualSword",
      Count: 1,
      First: {
        Base: new PhysicsSkill(500, 300, 2, true, false),
        Power: Refs => {
          const Wepon = Refs.OtherInfo.Wepon;
          
          return Wepon === "DS"
            ? Refs.Status.DEX_After / 2
            : 500 + Refs.Status.DEX_After;
        },
        Fixed: Refs => Refs.OtherInfo.Wepon === "OH" ? 300 : 0,
        Effect: "威力+総DEX/2%"
      },
      Second: {
        Base: new PhysicsSkill(500, 300, 2, true, false),
        Power: Refs => Refs.OtherInfo.Wepon === "OH" ? -500 : Math.max(Refs.Status.STR, Refs.Status.AGI) / 2,
        Effect: "威力+MAX(基礎STR、基礎AGI)/2%"
      }
    },
    "CR-2-10-1": {
      Name: "ゴリアステイクショット(溜め最大)",
      Tree:SkillTree.Crucher,
      Torauma: Torauma.Physical,
      Group: "Martial",
      Count: 1,
      MP: 500,
      First: {
        Base: new PhysicsSkill(2800, 500, 3, true, false),
        Power: Refs => Refs.OtherInfo.IsGodHand * 600
      }
    },
    "CR-2-10-2-Edit": {
      Name: "ゴリアステイクショット(溜め可変)",
      Tree:SkillTree.Crucher,
      Torauma: Torauma.Physical,
      Group: "Martial",
      Count: 1,
      MP: 500,
      Charge: new SkillCharge(0, 0, 5),
      ChargeType: SkillChargeType.Stock,
      First: {
        Base: new PhysicsSkill(800, 500, 3, true, false),
        Power: Refs => {
          const ChargeLv = Refs.OtherInfo.ChargeLv;
          const Base = ChargeLv * 400;
          const Godhand = Refs.OtherInfo.IsGodHand * 100 * (ChargeLv + 1);

          return Base + Godhand;
        }
      }
    },
    "CR-4-10-1": {
      Name: "ゲイザーシュート(近距離)(新仕様)",
      Tree:SkillTree.Crucher,
      Torauma: Torauma.Physical,
      Group: "Martial",
      Count: 1,
      MP: 300,
      First: {
        Base: new PhysicsSkill(1000, 300, 12, "Distance", false),
        Power: Refs => Refs.Status.AGI_After / 2 + Refs.OtherInfo.IsGodHand * 100,
        Addition: {
          ATKPenetrate: 20
        },
        Effect:"威力+補正後AGI/2%\n物理貫通+20%"
      }
    },
    "CR-4-10-2": {
      Name: "ゲイザーシュート(遠距離)(新仕様)",
      Tree:SkillTree.Crucher,
      Torauma: Torauma.Physical,
      Group: "Martial",
      Count: 1,
      MP: 300,
      First: {
        Base: new PhysicsSkill(1500, 300, 12, "LongDistance", false),
        Power: Refs => Refs.Status.AGI_After / 2 + Refs.OtherInfo.IsGodHand * 100,
        Addition: {
          ATKPenetrate: 20
        },
        Option: {
          G_Hit: true
        },
        Effect:"威力+補正後AGI/2%\n物理貫通+20%"
      }
    },
    "CR-4-20": {
      Name: "ジオクラッシャー",
      Tree:SkillTree.Crucher,
      Torauma: Torauma.Physical,
      Group: "Martial",
      Count: 1,
      MP: 800,
      First: {
        Base: new PhysicsSkill(1500, 800, 2, true, false),
        Power: Refs => Math.max(Refs.Status.STR, Refs.Status.AGI),
        Effect:"威力+基礎STR%または基礎AGI%の高い方"
      }
    },
    "DarkPower-4-10-1": {
      Name: "ソウルハント(溜めなし)※固定属性無視",
      Tree:SkillTree.DarkPower,
      Torauma: Torauma.Magic,
      ShowTorauma: Torauma.Magic,
      Group: "Other",
      Count: 2,
      MP: 400,
      First: {
        Base: new PhysicsSkill(1000, 400, 4, true),
        Power: Refs => {
          const Wepon = Refs.OtherInfo.Wepon;
          return Wepon === "OH"
            ? Refs.Status.STR / 2
            : Wepon === "KTN"
              ? Refs.Status.DEX
              : Wepon === "MA"
                ? Refs.Status.AGI / 2
                : Wepon === "BW" || Wepon === "BG"
                  ? -500
                  : 0;
        },
        Effect:"片手剣装備時：威力+基礎STR/2%\n抜刀剣装備時：威力+基礎DEX%\n手甲装備時：威力+基礎AGI/2%\n弓/自動弓装備時：威力-500%"
      },
      Second: {
        Base: new PhysicsSkill(500, 400, 4, true)
      },
    },
    "DarkPower-4-10-2": {
      Name: "ソウルハント(5溜め)※固定属性無視",
      Tree:SkillTree.DarkPower,
      Torauma: Torauma.Magic,
      ShowTorauma: Torauma.Magic,
      Group: "Other",
      Count: 2,
      MP: 400,
      First: {
        Base: new PhysicsSkill(1000, 400, 4, true),
        Power: Refs => {
          const Wepon = Refs.OtherInfo.Wepon;
          return Wepon === "OH"
            ? Refs.Status.STR / 2
            : Wepon === "KTN"
              ? Refs.Status.DEX
              : Wepon === "MA"
                ? Refs.Status.AGI / 2
                : Wepon === "BW" || Wepon === "BG"
                  ? -500
                  : 0;
        },
        Effect:"片手剣装備時：威力+基礎STR/2%\n抜刀剣装備時：威力+基礎DEX%\n手甲装備時：威力+基礎AGI/2%\n弓/自動弓装備時：威力-500%"
      },
      Second: {
        Base: new PhysicsSkill(1000, 400, 4, true)
      },
    },
    "DarkPower-4-10-3": {
      Name: "ソウルハント(10溜め)※固定属性無視",
      Tree:SkillTree.DarkPower,
      Torauma: Torauma.Magic,
      ShowTorauma: Torauma.Magic,
      Group: "Other",
      Count: 2,
      MP: 400,
      First: {
        Base: new PhysicsSkill(1000, 400, 4, true),
        Power: Refs => {
          const Wepon = Refs.OtherInfo.Wepon;
          return Wepon === "OH"
            ? Refs.Status.STR / 2
            : Wepon === "KTN"
              ? Refs.Status.DEX
              : Wepon === "MA"
                ? Refs.Status.AGI / 2
                : Wepon === "BW" || Wepon === "BG"
                  ? -500
                  : 0;
        },
        Effect:"片手剣装備時：威力+基礎STR/2%\n抜刀剣装備時：威力+基礎DEX%\n手甲装備時：威力+基礎AGI/2%\n弓/自動弓装備時：威力-500%"
      },
      Second: {
        Base: new PhysicsSkill(1500, 400, 4, true)
      },
    },
    "DarkPower-4-10-4-Edit": {
      Name: "ソウルハント(溜め可変)※固定属性無視",
      Tree:SkillTree.DarkPower,
      Torauma: Torauma.Magic,
      ShowTorauma: Torauma.Magic,
      Group: "Other",
      Count: 2,
      MP: 400,
      Charge: new SkillCharge(0, 0, 10),
      ChargeType: SkillChargeType.Stock,
      First: {
        Base: new PhysicsSkill(1000, 400, 4, true),
        Power: Refs => {
          const Wepon = Refs.OtherInfo.Wepon;
          return Wepon === "OH"
            ? Refs.Status.STR / 2
            : Wepon === "KTN"
              ? Refs.Status.DEX
              : Wepon === "MA"
                ? Refs.Status.AGI / 2
                : Wepon === "BW" || Wepon === "BG"
                  ? -500
                  : 0;
        },
        Effect:"片手剣装備時：威力+基礎STR/2%\n抜刀剣装備時：威力+基礎DEX%\n手甲装備時：威力+基礎AGI/2%\n弓/自動弓装備時：威力-500%"
      },
      Second: {
        Base: new PhysicsSkill(500, 400, 4, true),
        Power: Refs => 100 * Refs.OtherInfo.ChargeLv
      },
    },
    "DarkPower-4-10-5-Edit": {
      Name: "ソウルハント(溜め可変)※1段目非弱点属性",
      Tree:SkillTree.DarkPower,
      Torauma: Torauma.Magic,
      ShowTorauma: Torauma.Magic,
      Group: "Other",
      Count: 2,
      MP: 400,
      Charge: new SkillCharge(0, 0, 10),
      ChargeType: SkillChargeType.Stock,
      First: {
        Base: new PhysicsSkill(1000, 400, 4, true, false, { Attribute: SkillAttribute.No }),
        Power: Refs => {
          const Wepon = Refs.OtherInfo.Wepon;
          return Wepon === "OH"
            ? Refs.Status.STR / 2
            : Wepon === "KTN"
              ? Refs.Status.DEX
              : Wepon === "MA"
                ? Refs.Status.AGI / 2
                : Wepon === "BW" || Wepon === "BG"
                  ? -500
                  : 0;
        },
        Effect:"片手剣装備時：威力+基礎STR/2%\n抜刀剣装備時：威力+基礎DEX%\n手甲装備時：威力+基礎AGI/2%\n弓/自動弓装備時：威力-500%"
      },
      Second: {
        Base: new PhysicsSkill(500, 400, 4, true),
        Power: Refs => 100 * Refs.OtherInfo.ChargeLv
      },
    },
    "Knife-3-10": {
      Name: "ガトリングナイフ(1/8hit)",
      Tree:SkillTree.Knife,
      Torauma: Torauma.Physical,
      Group: "Other",
      Count: 8,
      MP: 300,
      First: {
        Base: new PhysicsSkill(100, 40, 12, true),
        Power: Refs => (Refs.Status.STR + Refs.Status.DEX + Refs.Status.AGI) / 30,
        Fixed: Refs => Refs.OtherInfo.SubWepon === "KN" ? Refs.OtherInfo.SubWeponATK : 0,
        Effect:"威力+(基礎STR + 基礎DEX + 基礎AGI)/30%\n短剣装備時：固定値+短剣ATK"
      },
    },
    "Knife-4-10-1": {
      Name: "フリンチナイフ",
      Tree:SkillTree.Knife,
      Torauma:Torauma.Physical,
      Group: "Other",
      Count:1,
      Mp:300,
      First: {
        Base: new PhysicsSkill(400, 300, 4, true, false, { AbsCrit: true }),
        Power: Refs => {
          if (Refs.OtherInfo.SubWepon !== "KN") return 0;
          return Math.floor(Refs.OtherInfo.SubWeponATK / 2);
        },
        Effect:"威力+短剣ATK / 2%"
      }
    },
    "Knife-4-10-2": {
      Name: "ファイティングナイフ(フリンチナイフ)",
      Tree:SkillTree.Knife,
      Torauma:Torauma.Physical,
      Group: "Other",
      Count:1,
      Mp:300,
      First: {
        Base: new PhysicsSkill(800, 300, 4, true, false, { AbsCrit: true }),
        Power: Refs => {
          if (Refs.OtherInfo.SubWepon !== "KN") return 0;
          return Math.floor(Refs.OtherInfo.SubWeponATK / 2) * 2;
        },
        Addition:{
          ATKPenetrate:100
        },
        Effect:"威力+短剣ATK%(フリンチナイフ短剣ボーナスの2倍)"
      }
    },
    "Assassin-3-10-1": {
      Name: "アサシンスタブ(バックスタブ)",
      Tree:SkillTree.Assassin,
      Torauma: Torauma.Physical,
      Group: "Other",
      Count: 1,
      MP: 300,
      First: {
        Base: new PhysicsSkill(0, 300, 4, true),
        Power: Refs => {
          const IsBuffEnable = ["KN", "SC"].includes(Refs.OtherInfo.SubWepon);
          const RegistletPower = Refs.OtherInfo.IsAssassinStub ? Number(Refs.OtherInfo.IsAssassinStub) : 0;

          const AssassinationMasterBonus1 = (Refs.OtherInfo.IsAssassinationMaster === false || IsBuffEnable === false) ? 0
            : Refs.OtherInfo.Wepon !== "HB" ? 150 : 30;
          
          const AssassinationMasterBonus2 = Refs.OtherInfo.IsAssassinationMaster === false ? 0
            : Refs.OtherInfo.Wepon !== "HB" ? 100 : 20;         

          return ((IsBuffEnable ? 750 : 350) + RegistletPower + AssassinationMasterBonus1 + AssassinationMasterBonus2) * 1.5;
        }
      },
    },
    "Assassin-3-10-2": {
      Name: "アサシンスタブ(バックスタブ+バックステップ)",
      Tree:SkillTree.Assassin,
      Torauma: Torauma.Physical,
      Group: "Other",
      Count: 1,
      MP: 300,
      First: {
        Base: new PhysicsSkill(0, 300, 4, true),
        Power: Refs => {
          const IsBuffEnable = ["KN", "SC"].includes(Refs.OtherInfo.SubWepon);
          const RegistletPower = Refs.OtherInfo.IsAssassinStub ? Number(Refs.OtherInfo.IsAssassinStub) : 0;

          const AssassinationMasterBonus1 = (Refs.OtherInfo.IsAssassinationMaster === false || IsBuffEnable === false) ? 0
            : Refs.OtherInfo.Wepon !== "HB" ? 150 : 30;
          
          const AssassinationMasterBonus2 = Refs.OtherInfo.IsAssassinationMaster === false ? 0
            : Refs.OtherInfo.Wepon !== "HB" ? 100 : 20; 
          
          return ((IsBuffEnable ? 750 : 350) + RegistletPower + AssassinationMasterBonus1 + AssassinationMasterBonus2) * 3;
        }
      },
    },
    "Sheild-3-10": {
      Name: "シールドキャノン(気絶付与時)※固定属性無視",
      Tree:SkillTree.Shield,
      Torauma: Torauma.Physical,
      Group: "Other",
      Count: 1,
      MP: 200,
      First: {
        Base: new PhysicsSkill(0, 200, 20, true),
        Power: Refs => Refs.OtherInfo.SubWepon === "SH" ? ((150 * (Refs.OtherInfo.SubSmelting)) || 150) : 0,
        Fixed: Refs => Refs.OtherInfo.SubWepon === "SH" ? Refs.Status.VIT * (1 + Refs.OtherInfo.SubSmelting / 5) : 0,
        Effect:"盾装備時：威力+150×精錬値% 固定値+基礎VIT×(1+精錬値/5)"
      },
    },
    "Wizzard-3-10": {
      Name: "ブリザード(1/6hit)",
      Tree:SkillTree.Wizard,
      Torauma: Torauma.Magic,
      Group: "Magic",
      Count: 6,
      MP: 100,
      First: {
        Base: new AddSkill(Refs => Refs.Status.WMATK,
          150, 100, 12, true, false, false, false, false, { Attribute: SkillAttribute.Aqua, PowerEffect: "(ATK × 0.25) + (MATK × 0.75) 通称【WATK】" }),
      },
    },
    "Wizzard-3-20": {
      Name: "ライトニング",
      Tree:SkillTree.Wizard,
      Torauma: Torauma.Magic,
      Group: "Magic",
      Count: 6,
      MP: 100,
      First: {
        Base: new AddSkill(Refs => Refs.Status.WMATK,
          700, 80, 12, true, false, false, "LongDistance", false, { PowerEffect: "(ATK × 0.25) + (MATK × 0.75) 通称【WATK】" }),
      },
    },
    "Wizzard-3-30": {
      Name: "メテオストライク",
      Tree:SkillTree.Wizard,
      Torauma: Torauma.Magic,
      Group: "Magic",
      Count: 6,
      MP: 100,
      First: {
        Base: new AddSkill(Refs => Refs.Status.WMATK,
          1500, 300, 12, true, false, false, "LongDistance", false, { PowerEffect: "(ATK × 0.25) + (MATK × 0.75) 通称【WATK】" }),
      },
    },
    "Wizzard-4-10-1": {
      Name: "インペリアルレイ(単発)",
      Tree:SkillTree.Wizard,
      Torauma: Torauma.No,
      Group: "Magic",
      Count: 6,
      MP: 100,
      First: {
        Base: new AddSkill(Refs => Refs.Status.WMATK,
          1000, 400, 12, true, false, false, true, false, { PowerEffect: "(ATK × 0.25) + (MATK × 0.75) 通称【WATK】" }),
        Power: (Refs) => {
          const { IsMagicResearch } = Refs.OtherInfo;
          return IsMagicResearch === false ? 0 : IsMagicResearch * 20;
        }
      },
    },
    "Wizzard-4-10-2": {
      Name: "インペリアルレイ(+追撃)",
      Tree:SkillTree.Wizard,
      Torauma: Torauma.No,
      Group: "Magic",
      Count: 6,
      MP: 100,
      First: {
        Base: new AddSkill(Refs => Refs.Status.WMATK,
          1000, 400, 12, true, false, false, true, false, { PowerEffect: "(ATK × 0.25) + (MATK × 0.75) 通称【WATK】" }),
        Power: (Refs) => {
          const { IsMagicResearch } = Refs.OtherInfo;
          return IsMagicResearch === false ? 0 : IsMagicResearch * 20;
        }
      },
      Second: {
        Base: new AddSkill(Refs => Refs.Status.WMATK,
          2000, 400, 0, true, false, false, true, false, { AbsCrit:true ,PowerEffect: "(ATK × 0.25) + (MATK × 0.75) 通称【WATK】" }),
        Power: (Refs) => {
          const { IsMagicResearch } = Refs.OtherInfo;
          return IsMagicResearch === false ? 0 : IsMagicResearch * 40;
        }
      },
    },
    "Ninja-1-10": {
      Name: "水遁の術(1/6hit)",
      Tree:SkillTree.Ninja,
      Torauma: Torauma.Physical,
      Group: "Other",
      Count: 6,
      MP: 700,
      First: {
        Base: new AddSkill(Refs => Refs.Status.MATK, 0, 500, 12, false, true, true, false, false, { NoneCombo: true, PowerEffect: "MATK" }),
        Power: Refs => {
          const Info = Refs.OtherInfo;
          const NinjaLv = Info.IsNinja;
          if (NinjaLv === false) return 0;

          const SCPower = Info.SubWepon === "SC" ? Info.SubWeponATK / 2 : 0;
          const Passive1 = Info.IsNinjaPower1 || 0;
          const Passive2 = Info.IsNinjaPower2 || 0;

          return 100 + (NinjaLv + Passive1 + Passive2) * 10 + SCPower;
        }
      },
    },
    "Ninja-1-20-1": {
      Name: "火遁の術",
      Tree:SkillTree.Ninja,
      Torauma: Torauma.Magic,
      Group: "Other",
      Count: 1,
      MP: 600,
      First: {
        Base: new MagicSkill(0, 400, 8, true),
        Power: (Refs) => {
          const Info = Refs.OtherInfo;
          const NinjaLv = Info.IsNinja;
          if (NinjaLv === false) return 0;

          const SCPower = Info.SubWepon === "SC" ? Info.SubWeponATK : 0;
          const Passive1 = Info.IsNinjaPower1 || 0;
          const Passive2 = Info.IsNinjaPower2 || 0;

          return 200 + NinjaLv * 10 + (Passive1 + Passive2) * 30 + SCPower;        
        }
      }
    },
/*     "Ninja-1-20-2": {
      Name: "火遁・爆炎陣",
      Torauma: Torauma.Magic,
      Group: "Other",
      Count: 1,
      MP: 600,
      First: {
        Base: new MagicSkill(0, 400, 8, true),
        Power: (Refs) => {
          const Info = Refs.OtherInfo;
          const NinjaLv = Info.IsNinja;
          if (NinjaLv === false) return 0;

          const SCPower = Info.SubWepon === "SC" ? Info.SubWeponATK : 0;
          const Passive1 = Info.IsNinjaPower1 || 0;
          const Passive2 = Info.IsNinjaPower2 || 0;

          return 400 + NinjaLv * 10 + (Passive1 + Passive2) * 30 + SCPower;        
        },
        Effect:"自身または相手が発火時限定火遁変化スキル"
      }
    }, */
    "Ninja-1-30-1": {
      Name: "風遁の術",
      Tree:SkillTree.Ninja,
      Torauma: Torauma.Magic,
      Group: "Other",
      Count: 1,
      MP: 600,
      First: {
        Base: new MagicSkill(0, 200, 4, "Distance"),
        Power: (Refs) => {
          const Info = Refs.OtherInfo;
          const NinjaLv = Info.IsNinja;
          if (NinjaLv === false) return 0;

          const SCPower = Info.SubWepon === "SC" ? Info.SubWeponATK : 0;
          const Passive1 = Info.IsNinjaPower1 || 0;
          const Passive2 = Info.IsNinjaPower2 || 0;

          return 500 + NinjaLv * 10 + (Passive1 + Passive2) * 20 + SCPower;        
        },
        Fixed: (Refs) => Refs.OtherInfo.IsNinja * 10,
        Checker: function (Refs) {
          const IsBG = Refs.OtherInfo.Wepon === "BG";
          this.Base.MaxRange = IsBG ? 8 : 4;
          this.Base.IsDistance = IsBG ? true : "Distance";
        }
      }
    },
    "Ninja-1-30-2": {
      Name: "風遁・兜割り",
      Tree:SkillTree.Ninja,
      Torauma: Torauma.Magic,
      Group: "Other",
      Count: 1,
      MP: 600,
      First: {
        Base: new AddSkill(
          (Refs) => Math.max(Refs.Status.AllATK, Refs.Status.MATK),
          0, 200, 4, true, false, false, "Distance", false, { PowerEffect: "【ATK】か【MATK】の高い方" }),
        Power: (Refs) => {
          const Info = Refs.OtherInfo;
          const NinjaLv = Info.IsNinja;
          if (NinjaLv === false) return 0;

          const SCPower = Info.SubWepon === "SC" ? Info.SubWeponATK : 0;
          const Passive1 = Info.IsNinjaPower1 || 0;
          const Passive2 = Info.IsNinjaPower2 || 0;

          return 500 + NinjaLv * 10 + (Passive1 + Passive2) * 20 + SCPower;        
        },
        Fixed: (Refs) => Refs.OtherInfo.IsNinja * 10,
        Effect:"抜刀剣装備時限定風遁変化スキル"
      }
    },
    "Ninja-1-40-1": {
      Name: "雷遁の術",
      Tree:SkillTree.Ninja,
      Torauma: Torauma.Magic,
      Group: "Other",
      Count: 1,
      MP: 600,
      First: {
        Base: new PhysicsSkill(0, 200, 12, "Distance", true, { PowerEffect: "【ATK】か【MATK】の高い方" }),
        Power: (Refs) => {
          const Info = Refs.OtherInfo;
          const NinjaLv = Info.IsNinja;
          if (NinjaLv === false) return 0;

          const SCPower = Info.SubWepon === "SC" ? Info.SubWeponATK : 0;
          const Passive1 = Info.IsNinjaPower1 || 0;
          const Passive2 = Info.IsNinjaPower2 || 0;

          return 100 + NinjaLv * 10 + (Passive1 + Passive2) * 30 + SCPower;        
        },
        Fixed: (Refs) => Refs.OtherInfo.IsNinja * 20,
      }
    },
    "Ninja-1-40-2": {
      Name: "雷遁・紫電一閃",
      Tree:SkillTree.Ninja,
      Torauma: Torauma.Magic,
      Group: "Other",
      Count: 1,
      MP: 600,
      First: {
        Base: new PhysicsSkill(0, 200, 12, "Distance", true, { AbsCrit: true, PowerEffect: "【ATK】か【MATK】の高い方" }),
        Power: (Refs) => {
          const Info = Refs.OtherInfo;
          const NinjaLv = Info.IsNinja;
          if (NinjaLv === false) return 0;

          const SCPower = Info.SubWepon === "SC" ? Info.SubWeponATK : 0;
          const Passive1 = Info.IsNinjaPower1 || 0;
          const Passive2 = Info.IsNinjaPower2 || 0;

          return 100 + NinjaLv * 10 + (Passive1 + Passive2) * 30 + SCPower;        
        },
        Fixed: (Refs) => Refs.OtherInfo.IsNinja * 20,
        Effect:"抜刀剣装備時限定雷遁変化スキル"
      }
    },
    "MagicWarrior-2-10": {
      Name: "エレメントスラッシュ",
      Tree:SkillTree.MagicBlade,
      Torauma: Torauma.Magic,
      Group: "MagicWarrior",
      Count: 1,
      MP: 200,
      First: {
        Base: new MagicSkill(600, 200, 4, true, { AbsAttribute: true }),
        Power: (Refs) => {
          const { STR, INT } = Refs.Status;
          return Math.max(STR, INT) * 0.8;
        },
        Checker: function (Refs) {
          const Active = Refs.OtherInfo.IsActiveConversion === true;

          if (Refs.OtherInfo.IsDualBringer === true) {
            this.Base.Reference = (Refs) => Data.Method.GetDualBringerPower(Refs, Active);
          } else {
            this.Base.Reference = !Active
            ? (Refs) => Refs.Status.MATK
            : (Refs) => Refs.Status.AllATK;
          
          }
          this.Base.IsMagicalSkill = !Active;
          this.Base.IsDEF = Active;
          this.Base.IsPhysical = Active; 
          Refs.Status.CriticalForMagic = Data.Method.GetCriticalForMagic(Refs);
        },
        Effect:"有利属性変化\n威力+高い方(基礎STR,基礎INT)/0.8%",
      }
    },
    "MagicWarrior-3-10": {
      Name: "エンチャントソード-新仕様",
      Tree:SkillTree.MagicBlade,
      Torauma: Torauma.Physical,
      Group: "MagicWarrior",
      Count: 1,
      MP: 300,
      First: {
        Base: new PhysicsSkill(1000, 300, 4, true, false, { AbsAttribute: true }),
        Addition: {
          MATKPenetrate: (Refs) => {
            if (Refs.OtherInfo.IsActiveConversion !== true) return 0;
            const { SubWeponATK, Smelting, SubStable } = Refs.OtherInfo;
            return 10 + Math.floor(Math.floor(SubWeponATK * (1 + Smelting ** 2 / 100) + Smelting) * SubStable / 3000);
          }
        },
        Power: Refs => {
          const Wep = Refs.OtherInfo.Wepon;
          if (Wep === "TH") return 200;

          const Bonus = Math.max(Refs.Status.STR, Refs.Status.INT);

          if (Refs.OtherInfo.IsEnchantedBurst === true) {
            return Wep === "OH" ? Bonus * 0.9 - 100
              : Wep === "MA" ? 400 + Bonus * 1.4
                : Wep === "BG" ? -125 + (400 + Bonus * 1.4) * 0.875
                  : 0;
          } else {
            return Wep === "BG" ? -125 + Bonus * 0.875
              : ["OH", "MA"].includes(Wep) ? Bonus
                : 0;
          }
        },
        Fixed: Refs => {
          if (Refs.OtherInfo.Wepon === "TH") return 0;

          const SubSmelting = Refs.OtherInfo.SubSmelting;
          const SubATK = SubSmelting + Math.floor(Refs.OtherInfo.SubWeponATK * (1 + SubSmelting ** 2 / 100));
          const SubStable = Refs.OtherInfo.SubStable;
          const Result = Math.floor(Math.floor(SubATK * SubStable / 100) /2);

          return Result < 300 ? Result : 300;
        },
        Checker: function (Refs) {
          const Active = Refs.OtherInfo.IsActiveConversion === true;

          if (Refs.OtherInfo.IsDualBringer === true) {
            this.Base.Reference = (Refs) => Data.Method.GetDualBringerPower(Refs, !Active);
            this.Base.PowerEffect = `BringerA/M(シミュ内名称)`;
          } else {
            this.Base.Reference = Active
            ? (Refs) => Refs.Status.MATK
            : (Refs) => Refs.Status.AllATK;
          
            this.Base.PowerEffect = Active ? "MATK" : "ATK";
          }
          this.Base.IsMagicalSkill = Active;
          this.Base.IsDEF = !Active;
          this.Base.IsPhysical = !Active; 
          Refs.Status.CriticalForMagic = Data.Method.GetCriticalForMagic(Refs);
        },
        Effect:"有利属性変化\n両手剣以外：威力+(基礎INT,基礎STRいずれか高い方)% 固定値+魔道具ATKに応じたボーナス\n両手剣装備時：威力+200%"
      },
      Second: {
        Base: new PhysicsSkill(0, 0, 4, true, true, { AbsAttribute: true }),
        Addition: {
          MATKPenetrate: (Refs) => {
            if (Refs.OtherInfo.IsActiveConversion !== true) return 0;
            const { SubWeponATK, Smelting, SubStable } = Refs.OtherInfo;
            return 10 + Math.floor(Math.floor(SubWeponATK * (1 + Smelting ** 2 / 100) + Smelting) * SubStable / 3000);
          }
        },
        Power: Refs => {
          if (Refs.OtherInfo.IsEnchantedBurst !== true) return 0;

          const Wep = Refs.OtherInfo.Wepon;
          if (Wep !== "OH") return 0;

          const Bonus = Math.max(Refs.Status.STR, Refs.Status.INT) * 0.9;
          return 900 + Bonus;
        },
        Fixed: Refs => {
          if (Refs.OtherInfo.IsEnchantedBurst !== true) return 0;
          if (Refs.OtherInfo.Wepon !== "OH") return 0;
          const SubSmelting = Refs.OtherInfo.SubSmelting;
          const SubATK = SubSmelting + Math.floor(Refs.OtherInfo.SubWeponATK * (1 + SubSmelting ** 2 / 100));
          const SubStable = Refs.OtherInfo.SubStable;
          const Result = Math.floor(Math.floor(SubATK * SubStable / 100) /2);
  
          return 300 + (Result < 300 ? Result : 300);
        },
        Checker: function (Refs) {
          const Active = Refs.OtherInfo.IsActiveConversion === true;

          if (Refs.OtherInfo.IsDualBringer === true) {
            this.Base.Reference = (Refs) => Data.Method.GetDualBringerPower(Refs,!Active);
          } else {
            this.Base.Reference = Active
            ? (Refs) => Refs.Status.MATK
            : (Refs) => Refs.Status.AllATK;
          
          }
          this.Base.IsMagicalSkill = Active;
          this.Base.IsDEF = !Active;
          this.Base.IsPhysical = !Active; 
          Refs.Status.CriticalForMagic = Data.Method.GetCriticalForMagic(Refs);
        },
        Effect:"片手剣装備時限定\n有利属性変化\n片手剣装備時：威力+(基礎INT,基礎STRいずれか高い方)%\n固定値+魔道具ATKに応じたボーナス"
      },
    },
    "MagicWarrior-4-10-1": {
      Name: "エンチャントバースト:溜め0(新仕様)",
      Tree:SkillTree.MagicBlade,
      Torauma: Torauma.Magic,
      Group: "MagicWarrior",
      Count: 1,
      MP: 100,
      First: {
        Base: new AddSkill(
          (Refs) => {
            return Refs.OtherInfo.Wepon !== "TH"
              ? Math.max(Refs.Status.AllATK, Refs.Status.MATK)
              : Refs.Status.MATK;
          },
          1000, 100, 12, true, false, false, true, false, { AbsAttribute: true }
        ),
        Checker: function (Refs) {
          this.Base.PowerEffect = Refs.OtherInfo.Wepon !== "TH" ? "【ATK】か【MATK】の高い方" : "MATK";
        }
      },
    },
    "MagicWarrior-4-10-2": {
      Name: "エンチャントバースト:溜め1(新仕様)",
      Tree:SkillTree.MagicBlade,
      Torauma: Torauma.Magic,
      Group: "MagicWarrior",
      Count: 1,
      MP: 100,
      First: {
        Base: new AddSkill(
          (Refs) => Math.max(Refs.Status.AllATK, Refs.Status.MATK),
          1500, 100, 12, true, false, false, true, false, { AbsAttribute: true }),
        Fixed: Refs => Refs.OtherInfo.SubWepon === "MD" ? Math.floor(Refs.OtherInfo.SubWeponATK * 0.4) : 0,
        Checker: function (Refs) {
          this.Base.PowerEffect = Refs.OtherInfo.Wepon !== "TH" ? "【ATK】か【MATK】の高い方" : "MATK";
        },
        Effect:"サブ魔道具装備時：魔道具ATK×0.4%"
      },
    },
    "MagicWarrior-4-10-3": {
      Name: "エンチャントバースト:溜め2(新仕様)",
      Tree:SkillTree.MagicBlade,
      Torauma: Torauma.Magic,
      Group: "MagicWarrior",
      Count: 1,
      MP: 100,
      First: {
        Base: new AddSkill(
          (Refs) => Math.max(Refs.Status.AllATK, Refs.Status.MATK),
          2750, 100, 12, true, false, false, true, false, { AbsAttribute: true }),
        Fixed: Refs => Refs.OtherInfo.SubWepon === "MD" ? (Math.floor(Refs.OtherInfo.SubWeponATK * 0.4) * 2) : 0,
        Checker: function (Refs) {
          this.Base.PowerEffect = Refs.OtherInfo.Wepon !== "TH" ? "【ATK】か【MATK】の高い方" : "MATK";
        },
        Effect:"サブ魔道具装備時：魔道具ATK×0.8%"
      },
    },
    "MagicWarrior-4-10-4": {
      Name: "エンチャントバースト:溜め3(新仕様)",
      Tree:SkillTree.MagicBlade,
      Torauma: Torauma.Magic,
      Group: "MagicWarrior",
      Count: 1,
      MP: 100,
      First: {
        Base: new AddSkill(
          (Refs) => Math.max(Refs.Status.AllATK, Refs.Status.MATK),
          4375, 100, 12, true, false, false, true, false, { AbsAttribute: true }),
        Fixed: Refs => Refs.OtherInfo.SubWepon === "MD" ? (Math.floor(Refs.OtherInfo.SubWeponATK * 0.4) * 3) : 0,
        Checker: function (Refs) {
          this.Base.PowerEffect = Refs.OtherInfo.Wepon !== "TH" ? "【ATK】か【MATK】の高い方" : "MATK";
        },
        Effect:"サブ魔道具装備時：魔道具ATK×1.2%"
      },
    },
    "MagicWarrior-4-20": {
      Name: "エンチャントアガラル(エンチャントバースト物理Ver)",
      Tree:SkillTree.MagicBlade,
      Torauma: Torauma.Physical,
      Group: "MagicWarrior",
      Count: 1,
      MP: 100,
      First: {
        Base: new AddSkill(
          (Refs) => Refs.Status.AllATK,
          1500, 100, 12, false, true, true, true, false, { AbsAttribute: true }
        ),
        Checker: function (Refs) {
          this.Base.Reference = Refs.OtherInfo.IsDualBringer === true
            ? (Refs) => Data.Method.GetDualBringerPower(Refs, true)
            : (Refs) => Refs.Status.AllATK;
          
          this.Base.PowerEffect = Refs.OtherInfo.IsDualBringer === true ? "BringerA/M(シミュ内名称)" : "ATK";
        },
        Effect:"有利属性変化\n"
      },
    },
    "MagicWarrior-5-10-1-1": {
      Name: "ユニオンソード-新仕様",
      Tree:SkillTree.MagicBlade,
      Torauma: Torauma.Physical,
      Group: "MagicWarrior",
      Count: 1,
      MP: 500,
      First: {
        Base: new AddSkill(
          (Refs) => Refs.Status.AllATK + Refs.Status.MATK,
          1500, 500, 12, false, true, true, true, false, { AbsAttribute: true }),
        Checker: function (Refs) {
          const Active = Refs.OtherInfo.IsActiveConversion === true;

          this.Base.IsMagicalSkill = Active;
          this.Base.IsDEF = !Active;
          this.Base.IsPhysical = !Active;
          Refs.Status.CriticalForMagic = Data.Method.GetCriticalForMagic(Refs);

          if (Refs.OtherInfo.IsDualBringer === true) {
            this.Base.Reference = (Refs) => {
              const { AllATK, MATK } = Refs.Status;
              const Base1 = Math.max(AllATK, MATK);
              const Base2 = Data.Method.GetDualBringerPower(Refs, AllATK < MATK);

              this.Base.PowerEffect = `${AllATK < MATK ? "MATK" : "ATK"} + BringerA/M(シミュ内名称)`;

              return Base1 + Base2;
            }
          } else {
            this.Base.Reference = (Refs) => Refs.Status.AllATK + Refs.Status.MATK;
            this.Base.PowerEffect = "ATK + MATK";
          }
        },
        Effect:"有利属性変化\nATK/MATK合算"
      },
    },
    "MagicWarrior-5-10-2": {
      Name: "リユニオンソード",
      Tree:SkillTree.MagicBlade,
      Torauma: Torauma.Physical,
      Group: "MagicWarrior",
      Count: 1,
      MP: 0,
      First: {
        Base: new AddSkill(
          (Refs) => Refs.Status.AllATK + Refs.Status.MATK,
          3000, 500, 12, false, true, true, true, false, { AbsAttribute: true }),
        Checker: function (Refs) {
          const Active = Refs.OtherInfo.IsActiveConversion === true;
          
          this.Base.IsMagicalSkill = Active;
          this.Base.IsDEF = !Active;
          this.Base.IsPhysical = !Active;

          if (Refs.OtherInfo.IsDualBringer === true) {
            this.Base.Reference = (Refs) => {
              const { AllATK, MATK } = Refs.Status;
              const Base1 = Math.max(AllATK, MATK);
              const Base2 = Data.Method.GetDualBringerPower(Refs, AllATK < MATK);

              this.Base.PowerEffect = `${AllATK < MATK ? "MATK" : "ATK"} + BringerA/M(シミュ内名称)`;

              return Base1 + Base2;
            }
          } else {
            this.Base.Reference = (Refs) => Refs.Status.AllATK + Refs.Status.MATK;
            this.Base.PowerEffect = "ATK + MATK";
          }
        },
        Effect:"有利属性変化\nATK/MATK合算"
      },
    },
    "Pal-3-10": {
      Name: "LブーメランⅢ(前提最大)",
      Tree:SkillTree.Partisan,
      Torauma: Torauma.Nomal,
      ShowTorauma: Torauma.Nomal,
      Group: "Sword",
      Count: 2,
      MP: 400,
      First: {
        Base: new PhysicsSkill(1350, 400, 8, false, false),
        Power: Refs => Refs.Status.DEX,
        Addition: {
          ATKPenetrate: 50,
          Critical: 100
        },
        Effect:"威力+基礎DEX%"
      },
      Second: {
        Base: new PhysicsSkill(1350, 400, 8, false, false),
        Power: Refs => Refs.Status.DEX,
        Addition: {
          ATKPenetrate: 50,
          Critical: 100
        },
        Effect:"威力+基礎DEX%"
      },
    },
    "Necro-3-10-1": {
      Name: "サモンモデモニック(爪)(MP消費可変)",
      Tree:SkillTree.Necro,
      Torauma: Torauma.No,
      Group: "Other",
      Count: 0,
      MP: 0,
      Charge: new SkillCharge(1, 1, 20),
      ChargeType: SkillChargeType.Stock,
      First: {
        Base: new AddSkill((Refs) => Refs.Status.AllATK + Refs.Status.MATK, 100, 0, 0, false, true, true, "AbsDistance", false, {PowerEffect: "ATK + MATK"}),
        Power: Refs => Refs.OtherInfo.ChargeLv * 5,
        Fixed: Refs => Refs.OtherInfo.ChargeLv * 50,
        Checker: function (Refs) {
          const BiggerATK = Refs.Status.AllATK >= Refs.Status.MATK;

          this.Base.IsMagicalSkill = !BiggerATK;
          this.Base.IsDEF= BiggerATK;
          this.Base.IsPhysical = BiggerATK;
        },
        Effect:"ATK/MATK合算\n攻撃特性変化"
      },
      
    },
    "Necro-3-10-2": {
      Name: "サモンモデモニック(光線)(MP消費可変)",
      Tree:SkillTree.Necro,
      Torauma: Torauma.No,
      Group: "Other",
      Count: 0,
      MP: 0,
      Charge: new SkillCharge(1, 1, 20),
      ChargeType: SkillChargeType.Stock,
      First: {
        Base: new AddSkill((Refs) => Refs.Status.AllATK + Refs.Status.MATK, 200, 0, 0, false, true, true, "AbsDistance", false, {PowerEffect: "ATK + MATK"}),
        Power: Refs => Refs.OtherInfo.ChargeLv * 90,
        Fixed: Refs => Refs.OtherInfo.ChargeLv * 100,
        Checker: function (Refs) {
          const BiggerATK = Refs.Status.AllATK >= Refs.Status.MATK;

          this.Base.IsMagicalSkill = !BiggerATK;
          this.Base.IsDEF= BiggerATK;
          this.Base.IsPhysical = BiggerATK;
        },
        Effect:"ATK/MATK合算\n攻撃特性変化"
      },
    },
/*     "Priest-1-10": {
      Name: "ロッドスタブ",
      Group: "Other",
      Count: 1,
      MP: 100,
      First: {
        Base: new PhysicsSkill(200, 100, 1, true, false),
        Power: Refs => Refs.Status.STR_After,
        Addition: {
          ATKPenetrate: Refs => 25 + Refs.Status.STR_After / 5
        }
      }
    }, */
    proxy1: {
      Name: "1ダメ(調整用)通常扱い",
      Tree:SkillTree.Other,
      Torauma: Torauma.Nomal,
      Group: "All",
      Count: 1,
      MP: 0,
      First: {
        Base: new PhysicsSkill(0, 0, 4, false, false),
      }
    },
    proxy2: {
      Name: "1ダメ(調整用)魔法扱い",
      Tree:SkillTree.Other,
      Torauma: Torauma.Magic,
      Group: "All",
      Count: 1,
      MP: 100,
      First: {
        Base: new MagicSkill(0, 0, 4, false, false),
      }
    },
    proxy3: {
      Name: "1ダメ(調整用)物理扱い",
      Tree:SkillTree.Other,
      Torauma: Torauma.Physical,
      Group: "All",
      Count: 1,
      MP: 100,
      First: {
        Base: new PhysicsSkill(0, 0, 4, false, false),
      }
    },
    proxy4: {
      Name: "1ダメ(調整用)慣れ無",
      Tree:SkillTree.Other,
      Torauma: Torauma.No,
      ShowTorauma: Torauma.Nomal,
      Group: "All",
      Count: 1,
      MP: 100,
      First: {
        Base: new PhysicsSkill(0, 0, 4, false, false),
      }
    },
  },
  ComboSkill: {
    Master1: new SkillComponent(
      "サンプル：ドラチャ/ハント10溜めコンボ",
      ComboModes.Master,
      [
        new SkillSet("Magic-3-10", 1, 100, null, null, null, Combo.First, Torauma.Magic, Torauma.Magic),
        new SkillSet("Halberd-5-10-1", 1.5, 120, null, null, null, Combo.Strong, Torauma.Physical, Torauma.Physical),
        new SkillSet("proxy1", 0.5, 100, null, null, null, Combo.Nomal, Torauma.Nomal, Torauma.Nomal),
        new SkillSet("DarkPower-4-10-3", 1.5, 130, null, null, null, Combo.Strong, Torauma.Magic, Torauma.Magic),
      ]
    ),
    Master2: new SkillComponent(
      "サンプル：ユニ＋リユニ(強打+最大慣れ)",
      ComboModes.Master,
      [
        new SkillSet("MagicWarrior-5-10-1-1", 1.5, 250, null, null, null, Combo.Strong, Torauma.Physical, Torauma.Physical),
        new SkillSet("MagicWarrior-5-10-2", 1.5, 250, null, null, null, Combo.Strong, Torauma.Physical, Torauma.Physical)
      ]
    )
  },
  Enemy: {
    999: new Enemy("カスタム入力", 1, 0, 0, 0, 0, true),
    1: new Enemy("ラフィー", 1, 0, 0, 0, 0, false, true),
    2: new Enemy("ピコ", 1, 0, 0, 0, 0, false),
    143: new Enemy("エンバブ", 143, 143, 143, 5, 5, false),
    223: new Enemy("ブレッパ", 223, 446, 291, 8, 8, false),
    "f103": new Enemy("ドン・イエティ", 103, 206, 125, 4, 4, false),
    "f146": new Enemy("オデロンマキナ", 146, 110, 307, 5, 5, false),
    "f150": new Enemy("スーパーデスキノコ", 150, 225, 225, 4, 4, false),
    "f154": new Enemy("コマンダーゴーレム", 154, 231, 308, 6, 6, false),
    "f174": new Enemy("アルトパス", 174, 174, 174, 6, 6, false, true),
    "f210": new Enemy("キバノミ", 210, 525, 526, 8, 8, false),
    "f212": new Enemy("魔人の眼", 212, 318, 680, 16, 16, false),
    "f239": new Enemy("ブラーミス", 239, 1195, 527, 9, 9, false),
    "f245": new Enemy("エングール", 245, 490, 490, 16, 9, false),
    "f251": new Enemy("イグニトゥル", 251, 251, 502, 40, 16, false),
    "f257": new Enemy("ユアーシャ", 257, 771, 771, 30, 30, false),
    "f269": new Enemy("トゥルス", 269, 942, 807, 10, 10, false),
    "f269-2": new Enemy("ドラケオル", 269, 1100, 1376, 10, 12, false),
    "f278": new Enemy("リリカロラ", 278, 1251, 1251, 11, 11, false),
    "f281": new Enemy("ヴォードレイ", 281, 1405, 1124, 11, 11, false),
    "f284": new Enemy("ファンティカ", 284, 852, 1136, 11, 11, false),
    "f287": new Enemy("カポ・プロフンド", 287, 1435, 1435, 11, 11, false),
    "f290": new Enemy("リマシナ", 290, 1595, 1595, 14, 14, false),
    "f293": new Enemy("ジルヴァ", 293, 1172, 879, 11, 11, false),
    "f296": new Enemy("ドリドディ", 296, 1658, 1658, 14, 14, false, false),
    f305: new Enemy("カレリーフ", 305, 915, 1526, 14, 14, false, false),
    f308: new Enemy("ダンドリオン", 308, 1077, 770, 24, 12, false, false),
    f311: new Enemy("メデューソ", 311, 1057, 1057, 24, 12, false, false),
    f314: new Enemy("マバーキ", 314, 1005, 879, 20, 16, false, true),
    "b30": new Enemy("フォレストウルフ", 30, 30, 30, 0, 0, true),
    b85: new Enemy("スクルーダ", 85, 255, 255, 3, 3, true, false),
    "b108": new Enemy("イコノス", 108, 162, 140, 10, 10, true),
    "b120": new Enemy("ティパー", 120, 144, 168, 4, 4, true, true),
    "b133": new Enemy("グワイモル", 133, 207, 207, 5, 5, true),
    "b133-2": new Enemy("ギニョール(緑形態)", 133, 399, 0, 80, 80, true),
    "b133-3": new Enemy("ギニョール(黄形態)", 133, 399, 0, 55, 55, true),
    "b133-4": new Enemy("ギニョール(赤形態)", 133, 399, 0, 30, 30, true),
    "b139": new Enemy("アルティマキナ", 139, 417, 417, 10, 10, true, true),
    "b142": new Enemy("オルンラーフ", 142, 107, 711, 5, 5, true),
    "b143": new Enemy("マトンゾード(初期)", 143, 400, 500, 15, 15, true),
    "b145": new Enemy("ピラー・コエヌビア", 145, 290, 291, 5, 5, true),
    "b150": new Enemy("ヴェネーナ・コエヌビア(第一)", 150, 300, 301, 6, 6, true),
    "b160": new Enemy("ゼーレザウガ", 160, 320, 320, 6, 6, true),
    "b163": new Enemy("キングピトン", 163, 789, 244, 15, 15, true),
    "b166": new Enemy("闇竜フィンスダン", 166, 248, 248, 6, 6, true),
    "b175": new Enemy("ベクティガ", 175, 437, 437, 7, 7, true),
    "b178": new Enemy("クースト", 178, 534, 534, 7, 7, true),
    "b184": new Enemy("フラキブラキ(近距離)", 184, 552, 184, 21, 7, true, true),
    "b184-2": new Enemy("フラキブラキ(遠距離)", 184, 185, 737, 7, 21, true, true),
    "b185": new Enemy("魔人クウィーザ", 185, 925, 926, 7, 7, true),
    "b190": new Enemy("バルター", 190, 523, 618, 7, 7, true),
    "b190-2": new Enemy("シーデム・コエヌビア", 190, 655, 238, 7, 7, true, true),
    "b195": new Enemy("ヴェネーナ・コエヌビョール", 195, 819, 586, 7, 7, true),
    "b196": new Enemy("デーモナグア", 196, 511, 393, 7, 7, true),
    "b199": new Enemy("黒い影", 199, 398, 598, 7, 7, true),
    "b202": new Enemy("タリズブルト", 202, 606, 606, 8, 8, true),
    "b208": new Enemy("ジェンマ", 208, 500, 461, 26, 16, true),
    "b209": new Enemy("イレスティダ", 209, 918, 304, 8, 8, true),
    "b211": new Enemy("岩竜フェルゼン(無破壊)", 211, 1055, 739, 8, 8, true),
    "b211-2": new Enemy("岩竜フェルゼン(胴体破壊)", 211, 950, 699, 8, 8, true),
    "b214": new Enemy("卒竜ザイビオ", 214, 642, 535, 8, 8, true, true),
    "b217": new Enemy("兵竜ダルバ", 217, 596, 705, 8, 8, true),
    "b220": new Enemy("炎竜ブランマ(初期)", 220, 880, 881, 8, 8, true),
    "b223": new Enemy("ベリュム", 223, 892, 893, 8, 8, true, true),
    "b226": new Enemy("オキュラシーネ(無破壊)", 226, 987, 987, 30, 30, true),
    "b229": new Enemy("ギュルダー(無破壊)", 229, 1717, 1717, 39, 39, true),
    "b232": new Enemy("ガルドゴーレム", 232, 1160, 1160, 25, 25, true),
    "b238": new Enemy("ミミューガ(無破壊)", 238, 2620, 2620, 9, 9, true),
    "b241": new Enemy("ビルロッシュ", 241, 361, 724, 9, 9, true),
    "b244": new Enemy("悪竜ファジーノ", 244, 488, 854, 9, 9, true),
    "b250": new Enemy("楽竜レドルギ", 250, 500, 875, 10, 10, true),
    "b253": new Enemy("ドミナレドル(初期)", 253, 1264, 1264, 50, 50, true),
    "b253-2": new Enemy("ドミナレドル(前半ボール全破壊)", 253, 1264, 1264, 10, 10, true),
    "b253-3": new Enemy("ドミナレドル(ロック解除後)", 253, 1264, 1264, 20, 20, true),
    "b253-4": new Enemy("ドミナレドル(後半ボール全破壊)", 253, 1264, 1264, 40, 40, true),
    "b256": new Enemy("ザポ", 256, 896, 640, 10, 10, true),
    "b259": new Enemy("尉竜ルディス", 259, 647, 906, 10, 10, true),
    "b262": new Enemy("ドン・プロフンド", 262, 786, 1048, 20, 20, true),
    "b265": new Enemy("バテュード", 265, 1060, 795, 15, 15, true),
    b268: new Enemy("轟竜ボビナリー", 268, 938, 938, 10, 10, true),
    b269: new Enemy("ルトセーザ", 269, 1143, 1143, 20, 20, true, false),
    b271: new Enemy("ヒュミーダ", 271, 1897, 814, 30, 10, true, false),
    b277: new Enemy("デフォーミス", 277, 831, 831, 11, 11, true, false),
    b280: new Enemy("メンティ", 280, 3360, 3360, 51, 51, true, false),
    b283: new Enemy("ビスキーバ", 283, 1129, 1129, 12, 12, true, false),
    b286: new Enemy("ピヌグールガ", 286, 1144, 715, 15, 10, true, false),
    b292: new Enemy("バクザン", 292, 1460, 584, 10, 10, true, true),
    rbdarkness: new Enemy(
      "竜骨の魔人",
      288,
      Refs => Math.floor(Refs * 0.75),
      Refs => Math.floor(Refs * 1.5),
      Refs => Math.floor(Refs / 10),
      Refs => 25 + Math.floor(Refs / 10),
      true,
      false,
      true
    ),
    rbwater: new Enemy(
        "氷岩のバイソン",
        288,
        Refs => Math.floor(Refs * 1.5),
        Refs => Math.floor(Refs * 0.75),
        Refs => 25 + Math.floor(Refs / 10),
        Refs => Math.floor(Refs / 10),
        true,
        false,
      true
    ),
    rbwind: new Enemy(
      "轟雷のングルマ",
      288,
      Refs => Refs,
      Refs => Math.floor(Refs * 0.25),
      Refs => 15 + Math.floor(Refs / 10),
      Refs => 15 + Math.floor(Refs / 10),
      true,
      false,
      true
    ),
    rbground: new Enemy(
      "震厳のキマイラ",
      288,
      Refs => Refs * 2,
      Refs => Refs,
      Refs => 10 + Math.floor(Refs / 10),
      Refs => 20 + Math.floor(Refs / 10),
      true,
      false,
      true
    ),
    rbfire: new Enemy(
      "赫灼のセルディテ",
      288,
      Refs => Math.floor(Refs * 1.25),
      Refs => Math.floor(Refs * 1.25),
      Refs => 20 + Math.floor(Refs / 10),
      Refs => Math.floor(Refs / 10),
      true,
      false,
      true
    ),
  },
};

const STATUS = ["STR", "INT", "AGI", "DEX", "VIT", "MEN", "CRT", "TEC"];
const STATUS_NONAFTER = STATUS.filter((_, i) => i < STATUS.length - 2);
const SHOWSTATUS = Object.keys(Data.Status).filter((v) => ![...STATUS_NONAFTER, "Level"].includes(v));
const ADDITION = Object.keys(Data.AdditionStatus.All);
const SKILLKEYS = ["First", "Second", "Therd", "Fourth", "Fifth", "Sixth", "Seventh"];
const COMBORESULT = { Result: [] };

const MainMethod = {
  /**配列の初期設定、html要素の初期配置をセットで行う。 */
  SetBase: () => {
    try {
      const Addition = Data.AdditionStatus;
      const info = Data.OtherInfo;

      info.Enemy = SelectionData.Enemy[1];
      info.Skill = SelectionData.Skill[0];
      //装備
      const EquipText = [
        "Wepon", "Armor", "Addition", "Option", "SubWepon",
        "Enchant", "Enchant2", "Enchant3",
        "Other", "Other2", "Other3", "Other4", "Other5", "Other6", "Other7"
      ];
      const NoneData = MainMethod.AddDataUnit({ Base: {}, Group: "-", Name: "装備なし" }, "NonesData");
      for (let prop of EquipText) {
        Addition[prop] = NoneData.New();
      }
      //クリスタ
      const CryText = ["Wepon", "Armor", "Addition", "Option"];
      for (let i = 1; i < 9; i++) {
        Addition.Crystal[i] =
          MainMethod.AddDataUnit(SelectionData.Crystal[CryText[Math.floor((i - 1) / 2)]][0], 0);
      }
      //バフアイテム
      const elem = Judey.cls("ItemBuffSelector");
      for (let i = 0; i < elem.length; i++) {
        const target = elem[i].id.split("_")[1];
        Addition.ItemBuff[target] =
          MainMethod.AddDataUnit(SelectionData.ItemBuff[target][0], 0);
      }
      //料理
      for (let i = 1; i < 6; i++) {
        Addition.Cooking[i] =
          MainMethod.AddDataUnit(SelectionData.Cooking[0], 0);
      }
      
      MainRender.SkillSelector();
      MainRender.SubWepon();
      MainMethod.SwitchEnemyInfo(1);
      MainMethod.ShowEnemyValues();      
    } catch (e) {
      ErrDescriptions.push("データ構成エラー：" + e.message)
    }

  },
  /**オブジェクトの存在確認 */
  CheckAdditions: (DataSet = Data.AdditionStatus, IsRepair = false) => {
    const Repair_Keys = ['All', 'PartialAll', 'Enchant2', 'Enchant3', 'Other2', 'Other3', "Other4", "Other5", "Other6", "Other7"];
    const Keys = ['Wepon', 'Armor', 'Addition', 'SubWepon', 'Option', 'Enchant', 'Other', 'Cooking', 'ItemBuff', 'Crystal'];
    if (!IsRepair) Keys.push(...Repair_Keys);

    for (let Key of Keys) {
      if (!DataSet[Key]) return false;
      if (["Crystal", "ItemBuff", "Cooking"].includes(Key) === false) continue;
      const ChildKeys = Object.keys(DataSet[Key]);
      for (let ChildKey of ChildKeys) {
        if (DataSet[Key][ChildKey] === null) return false;
      }
    }
    return true;
  },
  /**全てのステータスを再計算する。*/
  AllCalculation: (Refs) => {
    const Sts = Refs.Status;
    const Info = Refs.OtherInfo;
    const F = Data.Method;
    //ステータス
    STATUS_NONAFTER.forEach((v) => (Sts[`${v}_After`] = F.GetAfterStatus(Refs, v)));

    //攻撃力
    Sts.BaseATK = F.GetBasePower(Refs, "ATK");
    Sts.ATK = F.GetTotalPower(Refs, "ATK", Sts.BaseATK);
    Sts.BaseDSATK = F.GetBasePower(Refs, "DS");
    Sts.DSATK = F.GetTotalPower(Refs, "DS", Sts.BaseDSATK);
    Sts.AllATK = (() => {
      if (Info.Wepon === "DS") return Sts.ATK + Sts.DSATK;
      if (Info.IsTwoHKTN) return Math.floor(Sts.ATK * 1.5);
      return Sts.ATK;
    })();
    Sts.BaseMATK = F.GetBasePower(Refs, "MATK");
    Sts.MATK = F.GetTotalPower(Refs, "MATK", Sts.BaseMATK);
    Sts.BaseHBMATK = F.GetBasePower(Refs,"HBMATK");
    Sts.HBMATK = F.GetTotalPower(Refs, "HBMATK", Sts.BaseHBMATK);
    Sts.WMATK = Math.floor(Sts.MATK * 0.75 + Sts.ATK * 0.25);

    //デュアルブリンガー計算
    Sts.DBringer = F.GetDualBringerPower(Refs, (Sts.AllATK - Sts.MATK) <= 0);

    //クリダメ、率
    Sts.Critical = F.GetTotalCritical(Refs);
    Sts.CriticalDamege = F.GetTotalCriticalDamege(Refs);
    Sts.CriticalForMagic = F.GetCriticalForMagic(Refs);
    Sts.CriticalDamegeForMagic = F.GetCriticalDamegeForMagic(Refs);
    
    //属性有利
    Sts.Attribute = F.GetAwakeAttribute(Refs, "First", true);
    Sts.AllAttribute = F.GetTotalAttribute(Refs, "First", true);
    //安定率
    Sts.Stable = F.GetTotalStable(Refs);
    Sts.SubStable = F.GetTotalSubStable(Refs);

    //ASPD,CSPD
    Sts.ASPD = F.GetTotalASPD(Refs);
    Sts.CSPD = F.GetTotalCSPD(Refs);

    //HIT,FREE
    Sts.HIT = F.GetHIT(Refs);
    Sts.FREE = F.GetFREE(Refs);

    //耐性
    const Health = Math.floor(Sts.MEN / 3.4);
    Sts.Resist_Health = F.GetTotalStatus(Refs, Health, "Resist_Health");
    Sts.Resist_Physical = F.GetTotalResist(Refs, true);
    Sts.Resist_Magic = F.GetTotalResist(Refs, false);

    //先読み、防御崩し
    Sts.Special_DefBreak = F.GetTotalSpecial_DefBreak(Refs);
    Sts.Special_Future = F.GetTotalSpecial_Future(Refs);

    //ヘイト
    Sts.Hate = F.GetHate(Refs);

    Sts.SPD = F.GetTotalStatus(Refs, F._GetBaseSPD(Refs), "SPD");
    if (Sts.SPD > 50) Sts.SPD = 50;
    Sts.TSPD = F.GetTotalStatus(Refs, F._GetBaseSPD(Refs), "SPD");
    Sts.HP = F.GetTotalHP(Refs);
    Sts.MP = F.GetTotalStatus(Refs, F.GetMP(Refs), "MP");

    //表示用
    Sts.TStable = F.GetTotalStable(Refs, true);
    Sts.TSubStable = F.GetTotalSubStable(Refs, true);
    Sts.Resist_TPhysical = F.GetTotalResist(Refs, true, true);
    Sts.Resist_TMagic = F.GetTotalResist(Refs, false, true);
    Sts.TCriticalDamege = F.GetTotalCriticalDamege(Refs, true);
    Sts.TCriticalDamegeForMagic = F.GetCriticalDamegeForMagic(Refs, true);
    Sts.Special_TDefBreak = F.GetTotalSpecial_DefBreak(Refs, true);
    Sts.Special_TFuture = F.GetTotalSpecial_Future(Refs, true);
  },
  /**ダメージ計算を行い、表示を行う。 */
  AllDamege: (Reference = null, IsGetDamegeArray = false, IsRecursion = false, AverageDamege = 0) => {
    const ReferenceData = Reference || Data;
    const DamegeSelector = ReferenceData.OtherInfo.IsShowDamage;
    const IsCritical = ReferenceData.OtherInfo.IsCritical;
    const IsExpectMode = Reference.OtherInfo.IsExpectedShow === true;
    const ComparsionMode = MainMethod.CheckEnableComparsionMode();

    //期待値モードが有効で、値の返却モードではない場合は処理を行わない。
    if (IsGetDamegeArray === false && IsExpectMode && ComparsionMode) return;

    //プロパティが文字列でないものは単発スキルと判断
    const IsSingle = (() => {
      if (typeof ReferenceData.OtherInfo.Skill !== "string") return true;
      if (SelectionData.ComboSkill[ReferenceData.OtherInfo.Skill] === undefined) {
        ReferenceData.OtherInfo.Skill = SelectionData.Skill[0];
        return true;
      };
      return false;
    })();
  
    const Stables = IsSingle ? MainMethod._stables(ReferenceData) : null;
    
    if (IsRecursion === false) {
      //再帰処理以外の場合は本体データの方を参照する。
      ReferenceData.OtherInfo.Enemy = Data.OtherInfo.Enemy;
    }

    const Damege = (() => {
      
      //比較値モードの場合で値返却モードでない場合は計算を省略。
      if (IsGetDamegeArray === false && IsExpectMode) {
        return [0, 0, 0];
      }
      if (IsSingle) {
        ReferenceData.OtherInfo.ComboRate = null;
        return MainMethod._Damege(ReferenceData, Stables, DamegeSelector);
      }

      if (!IsRecursion || !ComparsionMode)
        COMBORESULT.Result = [];

      //コンボ計算
      const ComboSkills = SelectionData.ComboSkill[ReferenceData.OtherInfo.Skill];
      const BaseStatus = Data.Method.CreateBuffer.GetReferenceCopy(ReferenceData, true);

      const AllDameges = [0, 0, 0];
      /**期待値モードの際に使用する結果変数 */
      const ExpectResults = [];
      const CompasionModeComboResult = { Result: [] };

      //class:SkillSet配列
      //スキルが見つからないときは何もしない。
      ComboSkills.SkillSetArray.forEach(SkillKeySet => {
        const Skill = SelectionData.Skill[SkillKeySet.SkillPropertyName];

        if (Skill !== undefined) {
          BaseStatus.OtherInfo.Skill = Skill;
          if (ComboSkills.ComboMode === ComboModes.Connect)
            SkillKeySet.ToraumaRate = BaseStatus.OtherInfo.ToraumaRate;
          else if (ComboSkills.ComboMode === ComboModes.Master) {
            BaseStatus.OtherInfo.ToraumaRate = SkillKeySet.ToraumaRate;
            BaseStatus.OtherInfo.ComboRate = SkillKeySet.ComboRate;
          }
          else {
            BaseStatus.OtherInfo.ToraumaRate = SkillKeySet.ToraumaRate;
            BaseStatus.OtherInfo.ComboRate = SkillKeySet.ComboRate;
            BaseStatus.OtherInfo.IsWeponAttribute = SkillKeySet.IsAttribute;

            if (IsExpectMode === false)
              BaseStatus.OtherInfo.IsCritical = SkillKeySet.IsCritical;

            BaseStatus.Status.Attribute = Data.Method.GetTotalAttribute(BaseStatus, "First", false);
          }

          const OnceStable = () => {
            if (IsExpectMode) return MainMethod._stables(BaseStatus);
            if ([ComboModes.Master, ComboModes.Connect].includes(ComboSkills.ComboMode))
              return MainMethod._stables(BaseStatus, IsCritical);
            if (ComboSkills.ComboMode === ComboModes.Free) {
              const res = {};
              const value = SkillKeySet.Stable;
              res["All"] = [value, value, value];
              return res;
            }
            BaseStatus.OtherInfo.IsCritical = SkillKeySet.IsCritical;

            return MainMethod._stables(BaseStatus);
          } 
          const OnceDamegeResult = MainMethod._Damege(BaseStatus, OnceStable(), DamegeSelector);
          //期待値モード時は追加処理を行う。
          if (IsExpectMode) ExpectResults.push(OnceDamegeResult[1]);     

          if (!IsRecursion || !ComparsionMode)
            COMBORESULT.Result.push(OnceDamegeResult);
          else
            CompasionModeComboResult.Result.push(OnceDamegeResult);
        }
      });
      if (!IsRecursion || !ComparsionMode)
        COMBORESULT.Result.forEach(Once => Once.forEach((Value, Index) => AllDameges[Index] += Value));
      else
        CompasionModeComboResult.Result.forEach(Once => Once.forEach((Value, Index) => AllDameges[Index] += Value));
      
      if (IsGetDamegeArray && IsExpectMode) return ExpectResults;
      return AllDameges;
    })();

    if (IsGetDamegeArray) return Damege;

    const Rate = (Stables !== null && (Stables["All"] || Stables["IsSame"]))
      ? (Stables["All"] || Stables["First"]) : ["-", "-", "-"];
    
    const SetHtmlToDamege = (IsArchive) => {
      const Archive = IsArchive ? "_Archive" : "";
      const HtmlParams = ["Damege_Min", "Damege_Max", "Damege_Ave"];
      HtmlParams.forEach((Key, i) => {
        const RateText = Number(Rate[i]) ? Rate[i] + "%" : Rate[i];
        Judey.$id(Key + Archive).Text(Damege[i].toLocaleString("ja-JP"));
        Judey.$id(`${Key}_Stable${Archive}`).Text(RateText);
      })
    }

    SetHtmlToDamege(IsRecursion);

    if (IsRecursion === false && ComparsionMode)
      Judey.$id("ComparisonInfoFrame").RemClass("NoneText");
    else if (IsRecursion === false && ComparsionMode === false)
      Judey.$id("ComparisonInfoFrame").Class("NoneText");

    //比較モードかつ期待値モードが有効ではない場合は再帰処理で表示まで実行する。
    if (IsRecursion === false && ComparsionMode && IsExpectMode === false) {
      const ComparsionDataSet = MainMethod.GetComparsionDataSet(Reference);
      if (ComparsionDataSet === null) return;

      MainMethod.AllDamege(ComparsionDataSet, false, true, Damege[2]);
    }

    //再帰処理で比較モードが有効な場合、共通表示を通常状態で再計算し表示を行う。
    if (IsRecursion && ComparsionMode && IsExpectMode === false) {
      MainRender.ComparsionCommonDamegePreview(AverageDamege, Damege[2]);
    }    
  },
  /**期待値のダメージ計算を行い、Classまたは集計値を返却する。 */
  ExpectAllDamege: (Reference = null, IsOnlyDamegeValue = false) => {
    const Refs = Data.Method.CreateBuffer.GetReferenceCopy(Reference, true);
    const Skill = Refs.OtherInfo.Skill;
    const CriticalRates = Data.Method.GetSkillCriticalRates(Refs);
    const HitRates = Data.Method.GetSkillHitRates(Refs);
    const Stable = Refs.Status.Stable;

    const Result = new ExpectResult();
    let SumCount = 0;

    /**指定の攻撃の期待値情報を */
    const AppendExpectDamege = (Target) => {
      Refs.OtherInfo.IsShowDamage = Target;

      if (typeof (Skill) !== "string" && Skill[Target]) {
        //通常パターン
        SumCount++;

        Refs.OtherInfo.IsCritical = "base";
        const WhiteMaxDamege = MainMethod.AllDamege(Refs, true)[1];
  
        Refs.OtherInfo.IsCritical = "Critical";
        const CriticalMaxDamege = MainMethod.AllDamege(Refs, true)[1];
        Result.MaxDamege += CriticalMaxDamege;

        AppendValues(WhiteMaxDamege, CriticalMaxDamege, HitRates[Target], CriticalRates[Target]);
      }
      else if (typeof (Skill) === "string") {
        //コンボパターン
        Refs.OtherInfo.IsCritical = "base";
        const WhiteMaxDamege = MainMethod.AllDamege(Refs, true);

        //最低ダメージは1なので、合計値が0の場合は何もスキルがないということ。
        if (WhiteMaxDamege.reduce((a, b) => a + b, 0) === 0) return;
  
        Refs.OtherInfo.IsCritical = "Critical";
        const CriticalMaxDamege = MainMethod.AllDamege(Refs, true);

        const ComboCriticalRates = CriticalRates[Target];
        const ComboHitRates = HitRates[Target];
        let ReadIndex = 0;
        
        WhiteMaxDamege.forEach((damege, index) => {
          if (damege > 0) {
            SumCount++;

            Result.MaxDamege += CriticalMaxDamege[index];
            AppendValues(WhiteMaxDamege[index], CriticalMaxDamege[index], ComboHitRates[ReadIndex], ComboCriticalRates[ReadIndex]);
          }
        });
      }
    };

    /**単体の情報を結果の配列情報に追加する。 */
    const AppendValues = (WhiteMaxDamege, CriticalMaxDamege, HitRate, CriticalRate) => {
      const HitStable = Math.floor((100 + Stable) / 2) / 100;
      const GlazeStable = Math.floor((100 + Math.floor(Stable / 2)) / 2) / 100;
      const AverageStable = Math.floor((100 + Stable * (1 - 0.5 * (100 - HitRate) / 100)) / 2);
      Result.Stable += AverageStable;
      Result.HitRate += HitRate;

      const DamegeCriticalRate = CriticalRate * (1 + (HitRate - 100) / 100);
      const GlazeCriticalRate = CriticalRate * ((100 - HitRate) / 100);
      const NomalRate = (100 - CriticalRate) * (1 + (HitRate - 100) / 100);

      Result.CriticalRate += DamegeCriticalRate;
      Result.GlazeCriticalRate += GlazeCriticalRate;
      Result.NomalRate += NomalRate ;

      const Damege_Critical = CriticalMaxDamege * HitStable * DamegeCriticalRate/ 100;
      const Damege_GlazeCritical = CriticalMaxDamege * GlazeStable * GlazeCriticalRate / 100;
      const Damege_Nomal = WhiteMaxDamege * HitStable * NomalRate / 100;

      Result.CriticalDamege += Damege_Critical;
      Result.Critical_GlazeDamege += Damege_GlazeCritical;
      Result.NomalDamege += Damege_Nomal;

      return Damege_Critical + Damege_GlazeCritical + Damege_Nomal;
    }

    if (Refs.OtherInfo.IsShowDamage === "All") {
      SKILLKEYS.forEach(key => AppendExpectDamege(key));
    }
    else {
      AppendExpectDamege(Refs.OtherInfo.IsShowDamage);
    }

    Result.Stable = ExpectResult.Check(Result.Stable / SumCount);
    Result.CriticalRate = ExpectResult.Check(Result.CriticalRate / SumCount);
    Result.GlazeCriticalRate = Result.GlazeCriticalRate / SumCount;
    Result.NomalRate = Result.NomalRate / SumCount;
    Result.HitRate = ExpectResult.Check(Result.HitRate / SumCount);

    return IsOnlyDamegeValue ? Result.ExpectDamege() : Result;
  },
  /**
   * min,max,ave
   * ReferenceDatOtherInfo.Skillスキルの安定率を返却
   * 単発スキル状態のみ。
   * @param { Data } ReferenceData 
   * @param { boolean } IsCritical 
   * @returns { Array[number,number,number]}
   */
  _stables: (ReferenceData, IsCritical = null) => {
    if (typeof ReferenceData.OtherInfo.Skill === "string") return null;

    const IsMagicChecks = MainMethod.CheckMagicSkill(ReferenceData);
    const SkillOptions = MainMethod.GetSkillOptions(ReferenceData);
    const CriticalAttribute = IsCritical !== null ? IsCritical
      : ReferenceData.OtherInfo.IsCritical;

    //必中属性を持つスキルは個別計算で行う。
    const IsSameAttribute = Object.keys(IsMagicChecks).every(Key => {
      if (IsMagicChecks[Key] === false && SkillOptions[Key]?.["G_Hit"] !== undefined) return false;
      if (IsMagicChecks[Key] === undefined) return true;
      if (IsMagicChecks["First"] === IsMagicChecks[Key]) return true;
      return false;
    })
    
    //物理系
    const Critical = (Option) => {
      const Result = [];
      const Rate = Option !== "Glaze" ? 1
        : ReferenceData.OtherInfo.IsStabilis ? 0.75 : 0.5;
      
      Result.push(Math.floor(ReferenceData.Status.Stable * Rate));
      Result.push(100);
      Result.push(Math.floor((Result[0] + Result[1]) / 2));

      return Result;
    }

    //魔法系
    const Magic = Data.Method.GetTotalStableForMagic;
    
    const Result = {};
    if (IsSameAttribute) {
      const IsAllMagic = IsMagicChecks["First"];
      Result["All"] = (IsAllMagic === false)
        ? Critical(CriticalAttribute)
        : Magic(ReferenceData);
      
      return Result;
    }
    
    //1-3の回数毎に判定を行う。
    let Same = null;
    SKILLKEYS.forEach(Key => {
      if (IsMagicChecks[Key]) {
        Result[Key] = Magic(ReferenceData);
        Same = (Same === null || Same === 1) ? 1 : false;
      }
      else if (["Critical", "base"].includes(CriticalAttribute) || SkillOptions[Key]?.["G_Hit"]) {
        Result[Key] = Critical("Critical");
        Result["GolgoHit"] = true;
        Same = (Same === null || Same === 2) ? 2 : false;
      }
      else {
        Result[Key] = Critical("Glaze");
        Same = (Same === null || Same === 3) ? 3 : false;
      }
    })
    Result["IsSame"] = Number(Same) ? true : false;
    return Result;
  },
  //Min,Max,Ave
  _Damege: (ReferenceData, stable, selector) => {
    const info = ReferenceData.OtherInfo;
    const F = Data.Method;
    const CommonStable = stable["All"];

    const GetOnceDamege = Selector => {
      if (!info.Skill[Selector]) return [0, 0, 0];
      
      const Stable = CommonStable || stable[Selector];
      if (!Stable) return [0, 0, 0];

      const Result = [];
      Stable.forEach(once =>
        Result.push(F.GetTotalDamege(once / 100, Selector, ReferenceData)));
      
      return Result;
    }
    
    if (selector !== "All") return GetOnceDamege(selector);

    const AllResult = [0, 0, 0];
    SKILLKEYS.forEach(Key => {
      GetOnceDamege(Key).forEach((res, i) => AllResult[i] += res);
    })
    return AllResult;
  },
  //慣れ倍率の値を適用する。
  SwitchToraumaRate: (Rate, IsCulc = true) => {
    Data.OtherInfo.ToraumaRate = Number(Rate) || 100;
    Judey.$cls("ToraumaSet").InpText(Rate);
    Judey.$id("ToraumaRate_Text").Text(`${Rate}%`);
    if (IsCulc) {
      const SpecialStatus = new EquipmentExtension(Data);
      SpecialStatus.LimitedModifyStatus(Data, (RefData) => {
        MainMethod.CheckActiveSkills(RefData);
        MainMethod.AllCalculation(RefData);
        MainMethod.AllDamege(RefData);
        MainMethod.ShowExpectedPreview();
        MainMethod.ShowStatusAllPreview();
      })
    }
  },
  //パッシブ/ブレイブ倍率のテキスト更新
  //コンボ指定している場合はカスタム入力を暫定的に参照する。
  SetRateSelectorText: () => {
    const Skill = typeof Data.OtherInfo.Skill !== "string"
      ? Data.OtherInfo.Skill.First
      : SelectionData.Skill[0].First
    
    const PassiveRate = Math.floor(Data.Method.GetPassiveRate(Data, Skill) * 100);
    const BraveRate = Math.floor(Data.Method.GetBraveRate(Data) * 100);
    
    Judey.$query('.SelectorRateInfo[data-key="PassiveRate"]').Text(`倍率:${PassiveRate}%`);
    Judey.$query('.SelectorRateInfo[data-key="BraveRate"]').Text(`倍率:${BraveRate}%`);
  },
  //コンボ生成/再定義
  //コンボセットを返却する。
  /** @param {SkillComponent} SkillComponent */
  GetNewSkillSet: (SkillComponent, ReferenceData) => {
    let Combo_IsStrong = false;
    let Combo_IsReflect = false;
    let Combo_EcoCount = 0;
    let Combo_SaveCount = [];
    let Combo_SaveMP = 0;
    let Combo_IsBlood = false;

    const ComboMode = SkillComponent.ComboMode;
    const [StartTorauma, ToraumaMovement] = ComboMode === ComboModes.Battle
      ? [SkillComponent.FirstTorauma.New(), SkillComponent.ToraumaMovement] : [null, null];
    
    SkillComponent.AllTorauma = StartTorauma;
    SkillComponent.ResultToraumaArray = [StartTorauma?.New()];
    
    const GetComboRate = (ComboResult, Index) => {
      if (ComboResult === Combo.First) return 1;
      let Result = 100;

      if (ComboResult === Combo.Strong) Result += 50;
      if (ComboResult === Combo.Save) Combo_SaveCount.push(4);
      if (ComboResult === Combo.Eco) {
        Combo_EcoCount++;
        Result -= Combo_EcoCount * 10;
      }
      if (ComboResult === Combo.Blood) {
        Result += Combo_IsBlood ? (10 + Index + 1) : 0;
        Combo_IsBlood = true;
      }
      
      //強打後の-50％判定
      if (Combo_IsStrong) Result -= 50;
      Combo_IsStrong = ComboResult === Combo.Strong;

      //充填ペナルティ
      if (Combo_SaveCount.length > 0) {
        const Penalty = Combo_SaveCount.reduce((total, num) => total += num * 20, 0);
        Combo_SaveCount = Combo_SaveCount.map(num => num - 1).filter(num => num !== 0);
        Result -= Penalty;
      }
      return Result > 10 ? NumerSet(Result) : .1;
    }
    /** @param {SkillSet} ComboResult */
    const SetComboMP = (ComboResult, Index, EndIndex) => {
      let BaseMP = SelectionData.Skill[ComboResult.SkillPropertyName].MP || 0;

      //反射判定
      if (Combo_IsReflect) {
        BaseMP = BaseMP <= 100 ? 0 : BaseMP - 100;
      } else {
        Combo_IsReflect = ComboResult.ComboAttribute === Combo.Reflect;
      }

      //充填判定1
      if (ComboResult === Combo.Save) {
        Combo_SaveMP = BaseMP;
        BaseMP = 0;
      }

      //最終強打判定
      if ((ComboResult.ComboAttribute === Combo.Strong) && Index === EndIndex) {
        BaseMP *= 2;
      }

      //連撃判定
      if (ComboResult.ComboAttribute === Combo.Eco) {
        const MPcount = Index;
        BaseMP = (BaseMP <= 100 * MPcount) ? 0 : BaseMP - 100 * MPcount;
      }

      //充填タンク判定
      if ((BaseMP !== 0) && Combo_SaveMP > 0) {
        const MitigationMP = BaseMP - Combo_SaveMP;
        
        BaseMP = MitigationMP <= 0 ? 0 : MitigationMP;
        Combo_SaveMP = (MitigationMP >= 0) ? 0 : Combo_SaveMP + MitigationMP;
      }

      //最終充填タンク判定
      if ((Index === EndIndex) && Combo_SaveMP > 0) BaseMP += Combo_SaveMP;
      
      //この部分は制限MPをいれた時に少し変える。
      ComboResult.MP = BaseMP;
      ComboResult.IsEnable = true;
    }
    
    //指定スキルの慣れ倍率を返却
    //コンボ戦闘モード指定時は以下の動作を追加で行う。
    //AllToraumaの慣れ数値を変動値指定の値で更新
    //ResultToraumaArrayへこのスキルによる慣れ変動セットを追加
    const GetToraumaMoveMent = (NewSkillSet) => {
      const Skill = SelectionData.Skill[NewSkillSet.SkillPropertyName];
      const IsMagic = Skill?.First?.Base?.IsMagicalSkill;
      
      //変動慣れ対象
      const MoveTorauma = Skill.Torauma;
      //参照慣れ
      const ShowTorauma = (() => {
        if (Skill.ShowTorauma) return Skill.ShowTorauma;
        if (IsMagic) return Torauma.Magic;
        return MoveTorauma;
      })()

      NewSkillSet.Torauma = MoveTorauma;
      NewSkillSet.ShowTorauma = ShowTorauma;
      
      if (ComboMode !== ComboModes.Battle) return NewSkillSet.ToraumaRate;

      const NowTorauma = SkillComponent.AllTorauma;
      const Result = NowTorauma[ShowTorauma];
      
      //慣れ変動がなしの場合はそのままの値を追加する。
      if (MoveTorauma === Torauma.No) {
        SkillComponent.ResultToraumaArray.push(NowTorauma.New());
        return Result;
      }

      Object.keys(NowTorauma).forEach(Key => {

        const MoveResult = Key === MoveTorauma
          ? - ToraumaMovement[Key]
          : + ToraumaMovement[Key];
        const Value = NowTorauma[Key] + MoveResult;

        NowTorauma[Key] = (Value < 50) ? 50 : (Value > 250) ? 250 : Value;
      })

      SkillComponent.ResultToraumaArray.push(NowTorauma.New());
      return Result;
    }

    //小数点以下の数値調整
    const NumerSet = num => {
      const Value = String(num);
      if (Value.length === 3) {
        return Number(`${Value[0]}.${Value[1]}${Value[2]}`);
      }
      else if (Value.length === 2) {
        return Number(`0.${Value[0]}${Value[1]}`);
      }
      return Number(`0.0${Value[0]}`);
    }

    const Result = [];
    SkillComponent.SkillSetArray.forEach((Elem, Index, Ary) => {
      const NewSkillSet = new SkillSet();
      Object.keys(Elem).forEach(Key => NewSkillSet[Key] = Elem[Key]);

      if (ComboMode === ComboModes.Connect)
        NewSkillSet.ToraumaRate = ReferenceData.OtherInfo.ToraumaRate;
      
      if (ComboMode !== ComboModes.Free) {
        if (ComboMode === ComboModes.Connect) {
          NewSkillSet.ComboRate = ReferenceData.OtherInfo.IsStrong ? 1.5 : 1;
          NewSkillSet.ComboAttribute = ReferenceData.OtherInfo.IsStrong
            ? Combo.Strong
            : Combo.Nomal;
        } else {
          NewSkillSet.ComboRate = GetComboRate(NewSkillSet.ComboAttribute, Index);
        }
      }
      
      NewSkillSet.ToraumaRate = GetToraumaMoveMent(NewSkillSet);
      SetComboMP(NewSkillSet, Index, Ary.length - 1);
      
      if ([ComboModes.Combo, ComboModes.Battle].includes(SkillComponent.ComboMode)) {
        if (Index === 0) NewSkillSet.ComboAttribute = Combo.First;
        if (!NewSkillSet.ComboAttribute) NewSkillSet.ComboAttribute = Combo.Nomal;
      }
      Result.push(NewSkillSet);
    })
    return Result;
  },
  //コンボ選択再取得
  RefreshComboSelector: () => {
    const Elem = Judey.$id("ComboSelector");
    const Keys = Judey.$query("#ComboSelector option");
    //消去
    Keys.EachElem(elem => {
      if (elem.value !== "none") elem.remove();
    });

    //再取得
    const AppendKeys = Object.keys(SelectionData.ComboSkill);
    AppendKeys.forEach(Key => {
      Elem.Child("option").Attr({ value: Key })
        .Text(SelectionData.ComboSkill[Key].Name).Breaker();
    })
    Elem.InpText("none").Dispatch("change");
  },

  /**期待値モードが有効な時、表示の更新を行う。 */
  ShowExpectedPreview: () => {
    const ComparsionMode = MainMethod.CheckEnableComparsionMode();
    const ExpectMode = Data.OtherInfo.IsExpectedShow === true;

    if (ComparsionMode && ExpectMode) {
      const CompasionDataSet = MainMethod.GetComparsionDataSet(Data);
      const BeforeDamege = MainMethod.ExpectAllDamege(Data, true);
      const AfterDamege = MainMethod.ExpectAllDamege(CompasionDataSet, true);

      MainRender.ComparsionCommonDamegePreview(BeforeDamege, AfterDamege);
    }

    if (ExpectMode)
      MainRender.ExpectedInputs(MainMethod.ExpectAllDamege(Data, false));          
  },
  /*サイト側へ反映(ステータス確認画面)*/
  ShowStatusAllPreview: () => {
    const writer = (target, address, link) => {
      target.forEach((v) => {
        const value = !["Attribute", "AllAttribute"].includes(v) ? Math.floor(link[v]) : link[v];
        const render = (!value ? "-" : value.toLocaleString("ja-JP"));
        const elem = Judey.$query(`span[data-id="${address}-${v}"]`);
        elem
          .Text(render)
          .Style((value < 0 ? "color:red;" : ""));
        
        if (address === "TotalStatus" && v === "HP" && value <= 0) {
          elem.Text(`1(${value.toLocaleString("ja-JP")})`);
        }
      });
    };
    const StatusSet = (() => {
      const value = Judey.id("ShowAttributeStatusSelector1").value;

      const ParentElems = ["All", "PartialAll"];
      if (ParentElems.includes(value)) {
        return Data.AdditionStatus[value];
      }
      
      const NoChildElem = ["Wepon", "Armor", "Addition", "Option", "SubWepon",
        "Other", "Other2", "Other3", "Other4", "Other5", "Other6", "Other7"];
      if (NoChildElem.includes(value)) {
        return MainMethod.GetDataUnit(Data.AdditionStatus[value]);
      }
      
      const DataSet = (() => {
        const Enchants = ["Enchant", "Enchant2", "Enchant3"];

        if (!Enchants.includes(value)) return Data.AdditionStatus[value];
        
        const res = {};
        
        Enchants.forEach(key => res[key] = Data.AdditionStatus[key]);
        return res;
      })()
      const Keys = Object.keys(DataSet);
      const Result = {};

      for (let Key of Keys) {
        const ary = MainMethod.GetDataUnit(DataSet[Key]);
        const ary_keys = Object.keys(ary);
        for (let ary_key of ary_keys) {
          if (Result[ary_key] === undefined) {
            Result[ary_key] = ary[ary_key];
            continue;
          }
          Result[ary_key] += ary[ary_key];
        }
      }
      return Result;
    })()
    writer(ADDITION, "All", StatusSet);
    writer(SHOWSTATUS, "TotalStatus", Data.Status);
    writer(STATUS_NONAFTER, "TotalStatus", Data.Status);
  },
  /** 装備品の能力を表示する。 */
  ChangeEquipmentPreview: (target) => {
    const Equipment = MainMethod.GetDataUnit(target);

    if (Equipment["HateLittle"] !== undefined) {
      if (Equipment["Hate"] !== undefined)
        Equipment["Hate"] -= Equipment["HateLittle"];
      else
        Equipment["Hate"] = -Equipment["HateLittle"];
      
      delete Equipment["HateLittle"];
    }
    const Selector = Data.OtherInfo.EquipmentSelector;
    const ShowSet = Judey.$query(".Equipment_Block,.EquipmentSelectorInfo");//.Additions変更
    const SpecialSelector = Judey.$query(".ArmorSelector,.EquipmentInWeponsATK");

    SpecialSelector.Class("NoneText");

    //NonesData:装備なし
    if (target.Name === "NonesData") {
      ShowSet.Class("NoneText");
      if (Selector === "Armor")
        Judey.$id("ArmorSelector").Class("NoneText");
    }
    else {
      ShowSet.RemClass("NoneText");

      if (Selector === "Armor") {
        Judey.$id("ArmorSelector").RemClass("NoneText");
      } else if (Selector === "Wepon") {
        Judey.$query(".EquipmentInWeponsATK[data-key='WeponATK']").RemClass("NoneText");
      } else if (Selector === "SubWepon") {
        Judey.$query(".EquipmentInWeponsATK[data-key='SubWeponATK']").RemClass("NoneText");
      }

      //追加ステータス確認
      const InfoElem = Judey.$cls("Equipment_ExtensionInfo").Class("NoneText");
      const KeyValue = target.Name;
      const EnumValue = EquipmentExtensionenum[Data.OtherInfo.EquipmentSelector];
      SelectionData.Extension.forEach(Values => {
        if (Values.ExtensionCode === EnumValue && Values.KeyNo == KeyValue) {
          InfoElem.Text(
            "～装備品追加効果～\n" +
            Values.Description +
            "\n※装備/選択時に自動的に適用されます。(非表示プロパ)"
          ).RemClass("NoneText");
        }
      });
    }
    
    const target_keys = Equipment ? Object.keys(Equipment) : [];
    
    Judey.$query(".Equipment_Values,.Equipment_WeponATK_Values").InpText("");//
    const Keys = ADDITION.filter(v => v !== "MEN" && v !== "TEC");
    for (let v of Keys) {
      if (target_keys.includes(v)) {
        if (v === "MainWeponATK" || v === "SubWeponATK") {
          Judey.$query(`.Equipment_WeponATK_Values[data-key="${v}"]`).InpText(Equipment[v]);
        } else {
          Judey.$query(`.EquipmentBlock_Attributes_Value[data-key="${v}"]`).InpText(Equipment[v]);
        }
        //Judey.id(`Equ_Addition-${v}`).value = Equipment[v];
        
      }
    }

    //装備品付加のATK値反映動作
    let TargetElem;
    if (Selector === "Wepon")
      TargetElem = Judey.$query(".Equipment_WeponATK_Values[data-key='MainWeponATK']");
    else if (Selector === "SubWepon")
      TargetElem = Judey.$query(".Equipment_WeponATK_Values[data-key='SubWeponATK']");
    
    if (TargetElem) {
      const KeyName = Selector === "Wepon" ? "MainWepon" : "SubWepon";

      if (!TargetElem.InpText() &&
        ![`${KeyName}_Stable`, `${KeyName}_Smelting`, `${KeyName}_Wepon`].some(elem => target_keys.includes(elem))) return;

        //2024/5/5 安定率と精錬値も追加
        const AttributeName = Selector === "Wepon" ? "" : "Sub";
        
        if (Equipment[`${KeyName}_Stable`] >= 0) {
          Data.OtherInfo[`${AttributeName}Stable`] = Equipment[`${KeyName}_Stable`];
          Judey.$id(`OtherInfo-${AttributeName}Stable`).InpText(Equipment[`${KeyName}_Stable`]);
        }
        if (Equipment[`${KeyName}_Smelting`] >= 0) {
          Data.OtherInfo[`${AttributeName}Smelting`] = Equipment[`${KeyName}_Smelting`];
          Judey.$id(`OtherInfo-${AttributeName}Smelting`).InpText(Equipment[`${KeyName}_Smelting`]);
        }
      //--
      //---装備情報も追加
      if (Equipment[`${KeyName}_Wepon`] !== undefined) {
        if (KeyName === "MainWepon" || Data.Wepon[Data.OtherInfo.Wepon].SubWepon.includes(Equipment[`${KeyName}_Wepon`])) {
          //ここで値を変更すると同種武器判定で処理が一部スキップされるため。
          //Data.OtherInfo[`${AttributeName}Wepon`] = Equipment[`${KeyName}_Wepon`];
          Judey.$id(`OtherInfo-${AttributeName}Wepon`)
            .InpText(Equipment[`${KeyName}_Wepon`])
            .Dispatch("change");
        }

      }
      TargetElem.Dispatch("change");
    }   
  },
  /**
   * AllへStatusを反映する。
   * IsPartialInsert:分離ステータス側へ値の反映
   */
  SendAllStatus: (Send, IsPartialInsert = false, Refs = null) => {
    if (!Send) return;

    const SendText = Object.keys(Send);
    const Root = Refs?.AdditionStatus ?? Data.AdditionStatus;
    for (key of SendText) {
      if (Root.All[key] === undefined) continue;
      Root.All[key] += Send[key];
      
      if (IsPartialInsert === false) continue;

      if (Root.PartialAll[key] !== undefined) {
        Root.PartialAll[key] += Send[key];
      } else {
        Root.PartialAll[key] = Send[key];
      }
    }
  },
  /**
   * 
   * @param {*} CurrentEquiBase 対象の装備能力ベース情報
   * @param {*} NewEquipBase この装備能力に入れ替えする。
   * @param {*} IsNewValue Trueの場合は『CurrentEquiBase』をNewEquipBaseに書き換えする。
   * @returns 
   */
  SendStatus: (CurrentEquiBase, NewEquipBase, IsNewValue = false) => {

    if (!CurrentEquiBase) return NewEquipBase;
    const BaseText = Object.keys(CurrentEquiBase);
    const SendText = Object.keys(NewEquipBase);
    let Result = {}; //変更値

    if (SendText.length === 0) {
      for (let v of BaseText) {
        Result[v] = -CurrentEquiBase[v];
      }
      return Result;
    }

    const AllText = new Set([...BaseText, ...SendText]);
    for (let v of AllText) {
      if (BaseText.includes(v) && SendText.includes(v)) {
        const Difference = NewEquipBase[v] - CurrentEquiBase[v];
        Result[v] = Difference;
        if (IsNewValue) CurrentEquiBase[v] = NewEquipBase[v];
        continue;
      }
      if (!BaseText.includes(v) && SendText.includes(v)) {
        Result[v] = NewEquipBase[v];
        if (IsNewValue) CurrentEquiBase[v] = NewEquipBase[v];
        continue;
      }
      if (BaseText.includes(v) && !SendText.includes(v)) {
        Result[v] = -CurrentEquiBase[v];
      }
    }
    return Result;
  },
  //データを結合する。
  //Baseに値を指定した場合はBaseに全てマージする。
  MargeData: (DataSet_Array, Base = null) => {
    const Values = Base || {};
    const go = Obj => {
      const Keys = Object.keys(Obj);
      if (Keys.length === 0) return;
      for (let key of Keys) {
        const Result = Number(Obj[key]) ? Number(Obj[key]) : null;
        if (!Result) continue;

        if (Values[key] !== undefined) {
          Values[key] += Result;
        } else {
          Values[key] = Result;
        }
      }
    }
    if (DataSet_Array?.forEach)
      DataSet_Array.forEach(ary => go(ary));
    else
      go(DataSet_Array);
    return Values;
  },
  //Judey参照,送信値、Name保管root
  AddListitem: (judey, keys, dir, NowName = null) => {
    const NameKey = String(NowName !== null ? NowName : "");
    const SortedKeys = keys.sort((K1, K2) => {
      const [v1, v2] = [dir[K1]?.FilterNo, dir[K2]?.FilterNo];
      if (v1 === undefined || v2 === undefined) return 0;
      if (v1 !== 0 && v2 == 0) return -1;
      if (v1 == 0 && v2 !== 0) return 1;
      return v1 > v2 ? 1 : v1 < v2 ? -1 : 0;
    })
    for (let key of SortedKeys) {
      judey.Child("option").Attr("value", key).Text(dir[key].Name);
      if ([String(key), dir[key].Name].includes(NameKey)) judey.Attr("selected", "true");
      judey.Breaker();
    }
  },
  //グループ付きドロップダウンリスト生成
  AddGroupListItem: (judey, Groups, GroupsText, keys, dir, NowName = null) => {
    //グループ生成
    let i = 0;
    for (const Group of Groups) {
      if (keys[i].length !== 0) {
        judey.Child("optgroup", "", `Groups_${Group}`)
          .Attr("label", GroupsText[i]);
        MainMethod.AddListitem(judey, keys[i], dir, NowName);
        judey.Breaker();
      };
      i += 1;
    }
  },
  //引数内の能力値のテキスト要素セットを返却
  //要素0の場合はnull返却
  BaseReferenceText: (DataUnitBase, ElemClass = "") => {
    const DataBase = (DataUnitBase?.["Base"] ? DataUnitBase["Base"] : DataUnitBase).New();

    if (DataBase["HateLittle"] !== undefined) {
      if (DataBase["Hate"] !== undefined)
        DataBase["Hate"] -= DataBase["HateLittle"];
      else
        DataBase["Hate"] = -DataBase["HateLittle"];

      delete DataBase["HateLittle"];
    }

    if (DataBase.length < 1) return "";
    const AttributeText = new BaseStatus(false); //テキストセット
    const UnitDataKeys = Object.keys(DataBase);

    const elem = Judey.$Element("div", "", ElemClass);
    for (let key of UnitDataKeys.filter(key=>!BaseStatus.WeponAttirbuteKeys.includes(key))) {
      if (AttributeText[key] === undefined) continue;
      if (DataBase[key] === 0) continue;
      {
        const Attribute = AttributeText[key];
        const Value = DataBase[key];

        const RateAttribute = Attribute.includes("(%)");
        const PlusSide = Value >= 0;

        elem.AppendLast(`
          <div class='AttributeTexts ${PlusSide ? "" : "Debuff"}'>
            <span class='Reference_Text' data-key="${key}">${Attribute.replaceAll("(%)","").replaceAll("+","")}</span>
            <span class='Reference_KANMA'>${PlusSide ? "+" : "-"}</span>
            <span class='Reference_Number'>${Math.abs(Value)}${RateAttribute ? "%" : ""}</span>
          </div>
        `)
      }
    }

    const Selector = Data.OtherInfo.EquipmentSelector;
    const SmeltingTexts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "E", "D", "C", "B", "A", "S"];
    const ExtensionProperty_Main = ["ATK", "_Stable", "_Stable", "Smelting"].map(elem=> "MainWepon" + elem);
    const ExtensionProperty_Sub = ["ATK", "_Stable", "_Stable", "Smelting"].map(elem=> "SubWepon" + elem);

    //装備品内付加の武器能力
    ["SubWepon", "MainWepon"].forEach(WepKey => {
      const SelectorIsWepons = Selector === "Wepon" && WepKey === "MainWepon" || Selector === WepKey;

      if (
        SelectorIsWepons &&
        (
          (WepKey === "MainWepon" && ExtensionProperty_Main.some(key => UnitDataKeys.includes(key))) ||
          (WepKey === "SubWepon" && ExtensionProperty_Sub.some(key => UnitDataKeys.includes(key)))
        )
      ) {

        const WeponElement = Judey.$Element("div", "", "AttributeTexts_WeponAttribute,WeponAttribute");
        const WeponATK = DataBase[`${WepKey}ATK`] ?? 0;

        if (UnitDataKeys.includes(`${WepKey}_Wepon`)) {
          WeponElement.AppendLast(`
          <span class="Reference_Text">
            ≪${Data[Selector][DataBase[`${WepKey}_Wepon`]]?.Name}≫
          </span>
          <span class="Reference_KANMA"></span>
          <span class="Reference_Text">${WeponATK}</span>
        `);
        } else {
          WeponElement.AppendLast(`
          <span class="Reference_Text">${WepKey.includes("Main") ? "メイン" : "サブ"}</span>
          <span class="Reference_KANMA">:</span>
          <span class="Reference_Text">${WeponATK}</span>
        `);  
        }


        if (UnitDataKeys.includes(`${WepKey}_Smelting`)) {
          WeponElement.AppendLast(`
            <span class="Reference_Text">+${SmeltingTexts[DataBase[`${WepKey}_Smelting`]]}</span>
          `);
        }
        if (UnitDataKeys.includes(`${WepKey}_Stable`)) {
          WeponElement.AppendLast(`
            <span class="Reference_Text">(${DataBase[`${WepKey}_Stable`]}%)</span>
          `);
        }

        elem.AppendFirst(WeponElement);
      }
    });

    return elem.Elem();
  },
  //装備またはデフォルトのクリスタ情報を新しくセットする。
  SetCrystalData: (Event, EnableBaseCalc = true) => {
    const Props = {
      /** 装備品付随のクリスタ選択の場合、または要素がそもそもない場合にTrue*/
      IsInserCrystal: null,
      SetCrystalTarget: null,
      CrystalCount: null,
      Data_SetKey: null,
      CrystalRoot: null,
      CrystalKey: null
    };

    /** 1つの対象のクリスタを書き換える @param {Props} PropsData */
    const SetCrystal = (PropsData) => {
      /**現装備表示がクリスタ挿入対象であるか。 */
      const IsEnableCrystalEquipment = ["Wepon", "Armor", "Addition", "Option"].includes(Data.OtherInfo.EquipmentSelector);
      const TargetEquipments = MainMethod.GetIncludeUnitData(Data.AdditionStatus[PropsData.SetCrystalTarget]);
      
      //装備なし、Data_SetKeyが1以下(おかしい)、現装備品表示がクリスタ対象のものではない場合
      if (TargetEquipments[1] === "NonesData" && PropsData.IsInserCrystal) return;
      if (PropsData.Data_SetKey < 1) return;
      if (PropsData.IsInserCrystal && !IsEnableCrystalEquipment) return;
      const ResetEquipmentUnitData = () => {
        const Unit = MainMethod.AddDataUnit(TargetEquipments[0], TargetEquipments[1]);
        Data.AdditionStatus[PropsData.SetCrystalTarget] = Unit.New();
      };
      
      /**単体選択側*/
      const MainCryQuery = `.CrystalSelector[data-count="${PropsData.CrystalCount}"][data-category=${PropsData.SetCrystalTarget}]`;
      /**装備付加選択側 */
      const InsertCryQuery = `.CrystalSelector[data-count="${PropsData.CrystalCount}"]:not(.CrystalSelector[data-category])`;

      if (PropsData.IsInserCrystal) TargetEquipments[0][`Crystal${PropsData.CrystalCount}`] = PropsData.CrystalKey;

      //付加連係解除の場合
      if (PropsData.IsInserCrystal && [undefined, null].includes(PropsData.CrystalKey)) {
        TargetEquipments[0][`Crystal${PropsData.CrystalCount}`] = null;
        ResetEquipmentUnitData();
        Judey.$query(InsertCryQuery).InpText("null");
        return false;
      };

      if (!IsEnablePartialCrystalMode) {
        TargetEquipments[0][`Crystal${PropsData.CrystalCount}`] = null;
        if (PropsData.IsInserCrystal) return false;
      }
  
      //クリスタ入れ替え
      MainMethod.SetDataUnit(Data.AdditionStatus.Crystal, Props.Data_SetKey
        , SelectionData.Crystal[PropsData.CrystalRoot], PropsData.CrystalKey, false, EnableBaseCalc);
      
      ResetEquipmentUnitData();

      if (!IsEnablePartialCrystalMode) return;
      if (!PropsData.IsInserCrystal) return;
      if (TargetEquipments[0][`Crystal${PropsData.CrystalCount}`] === null) return;
      if (Data.OtherInfo.EquipmentSelector != PropsData.SetCrystalTarget) return;

      //表示側同期
      Judey.$query(`${MainCryQuery},${InsertCryQuery}`).InpText(`${PropsData.CrystalRoot}-${PropsData.CrystalKey}`);      
    }

    const Elem = Event?.target;
    const IsEnablePartialCrystalMode = MainMethod.CheckIsEnabedPartialCrystal();

    if (Elem) {
      Props.IsInserCrystal = !Elem.dataset?.category; //装備付加のクリスタかの判定。
      Props.SetCrystalTarget = Elem.dataset?.category || Data.OtherInfo.EquipmentSelector;
      Props.CrystalCount = Number(Elem.dataset.count);
      Props.Data_SetKey = Elem.dataset.prop
        || ["Wepon", "Armor", "Addition", "Option"].indexOf(Props.SetCrystalTarget) * 2 + Props.CrystalCount;
      
      [Props.CrystalRoot, Props.CrystalKey] = Elem.value.split("-");
      
      if (SetCrystal(Props) !== false) MainRender.CrystalReference();

      //クリスタ連携機能が有効であり、任意登録情報の場合にローカルストレージ情報の更新を行う。
      if (Props.IsInserCrystal == false) return;
      const EquipDatas = MainMethod.GetIncludeUnitData(Data.AdditionStatus[Props.SetCrystalTarget]);
      
      if (EquipDatas[1].length !== 13) return;
      const DataUnit = MainMethod.AddDataUnit(EquipDatas[0], EquipDatas[1]);
      MainMethod.SetSingleLocalCustom(Props.SetCrystalTarget, DataUnit);

    } else {
      Props.IsInserCrystal = true;
      Props.SetCrystalTarget = Data.OtherInfo.EquipmentSelector;

      for (let i = 1; i <= 2; i++) {
        Props.CrystalCount = i;
        Props.Data_SetKey =
          ["Wepon", "Armor", "Addition", "Option"].indexOf(Props.SetCrystalTarget) * 2 + Props.CrystalCount;
        Props.CrystalKey = Data.AdditionStatus[Props.SetCrystalTarget].Unit[`Crystal${i}`];

        const NomalCrystalKey = Props?.CrystalKey?.includes("N") || Props?.CrystalKey?.includes("M"); 
        Props.CrystalRoot = (NomalCrystalKey || SelectionData.Crystal.Nomal[Props.CrystalKey]) ? "Nomal" : Props.SetCrystalTarget;
        SetCrystal(Props);
      }
      MainRender.CrystalReference();
    };
  },
  //クリスタ連携モードが有効かを設定する。
  CheckIsEnabedPartialCrystal: (value = null) => {
    if (!window?.localStorage) return false;
    
    const Ans = window.localStorage.getItem("Toram_EnablePartialCrystal");
    if (Ans === undefined) {
      window.localStorage.setItem("Toram_EnablePartialCrystal", "0");
      return false;
    }

    if (value !== null) {
      window.localStorage.setItem("Toram_EnablePartialCrystal", value);
      return;
    }

    return Ans === "1";
  },
  /**装備品クリスタセットダメージ比較連携が有効かを設定する。*/
  CheckIsEnabledEquipmentCrystalSetDamege: (value = null) => {
    if (!window?.localStorage) return false;
    
    const Ans = window.localStorage.getItem("Toram_EnableEquipmentCrystalSetDamege");
    if (Ans === undefined) {
      window.localStorage.setItem("Toram_EnableEquipmentCrystalSetDamege", "0");
      return false;
    }

    if (value !== null) {
      window.localStorage.setItem("Toram_EnableEquipmentCrystalSetDamege", value);
      return;
    }

    return Ans === "1";
  },
  /**装備品内に武器情報を登録する機能が有効かを設定する。*/
  CheckEnableSetEquipmentWeponProperty: (value = null) => {
    if (!window?.localStorage) return false;
    
    const Ans = window.localStorage.getItem("Toram_SetEquipmentWeponProperty");
    if (Ans === undefined) {
      window.localStorage.setItem("Toram_SetEquipmentWeponProperty", "0");
      return false;
    }

    if (value !== null) {
      window.localStorage.setItem("Toram_SetEquipmentWeponProperty", value);
      return;
    }

    return Ans === "1";
  },
  //レベル選択フォーム生成
  //+データの書き換え
  AddLevelSelectors: (TargetElem, SkillRoot) => {
    const Lv = Number(TargetElem.dataset.lv);
    const Key = TargetElem.dataset.key;
    /** @type { Interface_AddBuff }*/
    const Skill = SkillRoot[Key];

    const AddElem = () => {
      const SkillName = Skill.MainName;

      const BaseElem = Judey.$Element("div", "", "LvSelectorSet");
      const SkillTextElem = `<p class='LvSelector_SkillText'>${SkillName}</p>`;
      const LvSelectorBaseElem = (Text, LvKeyTarget, Lv) => {
        if (Text === "" || !Text) return "";
        return `
        <div class='LvSelector_SelecotorCompornent'>
          <p class='LvSelector_InfoText'>${Text}</p>
          <div class='Flex LvSelector_BtnSet'>
            <div class='LvSelector_LvSelectBtns' data-value="-10" data-lvkey="${LvKeyTarget}">-10</div>
            <div class='LvSelector_LvSelectBtns' data-value="-1" data-lvkey="${LvKeyTarget}">-1</div>
            <input type="number" value="${Lv.toString()}" class='LvSelector_LvResult' data-lvkey="${LvKeyTarget}">
            <div class='LvSelector_LvSelectBtns' data-value="1" data-lvkey="${LvKeyTarget}">+1</div>
            <div class='LvSelector_LvSelectBtns' data-value="10" data-lvkey="${LvKeyTarget}">+10</div>
          </div>        
        </div>
        `;
      };

      const MainLvElem = LvSelectorBaseElem(Skill.MainSelectorText, "Lv", Skill.Lv);
      const SecondLvElem = LvSelectorBaseElem(Skill.SecondSelectorText, "SecondLv", Skill.SecondLv);
      const TherdLvElem = LvSelectorBaseElem(Skill.TherdSelectorText, "TherdLv", Skill.TherdLv);
      const EndElem = `<div class='LvSelector_EndBtn'>閉じる</div>`;

      BaseElem.AppendLast(SkillTextElem + MainLvElem + SecondLvElem + TherdLvElem + EndElem);
      
      Judey.$elem(TargetElem).AppendAfter(BaseElem);
      if (localStorage?.getItem("Toram_InputNumMode") == "2") {
        MainRender.PaletteSelector(Judey.$cls("LvSelector_LvResult"));
      }
    }
    
    //レベル変更
    const LvChange = (e) => {
      const Elemlevel = Number(e.target.value);
      const LvTarget = e.target.dataset.lvkey;

      const Kigou = Skill["NotLevel"] ? "×" : "/";

      if (!Skill?.Change) return;
      if (Skill[LvTarget] === undefined || Skill[LvTarget] === null) return;
      if (Skill[LvTarget] == Elemlevel) return;

      const IsReflectSwitchData = Skill?.IsCheckerActive ?? Skill.IsActive;
      
      const Result = {};
      Result[LvTarget] = Elemlevel;

      Skill.SwitchData(Result, IsReflectSwitchData);
      if (LvTarget === "Lv") {
        Data.OtherInfo[Skill.Root] = Skill.Lv;

        //ブレイブオーラのみ
        if (Skill.Root === "IsBrave") {
          TargetElem.innerText = (Skill.Lv === 1 ? "ブレイブ(使用者)" : "ブレイブオーラ");
        } else {
          //それ以外
          const Text = TargetElem.innerText.split(Kigou)[0];
          TargetElem.innerText = Text + Kigou + Skill.Lv;
        }

      }


      Judey.$query(".LvSelector_LvResult[data-lvkey='Lv']").InpText(Skill?.Lv?.toString());
      Judey.$query(".LvSelector_LvResult[data-lvkey='SecondLv']").InpText(Skill?.SecondLv?.toString());
      Judey.$query(".LvSelector_LvResult[data-lvkey='TherdLv']").InpText(Skill?.TherdLv?.toString());
      
      if (Skill["Root2"]) {
        Data.OtherInfo[Skill["Root2"]] = Skill.SecondLv;
      }
      if (Skill["Root3"]) {
        Data.OtherInfo[Skill["Root3"]] = Skill.TherdLv;
      }
      if (Skill.IsActive) BaseCalculation();
    }
    
    //終了動作
    const SelectorEnd = async () => {
      Judey.$tag("form").RemEvent("click", EndCheck);
      const elem = Judey.$cls("LvSelectorSet");
      if (elem.Rem) elem.Rem();
      
      const res = await import(Js_Archive);
      res.PartialCapturedSend();
    }
    //要素外選択確認
    const EndCheck = (e) => {
      const elems = e.composedPath();
      for (let elem of elems) {
        if (elem.classList === undefined) continue;
        if (elem.classList.contains("LvSelectorSet")) return;
        if (elem.classList.contains("PaletteSelector")) return;
      };
      SelectorEnd();
    }
    
    AddElem();
    Judey.$cls("LvSelector_LvResult").Event("change", LvChange);
    Judey.$cls("LvSelector_LvSelectBtns").Event("click", (e) => {
      const Value = Number(e.target.dataset.value);
      const Target = e.target.dataset.lvkey;

      const ChangeElem = Judey.$query(`.LvSelector_LvResult[data-lvkey="${Target}"]`);
      const ResultValue = Value + Number(ChangeElem.InpText());
      ChangeElem.InpText(ResultValue.toString());

      ChangeElem.Dispatch("change");
    })
    Judey.$cls("LvSelector_EndBtn").Event("click", SelectorEnd);
    Judey.$tag("form").CaptureEvent("click", EndCheck);
  },
  AddSkillReference: (Target, SkillRoot) => {
    const SkillRef = SkillRoot[Target]["RefText"];
    const SkillAttr = SkillRoot[Target]["AbilityText"];
    const DisableSkillAttr = SkillRoot[Target]["DisableAbilityText"];
    const SkillName = SkillRoot[Target]["MainName"];
    const IsLevel = SkillRoot[Target]["NotLevel"];
    const SkillTreeName = SkillTree.GetTreeName(SkillRoot[Target]["TreeNo"]);

    const ClsSet = ["SkillTreeName", "SkillName", "Ref", "Info", "Ability", "DisableInfo", "DisableAbility"]
      .map(v => `SkillReference_${v}`);
    const TxtSet = IsLevel
      ? [SkillTreeName, SkillName, SkillRef, "有効選択時の適用効果(最大効果時)", SkillAttr,"装備種により適用しない効果(最大効果時)", DisableSkillAttr]
      : [SkillTreeName, SkillName, SkillRef, "有効選択時の適用効果(レベル最大時)", SkillAttr, "装備種により適用しない効果(レベル最大時)", DisableSkillAttr];
    
    if (DisableSkillAttr.length === 0) {
      ClsSet.splice(-2, 2);
    };
    const Elem = Judey.$Element("div", "", "Reference_Back");
    
    Elem.Child("div", "", "SkillReference");
    ClsSet.forEach((_, Index)=>{
      if (typeof TxtSet[Index] === "object")
        Elem.AppendLast(TxtSet[Index]);
      else
        Elem.AppendLast(`<p class='${ClsSet[Index]}'>${TxtSet[Index].replaceAll("\n", "</br>")}</p>`)
    })

    if (SkillRoot[Target]["Lv"]) {
      if (IsLevel) {
        Elem.Child("p", "", "SkillReference_Info").Text("※入力画面のスキル名称選択で、カウント数が変更できます。").Breaker();
        Elem.Child("p", "", "SkillReference_Info").Text("※シミュレータ内ではレベル10のスキルとして扱います。").Breaker(2);
      }
      else {
        Elem.Child("p", "", "SkillReference_Info").Text("※入力画面のスキル名称選択で、スキルレベル/回数が変更できます。").Breaker(2);
      }
    } 
    else {
      Elem.Breaker(); 
    }
      
    Elem.Child("p", "", "SkillReference_Exit").Text("閉じる").Breaker();
    
    Judey.$tag("form").Append(Elem, Judey.InsertFirst);
    //内側クリック時は動作を止める。
    Judey.$cls("SkillReference").Event("click", e => e.stopPropagation());
    Judey.$query(".Reference_Back,.SkillReference_Exit")
      .Event("click", () => Judey.$cls("Reference_Back").Rem());
    
  },
  //入力チェック
  InputValueCheck: (Value, DefaultV, Min, Max) => {
    if (Number(Value) === NaN) return DefaultV;
    if (Value < Min) return Min;
    if (Value > Max) return Max;
    return Math.floor(Value);
  },
  /**
   * バフスキルOn/Off選択
   * @param { AddBuff } Target
   */
  SkillChange: (Target, Value) => {
    const F = MainMethod;
    const Ans = Value === 'On' ? true : false;

    Target.IsActive = Ans;
    
    //Checker持ちはBaseCalc判定
    if (Target["Checker"]) {
      if (Ans) {
        BaseCalculation();
        return;
      }
      if (!Target["IsCheckerActive"]) return
      if (Target["IsCheckerActive"]) Target["IsCheckerActive"] = false;
    }
    if (Target["Root"] && Target["Root"] !== "") {
      const RootAns = [false, null, undefined, ""].includes(Target["RootValue"]);
      if (RootAns === true) {
        Data.OtherInfo[Target["Root"]] = Ans ? (Target.Lv || true) : false;
      } else {
        Data.OtherInfo[Target["Root"]] = Ans ? Target.RootValue : "none";
      }
    }
    
    if (Target["Root2"]) {
      if (Ans === true)
        Data.OtherInfo[Target["Root2"]] = Target["SecondLv"];
      else
        Data.OtherInfo[Target["Root2"]] = false;
    }

    if (Target["Root3"]) {
      if (Ans === true)
        Data.OtherInfo[Target["Root3"]] = Target["TherdLv"];
      else
        Data.OtherInfo[Target["Root3"]] = false;
    }

    const Difference = () => Ans
      ? Target.Base : F.SendStatus(Target.Base, {}, false);
    F.SendAllStatus(Difference(), true);
    BaseCalculation();
  },
  /**Checker,Replacerバフ持ちスキルのバフ適用確認 */
  CheckActiveSkills: (Ref) => {
    const Action = (Root, Keys) => {
      for (let Key of Keys) {
        const Target = Root[Key];

        if (Target.IsActive === false) continue;
        if (!Target?.Checker && !Target?.Replacer) continue;

        //Checker：現在の状態で有効または無効な状態かを判定し、状態が変化する場合は現在値を加減算する。
        //Replacer：現在のBaseの値を一度減算し、Replacer実行後のBaseを加算する。
        if (Target.Checker) {

          //状態が変わらなければ終了し、変わる場合は加算または減算を行う。
          const NowValid = Root[Key].Checker();
          if (Target.IsCheckerActive === NowValid) continue;
  
          if (Target["Root"] && Target["Root"] !== "") {
            const RootAns = [false, null, undefined, ""].includes(Target["RootValue"]);
            if (RootAns === true) {
              Ref.OtherInfo[Target["Root"]] = NowValid ? (Target.Lv || true) : false;
            } else {
              Ref.OtherInfo[Target["Root"]] = NowValid ? Target.RootValue : "none";
            }
          }
  
          Target.IsCheckerActive = NowValid;    
          if (Target.IsLostStatus === false) continue;

          const Difference = () => NowValid
            ? Target.Base : MainMethod.SendStatus(Target.Base, {}, false);
          
          MainMethod.SendAllStatus(Difference(), true);
        }else{
          //元の値を減算
          MainMethod.SendAllStatus(MainMethod.SendStatus(Target.Base, {}, false), true);

          const NewBase = Target.Replacer(Ref);
          Target.Base = NewBase.New();

          //新しい値を加算
          MainMethod.SendAllStatus(NewBase, true);
        }
      }
    }
    ["SelfBuff", "SkillBuff"].forEach(RootKey =>
      Action(SelectionData[RootKey], Object.keys(SelectionData[RootKey])));
  },
  //IsActive持ちバフスキルの適用解除
  //Self,Passive
  DeleteAddition: (Root, IsBaseCalc = true) => {
    const Keys = Object.keys(Root);
    for (let key of Keys) {
      /** @type {AddBuff} */
      const value = Root[key];
      if (value.IsActive === true && (!value["Checker"] || value.IsCheckerActive === true)) {
        //新設：武器種が引き続き一致するスキルは初期化対象から除外
        if (value.EnableSkill(Data)) continue;

        //能力があるスキルのみ実行。
        if (Object.keys(value.Base).length > 0) {
          const Difference = MainMethod.SendStatus(value.Base, {}, false);
          MainMethod.SendAllStatus(Difference, true);
        }

        value.IsActive = false;
        if (value["IsCheckerActive"]) {
          value.IsCheckerActive === false;
        }
        
        //Root確認
        const Target = value["Root"];
        if (Target !== undefined) {
          Data.OtherInfo[Target] =
            value["RootValue"] === undefined || value["RootValue"] === ""
              ? false
              : "none";
        }

        if (value["Root2"]) Data.OtherInfo[value["Root2"]] = false;
        if (value["Root3"]) Data.OtherInfo[value["Root3"]] = false;
      }
      //Change確認
      if (value["Change"] && value["SwitchData"]) {
        const LvResult = {
          Lv: value["Default"] ?? value["Max"],
          SecondLv: value["SecondLvMax"] ?? 0,
          TherdLv: value["TherdLvMax"] ?? 0,
        };
        value.SwitchData(LvResult, false);
      } else if(value.IsActive === true) { 

      }
      //Checker
      if (value["Checker"]) value.IsCheckerActive = false;
    }
    if (IsBaseCalc) BaseCalculation();
  },
  //攻撃スキル威力参照値表示と変更
  ShowSkillValues: () => {
    const info = Data.OtherInfo;
    const Skill = info.Skill;
    if (typeof Skill === "string") return;
  
    //inputへ表示
    {
      const root = Skill.First.Base;
      Judey.id("Default-BasePower").value = root.BasePower;
      Judey.id("Default-BaseFixedPower").value = root.BaseFixedPower;

      Judey.$cls("DefaultSkillSelector").EachElem(elem => elem.checked = false);
      if (root.Reference(Data) == Data.Status.ATK)
        Judey.id("Default-Reference-ATK").checked = true;
      else if (root.Reference(Data) == Data.Status.AllATK)
        Judey.id("Default-Reference-ATK2").checked = true;
      else
        Judey.id("Default-Reference-MATK").checked = true;
    }
    //スキル参照値の表示
    {
      const Power = Judey.$id("SkillPowers_Power").Html("");
      const Fixed = Judey.$id("SkillPowers_Fixed").Html("");
      const PowerValues = [];
      const FixedValues = [];

      SKILLKEYS.forEach(Key => {
        const Root = Skill[Key];
        if (Skill[Key] !== undefined) {
          PowerValues.push(((Number(Root.Base.BasePower) + Number(Root.Power ? Root.Power(Data) : 0)) / (Root?.Split || 1)));
          FixedValues.push(Number(Root.Base.BaseFixedPower) + Number(Root.Fixed ? Root.Fixed(Data) : 0));
        }
      });
      //同値パターン 2024/8/16廃止
      if (false && FixedValues.every((Key, Index) => PowerValues[Index] === 0 || FixedValues[0] === Key)) {
        Power.Text(`${PowerValues.reduce((t, n) => t + n, 0).toLocaleString("ja-JP")}%`);
        Fixed.Text(`${FixedValues[0].toLocaleString("ja-JP")}`);

      } else {
        //異値パターン
        for (let i = 0; i < PowerValues.length; i++) {
          if (i !== 0) {
            Power.Child("span", "", "SkillPowers_Hyphen").Text("/").Breaker();
            Fixed.Child("span", "", "SkillPowers_Hyphen").Text("/").Breaker();
          };
          Power.Child("span", "", "SkillPowers_Value").Text(PowerValues[i].toLocaleString("ja-JP") + "%").Breaker();
          Fixed.Child("span", "", "SkillPowers_Value").Text(FixedValues[i].toLocaleString("ja-JP")).Breaker();
        }
      }

      Judey.$id("SkillMP_Single").Text(`${Data.OtherInfo.Skill?.MP?.toLocaleString("ja-JP") ?? 100}`);
    }

    //Chargeアリの挙動
    if (Skill.Charge === undefined) {
      Judey.$cls('ChargeInfo').Class("NoneText");
      return;
    }

    Judey.$cls('ChargeInfo').RemClass("NoneText");

    const Ch = Skill.Charge;
    const SkillText = (() => {
      switch (Skill.ChargeType) {
        case SkillChargeType.Charge: return "チャージ数(%)";
        case SkillChargeType.Step: return "段数";
        case SkillChargeType.Stock: return "溜め回数";
        case SkillChargeType.Enemy: return "敵の数";
        case SkillChargeType.M : return "距離(m)"
      }
    })()

    Judey.$cls('ChargeInfo_Text').Text(SkillText);
    if (Judey.cls('ChargeInfo_Input').innerText !== "")
      Judey.$cls('ChargeInfo_Input').InpText(Ch.DefaultLv);
    Judey.$cls('ChargeInfo_NumRangeInfo').Text(`入力範囲:${Ch.MinLv}-${Ch.MaxLv}`);
  },
  //選択した敵の情報表示
  ShowEnemyValues: () => {
    /** @type { Enemy } */
    const Enemy = Data.OtherInfo.Enemy;
    const IsCustom = Enemy.Name === "カスタム入力";
    const Difs = ["nomal", "hard", "luna", "ulti"];
    const Items = ["Lv", "DEF", "MDEF"];

    if (!Enemy.IsRaidBoss) {
      Difs.forEach(dif => {
        Items.forEach(item => {
          if (!IsCustom || dif !== "nomal") {
            const value = (() => {
              if (Enemy.IsBoss || dif === "nomal") return Enemy[item](dif).toLocaleString("ja-JP");
              return "-";
            })();
            Judey.id(`EnemyInfo_${dif}_${item}`).innerText = value;
          }
        })
      });

    } else {
      Judey.$id("EnemyInfo_Nomal_Lv").Text(Enemy.lv);
      ["DEF", "MDEF"].forEach(item => Judey.$id(`EnemyInfo_nomal_${item}`).Text(Enemy[item.toLowerCase()](Enemy.lv)));
      ["hard", "luna", "ulti"].forEach(dif => Items.forEach(item => Judey.$id(`EnemyInfo_${dif}_${item}`).Text("-")));
    }

    ["Physical", "Magic"].forEach(Key => {
      if (IsCustom)
        Judey.$query(`.EnemyInfo_Edit[data-key="${Key}"]`).InpText(Enemy[`Resist_${Key}`]);
      else {
        const ResistText = Key === "Physical" ? "物理" : "魔法";
        const ResistValue = typeof Enemy[`Resist_${Key}`] === "function" ? Enemy[`Resist_${Key}`](Enemy.lv) : Enemy[`Resist_${Key}`];
        Judey.$query(`.EnemyInfo_Resist_Info[data-key="${Key}"]`).Text(`${ResistText}耐性：${ResistValue}%`)
      }
        
    });

    Judey.$query(".Enemy_ExtensionValues[data-key='Critical']").InpText(Enemy?.ResistCritical ?? "");
    Judey.$query(".Enemy_ExtensionValues[data-key='Hit']").InpText(Enemy?.FREE ?? "");

  },
  //敵情報の入力切替
  SwitchEnemyInfo: (Value) => {
    const ary = ["Lv", "DEF", "MDEF"];

    const IsCustom = Value == 999;
    const IsRaidBoss = Value.toString().includes("rb");

    const PreviewWorks = () => {
      new EquipmentExtension(Data).LimitedModifyStatus(Data, (Ref) => {
        MainMethod.ShowEnemyValues();
        MainMethod.AllDamege(Ref);
        MainMethod.ShowExpectedPreview();
      });
    }

    /**カスタム入力用の要素構成 */
    const CustomBuild = () => {
      /** @type { Enemy } */
      const Enemy = SelectionData.Enemy[Value];
      for (let key of ary) {
        if (IsRaidBoss && key !== "Lv") continue;

        const CustomElem = Judey.$query(`#EnemyInfo_nomal_${key},#EnemyInfo_nomal_${key}_hide`);

        CustomElem
          .RemChild()
          .Text("")
          .Id(`EnemyInfo_nomal_${key}_hide`)
          .RemClass("EnemyInfo_Values")
          .Child("input", "", "EnemyInfo_Values,EnemyInfo_Custom")
          .Attr({
            "type": "number",
            "data-target": key,
          });
        CustomElem.InpText(IsCustom ? Enemy[key]("nomal") : Enemy.lv);
      }

      Judey.$cls("EnemyInfo_Custom").Event("change", (e) => {
        const InputValue = Number(e.target.value);
        const Target = e.target.dataset.target;
        Enemy[Target.toLowerCase()] = InputValue ? InputValue : 0;

        if (Target === "Lv") Judey.$query(`#EnemySelector option[value="${Value}"]`).Text(`Lv:${Enemy.lv}--${Enemy.Name}`);
        
        PreviewWorks();
      });
      
      //レイドボスの場合は耐性部分をカスタムにしない。
      if (IsRaidBoss) {
        MainRender.PaletteSelector(Judey.$query('.EnemyInfo_Custom,.EnemyInfo_Edit'));
        return;
      }

      //耐性側
      Judey.$query(".EnemyInfo_Resist,.EnemyInfo_ResistM").RemChild();
      const CreateResistEditElem = (AppendElem,TextName, Key) => {
        AppendElem.AppendLast(`
          <div class='Flex'>
            <span class='EnemyInfo_EditInfo'>${TextName}耐性：</span>
            <input type="number" class='EnemyInfo_Edit' data-key="${Key}" value="${Enemy[`Resist_${Key}`]}"></input>
            <span class='EnemyInfo_EditInfo2'>%</span>
          </div>
        `);
      }
      CreateResistEditElem(Judey.$cls("EnemyInfo_Resist"), "物理", "Physical");
      CreateResistEditElem(Judey.$cls("EnemyInfo_ResistM"), "魔法", "Magic");

      Judey.$cls("EnemyInfo_Edit").Event('change', (e) => {
        const Key = e.target.dataset.key;
        const ValueResult = MainMethod.InputValueCheck(e.target.value, 0, -1000, 100);

        Enemy[`Resist_${Key}`] = ValueResult;
        e.target.value = ValueResult;

        PreviewWorks();
      })
      MainRender.PaletteSelector(Judey.$query('.EnemyInfo_Custom,.EnemyInfo_Edit'));
    }

    /**プリセットエネミー用の要素構成 */
    const EnemyBuild = () => {
      //要素削除
      for (let key of ary) {
        //if (IsRaidBoss && key !== "Lv") continue;

        Judey.$id(`EnemyInfo_nomal_${key}_hide`)
          .Id(`EnemyInfo_nomal_${key}`)
          .Class("EnemyInfo_Values");
      }

      if (IsRaidBoss === false)
        Judey.$cls("EnemyInfo_Custom").Rem();
      else
        Judey.$query(".EnemyInfo_Custom:not(.EnemyInfo_Custom[data-target='Lv'])").Rem();
      
      Judey.$query(".EnemyInfo_Resist,.EnemyInfo_ResistM").RemChild();
      ["Physical","Magic"].forEach(Key => {
        const ClassName = "EnemyInfo_Resist" + (Key === "Physical" ? "" : "M");
        Judey.$cls(ClassName)
          .AppendLast(`<span class='EnemyInfo_Resist_Info' data-key="${Key}"></span>`);
      })
    }    
    
    if (!IsCustom || IsRaidBoss) EnemyBuild();
    if (IsCustom || IsRaidBoss) CustomBuild();
    
  },
  //ユニット作成
  AddDataUnit: (Data, Name) => {
    const Unit = {};
    Unit["Unit"] = Data;
    Unit["Name"] = Name;
    if (Data.Base) {
      const Result = {};
      Object.keys(Data.Base).forEach(Key => {
        Result[Key] = Data.Base[Key];
      })
      Unit["Unit"].Base = Result;
    }
    return Unit;
  },
  //指定場所のデータ交換。(関数等は消える)
  //+Allへの値変更。
  SetDataUnit: (BaseRoot, BasePropertyName, SendRoot, SendPropertyName, IsOverWriteData = true, EnableBaseCalc = true) => {
    const F = MainMethod;
    const BaseDataUnit = BaseRoot[BasePropertyName] || new SelectorBase("なし", {});
    ///重複対応の為。
    const BaseData = F.GetIncludeUnitData(BaseDataUnit)[0];
    
    const SendData = SendRoot[SendPropertyName].New();
    F.SendAllStatus(F.SendStatus(BaseData.Base, SendData.Base, false));
    
    //trueの場合はSelectionDataの値を書き換える。
    if (IsOverWriteData) {
      SendRoot[BaseDataUnit["Name"]] = BaseData;
    }
    BaseRoot[BasePropertyName] = F.AddDataUnit(SendData, SendPropertyName);
    if (EnableBaseCalc === false) return;
    BaseCalculation();
  },
  /**
   * AdditionStatus Unit内の装備データとSelectionData～のKeyを取得する。
   * @param {*} UnitData 
   * @returns {[AddEquipment,String]}
   */
  GetIncludeUnitData: (UnitData) => {
    try {
      const BaseSet = UnitData["Unit"].New();
      let { Base, Name, Group, Unit } = BaseSet;

      if (Group === undefined || Group === "") Group = "-";
      if (Unit === undefined) {
        const FilterNo = BaseSet?.FilterNo ?? 0;
        const Crystal1 = BaseSet?.Crystal1 ?? null;
        const Crystal2 = BaseSet?.Crystal2 ?? null;
    
        return [new AddEquipment(Name, Group, Base, FilterNo, Crystal1, Crystal2), String(UnitData?.Name)];
      }
      //Unit内に散らばっているパターン用
      const UnitBase = {};
      const SetIncludeProperty = MyData => {
        const Propertys = ["Base", "Name", "Unit", "Group","Crystal1","Crystal2"];
        Object.keys(MyData).forEach(key => {
          if (Propertys.includes(key) === false && BaseSet[key]) UnitBase[key] = MyData[key];
        })
      }
      SetIncludeProperty(BaseSet);
      
      //Unit内に何もなければそのまま
      Base = Object.keys(UnitBase).length > 0 ? UnitBase : Base;
      const KeyName = Name;
      Name = "";
      let elem = BaseSet["Unit"];
      while (elem !== undefined) {
        Base ||= elem["Base"];
        Name = elem["Name"];
        Group = elem["Group"];
        elem = elem["Unit"];
        if( elem && typeof elem === "object") SetIncludeProperty(elem);
      }
      return [new AddEquipment(Name, Group === "" ? "-" : Group, Base), String(KeyName)];      
    } catch (err) {
      console.error(err);
      return [new AddEquipment("0", "-", {}), String("0")];
    }

  },
  /** AdditionStatus Unit内の装備データのみ取得する。*/
  GetDataUnit: (Root) => {
    try {
      if (Root?.Base) return Root?.Base?.New();
      const data = Root["Unit"]?.Base || Root["Unit"];
      const Result = data["Unit"] ? MainMethod.GetIncludeUnitData(Root)[0].Base : data;
      
      return !data || Result?.forEach ? {} : Result;
    } catch (error) {
      return {};
    }
  },
  //スキル内のオプションを取得する。
  GetSkillOptions: (ReferenceData, EffectHitSelector, SkillKey = null) => {
    const Skill = typeof SkillKey !== "object"
      ? SelectionData.Skill[SkillKey]
      : ReferenceData.OtherInfo.Skill;
    const Attribute = new AddSkill().Keys();

    if (!Skill) return {};
    
    const Fetch = Key => {
      const Result = {};
      
      Skill[Key]?.Base?.EntrieEach((Akey, Attr) => { 
        if (!Attribute.includes(Akey)) Result[Akey] = Attr;
      });

      ["Option", "Addition"].forEach(OpsKey =>
        Skill[Key]?.[OpsKey]?.EntrieEach((EntKey, EntAttr) => {
          Result[EntKey] = EntAttr;
        })
      );

      Result.KeyEach(ResultKey => {
        if (typeof Result[ResultKey] === "function") Result[ResultKey] = Result[ResultKey](ReferenceData);
      })
      return Result;
    }
    if (EffectHitSelector) return Fetch(EffectHitSelector);
    else {
      const ResultSet = {}
      SKILLKEYS.forEach(Key => ResultSet[Key] = Fetch(Key));
      return ResultSet;
    } 
  },
  ///スキル内の攻撃種類を確認する。
  CheckMagicSkill: (ReferenceData) => {
    const Result = {};
    SKILLKEYS.forEach(Key => {
      const Skill = ReferenceData?.OtherInfo?.Skill?.[Key];
      if (!Skill) {
        Result[Key] = undefined;
      } else {
        if (Skill?.Checker) Skill.Checker(ReferenceData);
        Result[Key] = Skill?.Base?.IsMagicalSkill;
      }
    });  
    if (Object.values(Result).filter(Key => Key !== undefined).length === 0) return null;
    
    return Result;
  },
  /**カラーモードの設定 */
  CheckColorMode: () => {
/*     Judey.$cls("MainUpdateInfo").Rem();
    Judey.$cls("MenuIcon").Dispatch("click");
    Judey.$query(".SaveMenu_Item[data-value='SubSystem']").Dispatch("click");
    Judey.$query(".SubSystemLinkTitle[data-value='UserCustom']").Dispatch("click");
     */
    //return;
    const Ans = localStorage.getItem("Toram_ColorMode");
    const IsDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const Tag = Judey.$tag("html");
    Tag.RemAttr("class");

    if (Ans === "Dark" || (Ans === "OSColor" && IsDarkMode))
      Judey.$tag("html").Class("dark");
    else if (Ans === "Carrot")
      Judey.$tag("html").Class("carrot");
    else if (Ans === "CarrotW")
      Judey.$tag("html").Class("carrowhite");
    else if (Ans === "Cyber")
      Judey.$tag("html").Class("cyber");
    else if (Ans === "Cyber2")
      Judey.$tag("html").Class("cyber2");
    else if (Ans !== "OSColor")
      localStorage.setItem("Toram_ColorMode", "Light");
  },
  //All初期化
  NewAll: () => Data.AdditionStatus.All = new BaseStatus(true),
  /**@returns {InterFace_LocalItems}*/
  GetMyLocal: () => {
    const LocalItems_text = window?.localStorage.getItem("Toram_LocalItems");
    return LocalItems_text ? JSON.parse(LocalItems_text) : {};
  },
  SetMyLocal: LocalItem => window?.localStorage.setItem("Toram_LocalItems",LocalItem.Json()),
  //ユーザー定義のカスタム入力装備を適用させる。
  SetNewLocalCustom: () => MainMethod._LocalCustom(false),
  //現在のユーザー定義カスタム入力装備を削除する。
  DeleteLocalCustom: () => {
    const Reg = /[0-9]/g;
    const Key1 = SelectionData.Keys().filter(key => !["Crystal", "ItemBuff"].includes(key));
    const Key2 = SelectionData.Keys().filter(key => ["Crystal", "ItemBuff"].includes(key));

    Key1.forEach(itemkey => {
      SelectionData[itemkey].KeyEach(key => {
        if ([...key.matchAll(Reg)].length === 13) {
          delete SelectionData[itemkey][key];
        }
      });
    });

    Key2.forEach(itemkey => {
      SelectionData[itemkey].KeyEach(itemkey2 => {
        SelectionData[itemkey][itemkey2].KeyEach(key => {
          if ([...key.matchAll(Reg)].length === 13) {
            delete SelectionData[itemkey][itemkey2][key];
          }
        });
      })
    });
  },
  _LocalCustom: () => {
    try {
      //LocalItems
      const LocalItems = MainMethod.GetMyLocal();
      //ArrayCheck
      LocalItems.KeyEach(key => { if (LocalItems[key].forEach) LocalItems[key] = {} });

      //ローカルアイテムプリセット
      Object.keys(LocalItems).filter(v => !["UserCustomBuff","Enemy", "EnemyExtension", "ComboSkill"].includes(v)).forEach(RootName => {
        Object.keys(LocalItems[RootName]).forEach(Item => {
          LocalItems[RootName][Item].Name = `★${LocalItems[RootName][Item].Name}`;
          if (RootName.match("Cry")) {
            const Root = RootName.split("_")[1];

              if (RootName.match("Nomal")) LocalItems[RootName][Item].Type = "Nomal";
              SelectionData["Crystal"][Root][Item] = LocalItems[RootName][Item];
          
          }
          else if (RootName.match("ItemBuff_")) {
            const [RootKey, RootKey_Item] = RootName.split("_");

            SelectionData[RootKey][RootKey_Item][Item] = LocalItems[RootName][Item];
           }
          else {
            if (SelectionData[RootName][Item]) {
              delete LocalItems[RootName][Item];
            } else {
                SelectionData[RootName][Item] = AddEquipment.ReSet(LocalItems[RootName][Item]);
            }
          }
        })
      })
      if (LocalItems["UserCustomBuff"]) {
        LocalItems["UserCustomBuff"].KeyEach(key => {
          SelectionData["UserCustomBuff"][key] = CustomBuff.GetInstance(LocalItems["UserCustomBuff"][key]);
        });
      }
      if (LocalItems["Enemy"]) {
        Object.keys(LocalItems["Enemy"]).forEach(Key => {
            const Elem = LocalItems["Enemy"][Key];
            const EnemyElem = new Enemy(`★${Elem.Name}`, Elem.lv, Elem.def, Elem.mdef,
              Elem.Resist_Physical, Elem.Resist_Magic, Elem.IsBoss);
            if (Elem["ResistCritical"]) EnemyElem["ResistCritical"] = Elem["ResistCritical"];
            if (Elem["FREE"]) EnemyElem["FREE"] = Elem["FREE"];
            SelectionData["Enemy"][Key] = EnemyElem ;
            SelectionData["Enemy"][Key].FirstTime = Elem.FirstTime;
            SelectionData["Enemy"][Key].TimeStamp = Elem.TimeStamp;
        })      
      }
      if (LocalItems["ComboSkill"]) {
        Object.keys(LocalItems["ComboSkill"]).forEach(Key => {
          SelectionData["ComboSkill"][Key] = LocalItems["ComboSkill"][Key]
        })
      } 
      if (LocalItems["EnemyExtension"]) {
        LocalItems["EnemyExtension"].KeyEach(key => {
          LocalItems["EnemyExtension"][key].KeyEach(attrkey => {
            if (SelectionData["Enemy"][key]) {
              SelectionData["Enemy"][key][attrkey] = LocalItems["EnemyExtension"][key][attrkey];        
            }
          });
        });
      }
      
      MainMethod.SetMyLocal(LocalItems.Json().replaceAll("★","").Jparse());
    } catch (error) {
      ErrDescriptions.push(error.message);
    }
  },
  /**
   * 単発のローカルセット
   * AdditionStatus内、LocalStorage内への値の反映を行う。
   * @param {String} LocalAdditionName 
   * @param {String | Object} ValueSetORName 
   * @param {String} LocalKey 
   * @returns {String} SelectionDataへ登録したKey
   */
  SetSingleLocalCustom: (LocalAdditionName, ValueSetORName, LocalKey) => {
    const TimeStamp = Date.now();
    const IsNewValue = typeof ValueSetORName === "string";
    const IsEnemy = LocalAdditionName === "Enemy";    
    //Main側保存先の取得
    const GetRoot = () => {
      if (LocalAdditionName.match("Cry")) return SelectionData.Crystal[LocalAdditionName.split("_")[1]];
      if (LocalAdditionName.match("ItemBuff_")) return SelectionData.ItemBuff[LocalAdditionName.split("_")[1]];
      return SelectionData[LocalAdditionName];
    }
    const ReplaceValueSet = () => {
      const Result = IsNewValue
        ? IsEnemy
          ? new Enemy("★" + ValueSetORName, 1, 0, 0, 0, 0, 0)
          : LocalAdditionName.match("ItemBuff_")
            ? new SelectorBase("★" + ValueSetORName, {})
            : new AddEquipment("★" + ValueSetORName, EquipGroup.UserAdd, {})
        : ValueSetORName;

      if (IsNewValue && IsEnemy) Result.FirstTime = TimeStamp;
      if (IsNewValue) return Result.New();
      
      //新規ではなく引数のDataValueSetを使用した場合
      if (Result.Name && Result.Unit) {
        LocalKey = Result.Name;

        const AttributeKeys = BaseStatus.StatusData.Keys();
        Result.Unit.Base.KeyEach(Key => {
          if (Result.Unit.Base[Key] === 0 && AttributeKeys.includes(Key))
            delete Result.Unit.Base[Key]
        });

        return Result.Unit.New();
      }
      return Result.New();
    }
    const CheckNewRoot = (LocalItems) => {
      if (!LocalItems[LocalAdditionName]) LocalItems[LocalAdditionName] = {};
    }
    
    try {
      const Root = GetRoot();
      if (!Root) return;

      const LocalItems = MainMethod.GetMyLocal();
      CheckNewRoot(LocalItems);
      
      const Result = ReplaceValueSet().New();
      Result.TimeStamp = TimeStamp;
      Result.Name = Result?.Name.replace("★", "");

      LocalItems[LocalAdditionName][LocalKey || TimeStamp] = Result;
      MainMethod.SetMyLocal(LocalItems);

      Result.Name = "★" + Result.Name;

      Root[LocalKey || TimeStamp] = null;
      Root[LocalKey || TimeStamp] = Result.New();
      
      return LocalKey || TimeStamp;

    } catch (error) {
      console.error(error);
    }
  },
  //単発のローカル削除
  DeleteSingleLocalCustom: (LocalAdditionName, LocalKey) => {
    //Main側保存先の取得
    const GetRoot = () => {
      if (LocalAdditionName.match("Cry")) return SelectionData.Crystal[LocalAdditionName.split("_")[1]];
      return SelectionData[LocalAdditionName];
    }
    
    try {
      const LocalItems = MainMethod.GetMyLocal();
      delete LocalItems[LocalAdditionName][LocalKey];
      MainMethod.SetMyLocal(LocalItems);

      const Root = GetRoot();
      if (!Root) return;
      delete Root[LocalKey];      
    } catch (error) {
      console.error(error);
    }
  },
  //サブシステム簡略設定
  CheckEquipmentLocalCustom: (ModeValue) => {
    const NoneTextErr = (Target) => {
        Judey.$id("NewEquipmentLocalCustom_ErrText").Rem();
        Target.AppendAfter(Judey.$Element("p", "NewEquipmentLocalCustom_ErrText","AnswerItem")
          .Text("空白での登録はできません。").Style("color:red"));      
    }

    const Selector = Data.OtherInfo.EquipmentSelector;
    const SelectorTarget = Data.AdditionStatus[Selector];

    if (ModeValue === "add") {
      const Elem = `
        <p class='AnswerItem'>
          現在指定している項目に装備品を追加します。<br>
          追加する装備の名称を入力してください。
        </p>
        <input type="text" value="" id='NewEquipmentLocalCustom' class='AnswerItem'></input>
      `
      MainRender.CheckAnswer(Elem, false, Answer.AddCancel, () => {
        const Target = Judey.$id('NewEquipmentLocalCustom');
        const Value = Target.InpText();

        if (Value === "") {
          NoneTextErr(Target);
          return false;
        }
        const NewKey = MainMethod.SetSingleLocalCustom(Selector, Value);
        MainMethod.SetDataUnit(Data.AdditionStatus, Selector, SelectionData[Selector], NewKey, true);
        Judey.$id(`Addition_OtherInfo-${Selector}`).Dispatch("click");
      })

    } else if (ModeValue === "edit") {
      
      const Elem = `
        <p class='AnswerItem'>
          現在の名称：${SelectorTarget.Unit.Name}<br>
          新しい名称を入力してください。
        </p>
        <input type="text" value="" id='NewEquipmentLocalCustom' class='AnswerItem'></input>
      `

      MainRender.CheckAnswer(Elem, false, Answer.UpdateCancel, () => {
        const Target = Judey.$id('NewEquipmentLocalCustom');
        const Value = Target.InpText();

        if (Value === "") {
          NoneTextErr(Target);
          return false;
        } 
        
        const Key = SelectorTarget.Name;
        SelectorTarget.Unit.Name = "★" + Value;

        if (Key.toString().length === 13) {
          SelectionData[Selector][Key].Name = "★" + Value;
          MainMethod.SetSingleLocalCustom(Selector, SelectorTarget, Key);

        } else {
          SelectorTarget.Name = Date.now();
          SelectorTarget.Unit.Group = EquipGroup.UserAdd;
          SelectionData[Selector][SelectorTarget.Name] = SelectorTarget.Unit;
          MainMethod.SetSingleLocalCustom(Selector, SelectorTarget, SelectorTarget.Name);

        }

        Judey.$id(`Addition_OtherInfo-${Selector}`).Dispatch("click");
      })

    } else if (["changelevel", "changetag"].includes(ModeValue)) {
      const [UnitValue, UnitKey] = MainMethod.GetIncludeUnitData(SelectorTarget);
      /**データをローカルストレージ、配列に反映しSelect要素を更新する。 */
      const SetData = () => {
        MainMethod.SetSingleLocalCustom(Selector, UnitValue, UnitKey);
        SelectionData[Selector][UnitKey] = UnitValue;
        Data.AdditionStatus[Selector] = MainMethod.AddDataUnit(UnitValue, UnitKey);
        Judey.$id(`Addition_OtherInfo-${Selector}`).Dispatch("click");
      }      

      if (ModeValue === "changetag") {
        const GroupValue = (UnitValue.Group ?? "").replace(EquipGroup.UserAdd, "").replace("--", "");
        const Elem = `
          <p class='AnswerItem'>
            現在の装備品に分類タグを追加します。<br>
            表示させたいタグ名を入力してください。<br>

            空欄で更新した場合はタグ登録を削除します。
          </p>
          <input type="text" id='NewEquipmentLocalCustom' class='AnswerItem' value="${GroupValue}"></input>
        `;

        MainRender.CheckAnswer(Elem, false, Answer.UpdateCancel,
          () => {
            const reg = /[\/\:\,\.\;\[\{\]\}|\s|http|https]/g;
            const value = Judey.id("NewEquipmentLocalCustom").value;
            const Result = value.replace(reg, "");

            if (Result === "") { 
              if (GroupValue === "") { 
                MainRender.CheckAnswer("タグ設定は行われません。", false, Answer.OKOnly);
                return;
              };
                
              UnitValue.Group = EquipGroup.UserAdd;
              SetData();
              MainRender.CheckAnswer("タグを削除しました。", false, Answer.OKOnly);

            } else {
              UnitValue.Group = `${EquipGroup.UserAdd}--${Result}`;
              SetData();
              MainRender.CheckAnswer("タグを設定しました。", false, Answer.OKOnly);
            }
          }
        );
      } else {
        const FilterNo = UnitValue.FilterNo ?? 0;
        const Elem = `
          <p class='AnswerItem'>
            現在の装備品に表示優先度を設定します。<br>
            表示優先度を入力してください。<br>
            0を指定した場合は既存の表示順序で表示します。
          </p>
          <span style="display:inline-block;margin-right:1rem;">優先順位</span>
          <input type="number" id='NewEquipmentLocalCustom' class='AnswerItem' value="${FilterNo}"></input>
        `;
        MainRender.CheckAnswer(Elem, false, Answer.UpdateCancel,
          () => {
            const value = Judey.id("NewEquipmentLocalCustom").value;
            if (value == "0" || value == "") {
              if (FilterNo == 0) {
                MainRender.CheckAnswer("優先度の指定は行われません。", false, Answer.OKOnly);
                return;
              }

              UnitValue.FilterNo = 0;
              SetData();
              MainRender.CheckAnswer("優先度の指定を削除しました。", false, Answer.OKOnly);

            } else {
              UnitValue.FilterNo = Number(value);
              SetData();
              MainRender.CheckAnswer("表示優先度を設定しました。", false, Answer.OKOnly);
            }
          }
        );
      }
    } else if (ModeValue === "delete") {
      const SelectorTarget = Data.AdditionStatus[Selector];
      MainRender.CheckAnswer(`装備：${SelectorTarget.Unit.Name} を削除します。\nよろしいですか？`, true, Answer.YESNo, () => {
        MainMethod.DeleteSingleLocalCustom(Selector, SelectorTarget.Name);
        MainMethod.SetDataUnit(Data.AdditionStatus, Selector, SelectionData[Selector], "NonesData", false);
        Judey.$id(`Addition_OtherInfo-${Selector}`).Dispatch("click");
      })
    }
  },
  //スキル文章をコピーする。
  SetSkillReference: async () => {
    const res = await import(Js_Ref);
    const Refs = res.Reference;
    
    Refs.KeyEach(Skills =>
      Refs[Skills].KeyEach(Skill => {
        if (SelectionData[Skills][Skill]) {
          const SelectionSkill = SelectionData[Skills][Skill];
          const RefSkill = Refs[Skills][Skill];

          RefSkill.KeyEach(Key => SelectionSkill[Key] = RefSkill[Key]);
        }
      }));
  },
  //パレットモード
  AddPaletteSelector: (e) => {
    Judey.$query(".MainErrorInfo,.MainUpdateInfo").Rem();

    e.stopPropagation();
    if (Judey.cls("ArchiveMenuArea").classList.contains("NoneText") === false && 
      Judey.cls("ArchiveMenuArea").classList.contains("CloseMenu") === false) return;

    /* スマホイベント重複防止フラグ*/
    let TouchTime = 0;
    
    const Target = e.target;
    const ModeValue = Number(localStorage?.getItem("Toram_InputNumMode"));
    
    //パレット本体のレンダリング
    const Phase_Render = () => {
      Target.style = "background-color:var(--TrueColor);"
      
      //パレットモード2かつ、要素が生きている場合の処理
      if (ModeValue === 2 && Judey.$cls("PaletteSelector").Len() >= 0) {
        SetEvent(Judey.$cls("PaletteBaseBtn"));
        if (Target.dataset.kouho)
          Judey.$cls("PaletteSelector").AppendLast(GetJudey_PaletteAddition());
        
        return;
      }
      const Rect = Target.getBoundingClientRect();
      
      const LeftRate = window.innerWidth < 450 ? 1 : 1.5;
      const LeftRimitRate =
        window.innerWidth < 600 ? 0.7 : 0.8;
      
      const RigthRimitRete =
        window.innerWidth < 600 ? 0.17 : 0.12;
      
      let [Y, X] = [Rect.top + window.scrollY, Rect.left + window.scrollX];
      if (X / window.innerWidth > LeftRimitRate) X -= 140 * LeftRate;
      if (X / window.innerWidth < RigthRimitRete) X += 140 * LeftRate;

      if (Target.classList.contains("ToraumaNum")) Y = window.innerHeight * 0.4;
      if (Target.classList.contains("ChargeInfo_Input")) Y = window.innerHeight * 0.5;
      
      if (Target.closest(".Reference_Back")) {
        Y = window.innerHeight * 0.4;
        X = window.innerWidth * 0.3;
      }
      if (Target.classList.contains("EquipmentComparison_ParamInput") ||
        Target.classList.contains("EquipmentComparison_StatusParamInput")) { 
        Y = window.innerHeight * 0.15;
        X = window.innerWidth * 0.45;
      } 
      const ParentElem = Judey.$Element("div", "", "PaletteSelector");

      if ([1, 4].includes(ModeValue)) {
        if (!Target.classList.contains("SelectorRateInput")){
          ParentElem.Style(`top:calc(${Y}px - 7.2rem);left:calc(${X}px - 4rem);`);
        } else {
          ParentElem.Style(`top:35vh;left:43vw;`);
        }
        
        if (ModeValue === 4)
          ParentElem.Class("SquarePalettes");
      }  
      if (ModeValue === 2)
        ParentElem.Style(`position:fixed;top:50%;left:30%;`);//パレットモード2は固定位置
      if (ModeValue === 3) {
        ParentElem
          .Class("PalletSlider")
          .Style(`top:calc(${Y}px - 2rem);left:calc(${X}px - 6rem);`);
      }
          

      if (window.innerWidth > 800) {
        ParentElem.Elem().style.transform = "scale(1.3)";
      }else if (window.innerWidth > 500) {
        ParentElem.Elem().style.transform = "scale(1.2)";
      }
      
      if ([1, 2, 4].includes(ModeValue)) {
        const PaletteItemValues = [0, 1, 10, 100, -1, -10, -100];
        if (ModeValue === 4) {
  
          PaletteItemValues.push(...[5, 50, 500, 1000, -5, -50, -500, -1000]);
        }
        
        PaletteItemValues.forEach(value => {
          ParentElem.AppendLast(`
            <div class="PaletteItems PaletteBaseBtn" data-value="${value}">
              <span class="value" data-value="${value}">${value}</span>
            </div>  
          `);
        });

        ParentElem.AppendLast(`
          <div class="PaletteItems EndSelector"><span class="value">×</span></div>
        `).$Ncls('PaletteItems').Style("margin:50% !important;");     
        
        //入力候補がある場合の追加
        if (Target.dataset.kouho) ParentElem.AppendLast(GetJudey_PaletteAddition());
      } else {
        //スライダーモード(保留)
        const Elem = e.target;
        const NowValue = Number(Elem.value);
        const Min = Number(Elem.min);
        const Max = Number(Elem.max);

        ParentElem.AppendLast(`
          <div class="PaletteSliderArea">
            <input type="range" class="PaletteSlider" value="${NowValue}" min="${Min}" max="${Max}"/>
          </div>
        `);
        
        const Slider1 = Judey.$Element("div");
        [-10, -1, 0, 1, 10].forEach(val => {
          Slider1.AppendLast(`
            <div class="LvSelector_LvSelectBtns" data-value="${val}">${val}</div>`
          );
        });
        const Slider2 = Judey.$Element("div");
        [-1000,-100,100,1000].forEach(val => {
          Slider2.AppendLast(`
            <div class="LvSelector_LvSelectBtns" data-value="${val}">${val}</div>`
          );
        });

        ParentElem.$Ncls("PaletteSlider")
          .AppendAfter(Slider2)
          .AppendAfter(Slider1);

        //入力候補がある場合の追加
        if (Target.dataset.kouho) ParentElem.AppendFirst(GetJudey_PaletteAddition());
      }

      if (ModeValue !== 2) {
        Judey.$elem(Target).AppendAfter(ParentElem);
      } else {
        Judey.$id("form1").AppendLast(ParentElem);
      }
      
      SetEvent(ParentElem.$cls("PaletteBaseBtn"));
      setTimeout(() => Judey.$cls('PaletteItems').Style(""), 10);      
    }
    
    //候補パレットのレンダリング
    const GetJudey_PaletteAddition = () => {
      Judey.$cls("PaletteAdditionItems").Rem();

      const Elem = Judey.$Element("div", "", "PaletteAdditionItems,Flex");
      Target.dataset.kouho.split(",").forEach((Key, Index) => {
        Elem.AppendLast(`
          <div class='PaletteItems PaletteAdditionBtn Key${Index + 1}' data-value=${Key}>
            <span class='value additonvalue' data-value=${Key}>${Number(Key).toLocaleString("ja-JP")}</span>
          </div>
        `);
      });
      
      SetEvent(Elem.$Ncls("PaletteAdditionBtn"));
      return Elem;
    }

    //可変つまみのレンダリング
    const SetMoveBar = () => {
      if (ModeValue !== 2 || Judey.cls("PaletteSelector_Move").length !== 0) return;
      
      Judey.$cls("PaletteSelector").AppendFirst(`
        <div class='PaletteSelector_Move'></div>
      `);
      if (window.innerWidth > 500) {
        Judey.$cls("PaletteSelector_Move").Elem().style.transform = "scale(0.7)";
      }
      let MoveElemRect = Judey.cls("PaletteSelector_Move").getBoundingClientRect();

      const MoveEvent = (e) => {
        const BaseX = e.clientX ?? e.changedTouches[0].clientX;
        const BaseY = e.clientY ?? e.changedTouches[0].clientY;

        const X = `calc(${BaseX - MoveElemRect.left}px + 30% - 1.6rem)`;
        const Y = `calc(${BaseY - MoveElemRect.top}px + 50% - 3rem)`;

        /** @type {HTMLElement} */
        const Elem = Judey.cls("PaletteSelector");
        Elem.style.top = Y;
        Elem.style.left = X;
        Elem.style.position = "fixed";
      }

      const BodyElem = Judey.$tag("body");
      const IsEnableTouch = window.ontouchstart;
      const IsEnablePoints = navigator.maxTouchPoints;      
      Judey.$cls("PaletteSelector_Move").Event("mousedown,touchstart", () => {
        //暫定処理
        if (IsEnableTouch !== undefined && 0 < IsEnablePoints) {
          Judey.tag("html").style = "overflow:hidden;";         
        }

        const MoveEndEvent = () => {
          //暫定処理
          Judey.tag("html").style = "";
          BodyElem.RemEvent("mousemove,touchmove", MoveEvent)
            .RemEvent("mouseup,touchend", MoveEndEvent);
        }
        
        BodyElem.Event("mousemove,touchmove", MoveEvent)
          .OnceEvent("mouseup,touchend", MoveEndEvent);
      })

      const MoveReset = () => {
        if (IsEnableTouch !== undefined && 0 < IsEnablePoints) return;
        if (navigator.userAgent.match(/(iPhone|iPod|Android.*Mobile)/i)) return;
        Judey.$cls("PaletteSelector").Style("position:fixed;top:50%;left:30%;");
        try {
          MoveElemRect = Judey.cls("PaletteSelector_Move").getBoundingClientRect();
        } catch (e) {
          window.removeEventListener("resize", MoveReset);
        }          
      } 
      window.addEventListener("resize", MoveReset);
    }
    
    //要素選択イベント
    const PaletteEvent = (e) => {
      //候補入力時は値を上書きして終了
      if (e.target.classList.contains("PaletteAdditionBtn") || e.target.classList.contains("additonvalue")) {
        if (Target.value === Number(e.target.dataset.value)) return;

        Target.value = Number(e.target.dataset.value);
        Judey.$elem(Target).Dispatch("change");
        return;
      }

      const Value = Number(e.target.dataset.value) ?? 0;
      const BaseValue = Number(Target.value) ?? 0;

      Target.value = Value + BaseValue;
      if (Value === 0) Target.value = 0;

      Judey.$elem(Target).Dispatch("change");
    }
    const SetEvent = MyTarget => MyTarget.Event("click", PaletteEvent);
    const DeleteEvent = MyTarget => MyTarget.RemEvent("click", PaletteEvent);

    //外部要素選択確認
    const CheckSelectorOperation = (e) => {
      if (e.target.classList.contains("SkillEffectSelector")) return;
      if (Judey.cls("MenuIcon").classList.contains("CloseMenu")) return EndPalette();

      if (e.target.closest(".PaletteSelector") === null) {
        Judey.$tag("body").RemEvent("click", CheckSelectorOperation);
        
        if (ModeValue !== 2) {
          EndPalette();          
          return;
        }

        //パレット2モード
        Target.style = "";
        DeleteEvent(Judey.$cls("PaletteItems"));
        Judey.$cls("PaletteAdditionItems").Rem();
      } 
    }
    
    //パレット終了
    const EndPalette = () => {
      Target.style = "";
      Judey.$cls('PaletteSelector').Rem();
    }
  
    Phase_Render();
    SetMoveBar();

    //通常終了
    Judey.$cls('PaletteItems EndSelector')
      .OnceEvent("click", EndPalette);
    Judey.$cls("MenuIcon").OnceEvent("click", EndPalette);
    
    //外部選択終了
    Judey.$tag("body").CaptureEvent("click", CheckSelectorOperation);
  },
  //それっぽい名称を取得する。
  CreateSaveName: (Name) => {
    if (Name !== undefined && Name !== "") return Name;

    const { Level, STR, INT, VIT, AGI, DEX, MEN, TEC } = Data.Status;
    const StatusSet = [STR, INT, VIT, AGI, DEX, MEN, TEC];
    const Status = ["S", "I", "V", "A", "D", "M", "T"];

    const SortStatusSet = StatusSet.New().sort((a, b) => a - b);
    const SortStatusTexts = Status.sort((a, b) => StatusSet[Status.indexOf(a)] - StatusSet[Status.indexOf(b)]);
    
    const { Wepon, SubWepon } = Data.OtherInfo;
    const WeponName = Data.Wepon[Wepon].Name;
    const SubWeponName = Data.SubWepon[SubWepon].Name;

    const Base1 = `${Level}:${Wepon === "BH" ? "素手!!!!" : WeponName}`;
    const Base2 = `${(SubWepon === "BH" || Wepon === "DS") ? "" : "/" + SubWeponName}-`;
    if (StatusSet.reduce((a, b) => a + b, 0) / StatusSet.length === StatusSet[0]) {
      return Base1 + Base2;
    };

    const Max1T = SortStatusTexts[SortStatusSet.length - 1];
    const Max2T = SortStatusTexts[SortStatusSet.length - 2];
    const Max3T = SortStatusTexts[SortStatusSet.length - 3];
    const Max4T = SortStatusTexts[SortStatusSet.length - 4];
    const Max1 = SortStatusSet[SortStatusTexts.indexOf(Max1T)];
    const Max2 = SortStatusSet[SortStatusTexts.indexOf(Max2T)];
    const Max3 = SortStatusSet[SortStatusTexts.indexOf(Max3T)];
    const Max4 = SortStatusSet[SortStatusTexts.indexOf(Max4T)];
    
    let Result = Base1 + Base2 + Max1T;
    if (Max2 === 1) return Result;
    Result += (Max1 === Max2 ? "=" : "") + Max2T;
    if (Max3 === 1) return Result;
    Result += (Max2 === Max3 ? "=" : "") + Max3T;
    if (Max4 === 1) return Result
    return Result + (Max3 === Max4 ? "=" : "") + Max4T;
  },
  /**ランダムな名前を生成する。 */
  CreateDataName: () => {
    const Rnd = num => Math.floor(Math.random() * num);
    const GodNames = [
      "スピーシア", "アルマス", "オリティウス", "デュンケリス",
      "ヴァサリア", "フランメル", "ストーミア", "エルダス",
      "オブリガウス", "フリードス", "ヴェルトリア", "ソフィス"];
    const EquipNames = ["の剣", "ソード", "ブレイド", "の斧", "アックス", "の杖", "スタッフ", "の弓", "ボウ", "クロー", "の誓い", "の宝玉", "のお守り", "の腕輪", "の大木"];
    const SpecialNames = ["剣", "斧", "杖", "槌", "刀", "槍", "弓", "旗"];
    const Smelting = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let Name = "";
    if (Rnd(100) === 77)
      Name = `聖${SpecialNames[Rnd(SpecialNames.length)]}${GodNames[Rnd(GodNames.length)]}`
    else if (Rnd(100) === 66)
      Name = `魔${SpecialNames[Rnd(SpecialNames.length)]}${GodNames[Rnd(GodNames.length)]}`
    else
      Name = `${GodNames[Rnd(GodNames.length)]}${EquipNames[Rnd(EquipNames.length)]}`;

    const SmelRank = Rnd(Smelting.length * 2 + 1);

    if (SmelRank > 4) Name += `+${Smelting[SmelRank < 13 ? SmelRank - 4 : Smelting.length - 1]}`;

    const CrystalRank = Rnd(1000);
    if (CrystalRank === 278 || CrystalRank === 5 || CrystalRank === 76)
      Name += "◆◆"
    else if (CrystalRank % 10 === 0)
      Name += "◆"
    
    return Name;
  },
  /**装備比較モードのデータ設定
   * @param { EquipmentComparison } ModeValue
   * @param { string | Object } Result
   * @returns { boolean }
  */
  SetComparisonDatas: async (ModeValue = EquipmentComparison.Capture, Result) => {
    let IsComplete = false;
    /**ローカスストレージに変数を設定する。 */
    const SetComparisonValues = (ModeValue, ResultValue = null) => {
      localStorage?.setItem("Toram_EquipmentComparisonMode", ModeValue);
      if(ResultValue)
        localStorage?.setItem("Toram_EquipmentComparisonModeResult",ResultValue);       
      else
        localStorage?.removeItem("Toram_EquipmentComparisonModeResult");  
    } 

    /**キャプチャモードで変数を変更する。 */
    const SetCaptureMode = () => SetComparisonValues(EquipmentComparison.Capture);
    
    try {
      if (ModeValue === EquipmentComparison.Smelting) {
        if (typeof Result !== "string") {
          SetCaptureMode();
        } else {
          SetComparisonValues(EquipmentComparison.Smelting, Result);
          IsComplete = true;
        }
      }
      else if (ModeValue === EquipmentComparison.Enemy) {
        if (typeof Result !== "string" || !SelectionData["Enemy"]?.[Result]) {
          SetCaptureMode();
        } else {
          SetComparisonValues(EquipmentComparison.Enemy, Result);
          IsComplete = true;
        }
      }
      else if (ModeValue === EquipmentComparison.StatusParam) {
        SetComparisonValues(EquipmentComparison.StatusParam, Result.Json());
        IsComplete = true;
      }
      else if (ModeValue === EquipmentComparison.EquipmentParam) {
        SetComparisonValues(EquipmentComparison.EquipmentParam, Result.Json());
        IsComplete = true;
      }
      //2024-8-21廃止
      else if (false && ModeValue === EquipmentComparison.Equipment) {
        if (!Result["EquippedRootNames"] || !Result["SelectionDataRootNames"] || !Result["SelectionDataKeys"]) {
          SetCaptureMode();
        } else {
          SetComparisonValues(EquipmentComparison.Equipment, Result.Json());
          IsComplete = true;
        }
      }
      else if (ModeValue === EquipmentComparison.Skill) {
        if (typeof Result !== "string" ||
          (!SelectionData.Skill?.[Result] && !SelectionData.ComboSkill?.[Result])) {
          SetCaptureMode();
        } else {
          SetComparisonValues(EquipmentComparison.Skill, Result);
          IsComplete = true;
        }
      }
      else if (ModeValue === EquipmentComparison.Capture) { 
        SetCaptureMode();
        return;
      } else {
        SetCaptureMode();
      }      
    } catch (error) {
      IsComplete = false;
      SetCaptureMode();
    }

    if (IsComplete) {
      MainRender.CheckAnswer("比較条件を設定しました。", false, Answer.CloseOnly);
      BaseCalculation();

      const res = await import(Js_Archive);
      res.AllCapturedSend();
      
      return true;
    } else {
      MainRender.CheckAnswer("比較条件を設定できませんでした。\n比較条件は作成されません。", true, Answer.CloseOnly);
      return false;
    }
  },
  /**比較モードの状態を確認し、計算可能なデータセットを返却する。
   * @return { InterFace_ReferenceBase | null } キャプチャーモード、または参照が正しくない場合はnull返却
   */
  GetComparsionDataSet: (Refs = null) => {
    if (!localStorage) return null;

    const ModeResult = localStorage.getItem("Toram_EquipmentComparisonMode");
    const ValueResult = localStorage.getItem("Toram_EquipmentComparisonModeResult");

    Data.NotSavedInfo.ComparisonMode = ModeResult;

    if (ModeResult === EquipmentComparison.Capture) return null;
    
    const ReferenceCopy = Data.Method.CreateBuffer.GetReferenceCopy(Refs, true);
    const Repiar_UpdateStatus = () => {
      const DifferenceStatus = MainMethod.SendStatus(new EquipmentExtension(Data).GetStatus(Data), {});
      MainMethod.SendAllStatus(DifferenceStatus, false, ReferenceCopy);
      
      const NowRefs = new EquipmentExtension(ReferenceCopy);
      const NewRefs = NowRefs.ModifyStatus(ReferenceCopy);
      MainMethod.AllCalculation(NewRefs);
      
      //拡張ステータスを再反映させたもので乖離値を再計算する。
      Data.NotSavedInfo.ComparisonResult = MainMethod.SendStatus(Data.AdditionStatus.All, NewRefs.AdditionStatus.All);
      return NewRefs;
    }

    try {
      if (ModeResult === EquipmentComparison.Smelting) {
        if (!ValueResult?.match(/^[0-9]*,+[0-9]*$/)) {
          MainMethod.SetComparisonDatas();
          return null;
        }
        
        const [Result_Main, Result_Sub] = ValueResult.split(",");
        ReferenceCopy.OtherInfo.Smelting = Number(Result_Main);
        ReferenceCopy.OtherInfo.SubSmelting = Number(Result_Sub);

        const Result = {};
        Result["Smelting"] = Number(Result_Main);
        Result["SubSmelting"] = Number(Result_Sub);
        Data.NotSavedInfo.ComparisonResult = Result;

        MainMethod.AllCalculation(ReferenceCopy);

        return ReferenceCopy;
      }  
      if (ModeResult === EquipmentComparison.Enemy) {
        if (!SelectionData.Enemy?.[ValueResult]) {
          MainMethod.SetComparisonDatas();
          return null;
        }

        ReferenceCopy.OtherInfo.Enemy = SelectionData.Enemy[ValueResult];
        Data.NotSavedInfo.ComparisonResult = SelectionData.Enemy[ValueResult].Name;

        return ReferenceCopy;
      }  
      if (ModeResult === EquipmentComparison.StatusParam) {
        const ParseValue = ValueResult.Jparse();
        ParseValue.KeyEach(Key => {
          if (ReferenceCopy.Status[Key] === undefined) return;
          
          if (ReferenceCopy.Status[Key] + Number(ParseValue[Key]) > 1) {
            ReferenceCopy.Status[Key] += Number(ParseValue[Key]);
          } else {
            ReferenceCopy.Status[Key] = 1;
          } 
        })

        Data.NotSavedInfo.ComparisonResult = ParseValue;

        MainMethod.AllCalculation(ReferenceCopy);
        return ReferenceCopy;      
      }   
      if (ModeResult === EquipmentComparison.EquipmentParam) {
        const ParseValue = MainMethod.MargeData(ValueResult.Jparse());
        MainMethod.SendAllStatus(ParseValue, false, ReferenceCopy);
        MainMethod.AllCalculation(ReferenceCopy);
        
        Data.NotSavedInfo.ComparisonResult = ParseValue;

        return ReferenceCopy;      
      }  
      //2024-8-21廃止
      if (false && ModeResult === EquipmentComparison.Equipment) {
        /**@type { { EquippedRootNames:[], SelectionDataRootNames:[], SelectionDataKeys:[] }} */
        const ParseValue = ValueResult.Jparse();
        if (!ParseValue.Keys().every(Key=>ParseValue[Key].forEach)) {
          MainMethod.SetComparisonDatas();
          return null;
        }
        
        const DiffsResult = {};
        for (let i = 0; i < ParseValue.EquippedRootNames.length; i++) {
          const EquippedRootName = ParseValue.EquippedRootNames[i];
          const SelectDataRootName = ParseValue.SelectionDataRootNames[i];
          const SelectDataKey = ParseValue.SelectionDataKeys[i];

          const Root = !SelectDataRootName.includes("Cry_")
            ? SelectionData[SelectDataRootName]
            : SelectionData.Crystal[SelectDataRootName.replace("Cry_", "")];
          
          if (!Root) return;

          const ReplaceTargetEquipment = Root[SelectDataKey]?.Base.New();
          if (!ReplaceTargetEquipment) return;

          const NowEquipmentUnitData = EquippedRootName === SelectDataRootName
            ? Data.AdditionStatus[EquippedRootName]
            : Data.AdditionStatus.Crystal[EquippedRootName];    
          
          if (!NowEquipmentUnitData) return;

          const NowEquipment = MainMethod.GetDataUnit(NowEquipmentUnitData);
          
          MainMethod.MargeData(
            MainMethod.SendStatus(NowEquipment, ReplaceTargetEquipment, false),
            DiffsResult
          );

          //ここの比較では装備品内付加の武器情報をATK以外は無視する。

          //特殊ステータス反映用の追加処理
          const NowEquipUnitData = MainMethod.AddDataUnit(Root[SelectDataKey], SelectDataKey).New();
          if (EquippedRootName === SelectDataRootName) {
            ReferenceCopy.AdditionStatus[EquippedRootName] = NowEquipUnitData;
          } else {
            ReferenceCopy.AdditionStatus.Crystal[EquippedRootName] = NowEquipUnitData;
          }
          //
          
          if (SelectDataRootName.includes("Cry_")) continue;
          const Key =
            SelectDataRootName.includes("SubWepon") ? "SubWeponATK"
              : SelectDataRootName.includes("Wepon") ? "MainWeponATK"
                : "";
          const KeyPorp = Key.replace("Main","");

          if (Key === "") continue;
            
          if (NowEquipment[Key] && ReplaceTargetEquipment[Key])
            ReferenceCopy.OtherInfo[KeyPorp] += ReplaceTargetEquipment[Key] - NowEquipment[Key];
          else if (ReplaceTargetEquipment[Key])
            ReferenceCopy.OtherInfo[KeyPorp] = ReplaceTargetEquipment[Key];
          else {
            delete DiffsResult["MainWeponATK"];
            delete DiffsResult["SubWeponATK"];
          }
          
        }
        
        MainMethod.SendAllStatus(DiffsResult, false, ReferenceCopy);        
        Data.NotSavedInfo.ComparisonResult = DiffsResult;

        return Repiar_UpdateStatus();      
      }      
      if (ModeResult === EquipmentComparison.Skill) {
        if (SelectionData.Skill?.[ValueResult]) {
          ReferenceCopy.OtherInfo.Skill = SelectionData.Skill[ValueResult];
          Data.NotSavedInfo.ComparisonResult = SelectionData.Skill[ValueResult].Name;

        }
        else if (SelectionData.ComboSkill?.[ValueResult]) {
          ReferenceCopy.OtherInfo.Skill = ValueResult;
          Data.NotSavedInfo.ComparisonResult = SelectionData.ComboSkill[ValueResult].Name;

        }
        else {
          MainMethod.SetComparisonDatas();
          return null;          
        }

        return ReferenceCopy;
      }

      MainMethod.SetComparisonDatas();
      return null;

    } catch (error) {
      MainMethod.SetComparisonDatas();
      return null;
    }
  },
  /**
 * Selector要素からKeyを読み取り、表示用のリストを返却
 * @param {Event} e 
 * @returns { FakeSelectorSet } 
 */
  GetSelectorValue_List: (elem) => {
    const Type = elem.dataset.type;

    let TargetEquip = null;
    let Root1;
    /** @type { Array<FakeSelector> } */
    const ResultList = [];

    const SetTypeMethod = (Equipment, Crystal, Buff) => {
      if (Type === "Equipment" && typeof Equipment === "function") Equipment();
      if (Type.includes("Crystal") && typeof Crystal === "function") Crystal();
      if (Type === "Buff" && typeof Buff === "function") Buff();
    };

    /** お気に入り情報を取得し、一致するものは抜き出し項目を分けて再定義する。 @param { FakeSelectorSet } res */
    const ModifyFavoriteItem = (res) => {
      const FavoriteKeys = MainMethod.GetFavoriteItems();
      if (FavoriteKeys.length === 0) return res;
      
      const FavoriteItems = new FakeSelector("お気に入り");
      const BaseKey = res.FavoriteKeyName;

      res.Item.forEach(item => {
        item.Item = item.Item.filter(onceitem => {
          const TargetKey = `${BaseKey}${onceitem.KeyNo}`;
          if (FavoriteKeys.includes(TargetKey)) {
            FavoriteItems.Item.push(onceitem);
            return false;
          }
          return true;
        });
      });

      res.Item.unshift(FavoriteItems);
      res.Item = res.Item.filter(item => item.Item.length > 0);

      return res;
    }

    SetTypeMethod(
      () => {
        const Selector = Data.OtherInfo.EquipmentSelector;
        const ExtensionKey = EquipmentExtensionenum[Selector];
        
        const CopyData = SelectionData[Selector].New();
        
        //SortKey順番
        const SortKeyIndexies = {};
        EquipGroup.Attributes.KeyEach((key, i) => SortKeyIndexies[key] = i);

        //Extension追加
        SelectionData.Extension
          .filter(elem => elem.ExtensionCode == ExtensionKey)
          .map(elem => { if (CopyData[elem.KeyNo]) CopyData[elem.KeyNo]["Description"] = elem.Description });
        
        [...new Set(CopyData.Values().map(val => val.Group))]
          .sort((a, b) => {
            if (a.includes("User-")) return -1;
            if(b.includes("User-")) return  1;
            return (SortKeyIndexies[a] ?? 999)  - (SortKeyIndexies[b] ?? 999);
          })
          .forEach(GroupKey => {
            const Result = new FakeSelector(EquipGroup.Attributes[GroupKey]);
  
            CopyData.Keys()
              .filter(key => CopyData[key].Group == GroupKey)
              .forEach(key => Result.Item.push(new FakeSelectorItem(key, CopyData[key])));
            
            if (GroupKey.includes("None")) {
              Result.Item = Result.Item.sort((a, b) => {
                const [A, B] = [a.KeyNo, b.KeyNo];
                return A.includes("None") ? -1 :
                  B.includes("None") ? 1 :
                    A.includes("0") ? -1 :
                      B.includes("0") ? 1 :
                        A - B;
              });
            } else {
              //2024/5/5フィルターNoによる並び替え
              //2024/6/9さらに50音順での並び替え
              Result.Item = Result.Item
                .sort((a, b) => {
                  const [A, B] = [a.Equipment, b.Equipment];
                  return A.Name.localeCompare(B.Name);
                })
                .sort((a, b) => {
                  const [A, B] = [a.Equipment.FilterNo, b.Equipment.FilterNo];

                  return B - A;
                });
            }
            ResultList.push(Result);
          });
        ResultList.forEach(elem => {
          if (elem.Description === undefined)
            elem.Description = elem.Item[0].Equipment.Group.replace("User--", "");
        });
        
        Root1 = Selector;
        TargetEquip = Data.AdditionStatus[Root1];
      },
      () => {
        const Text = {
          Wepon: "ウェポンクリスタ",
          Armor: "アーマークリスタ",
          Addition: "オプションクリスタ",
          Option: "アクセサリークリスタ",
          Nomal: "ノーマルクリスタ"
        };
        const InsertCrystal = Type === "Equipment_Crystal"
        const Selector = InsertCrystal
          ? Data.OtherInfo.EquipmentSelector
          : elem.dataset.category;
        
        [Selector, "Nomal"].forEach(key => {
          const Result = new FakeSelector(Text[key]);
  
          const Extension = EquipmentExtensionenum[`Cry_${key}`];
          const CopyData = SelectionData.Crystal[key].New();
  
          SelectionData.Extension
            .filter(elem => elem.ExtensionCode == Extension)
            .forEach(elem => { if (CopyData[elem.KeyNo]) CopyData[elem.KeyNo]["Description"] = elem.Description });
          
          CopyData.Keys().forEach(elemkey => {
              
            Result.Item.push(new FakeSelectorItem(`${key}-${elemkey}`, CopyData[elemkey]));
          });
  
          Result.Item = Result.Item.sort((a, b) => {
            const [A, B] = [a.Equipment, b.Equipment];
            return a.KeyNo.includes("-0") ? -1 :
              b.KeyNo.includes("-0") ? 1 :
                A.TimeStamp ? -1 :
                  B.TimeStamp ? 1 :
                    A.Name.localeCompare(B.Name);
          });
          if (Type === "Equipment_Crystal" && key !== "Nomal") {
            Result.Item.unshift(new FakeSelectorItem("null", new SelectorBase("連携しない", {}, 0)));
          }
          ResultList.push(Result);
        });
  
        if (InsertCrystal) {
          const BaseCount = Number(elem.dataset.count);
          const Count = ["Wepon", "Armor", "Addition", "Option"].findIndex(key => key === Selector);
          Root1 = BaseCount + Count * 2;
          
        } else {
          Root1 = Number(elem.dataset.prop);
        }
        TargetEquip = Data.AdditionStatus.Crystal[Root1];
      },
      () => {
        const Root = elem.dataset.item;
        const Result = new FakeSelector();

        SelectionData.ItemBuff[Root].Entries().forEach(elem => {
          Result.Item.push(new FakeSelectorItem(elem[0], elem[1].New()));
        });

        Result.Item = Result.Item.sort((a, b) => {
          const [A, B] = [a.Equipment.FilterNo, b.Equipment.FilterNo];
          if (a.Equipment.Name == "0") return -1;
          if (b.Equipment.Name == "0") return 1;
          if (a.Equipment.Name.includes("★")) return -1;
          if (b.Equipment.Name.includes("★")) return 1;
          return A - B;
        });

        ResultList.push(Result);
        Root1 = Root;
        TargetEquip = Data.AdditionStatus.ItemBuff[Root1];
      }
    );

    /** @type {FakeSelectorSet} */
    const Result = (() => {
      let result;
      new EquipmentExtension(Data).LimitedModifyStatus(Data, temp => {
        const DamegeResult = Data.OtherInfo.IsExpectedShow
          ? MainMethod.ExpectAllDamege(temp, true)
          : MainMethod.AllDamege(temp, true)[2];
        
        let FavoriteKey;
        SetTypeMethod(
          () => FavoriteKey = `${Data.OtherInfo.EquipmentSelector}-`,
          () => FavoriteKey =  `Crystal-`,
          () => FavoriteKey = `ItemBuff-${elem.dataset.item}-`
        );
        result = new FakeSelectorSet(DamegeResult, FavoriteKey, ResultList, Data);
      });
      return result;      
    })();

    //ダメ表示でない場合は処理を短縮
    if (MainMethod.GetFakeSelectorMode() === 1) {
      Result.Item.forEach(group => {
        group.Item.forEach(item => {
          SetTypeMethod(() => {
            const Selector = Data.OtherInfo.EquipmentSelector;
            if (MainMethod.CheckIsEnabledEquipmentCrystalSetDamege() && ["Wepon", "Armor", "Addition", "Option"].includes(Selector)) {
              const [CrystalEquipKey1, CrystalEquipKey2] =
                Selector === "Wepon" ? [1, 2] :
                  Selector === "Armor" ? [3, 4] :
                    Selector === "Addition" ? [5, 6]
                      : [7, 8];
              
              const CheckCrystal = (CrystalKey, CrystalRoot, ExtensionName) => {
                const [Crystal, RootCrystalKey] = MainMethod.GetIncludeUnitData(Data.AdditionStatus.Crystal[CrystalKey]);
                item.Extension[ExtensionName] = Crystal.Name;
                if (RootCrystalKey != 0)
                  item.Extension[ExtensionName + "_Root"] = SelectionData.Crystal[Selector][RootCrystalKey] ? Selector : "Nomal";
    
                if (item.Equipment?.[CrystalRoot]) {
                  const CryKey = item.Equipment[CrystalRoot];
    
                  /** @type { AddEquipment | null } */
                  const Target = SelectionData.Crystal[Selector][CryKey] ?? SelectionData.Crystal.Nomal[CryKey];
    
                  //専用、またはノーマルにクリスタが存在した場合
                  if (Target) {
                    item.Extension[ExtensionName] = Target.Name;
                    item.Extension[ExtensionName + "_Root"] = SelectionData.Crystal[Selector][CryKey] ? Selector : "Nomal";
                  }
                }
              }
              
              CheckCrystal(CrystalEquipKey1, "Crystal1", "CrystalName1");
              CheckCrystal(CrystalEquipKey2, "Crystal2", "CrystalName2");
            }
          });          
        });
      });

      return ModifyFavoriteItem(Result);
    } 
    
    //比較対象となる現在の装備
    const EquipAttribute = MainMethod.GetDataUnit(TargetEquip);

    //--Ver2
    /**ランキング表示する単一のグループ */
    const SingleSelectors = new FakeSelector();
    Result.Item.forEach(GroupSelectors => {
      GroupSelectors.Item.forEach(item => {
        SingleSelectors.Item.push(item);
        
        /**ダメージ比較の為のダミーオブジェクト */
        const RefData = Data.Method.CreateBuffer.GetReferenceCopy(Data, true);

        const ConcatedingDifference = {};
        MainMethod.MargeData(MainMethod.SendStatus(EquipAttribute, item.Equipment.Base), ConcatedingDifference);

        //装備品入れ替えフェーズ
        SetTypeMethod(() => { 
          RefData.AdditionStatus[Root1] = MainMethod.AddDataUnit(item.Equipment, item.KeyNo);

          //クリスタ連携計算モード
          const Selector = Data.OtherInfo.EquipmentSelector;
          const Mode_EquipmentCrystalSetDamege = MainMethod.CheckIsEnabledEquipmentCrystalSetDamege();
          if (["Wepon","Armor","Addition","Option"].includes(Selector)) {
            const [CrystalEquipKey1, CrystalEquipKey2] =
              Selector === "Wepon" ? [1, 2] :
                Selector === "Armor" ? [3, 4] :
                  Selector === "Addition" ? [5, 6]
                    : [7, 8];
            
            const CheckCrystal = (CrystalKey,CrystalRoot,ExtensionName) => {
              const [Crystal,RootCrystalKey] = MainMethod.GetIncludeUnitData(RefData.AdditionStatus.Crystal[CrystalKey]);
              item.Extension[ExtensionName] = Crystal.Name;
              if(RootCrystalKey != 0)
                item.Extension[ExtensionName + "_Root"] = SelectionData.Crystal[Selector][RootCrystalKey] ? Selector : "Nomal";

              if (item.Equipment?.[CrystalRoot]) {
                const CryKey = item.Equipment[CrystalRoot];


                /** @type { AddEquipment | null } */
                const Target = SelectionData.Crystal[Selector][CryKey] ?? SelectionData.Crystal.Nomal[CryKey];

                //専用、またはノーマルにクリスタが存在した場合
                if (Target) {
                  if (Mode_EquipmentCrystalSetDamege) {
                    MainMethod.MargeData(MainMethod.SendStatus(Crystal.Base, Target.Base), ConcatedingDifference);
                    RefData.AdditionStatus.Crystal[CrystalKey] = MainMethod.AddDataUnit(Target, CryKey);                    
                  }

                  item.Extension[ExtensionName] = Target.Name;
                  item.Extension[ExtensionName + "_Root"] = SelectionData.Crystal[Selector][CryKey] ? Selector : "Nomal";
                }
              }
            }
            
            CheckCrystal(CrystalEquipKey1, "Crystal1", "CrystalName1");
            CheckCrystal(CrystalEquipKey2, "Crystal2", "CrystalName2");
          }
        }, () => { 
          //連携なしの場合は能力差の相殺を行う。
          if (item.KeyNo.includes("-")) {
            RefData.AdditionStatus.Crystal[Root1] = MainMethod.AddDataUnit(item.Equipment, item.KeyNo.split("-")[1]);
          } else {
            MainMethod.MargeData(EquipAttribute, ConcatedingDifference);
          }

        }, () => {
          RefData.AdditionStatus.ItemBuff[Root1] = MainMethod.AddDataUnit(item.Equipment, item.KeyNo);
        });

        //再計算フェーズ
        const Extension = new EquipmentExtension(RefData);
        Extension.LimitedModifyStatus(RefData, () => {
          //装備品
          SetTypeMethod(() => {
            const SelectorType = Data.OtherInfo.EquipmentSelector;
            if (SelectorType.includes("Wepon")) {
              const UnitData = item.Equipment.Base;
              const IsMainWepon = SelectorType === "Wepon";
              const KeyName = IsMainWepon ? "MainWepon" : "SubWepon";
              const AttributeName = IsMainWepon ? "" : "Sub";

              if (UnitData[`${KeyName}ATK`] >= 0)
                RefData.OtherInfo[`${AttributeName}WeponATK`] = UnitData[`${KeyName}ATK`];
              if (UnitData[`${KeyName}_Wepon`] !== undefined)
                RefData.OtherInfo[`${AttributeName}Wepon`] = UnitData[`${KeyName}_Wepon`];
              if (UnitData[`${KeyName}_Stable`] >= 0)
                RefData.OtherInfo[`${AttributeName}Stable`] = UnitData[`${KeyName}_Stable`];
              if (UnitData[`${KeyName}_Smelting`] >= 0)
                RefData.OtherInfo[`${AttributeName}Smelting`] = UnitData[`${KeyName}_Smelting`];
            }
          });

          MainMethod.SendAllStatus(ConcatedingDifference, false, RefData);
          MainMethod.AllCalculation(RefData);

          item.AverageDamege = RefData.OtherInfo.IsExpectedShow
            ? MainMethod.ExpectAllDamege(RefData,true)
            : MainMethod.AllDamege(RefData, true)[2];
          
          item.DifferenceDamege = item.AverageDamege - Result.AverageDamage;
          item.Description = elem.Description ?? "";

          item.SetDifferenceStatus(Result, RefData);
        });
      });
    });
    
    SingleSelectors.SortItem();
    Result.Item = [SingleSelectors];

    return ModifyFavoriteItem(Result);
  },
  /**装備品比較モードが有効である場合にTrue */
  CheckEnableComparsionMode: () => {
    if (!window?.localStorage) return false;

    const ModeResult = localStorage.getItem("Toram_EquipmentComparisonMode");
    return ModeResult !== null && ModeResult !== EquipmentComparison.Capture;
  },
  /**FakeSelectorModeの値を取得する。 */
  GetFakeSelectorMode:()=>Number(window?.localStorage?.getItem("Toram_FakeSelectorMode")),
  /**
   * Select選択の表示方式を変更する
   * @returns 
   */
  SetFakeSelector: (SetFakeMode) => {
    if (!window?.localStorage) return;
    if (!MainMethod.GetFakeSelectorMode())
      localStorage.setItem("Toram_FakeSelectorMode", "1");//初回強制設定
    
    const FakeMode = SetFakeMode ?? MainMethod.GetFakeSelectorMode();
    localStorage.setItem("Toram_FakeSelectorMode", FakeMode);

    Judey.$query("select[data-type]")
    .RemClass("NoneText")
    .RemAttr("data-fakeclass");
  
    Judey.$query("div[data-fakeclass]").Rem();
    if (FakeMode === 0) return;

    Judey.$query("select[data-type]")
      .Class("NoneText")
      .EachElem(elem => {
        const RandClass = Math.random() * Math.random();
        elem.dataset.fakeclass = RandClass;
        
        const BaseElem = Judey.$Element("div", "", `FakeSelector,Flex`)
          .Attr(({
            "data-fakeclass": RandClass,
            "data-csstarget": elem.dataset.csstarget ?? elem.dataset.category ?? "",
            "data-category": elem.dataset.category ?? "",
            "data-item": elem.dataset.item ?? "",
            "data-type": elem.dataset.type,
            "data-count": elem.dataset.count ?? "",
            "data-prop": elem.dataset.prop ?? "",
          }).FilterObject((_,Value)=>Value !== ""));
        const SelectorValue = Judey.$query(`select[data-fakeclass='${RandClass}'] option[value='${elem.value}']`).Text() ?? "-----";
        
        BaseElem.AppendLast(`<span>${SelectorValue}</span>`);
        Judey.$elem(elem).AppendAfter(BaseElem);

        BaseElem.Event("click", e => {
          const Result = MainMethod.GetSelectorValue_List(e.currentTarget);
          MainRender.FakeSelector(Result, RandClass, BaseElem.$Ntag("span"));
        })
      });
  },
  /**
   * スキル効果情報を返却する。
   * @param {*} Ref 
   * @returns { SkillEffectShowData | null }
   */
  GetSkillEffectData: (Refs) => {
    const Result = new SkillEffectShowData();
    const { Skill, IsShowSkillEffect } = Refs.OtherInfo;
    /** @type {AddSkill} */
    const SingleEffect = Skill[IsShowSkillEffect]?.["Base"];
    
    if (SingleEffect === undefined) return null;
    if (Skill["Torauma"] !== undefined)
      Result.EnchantTorauma = Skill["Torauma"];
    else
      Result.EnchantTorauma = SingleEffect.IsMagicalSkill
        ? Torauma.Magic
        : Torauma.Physical;

    if (Skill["ShowTorauma"] !== undefined)
      Result.ShowTorauma = Skill["ShowTorauma"];
    else
      Result.ShowTorauma = SingleEffect.IsMagicalSkill
        ? Torauma.Magic
        : Torauma.Physical;
  
    Result.IsMagicSkill = SingleEffect.IsMagicalSkill;
    Result.IsLongRange = SingleEffect.MaxRange > 7;
    Result.IsDef = SingleEffect.IsDEF;
    Result.IsPhysical = SingleEffect.IsPhysical;
    Result.IsSwordPower = SingleEffect.IsSwordPower;
    Result.NoneCombo = SingleEffect.NoneCombo;

  ///DistanceOption
    if (SingleEffect.IsDistance === "MaxDistance")
      Result.Distance = DistanceOptionEnum.Enable;
    else if (SingleEffect.MaxRange < 8) {
      if (SingleEffect.IsDistance === true || SingleEffect.IsDistance === "Distance")
        Result.Distance = DistanceOptionEnum.OnlyDistance;
      else if (SingleEffect.IsDistance === "AbsDistance")
        Result.Distance = DistanceOptionEnum.AbsDistance;
      else if(SingleEffect.IsDistance === "AbsLongDistance")
        Result.Distance = DistanceOptionEnum.AbsLongDistance;
      else
        Result.Distance = DistanceOptionEnum.Disable;
    } else {
      if (SingleEffect.IsDistance === true)
        Result.Distance = DistanceOptionEnum.Enable;
      else if (SingleEffect.IsDistance === "LongDistance")
        Result.Distance = DistanceOptionEnum.OnlyLongDistance;
      else if (SingleEffect.IsDistance === "Distance")
        Result.Distance = DistanceOptionEnum.OnlyDistance;
      else if (SingleEffect.IsDistance === "AbsDistance")
        Result.Distance = DistanceOptionEnum.AbsDistance;
      else if(SingleEffect.IsDistance === "AbsLongDistance")
        Result.Distance = DistanceOptionEnum.AbsLongDistance;
      else
        Result.Distance = DistanceOptionEnum.Disable;
    }

    const Options = MainMethod.GetSkillOptions(Refs, IsShowSkillEffect);
    Result.IsLongRange = Options["IsLongRange"] || (SingleEffect.MaxRange > 7 && Options["IsLongRange"] !== false && SingleEffect.IsDistance);
    Result.ATKPenetrate = Options["ATKPenetrate"] ?? 0;
    Result.MATKPenetrate = Options["MATKPenetrate"] ?? 0;
    Result.IsAbsCrit = !!Options["AbsCrit"];
    Result.IsG_Hit = !!Options["G_Hit"];
    Result.Attribute = Options["Attribute"] ?? SkillAttribute.Unkown;
    Result.SpecialEffect = Skill[IsShowSkillEffect]["Effect"];

    //抜刀ATKと双剣ATK
    if (SingleEffect.IsMagicalSkill === false) {
      if (Refs.OtherInfo.Wepon === "KTN") {
        const TwoHKTN = Refs.OtherInfo.IsTwoHKTN === true;
        const EnableEffect = Refs.OtherInfo.SubWepon === "BH" || (Refs.OtherInfo.IsNindo === 10 && Refs.OtherInfo.SubWepon === "SC");

        Result.PowerEffect = Refs.OtherInfo.IsCritical === "base" || !TwoHKTN || !EnableEffect
          ? SingleEffect.PowerEffect
          : "ATK × 1.5(総ATK(シミュ内名称))";
      }      
      else if (Refs.OtherInfo.Wepon === "DS") {
        Result.PowerEffect = Skill.Group !== "DualSword"
          ? SingleEffect.PowerEffect
          : "総ATK　通称【デュアルATK】";
      }
      else {
        Result.PowerEffect = SingleEffect.PowerEffect;
      }
    }
    else {
      Result.PowerEffect = SingleEffect.PowerEffect;
    }

    

    return Result;
  },
  /**敵の単体拡張情報をローカルストレージと現在のインスタンスデータに設定する。 */
  SetEnemyExtension: (Refs, EnemyKey, Value, ValueType) => {
    const Key =
      ValueType === "Critical" ? "ResistCritical" :
        ValueType === "Hit" ? "FREE"
          : "";
    
    if (Key === "") return;
    
    const LocalItems = MainMethod.GetMyLocal();
    if (!LocalItems["EnemyExtension"]) LocalItems["EnemyExtension"] = {};
    if (!LocalItems["EnemyExtension"][EnemyKey]) LocalItems["EnemyExtension"][EnemyKey] = {};

    LocalItems["EnemyExtension"][EnemyKey][Key] = Value;
    if (Refs.OtherInfo.Enemy) Refs.OtherInfo.Enemy[Key] = Value;
    if (SelectionData.Enemy[EnemyKey]) SelectionData.Enemy[EnemyKey][Key] = Value;
    if (LocalItems["Enemy"] && LocalItems["Enemy"][EnemyKey]) LocalItems["Enemy"][EnemyKey][Key] = Value;

    MainMethod.SetMyLocal(LocalItems);
  },
  /**敵の拡張情報をローカルストレージから取得し、インスタンスデータに設定する。 */
  SetInitEnemyExtension: () => {
    const LocalItems = MainMethod.GetMyLocal();
    if (!LocalItems["EnemyExtension"]) return;

    LocalItems["EnemyExtension"].KeyEach(key => {
      LocalItems["EnemyExtension"][key].KeyEach(
        attrkey => SelectionData.Enemy[key][attrkey] = LocalItems["EnemyExtension"][key][attrkey]
      );
    });
  },
  /**お気に入り情報をローカルストレージから取得する。 @returns { Array<string>}*/
  GetFavoriteItems: () => {
    const FavoriteItemsJson = window?.localStorage.getItem("Toram_FavoriteItems");
    return FavoriteItemsJson ? JSON.parse(FavoriteItemsJson) : [];
  },
  /**お気に入り設定情報を更新する。 */
  SetFavoriteSelector: async (Append, Remove) => {
    let FavoriteItems = MainMethod.GetFavoriteItems();

    if(Append !== undefined && Append.push)
      FavoriteItems.push(...Append);
    if (Remove !== undefined && Remove.push) {
      FavoriteItems = FavoriteItems.filter(item => Remove.includes(item) === false);
    }

    window?.localStorage.setItem("Toram_FavoriteItems", FavoriteItems.Json());

    const res = await import(Js_Archive);
    res.AllCapturedSend(); 
  },
  /** 優先度指定の情報を取得する。 @returns {Array<string>} */
  GetFakeSelectorRanks: () => {
    const val1 = window?.localStorage?.getItem("Toram_FakeSelectorRank1") ?? "DifferenceDamege";
    const val2 = window?.localStorage?.getItem("Toram_FakeSelectorRank2") ?? "-";
    const val3 = window?.localStorage?.getItem("Toram_FakeSelectorRank3") ?? "-";

    return [val1, val2, val3];
  },
  /**優先度指定の情報を記録する。 */
  SetFakeSelectorRank: async (Value, Rank) => {
    window?.localStorage?.setItem(`Toram_FakeSelectorRank${Rank}`, Value);
    const res = await import(Js_Archive);
    res.AllCapturedSend();    
  },
  /** 現在の優先度テキストを設定する。 */
  SetFakeSelectorRanksViewData: () => {
    const Values = MainMethod.GetFakeSelectorRanks();
    const GetPreviewText = (value) => {
      value = value.replaceAll("_Asc", "");

      if (value === "DifferenceDamege") return "ダメージ";
      if (value === "DifferenceATK") return "ATK";
      if (value === "DifferenceMATK") return "MATK";
      if (value === "DifferenceHP") return "HP";
      if (value === "DifferenceMP") return "MP";
      if (value === "DifferenceASPD") return "ASPD";
      if (value === "DifferenceCSPD") return "CSPD";
      if (value === "DifferenceSPD") return "行動速度";
      if (value === "DifferenceCritical") return "クリティカル率";
      if (value === "DifferenceHIT") return "HIT";
      if (value === "DifferenceHate") return "ヘイト";

      return "";
    }

    Data.NotSavedInfo.FakeDifference_Key1 = Values[0];
    Data.NotSavedInfo.FakeDifference_Text1 = GetPreviewText(Values[0]);
    Data.NotSavedInfo.FakeDifference_Key2 = Values[1];
    Data.NotSavedInfo.FakeDifference_Text2 = GetPreviewText(Values[1]);
    Data.NotSavedInfo.FakeDifference_Key3 = Values[2];
    Data.NotSavedInfo.FakeDifference_Text3 = GetPreviewText(Values[2]);
  },
  /**更新履歴の情報を確認し、最新ではない場合に更新履歴を表示させる。 */
  CheckViewUpdateArchive: async () => {
    const SaveVersion = window?.localStorage?.getItem("Toram_UpdateVersion");

    if (SaveVersion !== LatestVersion) {
      window?.localStorage?.setItem("Toram_UpdateVersion", LatestVersion);
      const res = await import("./UpdateArchive.min.js?ver=" + LatestVersion);
      res.ViewArchive();

      const res2 = await import(Js_Archive);
      res2.AllCapturedSend();  
    }
  },
  /**バフスキルの表示優先度を設定する。 */
  SetBuffSkillRank: async (Value) => {
    window?.localStorage?.setItem(`Toram_BuffSkillRank`, Value ?? "0");
    MainRender.SkillSelector();

    const res = await import(Js_Archive);
    res.AllCapturedSend(); 
  },
  /**バフスキルの表示優先度を取得する。 */
  GetBuffSkillRank: () => window?.localStorage?.getItem("Toram_BuffSkillRank") ?? "0",

  /**自由入力欄4-7非表示設定を設定する。 */
  SetHideEquipment: async (Value) => {
    window?.localStorage?.setItem(`Toram_HideEquipment`, Value ?? "0");
    MainRender.HideEquipment();

    const res = await import(Js_Archive);
    res.AllCapturedSend(); 
  },
  /**自由入力欄4-7非表示設定を取得する。 */
  GetHideEquipment: () => window?.localStorage?.getItem("Toram_HideEquipment") ?? "0",

  /**装備品タブ名称を取得する。 */
  GetEquipmentTabName: (DefaultName = false,TargetTab = null) => {
    const Target = TargetTab ?? Data.OtherInfo.EquipmentSelector;
    const Result = window?.localStorage?.getItem(`Toram_EquipmentTabName_${Target}`) ?? "";

    if (!DefaultName && Result !== "") return Result;

    const Item = {
        "Wepon": "メイン装備",
        "SubWepon": "サブ装備",
        "Armor": "体装備",
        "Addition": "追加装備",
        "Option": "特殊装備",
        "Enchant": "オシャレ1",
        "Enchant2": "オシャレ2",
        "Enchant3": "オシャレ3",
        "Other": "自由入力1",
        "Other2":"自由入力2",
        "Other3": "自由入力3",
        "Other4": "自由入力4",
        "Other5": "自由入力5",
        "Other6": "自由入力6",
        "Other7": "自由入力7",
      }

    return Item[Target] ?? "------";
    },
  /**装備品タブ名称を設定する。 */
  SetEquipmentTabName: async (NewTabName, TargetTab = null) => {
    const Target = TargetTab ?? Data.OtherInfo.EquipmentSelector;
    const SetTabName = !NewTabName ? MainMethod.GetEquipmentTabName(true, Target) : NewTabName;
    if(SetTabName === "------") return;

    window?.localStorage?.setItem(`Toram_EquipmentTabName_${Target}`,SetTabName);

    const res = await import(Js_Archive);
    res.AllCapturedSend(); 
  },
};

const MainRender = {
  Crystal: () => {
    const CrystalSelector = Judey.$query(".CrystalSelector[data-category]").RemChild().Elem();
    const LabelText = {
      Wepon: "ウェポンクリスタ",
      Armor: "アーマークリスタ",
      Addition: "オプションクリスタ",
      Option: "オプションクリスタ",
    };
    const AddCrystalList = (Element, GroupText, Root) => {
      Element.Child("optgroup").Attr("label", GroupText);

      const CrystalList = SelectionData.Crystal[Root];
      const ListKeys = Object.keys(CrystalList).sort((a, b) =>
        CrystalList[b].Name === "なし" || CrystalList[a].Name.localeCompare(CrystalList[b].Name));
      for (let y = 0; y < ListKeys.length; y++) {
        Element
          .Child("option")
          .Attr("value", `${Root}-${ListKeys[y]}`)
          .Text(CrystalList[ListKeys[y]].Name)
          .Breaker();
      }
    }
    for (let i = 0; i < CrystalSelector.length; i++) {
      const ListInfo = CrystalSelector[i].id.split("_")[1];
      const elem = Judey.$elem(CrystalSelector[i]).RemChild();
      AddCrystalList(elem, LabelText[ListInfo], ListInfo)
      elem.Breaker();
      AddCrystalList(elem, "ノーマルクリスタ", "Nomal");
    }
  },
  PartialCrystal: () => {
    const Elem = Judey.$query(".CrystalSelector:not(.CrystalSelector[data-category])").RemChild();
    
    const CrystalTexts = {
      Wepon: "ウェポンクリスタ",
      Armor: "アーマークリスタ",
      Addition: "オプションクリスタ",
      Option: "オプションクリスタ",
    };
    const Target = Data.OtherInfo.EquipmentSelector;
    if (!CrystalTexts[Target] || Data.AdditionStatus[Target].Name === "NonesData") {
      Judey.$cls("EquipmentCrystals").Class("NoneText");
      if (!CrystalTexts[Target]) return;
    }

    if (!MainMethod.CheckIsEnabedPartialCrystal()) {
      Judey.$cls("EquipmentCrystals").Class("NoneText");
      for (let y = 1; y <= 2; y++) {
        Data.AdditionStatus[Target].Unit[`Crystal${y}`] = null;
      }
      return;
    }
    
    Judey.$cls("EquipmentCrystals").RemClass("NoneText");

    const Node_BaseElems = `
      <option value="null">連携しない</option>
      <option value="${Target}-0">装備なし</option>
      <optgroup label='${CrystalTexts[Target]}'></optgroup>
      <optgroup label='ノーマルクリスタ'></optgroup>
    `
    Elem.EachElem(elem => Judey.$elem(elem).AppendLast(Node_BaseElems));

    const MainCrystalKey = SelectionData.Crystal[Target].Keys().filter(Key => Key != 0).sort((a, b) =>
      SelectionData.Crystal[Target][b].Name === "なし" || SelectionData.Crystal[Target][a].Name.localeCompare(SelectionData.Crystal[Target][b].Name));
    const NomalCrystalKey = SelectionData.Crystal.Nomal.Keys().sort((a, b) =>
      SelectionData.Crystal.Nomal[a].Name.localeCompare(SelectionData.Crystal.Nomal[b].Name));

    const Node_MainCrystal = MainCrystalKey
      .reduce((Result, Now) =>
        Result += `<option value="${Target}-${Now}">${SelectionData.Crystal[Target][Now].Name}</option>`, "");
    const Node_NomalCrystal = NomalCrystalKey
      .reduce((Result, Now) =>
        Result += `<option value="Nomal-${Now}">${SelectionData.Crystal.Nomal[Now].Name}</option>`, "");
    
    const Work = (Query, Node) => {
      Elem.EachElem(
        C1Elem => Judey.$elem(C1Elem).$Nquery(Query).EachElem(
          C2Elem => Judey.$elem(C2Elem).AppendLast(Node)
        )
      )
    }
    
    Work(`optgroup[label='${CrystalTexts[Target]}']`, Node_MainCrystal);
    Work(`optgroup[label='ノーマルクリスタ']`, Node_NomalCrystal);
    Elem.Attr({ "data-csstarget": Target });

    MainRender.ParticalCrystalSelectorSet();
  },
  /**装備品付随クリスタの表示をメインクリスタ側に同期させる。 */
  ParticalCrystalSelectorSet: () => {
    if (!MainMethod.CheckIsEnabedPartialCrystal()) return;

    const CheckNomalCrystalKey = target => target.includes("N") || target.includes("M");
    const Target = Data.OtherInfo.EquipmentSelector;
    const RootData = Data.AdditionStatus[Target]?.Unit;
    const EnableEquipment = ["Wepon", "Armor", "Addition", "Option"].includes(Target);

    if (Data.AdditionStatus[Target].Name === "NonesData" || !EnableEquipment) {
      Judey.$cls("EquipmentCrystals").Class("NoneText");
      return;
    };
    Judey.$cls("EquipmentCrystals").RemClass("NoneText");

    const Crystal1 = RootData?.["Crystal1"];
    const Crystal2 = RootData?.["Crystal2"];
    const Cry1_Text = !Crystal1 ? "null" : `${!Crystal1.match("[^0-9]") ? (SelectionData.Crystal[Target][Crystal1] ? Target : "Nomal") : (CheckNomalCrystalKey(Crystal1) ? "Nomal" : Target)}-${Crystal1}`;
    const Cry2_Text = !Crystal2 ? "null" : `${!Crystal2.match("[^0-9]") ? (SelectionData.Crystal[Target][Crystal2] ? Target : "Nomal") : (CheckNomalCrystalKey(Crystal2) ? "Nomal" : Target)}-${Crystal2}`;

    Judey.$query(".CrystalSelector[data-count='1']:not(.CrystalSelector[data-category])").InpText(Cry1_Text);
    Judey.$query(".CrystalSelector[data-count='2']:not(.CrystalSelector[data-category])").InpText(Cry2_Text);
  },
  /**クリスタ能力値の表示情報を作成する。 */
  CrystalReference: () => {
    const EquipInfoSet = {
      1: new SelectorBase("武器クリスタ", "--Crystal_WepColor"),
      3: new SelectorBase("防具クリスタ", "--Crystal_AmrColor"),
      5: new SelectorBase("追加クリスタ", "--Crystal_AdiColor"),
      7: new SelectorBase("特殊クリスタ", "--Crystal_OptColor")
    };

    const ShowElem = Judey.$id("CrystalReference").Class("NoneText").RemChild();
    const IsEnableReference = Judey.$query(".Crystal_Ans.Crystal_ReferenceHATENA").Len() === 0;
    if (IsEnableReference === false) return;

    const Reference = Judey.cls("Crystal_ReferenceHATENA").dataset.target.split("/");
    ShowElem.RemClass("NoneText")
      .Elem().setAttribute("style", `background-color:var(${EquipInfoSet[Reference[0]].Base})`);
    
        
    ShowElem.AppendLast(`
      <p class='Reference_TopText'>${EquipInfoSet[Reference[0]].Name}</p>
      <div class='Flex'></div>
    `).$tag("div");

    Reference.forEach((Key, i) => {
      const TargetRoot = Data.AdditionStatus.Crystal[Key];
      const Elem = Judey.$Element("div", "", "ReferenceSet");

      Elem.AppendLast(`<p class='Reference_Crystal'>${i + 1}個目：${TargetRoot.Unit.Name}</p>`);
      if (TargetRoot.Name != 0) {
        const NowData = MainMethod.GetDataUnit(TargetRoot).New();

        //拡張ステータス確認
        Data.NotSavedInfo.ExtensionInfos.forEach(Values => {
          if (Values["PropKey"] == Key) MainMethod.MargeData(Values.Result, NowData);
        })
        Elem.AppendLast(MainMethod.BaseReferenceText(NowData, "CrystalReference_Attrubutes,Flex"));
      }
      ShowElem.AppendLast(Elem);
    })
  },
  ItemBuff: () => {
    const ItemSelector = Judey.cls("ItemBuffSelector");
    for (let i = 0; i < ItemSelector.length; i++) {
      const target = ItemSelector[i].id.split("_")[1];
      const rootTarget = SelectionData.ItemBuff[target];
      const SortrootKeys = Object.keys(rootTarget).sort((K1, K2) => {
        if (!rootTarget[K1]?.FilterNo) return K1 - K2;
        return rootTarget[K1]?.FilterNo - rootTarget[K2]?.FilterNo;
      })
      const elem = Judey.$elem(ItemSelector[i]).RemChild();

      for (let key of SortrootKeys) {
        elem.Child("option")
          .Attr("value", key)
          .Text(rootTarget[key].Name)
          .Breaker();
      }
    }
  },
  Cooking: () => {
    const EatSelector = Judey.cls("EatSelector");
    const Eat_LvSelector = Judey.cls("EatSelector_Lv");
    const Eat_Keys = Object.keys(SelectionData.Cooking);
    for (let i = 0; i < EatSelector.length; i++) {
      const target = Judey.$elem(EatSelector[i]).RemChild();
      for (let key of Eat_Keys) {
        target.Child("option").Attr("value", `${key}-${i + 1}`)
          .Text(SelectionData.Cooking[key].Name).Breaker();
      }
      const target_Lv = Judey.$elem(Eat_LvSelector[i]).RemChild();
      for (let y = 0; y < 10; y++) {
        target_Lv.Child("option").Attr("value", String(y))
          .Text(String(y + 1)).Breaker();
      }
    }
  },
  /** @param {Judey} Elem */
  Smelting: (Elem) => {
    const Smeltings = ["無精錬", 1, 2, 3, 4, 5, 6, 7, 8, 9, "E", "D", "C", "B", "A", "S"];
    const SmeltingSelector = Elem.RemChild();
    Smeltings.forEach(
      (Key, i) => SmeltingSelector.AppendLast(`<option value="${i}">${Key}</option>`)
    );
  },
  SubWepon: () => {
    const WeponSelector = Judey.$id("OtherInfo-SubWepon");
    const wepon = Data.OtherInfo.Wepon;
  
    if (!Data.Wepon[wepon]?.SubWepon) return;
    WeponSelector.RemChild();
  
    const subwepon_keys = Data.Wepon[wepon].SubWepon;
    MainMethod.AddListitem(WeponSelector, subwepon_keys, Data.SubWepon, subwepon_keys[0].Name);
    Data.OtherInfo.SubWepon = subwepon_keys[0];
  },
  /** スキルの要素を生成する。 */
  SkillSelector: () => MainRender.SelectorsSet(Judey.$cls("BuffSkillSelectors"), true),

  /** レジスタと料理の要素を生成する。 */
  OtherEquipmentEffect: () => MainRender.SelectorsSet(Judey.$cls("OtherEquipmentEffect_Templates"), false),
  /**
   * 選択肢系の要素を生成する共通メソッド
   * @param { Judey } AppendTargetElem
   */
  SelectorsSet: (AppendTargetElem, IsSkill) => {
    AppendTargetElem.RemChild();

    const SkillsElement = Judey.$Element("div", "", "SkillTrees");
    SkillsElement.AppendLast(`
      <div class="ChangeReferenceInfoArea">
        <span>操作/効果内容の確認方法について</span>
        <button type="button" class="ChangeReferenceInfoBtn-${IsSkill}">確認</button>
      </div>
      <div class="SkillTree Flex">
      </div>
    `);

    AppendTargetElem.AppendLast(SkillsElement);

    function _InputSet(KeyText, value, IsCheck, className) {
      const base = `
        <input type="radio" id="${className}_${KeyText}_${value[1]}" 
          class="${className} _radio" 
          name="${className}_${KeyText}" 
          value="${KeyText}-${value[1]}"
          ${IsCheck === true ? "checked" : ""}>
        <label for="${className}_${KeyText}_${value[1]}" 
          class="_label ${value[2]} ${className}_Label Flex"><span>${value[0]}</span></label>
      `;
      const otherbuff = `
        <label for="${className}_${KeyText}_${value[1]}" 
          class="_label ${value[2]} ${className}_Label Flex"><span>${value[0][0]}</span></label>
      `;
      return base + (IsSkill ? "" : "");
    }
    //レベル選択or通常
    function _SpanSet(key, SkillRoot, className) {
      if (SkillRoot[key]["Change"]) {
        const Text = key !== "IsBrave"
          ? SkillRoot[key].Name + (SkillRoot[key]["NotLevel"] ? "×" : "/") + SkillRoot[key].Lv
          : (SkillRoot[key].Lv === 1 ? "ブレイブ(使用者)" : "ブレイブオーラ");
        
        return `<span 
          class="OptionSelector_Text ${className}_ForLv ${className}_Text"
          data-lv=${SkillRoot[key].Lv} data-key=${key}>
            ${Text}</span>`
      } else {
        return `<span 
          class="OptionSelector_Text ${className}_Text" 
          data-key=${key}>${SkillRoot[key].Name}</span>`
      }
    }

    function AppendSkillElements(Root, Keys, className) {
      const AppendTarget = SkillsElement.$Ncls("SkillTree");

      for (let key of Keys) {
        const skill = Root[key];

        const onceSkill = Judey.$Element("div", "", "TreeSet");
        onceSkill.AppendLast(`
          <span class="TreeText">${SkillTree.GetTreeName(skill.TreeNo)}</span>
          <div class="Flex">
            <div class="RADIOSET">
              ${_SpanSet(key, Root, className)}
              ${_InputSet(key, ["有効", "On", "_cherry"], skill.IsActive, className)}
              ${_InputSet(key, ["無効", "Off", "_gray"], !skill.IsActive, className)}             
            </div>
          </div>
        `);

        onceSkill.Attr({
          "data-tree": skill.TreeNo,
          "data-buffkey": `${className}-${key}`,
          "data-bufftype": className
        });
        AppendTarget.AppendLast(onceSkill);
      }

      //生成スキルにイベント付与
      Judey.$cls(className).Event("change", (e) => {
        const Target = e.target.value.replace(/-O(n|ff)/g, "");
        const Ans = e.target.value.match(/O(n|ff)/g)[0];

        if (Ans === null || Ans === undefined) {
          console.log("取得ミス"); return
        };

        MainMethod.SkillChange(Root[Target], Ans);
      });
      
      //レベル変更(対象がある場合のみ)
      let Tag_ShowRefelence = false;
      const LvSelector = Judey.$cls(`${className}_ForLv`);
      const Work = (e) => {
        e.stopPropagation();
        if (!Tag_ShowRefelence) MainMethod.AddLevelSelectors(e.target, Root);
      }

      if (LvSelector.Event)
        LvSelector.Event("click", Work);
          
      //スキルレベル変更
      Judey.$cls(`${className}_Text`).Event("mousedown", (e) => {
        Tag_ShowRefelence = false;
        const NowTime = Date.now();
        Judey.$elem(e.target).OnceEvent("mouseup", () => {
          if (Date.now() - NowTime < 200) return;
          Tag_ShowRefelence = true;
          MainMethod.AddSkillReference(e.target.dataset.key, Root);
        })
      }).FlickGo(res =>
          MainMethod.AddSkillReference(res.dataset.key, Root), -30, 0, 1000, false)
        .FlickGo(res =>
          MainMethod.AddSkillReference(res.dataset.key, Root), 30, 0, 1000, false);
      
    }
    
    if (IsSkill) {
      //PartySkill
      const PartySkill_ClassName = "SimpleBuffSelectors";
      const PartySkill_Keys = SelectionData.SimpleBuff.Keys().sort((a, b) => {
        const Skill = SelectionData.SimpleBuff;
  
        if (Skill[a].TreeNo > Skill[b].TreeNo) return 1;
        if (Skill[a].TreeNo < Skill[b].TreeNo) return -1;
        return 0;
      });
      AppendSkillElements(SelectionData.SimpleBuff, PartySkill_Keys, PartySkill_ClassName);
      
      //PassiveClassSkill
      const PassiveSkill_ClassName = "PbuffSelectors";
      const PassiveSkill_Keys = SelectionData.SkillBuff.Keys()
        .filter(key => SelectionData.SkillBuff[key].EnableSkill(Data))
        .sort((a, b) => {
          const Skill = SelectionData.SkillBuff;
    
          if (Skill[a].TreeNo > Skill[b].TreeNo) return 1;
          if (Skill[a].TreeNo < Skill[b].TreeNo) return -1;
          return 0;
        });
      AppendSkillElements(SelectionData.SkillBuff, PassiveSkill_Keys, PassiveSkill_ClassName);
      
      //SelfBuffSkill
      const SelfSkill_ClassName = "SelfBuffSelectors";
      const SelfSkill_Keys = SelectionData.SelfBuff.Keys()
        .filter(key => SelectionData.SelfBuff[key].EnableSkill(Data))
        .sort((a, b) => {
          const Skill = SelectionData.SelfBuff;
    
          if (Skill[a].TreeNo > Skill[b].TreeNo) return 1;
          if (Skill[a].TreeNo < Skill[b].TreeNo) return -1;
          return 0;
        });
      AppendSkillElements(SelectionData.SelfBuff, SelfSkill_Keys, SelfSkill_ClassName); 

      //UserCustomBuff
      const UserCustomBuff_ClassName = "UserCustomBuffSelectors";
      const UserCustomBuff_Keys = SelectionData.UserCustomBuff.Keys()
        .filter(key => SelectionData.UserCustomBuff[key].EnableSkill(Data))
          .sort((a, b) => {
          const Skill = SelectionData.UserCustomBuff;
    
          if (Skill[a].TreeNo > Skill[b].TreeNo) return 1;
          if (Skill[a].TreeNo < Skill[b].TreeNo) return -1;
          return 0;
        });      
      
      AppendSkillElements(SelectionData.UserCustomBuff, UserCustomBuff_Keys, UserCustomBuff_ClassName);
    } else {
      const OtherEquipmentEffect_ClassName = "OtherEquipmentEffectSelectors";
      const OtherEquipmentEffect_Keys = SelectionData.OtherEquipmentEffect.Keys();
      AppendSkillElements(SelectionData.OtherEquipmentEffect, OtherEquipmentEffect_Keys, OtherEquipmentEffect_ClassName);
    }

    //要素ソート
    const SortKeys = [];
    for (let elem of SkillsElement.$Nquery(".TreeSet").Elem()) {
      SortKeys.push([elem.dataset.tree, elem.dataset.buffkey]);
    }

    const SortMode = MainMethod.GetBuffSkillRank();
    SortKeys.sort((a, b) => {
      if (SortMode === "0") return a[0] - b[0];

      const A_Simple = a[1].includes("SimpleBuffSelectors");
      const B_Simple = b[1].includes("SimpleBuffSelectors");

      if (A_Simple && !B_Simple) return -1;
      if (!A_Simple && B_Simple) return 1;
      if (A_Simple + B_Simple === 2) return a[0] - b[0];

      return a[0] - b[0];
    }).forEach(item => {
      SkillsElement.$Ncls("SkillTree").AppendLast(Judey.$query(`.TreeSet[data-buffkey="${item[1]}"]`));
    });

    //変更方法開設
    Judey.$cls(`ChangeReferenceInfoBtn-${IsSkill}`).Event("click", () => {
      const AppendElements = Judey.$Element("div").AppendLast(`
        <p style="font-weight:bold;font-size:1rem;color:var(--RedGrad2);margin-bottom:5px;">操作方法について</p>
        <div style="text-align:left;margin-left:1rem;">
          <p>
            <span style="text-decoration:underline;">1.効果の適用/無効化</span><br>
            <span style="margin-left:1rem;">名称の後の『有効』、『無効』で切替できます。</span><br>
            <span style="display:inline-block;margin-top:10px;text-decoration:underline;">2.効果内容の確認</span><br>
            <span style="margin-left:1rem;color:var(--BlueGrad3);">PC:名称部分を長押しクリック</span><br>
            <span style="margin-left:1rem;color:var(--GrassLv4);">タッチデバイス:名称部分を右/左いずれかにフリック</span><br>
            <span style="display:inline-block;margin-top:10px;text-decoration:underline;">3.スキルレベル/効果量の変更</span><br>
            ※『/』または『×』と表示されているものに限ります。<br>
            ※ブレイブオーラのみ表示はありませんが選択可能です。<br>
             <span style="margin-left:1rem;color:var(--BlueGrad3);">PC:名称部分をクリック</span><br>
            <span style="margin-left:1rem;color:var(--GrassLv4);">タッチデバイス:名称部分をタッチ</span><br>           
          </p>
        </div>
      `);
      MainRender.CheckAnswer(AppendElements, false, Answer.CloseOnly);
    });
  },
  EquipView: (RootName) => {
    const ArmorOpt = Judey.$id("ArmorSelector");
    const EquipmentSelector = Judey.$id("EquipmentSelector");
    
    Data.OtherInfo.EquipmentSelector = RootName;
    Judey.$cls("Epuipment_Listitem").RemClass("TargetEquip");
    Judey.$id(`Addition_OtherInfo-${RootName}`).Class("TargetEquip");

    if (RootName !== "OtherEquipmentEffect") {
      Judey.$cls("Equipment_Templates").RemClass("NoneText");
      Judey.$cls("OtherEquipmentEffect_Templates").Class("NoneText");
    } else {
      Judey.$cls("Equipment_Templates").Class("NoneText");
      Judey.$cls("OtherEquipmentEffect_Templates").RemClass("NoneText");
      return;
    }
    
  
    EquipmentSelector.RemChild();
    //対象項目の装備リスト生成
    {
      const Equipments = SelectionData[Data.OtherInfo.EquipmentSelector];
      const keys = Object.keys(Equipments);
      const NowName = Data.AdditionStatus[Data.OtherInfo.EquipmentSelector].Name;

      const Eq = EquipGroup;
      const Groups = Eq.GetKeys();
      const GroupsResult = Eq.GetKeys();
      const GroupsText = Eq.GetValues();

      const GroupKeys = [];
      const Sort = (GroupKeyName) => {
        GroupKeys.push(keys.filter(key => Equipments[key]?.Group == GroupKeyName)
        .sort((Key1, Key2) => {
          if (Key1 === "NonesData") return -1;
          if (Key2 === "NonesData") return 1;
          if (Key1.includes("free")) return 1;
          if (Key2 == 0) return 1;
          return Key1 > Key2 ? 1 : Key1 < Key2 ? -1 : 0;
        }))
      };

      for (const Group of Groups) {
        if (Group == Eq.UserAdd) {
          if (keys.some(key=>Equipments[key]?.Group?.includes(`${Eq.UserAdd}--`)) === false) {
            Sort(Group);
            continue;
          }

          //1.タグ付加のKey
          let Result = keys
            .filter(Key => Equipments[Key]?.Group.includes(`${Eq.UserAdd}--`))
            .sort((Key1, Key2) => {
              return Equipments[Key1]?.Group > Equipments[Key2]?.Group ? -1 :
                Equipments[Key1]?.Group < Equipments[Key2]?.Group ? 1 :
                  0
            });

          while (Result.length > 0) {
            const reg = /[\/\:\,\.\;|\s]/g;
            const UserKey = Equipments[Result[0]]?.Group;
            const PreviewKey = UserKey.split(`${Eq.UserAdd}--`)[1];
            const FilterResultKeys = Result.filter(Key => Equipments[Key]?.Group === UserKey);
            
            GroupsResult.unshift(UserKey.replace(reg,""));
            GroupsText.unshift("★" + PreviewKey.replace(reg,""));
            GroupKeys.unshift(FilterResultKeys);
            
            Result = Result.filter(Key => Equipments[Key]?.Group !== UserKey);
          };

          //2.グループタグ無しの既存Key
          Sort(Eq.UserAdd);          
          continue;
        }
        Sort(Group);
      }
      MainMethod.AddGroupListItem(EquipmentSelector, GroupsResult, GroupsText, GroupKeys, Equipments, NowName);

      //FakeSelectorの値更新
      if (MainMethod.GetFakeSelectorMode() > 0) {
        const Target = Judey.$query(".FakeSelector[data-type='Equipment_Crystal']");
        Target.Attr({ "data-csstarget": Data.OtherInfo.EquipmentSelector });
        //FakeSelectorの更新
        MainRender.FakePreviewValue();
      }
    }

    if (RootName === "Armor") ArmorOpt.RemClass("NoneText");
    else ArmorOpt.Class("NoneText");

    MainMethod.ChangeEquipmentPreview(Data.AdditionStatus[Data.OtherInfo.EquipmentSelector]);
    MainRender.PartialCrystal();
  },
  ATKSkills: (Selector, IsOnceSkill = true, JudeySelector = null) => {
    const skills = SelectionData.Skill;
    const skills_keys = Object.keys(skills).filter(Key => !Key.includes("proxy") || !IsOnceSkill);
    const SkillSelector = JudeySelector || Judey.$id("SkillSelector");

    //全件取得
    if (Selector === "All") {
      const GroupKeys = ["All", "Sword","MagicWarrior", "Martial", "Shoot", "Magic", "Halberd", "Mononof", "DualSword", "Other"];
      const GroupsText =
        [IsOnceSkill ?"カスタム" : "調整", "剣系統","魔法剣士系統", "手甲系統", "弓系統", "魔法系統", "槍系統", "抜刀系統", "双剣系統", "その他"]
          .map(v => `${v}ーーーーーー`);
      
      const GroupsItem = [];
      for (let key of GroupKeys)
        GroupsItem.push(skills_keys.filter(v => {
          if (!IsOnceSkill && (v == 0 || v.includes("Edit"))) return false;
          return skills[v].Group === key;
        }));
      
      MainMethod.AddGroupListItem(SkillSelector, GroupKeys, GroupsText, GroupsItem, skills);
      return;
    }
    
    //単一
    const Once_keys = skills_keys.filter(key =>
      skills[key].Group === "All" || skills[key].Group === Selector);
    const NowName = Data.OtherInfo.Skill.Name;
    MainMethod.AddListitem(SkillSelector, Once_keys, skills, NowName);
  },
  /**
   * 期待値情報を表示させる。
   * @param { ExpectResult } DataSet 
   */
  ExpectedInputs: (DataSet) => {
    Judey.$query(`.ExpectedBase_PreviewInfo[data-type="Critical"]`).Text(`${DataSet.TotalCriticalRate()}%`);
    Judey.$query(`.ExpectedBase_PreviewInfo[data-type="MyCritical"]`).Text(Data.Status.Critical);
    Judey.$query(`.ExpectedBase_PreviewInfo[data-type="EnemyCritical"]`).Text(Data.OtherInfo.Enemy?.ResistCritical ?? 100);
    Judey.$query(`.ExpectedBase_PreviewInfo[data-type="Hit"]`).Text(`${DataSet.HitRate}%`);
    Judey.$query(`.ExpectedBase_PreviewInfo[data-type="MyHit"]`).Text(Data.Status.HIT);
    Judey.$query(`.ExpectedBase_PreviewInfo[data-type="EnemyFree"]`)
      .Text(Enemy.Difficulty_RequireDifHit(Data.OtherInfo.Enemy, Data.OtherInfo.IsDifficulty));

    const Text = ["Critical", "Glaze", "Normal", "Miss"];

    //発生割合
    const Rates = [DataSet.CriticalRate, DataSet.GlazeCriticalRate, DataSet.NomalRate,DataSet.MissRate()];
    Rates.push(100 - Rates.reduce((total, now) => total + now, 0));
    Text.forEach((t, i) => Judey.$cls(`ExRate_${t}`).Style(`width:${Rates[i]}%`));

    //与ダメージ割合
    const DamegeResult = [DataSet.Rate_Critical(), DataSet.Rate_GlazeCritical(), DataSet.Rate_Nomal()];
    Text.filter(v => v !== "Miss")
      .forEach((t, i) => Judey.$cls(`ExDamege_${t}`).Style(`width:${DamegeResult[i]}%`));

    //期待値
    Judey.$cls("Expected_Value")
      .Text(DataSet.ExpectDamege().toLocaleString("ja-JP"));
    Judey.$cls("Expected_Stable")
      .Text(DataSet.Stable.toLocaleString("ja-JP") + "%");
    Judey.$cls("Expected_Rate")
      .Text(DataSet.ExpectRate().toLocaleString("ja-JP") + "%");
  },
  /** @param { Judey } AppendElem */
  Enemy: (AppendElem = null) => {
    const AppendOptions = (Elem, Keys) => {
      if (!Elem) return;
      let Result = "";
      Keys.forEach(Key => {
        const Selected = Enemys[Key].Name === Data.OtherInfo.Enemy.Name ? "selected" : "";
        Result += `<option value="${Key}" ${Selected}>Lv:${Enemys[Key].lv}--${Enemys[Key].Name}</option>`;
      })
      Elem.AppendLast(Result);
    };

    const Enemys = SelectionData.Enemy;
    const Keys = Object.keys(Enemys);
    const Target = AppendElem ?? Judey.$id("EnemySelector");
    Target.RemChild();

    const Groups = ["---記載レベルは難易度Normal----", "ユーザーカスタム", "モブ", "フィールドボス", "ボス", "レイドボス"];

    Groups .forEach((Val,Index) => {
      Target.AppendLast(`<optgroup label="--${Val}" data-key="${Index}"></optgroup>`)
    })
    
    const Keys_FBoss = Keys.filter(Key => Key.includes("f") && !Key.includes("rb"));
    const Keys_Boss = Keys.filter(Key => Key.includes("b") && !Key.includes("rb"));
    const Keys_RaidBoss = Keys.filter(Key => Key.includes("rb"));
    const Keys_UserCustom = Keys.filter(Key => Key.toString().length === 13);

    AppendOptions(Target.$Nquery("optgroup[data-key='1']"), Keys.filter(Key => Key == 999));
    AppendOptions(Target.$Nquery("optgroup[data-key='2']"), Keys.filter(Key => Key < 999 ));
    AppendOptions(Target.$Nquery("optgroup[data-key='3']"), Keys_FBoss);
    AppendOptions(Target.$Nquery("optgroup[data-key='4']"), Keys_Boss);
    AppendOptions(Target.$Nquery("optgroup[data-key='5']"), Keys_RaidBoss);
    AppendOptions(Target.$Nquery("optgroup[data-key='1']"), Keys_UserCustom);

    MainRender.EnemyAttribute();
  },
  /**現在の敵情報を確認し、テキストを変更する。 */
  EnemyAttribute: () => {
    const EnemyAttibute = Data.OtherInfo.Enemy?.IsNonAttribute;
    const EnemyName = Data.OtherInfo.Enemy?.Name ?? "なし";

    const BaseElem = Judey.$cls("EnemyAttributeText");
    const InfoElem = Judey.$cls("EnemyAttributeText_Enemy");
    
    InfoElem.Text(`敵：${EnemyName}`);
    if (!EnemyAttibute)
      BaseElem.Class("NoneText");
    else
      BaseElem.RemClass("NoneText");

    if (Data.OtherInfo.Enemy?.IsRaidBoss)
      Judey.$cls("RaidWepon").RemClass("NoneText");
    else
      Judey.$cls("RaidWepon").Class("NoneText");
  },
  Combo: () => {
    const Elem = Judey.$query(`div.Skill_Area[data-target="Combo"]`).RemChild();
    const IsCombo = typeof Data.OtherInfo.Skill === "string";

    Elem.Child("p").Text("項目からコンボを選択してください").Breaker()
      .Child("select", "ComboSelector", "SkillSelector")
      .Child("option").Attr({ value: "none" }).Text("----選択してください----");
    
    if (IsCombo) 
      Elem.Attr({ selected: true });
    Elem.Breaker();
    
    Object.keys(SelectionData.ComboSkill).forEach(Key => {
      Elem.Child("option").Attr("value", Key)
        .Text(SelectionData.ComboSkill[Key].Name);
      if (IsCombo) 
        if (Data.OtherInfo.Skill === Key) Elem.Attr({ selected: true });
      Elem.Breaker();
    })
    
    const ComboSelector = Judey.$id("ComboSelector");

    const BtnCompornentSet = Judey.$Element("div", "", "ComboSelector_BtnSet,Flex");
    const ShowResultBtn = `<button type="button" class="ComboSelecrer_ShowResult NoneText">コンボ詳細</button>`
    const NewBtn = `<button type="button" class="ComboSelector_Btn" value="new">新規コンボ</button>`;
    const EditBtn = `
      <button type="button" class="ComboSelector_Btn" value="edit">コンボ編集</button>
      <button type="button" class="ComboSelector_Btn" value="delete">コンボ削除</button>
    `
    
    Elem.Breaker().Child("div", "", "ComboSelector_AnsArea")
      .Append(BtnCompornentSet.Elem(), Judey.InsertLast);

    //コンボ構成確認ボタン
    BtnCompornentSet.Append(ShowResultBtn, Judey.Before);
    const ShowResultForDamege = Judey.$Element("button", "", "ComboSelecrer_ShowResult,NoneText")
      .Attr({ type: "button", "value": "result" }).Text("詳細").Elem();
    
    Judey.$cls("ComboInfoText").Append(ShowResultForDamege, Judey.After);
    
    const ComboResultBtn = Judey.$cls("ComboSelecrer_ShowResult");
    const BtnArea = Judey.$cls("ComboSelector_BtnSet").Append(NewBtn, Judey.InsertLast);
    
    ComboSelector.Event("change", (e) => {
      BtnArea.RemChild();
      const Value = e.target.value;
      
      if (Value === "none") {
        ComboResultBtn.Class("NoneText");
        Data.OtherInfo.Skill = SelectionData.Skill[0];
      } else {
        ComboResultBtn.RemClass("NoneText");
        Data.OtherInfo.Skill = Value;
      }
      
      //もとからあるコンボ類は編集不可
      ["none", "Master1", "Master2"].includes(Value)
        ? BtnArea.Append(NewBtn, Judey.InsertLast)
        : BtnArea.Append(NewBtn + EditBtn, Judey.InsertLast);
      
      MainRender.HideOptions();
      
      Judey.$cls("ComboSelector_Btn").Event("click", (e) => {
        const EditStatus = e.target.value;
        if (EditStatus === "new") MainRender.ComboEdit();
        if(EditStatus === "edit") MainRender.ComboEdit(Value);
        if (EditStatus === "delete") {
          MainRender.CheckAnswer("削除しますか?", false, Answer.YESNo, () => {
            const Result = MainMethod.GetMyLocal();

            delete Result.ComboSkill[Value];
            delete SelectionData.ComboSkill[Value];

            MainMethod.SetMyLocal(Result);

            MainMethod.RefreshComboSelector();

            alert("削除しました。");
          })
        };
      })

      if(Value !== "none") BaseCalculation();
    }).Dispatch("change");

    if (IsCombo) ComboSelector.Dispatch("change");

    Judey.$cls("ComboSelecrer_ShowResult").Event("click", (e) => {
      const Mode = Data.OtherInfo.IsExpectedShow
        ? "" 
        : e.target.value;
      MainRender.ComboResult(null, ComboSelector.InpText(), Mode);
    })
  },
  /**
   *  @param {Judey} Target
   *  @param {SkillComponent | string} ComboProPerty */
  ComboResult: (Target = null, ComboProPerty, Mode) => {
    const IsNowEditing = typeof ComboProPerty !== "string";

    const Elem = Target || Judey.$id("form1").Child("div", "", "Reference_Back");
    /** @type {SkillComponent} */
    const TargetSkill = IsNowEditing
      ? ComboProPerty
      : SelectionData.ComboSkill[ComboProPerty];
    
    if(TargetSkill.ComboMode !== ComboModes.Master)
      TargetSkill.SkillSetArray = MainMethod.GetNewSkillSet(TargetSkill, Data);
    
    const HitText = { Critical: "Critical", Glaze: "Glaze", base: "白ダメ" };

    const AddTables = (Skills, Index) => {
      const SkillName = SelectionData.Skill[Skills.SkillPropertyName].Name;
      const CheckAttribute = ()=> {
        if ([ComboModes.Connect, ComboModes.Master].includes(TargetSkill.ComboMode)) {
          const SkillFirstBase = SelectionData.Skill[Skills.SkillPropertyName]?.First?.Base;
          const IsNoneAttribute = SkillFirstBase?.Attribute === SkillAttribute.No;
          const IsMagic = SkillFirstBase?.IsMagicalSkill;
         
          const IsCritical = (Data.OtherInfo.IsCritical === "Glaze" && IsMagic)
            ? "Critical" : Data.OtherInfo.IsCritical;
          
          const WepAttribute = IsNoneAttribute
            ? WeponAttribute.Nomal : Data.OtherInfo.IsWeponAttribute;

          return [[IsCritical, WepAttribute], [HitText[IsCritical], WeponAttribute.Text(WepAttribute)]];
        }
        else 
          return [[Skills.IsCritical, Skills.IsAttribute],
            [HitText[Skills.IsCritical], WeponAttribute.Text(Skills.IsAttribute)]];
      }
     
      const Values =
         [String(Math.floor(Skills.ComboRate * 100))+"%", String(Math.floor(Skills.ToraumaRate))+"%"];
      
      Elem.Child("div", "", "ShowComboResult_ItemRow,ShowComboResult_SkillSet,Flex")
        .Child("p", "", "ShowComboResult_ComboSkillName").Text(SkillName).Breaker()
        .Child("p", "", "ShowComboResult_ComboRate").Text(Values[0]).Breaker()
        .Child("p", "", "ShowComboResult_ToraumaRate").Text(Values[1]).Breaker();
      
      if (Mode !== "result") Elem.Breaker()
      else {
        const damege = COMBORESULT.Result[Index][2].toLocaleString("ja-JP");
        Elem.Child("p", "", "ShowComboResult_Damege,NoneText").Text(damege).Breaker(2);
      }
      
      //属性
      Elem.Child("div", "", "ShowComboResult_AttributeRow")      
      if (Skills.ComboAttribute !== undefined)
        Elem.Child("div", "", "ShowComboResult_Attribute")
          .Attr({ "data-value": Skills.ComboAttribute }).Text(Combo.Text(Skills.ComboAttribute)).Breaker();
      
      const [Attr, Text] = CheckAttribute();
      Elem.Child("div", "", "ShowComboResult_IsCritical")
        .Attr({ "data-value": Attr[0] }).Text(Text[0]).Breaker();
      
      Elem.Child("div", "", "ShowComboResult_WeponAttribute")
        .Attr({ "data-value":Attr[1] }).Text(Text[1]).Breaker();
      
      if (Skills.Torauma !== undefined && Skills.Torauma !== Torauma.No) {
        Elem.Child("div", "", "ShowComboResult_Torauma")
          .Attr({ "data-value": Skills.Torauma }).Text(Torauma.Text(Skills.Torauma)).Breaker()   
      }
      Elem.Breaker();
    }

    Elem.Child("div", "", "ShowComboResult")
      .Child("div","","ShowComboResult_Header")
      .Child("p", "", "ShowComboResult_SkillName").Text(TargetSkill.Name).Breaker()
      .Child("p", "", "ShowComboResult_ComboMode").Text(ComboModes.Text(TargetSkill.ComboMode)).Breaker()
    
    //タイトル
    Elem.Child("div", "", "ShowComboResult_ItemRow,Flex")
      .Child("p", "", "ShowComboResult_ComboSkillName,ShowComboResult_Title").Text("スキル名称").Breaker()
      .Child("p", "", "ShowComboResult_ComboRate").Text("コンボ").Breaker()
      .Child("p", "", "ShowComboResult_ToraumaRate").Text("慣れ").Breaker()
      .Child("p", "", "ShowComboResult_Damege,NoneText").Text("平均ダメージ").Breaker(2);
    if (Mode !== "result") Elem.Breaker()
    else {
      const ChangeBtn = Judey.$Element("button", "", "ShowComboResult_Change")
        .Attr({ type: "button" }).Text("表示切替");
      Judey.$cls("ShowComboResult_ComboMode").Append(ChangeBtn.Elem(), Judey.After);
      Elem.Breaker();

      ChangeBtn.Event("click", () => {
        Judey.$query(".ShowComboResult_ComboRate,.ShowComboResult_ToraumaRate,.ShowComboResult_Damege")
          .Toggle("NoneText");
      });
    }
    
    TargetSkill.SkillSetArray.forEach((Skills, i) => AddTables(Skills, i));
    Elem.Breaker().Child("p","","SkillReference_Exit").Text("閉じる").Breaker();

    //内側クリック時は動作を止める。
    Judey.$cls("ShowComboResult").Event("click", e => e.stopPropagation());
    Judey.$query(".Reference_Back,.SkillReference_Exit")
      .Event("click", () => Elem.Rem());
    
  },
  ComboEdit: (ChangeKey) => {
    const BeforeChangeData = ChangeKey ? SelectionData.ComboSkill[ChangeKey].New() : null;
    const RenderBase = Judey.$id("form1")
      .Child("div", "", "Reference_Back")
      .Child("div", "", "ComboEditArea").Breaker();
    
    /*ComboEditArea内要素の削除と指定の要素を生成する。 */
    const SwitchRender = (Render) => {
      Judey.$cls("ComboEditArea").RemChild().Append(Render, Judey.InsertLast);
    }

    const SetBtnRender = (Type, NextFunc = null, BackFunc = null) => {
      const BaseElem = Judey.$Element("div", "", "ComboEdit_BtnSet");
      const Cancel = `<button type="button" class="ComboEdit_Btn" value="cancel">キャンセル</button>`;
      const Next = `<button type="button" class="ComboEdit_Btn" value="next">次に進む</button>`;
      const Back = `<button type="button" class="ComboEdit_Btn" value="back">戻る</button>`;

      switch (Type) {
        case "First": BaseElem.Append(Next + Cancel, Judey.InsertLast);
          break;
        case "Next": BaseElem.Append(Next + Back + Cancel, Judey.InsertLast);
          break;
      }
      Judey.$cls("ComboEditArea").Append(BaseElem.Elem(), Judey.InsertLast);
      Judey.$cls("ComboEdit_Btn").Event("click", (e) => {
        const Value = e.target.value;

        if (Value === "next" && NextFunc !== null) NextFunc();
        if (Value === "back" && BackFunc !== null) BackFunc();
        if (Value === "cancel") {
          MainRender.CheckAnswer("現在の入力状態を破棄します。\nよろしいですか？", true, Answer.YESNo, () => {
            RenderBase.Rem();
          })
        }
      })
    }
  
    /** @param {SkillComponent} Compornent */
    const RenderPhase_NewName = (Compornent = null) => {
      const Render = `
        <p class="RenderInfoText">コンボの名称を入力してください。</p>
        <input type="text" class="ComboEdit_NewName" value=""/>
        <p class="ComboEdit_NewNameError"></p>
      `
      SwitchRender(Render);

      const Elem = Judey.$cls("ComboEdit_NewName");
      if (Compornent !== null) Elem.InpText(Compornent.Name);
    
      SetBtnRender("First", () => {
        const InputValue = Elem.InpText();
        if (InputValue === "") {
          Judey.$cls("ComboEdit_NewNameError").Text("名称を入力してください。");
          return;
        }
        const ComboElems = MainMethod.GetMyLocal()?.ComboSkill;

        //同一名称での登録は認めない
        let IsSameName = false;
        Object.keys(ComboElems ?? {}).forEach(Key => {
          if (ComboElems[Key]?.Name === InputValue && Key !== ChangeKey) IsSameName = true;
        })
        if (IsSameName) {
          Judey.$cls("ComboEdit_NewNameError").Text("この名称はすでに登録されています。");
          return;         
        }

        Compornent ??= new SkillComponent(Elem.InpText(), ComboModes.Connect, []);
        
        //コンボが組まれているときはセレクター再選択を認めない。
        if (ChangeKey === undefined && Compornent.ResultToraumaArray.length < 1) {
          RenderPhase_SelectMode(Compornent);
        } else {
          Compornent.Name = InputValue;
          if ([ComboModes.Battle].includes(Compornent.ComboMode)) {
            RenderPhase_ToraumaEdit(Compornent);
          } else {
            RenderPhase_ComboEdit(Compornent);
          }
        }
      });
    }

    /** @param {SkillComponent} Compornent */
    const RenderPhase_SelectMode = (Compornent) => {
      const Render = `
        <p class="RenderInfoText">コンボ入力モードを選択してください。</p>
        <div class='ComboEdit_ModeCompornent'>
          <div class='ComboEdit_ModeCompornentCol Flex'>
            <input type="radio" id="combo1" class="ComboEdit_ComboModes _radio" name="combomode" value="connect" cheched/>
            <label for="combo1" class="_label _hydrangea">コネクトモード</label>
            <input type="radio" id="combo4" class="ComboEdit_ComboModes _radio" name="combomode" value="free"/>
            <label for="combo4" class="_label _cherry">フリーモード</label>             
          </div>
          <div class='ComboEdit_ModeCompornentCol Flex'>
            <input type="radio" id="combo2" class="ComboEdit_ComboModes _radio" name="combomode" value="combo"/>
            <label for="combo2" class="_label _chartreuse">コンボモード</label>
            <input type="radio" id="combo3" class="ComboEdit_ComboModes _radio" name="combomode" value="battle"/>
            <label for="combo3" class="_label _pinkgold">コンボ戦闘モード</label>
          </div>
        </div>

        <div class='ComboEdit_ModeDescriptionArea'>
          <p class="ComboEdit_ModeInfoText" key-value="connect">スキルを単純に連結します。</br>既存の威力オプションを使用します。</p>
          <p class="ComboEdit_ModeInfoText NoneText" key-value="combo">コンボ効果を設定できます。</br>個別に威力オプションを設定します。</p>     
          <p class="ComboEdit_ModeInfoText NoneText" key-value="battle">コンボ効果を設定できます。</br>個別に威力オプションを設定します。</p>     
          <p class="ComboEdit_ModeInfoText NoneText" key-value="free">慣れ、コンボ倍率、任意の安定率を設定できます。</br>個別に威力オプションを設定します。</p>
          <div class="ComboEdit_ModeInfos">
            <p class="ComboEdit_ModeOptionInfoText">威力オプション詳細</p>
            <table class="ComboEdit_ModeOptionInfo">
            
                <tbody>
                    <tr>
                        <th>クリダメ選択</th>
                        <th>武器属性選択</th>
                        <th>コンボ倍率</th>
                    </tr>
                    <tr>
                        <td class="ComboEdit_ModeInfos_IsCritical">〇</td>
                        <td class="ComboEdit_ModeInfos_IsWeponAttribute">〇</td>
                        <td class="ComboEdit_ModeInfos_IsComboRate">効果選択制</td>
                    </tr>
                    <tr>
                        <th>慣れ倍率</th>
                        <th>安定率</th>
                    </tr>
                    <tr>
                        <td class="ComboEdit_ModeInfos_IsToraumaRate">自由入力制</td>
                        <td class="ComboEdit_ModeInfos_IsStable">入力不可</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      `
      SwitchRender(Render);

      class ModeOptions{
        constructor(IsCritical, IsWeponAttribute, IsComboRate, IsToraumaRate, IsStable) {
          this.Critical = IsCritical;
          this.Attribute = IsWeponAttribute;
          this.ComboRate = IsComboRate;
          this.Torauma = IsToraumaRate;
          this.Stable = IsStable;
        }
      }
      const ChangeMode = (e) => {
        Judey.$cls('ComboEdit_ComboModes').RemAttr("checked");
        Judey.$cls('ComboEdit_ModeInfoText').Class("NoneText");

        const Target = e?.target?.value ?? Compornent.ComboMode;
        Compornent.ComboMode = Target;

        let Result = null;
        switch (Target) {
          case ComboModes.Connect:
            Result = new ModeOptions("共通設定", "共通設定", "共通設定", "共通設定", "×");
            break;
          case ComboModes.Combo: 
            Result = new ModeOptions("〇", "〇", "効果選択", "倍率入力", "×");
            break;
          case ComboModes.Battle: 
            Result = new ModeOptions("〇", "〇", "効果選択", "変動値入力", "×");
            break;
          case ComboModes.Free: 
          Result = new ModeOptions("〇", "〇", "倍率入力", "倍率入力", "倍率入力");
        }
        
        Judey.$query(`.ComboEdit_ComboModes[value="${Target}"]`).Attr({ checked: "" });
        Judey.$query(`.ComboEdit_ModeInfoText[key-value="${Target}"]`).RemClass("NoneText");

        Judey.$cls('ComboEdit_ModeInfos_IsCritical').Text(Result.Critical);
        Judey.$cls('ComboEdit_ModeInfos_IsWeponAttribute').Text(Result.Attribute);
        Judey.$cls('ComboEdit_ModeInfos_IsComboRate').Text(Result.ComboRate);
        Judey.$cls('ComboEdit_ModeInfos_IsToraumaRate').Text(Result.Torauma);
        Judey.$cls('ComboEdit_ModeInfos_IsStable').Text(Result.Stable);
      }

      ChangeMode();
      Judey.$cls("ComboEdit_ComboModes").Event("change", ChangeMode);

      SetBtnRender("Next", () => { 
        if ([ComboModes.Battle].includes(Compornent.ComboMode)) {
          if (!Compornent["FirstTorauma"]) Compornent["FirstTorauma"] = Torauma.Create(100, 100, 100);
          if (!Compornent["ToraumaMovement"]) Compornent["ToraumaMovement"] = Torauma.Create(10, 10, 10);
          RenderPhase_ToraumaEdit(Compornent);
        }
        else
          RenderPhase_ComboEdit(Compornent);
      }, () => RenderPhase_NewName(Compornent));
    }

    /** @param {SkillComponent} Compornent */
    const RenderPhase_ToraumaEdit = (Compornent) => {
      const Render_Torauma = `
        <p class="RenderInfoText">初期の慣れ値を設定してください。</br>50-250の範囲で設定できます。</p>
        <div class="ComboEdit_ToraumaArea Flex">
          <div class="ComboEdit_ToraumaArea_Col Flex">
            <p class="ComboEdit_ToraumaText">物理</p>
            <input type="number" class="ComboEdit_FirstTorauma" value=100 min=50 max=250 data-target="physical" />
          </div>
          <div class="ComboEdit_ToraumaArea_Col Flex">
            <p class="ComboEdit_ToraumaText">魔法</p>
            <input type="number" class="ComboEdit_FirstTorauma" value=100 min=50 max=250 data-target="magic" />
          </div>
          <div class="ComboEdit_ToraumaArea_Col Flex">
            <p class="ComboEdit_ToraumaText">通常</p>
            <input type="number" class="ComboEdit_FirstTorauma" value=100 min=50 max=250 data-target="nomal" />
          </div>
        </div>
        <p class="RenderInfoText">慣れ変動値を設定してください。</p>
        <div class="ComboEdit_ToraumaArea Flex">
          <div class="ComboEdit_ToraumaArea_Col Flex">
            <p class="ComboEdit_ToraumaText">物理</p>
            <input type="number" class="ComboEdit_MoveTorauma" value=10 min=0 max=250 data-target="physical"/>
          </div>
          <div class="ComboEdit_ToraumaArea_Col Flex">
            <p class="ComboEdit_ToraumaText">魔法</p>
            <input type="number" class="ComboEdit_MoveTorauma" value=10 min=0 max=250 data-target="magic" />
          </div>
          <div class="ComboEdit_ToraumaArea_Col Flex">
            <p class="ComboEdit_ToraumaText">通常</p>
            <input type="number" class="ComboEdit_MoveTorauma" value=10 min=0 max=250 data-target="nomal" />
          </div>
        </div>
      `  
      SwitchRender(Render_Torauma);
      MainRender.PaletteSelector(Judey.$query(".ComboEdit_MoveTorauma,.ComboEdit_FirstTorauma"));

      const ELEMENTS = ["physical", "magic", "nomal"];

      ELEMENTS.forEach(Key => {
        Judey.$query(`input.ComboEdit_MoveTorauma[data-target="${Key}"]`)
          .InpText(Compornent["ToraumaMovement"][Key]);
      })

      ELEMENTS.forEach(Key => {
        Judey.$query(`input.ComboEdit_FirstTorauma[data-target="${Key}"]`)
          .InpText(Compornent["FirstTorauma"][Key]);
      })   

      Judey.$cls("ComboEdit_MoveTorauma").Event("change", (e) => {
        const Target = e.target.dataset.target;
        const Value = MainMethod.InputValueCheck(e.target.value, 10, 0, 250);
        e.target.value = Value;
        Compornent.ToraumaMovement[Target] = Value;
      })

      Judey.$cls("ComboEdit_FirstTorauma").Event("change", (e) => {
        const Target = e.target.dataset.target;
        const Value = MainMethod.InputValueCheck(e.target.value, 100, 50, 250);
        e.target.value = Value;
        Compornent.FirstTorauma[Target] = Value;
      })

      SetBtnRender("Next",
        () => RenderPhase_ComboEdit(Compornent),
        () => {
          //すでにコンボを組んでいる場合はセレクター再選択を認めない。
          if (Compornent.SkillSetArray.length > 1)
            return RenderPhase_NewName(Compornent);
          
          return RenderPhase_SelectMode(Compornent);
        } );
    }

    /** @param {SkillComponent} Compornent */
    const RenderPhase_ComboEdit = (Compornent) => {
      const FuncCompornent = [];

      let SkillSetArray = Compornent.SkillSetArray;
      let TargetSkillSet = new SkillSet("Proxy1", 1, 100, "Critical", WeponAttribute.Attribute, 1, Combo.First);
      let TargetComboCount = 0;
      let NowEditComboCount = 0;
      
      const Render_ShowComboCount_SkillSelector = `
        <div class='ComboEditCompornent_Tops'>
          <div>
            <p class='ComboEdit_TopsText ComboEdit_ShowComboCount'>現在のコンボ進度：1</p>
            <select name="comboedit_showcomboselector" class='ComboEdit_ShowComboSelector'></select>            
          </div>
          <div style="margin-top:3px;">
            <p class='ComboEdit_TopsText'>スキル選択</p>
            <select class='ComboEdit_SkillSelector'></select>
          </div>
        </div>
      `
      FuncCompornent.push(() => {
        const CountSelector = Judey.$cls("ComboEdit_ShowComboSelector");
        
        const SkillSelector = Judey.$cls("ComboEdit_SkillSelector");
        MainRender.ATKSkills("All", false, SkillSelector);
          
        CountSelector.Event("change", (e) => {
          const Target = e.target.value;

          NowEditComboCount = Target;
          TargetSkillSet = SkillSetArray[NowEditComboCount];
          SetTargetValues();
        })

        SkillSelector.Event("change", (e) => {
          const Value = e.target.value;
          TargetSkillSet.SkillPropertyName = Value;
          
          const Num = Number(NowEditComboCount) + 1;
          Judey.$query(`.ComboEdit_ShowComboSelector option[value="${NowEditComboCount}"]`)
            .Text(`${Num}---${SelectionData.Skill[Value]?.Name}`);
        })
      })
      const Render_BtnSet = `
        <div class='ComboEdit_Compornent'>
          <div class='ComboEdit_BtnSet'>
            <button type="button" class='ComboEdit_Btn' value="delete">スキル削除</button>
            <button type="button" class='ComboEdit_Btn' value="add">スキル追加</button>
            <button type="button" class='ComboEdit_Btn' value="complete">コンボ登録</button>
            <button type="button" class='ComboEdit_Btn' value="show">コンボ確認</button>
            <button type="button" class='ComboEdit_Btn' value="back">戻る</button>
            <button type="button" class='ComboEdit_Btn' value="cancel">キャンセル</button>
          </div>
        </div>
      `
      FuncCompornent.push(() => {
        Judey.$query('.ComboEdit_Btn[value="add"]').Event("click", () => {
          if (TargetComboCount > 8) {
            alert("これ以上スキルの追加はできません。");
            return;
          }

          TargetSkillSet = new SkillSet("proxy1", 1, 100, "Critical", WeponAttribute.Attribute, 1, Combo.Nomal);
          SkillSetArray.splice(Number(NowEditComboCount) + 1, 0, TargetSkillSet);

          TargetComboCount++
          NowEditComboCount++;
          
          if (TargetComboCount > 8) {
            Judey.$query('.ComboEdit_Btn[value="add"]').Class("NoneText");
          }
          
          //コンボセレクターの有効化
          Judey.$cls('ComboEditCompornent_ComboAttribute').RemClass("NoneText");
          
          ReloadComboSelector();
          SetNewValues();
        })

        Judey.$query('.ComboEdit_Btn[value="delete"]').Event("click", () => {
          const Description = "削除すると元には戻せません。\nこのスキルを削除しますか?";
          MainRender.CheckAnswer(Description, true, Answer.YESNo, async () => {            
            SkillSetArray = SkillSetArray.filter((_, i) => i != NowEditComboCount);
            Compornent.SkillSetArray = SkillSetArray;
            
            //進度セレクターの対象削除
            Judey.$query(`.ComboEdit_ShowComboSelector option[value="${NowEditComboCount}"]`).Rem();

            //編集コンボが後ろの場合のみ減算する。
            if (TargetComboCount <= NowEditComboCount) NowEditComboCount--;
            //表示コンボの設定
            TargetComboCount--;

            Judey.$query('.ComboEdit_Btn[value="add"]').RemClass("NoneText");
            
            //消しつくした場合はセレクター画面まで戻す。
            if (TargetComboCount === -1) {
              return RenderPhase_SelectMode(Compornent);
            }

            TargetSkillSet = SkillSetArray[NowEditComboCount];
            ReloadComboSelector();
            SetTargetValues();

            const res = await import(Js_Archive);
            res.AllCapturedSend();
          })
        })

        Judey.$query('.ComboEdit_Btn[value="back"]').Event("click", () => {
          const IsComboModes = [ComboModes.Battle].includes(Compornent.ComboMode);
          const Description = IsComboModes
            ? "前の画面に戻りますか？"
            : "現在のコンボ入力を破棄し、モード選択画面に戻りますか?\n破棄した情報は元に戻せません。";
          
          MainRender.CheckAnswer(Description, true, Answer.YESNo, () => {
            if (IsComboModes) return RenderPhase_ToraumaEdit(Compornent);
            
            Compornent.ResultToraumaArray = [];
            Compornent.SkillSetArray = [];
            RenderPhase_SelectMode(Compornent);
          })
          
        })
        
        Judey.$query('.ComboEdit_Btn[value="cancel"]').Event("click", () => {
          const Description = "現在の入力状態を破棄して終了します。\n破棄した情報は元に戻せません。\nよろしいですか？";
          MainRender.CheckAnswer(Description, true, Answer.YESNo, () => {
            //更新前のデータに差し替え
            SelectionData.ComboSkill[ChangeKey] = BeforeChangeData;
            RenderBase.Rem();
          });
        })

        Judey.$query('.ComboEdit_Btn[value="complete"]').Event("click", () => {
          MainRender.CheckAnswer("コンボを確定してよろしいですか？", false, Answer.YESNo, async () => {
            Compornent.SkillSetArray = MainMethod.GetNewSkillSet(Compornent, Data);

            const Result = MainMethod.GetMyLocal();
            const Key = ChangeKey ?? Date.now().toString();

            if (!Result?.ComboSkill) Result.ComboSkill = {};
            
            Result.ComboSkill[Key] = Compornent;
            MainMethod.SetMyLocal(Result);

            if (!ChangeKey) {
              MainMethod.DeleteLocalCustom();
              MainMethod.SetNewLocalCustom();
            } else {
              SelectionData.ComboSkill[Key] = Compornent;
            }

            MainMethod.RefreshComboSelector();
            Judey.$cls("Reference_Back").Rem();

            const res = await import(Js_Archive);
            res.AllCapturedSend();
          })
        })

        Judey.$query('.ComboEdit_Btn[value="show"]').Event("click", (e) => {
          e.stopPropagation();
          MainRender.ComboResult(null, Compornent);

          SkillSetArray = Compornent.SkillSetArray;
          TargetSkillSet = SkillSetArray[NowEditComboCount];
        })
      })
      
      //コンボ戦闘モード限定
      const Render_MoveTorauma = `
        <div class="ComboEditCompornent_MoveTorauma">
          <p class="ComboEdit_RenderInfoText">このスキルに適用される慣れ倍率</p>
            <span class="ComboEdit_ToraumaText">物理：</span>
            <span class="ComboEdit_ToraumaNowValue" data-key="physical">0%</span>
            <span class="ComboEdit_ToraumaText">魔法：</span>
            <span class="ComboEdit_ToraumaNowValue" data-key="magic">0%</span>
            <span class="ComboEdit_ToraumaText">通常：</span>
            <span class="ComboEdit_ToraumaNowValue" data-key="nomal">0%</span>
          <p class='ComboEdit_RenderInfoText'>慣れ変動値</p>
            <span class="ComboEdit_ToraumaText">物理：</span>
            <span class="ComboEdit_ToraumaMoveValue" data-key="physical">0%</span>
            <span class="ComboEdit_ToraumaText">魔法：</span>
            <span class="ComboEdit_ToraumaMoveValue" data-key="magic">0%</span>
            <span class="ComboEdit_ToraumaText">通常：</span>
            <span class="ComboEdit_ToraumaMoveValue" data-key="nomal">0%</span>       
        </div>
      `

      //コンボ戦闘,コネクトモードは対象外
      const Render_Torauma = `
          <div class='ComboEditCompornent_Torauma Flex'>
            <p class='ComboEdit_ToraumaTexts'>
              <span >慣れ倍率：</span>
              <span id='ComboEdit_ToraumaRate_Text'>100%</span>
            </p>
            <input type='range' class='ComboEdit_ToraumaSet' min='50' max='250' value='100' />
            <input type='number' class='ComboEdit_ToraumaSet' min='50' max='250' value='100' data-kouho="50,100,150,250" />
          </div>
      `
      FuncCompornent.push(() => {
        MainRender.PaletteSelector(Judey.$query(".ComboEdit_ToraumaSet[type='number']"));
        const ElemSet = Judey.$cls("ComboEdit_ToraumaSet");
        const SetValue = (e) => {
          const Result = MainMethod.InputValueCheck(e.target.value, 100, 50, 250);
          TargetSkillSet.ToraumaRate = Result;
          ElemSet.InpText(Result);
          Judey.$id("ComboEdit_ToraumaRate_Text").Text(`${Result}%`);
        }
        Judey.$query(".ComboEdit_ToraumaSet[type='number']").Event("change", SetValue);
        Judey.$query(".ComboEdit_ToraumaSet[type='range']").Event("input", SetValue);
      });
      
      //コネクトモード,フリーモードは対象外
      const Render_ComboAttribute = `
        <div class='ComboEditCompornent ComboEditCompornent_ComboAttribute'>
          <div class='RADIOSET'>
            <span class="ComboEdit_RadioInfoText">コンボ効果</span>
            <input type='radio' name='comboattribute' id='ComboEdit_ComboNone' class='ComboEdit_ComboBtns _radio' value='none' />
            <label for='ComboEdit_ComboNone' class='_label _gray'>なし</label>
            <input type='radio' name='comboattribute' id='ComboEdit_ComboStrong' class='ComboEdit_ComboBtns _radio' value='strong' />
            <label for='ComboEdit_ComboStrong' class='_label _cherry'>強打</label>
            <input type='radio' name='comboattribute' id='ComboEdit_ComboEco' class='ComboEdit_ComboBtns _radio' value='eco' />
            <label for='ComboEdit_ComboEco' class='_label _hydrangea'>連撃</label>
            <input type='radio' name='comboattribute' id='ComboEdit_ComboSave' class='ComboEdit_ComboBtns _radio' value='save' />
            <label for='ComboEdit_ComboSave' class='_label _combosave'>充填</label>
            <input type='radio' name='comboattribute' id='ComboEdit_ComboBlood' class='ComboEdit_ComboBtns _radio' value='blood' />
            <label for='ComboEdit_ComboBlood' class='_label _comboblood'>吸血</label>
          </div>
          <div class='ComboEdit_ComboInfoArea'>
            <div class='ComboEdit_ComboInfo' data-key='none'>
              <p class='ComboEdit_ComboInfoText'>コンボ効果を付与しません。</p>
            </div>
            <div class='ComboEdit_ComboInfo NoneText' data-key='strong'>
              <p class='ComboEdit_ComboInfoText'>コンボ効果：強打を付与します。</p>
              <p class='ComboEdit_ComboInfoSubText NoneText'>
                *このスキルの威力が50%増加します。</br>
                *次のスキルの威力が50%低下します。</br>
                *次に続くスキルがない場合は消費MPが倍になります。※1</br>
                ※1:本シミュレータでは適用しません。
              </p>
            </div>
            <div class='ComboEdit_ComboInfo NoneText' data-key='eco'>
              <p class='ComboEdit_ComboInfoText'>コンボ効果：連撃を付与します。</p>
              <p class='ComboEdit_ComboInfoSubText NoneText'>
                *このスキルの威力が10% × 連撃使用回数低下します。</br>
                *コンボ位置に応じて消費MPを軽減します。※1</br>
                ※1:本シミュレータでは適用しません。
              </p>
            </div>
            <div class='ComboEdit_ComboInfo NoneText' data-key='save'>
              <p class='ComboEdit_ComboInfoText'>コンボ効果：充填を付与します。</p>
              <p class='ComboEdit_ComboInfoSubText NoneText'>
                *このスキルの威力が80%低下します。</br>
                *以降の威力が3コンボ先まで60%/40%/20%と低下します。</br>
                *このスキル分の消費MPをストックとし、消費MPを0にします。※1</br>
                *以降のMP消費を、ストックを消費して軽減します。※1</br>
                *だたし、ストックに残った分最後にMP消費が増加します。※1</br>
                ※1:本シミュレータでは適用しません。
              </p>
            </div>
            <div class='ComboEdit_ComboInfo NoneText' data-key='blood'>
              <p class='ComboEdit_ComboInfoText'>コンボ効果：吸血を付与します。</p>
              <p class='ComboEdit_ComboInfoSubText NoneText'>
                *1回目の使用でダメージとコンボ位置に応じたHP回復を得ます。※1</br>
                *以降はコンボ位置に報じた威力増加とHP消費※1が発生します。</br>
                ※1:本シミュレータでは適用しません。
              </p>
            </div>
          </div>
        </div>
      `
      FuncCompornent.push(() => {
        Judey.$cls("ComboEdit_ComboBtns").Event("change", (e) => {
          const Value = e.target.value;
          
          TargetSkillSet.ComboAttribute = Value;
          Judey.$cls("ComboEdit_ComboInfo").Class("NoneText");
          Judey.$query(`.ComboEdit_ComboInfo[data-key='${Value}']`).RemClass("NoneText");
        })
      })

      //コネクトモードは対象外
      const Render_WeponAttribute = `
        <div class='ComboEditCompornent ComboEdit_Compornent'>
          <div class="RADIOSET">
              <span class="ComboEdit_RadioInfoText">属性攻撃</span>
              <input type="radio" id="combowepattr1" class="ComboEdit_WeponAttribute _radio" 
                name="combowepattr" value="true">
              <label for="combowepattr1" class="_label _pinkgold">有(有利)</label>
              <input type="radio" id="combowepattr2" class="ComboEdit_WeponAttribute _radio" 
                name="combowepattr" value="Other">
              <label for="combowepattr2" class="_label _bluehawaii">有(その他)</label>
              <input type="radio" id="combowepattr3" class="ComboEdit_WeponAttribute _radio" 
                name="combowepattr" value="false">
              <label for="combowepattr3" class="_label _gray">無属性</label>
          </div>        
        </div>
      `
      FuncCompornent.push(() => {
        const Wp = WeponAttribute;
        [Wp.Attribute, Wp.Other, Wp.Nomal].forEach((Key, i) => {
          Judey.$id(`combowepattr${(i + 1)}`)
            .Event("change", () => TargetSkillSet.IsAttribute = Key);
        })
      })

      //コネクトモードは対象外
      const Render_Critical = `
        <div class='ComboEditCompornent ComboEdit_Compornent'>
          <div class="RADIOSET">
            <span class="ComboEdit_RadioInfoText">ダメージ判定</span>
            <input type="radio" id="combocri1" class="ComboEdit_Critical _radio" name="combocritical"
                value="Critical">
            <label for="combocri1" class="_label _critical">Critical</label>
            <input type="radio" id="combocri2" class="ComboEdit_Critical _radio" name="combocritical"
                value="Glaze">
            <label for="combocri2" class="_label _gray">Graze</label>
            <input type="radio" id="combocri3" class="ComboEdit_Critical _radio" name="combocritical"
                value="base">
            <label for="combocri3" class="_label _white">白ダメ</label>
          </div>  
        </div>
      `
      FuncCompornent.push(() => {
        Judey.$cls("ComboEdit_Critical")
          .Event('change', (e) => TargetSkillSet.IsCritical = e.target.value);
      })

      //フリーモード限定
      const Render_AverageStable = `
        <div class='ComboEdit_Compornent'>
          <div class="Flex">
            <p class='ComboEdit_InuptNumberInfo'>安定率(%)</p>
            <input type="number" value="100" min="0" max="100" class='ComboResult_ChangeStable'/>          
          </div>
          <p class='ComboEdit_InfoText'>全てのダメージ表記にこの安定率が適用されます。</p>
          </div> 
      `
      FuncCompornent.push(() => {
        MainRender.PaletteSelector(Judey.$cls("ComboResult_ChangeStable"));
        Judey.$cls("ComboResult_ChangeStable").Event("change", (e) => {
          const Elem = e.target;
          const Value = MainMethod.InputValueCheck(Elem.value, 100, 1, 120);

          TargetSkillSet.Stable = Value;
          Elem.value = Value;
        })
      })

      //フリーモード限定
      const Render_ComboRate = `
        <div class='ComboEdit_Compornent'>
          <div class="Flex">
            <p class='ComboEdit_InuptNumberInfo'>コンボ倍率(%)</p>
            <input type="number" value="100" min="10" max="10000" class='ComboResult_ChangeComboRate'/>          
          </div>
           <p class='ComboEdit_InfoText'>任意のコンボ倍率が適用されます。</p>
        </div>
      `
      FuncCompornent.push(() => {
        MainRender.PaletteSelector(Judey.$cls("ComboResult_ChangeComboRate"));
        Judey.$cls("ComboResult_ChangeComboRate").Event("change", (e) => {
          const Elem = e.target;
          const Value = MainMethod.InputValueCheck(Elem.value, 100, 10, 10000);

          TargetSkillSet.ComboRate = Value / 100;
          Elem.value = Value;
        })
      })

      const WriteShowTorauma = () => {
        const Keys = Object.keys(Compornent.AllTorauma ?? {});
        const TargetTorauma = Compornent.ResultToraumaArray[NowEditComboCount];
        
        Keys.forEach(Key => {
          Judey.$query(`.ComboEdit_ToraumaMoveValue[data-key="${Key}"]`).Text(`${Compornent.ToraumaMovement[Key]}%`);
          Judey.$query(`.ComboEdit_ToraumaNowValue[data-key="${Key}"]`).Text(`${TargetTorauma[Key]}%`);
        })
      }
      const ReloadComboSelector = () => {
        const CountSelector = Judey.$cls("ComboEdit_ShowComboSelector").RemChild();
        for (let i = 0; i <= TargetComboCount; i++){
          const SkillName = SelectionData.Skill[SkillSetArray[i].SkillPropertyName].Name;
          CountSelector.Child("option").Attr({ value: i }).Text(`${i + 1}---${SkillName}`).Breaker();
        }
        CountSelector.InpText(NowEditComboCount); 
      }
      const SetRadioSelector = () => {
        Judey.$cls('ComboEdit_ComboBtns').EachElem(elem => {
          elem.checked = elem.value === TargetSkillSet.ComboAttribute;
        })
        Judey.$cls('ComboEdit_WeponAttribute').EachElem(elem => {
          const value = elem.value === "true" ? true
            : elem.value === "false"
              ? false : "Other";
          
          elem.checked = value == TargetSkillSet.IsAttribute;
        })
        Judey.$cls('ComboEdit_Critical').EachElem(elem => {
          elem.checked = elem.value === TargetSkillSet.IsCritical;
        })
      }
      const SetNewValues = () => {
        //更新と参照の再定義
        Compornent.SkillSetArray = MainMethod.GetNewSkillSet(Compornent, Data);
        SkillSetArray = Compornent.SkillSetArray;
        TargetSkillSet = SkillSetArray[NowEditComboCount];
      
        const Num = Number(TargetComboCount) + 1;
        Judey.$cls("ComboEdit_ShowComboCount").Text(`現在のコンボ進度：${Num}`);
        
        //このスキルに適用される慣れ倍率
        WriteShowTorauma()

        //慣れ倍率の初期値：100％
        Judey.$cls('ComboEdit_ToraumaSet').InpText(100);
        Judey.$id("ComboEdit_ToraumaRate_Text").Text("100%");
        
        //選択解除
        Judey.$query(".ComboEdit_ComboBtns,.ComboEdit_WeponAttribute,.ComboEdit_Critical").RemAttr("checked");
        Judey.$cls('ComboEdit_ComboInfo').Class("NoneText");
        Judey.$query(".ComboEdit_ComboInfo[data-key='none']").RemClass("NoneText");

        //コンボの初期値：なし
        //武器有利の初期値：有利
        //クリティカル判定初期値：クリティカル
        TargetSkillSet.ComboAttribute = Combo.Nomal;
        TargetSkillSet.IsAttribute = WeponAttribute.Attribute;
        TargetSkillSet.IsCritical = "Critical";
        SetRadioSelector();

        //スキル安定率の初期値：100％
        TargetSkillSet.Stable = 100;
        Judey.$cls("ComboResult_ChangeStable").InpText(100);

        //コンボ倍率の初期値：100％
        TargetSkillSet.ComboRate = 1;
        Judey.$cls('ComboResult_ChangeComboRate').InpText(100);

        //デフォルトスキル：通常慣れ
        Judey.$cls('ComboEdit_SkillSelector').InpText("proxy1");
      }
      const SetTargetValues = () => {
        //更新
        Compornent.SkillSetArray = MainMethod.GetNewSkillSet(Compornent, Data);
        SkillSetArray = Compornent.SkillSetArray;
        TargetSkillSet = SkillSetArray[NowEditComboCount];

        //このスキルに適用される慣れ倍率
        WriteShowTorauma()

        //進度表示
        const Num = Number(NowEditComboCount) + 1;
        Judey.$cls("ComboEdit_ShowComboCount").Text(`現在のコンボ進度：${Num}`);
        
        SetRadioSelector();
        
        Judey.$cls('ComboEdit_ComboInfo').Class("NoneText");
        Judey.$query(`.ComboEdit_ComboInfo[data-key='${TargetSkillSet.ComboAttribute}']`).RemClass("NoneText");

        Judey.$id("ComboEdit_ToraumaRate_Text").Text(`${TargetSkillSet.ToraumaRate ?? 100}%`);
        Judey.$cls('ComboEdit_ToraumaSet').InpText(TargetSkillSet.ToraumaRate ?? 100);
        Judey.$cls("ComboResult_ChangeStable").InpText(TargetSkillSet.Stable);
        Judey.$cls('ComboResult_ChangeComboRate').InpText((TargetSkillSet.ComboRate * 100).INT());
        Judey.$cls('ComboEdit_SkillSelector').InpText(TargetSkillSet.SkillPropertyName);
        Judey.$cls('ComboEdit_ShowComboSelector').InpText(NowEditComboCount);

        if (NowEditComboCount == 0) {
          Judey.$cls('ComboEditCompornent_ComboAttribute').Class("NoneText");
        } else {
          Judey.$cls('ComboEditCompornent_ComboAttribute').RemClass("NoneText");
        }
      }
      //レンダリング要素指定
      const RenderElements = () => {
        const Mode = Compornent.ComboMode;

        const Toraumas = (Mode !== ComboModes.Battle ? ""
          : Render_MoveTorauma)
          + ([ComboModes.Battle, ComboModes.Connect].includes(Mode) ? ""
          : Render_Torauma);
        
        const Attributes = ([ComboModes.Combo, ComboModes.Battle].includes(Mode)
          ? Render_ComboAttribute : "") +
          (Mode === ComboModes.Connect ? ""
          : Render_WeponAttribute + Render_Critical);
        
        const Free = Mode !== ComboModes.Free ? ""
          : Render_AverageStable + Render_ComboRate;
        
        return Render_ShowComboCount_SkillSelector +
          Toraumas + Attributes + Free + Render_BtnSet;
      }
      
      //初期動作
      if (SkillSetArray.length === 0) {
        TargetSkillSet = new SkillSet("proxy1", 1, 100, "Critical", WeponAttribute.Attribute, 1, Combo.Nomal);
        TargetComboCount = 0;
        NowEditComboCount = 0; 
        SkillSetArray.push(TargetSkillSet);

        SwitchRender(RenderElements());
        FuncCompornent.forEach(func => func());
        ReloadComboSelector();
        SetNewValues();
        WriteShowTorauma();

        Judey.$cls('ComboEditCompornent_ComboAttribute').Class("NoneText");

      } else {
        TargetSkillSet = SkillSetArray.at(-1);
        TargetComboCount = SkillSetArray.length - 1;
        NowEditComboCount = TargetComboCount;

        SwitchRender(RenderElements());
        FuncCompornent.forEach(func => func());
        ReloadComboSelector();
        SetTargetValues();
        WriteShowTorauma();
      }
    }

    RenderPhase_NewName(ChangeKey ? SelectionData.ComboSkill[ChangeKey] : null);
  },
  ///選択攻撃スキルに応じてオプションの表示切替
  HideOptions: () => {
    const Skill = Data.OtherInfo.Skill;
    const HideElems = Judey.$cls("ComboHides").RemClass("NoneText");
    const ComboInfo = Judey.$cls("ComboInfoText");
    const ComboShowBtn = Judey.query('.ComboSelecrer_ShowResult[value="result"]');

    if (typeof Skill !== "string") {
      ComboInfo.Class("NoneText");
      return;
    } 

    const Combo = SelectionData.ComboSkill[Skill]?.ComboMode;
    
    if (Combo === ComboModes.Connect){
      ComboInfo.Class("NoneText");
      Judey.$cls('ToraumaNum').Append(ComboShowBtn, Judey.After);
      return;
    } 

    HideElems.Class("NoneText");
    ComboInfo.RemClass("NoneText")
    ComboInfo.Append(ComboShowBtn, Judey.After);

    const ClsQuery = (() => {
      const Result = [];
      if (Combo === ComboModes.Master) {
        Result.push("ComboHide_IsWeponAttribute");
        Result.push("ComboHide_IsCritical");
      }
      return Result;
    })();
    
    ClsQuery.forEach(Key => Judey.$cls(Key).RemClass("NoneText"));
  },
  //選択肢の表示、選択肢によりFuncを起動させる。
  CheckAnswer:(Description, IsFontRed_or_Func = false, SelectorAns, Func1, Func2, Func3)=>{
    const RenderElem = Judey.$Element("div", "AnswerReference", "Reference_Back");
    RenderElem.AppendLast(`
      <div class='Reference_AnswerArea'></div>
    `);

    const DescElem = Description?.forEach && Description.length > 0 ? Description[0] : Description;

    
    const InfoResult = (() => {
      if (typeof DescElem === "string" && !DescElem?.match("\<.*\>")) {
       return Judey.$Element("p").Class("Reference_AnswerInfo").Text(DescElem)
      }
      return Judey.$Element("div").Class("Reference_AnswerInfo").AppendLast(DescElem);
    })()

    if (IsFontRed_or_Func === true) InfoResult.Style("color:crimson;");

    const AreaElem = RenderElem.$Ncls("Reference_AnswerArea");
    AreaElem.AppendLast(InfoResult);
    

    const AnswerBtnElem = Judey.$Element("div").Class('Reference_AnswerBtns,Flex');
    const SelectorText = Answer.Text(SelectorAns);
    SelectorText.forEach((Key, Index) => {
      AnswerBtnElem.AppendLast(`
        <button type="button" class='Reference_Answer' value="${Index}" data-selector="${SelectorAns}">${Key}</button>
      `)
    })
    AreaElem.AppendLast(AnswerBtnElem);
    
    Judey.$tag("form").AppendLast(RenderElem);
    if (typeof IsFontRed_or_Func === "function") IsFontRed_or_Func();

    if (Description?.length > 0 && typeof Description[1] === "function") {
      Description[1]();
    };

    Judey.$cls("Reference_Answer").Event('click', (e) => {
      if (e.target.value == 0) {
        if (typeof Func1 === "function") {
          if (Func1() === false) return;
        }
      }
      else if (e.target.value == 1) {
        if (typeof Func2 === "function") {
          if (Func2() === false) return;
        }
      }
      else if (e.target.value == 2) {
        if (typeof Func3 === "function") {
          if (Func3() === false) return;
        }
      }

      Judey.$id("AnswerReference").Rem();

      return;
    })
  },
  /**
   * 確認フォームを出す。Promiseが解決された
   * @param { string | Judey | HTMLElement } Description 表示させる要素
   * @param { Answer } Selector ボタン表示オプション
   * @param { Function | null } Events 挿入した要素に設定するイベント 
   * @param { Function | null } Func1 ボタン1操作時のイベント。falseを返す場合はフォームを終了させない。
   * @param { Function | null } Func2 ボタン2操作時のイベント。falseを返す場合はフォームを終了させない。
   * @param { Function | null } Func3 ボタン3操作時のイベント。falseを返す場合はフォームを終了させない。
   */
  AsyncAnswer: async (Description, Selector, Events, Func1, Func2, Func3)=> {
    const RenderElem = Judey.$Element("div", "AnswerReference", "Reference_Back");
    RenderElem
      .Child("div", "", "Reference_AnswerArea")
      .AppendLast(typeof Description === "string" && !Description?.match("\<.*\>")
        ? Judey.$Element("p", "", "Reference_AnswerInfo").Text(Description)
        : Judey.$Element("div", "", "Reference_AnswerInfo").AppendLast(Description)
    );
    
    const AnswerBtnElem = Judey.$Element("div", "", "Reference_AnswerBtns,Flex");
    Answer.Text(Selector).forEach((key, index) => {
      AnswerBtnElem.AppendLast(`
        <button type="button" class='Reference_Answer' value="${index}" data-selector="${Selector}">${key}</button>
      `);
    });
    RenderElem.AppendLast(AnswerBtnElem).Breaker();
    Judey.$tag("form").AppendLast(RenderElem);

    //要素内イベント
    if (typeof Events === "function") Events();

    const PromiseResult = (Index) => {
      switch (Selector) {
        case Answer.YESNo: return [AnswerResult.OK, AnswerResult.NO][Index];
        case Answer.OKCancel: return [AnswerResult.OK, AnswerResult.Cancel][Index];
        case Answer.AddCancel: return [AnswerResult.OK, AnswerResult.Cancel][Index];
        case Answer.UpdateCancel: return [AnswerResult.OK, AnswerResult.Cancel][Index];
        case Answer.OKOnly: return AnswerResult.OK;
        case Answer.CloseOnly: return AnswerResult.OK;
        case Answer.AnathorOK: return AnswerResult.OK;
        case Answer.Captured: return [AnswerResult.Select1, AnswerResult.Select2, AnswerResult.Cancel];
        case Answer.Search: return [AnswerResult.OK, AnswerResult.Cancel][Index];
        case Answer.GoCancel: return [AnswerResult.OK, AnswerResult.Cancel][Index];
        case Answer.YesNoCancel: return [AnswerResult.OK, AnswerResult.NO, AnswerResult.Cancel][Index];
        case Answer.SaveSelector1: return [AnswerResult.Select1, AnswerResult.Select2, AnswerResult.Select3][Index];
        case Answer.SaveSelector2: return [AnswerResult.Select1, AnswerResult.Select2, AnswerResult.Cancel][Index];
        case Answer.SaveSelector3: return [AnswerResult.Select1, AnswerResult.Select2, AnswerResult.Cancel][Index];
        case Answer.SaveSelector4: return [AnswerResult.Select1, AnswerResult.Cancel][Index];
        case Answer.Approval: return [AnswerResult.OK, AnswerResult.NO, AnswerResult.Cancel][Index];
        case Answer.Selectors: return [AnswerResult.Select1, AnswerResult.Select2, AnswerResult.Select3][Index];
      }
    }
  
    return new Promise(answer => {
      Judey.$cls("Reference_Answer").Event("click", async e => {
        const value = Number(e.target.value);
        const EndCheck =
          value === 0 ? (typeof Func1 === "function" ? await Func1() : true)
            : value === 1 ? (typeof Func2 === "function" ? await  Func2() : true)
              : value === 2 ? (typeof Func3 === "function" ?  await Func3() : true)
                : "DisableBtn";
        
        if (EndCheck === false) return;
        Judey.$id("AnswerReference").Rem();
        answer(EndCheck !== "DisableBtn" ? PromiseResult(value) : AnswerResult.Cancel);
      });
    });
  },
  /**入力フォームを出す。 */
  AsyncInputForm: async (Comment, AppendElem, Events, Default, NoValueDefault) => {
    Comment = Comment.replaceAll("\n", "<br>");
    let Result = Default ?? "";

    const Element = `
      <p>
        ${Comment}
      </p>
      <input type="search" id="AsyncInputFormInputText" style="width:20rem;" value="${Result}"/>
      
      <p id="AsyncInputFormInputTextErr" style="color:var(--RedGrad3)"></p>
      ${AppendElem ?? ""}
    `;

    await MainRender.AsyncAnswer(Element, Answer.GoCancel,
      () => {
        Judey.$id("AsyncInputFormInputText").Event("change", e => Result = e.target.value);
        if (typeof Events === "function") Events(Result);
      },
      () => {
        if(!Result && NoValueDefault){
          Result = NoValueDefault;
        }

        if (Result.length === 0) {
          Judey.$id("AsyncInputFormInputTextErr").Text("入力なしで進めることはできません。");
        }
        return Result.length > 0;
      },
      () => {
        Result = null;
        return true;
      }
    );

    return Result;
  },
  /** @param{ Judey } JudeyTarget */
  PaletteSelector: (JudeyTarget, StrongModeValue) => {
    JudeyTarget.RemEvent("click", MainMethod.AddPaletteSelector)
      .RemAttr("readonly");
    
    const Ans = StrongModeValue ?? !Number(localStorage?.getItem("Toram_InputNumMode"));
    if (Ans) return;

    JudeyTarget.CaptureEvent("click", MainMethod.AddPaletteSelector)
      .Attr({ readonly: true });
  },
  /**装備比較モードの設定 */
  EquipmentComparison: () => {    
    const Elem = Judey.$Element("div").Class("Reference_Back");
    Elem.AppendLast(`
      <div class='EquipmentComparison_EndFrame'>
        <div class='EquipmentComparison_End'>閉じる</div>
      </div>
      <div class='EquipmentComparison_Frame'>
        <div class='EquipmentComparison_WorkFrame'>
        </div>
      </div>
    `);
    Judey.$tag("form").AppendLast(Elem);
    Judey.$cls("EquipmentComparison_End").Event("click", () => Elem.Rem());

    /**既存表示フレームの削除と指定Htmlの挿入を行う。 */
    const SwitchFrame = (FrameHtml) => {
      Judey.$cls("EquipmentComparison_WorkFrame").RemChild().AppendLast(FrameHtml);
    };

    /**フレームに選択ボタンを挿入、またボタン動作を定義。
     * @param { EquipmentComparison } ModeValue
     * @param { Function } DelegateFunc 変更押下時のデータ取得動作
     */
    const AppendLastBtnSet = (ModeValue, DelegateFunc) => {
      const BtnElem = Judey.$Element("div").Class("EquipmentComparison_BtnSet,Flex");
      BtnElem.AppendLast(`
        <button type="button" class='EquipmentComparison_Btn' data-key="change">変更する</button>
         <button type="button" class='EquipmentComparison_Btn' data-key="cancel">キャンセル</button>  
         <button type="button" class='EquipmentComparison_Btn' data-key="end">終了</button>         
      `);
      Judey.$cls("EquipmentComparison_WorkFrame").AppendLast(BtnElem);

      Judey.$query(".EquipmentComparison_Btn[data-key='change']").Event("click", () => {
        MainRender.CheckAnswer(
          "この条件で確定しますか？",
          false,
          Answer.OKCancel, () => {
            MainMethod.SetComparisonDatas(ModeValue, DelegateFunc());
            Elem.Rem();
          }
        );
      });
      Judey.$query(".EquipmentComparison_Btn[data-key='cancel']").Event("click", () => {
        Phase1_TopSelector();
      });
      Judey.$query(".EquipmentComparison_Btn[data-key='end']").Event("click", () => {
        Elem.Rem();
      })
    }

    /**初期選択肢 */
    const Phase1_TopSelector = () => {
      const BtnCls = "EquipmentComparison_TopSelectorBtn";
      const Eq = EquipmentComparison;
      SwitchFrame(`
        <p class='EquipmentComparison_TopText'>
          条件を指定してダメージ比較します。<br>
          比較ダメージは『現在装備』の右側に出力されます。<br>
          期待値モードの場合はダメージ差のみ出力されます。<br>
          項目から1つを選択し、比較条件を作成してください。<br>
          新規で作成した場合、前回の比較条件は削除されます。
        </p>  
        <div class='EquipmentComparison_ButtonFrame'>
          <p class='EquipmentComparison_SelectorInfoText'>新規比較条件の作成</p>
          <button type="button" class='${BtnCls}' data-type="${Eq.Smelting}">精錬値</button>    
          <button type="button" class='${BtnCls}' data-type="${Eq.StatusParam}">ステータス</button>  
          <button type="button" class='${BtnCls}' data-type="${Eq.EquipmentParam}">補正能力値</button>  
          <button type="button" class='${BtnCls}' data-type="${Eq.Enemy}">敵</button>  
          <button type="button" class='${BtnCls}' data-type="${Eq.Skill}">攻撃スキル</button>       
        </div>
      `);
      
      const Mode = localStorage?.getItem("Toram_EquipmentComparisonMode") ?? null;
      const Value = Mode ? (localStorage?.getItem("Toram_EquipmentComparisonModeResult") ?? null) : null;
      if (Mode === null || Mode === Eq.Capture) {
        MainMethod.SetComparisonDatas();
      } else {
        Judey.$cls("EquipmentComparison_ButtonFrame").AppendBefore(`
          <div class='EquipmentComparison_ButtonFrame'>
            <p class='EquipmentComparison_SelectorInfoText'>作成済み条件の更新</p>
            <button type="button" class='${BtnCls}' data-type="Update">更新</button>  
            <button type="button" class='${BtnCls}' data-type="Delete">削除</button>         
          </div>        
        `)
      }

      Judey.$cls(BtnCls).Event("click", (e) => {
        const ModeValue = e.target.dataset.type !== "Update"
          ? e.target.dataset.type
          : Mode;
        
        const ValueResult = ModeValue === Mode ? Value : null;

        if (ModeValue === Eq.Smelting) {
          Phase2_Smelting(ValueResult);
        }
        else if (ModeValue === Eq.Enemy) {
          Phase2_Enemy(ValueResult);
        }  
        else if (ModeValue === Eq.StatusParam) {
          Phase2_StatusParam(ValueResult);
        }  
        else if (ModeValue === Eq.EquipmentParam) {
          Phase2_EquipmentParam(ValueResult);
        }
        //2024-8-21廃止
        else if (false && ModeValue === Eq.Equipment) {
          Phase2_Equipment(ValueResult);
        }
        else if (ModeValue === Eq.Skill) {
          Phase2_Skill(ValueResult);
        }
        else if (ModeValue === "Delete") {
          MainRender.CheckAnswer(
            "現在の比較条件を削除します。\nよろしいですか？",
            true,
            Answer.OKCancel,
            async () => {
              MainMethod.SetComparisonDatas();
              BaseCalculation();
              MainRender.CheckAnswer("削除しました。", false, Answer.OKOnly);
              
              new EquipmentExtension(Data)
                .LimitedModifyStatus(Data, (Ref) => MainMethod.AllDamege(Ref));
              
              Phase1_TopSelector();

              const res = await import(Js_Archive);
              res.AllCapturedSend();
            }
          )
        }
        else {
          Elem.Rem();
        }
      })
    }

    /**精錬値変更UI */
    const Phase2_Smelting = (UpdateData) => {
      SwitchFrame(`
        <p class='EquipmentComparison_TopText'>
          指定した精錬値でダメージを比較します。<br>
          比較したい精錬値を選択してください。
        </p>
        <div class='EquipmentComparison_SmeltingSet Flex'>
          <span class='EquipmentComparison_SmeltingInfo'>メイン武器精錬値</span>
          <select class='EquipmentComparison_SmeltingSelector' data-key="main"></select>
        </div>
        <div class='EquipmentComparison_SmeltingSet Flex'>
          <span class='EquipmentComparison_SmeltingInfo'>サブ武器精錬値</span>
          <select class='EquipmentComparison_SmeltingSelector' data-key="sub"></select>
        </div>
      `);

      const Selector = Judey.$cls("EquipmentComparison_SmeltingSelector");
      Selector.EachElem(elem => MainRender.Smelting(Judey.$elem(elem)));

      Selector.InpText(UpdateData ? UpdateData.split(",") : "0");
      AppendLastBtnSet(
        EquipmentComparison.Smelting,
        () => {
          const Result = Selector.InpText();
          return `${Result[0]},${Result[1]}`;
        }
      )
    }
    
    /**敵情報変更UI */
    const Phase2_Enemy = (UpdateData) => {
      SwitchFrame(`
      <p class='EquipmentComparison_TopText'>
        指定した敵でダメージを比較します。<br>
        比較したい敵を選択してください。
      </p>
      <select class='EquipmentComparison_EnemySelector'></select>
      `);
      
      const Selector = Judey.$cls("EquipmentComparison_EnemySelector");
      MainRender.Enemy(Selector);

      if (UpdateData) {
        Selector.InpText(UpdateData);
      }

      AppendLastBtnSet(
        EquipmentComparison.Enemy,
        () => Selector.InpText()
      )
    }

    /**装備品補正値変更UI */
    const Phase2_EquipmentParam = (UpdateData) => {
      SwitchFrame(`
      <p class='EquipmentComparison_TopText'>
        指定した補正値を反映しダメージを比較します。<br>
        項目に値を入力してください。
      </p>
      <div id="EquipmentComparison_ParamResult" class='Flex'></div>
      <div class='EquipmentComparison_ParamsCompornents'>
        <p class='EquipmentComparison_ParamsCompornentInfo'>パラメータ系統</p>
        <div class='EquipmentComparison_ParamsCompornent Flex' data-key="1"></div>
        <p class='EquipmentComparison_ParamsCompornentInfo'>威力系統</p>
        <div class='EquipmentComparison_ParamsCompornent Flex' data-key="2"></div>
        <p class='EquipmentComparison_ParamsCompornentInfo'>特殊系統</p>
        <div class='EquipmentComparison_ParamsCompornent Flex' data-key="3"></div>
      </div>
      `);      
      const Params = new AtackerStatus();
      delete Params["MainWeponATK"];
      delete Params["SubWeponATK"];

      const ParamResult = {};
      const CompCls1 = Judey.$query(".EquipmentComparison_ParamsCompornent[data-key='1']");
      const CompCls2 = Judey.$query(".EquipmentComparison_ParamsCompornent[data-key='2']");
      const CompCls3 = Judey.$query(".EquipmentComparison_ParamsCompornent[data-key='3']");
      
      Params.KeyEach((Key, i) => {
        const Target = i < 10 ? CompCls1 : (i < 26 ? CompCls2 : CompCls3);

        if ([13, 16, 23].includes(i)) {
          Target.AppendLast(`<div class='EquipmentComparison_ParamsSet'></div>`);
        }
        Target.AppendLast(`
          <div class='EquipmentComparison_ParamsSet'>
            <span class='EquipmentComparison_ParamText'>${Params[Key]}</span>
            <input type="number" class='EquipmentComparison_ParamInput' data-key="${Key}"></input>
          </div>
        `)
      })
      MainRender.PaletteSelector(Judey.$cls("EquipmentComparison_ParamInput"));

      if (UpdateData) {
        UpdateData = UpdateData.Jparse();
        UpdateData.KeyEach(Key => {
          Judey.$query(`.EquipmentComparison_ParamInput[data-key="${Key}"]`).InpText(UpdateData[Key]);
        })
      }
      AppendLastBtnSet(
        EquipmentComparison.EquipmentParam,
        () => {
          Judey.$cls("EquipmentComparison_ParamInput").EachElem((elem) => {
            ParamResult[elem.dataset.key] = elem.value;
          })
          return ParamResult;
        } 
      )
    }

    /**ステータス変更UI */
    const Phase2_StatusParam = (UpdateData) => {
      SwitchFrame(`
        <p class='EquipmentComparison_TopText'>
          ステータスに値を加算しダメージを比較します。<br>
          項目に値を入力してください。
        </p>
        <div class='EquipmentComparison_ParamsCompornents'>
      `);  
      const elem = Judey.$cls("EquipmentComparison_ParamsCompornents");
      const CreateInputs = (Key ,Text = null) => Judey.$Element("div").AppendLast(`
        <span class='Text REM-nom'>${Text ?? Key}</span>
        <input class="EquipmentComparison_StatusParamInput" type="number" value="0" data-key="${Key}">
      `);
      elem.AppendLast(
        Judey.$Element("div", "", "EquipmentComparison_StatusParamsCompornent,Flex")
          .AppendLast(CreateInputs("Level","レベル"))
      )
      elem.AppendLast(
        Judey.$Element("div", "", "EquipmentComparison_StatusParamsCompornent,Flex")
          .AppendLast(CreateInputs("STR"))
          .AppendLast(CreateInputs("INT"))
          .AppendLast(CreateInputs("VIT"))
      )
      elem.AppendLast(
        Judey.$Element("div", "", "EquipmentComparison_StatusParamsCompornent,Flex")
          .AppendLast(CreateInputs("AGI"))
          .AppendLast(CreateInputs("DEX"))
      )
      MainRender.PaletteSelector(Judey.$cls("EquipmentComparison_StatusParamInput"));

      if (UpdateData) {
        UpdateData = UpdateData.Jparse();
        UpdateData.KeyEach(Key => {
          Judey.$query(`.EquipmentComparison_StatusParamInput[data-key="${Key}"]`).InpText(UpdateData[Key]);
        })
      }

      const ParamResult = {};
      AppendLastBtnSet(
        EquipmentComparison.StatusParam,
        () => {
          Judey.$cls("EquipmentComparison_StatusParamInput").EachElem(elem => {
            ParamResult[elem.dataset.key] = elem.value;
          })
          return ParamResult;
        }
      )
    }

    /**装備品入替変更UI//2024-8-21廃止 */
    const Phase2_Equipment = (UpdateData) => {
      SwitchFrame(`
        <p class='EquipmentComparison_TopText'>
          装備品を入替しダメージを比較します。<br>
          装備項目、装備品を選択してください。<br>
        </p>
        <div class='EquipmentComparison_ParamsCompornents'>
      `);  

      const AdditionElems = {
        "None" : "-----選択してください",
        "Wepon": "武器",
        "SubWepon": "サブ武器装備",
        "Armor": "体装備",
        "Addition": "追加装備",
        "Option": "特殊装備",
        "Enchant": "おしゃれ1",
        "Enchant2": "おしゃれ2",
        "Enchant3": "おしゃれ3",
        "Other": "自由入力1",
        "Other2":"自由入力2",
        "Other3": "自由入力3",
        "Other4": "自由入力4",
        "Other5": "自由入力5",
        "Other6": "自由入力6",
        "Other7": "自由入力7",
        "Cry_1_Wepon": "武器クリスタ1つ目",
        "Cry_2_Wepon": "武器クリスタ2つ目",
        "Cry_3_Armor": "防具クリスタ1つ目",
        "Cry_4_Armor": "防具クリスタ2つ目",
        "Cry_5_Addition": "追加クリスタ1つ目",
        "Cry_6_Addition": "追加クリスタ2つ目",
        "Cry_7_Option": "特殊クリスタ1つ目",
        "Cry_8_Option": "特殊クリスタ2つ目",
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
      
      const elem = Judey.$cls("EquipmentComparison_ParamsCompornents");  
      const CreateElem = (Index) => {
        elem.AppendLast(`
        <div class='EquipmentComparison_EquipmentParamsCompornent'>
          <div class='EquipmentComparison_EquipmentSelectorSet Flex'>
            <p class='EquipmentComparison_EquipmentSelectorInfo'>${Index + 1}つ目の種類</p>
            <select class='EquipmentComparison_EquipmentTypeSelector' data-key="${Index}"></select>
          </div>
          <div class='EquipmentComparison_EquipmentSelectorSet Flex'>
            <p class='EquipmentComparison_EquipmentSelectorInfo'>装備品</p>
            <select class='EquipmentComparison_EquipmentSelector' data-key="${Index}"></select>
          </div>  
        </div>
        `)
        const SelectorElem = Judey.$query(`.EquipmentComparison_EquipmentTypeSelector[data-key="${Index}"]`);
        SelectorElem.EachElem(em => {
          const EM = Judey.$elem(em);
          AdditionElems.KeyEach(Key => EM.AppendLast(`<option value="${Key}">${AdditionElems[Key]}</option>`));
        })
      }
      for (let i = 0; i < 5; i++)CreateElem(i);
      
      const CreaterSelectorOption = (e) => {
        try {
          const JudeyElem = Judey.$query(`.EquipmentComparison_EquipmentSelector[data-key="${e.target.dataset.key}"]`);
          const TargetKey = e.target.value;

          JudeyElem.RemChild();
          HideOptions(e.target.dataset.key);
          if (TargetKey === "None") return;
          
          //通常装備
          if (!TargetKey.includes("Cry")) {
            const Equipments = SelectionData[TargetKey];
            const keys = Equipments.Keys();
            const NowName = "装備なし";
      
            const Eq = EquipGroup;
            const Groups = Eq.GetKeys();
            const GroupsText = Eq.GetValues();
      
            let GroupKeys = [];
            for (const Group of Groups) {
              GroupKeys.push(keys.filter(key => Equipments[key].Group == Group)
                .sort((Key1, Key2) => {
                  if (Key1.includes("free")) return 1;
                  if (Key1 === "NonesData") return -1;
                  if (Key2 === "NonesData") return 1;
                  if (Key2 == 0) return 1;
                  return Key1 > Key2 ? 1 : Key1 < Key2 ? -1 : 0;
                }))
            }
            MainMethod.AddGroupListItem(JudeyElem, Groups, GroupsText, GroupKeys, Equipments, NowName);
          } else {
            const CrystalTargetKey = TargetKey.split("_")[2];
            const GroupText = [AdditionElems[TargetKey].substr(0, 6), "ノーマルクリスタ"];
            
            const GetCrystalKeys = (Target) => {
              const List = SelectionData.Crystal[Target];
              const ListResult = List.Keys().sort(
                (a, b) => List[b].Name === "なし" || List[a].Name.localeCompare(List[b].Name)
              );
              return ListResult;
            }
            const CreatOptionSelector = (Keys, LabelText, PropTarget) => {
              JudeyElem.Child("optgroup").Attr({ label: LabelText });
              Keys.forEach(Key => {
                const CryKey = PropTarget !== "Nomal" ? Key : "N_" + Key;
                JudeyElem.AppendLast(`
                  <option value="${CryKey}">${SelectionData.Crystal[PropTarget][Key].Name}</option>
                `)
              })
              JudeyElem.Breaker();
            }
            CreatOptionSelector(GetCrystalKeys(CrystalTargetKey), GroupText[0], CrystalTargetKey);
            CreatOptionSelector(GetCrystalKeys("Nomal"), GroupText[1], "Nomal");
          }          
        } catch (error) {
          console.error(error);
          MainMethod.SetComparisonDatas();
          Phase1_TopSelector();
        }

      }
      //選択肢から先に選択したものを非表示にする。
      const HideOptions = (TargetIndex) => {
        const Elems = Judey.$cls("EquipmentComparison_EquipmentTypeSelector");
        const Result = [];
        
        Elems.EachElem((selector) => {
          if (selector.value === "None") return;
          Result.push(selector.value);
        });

        Elems.EachElem((selector, Index) => {
          const options = Judey.$elem(selector.children).RemClass("NoneText");
          if (TargetIndex === Index) return;
          options.EachElem(option => {
              if (Result.includes(option.value)) option.classList.add("NoneText");
            }
          )
        })
      }
      Judey.$cls("EquipmentComparison_EquipmentTypeSelector").Event("change", CreaterSelectorOption);
      
      if (UpdateData) {
        const CrystalRoots = ["Wepon", "Armor", "Addition", "Option"];
        try {
          /** @type { { EquippedRootNames:[], SelectionDataRootNames:[], SelectionDataKeys:[] } } UpdateData */
          const Result = UpdateData.Jparse();
          for (let i = 0; i < Result.SelectionDataRootNames.length; i++){
            const RootName = Result.EquippedRootNames[i];
            const EquipmentKey = Result.SelectionDataRootNames[i];
            const DataKey = Result.SelectionDataKeys[i];

            if (RootName === "None") continue;

            const EquipSelectorKey = RootName === EquipmentKey
              ? EquipmentKey
              : EquipmentKey.includes("Nomal")
                ? `Cry_${RootName}_${CrystalRoots[Math.floor((RootName - 1) / 2)]}`
                : EquipmentKey.replace("Cry_", `Cry_${RootName}_`);
            
            const ValueKey = EquipmentKey.includes("Nomal") == false
              ? DataKey
              : `N_${DataKey}`;
            
            Judey.$query(`.EquipmentComparison_EquipmentTypeSelector[data-key="${i}"]`)
              .InpText(EquipSelectorKey).Dispatch("change");
            Judey.$query(`.EquipmentComparison_EquipmentSelector[data-key="${i}"]`)
              .InpText(ValueKey);
          }          
        } catch (error) {
          console.error(error);
          MainMethod.SetComparisonDatas();
          Phase1_TopSelector();
        }
      }
      AppendLastBtnSet(
        EquipmentComparison.Equipment,
        () => {
          const Result = {
            /**装備中の項目位置 */
            EquippedRootNames: [],
            /**SelectionDataの参照プロパティ */
            SelectionDataRootNames: [],
            /**キー */
            SelectionDataKeys: []
          }
          const SelectorElems = Judey.$cls("EquipmentComparison_EquipmentTypeSelector");
          SelectorElems.EachElem((elem) => {
            const EquipTarget = elem.value;
            if (EquipTarget === "None") return;

            const CrystalTarget = EquipTarget.includes("Cry") ? EquipTarget.split("_")[1] : null;
            
            //装備品のキー
            const SelectorKeyValue =
              Judey.$query(`.EquipmentComparison_EquipmentSelector[data-key="${elem.dataset.key}"]`).InpText();
            
            const SelectionDataTarget = !CrystalTarget
              ? EquipTarget
              : "Cry_" + (SelectorKeyValue.includes("N_") ? "Nomal" : EquipTarget.split("_")[2]);
            
            if (SelectionData == "") return;

            Result.EquippedRootNames.push(CrystalTarget ?? EquipTarget);
            Result.SelectionDataRootNames.push(SelectionDataTarget);
            Result.SelectionDataKeys.push(SelectorKeyValue.replace("N_", ""));
          })
          return Result;
        },
      )
    }
    /**攻撃スキル変更UI */
    const Phase2_Skill = (UpdateData) => {
      SwitchFrame(`
      <p class='EquipmentComparison_TopText'>
        指定したスキルでダメージを比較します。<br>
        比較したいスキルを選択してください。
      </p>
      <select class='EquipmentComparison_SkillSelector'></select>
      `);
      
      const Selector = Judey.$cls("EquipmentComparison_SkillSelector");
      MainRender.ATKSkills("All", true, Selector);
      Judey.$query(".EquipmentComparison_SkillSelector option[value$='Edit']").Rem();
      
      //コンボスキル
      if (SelectionData.ComboSkill) {
        Selector.Child("optgroup").Attr({ label: "コンボスキルーーーーーー" });
        SelectionData.ComboSkill.KeyEach(Key => {
          Selector.Child("option").Attr({ value: Key }).Text(SelectionData.ComboSkill[Key]?.Name).Breaker();
        })
        Selector.Breaker();
      }

      if (UpdateData) {
        Selector.InpText(UpdateData);
      }

      AppendLastBtnSet(
        EquipmentComparison.Skill,
        () => Selector.InpText()
      )
    }

    Phase1_TopSelector();
  },
  /**装備比較の差の情報表示 */
  ComparisonInfo: () => {
    if (!localStorage) return null;

    const ModeResult = Data.NotSavedInfo.ComparisonMode;
    const ValueResult = Data.NotSavedInfo.ComparisonResult;

    if (ModeResult === EquipmentComparison.Capture) {
      MainRender.CheckAnswer("比較条件がありません。", false, Answer.OKOnly);
    }
    if (ModeResult === EquipmentComparison.Smelting) {
      const SmeltingResult = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "E", "D", "C", "B", "A", "S"];
      const Html = `
        <p>元の精錬値からの変化値</p>
        <div class='Flex' style="width:fit-content;margin:0 auto;">
          <p style="width:9rem;">メイン武器の精錬値</p>
          <p style="width:4rem;">：${SmeltingResult[Data.OtherInfo.Smelting]}から${SmeltingResult[ValueResult.Smelting]}</p>
        </div>
        <div class='Flex' style="width:fit-content;margin:0 auto;">
          <p style="width:9rem;">サブ武器の精錬値</p>
          <p style="width:4rem;">：${SmeltingResult[Data.OtherInfo.SubSmelting]}から${SmeltingResult[ValueResult.SubSmelting]}</p>
        </div>
      `
      MainRender.CheckAnswer(Html, false, Answer.OKOnly);
    }
    if ([/* EquipmentComparison.Equipment,  */EquipmentComparison.EquipmentParam].includes(ModeResult)) {
      const Result = {};
      const ResultKeys = ValueResult.Keys().sort((a, b) => { 
        return ValueResult[a] < ValueResult[b]
          ? 1
          : ValueResult[a] > ValueResult[b]
            ? -1
            : 0;
      } );
      ResultKeys.forEach(Key => Result[Key] = ValueResult[Key]);
      
      const InfoText = ModeResult === EquipmentComparison.EquipmentParam
        ? "補正値変更による変動値"
        : "装備品入替による能力の変動値";
      
      const elem = Judey.$Element("div", "", "Reference_AnswerFrame");
      elem.AppendLast(`
      <p class="ComparisonInfoResultInfoTopText">${InfoText}</p>
      <p style="margin-bottom:5px;">※装備品付加の武器安定率と精錬値は無視して計算しています。</p>
      `);
      elem.AppendLast(MainMethod.BaseReferenceText(Result, "ComparisonShowResult"));
      MainRender.CheckAnswer(elem, false, Answer.OKOnly);
    }
    if (ModeResult === EquipmentComparison.StatusParam) {
      const ParamResult = {
        Level: "レベル変化",
        STR: "STR変化",
        INT: "INT変化",
        VIT: "VIT変化",
        AGI: "AGI変化",
        DEX: "DEX変化",
      }
      const elem = Judey.$Element("div","","Reference_AnswerFrame");
      elem.Child("p","","ComparisonInfoResultInfoTopText").Text("元のステータスからの変動量").Breaker();
      ValueResult.KeyEach(Key => {
        const Result = Number(ValueResult[Key]);
        const Value = Result >= 0 ?Result
          : (Data.Status[Key] + Result > 0) ? Result
            : (- Data.Status[Key] + 1);
        
        elem.AppendLast(`
          <div class='Flex FitCenter'>
            <span class="REM-mid">${ParamResult[Key]}</span>
            <span class="REM-sml">：</span>
            <span class="REM-mid" style="color:var(${Result >= 0 ? "--BlueGrad3" : "--RedGrad3"})">${Value}</span>
          </div>
        `)
      });
      MainRender.CheckAnswer(elem, false, Answer.OKOnly);
    }
    if (ModeResult === EquipmentComparison.Enemy) {
      if (Data.OtherInfo.Enemy.Name === ValueResult) {
        MainRender.CheckAnswer(`比較する敵が同じです。\nダメージ変化はありません。`, false, Answer.OKOnly);
      } else {
        const Html = `
          <p class="ComparisonInfoResultInfoTopText">敵情報の変更</p>
          <p>『${Data.OtherInfo.Enemy.Name}』<br>から<br>『${ValueResult}』</p>
        `
        MainRender.CheckAnswer(Html, false, Answer.CloseOnly);
      }
    }
    if (ModeResult === EquipmentComparison.Skill) {
      const SkillName = Data.OtherInfo.Skill.Name ?? SelectionData.ComboSkill[Data.OtherInfo.Skill].Name;
      if (SkillName === ValueResult) {
        MainRender.CheckAnswer(`比較するスキルが同じです。\nダメージ変化はありません。`, false, Answer.OKOnly);
      } else {
        const Html = `
          <p class="ComparisonInfoResultInfoTopText">攻撃スキル情報の変更</p>
          <p>『${SkillName}』<br>から<br>『${ValueResult}』</p>
        `
        MainRender.CheckAnswer(Html, false, Answer.OKOnly);
      }
    }
  },
  /**装備品比較モードの表示を設定する。 */
  ComparsionCommonDamegePreview: (BeforeDamege, AfterDamege) => {
    const Diff_DMG = AfterDamege - BeforeDamege;
    const Diff_Rate = Number(AfterDamege / BeforeDamege * 100 - 100).toString().substring(0, 5);
    const Diff_ShowRate =
      Diff_Rate < -999 ? "-999%↓" :
        Diff_Rate > 999 ? "999%↑" :
          Diff_Rate + "%";
    
    Judey.$id("ComparisonInfoResult")
      .Style(`color:var(${Diff_DMG > 0 ? "--BlueGrad3" : "--RedGrad3"});`)
      .Text(`${Diff_DMG.toLocaleString("ja-jp")}(${Diff_Rate >= 0 ? "+" : ""}${Diff_ShowRate})`);
  },
  /**
   * 表示セレクタを構成する。
   * @param { FakeSelectorSet } Result 表示用の値
   * @param { string } FakeClassName selectに関連づく値
   * @param { Judey } Spanelem Fakeの表示名部分
   */
  FakeSelector: (Result, FakeClassName, Spanelem) => {    
    const Selector = Judey.$query(`select[data-fakeclass='${FakeClassName}']`);
    const SelectorValue = Selector.InpText();
    const Elem = Judey.$Element("div", "", "Reference_Back");
    Elem.Child("div", "", "FakeItemSelectorArea");

    const FavoriteKeys = MainMethod.GetFavoriteItems();
    let UpdateFavoriteMode = false;
    let FavoriteElement = null;

    Result.Item.forEach((selector) => {
      const GroupElem = Judey.$Element("div","","FakeItemSelectorArea_Group");
      GroupElem.AppendLast(`<p class='FakeItem_GroupInfo'>${selector.Description ?? "-----"}</p>`);

      GroupElem.Child("div", "", "FakeItem_OnceItems,Flex");

      
      const SelectedChecker = [];
      selector.Item.forEach(item => {
        const Selected = SelectorValue === item.KeyNo;
        const { KeyNo, Equipment } = item;
        const FavoriteClass = FavoriteKeys.includes(`${Result.FavoriteKeyName}${item.KeyNo}`) ? "FakeItem_FavoriteItem" : "";

        const AppendElem = `
          <div class='FakeItem_OnceItem ${FavoriteClass}' data-value='${KeyNo}'>
            <p class='FakeItem_OnceItem_Info ${Selected ? "SelectedInfo" : ""}'>${Equipment["Name"]}</p>
            <div class='FakeItem_OnceItem_Attribute ${Selected ? "SelectedAttrubute" : ""}' data-value='${KeyNo}'>
            </div>
          </div>
        `;
        if(Selected)
          GroupElem.AppendFirst(AppendElem);
        else
          GroupElem.AppendLast(AppendElem);

        const AttributeArea = GroupElem.$Nquery(`.FakeItem_OnceItem_Attribute[data-value='${KeyNo}']`);

        //プロパティ
        AttributeArea.AppendLast(MainMethod.BaseReferenceText(Equipment["Base"], "Flex,FakeItem_OnceItem_Attribute_Props"));

        //装備品追加効果
        if (Equipment["Description"]) { 
          AttributeArea.AppendLast(`
            <p class='FakeItem_OnceItem_Extension'>${Equipment["Description"].replaceAll("\n", "<br>")}</p>
          `);
        };
        
        const ExtensionArea = Judey.$Element("div");

        //装備品分類
        if (item["Description"] && item["Description"].length > 0) {
          ExtensionArea.AppendLast(`
            <p class='FakeItem_OnceItem_GroupTitle'>
              <span class=''>分類：</span>
              <span class=''>${item["Description"]}</span>
            </p>
          `);
        }
        

        //比較
        if (MainMethod.GetFakeSelectorMode() === 2) {
          const [DiffKey1, DiffKey2, DiffKey3] = MainMethod.GetFakeSelectorRanks().map(item=>item.replaceAll("_Asc","").replaceAll("-",""));

          if (DiffKey1.length > 1) {
            const ClassName1 = item[DiffKey1] > 0 ? "Plus" : "Minus";
            const AppendValue1 = DiffKey1.includes("Damege")
              ? ""
              : `(${(Result[DiffKey1.replaceAll("Difference", "")] + item[DiffKey1]).toLocaleString("ja-JP")})`;
            
            ExtensionArea.AppendLast(`
              <p class='FakeItem_OnceItem_Damege ${ClassName1}'>
                <span class=''>${Data.NotSavedInfo.FakeDifference_Text1}</span>
                <span>：</span>
                <span class=''>
                  ${item[DiffKey1] > 0 ? "+" : ""}${item[DiffKey1].toLocaleString("ja-JP")}${AppendValue1}
                </span>
              </p>
            `);       
          }    
          if (DiffKey2.length > 1) {
            const ClassName2 = item[DiffKey2] > 0 ? "Plus" : "Minus";
            const AppendValue2 = DiffKey2.includes("Damege")
              ? ""
              : `(${(Result[DiffKey2.replaceAll("Difference", "")] + item[DiffKey2]).toLocaleString("ja-JP")})`;
          
            ExtensionArea.AppendLast(`
              <p class='FakeItem_OnceItem_Damege ${ClassName2}'>
                <span class=''>${Data.NotSavedInfo.FakeDifference_Text2}</span>
                <span>：</span>
                <span class=''>
                  ${item[DiffKey2] > 0 ? "+" : ""}${item[DiffKey2].toLocaleString("ja-JP")}${AppendValue2}
                  </span>
              </p>
            `);             
          }
          if (DiffKey3.length > 1) {
            const ClassName3 = item[DiffKey3] > 0 ? "Plus" : "Minus";
            const AppendValue3 = DiffKey3.includes("Damege")
              ? ""
              : `(${(Result[DiffKey3.replaceAll("Difference", "")] + item[DiffKey3]).toLocaleString("ja-JP")})`;
          
            ExtensionArea.AppendLast(`
              <p class='FakeItem_OnceItem_Damege ${ClassName3}'>
                <span class=''>${Data.NotSavedInfo.FakeDifference_Text3}</span>
                <span>：</span>
                <span class=''>
                  ${item[DiffKey3] > 0 ? "+" : ""}${item[DiffKey3].toLocaleString("ja-JP")}${AppendValue3}
                  </span>
              </p>
            `);             
          }
        }

        //クリスタ
        if (MainMethod.CheckIsEnabedPartialCrystal() && item.Extension.Keys().length > 0) {
          ExtensionArea.AppendLast(`
            <div class="FakeItem_OnceItem_IncludeCrystal" data-type="${Data.OtherInfo.EquipmentSelector}">
              <p data-type="${item.Extension.CrystalName1_Root}">◇${(item.Extension.CrystalName1_Root ? item.Extension.CrystalName1 : "" )}</p>
              <p data-type="${item.Extension.CrystalName2_Root}">◇${(item.Extension.CrystalName2_Root ? item.Extension.CrystalName2 : "" )}</p>
            </div>

          `)
        }

        AttributeArea.AppendFirst(ExtensionArea);

        SelectedChecker.push(Selected);
      });     

      GroupElem.Breaker();

      if (selector.Description === "お気に入り")
        FavoriteElement = GroupElem;
      else if (SelectedChecker.includes(true))
        Elem.AppendFirst(GroupElem);
      else
        Elem.AppendLast(GroupElem);
    });

    //お気に入りブロックが最優先表示
    if (FavoriteElement !== null)
      Elem.AppendFirst(FavoriteElement);

    Elem.Breaker();
    Judey.$tag("form").AppendLast(Elem);

    //フィルターとお気に入り要素
    Elem.AppendFirst(`
      <div class="FakeSelector_Extensions">
        <div class="FakeSelector_Extension">
          <div class="Flex">
            <span>お気に入り</span>
            <button type="button" class="FakeSelector_ExtensionStarBtn" value="Change">登録と解除</button>
            <button type="button" class="FakeSelector_ExtensionStarBtn NoneText" value="Complete">設定完了</button>
            <button type="button" class="FakeSelector_ExtensionStarBtn" value="AllDelete">全解除</button>
          </div>
        
        </div>
        <div class="FakeSelector_Filter">
          <span>入力した名称で表示を絞り込みします。</span>
          <div class="Flex" style="margin-bottom:5px;">
            <input type="search"  class="FakeSelector_TextFilter" data-key="Txt" data-ignorekey="Attr"/>
            <button type="button" class="FakeSelector_FilterResetBtn">初期化</button>
          </div>
          <span>単一または類似プロパティに絞り込みします。</span>
          <div class="Flex">
            <div class="FakeSelector_FilterArea">
              <input type="text" class="FakeSelector_FilterSelector" placeholder="プロパティまたはワード"/>
              <button type="button" class="FakeSelector_SubmitSelector NoneText">閉じる</button>
              <div class="FakeSelector_Selectors NoneText">
              </div>
            </div>
            <button type="button" class="FakeSelector_FilterResetBtn">初期化</button>
          </div>
        </div>
      </div>
    `);

    /**セレクター表示を初期化する。 */
    const ResetRender = () => {
      Elem.Rem();
      Judey.$query(`.FakeSelector[data-fakeclass='${FakeClassName}']`).Dispatch("click");
    }
    //セレクターを閉じる。
    const Close = () => {
      Elem.Class("Closed");
      setTimeout(() => Elem.Rem(), 300);
    }

    //DefaultEvent
    Judey.$cls("FakeItem_OnceItem").Event("click", e => {
      if (UpdateFavoriteMode) {
        e.currentTarget.classList.toggle("FakeItem_FavoriteItem");
        return;
      }

      const Value = e.currentTarget.dataset.value;
      
      Selector.InpText(Value).Dispatch("change");
      MainRender.FakePreviewValue();
      Close();
    });

    //要素外操作またはキーボード操作によるセレクター終了判定
    Elem.Event('mousedown,touchdown,keydown', (e) => {
      if (!e.target.closest(".FakeSelector_FilterArea")) Close_FilterSelectors();
      if (!e.target.closest(".FakeItem_OnceItem,.FakeSelector_Extensions")) {
        if(window.innerWidth - e.screenX > 50) return Close();
      } 
      if([27,35].includes(e?.keyCode))return Close();
    })
    
    //フィルター設定
    const FilterViewKeys = BaseStatus.Status_Words.Keys();
    const FileterSelectorItems = Judey.$cls("FakeSelector_Selectors");
    const Open_FileterSelectors = ()=> Judey.$query(".FakeSelector_Selectors,.FakeSelector_SubmitSelector").RemClass("NoneText");
    const Close_FilterSelectors = ()=> Judey.$query(".FakeSelector_Selectors,.FakeSelector_SubmitSelector").Class("NoneText");

    const FilterSelectorValue = Judey.$cls("FakeSelector_FilterSelector");

    BaseStatus.Status_Words.EntrieEach((key, value) => {
      FileterSelectorItems.AppendLast(`
        <div class="FakeSelector_Selector" data-prop="${key}">
          <p>${value[0]}</p>
        </div>
      `);
    });

    //フィルター選択開始
    FilterSelectorValue.Event("click", Open_FileterSelectors);
    //フィルター終了
    Judey.$cls("FakeSelector_SubmitSelector").Event("click", Close_FilterSelectors);
    //フィルター設定を行う。
    const SetFilter = (e) => {
      const Value = !e.forEach
        ? Judey.$cls("FakeSelector_TextFilter").InpText()
        : e;

      const Filter = !e.forEach ? `${e.target.dataset.key}Filter` : "AttrFilter";
      const IgoreFilter = `${e?.target?.dataset?.ignorekey}Filter`;

      const AreaElem = Judey.$cls("FakeItemSelectorArea").Child("div", "", "FakeItem_OnceItems,Flex");
      const Items = Judey.$query(`.FakeItem_OnceItem:not(.${IgoreFilter})`);

      Items.EachElem(elem => AreaElem.AppendLast(elem));
      Judey.$cls("FakeItemSelectorArea_Group").Rem();

      Items.RemClass(`NoneText,${Filter}`);
      Judey.$query(".FakeItem_OnceItems").EachElem(elem => { if (elem.children.length === 0) elem.remove() });

      if (Value.length === 0) {
        if (Filter === "AttrFilter" && Judey.$cls("FakeSelector_TextFilter").InpText() !== "") {
          Judey.$cls("FakeSelector_TextFilter").Dispatch("input");
          return;
        }       
      };

      Items.EachElem(elem => {
        const Item = Judey.$elem(elem);

        const Ans = Filter === "AttrFilter"
          ? Value.every(value=>Item.$Nquery(`.FakeItem_OnceItem .Reference_Text[data-key="${value}"]`)?.Len() < 0) 
          : Item.$Nquery(".FakeItem_OnceItem .FakeItem_OnceItem_Info")?.Text()?.includes(Value) === false;
        
        if (Ans) Item.Class(`NoneText,${Filter}`);
      });
    }

    //プロパティ絞り込み
    FilterSelectorValue.Event("input", (e) => {
      FilterViewKeys.splice(0);

      const Value = e.currentTarget.value.toUpperCase().replaceAll("　", " ").split(" ");
      
      
      Value.forEach(value => {
        if (value === "" && Value.length !== 1) return;
        const IncludeATK = value.includes("ATK") && value.includes("MATK") === false;
        FilterViewKeys.push(...BaseStatus.Status_Words.Entries()
          .filter(item =>
            (item[0].toUpperCase().includes(value) || item[1].some(key => key.toUpperCase().includes(value))) &&
            (IncludeATK === false || (!item[0].toUpperCase().includes("MATK") && !item[1].some(key => key.toUpperCase().includes("MATK")))))
          .map(item => item[0]));
      });

      Judey.$cls("FakeSelector_Selector").Class("NoneText");
      FilterViewKeys.forEach(key => Judey.$query(`.FakeSelector_Selector[data-prop="${key}"]`).RemClass("NoneText"));
      SetFilter(FilterViewKeys);
    });
    Judey.$cls("FakeSelector_Selector").Event("click", e => {
      FilterSelectorValue.InpText(Judey.$query(`.FakeSelector_Selector[data-prop="${e.currentTarget.dataset.prop}"] p`).Text());
      FilterSelectorValue.Dispatch("input");
      Close_FilterSelectors();
    })
    Judey.$cls("FakeSelector_TextFilter").Event("input", SetFilter);

    //初期化
    Judey.$cls("FakeSelector_FilterResetBtn").Event("click", ResetRender); 
    
    //お気に入り設定
    if (FavoriteKeys.every(key => key.includes(Result.FavoriteKeyName) === false))
      Elem.$Nquery(".FakeSelector_ExtensionStarBtn[value='AllDelete']").Rem();

    //お気に入り設定の削除
    Judey.$query(".FakeSelector_ExtensionStarBtn[value='AllDelete']").Event('click', () => {
      MainRender.CheckAnswer("このカテゴリーのお気に入り情報を全て削除します。\n実行してよろしいですか?", true, Answer.YESNo, () => {
        const RemoveFavoriteKeys = [];
        Result.Item.forEach(group => {
          group.Item.forEach(item => RemoveFavoriteKeys.push(`${Result.FavoriteKeyName}${item.KeyNo}`));
        });

        MainMethod.SetFavoriteSelector([], RemoveFavoriteKeys);
        ResetRender();
        MainRender.CheckAnswer("カテゴリー内のお気に入り設定を削除しました。", false, Answer.OKOnly);
      });
    });

    //お気に入りの更新設定
    Judey.$query(".FakeSelector_ExtensionStarBtn[value='Change']").OnceEvent("click", (e) => {
      UpdateFavoriteMode = true;
      e.target.remove();
      const CompleteElement = Judey.$query(".FakeSelector_ExtensionStarBtn[value='Complete']");

      CompleteElement.RemClass("NoneText");
      Elem.Class("UpdateFavorite");

      MainRender.CheckAnswer(`
        <p>
          カテゴリー内のお気に入り(優先表示)設定を行います。<br>
          装備品選択で設定/設定解除を切替します。<br>
          <span style='background-color:var(--CriticalColor);color:var(--RedGrad3);'>お気に入り設定が有効な装備はこの色で表示されます。</span><br>
        </p>
        `
        , false, Answer.OKOnly);
      
      CompleteElement.OnceEvent("click", () => {
        const AppendKeys = [];
        const RemoveKeys = [];

        Judey.$cls("FakeItem_OnceItem").EachElem(elem => {
          const Key = `${Result.FavoriteKeyName}${elem.dataset.value}`;
          if (elem.classList.contains("FakeItem_FavoriteItem"))
            AppendKeys.push(Key);
          else
            RemoveKeys.push(Key);
        });

        MainMethod.SetFavoriteSelector(AppendKeys, RemoveKeys);
        ResetRender();
        MainRender.CheckAnswer("カテゴリー内のお気に入り設定を更新しました。", false, Answer.OKOnly);
      });

    })

  },
  /**
   * FakeSelectorの値を更新する。
   * @param {*} FakeClassName 
   * @returns 
   */
  FakePreviewValue: (FakeClassName) => {
    const SetValue = (ClassName, SelectorValue) => {
      const value = SelectorValue ?? Judey.query(`select[data-fakeclass='${ClassName}']`).value;
      const Text = Judey.query(`select[data-fakeclass='${ClassName}'] option[value='${value}']`).innerText;

      Judey.query(`.FakeSelector[data-fakeclass='${ClassName}'] span`).innerText = Text !== undefined ? Text : "-----";
    };
    
    if (FakeClassName?.forEach) return FakeClassName.forEach(Cls => SetValue(Cls));
    if (FakeClassName !== undefined) return SetValue(FakeClassName);
    Judey.$cls("FakeSelector").EachElem(elem => SetValue(elem.dataset.fakeclass, elem.value));
  },
  /**スキル特性の表示 */
  SkillEffect: (Refs) => {
    Data.OtherInfo.IsShowSkillEffect = "First";

    const RenderElem = Judey.$cls("ShowSkillEffectArea");
    RenderElem.RemChild();

    RenderElem.AppendLast(`<div class='SkillEffect'></div>`);

    //AppendSelectorButton
    const SelectorElem = Judey.$Element("div").Class("SkillEffectSelectors,Flex");
    const SkillData = Data.OtherInfo.Skill;
    SKILLKEYS.forEach((key,Index) => {
      if (SkillData[key]) SelectorElem.AppendLast(`
        <button type="button" class='SkillEffectSelector' value="${key}">${Index + 1}撃目</button>
      `);
    });
    RenderElem.AppendFirst(SelectorElem);
    
    const SelectorButtonElem = Judey.$cls("SkillEffectSelector");
    //ButtonEvent
    SelectorButtonElem.Event("click", e => MainRender.SkillEffectElement(Refs,e.target.value));

    Judey.$query(".SkillEffectSelector[value='First']").Dispatch("click");

    const ExpansionSkillDamegePointSelector = Judey.$cls("ExpantionSkillDamegePointSelector");
    if (Refs?.OtherInfo?.Skill?.Fourth) {
      ExpansionSkillDamegePointSelector.RemClass("NoneText");
    } else {
      ExpansionSkillDamegePointSelector.Class("NoneText");
    }
  },
  /**Targetに応じたスキル効果の情報を表示させる。 */
  SkillEffectElement: (Refs, Target = undefined) => {
    if (!Target) Target = Data.OtherInfo.IsShowSkillEffect;

    Judey.$cls("SkillEffectSelector").RemClass("SelectorEffect");
    Judey.$query(`.SkillEffectSelector[value="${Target}"]`).Class("SelectorEffect");

    Data.OtherInfo.IsShowSkillEffect = Target;
    const ShowEffectElem = Judey.$cls("SkillEffect").RemChild();
    const Result = MainMethod.GetSkillEffectData(Refs);

    ShowEffectElem.RemChild();
    if (Result === null) return;
    
    ShowEffectElem.AppendLast(`
      <div class='Flex'>
        <span class=''>${Result.IsMagicSkill ? "魔法" : "物理"}スキル</span>
        <span class=''>慣れ参照：${
          Result.ShowTorauma === Torauma.Physical ? "物理" :
          Result.ShowTorauma === Torauma.Magic ? "魔法" :
            "通常"
        }
        </span>
        <span class=''>慣れ付与：${
          Result.EnchantTorauma === Torauma.Physical ? "物理" :
          Result.EnchantTorauma === Torauma.Magic ? "魔法" :
          Result.EnchantTorauma === Torauma.No ? "---" :
          "通常"
        }
        </span>
      </div>
      <div class='Flex'>
        <span class=''>参照防御力：${Result.IsDef ? "DEF" : "MDEF"}</span>
        <span class=''>参照耐性：${Result.IsPhysical ? "物理耐性" : "魔法耐性"}</span>
      </div>
      <div class='Flex'>
        <span class=''>距離威力：${
          Result.Distance === DistanceOptionEnum.Enable ? "〇" :
          Result.Distance === DistanceOptionEnum.OnlyDistance ? "近距離〇" :
          Result.Distance === DistanceOptionEnum.OnlyLongDistance ? "遠距離〇" :
          Result.Distance === DistanceOptionEnum.AbsDistance ? "近距離強制" :
          Result.Distance === DistanceOptionEnum.AbsLongDistance ? "遠距離強制" 
          : "×"
        }
        </span>
        <span class=''>抜刀威力：${Result.IsSwordPower ? "〇" : "×"}</span>
        <span class=''>ロングレンジ：${Result.IsLongRange ? "〇" : "×"}</span>
      </div>
      <div class="Flex">
        <span>威力参照/攻撃力：${Result.PowerEffect}</span>
      </div>
      ${Result.Attribute !== SkillAttribute.Unkown
        ? `<p class=''>スキル固定属性：${SkillAttribute.Text(Result.Attribute)}</p>`
        : ""
      }
      ${Result.ATKPenetrate > 0
        ? `<p class=''>物理貫通ボーナス：+${Result.ATKPenetrate}%</p>`
        : ""
      }
      ${Result.MATKPenetrate > 0
        ? `<p class=''>魔法貫通ボーナス：+${Result.MATKPenetrate}%</p>`
        : ""
      }
      ${Result.IsAbsCrit === true
        ? `<p class=''>確定クリティカル</p>`
        : ""
      }
      ${Result.IsG_Hit === true
        ? `<p class=''>必中スキル</p>`
        : ""
      }
      ${Result.NoneCombo === true
        ? `<p class=''>コンボ無効</p>`
        : ""
      }
      ${Result.SpecialEffect !== undefined
      ? Result.SpecialEffect.split("\n").reduce((total,now) =>
          total + `<p class='SkillEffect_SpecialEffect'>${now}</p>`,"")
        : ""
      }
    `);
  },
  /**装備品プロパティ入力な必要なHtml要素を生成しJudeyElementとして返却する。 */
  EquipmentInputElements: (ClassName, UniqeID) => { 
    if (UniqeID !== undefined) Judey.$id(UniqeID).Rem();
    
    const TopElement = Judey.$Element("div", UniqeID, "Equipment_GroupBlocks,Flex");

    PropsAttributeElemens.forEach(Block => {
      const BlockElement = Judey.$Element("div", "", "Equipment_Block");
      BlockElement.AppendFirst(`
        <h3 class="Equipment_Block_ViewName">${Block.PriviewName}</h3>
        <div>
          <span class="EquipmentBlock_Header1">項目</span>
          <span class="EquipmentBlock_Header2">%</span>
          <span class="EquipmentBlock_Header2">+</span>
        </div>
      `);

      Block.Elements.forEach(Attributes => {
        const IsHide_BaseWeponATK = Attributes.PreviewAttributeName === "基礎武器ATK";
        const AttributesElement = Judey.$Element("div", "", "EquipmentBlock_Attributes");
        AttributesElement.AppendFirst(`
          <span
            class="EquipmentBlock_Attributes_ViewName"
            style="${IsHide_BaseWeponATK ? "color:var(--BlueGrad3);text-decoration:underline;" : ""}"
            data-key="${Attributes.Elements[1]?.AttributeKey ?? ""}" 
            >
            ${Attributes.PreviewAttributeName}
          </span>
        `);

        if (IsHide_BaseWeponATK) {
          AttributesElement.AppendFirst(`
            <style>.EquipmentBlock_Attributes_ViewName[data-key="${Attributes.Elements[1]?.AttributeKey}"]:hover{color:var(--RedGrad3)!important;} </style>
          `);
          AttributesElement.$Nquery("span").Event("click", async () => {
            await MainRender.AsyncAnswer(`
              このプロパティは裏設定値です。<br>
              設定することでメイン武器の基礎ATKの値を増減させることができます。<br>
              この増減は対象の装備品を適用している時のみ発生します。<br>
              ※武器ATK、(メイン/サブ武器ATK)とは別です。<br>
              <span style='color:var(--RedGrad3);'>トーラム本来のプロパティではありません!!</span>`
              , Answer.OKOnly);
          })
        }

        Attributes.Elements.forEach(Attribute => {
          const Element = Attribute === null
            ? `
              <input type="text" class="EquipmentBlock_Attributes_Stylenone" disabled>
              `
            : `
              <input type="number" style="${IsHide_BaseWeponATK ? "background-color :var(--OrangeGrad1)" : ""}"
                min="${Attribute.MinimumValue}"
                max="${Attribute.MaximumValue}"
                class="EquipmentBlock_Attributes_Value ${ClassName}"
                data-key="${Attribute.AttributeKey}" 
                data-kouho="${Attribute.PaletteValues}"
              >
              `;
          AttributesElement.AppendLast(Element);
        });
        BlockElement.AppendLast(AttributesElement);
      });
      TopElement.AppendLast(BlockElement);
    });

    return TopElement;
  },
  /**装備品内武器情報記録要素の表示非表示設定 */
  EquipmetIncludeProperty: () => {
    Judey.$cls("SetWeponAttributeSelectorElements").Class("NoneText");

    if (MainMethod.CheckEnableSetEquipmentWeponProperty()) {
      Judey.$query('.SetWeponAttributeSelectorElements[data-type="try"]').RemClass("NoneText");
    } else {
      Judey.$query('.SetWeponAttributeSelectorElements[data-type="default"]').RemClass("NoneText");
    }
  },
  /** */
  StatusInputProperty: () => {
    const StatusText = ["Level", ...STATUS];
    for (let value of StatusText) {
      Judey.id(`Status-${value}`).value = Data["Status"][value];
    }
  },
  /**有効なステータスポイントの残量表示を更新する。 */
  EnableStatusPoint: () => {
    const PointElement = Judey.$cls("StatusSelector_PointInfo");
    const StatusPoint = Data.Method.GetStatusPoint(Data);

    PointElement.Text(StatusPoint);

    if (StatusPoint > 0)
      PointElement.Style("color:var(--BlueGrad3);")
    else
      PointElement.Style("color:var(--RedGrad3);");
  },
  /**基本ステータス表示変更用ボタン要素 */
  StatusPreviewSelector: (e) => {
    e.stopPropagation();

    Judey.$cls("PreviewStatusSelectorBtn").Rem();

    const Element = Judey.$cls("PreviewStatusSelector");
    Element.AppendLast(`
        <button type="button" class="PreviewStatusSelectorBtn" value="Base">デフォルト</button>
        <button type="button" class="PreviewStatusSelectorBtn" value="Physical">物理</button>
        <button type="button" class="PreviewStatusSelectorBtn" value="Magic">魔法</button>
        <button type="button" class="PreviewStatusSelectorBtn" value="Mix">物理/魔法</button>
        <button type="button" class="PreviewStatusSelectorBtn" value="Resist">壁ステ</button>
        <button type="button" class="PreviewStatusSelectorBtn" value="HydeStatus">隠しステ</button>
    `);

    const EndFlow = (e) => {
      e.stopPropagation();

      Judey.$cls("PreviewStatusSelectorBtn").Rem();
      Judey.$cls("PreviewStatusSelector").OnceEvent("click", MainRender.StatusPreviewSelector);
    };

    Judey.$tag("body").OnceEvent("click", e => {
      if (e.target.closest(".PreviewStatusSelectorBtn")) return;
      EndFlow(e);
    });

    Judey.$cls("PreviewStatusSelectorBtn").OnceEvent("click", e => {
      MainRender.StatusPreview(e.target.value);
      EndFlow(e);
    });
  },
  /**基本ステータス表示 */
  StatusPreview: async (PreviewType) => {
    const Type = (PreviewType !== undefined ? PreviewType : window?.localStorage?.getItem("Toram_PreviewSelector")) ?? "Base";
    
    const View_HPMP = [
      [["TotalStatus-HP", "HP"], ["TotalStatus-MP", "MP"]]
    ];
    const View_ATK = [
      [["TotalStatus-ATK", "ATK"], ["TotalStatus-BaseATK", "基礎ATK"]],
      [["TotalStatus-DSATK", "サブATK"], ["TotalStatus-BaseDSATK", "サブ基礎ATK"]],
      [["TotalStatus-AllATK", "総ATK"],["TotalStatus-DBringer","BringerA/M"]]
    ];
    const View_MATK = [
      [["TotalStatus-MATK", "MATK"], ["TotalStatus-BaseMATK", "基礎MATK"]]
    ];
    const View_HBMATK = [
      [["TotalStatus-HBMATK","槍MATK"],["TotalStatus-BaseHBMATK","槍基礎MATK"]]
    ]
    const View_Stable = [
      [["TotalStatus-Stable", "安定率(%)"], ["TotalStatus-SubStable", "サブ安定率(%)"]]
    ]
    const View_Critical = [
      [["TotalStatus-Critical", "ｸﾘﾃｨｶﾙ率"], ["TotalStatus-CriticalDamege", "ｸﾘﾃｨｶﾙﾀﾞﾒｰｼﾞ"]],
    ];
    const View_CriticalForMagic = [
      [["TotalStatus-CriticalForMagic", "魔法ｸﾘﾃｨｶﾙ率"], ["TotalStatus-CriticalDamegeForMagic", "魔法ｸﾘﾃｨｶﾙﾀﾞﾒｰｼﾞ"]],
    ];
    const View_Distance = [
      [["All-Distance", "近距離の威力(%)"], ["All-LongDistance", "遠距離の威力(%)"]],
    ]
    const View_Penetrate = [
      [["All-ATKPenetrate","物理貫通(%)"],["All-MATKPenetrate","魔法貫通(%)"]]
    ];
    const View_Attribute = [
      [["TotalStatus-AllAttribute", "総属性有利(%)"], ["TotalStatus-Attribute", "属性覚醒有利(%)"]],
    ];
    const View_Sword = [
      [["All-SwordPower_Rate", "抜刀威力(%)"], ["All-SwordPower", "抜刀威力+"]],
    ];
    const View_Resist = [
      [["TotalStatus-Resist_Physical", "物理耐性(%)"], ["TotalStatus-Resist_Magic", "魔法耐性(%)"]],
      [["TotalStatus-Resist_Health", "異常耐性(%)"], ["TotalStatus-SPD", "行動速度(%)"]],
    ];
    const View_Special = [
      [["TotalStatus-Special_DefBreak", "防御崩し(%)"], ["TotalStatus-Special_Future", "先読み(%)"]],
    ];
    const View_Status1 = [
      [["TotalStatus-ASPD", "ASPD"], ["TotalStatus-CSPD", "CSPD"]],
      [["TotalStatus-HIT", "HIT"], ["TotalStatus-FREE", "FLEE"]],
    ];
    const View_Barrier = [
      [["All-Barrier_Physical", "物理バリア"], ["All-Barrier_Magic", "魔法バリア"]],
      [["All-Barrier_Per", "割合バリア(%)"], ["All-Barrier_Repair", "バリア速度(%)"]],
    ];
    const View_Guard = [
      [["All-Guard_Power", "Guard力(%)"], ["All-Guard_Repair", "Guard回復(%)"]],
    ];
    const View_HateDark = [
      [["TotalStatus-Hate", "ヘイト(%)"], ["All-Resist_Darkness", "闇耐性(%)"]]
    ];
    const View_SPD = [
      [["TotalStatus-SPD", "行動速度(%)"]],
    ];
    const View_Critical_Stable = [
      [["TotalStatus-Critical", "ｸﾘﾃｨｶﾙ率"], ["TotalStatus-Stable", "安定率(%)"]]
    ];

    const Result = [];
    Result.push(...View_HPMP);
    if (Type === "Base" || Type === "Physical" || Type === "Mix") Result.push(...View_ATK);
    if (Type === "Base" || Type === "Magic" || Type === "Mix") Result.push(...View_MATK);
    if (Type === "Mix") Result.push(...View_HBMATK);
    if (Type !== "Resist") Result.push(...View_Stable);
    if (Type === "Base" || Type === "Physical" || Type === "Mix") Result.push(...View_Critical);
    if (Type === "Base" || Type === "Magic" || Type === "Mix") Result.push(...View_CriticalForMagic);
    if (Type === "Base") Result.push(...View_Attribute);
    if (Type === "Resist" || Type === "Base") Result.push(...View_Status1);
    if (Type === "Resist") Result.push(...View_Critical_Stable);
    if (Type !== "Resist" && Type !== "Base") {
      Result.push(...View_Attribute);
      Result.push(...View_Distance);
      Result.push(...View_Penetrate);
      Result.push(...View_Sword);
      
    } else {
      Result.push(...View_Resist);
    };
    Result.push(...View_Special);
    if (Type === "Resist") {
      Result.push(...View_Barrier);
      Result.push(...View_Guard);
      Result.push(...View_HateDark);
    }
    if (Type === "Physical" || Type === "Magic" || Type === "Mix") Result.push(...[...View_SPD, ...View_Status1]);
    
    //HydeStatusの場合は固有設定
    if (Type === "HydeStatus") {
      Result.splice(0);
      Result.push(...[
        [["TotalStatus-BaseATK", "基礎ATK"], ["TotalStatus-BaseDSATK", "サブ基礎ATK"]],
        [["TotalStatus-ATK", "ATK"], ["TotalStatus-DSATK", "サブATK"]],
        [["TotalStatus-AllATK", "総ATK"], ["TotalStatus-DBringer", "BringerA/M"]],
        [["TotalStatus-BaseMATK", "基礎MATK"], ["TotalStatus-BaseHBMATK", "基礎槍MATK"]],
        [["TotalStatus-WMATK", "猫MATK"], ["TotalStatus-HBMATK", "槍MATK"]],
        [["TotalStatus-MATK", "MATK"]],
        [["", "補正前"], ["", "補正後"]],
        [["TotalStatus-TStable", "安定率"], ["TotalStatus-Stable", ""]],
        [["TotalStatus-TSubStable", "サブ安定率"], ["TotalStatus-SubStable", ""]],
        [["TotalStatus-TCriticalDamege", "ｸﾘﾃｨｶﾙﾀﾞﾒｰｼﾞ"], ["TotalStatus-CriticalDamege", ""]],
        [["TotalStatus-TCriticalDamegeForMagic", "魔法ｸﾘﾃｨｶﾙﾀﾞﾒｰｼﾞ"], ["TotalStatus-CriticalDamegeForMagic", ""]],
        [["TotalStatus-Resist_TPhysical", "物理耐性"], ["TotalStatus-Resist_Physical", ""]],
        [["TotalStatus-Resist_TMagic", "魔法耐性"], ["TotalStatus-Resist_Magic", ""]],
        [["TotalStatus-Special_TDefBreak", "防御崩し"], ["TotalStatus-Special_DefBreak", ""]],
        [["TotalStatus-Special_TFuture", "先読み"], ["TotalStatus-Special_Future", ""]],
      ]);
    }

    Judey.$cls("PreviewStatusElements").Rem();
    const Element = Judey.$Element("div", "", "PreviewStatusElements");

    Result.forEach(LineValue => {
      const LineElement = Judey.$Element("div").Class("StatusSet,Flex");
      
      LineValue.forEach(Values => {
        LineElement.AppendLast(`
          <span class="StatusText">${Values[1]}</span>
          <span data-id="${Values[0]}" class="StatusValue"></span>
        `);  
      });

      Element.AppendLast(LineElement);
    });

    Judey.$id("StatusSet_Status").AppendLast(Element);

    const SelectorText = Type === "Base" ? "ベース"
      : Type === "Physical" ? "物理"
        : Type === "Magic" ? "魔法"
          : Type === "Mix" ? "物理/魔法"
            : Type === "Resist" ? "壁"
              : Type === "HydeStatus" ? "+隠しステ"
              : "";
    Judey.$cls("PreviewStatusSelector").Text(SelectorText);
    if (PreviewType !== undefined) MainMethod.ShowStatusAllPreview();

    if (window?.localStorage) window.localStorage.setItem("Toram_PreviewSelector", Type);
    
    if (PreviewType !== undefined) {
      const res = await import(Js_Archive);
      res.AllCapturedSend();
    }
  },
  UpperStatusPreview: () => {
    const Element = Judey.$Element("div", "", "Reference_Back");
    Element
      .Child("div").Class("UpperStatusArea")
      .Child("div");
    
    const ListElement = Judey.$Element("ul", "", "UpperStatusList,Flex,List");
    const TableElement = Judey.$Element("div", "", "UpperStatus_Tables");
    [
      ["ATK", "ATK"],
      ["MATK", "MATK"],
      ["ASPD", "ASPD"],
      ["安定率", "Stable"],
      ["その他", "Other"]
    ].forEach(elem => {
      const SelectorClass = elem[0] === "ATK" ? "UpperStatusSelected" : "";
      ListElement.AppendLast(`
        <li class="UpperStatusList_Item ${SelectorClass}" data-key="${elem[1]}">${elem[0]}</li>
      `);
    });

    const Wepons = ["BH", "OH", "TH", "DS", "MA", "HB", "KTN", "BW", "BG", "SF", "MD"];
    //ATK
    const Table_ATK = Judey.$Element("div", "", "UpperStatus_TableArea");
    Table_ATK.Attr({ "data-preview":"ATK"});
    Table_ATK.AppendLast(`
      <p>各ステータスが1増加したときの基礎ATK上昇値<br>※双剣の場合はM(メイン)、S(サブ)の上昇値</p>
      <table class="UpperStatus_Table">
      <thead>
        <tr>
          <th>武器種</th>
          <th>STR</th>
          <th>DEX</th>
          <th>AGI</th>
          <th>INT</th>
        </tr>
      </thead>
      <tbody>
        ${(() => {
      let text = "";
      Wepons.forEach(wep => {
        const WeponAttr = Data.Wepon[wep];
        const SubWeponAttr = Data.SubWepon.OH;
        const ATK = WeponAttr.ATK;
        const SubATK = SubWeponAttr.ATK;

        if (wep !== "DS") {
          text += `
          <tr data-wepon="${wep}">
            <td>${WeponAttr.Name}</td>
            <td>${(ATK?.STR ? ATK.STR : "-")}</td>
            <td>${(ATK?.DEX ? ATK.DEX : "-")}</td>
            <td>${(ATK?.AGI ? ATK.AGI : "-")}</td>
            <td>${(ATK?.INT ? ATK.INT : "-")}</td>
          </tr>
        `;         
        } else {
          text += `
          <tr data-wepon="DS">
            <td>M:双剣</td>
            <td>${(ATK?.STR ? ATK.STR : "-")}</td>
            <td>${(ATK?.DEX ? ATK.DEX : "-")}</td>
            <td>${(ATK?.AGI ? ATK.AGI : "-")}</td>
            <td>${(ATK?.INT ? ATK.INT : "-")}</td>
          </tr>
          <tr data-wepon="DS">
            <td>S:双剣</td>
            <td>${(SubATK?.STR ? SubATK.STR : "-")}</td>
            <td>${(SubATK?.DEX ? SubATK.DEX : "-")}</td>
            <td>${(SubATK?.AGI ? SubATK.AGI : "-")}</td>
            <td>${(SubATK?.INT ? SubATK.INT : "-")}</td>
          </tr>
        `;
        }
      });

      return text;
        })()}
        </tbody>
      </table>
    `);
    //MATK
    const Table_MATK = Judey.$Element("div", "", "UpperStatus_TableArea,NoneText");
    Table_MATK.Attr({ "data-preview":"MATK"});
    Table_MATK.AppendLast(`
    <p>各ステータスが1増加したときの基礎MATK上昇値</p>
    <table class="UpperStatus_Table">
      <thead>
        <tr>
          <th>武器種</th>
          <th>DEX</th>
          <th>AGI</th>
          <th>INT</th>
        </tr>
      </thead>
      <tbody>
        ${(() => {
      let text = "";
      Wepons.forEach(wep => {
        const WeponAttr = Data.Wepon[wep];
        const MATK = WeponAttr.MATK;

        text += `
          <tr data-wepon="${wep}">
            <td>${WeponAttr.Name}</td>
            <td>${(MATK?.DEX ? MATK.DEX : "-")}</td>
            <td>${(MATK?.AGI ? MATK.AGI : "-")}</td>
            <td>${(MATK?.INT ? MATK.INT : "-")}</td>
          </tr>
        `;
      });

      return text;
        })()}
      </tbody>
    </table>
    `);
    //ASPD
    const Table_ASPD = Judey.$Element("div", "", "UpperStatus_TableArea,NoneText");
    Table_ASPD.Attr({ "data-preview":"ASPD"});
    Table_ASPD.AppendLast(`
    <p>各ステータスが1増加したときの基礎ASPD上昇値</p>
    <table class="UpperStatus_Table">
      <thead>
        <tr>
          <th>武器種</th>
          <th>ボーナス</th>
          <th>STR</th>
          <th>DEX</th>
          <th>AGI</th>
          <th>INT</th>
        </tr>
      </thead>
      <tbody>
        ${(() => {
      let text = "";
      Wepons.forEach(wep => {
        const WeponAttr = Data.Wepon[wep];
        const ASPD = WeponAttr.ASPD;

        text += `
          <tr data-wepon="${wep}">
            <td>${WeponAttr.Name}</td>
            <td>${(ASPD?.Base ? ASPD.Base.toLocaleString() : "-")}</td>
            <td>${(ASPD?.STR ? ASPD.STR : "-")}</td>
            <td>${(ASPD?.DEX ? ASPD.DEX : "-")}</td>
            <td>${(ASPD?.AGI ? ASPD.AGI : "-")}</td>
            <td>${(ASPD?.INT ? ASPD.INT : "-")}</td>
          </tr>
        `;
      });

      return text;
        })()}
      </tbody>
    </table>
    `);  
    //Stable
    const Table_Stable = Judey.$Element("div", "", "UpperStatus_TableArea,NoneText");
    Table_Stable.Attr({ "data-preview":"Stable"});
    Table_Stable.AppendLast(`
    <p>各ステータスが1増加したときの安定率上昇値<br>※双剣の場合はM(メイン)、S(サブ)の上昇値<br>※合計値の小数点以下は切り捨てされます。</p>
    <table class="UpperStatus_Table">
      <thead>
        <tr>
          <th>武器種</th>
          <th>STR</th>
          <th>DEX</th>
          <th>AGI</th>
        </tr>
      </thead>
      <tbody>
        ${(() => {
      let text = "";
      Wepons.forEach(wep => {
        const WeponAttr = Data.Wepon[wep];
        const SubWeponAttr = Data.SubWepon.OH;
        const Stable = WeponAttr.Stable;
        const SubStable = SubWeponAttr.Stable;

        if (wep !== "DS") {
          text += `
          <tr data-wepon="${wep}">
            <td>${WeponAttr.Name}</td>
            <td>${(Stable?.STR ? Stable.STR : "-")}</td>
            <td>${(Stable?.DEX ? Stable.DEX : "-")}</td>
            <td>${(Stable?.AGI ? Stable.AGI : "-")}</td>
          </tr>
        `;         
        } else {
          text += `
          <tr data-wepon="DS">
            <td>M:双剣</td>
            <td>${(Stable?.STR ? Stable.STR : "-")}</td>
            <td>${(Stable?.DEX ? Stable.DEX : "-")}</td>
            <td>${(Stable?.AGI ? Stable.AGI : "-")}</td>
          </tr>
          <tr data-wepon="DS">
            <td>S:双剣</td>
            <td>${(SubStable?.STR ? SubStable.STR : "-")}</td>
            <td>${(SubStable?.DEX ? SubStable.DEX : "-")}</td>
            <td>${(SubStable?.AGI ? SubStable.AGI : "-")}</td>
          </tr>
        `;
        }
      });

      return text;
        })()}
      </tbody>
    </table>
    `);  

    //Other
    const Area_Other = Judey.$Element("div", "", "UpperStatus_TableArea,NoneText");
    Area_Other.Attr({ "data-preview": "Other" });
    Area_Other.AppendLast(`
        <h3>基礎CSPD</h3>
        <p>◎自Lv + (補正後DEX × 2.94) + (補正後AGI × 1.16)</p>
        <h3>基礎クリティカル率</h3>
        <p>◎25 + CRT ÷ 3.4<br>※小数点以下は切り捨てします。</p>
        <h3>基礎クリティカルダメージ</h3>
        <p>◎150 + <span style="color:var(--RedGrad3);">①(補正後STR ÷ 5)</span> or <span style="color:var(--BlueGrad3);">②((補正後STR + 補正後AGI) ÷ 10)</span>
          <br>※効果の高いほうを適用します。
          <br>※小数点以下は切り捨てします。
        </p>
        <h3>異常耐性</h3>
        <p>◎MEN ÷ 3.4<br>※小数点以下は切り捨てします。</p>
        <h3>命中率</h3>
        <p>◎100 + (自HIT - 敵FLEE(必要HIT)) ÷ 3 + スキルの実消費MP ÷ 10
          <br>※最低値は0%、最高値は100%です。
          <br>※小数点以下は切り捨てします。
        </p>
    `);
    
    TableElement.AppendLast(Table_ATK);
    TableElement.AppendLast(Table_MATK);
    TableElement.AppendLast(Table_ASPD);
    TableElement.AppendLast(Table_Stable);
    TableElement.AppendLast(Area_Other);

    Element.AppendLast(ListElement);
    Element.AppendLast(TableElement);
    Element.Breaker();
    Element.AppendLast(Judey.$Element("p", "", "UpperStatusList_Exit").Text("閉じる"));
    Element.Breaker();
    Judey.$tag("body").AppendFirst(Element);

    Judey.$query(`.UpperStatus_Table tr[data-wepon="${Data.OtherInfo.Wepon}"]`).Class("SelectedWepon");

    Judey.$cls("UpperStatusList_Item").Event("click", e => {
      Judey.$cls("UpperStatusList_Item").RemClass("NoneText,UpperStatusSelected");
      Judey.$cls("UpperStatus_TableArea").Class("NoneText");

      e.target.classList.add("UpperStatusSelected");
      Judey.$query(`.UpperStatus_TableArea[data-preview="${e.target.dataset.key}"]`).RemClass("NoneText");
    });

    //終了イベント定義
    Judey.$cls("UpperStatusArea").Event("click", e => e.stopPropagation());
    Judey.$query(".Reference_Back,.UpperStatusList_Exit")
      .Event("click", () => Element.Rem());
  },
  /**自由入力欄4-7非表示設定 */
  HideEquipment: () => {
    const value = MainMethod.GetHideEquipment() == 0;
    const target = Judey.$query("#Addition_OtherInfo-Other4,#Addition_OtherInfo-Other5,#Addition_OtherInfo-Other6,#Addition_OtherInfo-Other7")
    
    if (value)
      target.RemClass("NoneText");
    else
      target.Class("NoneText");
  },

  EquipmentTabSelecter: async ()=>{
    const result = await MainRender.AsyncInputForm("タブ名称を入力して下さい。\n空欄の場合はデフォルトの名称を適用します。", null, null,
      MainMethod.GetEquipmentTabName(),
      MainMethod.GetEquipmentTabName(true),
    );

    if (result === null) return;

    await MainMethod.SetEquipmentTabName(result);
    MainRender.EquipmentTabName();
  },

  /**装備品タブ名称を適用する。 */
  EquipmentTabName: () => {
    const TabTarget = [
      "Wepon",
      "SubWepon",
      "Armor",
      "Addition",
      "Option",
      "Enchant",
      "Enchant2",
      "Enchant3",
      "Other",
      "Other2",
      "Other3",
      "Other4",
      "Other5",
      "Other6",
      "Other7",
    ];

    TabTarget.forEach(tab => {
      Judey.$query(`#Addition_OtherInfo-${tab} > span`).Text(MainMethod.GetEquipmentTabName(false, tab));
    });
  }
}

let LastCalc = null;
//再計算と表示
const BaseCalculation = (Refs = null) => {
  const SpecialStatus = new EquipmentExtension(Refs ?? Data);
  SpecialStatus.LimitedModifyStatus(Refs ?? Data, (RefData) => {
    MainMethod.CheckActiveSkills(RefData);
    MainMethod.CheckActiveSkills(RefData);
    MainMethod.AllCalculation(RefData);
    MainMethod.AllDamege(RefData);
    MainMethod.SetRateSelectorText();
    MainMethod.ShowExpectedPreview();
    MainMethod.ShowSkillValues();
    MainMethod.ShowStatusAllPreview();
    MainRender.CrystalReference();
    MainRender.SkillEffectElement(RefData, RefData.OtherInfo.IsShowSkillEffect);
  });

};

document.addEventListener("DOMContentLoaded", async () => {
  try {
    Data.Selection = SelectionData;
    MainMethod.SetNewLocalCustom();
    MainMethod.SetInitEnemyExtension();
    MainMethod.SetSkillReference();
  
    //PropertyKeys
    PropsAttributeElemens.forEach(Block => {
      Block.Elements.forEach(Attrs => {
        Attrs.Elements.forEach(attribute => {
          if (attribute !== null)
            PropsAttributeKeyBase[attribute.AttributeKey] = attribute;  
        });
      });
    });
  } catch (e) {
    ErrDescriptions.push("セットアップエラー：" + e.message);
  }

  //Archive
  const res = await import(Js_Archive);

  try {
    if (res.IsArchive === false)MainMethod.SetBase();

    MainRender.Crystal();
    MainRender.ItemBuff();
    MainRender.Cooking();
    MainRender.OtherEquipmentEffect();

    //装備品入力要素生成
    Judey.$cls("Equipment_Template").AppendAfter(
      MainRender.EquipmentInputElements("Equipment_Values", "Equipment_ValueElements")
    );

    await res.Start();    

    if (ErrDescriptions.length > 0) throw new Error("初期構成エラー");
  } catch (e) {
    const value = await MainRender.AsyncAnswer("初期セットアップに失敗しています。\nいずれかの方法で回復を試みます。\n1.直近の入力データのみを削除\n2.カスタム装備品データを全て削除\n3.全ての構成データを削除\n※1でダメであれば、2を実施、2でもダメであれば3を実施してください。\n※3でも解決しない場合はx(@azukitrm)にお問い合わせください。", Answer.Selectors);
    try {
      if (value === AnswerResult.Select1) {
        res.DataReset(true);
      }
      else if (value === AnswerResult.Select2) {
        localStorage.removeItem("Toram_LocalItems");
      }
      else if (value == AnswerResult.Select3) {
        localStorage.clear();
      }
    } catch (error) {
      
    } finally {
      location.reload();
    }
  }

  //LocalSave
  const LocalSave = await import(Js_LocalSave);
  if (LocalSave.HasExtensionComponents() === false) {
    LocalSave.CreateComponents();
  }
  LocalSave.DeleteTemplateData();

  if (MainMethod.CheckAdditions() === false) MainMethod.SetBase();

  MainRender.PartialCrystal();
  MainRender.EquipmetIncludeProperty();
  MainRender.SkillEffect(Data);
  MainRender.StatusInputProperty();
  MainRender.EnableStatusPoint();
  MainRender.EquipmentTabName();
  MainRender.HideEquipment();

  MainRender.StatusPreview();
  BaseCalculation();//初期装備特性反映漏れの大雑把な対策。

  MainMethod.SetFakeSelectorRanksViewData();

  /** clickとchange動作フラグ */
  let IsBeforeChange = true;

  const EventMethod = {
    ShowPreview_Damege__Status:() => {
      const Preview = Judey.$cls("Preview");
      Preview.Event("click", (e) => {
        const Elem = e.currentTarget; 

        //自展開時
        if (Elem.classList.contains("ShowPreview")) {
          Elem.classList.remove("ShowPreview");
          Judey.$cls(`Preview_${Elem.dataset.value}`).Class("NoneText");             
          
          return;
        }

        if (window.innerWidth < 900) {
          Preview.RemClass("ShowPreview");
          Judey.$cls("PreviewWindows").Class("NoneText");
        }

        Elem.classList.add("ShowPreview");
        Judey.$cls(`Preview_${Elem.dataset.value}`).RemClass("NoneText");
      });

      Judey.$query("#OptionItems_opt1 .OptionSelector_Text").Event("click", (e) => {
        Judey.$cls("OptionInfoChildText").Class("NoneText")
          .RemClass("OptionInfoChildTexEffect");  
        
        if (e.target.style.color === "red") {
          e.target.removeAttribute("style");
          return;
        }  
        
        Judey.$query("#OptionItems_opt1 .OptionSelector_Text").Style("");
        e.target.style.color = "red";
        const Target = e.target.dataset.key;    
        
        const ShowTarget = Judey.$query(`.OptionInfoChildText[data-key="${Target}"]`);
        ShowTarget.RemClass("NoneText");  
        ShowTarget.Class("OptionInfoChildTexEffect");
      })
    },
    PreviewDamege_Events: () => {
      //ダメージキャプチャー
      Judey.$id("CapcherTitle").Event("click", () => {
        MainMethod.SetComparisonDatas();
        const range = ["Min", "Max", "Ave"];
        for (let target of range) {
          Judey.id(`Damege_${target}_Archive`).innerText =
            Judey.id(`Damege_${target}`).innerText
          Judey.id(`Damege_${target}_Stable_Archive`).innerText =
            Judey.id(`Damege_${target}_Stable`).innerText
        }
      })

      //ダメージ比較UI展開
      Judey.$id("SetComparison").Event("click", MainRender.EquipmentComparison);

      //ダメージ比較の情報展開
      Judey.$id("ComparisonResultParamCheckBtn").Event('click', MainRender.ComparisonInfo);

      //オプションの表示選択
      const OptionList = Judey.$cls("OptionSelector");
      OptionList.Event("click", (e) => {
        Judey.$cls("OptionItems").Class("NoneText");

        if (e.target.classList.contains("OptActive")) { 
          OptionList.RemClass("OptActive");
          return;
        } 
        OptionList.RemClass("OptActive");
        
        const Elem = e.target;
        const target = Elem.dataset.value;
        Judey.$elem(Elem).Class("OptActive");
        Judey.$id(`OptionItems_${target}`).RemClass("NoneText");
      })      

      //慣れ倍率(Range)
      Judey.$id("ToraumaRate").Event("input", (e) => {
        MainMethod.SwitchToraumaRate(e.target.value);
      })

      //慣れ倍率(Number)
      Judey.$cls("ToraumaNum").Event("change", (e) => {
        MainMethod.SwitchToraumaRate(
          MainMethod.InputValueCheck(e.target.value, 100, 50, 250));
      })

      //ダメージ系の変更イベント
      Judey.$cls("InputOption").Event("change", (e) => {
        const [root,value] = e.target.value.split("-");
        //true or false　以外⇒そのままの値を反映
        Data.OtherInfo[root] =
          (value === "On") ? true :
            (value === "Off") ? false : value;

        BaseCalculation();
      });     
      
      //倍率可変系統の変更method
      const ChargeChange = (Elem) => {
        const Skill = Data.OtherInfo.Skill;
        if (!Skill?.Charge) {
          Data.OtherInfo.ChargeLv = false;
          return;
        } 

        const ValueRange = Skill.Charge;
        const Result = MainMethod.InputValueCheck(Elem.value, ValueRange.DefaultLv, ValueRange.MinLv, ValueRange.MaxLv);

        Data.OtherInfo.ChargeLv = Result;
        Elem.value = Result;
        
        new EquipmentExtension(Data).LimitedModifyStatus(Data,(RefData) => {
            MainMethod.AllDamege(RefData);
            MainMethod.ShowSkillValues();
          } 
        );
      }
      //倍率可変系統の変更イベント
      Judey.$cls('ChargeInfo_Input').Event("click", (e) => {
        if (IsBeforeChange) ChargeChange(e.target);
        IsBeforeChange = true;
      }).Event("change", (e) => {
        ChargeChange(e.target);
        IsBeforeChange = false;
      })

      //パッシブ/ブレイブ倍率変更
      Judey.$cls('SelectorRate').Event("change", (e) => {
        const Elem = e.target;
        const IsShow = Elem.value == 1;
        const TargetKey = Elem.dataset.key;

        Judey.$query(`.OptionSelector_InfoText[data-key="${TargetKey}"]`).Toggle("NoneText");
        
        const TrueBtnElem = Judey.$query(`label[data-key="${TargetKey}"][data-value="1"]`)
        const InputRateElem = Judey.$query(`.DamegeRateSelectorArea[data-key="${TargetKey}"]`);

        if (IsShow === false) {
          TrueBtnElem.RemClass("NoneText");
          InputRateElem.Class("NoneText");
          
          Data.NotSavedInfo[TargetKey] = false;
          Judey.$query(`.SelectorRateInput[data-info="${TargetKey}"]`).InpText(0);
          BaseCalculation();
        } else {
          TrueBtnElem.Class("NoneText");
          InputRateElem.RemClass("NoneText");
        }
      })

      //パッシブ/ブレイブ数値変更
      Judey.$cls('SelectorRateInput').Event("change", (e) => {
        const Elem = e.target;
        const TargetKey = Elem.dataset.info;
        const Result = MainMethod.InputValueCheck(Elem.value, 0, -1e3, 1e3);
        
        Elem.value = Result;
        Data.NotSavedInfo[TargetKey] = 1 + Result / 100;
        BaseCalculation();
      })
    },
    PreviewDamege_ExpectedEvents: () => {
      //期待値選択
      Judey.$cls("ExpectedOption").Event("click", (e) => {
        const value = e.target.value;

        if (value.includes("IsExpectedShow")) {
          Data.OtherInfo.IsExpectedShow = true;
          Judey.$cls("DamegeTD").Class("NoneText");
          Judey.$cls("ExpectedDameges").RemClass("NoneText");
          BaseCalculation();
        } else {
          Data.OtherInfo.IsExpectedShow = false;
          Judey.$cls("DamegeTD").RemClass("NoneText");
          Judey.$cls("ExpectedDameges").Class("NoneText");      
        }
      })  
      
      //期待値項目選択
      const ListItems = Judey.$cls("ExpectedListItem");    
      ListItems.Event("click", (e) => {
        const Elem = e.target;

        if (Elem.dataset.value === "comparsion") {
          Judey.$id("SetComparison").Dispatch("click");
          return;
        }
        if (Elem.classList.contains("ExpectedActive")) {
          Judey.$query(`.ExpectedItem[data-value="${Elem.dataset.value}"]`)
            .Class("NoneText");
          ListItems.RemClass("ExpectedActive");
          return;
        }

        ListItems.RemClass("ExpectedActive");
        Elem.classList.add("ExpectedActive");

        const value = Elem.dataset.value;
        Judey.$cls("ExpectedItem").Class("NoneText");
        Judey.$query(`.ExpectedItem[data-value="${value}"]`).RemClass("NoneText");
      })   
            
      //アーカイブ記録
      Judey.$cls("ExpectedArchive").Event("click", () => {
        ["Rate", "Value", "Stable"].forEach(Key => {
          const Value = Judey.cls(`Expected_${Key}`).innerText;
          Judey.$cls(`Expected_${Key}_Archive`).Text(Value);
        })
      })      
    },
    PreviewStatus_Events: () => {
      Judey.$cls("ShowStatusSelector").Event("click", (e) => {
        const SelectorsID = ["Status", "SelectionStatus", "Attribute1", "Attribute2", "Attribute3"];

        const Elem = e.target;
        const IndexValue = Elem.dataset.value;
        
        //表示/非表示
        Elem.classList.toggle("ShowStatus");
        Judey.$id(`StatusSet_${SelectorsID[IndexValue]}`).Toggle("NoneText");
        
        //隠し設定：ウィンドウ高さ
        const Selector = Judey.$cls("ShowStatusSelector");
        const HeightSelector = Judey.$cls("HeightSelectorSet");
        
        if (Selector.EachElem((elem) => {
          if (elem.classList.contains("ShowStatus")) {
            HeightSelector.Class("NoneText");
            return "Exit";
          };
        }) === false) return

        HeightSelector.RemClass("NoneText");
      })  

      //ステータス表示の高さ調整
      Judey.$id("HeightSelector").Event("change", (e) => {
        const value = e.target.value;
        const Height = [400, 300, 200, 100];
        Judey.$cls("Preview_Status").Style(`max-height:${Height[value]}px;`);
      })  

      //ステータス表示の高さ調整(フリック)
      const Moves = (_, moveX) => {
        const StatusElem = Judey.$cls("Preview_Status");
        const NowH = StatusElem.Elem().clientHeight - (moveX / 4);
        
        StatusElem.Style(`height:${NowH > 200 ? NowH : 200}px;`);
      }
      Judey.$cls("PreviewStatus_Text")
        .FlickMove(Moves, 30, 0, 2e3)
        .FlickMove(Moves, -30, 0, 2e3);
    },
    InputStatus__Wepons_Events: () => {
      //ステータス入力
      Judey.$cls("StatusSelector").Event("click", (e) => {
        const Elem = e.target;
        if (IsBeforeChange) {
          InsertValue_Info(Elem.id, 1); 
          Elem.value = ""
        }
        IsBeforeChange = true;
      }).Event("change", (e) => {
        const Elem = e.target;
        const Target = Elem.id.split("-")[1];

        const MaxValue = (STATUS_NONAFTER.find(v => v === Target) || Target === "Level")
          ? 510 : 255;
        const Result = MainMethod.InputValueCheck(Elem.value, 1, 1, MaxValue);

        InsertValue_Info(Elem.id, Result);
        Elem.value = Result;
        
        IsBeforeChange = false;
      });

      //武器情報:ATKor安定率
      Judey.$cls("WeponInfo").Event("click", (e) => {
        if (IsBeforeChange) e.target.value = "";
        IsBeforeChange = true;
      }).Event("change", (e) => {
        const Elem = e.target;

        const MaxValue = Elem.id.includes("Stable") ? 100 : 1500;
        const Result = MainMethod.InputValueCheck(Elem.value, 0, 0, MaxValue);

        InsertValue_Info(Elem.id, Result);
        Elem.value = Result;
        
        IsBeforeChange = false;
      });
      
      //武器情報:武器or精錬
      Judey.$cls("WeponSelector").Event("change", (e) => {
        const Elem = e.target;
        const value = isNaN(Number(Elem.value)) ? Elem.value : Number(Elem.value);

        const ID = Elem.id;
        const WeponAttribute = ID.replaceAll("OtherInfo-", "");
        const NowWepon = Data.OtherInfo[WeponAttribute];

        //同武器種で入れ替えとなる場合は処理を行わない。
        if (value === NowWepon) return;

        if (ID.includes("Smelting")) {
          InsertValue_Info(ID, value);
          return;
        } 


        InsertValue_Info(ID, value, false);

        //武器種変更時のスキル再構成
        const F = MainMethod;

        //メイン武器のみ
        if (ID.indexOf("Sub") === -1) {
          MainRender.SubWepon();
          Judey.$id("PassiveBuffs").RemChild();
        }

        F.DeleteAddition(SelectionData.SkillBuff, false);
        F.DeleteAddition(SelectionData.UserCustomBuff, false);
        F.DeleteAddition(SelectionData.SelfBuff);
        MainRender.SkillSelector();
        BaseCalculation();
      })

      const InsertValue_Info = (root, Insertvalue,Calc = true) => {
        const text = root.split("-");
        Data[text[0]][text[1]] = Insertvalue;
        if (Calc) BaseCalculation();
        
        MainRender.EnableStatusPoint();
      }      
    },
    Equipments_Events: () => {
      const CheckEditBtn = () => {
        const Selector = Data.OtherInfo.EquipmentSelector;
        if (Selector === "OtherEquipmentEffect") return;

        const Key = Data.AdditionStatus[Selector].Name;

        Judey.$cls('EquipmentButton').RemClass("NoneText");

        if (Key.toString().length !== 13) {
          Judey.$query('.EquipmentDeleteButton,.EquipmentChangeShowButtons').Class("NoneText");
        } 
        if (Key === "NonesData") {
          Judey.$query(".EquipmentButton[data-key='edit']").Class("NoneText");
        } 
      };

      /**装備品内武器ATK数値入力変更時に起動、 新プロパティ値に更新、再計算を行う。*/
      const Event_SetWeponATKValues = (Element, StrongValue) => {
        const Selector = Data.OtherInfo.EquipmentSelector;
        if (!Selector.includes("Wepon")) return;

        const WeponKey = Element.dataset.key;
        if (WeponKey === "MainWeponATK" && Selector !== "Wepon") return
        if (WeponKey === "SubWeponATK" && Selector !== "SubWepon") return;

        const DispatchElement = Judey.$id(`OtherInfo-${WeponKey.replace("Main","")}`);
        DispatchElement
          .InpText(StrongValue ?? Number(Element.value))
          .Dispatch("change");
        
        const DispatchedResultValue = Number(DispatchElement.InpText());

        CommonEvent_SendAttributeValue(WeponKey, DispatchedResultValue);

        Element.value = DispatchedResultValue;
      };

      /**装備品内武器情報機有効時の登録、削除動作 */
      const Event_SetEquipmentIncludeWeponAttributes = (Element) => {
        const Selector = Data.OtherInfo.EquipmentSelector;
        if (!Selector.includes("Wepon")) {
          MainRender.CheckAnswer("それは受け付けてないのにゃ…", false, Answer.OKOnly);
          return;
        };

        const AppendValue = Element.value === "0";
        const IsMainReplace = Element.dataset.wepon === "Main";
        const ReplaceSelecotr = IsMainReplace ? "Wepon" : "SubWepon";
        const PropertyName = IsMainReplace ? "MainWepon" : "SubWepon";
        const AttributeName = IsMainReplace ? "" : "Sub";

        const EquipmentData = Data.AdditionStatus[ReplaceSelecotr];
        const ReplaceData = MainMethod.GetDataUnit(EquipmentData) ?? {};
        
        if (AppendValue) {
          ReplaceData[`${PropertyName}ATK`] = Data.OtherInfo[`${AttributeName}WeponATK`];
          ReplaceData[`${PropertyName}_Wepon`] = Data.OtherInfo[`${AttributeName}Wepon`];
          ReplaceData[`${PropertyName}_Stable`] = Data.OtherInfo[`${AttributeName}Stable`];
          ReplaceData[`${PropertyName}_Smelting`] = Data.OtherInfo[`${AttributeName}Smelting`];

        } else {
          delete ReplaceData[`${PropertyName}ATK`];
          delete ReplaceData[`${PropertyName}_Wepon`];
          delete ReplaceData[`${PropertyName}_Stable`];
          delete ReplaceData[`${PropertyName}_Smelting`];
        }

        Data.AdditionStatus[Selector].Unit.Base = ReplaceData.New();
        CommonEvent_ReplaceNoSetDataAttributes(Selector);

        if (AppendValue)
          MainRender.CheckAnswer("装備品内に武器情報を登録しました。", false, Answer.CloseOnly);
        else {
          Judey.$cls("Equipment_WeponATK_Values").InpText();
          MainRender.CheckAnswer("武器情報を削除しました。", false, Answer.CloseOnly);
        }
          
      };

      /**装備品プロパティ要素のクリック/値変更時に起動、新プロパティ値に更新、再計算を行う。 */
      const Event_SetEquipmentAttributeValue = (element, StrongValue) => {
        const Value = StrongValue ?? element.value;
        /**@type { Property_Attribute } */
        const Attribute = PropsAttributeKeyBase[element.dataset.key];
        
        const ResultValue = MainMethod.InputValueCheck(Value, 0, Attribute.MinimumValue, Attribute.MaximumValue);

        CommonEvent_SendAttributeValue(Attribute.AttributeKey, ResultValue);

        const InputRetValue = ResultValue === 0 ? "" : ResultValue;
        
        Judey.$query(`.Equipment_Values[data-key="${Attribute.AttributeKey}"]`).InpText(InputRetValue);
      };

      /**現在の装備品情報をSelectionData、LocalStorageへ反映させる。 */
      const CommonEvent_ReplaceNoSetDataAttributes = (Selector) => {
         const EquipmentDataSet = Data.AdditionStatus[Selector];
         const EquitmentReplacedDataSet = MainMethod.GetIncludeUnitData(EquipmentDataSet);
         SelectionData[Selector][EquipmentDataSet.Name] = EquitmentReplacedDataSet[0].New();
          
         //ユーザーカスタム装備品の場合はLocalStorageへ変更値反映。
         //*13桁であること、Keyが数値のみで構成されていること。
         if (String(EquitmentReplacedDataSet[1]).length !== 13 || !Number(EquitmentReplacedDataSet[1])) return;
         MainMethod.SetSingleLocalCustom(Selector, EquipmentDataSet);       
      }
      
      /**装備品プロパ、装備品内武器ATK数値入力変更時の共通処理イベント */
      const CommonEvent_SendAttributeValue = (AttributeKey, NewAttributeValue) => {
        const Selector = Data.OtherInfo.EquipmentSelector;

        const OldData = MainMethod.GetDataUnit(Data.AdditionStatus[Selector]).New();
        const NewData = OldData.New();

        NewData[AttributeKey] = NewAttributeValue;
        MainMethod.SendAllStatus(
          MainMethod.SendStatus(OldData, NewData, false)
        );

        const AttributeKeys = BaseStatus.StatusData.Keys();
        NewData.KeyEach(elem => {
          if (NewData[elem] === 0 && AttributeKeys.includes(elem))
            delete NewData[elem]
        });
        Data.AdditionStatus[Selector].Unit.Base = NewData.New();
        CommonEvent_ReplaceNoSetDataAttributes(Selector);

        //数値再計算
        BaseCalculation();
      }

      //リスト切り替え
      Judey.$cls("Epuipment_Listitem").Event("click", (e) => {
        const target = e.currentTarget.id.split("-")[1];
        MainRender.EquipView(target);
        CheckEditBtn();
        //FakeSelectorの更新
        MainRender.FakePreviewValue();
      })
        
      //レベル1(初期データ扱い)時はメイン装備を初期設定にする。
      if (Data.Status.Level === 1) Judey.$id("Addition_OtherInfo-Wepon").Dispatch("click");
        
      //装備種類変更
      Judey.$id("EquipmentSelector").Event("change", (e) => {
        const SendDataRootName = e.target.value;
        const BaseDataRootName = Data.OtherInfo.EquipmentSelector;
        const SendRoot = SelectionData[BaseDataRootName];

        MainMethod.SetDataUnit(Data.AdditionStatus, BaseDataRootName, SendRoot, SendDataRootName, true, false);
        MainMethod.ChangeEquipmentPreview(Data.AdditionStatus[BaseDataRootName]);
        // Main
        MainRender.ParticalCrystalSelectorSet();
        MainMethod.SetCrystalData(undefined, false);

        BaseCalculation();
        CheckEditBtn();
      });  

      //カスタム装備の変更
      Judey.$cls('EquipmentButton').Event("click", (e) => {
        MainMethod.CheckEquipmentLocalCustom(e.target.dataset.key);
      })

      //装備品内の武器ATK要素変更時のイベント
      Judey.$cls("Equipment_WeponATK_Values")
        .Event("click", e => {
          if (IsBeforeChange) Event_SetWeponATKValues(e.target);
          IsBeforeChange = true;
        })
        .Event("change", e => {
          Event_SetWeponATKValues(e.target);
          IsBeforeChange = false;
        });
      
      Judey.$cls("SetEquipmentPropertyButtons").Event("click", e => {
        Event_SetEquipmentIncludeWeponAttributes(e.target);
      });
      
      Judey.$cls("Equipment_Values")
        .Event("click", e => {
          if (IsBeforeChange) Event_SetEquipmentAttributeValue(e.target, 0);
        IsBeforeChange = true;
      })
        .Event("change", e => {
          Event_SetEquipmentAttributeValue(e.target);
          IsBeforeChange = false;
      });

      //タブ名称設定
      Judey.$cls("TabNameChanger").Event("click", async () => await MainRender.EquipmentTabSelecter());

      CheckEditBtn();
    },
    Crystal_Events: () => {
      Judey.$cls("CrystalSelector").Event("change", MainMethod.SetCrystalData);
      
      //？選択時
      const HATENA_Elem = Judey.$cls("Crystal_Ans");
      HATENA_Elem.Event("click", (e) => {
        const EnableRefs = e.target.classList.contains("Crystal_ReferenceHATENA");

        HATENA_Elem.RemClass("Crystal_ReferenceHATENA");

        if (!EnableRefs) e.target.classList.add("Crystal_ReferenceHATENA");
        MainRender.CrystalReference();
      });     
    },
    Item_Events: () => {
      Judey.$cls("ItemBuffSelector").Event("change", (e) => {
        const DataInfo = e.target.id.split("_")[1];
        const BaseRoot = Data.AdditionStatus.ItemBuff;
        const SendRoot = SelectionData.ItemBuff[DataInfo];

        MainMethod.SetDataUnit(BaseRoot, DataInfo, SendRoot, e.target.value, true);
      })     
    },
    Cooking_Events: () => {
      //料理名変更
      Judey.$cls("EatSelector").Event("change", (e) => {
        CreateEatBuff(e.target, true);
      })
      //料理レベル変更
      Judey.$cls("EatSelector_Lv").Event("change", (e) => {
        CreateEatBuff(e.target, false);
      })

      const CreateEatBuff = (Elem, Ischange_Eat)=>{
        const F = MainMethod;
        const BaseRoot = Data.AdditionStatus.Cooking;
        const Point = Elem.id.split("_")[1];

        //既存の料理削除
        if (BaseRoot[Point].Name != 0) 
          F.SendAllStatus(F.SendStatus(F.GetDataUnit(BaseRoot[Point]), {}, false));

        //料理名取得
        const CookingName = Ischange_Eat
          ? Elem.value.split("-")[0]
          : Judey.id(`EatList_${Point}`).value.split("-")[0];

        //料理レベル取得
        const CookingLv = Ischange_Eat
          ? Judey.id(`EatLv_${Point}`).value
          : Elem.value;

        //値の生成
        const  SendData = {};
        SendData[CookingName] = CookingName == 0
          ? 0
          : SelectionData.Cooking[CookingName]["Up"][CookingLv];
        
        BaseRoot[Point] = F.AddDataUnit(SendData, CookingName);
        F.SendAllStatus(SendData);
        BaseCalculation();
      }     
    },
    AttackSkill_Events: () => {
      //コンボになっていない時のみレンダリング
      if (document.getElementsByClassName("Groups_All").length === 0) 
        MainRender.ATKSkills("All");
      
      //スキルのチャージ記載
      Judey.$cls('ChargeInfo_Input').InpText(Data.OtherInfo.ChargeLv || 0);
    
      //スキル威力変更
      Judey.$cls("DefaultSkillSelector").Event("change", (e) => {
        Judey.$cls("DefaultSkillSelector").RemAttr("checked");
        Judey.$id("");
        const Elem = e.target;
        const target = Elem.id.split("-");
        const value = Elem.value;
        const Skill = Data.OtherInfo.Skill.First.Base;

        if (Elem.attributes["type"].value === "number") { 
          const Ansvalue =
            target[1] === "BasePower"
              ? MainMethod.InputValueCheck(value, 100, 1, 9999)
              : MainMethod.InputValueCheck(value, 0, 0, 9999);
              Skill[target[1]] = Ansvalue;
              Elem.value = Ansvalue;
        } else {
          const TargetValue = target[2];

          if (TargetValue.includes("MATK")) {
            Skill.IsMagicalSkill = true;
            Skill.IsDEF = false;
            Skill.IsPhysical = false;

            if (TargetValue === "MATK")
              Skill.Reference = (Refs) => Refs.Status.MATK;
            else
              Skill.Reference = (Refs) => Refs.Status.HBMATK;
          }
          else {
            Skill.IsMagicalSkill = false;
            Skill.IsDEF = true;
            Skill.IsPhysical = true;

            if(target[2].includes("2"))
              Skill.Reference = (Refs) => Refs.Status.AllATK;
            else
              Skill.Reference = (Refs) => Refs.Status.ATK;
          }

          SelectionData.Skill[0] = Data.OtherInfo.Skill;
        }
        BaseCalculation();
        MainRender.SkillEffect(Data);

        //他処理の強制適用のキャンセル
        Judey.$cls("DefaultSkillSelector").EachElem(elem => elem.checked = false);
        e.target.checked = true;
      })

      const SkillSelector = Judey.$cls("SkillSelector");
      const SkillsChanger = Judey.$cls("SkillsSelector");

      //スキル変更
      SkillSelector.Event("change", (e) => {
        const value = e.target.value;
        const Skill = SelectionData.Skill[value];
        Data.OtherInfo.Skill = Skill;

        if (Skill.Charge) {
          const Default = Skill.Charge.DefaultLv;
          Data.OtherInfo.ChargeLv = Default;
          Judey.$cls('ChargeInfo_Input').InpText(Default);
        }
        
        BaseCalculation();
        MainRender.SkillEffect(Data);//スキル効果表示
        value == 0
          ? Judey.$id("ChangeSkillPowers").RemClass("NoneText")
          : Judey.$id("ChangeSkillPowers").Class("NoneText");
      });

      //系統変更
      SkillsChanger.Event("click", (e) => {
        Data.OtherInfo.Skill = SelectionData.Skill["0"];

        SkillsChanger.RemClass("Selectedskill");
        Judey.$elem(e.target).Class("Selectedskill");
        SkillSelector.RemChild();

        const value = e.target.value.split("-")[1];
        MainRender.ATKSkills(value);
        BaseCalculation();

        //威力変更表示
        Judey.$id("ChangeSkillPowers").RemClass("NoneText");
      })
      
      //コンボ/単発選択変更
      const ComboItemSelector = Judey.$cls("SkillComboSelector_Item");
      ComboItemSelector.Event("click", (e) => {
        MainRender.SkillEffect(Data);
        const Target = e.currentTarget.dataset.target;
        if(Judey.query(`li.ItemActive[data-target="${Target}"]`).localName) return;
      
        ComboItemSelector.RemClass("ItemActive");
        Judey.$elem(e.currentTarget).Class("ItemActive");
        Judey.$cls("Skill_Area").Class("NoneText");
        Judey.$query(`div[data-target="${Target}"]`).RemClass("NoneText");
        
        if (Target === "Once") {//単発スキル
          Judey.$id("SkillSelector")
            .InpText("0")
            .Dispatch("change");
          Judey.$cls("ComboSelecrer_ShowResult").Rem();
          
        }
        else {
          Judey.$cls('ChargeInfo').Class("NoneText");
          MainRender.Combo();//コンボスタート
        } 

        MainRender.HideOptions();
      })

      if (typeof Data.OtherInfo.Skill === "string") 
        Judey.$query("li.SkillComboSelector_Item[data-target='Combo']").Dispatch("click");     

      if (false && !location.href.includes("18394358"))
        Judey.$query("label[for=Default-Reference-ATK]").Class("NoneText");
    },
    Enemy_Events: () => {
      const enemys = SelectionData.Enemy;
      
      Data.OtherInfo.Enemy = Data.OtherInfo.Enemy || enemys[1];
      MainRender.Enemy();

      Judey.$id("EnemySelector").Event("change", (e) => {
        const value = e.target.value;
        Data.OtherInfo.Enemy = enemys[value];

        MainMethod.SwitchEnemyInfo(value);
        MainMethod.ShowEnemyValues();
        MainRender.EnemyAttribute();
        BaseCalculation();
        
      });    
      
      Judey.$cls("Enemy_ExtensionQuestion").Event("click", e => {
        const Type = e.target.dataset.key;
        const Description = Type === "Critical"
          ? "敵に100%クリティカルヒットするクリ率を設定します。\n※設定がない場合は100として計算を行います。\n※期待値計算ではない場合、この値は使用しません。"
          : "敵に100%ヒットする必要HIT数を設定します。\n※ボスの場合はNormal時の数値を入力して下さい。\n※設定がない場合は0として計算を行います。\n※期待値計算ではない場合、この値は使用しません。";
        
        MainRender.CheckAnswer(Description, false, Answer.CloseOnly);
      });

      Judey.$cls("Enemy_ExtensionValues").Event("change", e => {
        const Type = e.target.dataset.key;
        const Value = e.target.value;

        MainMethod.SetEnemyExtension(Data, Judey.$id("EnemySelector").InpText(), Value, Type);
        BaseCalculation();
      });
    },
    SubMenu_Events: () => {
      const Elem = Judey.cls("ArchiveMenu_Contents");
      res.Render(Elem, "Top");

      //メニュー表示項目の切り替え
      const SaveMenu = Judey.$cls("SaveMenu_Item");
      SaveMenu.Event("click", e => {
        SaveMenu.RemClass("ItemSelect");
        e.target.classList.add("ItemSelect");

        const value = e.target.dataset.value;
        res.Render(Elem, value);
      })
    
      //表示データ初期化
      Judey.$cls("ArchiveMenu_Reset").Event("click", () => {
        MainRender.CheckAnswer(
          "現在入力されているデータを削除します。\nよろしいですか？",
          false,
          Answer.YESNo,
          () => res.DataReset()
        );
      });
      
      const MenuArea = Judey.$cls("ArchiveMenuArea");
      const Icon = Judey.$cls("MenuIcon");

      const CloseMenu = () => {
        Judey.$tag("html").Style("");
        MenuArea.Class("CloseMenu");
        setTimeout(() => MenuArea.Class("NoneText"), 300);
        Icon.RemClass("CloseMenu");
      };

      const StartMenu = () => {
        MenuArea.RemClass("CloseMenu").RemClass("NoneText");
        Icon.Class("CloseMenu");
      };
      
      Judey.$cls("ArchiveMenu_Close")
        .Event("click", CloseMenu).FlickGo(CloseMenu, 50);
      
      Icon.Event("click", StartMenu);

      //確認機能
      const PreEvent = () => {
        Icon.RemEvent("click", StartMenu);

        const Element = `
        <p>入力した値を登録します。<br>入力したら『閉じる』ボタンを押下するといいのです…<br>押下後にサイトの再読み込みが行われます。</p>
        <div style="margin:0 auto;margin-top:10px;height:2.5rem;">
          <span style="margin:auto 0;display:inline-block;width:6rem;">登録する値</span>
          <input id="PreCodeInput" type="text"></input>
        </div>
        `;

        MainRender.CheckAnswer(
          Element,
          false, Answer.CloseOnly,
          async () => {
            window?.localStorage?.setItem("Toram_PreCode", Judey.$id("PreCodeInput").InpText());

            const res = await import(Js_Archive);
            res.AllCapturedSend();

            setTimeout(() => location.reload(), 1e3);
            ;
          }
        );
      }

      let PreSetValue = 0;
      Icon
        .Event("mousedown", e => PreSetValue = Date.now())
        .Event("mouseup", e => { 
          if (Date.now() - PreSetValue > 5000) PreEvent();
        });
      
      
      Icon.FlickGo(PreEvent, -30, -100);
      //アイコンスライド(モバイル)
/*       const bottom = "bottom:calc(100% - 150px);";
      const right = "right:calc(100% - 80px);"; */

 /*      Icon.FlickGo(() => {
        for (let i = 0; i < Icon.Elem().style.length; i++) {
          if (Icon.Elem().style[i].search("bottom") > -1) {
            Icon.Style(bottom + right);
            return;
          }
        }
        Icon.Style(right);
      }, -25)
      .FlickGo(() => {
        for (let i = 0; i < Icon.Elem().style.length; i++) {
          if (Icon.Elem().style[i].search("bottom") > -1) {
            Icon.Style(bottom);
            return;
          }
        }
        Icon.Style("");
      }, 25)
      .FlickGo(() => {
        for (let i = 0; i < Icon.Elem().style.length; i++) {
          if (Icon.Elem().style[i].search("right") > -1) {
            Icon.Style(right);
            return;
          }
        }
        Icon.Style("");
      }, 0, 25)
      .FlickGo(() => {
        for (let i = 0; i < Icon.Elem().style.length; i++) {
          if (Icon.Elem().style[i].search("right") > -1) {
            Icon.Style(bottom + right);
            return;
          }
        }
        Icon.Style(bottom);
      }, 0, -25)   */  
    },
    Other_Events: () => {
      //ステータス画面の表示値切り替え
      Judey.$cls("ShowAttributeStatusSelector").Event("change", (e) => {
        Judey.$cls("ShowAttributeStatusSelector").InpText(e.target.value);
        MainMethod.ShowStatusAllPreview();
      })

      //セクション開閉動作
      const H2AreaTitle = Judey.$cls("AreaTitle");
      const AreaToggleHide = (Element, Isclick) => {
        //Hide付与する要素
        const Parent = Element.parentElement;
        const Child_Noth2tag = (() => {
          const Elems = [];
          for (let elem of Parent.children) {
            if (elem.tagName !== "H2") Elems.push(elem);
          }
          return Elems;
        })();
        
        //Hide⇒Show
        if (Element.classList.contains("AreaTitle_Hide")) {
          Judey.$elem(Element).Class("AreaTitle").RemClass("AreaTitle_Hide");
          Judey.$elem(Parent).RemClass("ShowHide2");
          Judey.$elem(Child_Noth2tag).RemClass("ShowHide").Style("");
          return;
        }

        Judey.$elem(Parent).Class("ShowHide2");
        Judey.$elem(Child_Noth2tag).Class("ShowHide");
        setTimeout(() => Judey.$elem(Child_Noth2tag).Style("display:none"), 100);
        Judey.$elem(Element).RemClass("AreaTitle").Class("AreaTitle_Hide");
      }
      H2AreaTitle.Event("click", (e) => {
        AreaToggleHide(e.target, true);
      }).FlickGo(AreaToggleHide, 30).FlickGo(AreaToggleHide, -20);
      
      //ライトモードとダークモードの切り替え
      const TargetMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      MainMethod.CheckColorMode();
      TargetMediaQuery.addEventListener("change", MainMethod.CheckColorMode, false);
      
      //入力モードの初期設定
      if (localStorage?.getItem("Toram_InputNumMode") >= 1)
        MainRender.PaletteSelector(Judey.$query("input[type='number']"), false);
      
      //エラー確認
/*       setTimeout(() => {
        try {
          if (location.href.includes("18394358")) return;
          const Result = {};
          localStorage.KeyEach(Key => {
            const Value = localStorage.getItem(Key);

            if (Value.match(/[\:\{\[\}\]}]|true|false|null/g) || Number(Value))
              Result[Key] = Value.Jparse();
            else
              Result[Key] = Value.replaceAll("'", "").replaceAll('"', '');
          })
          fetch("./API/Checker", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: Result.Json()
          })
        } catch (error) {
        }
      }, 6e4); */
      
      MainMethod.SetFakeSelector();
      //Judey.$query(".FakeSelector[data-type='Equipment']").Dispatch("click");
      Judey.$cls("PreviewStatusSelector").OnceEvent("click", MainRender.StatusPreviewSelector);
      Judey.$cls("PreviewUpperStatusBtn").Event("click", MainRender.UpperStatusPreview);

      //先行機能
      if (window?.localStorage.getItem("Toram_PreCode") != "1148") {
      }

      //重複修正対応
      if (window?.localStorage !== undefined && window?.localStorage?.getItem("Toram_LocalRepair") === null) {
        let NeedRepair = false;
        
        const MyLocal = MainMethod.GetMyLocal();
        MyLocal.KeyEach(key => {
          if (NeedRepair === false && key.includes("Combo") === false && key.includes("Enemy") === false) {
            const LocalKeys = [];

            MyLocal[key].KeyEach(itemkey => {
              if (LocalKeys.includes(MyLocal[key][itemkey].Name))
                NeedRepair = true;

              LocalKeys.push(MyLocal[key][itemkey].Name);
            })
            
          }
        });

        if (NeedRepair) RepairMissData();
      }

      //表示修正
      Judey.$tag("label").EachElem(e => {
        if (e.innerHTML.includes("span") === false) {
          const elem = Judey.$elem(e);
          elem.Html(`<span>${elem.Text()}</span>`);
    
          elem.Class("Flex");
        }
      });
    },
  }
  Object.keys(EventMethod).forEach(key => EventMethod[key]());
  await MainMethod.CheckViewUpdateArchive();
});

Object.prototype.New = function () { return JSON.parse(JSON.stringify(this)) };
Object.prototype.Show = function () { console.log(this) };
Object.prototype.Json = function () { return typeof this === "string" ? this : JSON.stringify(this) };
Object.prototype.Jparse = function () { return JSON.parse(this) };
Object.prototype.Keys = function () { return Object.keys(this) };
Object.prototype.KeyEach = function (Func) { this.Keys().forEach(Func) };
Object.prototype.Values = function () { return Object.values(this) };
Object.prototype.ValueEach = function (Func) { this.Values().forEach(Func) };
Object.prototype.Entries = function () { return Object.entries(this) };
Object.prototype.EntrieEach = function (Func) { this.Entries().forEach((a, b) => Func(a[0], a[1], b)) };
Object.prototype.SortKey = function (Func) {
  return Object.fromEntries(Object.entries(this.New()).sort((a, b) => Func(a[0], b[0])));
};
Object.prototype.SortValue = function (Func) {
  return Object.fromEntries(Object.entries(this.New()).sort((a, b) => Func(a[1], b[1])));
};
Object.prototype.MargeObject = function (Ary) { Ary.forEach(Ent => Ent.KeyEach(key => this[key] = Ent[key].New())) };
Object.prototype.FilterObject = function (Func) { return Object.fromEntries(Object.entries(this).filter((elem, i) => Func(elem[0], elem[1], i))) };
Number.prototype.INT = function () { return Math.floor(this) };
String.prototype.byte = function () {
  let length = 0;
  for (var i = 0; i < this.length; i++) {
    var c = this.charCodeAt(i);
    if ((c >= 0x0 && c < 0x81) || (c === 0xf8f0) || (c >= 0xff61 && c < 0xffa0) || (c >= 0xf8f1 && c < 0xf8f4)) {
      length += 1;
    } else {
      length += 2;
    }
  }
  return length;
};
String.prototype.bytetrim = function (limit = 0) {
  let text = "";
  let length = 0;
  for (var i = 0; i < this.length; i++) {
    var c = this.charCodeAt(i);
    if ((c >= 0x0 && c < 0x81) || (c === 0xf8f0) || (c >= 0xff61 && c < 0xffa0) || (c >= 0xf8f1 && c < 0xf8f4)) {
      length += 1;
    } else {
      length += 2;
    }

    if (limit < length) return text;
    text += this[i];
  }
  return text;
};
const GetStorage = Key => {
  const Value = localStorage.getItem(Key);
  return Value ? Value.Jparse() : ""; 
}
const SetStorage = (Key, Value) => localStorage.setItem(Key, Value);
const L = Data;
const AllDamege = (SkillData,min = 0.9,max = 1.1) => {
  const Sk = ["First", "Second", "Therd", "Fourth", "Fifth", "Sixth", "Seventh"];
  const Result = {};

  const Ref = Data.Method.CreateBuffer.GetReferenceCopy(Data,true);
  if (SkillData) {
    const TempSkill = new AddSkillSet(1, 1, 1, 1, 1, [{
      Base: SkillData
    }]);
    Ref.OtherInfo.Skill = TempSkill;
  } 

  const SpecialStatus = new EquipmentExtension(Ref);
  SpecialStatus.LimitedModifyStatus(Ref, (RefData) => {
    MainMethod.CheckActiveSkills(RefData);
    MainMethod.AllCalculation(RefData);

    Sk.forEach(Key => {
      if (Data.OtherInfo.Skill[Key]) {
        Result[Key] = {};
        for (let i = min; i <= max; i += 0.01)
          Result[Key][Math.floor(i * 100)] = Data.Method.GetTotalDamege(i, Key, RefData).toLocaleString("ja-JP");
      }
    })
  });

  if (Result?.Second)
    p(Result);
  else
    p(Result.First);
}
const PDamege = (Refecence, Power, Fixed, HitRange = 8, Distance = true, SwordPower = true) => {
  const First = new PhysicsSkill(Power, Fixed, HitRange, Distance, SwordPower);
  First.Reference = () => Refecence;
  AllDamege(First);
}
const MDamege = (Refecence, Power, Fixed, HitRange = 8, Distance = true) => {
  const First = new MagicSkill(Power, Fixed, HitRange, Distance);
  First.Reference = () => Refecence;
  AllDamege(First);
}

const p = (...t) => {
  if (t.length === 1)
    console.log(t[0]);
  else
    console.log(t);
}
const GetNow = async () => {
  const res = await import(Js_Archive);
  const Result = res.GetNowJsonData();
  p(Result.Jparse());
  p(Result);
}

const GetLOG = async () => {
  const res = await import("./UpdateLog.js");
  const Result = res.Result;
  const Elem = Judey.$Element("div", "", "Reference_Back")
    .Child("div", "", "Area");
  
  Object.keys(Result).sort((a, b) => b - a).forEach(Key => {
    Elem.Child("div", "", "block");
    Object.keys(Result[Key]).forEach(Prop => Elem.Child("p").Text(Result[Key][Prop]).Breaker());
    Elem.Breaker();
  })
  Judey.$tag("form").Append(Elem.Breaker(99), Judey.InsertLast);  
}

const RepairMissData = async () => {
  const res = await import(Js_Archive);
  res.RepairMiss_AllData("重複装備品の修正を行います。");
};

const Js_Archive = "./Archive.min.js?ver=1.60";
const Js_LocalSave = "./LocalSave.min.js?ver1.0.3";
const Js_Ref = "./SkillReference.min.js?ver=1.33";
const Js_AtherSys = "./AnotherSys.min.js?ver=1.31";
const LatestVersion = "1.25.15.0";
const ErrDescriptions = [];

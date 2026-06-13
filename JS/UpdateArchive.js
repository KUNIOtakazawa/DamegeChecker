
/**その日の更新情報 */
class Update{
    constructor(date, version, items) {
        this.Date = date;
        this.Version = version;
        /**@type { Array<UpdateBase>} */
        this.Items = items;
    }
}
class UpdateType{
    /**装備品や敵を含めたすべてのものの追加 */
    static Append = 10;
    /**機能 */
    static Function = 20;
    /**不具合やバグの修正やその他 */
    static Fix = 30;
}
class UpdateBase{
    constructor(name, type, items) {
        this.Name = name;
        this.Type = type;
        /**@type { Array<string>} */
        this.Items = items;
    }
}
class Update_Append extends UpdateBase{
    constructor(items) {
        super("追加", UpdateType.Append, items);
    }
}
class Update_Equipment extends UpdateBase{
    constructor(items) {
        super("装備品追加", UpdateType.Append, items);
    }
}
class Update_Crystal extends UpdateBase{
    constructor(items) {
        super("クリスタ追加", UpdateType.Append, items);
    }
}
class Update_Item extends UpdateBase{
    constructor(items) {
        super("アイテム追加", UpdateType.Append, items);
    }
}
class Update_BuffSkill extends UpdateBase{
    constructor(items) {
        super("バフスキル追加", UpdateType.Append, items);
    }
}
class Update_Skill extends UpdateBase{
    constructor(items) {
        super("攻撃スキル追加", UpdateType.Append, items);
    }
}
class Update_Function extends UpdateBase{
    constructor(items) {
        super("機能追加", UpdateType.Append, items);
    }
}
class Update_Enemy extends UpdateBase{
    constructor(items) {
        super("敵情報追加", UpdateType.Append, items);
    }
}
class Update_Change extends UpdateBase{
    constructor(items) {
        super("変更", UpdateType.Append, items);
    }
}
class Update_NameChange extends UpdateBase{
    constructor(items) {
        super("名称変更", UpdateType.Append, items);
    }
}
class Update_Fix extends UpdateBase{
    constructor(items) {
        super("修正", UpdateType.Append, items);
    }
}
class Update_ToramFix extends UpdateBase{
    constructor(items) {
        super("トーラム内調整対応", UpdateType.Append, items);
    }
}
class Update_NonTitle extends UpdateBase{
    constructor(items) {
        super("", UpdateType.Append, items);
    }   
}

const UpdateArchives = [
    new Update("2022/8/1", "0.0.1.0β", [
        new Update_NonTitle(["β版の公開"])
    ]),
    new Update("2022/11/9", "1.0.0.0", [
        new Update_NonTitle(["正式版の公開"])
    ]),
    new Update("2022/11/26", "1.0.1.0", [
        new Update_Change([
            "共有コード再発行可能までの時間を１時間に緩和。",
            "セーブ対象に攻撃スキル/敵のカスタム入力項目を追加。"
        ])
    ]),
    new Update("2022/12/7", "1.1.0.0", [
        new Update_Function(["ユーザー設定装備品の登録"])
    ]),
    new Update("2022/12/12", "1.1.1.0", [
        new Update_Function(["ダメージ判定項目に『期待値』を追加。"])
    ]),
    new Update("2022/12/15", "1.1.1.1", [
        new Update_Fix(["期待値計算の平均安定率の表示が、確定クリ率の値と連動してしまっていた部分の修正。"])
    ]),
    new Update("2022/12/18", "1.1.2.0", [
        new Update_Append([
            "杖/メイン魔道具の属性、クリティカルチャンス特性の追加。",
            "属性選択項目に『有利(その他)』を追加。",
            "ステータス確認に特性または武器による属性有利の項目を追加。"
        ]),
    ]),
    new Update("2022/12/19", "1.1.3.0", [
        new Update_BuffSkill([
            "忍道"
        ]),
        new Update_Change([
            "バフスキル『両手持ち』が『忍道』の影響を受けるように変更。"
        ]),
        new Update_Fix([
            "属性攻撃の数値が一部条件で意図しない数値になっていた部分の修正。",
            "スタビリスの安定率反映量の修正。"
        ])
    ]),
    new Update("2022/12/31", "1.2.0.1", [
        new Update_Function(["ユーザー設定敵情報の登録"]),
        new Update_Fix([
            "軽量化/重量化時のaspd補正値の修正。",
            "アイテム選択で『なし』が選択できなかった部分の修正。"
        ])
    ]),
    new Update("2023/1/9", "1.3.0.0", [
        new Update_Function([
            "バフスキルの説明機能"
        ])
    ]),
    new Update("2023/2/7", "1.3.1.1", [
        new Update_Change([
            "サンプルデータのレベルを260に変更。"
        ]),
        new Update_Fix([
            "貫通威力がダメージ計算時に100%異常適用されてしまっていた部分の修正。",
            "破壊状態の効果不良",
            "拳スキルの表示不良"
        ])
    ]),
    new Update("2023/2/21", "1.3.2.2", [
        new Update_Append([
            "必中属性",
            "溜め可変スキルの追加\n・クロスファイル\n・天流乱星/斬納\n・ドラゴニックチャージ\n・マジックカノン\n・ツインバスターソード\n・ソウルハント"
        ]),
        new Update_Fix([
            "攻撃スキル『カスタム入力』の遠距離威力、ロングレンジ適用不良の修正。",
            "クロスファイアの2段目の固定値/貫通修正(純弓に貫通適用していた部分の削除)"
        ])
    ]),
    new Update("2023/2/23", "1.3.3.0", [
        new Update_Crystal([
            "シカノカーミ(オプション)"
        ]),
        new Update_Item([
            "アドマジクルバリエーション"
        ]),
        new Update_Append(["カラーモード：『ダーク』"])
    ]),
    new Update("2023/3/15", "1.4.0.1", [
        new Update_Function([
            "コンボ構成機能"
        ]),
        new Update_Fix([
            "オーラブレードにロングレンジが乗っていなかった部分の修正。"
        ])
    ]),
    new Update("2023/3/16", "1.4.1.1", [
        new Update_Crystal([
            "マギフィレーシア(オプション)"
        ]),
        new Update_Append([
            "パッシブ/ブレイブ倍率の自由入力"
        ]),
        new Update_Fix([
            "コンボ構成、コンボモード選択時の操作不能問題の修正。"
        ])
    ]),
    new Update("2023/4/7", "1.4.1.2", [
        new Update_Fix([
            "サーバー側バックアップ機能の不具合を修正。"
        ])
    ]),
    new Update("2023/4/14", "1.5.1.1", [
        new Update_Function(["パレット入力モード"]),
        new Update_Append([
            "メニュー内に『リンク』を追加。",
            "装備品枠に武器値ATK入力欄を追加。"
        ]),
        new Update_Change([
            "サンプルデータのレベルを265に変更。"
        ]),
        new Update_Fix([
            "シールドキャノンの威力値を修正。"
        ])
    ]),
    new Update("2023/4/15", "1.5.2.0", [
        new Update_Append(["装備品選択項目に自由入力欄2/3を追加。"])
    ]),
    new Update("2023/4/16", "1.5.3.1", [
        new Update_BuffSkill([
            "『忍術鍛錬Ⅰ』",
            "『忍術鍛錬Ⅱ』"
        ]),
        new Update_Fix([
            "水遁の術の威力参照修正",
            "カラーモード『OS依存』時の切替不良の修正。"
        ])
    ]),
    new Update("2023/4/21", "1.5.4.0", [
        new Update_Append([
            "桜イベント系統の装備品、クリスタ"
        ])
    ]),
    new Update("2023/4/23", "1.5.5.1", [
        new Update_Change([
            "天上天下無双斬りの物理貫通威力を怪力乱神のスキルレベルにより変動するように変更。",
            "CRT、MENをセーブ対象に追加。"
        ]),
        new Update_Fix([
            "霞雪月花の威力参照修正",
            "ドラゴニックチャージの威力修正",
            "ディメンジョンティルの固定値修正"
        ])
    ]),
    new Update("2023/4/25", "1.5.6.1", [
        new Update_BuffSkill(["ゴットハンド"]),
        new Update_Skill([
            "ゴリアステイクショット",
            "ゲイザーシュート",
            "ジオクラッシャー"
        ]),
        new Update_Fix(["ロングレンジの適用倍率が最大10倍となってしまっていた部分の修正"])
    ]),
    new Update("2023/5/2", "1.5.7.0", [
        new Update_Append(["敵情報のプリセットを追加"])
    ]),
    new Update("2023/5/4", "1.6.0.0", [
        new Update_Function([
            "装備品追加の簡略化Ver機能"
        ])
    ]),
    new Update("2023/5/21", "1.6.1.1", [
        new Update_Function([
            "装備-クリスタ連携機能"
        ]),
        new Update_Fix(["敵：フラキブラキの遠近モード時のステータスを修正。"])
    ]),
    new Update("2023/5/27", "1.6.1.2", [
        new Update_Fix(["クリスタ選択時の取得不良を修正。"])
    ]),
    new Update("2023/5/30", "1.6.2.0", [
        new Update_BuffSkill(["ボウガンハンター"]),
        new Update_Skill([
            "サイクロンアロー",
            "バーティカルエア",
            "マルチプルハント派生各種"
        ])
    ]),
    new Update("2023/6/1", "1.6.3.0", [
        new Update_Equipment(["ナミダマーク(追加)"]),
        new Update_Crystal([
            "リリカロラ(ノーマル)",
            "ドミナレドル(ウェポン)"
        ]),
        new Update_Enemy([
            "リリカロラ",
            "ドミナレドル(前半/後半)"
        ])
    ]),
    new Update("2023/6/2", "1.6.3.1", [
        new Update_Fix(["敵情報：リリカロラの数値修正"])
    ]),
    new Update("2023/6/7", "1.6.4.0", [
        new Update_Append(["属性攻撃選択に『不利属性』を追加。"]),
        new Update_BuffSkill(["熱情の歌"])
    ]),
    new Update("2023/6/9", "1.7.0.0", [
        new Update_Function(["セーブ機能利用時のセーブ名の自動設定機能(空欄登録時のみ)"])
    ]),
    new Update("2023/6/15", "1.7.1.0", [
        new Update_Crystal([
            "デラックスファイターⅡ(アーマー)",
            "レオナルド博士Ⅱ(アーマー)"
        ])
    ]),
    new Update("2023/6/22", "1.7.2.0", [
        new Update_Equipment(["星辰の舟衣系統(体装備)"]),
        new Update_Crystal(["エトワーズ(アクセサリー)"])
    ]),
    new Update("2023/6/23", "1.7.2.1", [
        new Update_Fix(["クリスタ：ドミナレドルのASPD修正"])
    ]),
    new Update("2023/6/25", "1.7.3.0", [
        new Update_Change(["バフスキルのレベル選択UI"]),
        new Update_BuffSkill([
            "エターナルナイトメア",
            "ファミリア",
            "キャストマスタリ"
        ])
    ]),
    new Update("2023/6/26", "1.7.3.1", [
        new Update_Fix(["バフスキル：キャストマスタリのデメリット数値の修正"])
    ]),
    new Update("2023/6/29", "1.7.4.0", [
        new Update_Equipment([
            "水神子の法衣(体)",
            "水神子の龍角(追加)",
            "ウエストレット(追加)",
            "硬守のヘルメット(追加)",
            "襟付きミニマント(追加)",
            "プライバシーライン(追加)",
            "海星手裏剣(特殊)",
            "蛙戦士の短剣(短剣)",
            "悪爵の防輪(盾)",
        ]),
        new Update_Crystal([
            "ザポ(アーマー)",
            "ヴォードレイ(アクセサリー)"
        ]),
        new Update_Enemy([
            "ザポ",
            "ヴォードレイ"
        ])
    ]),
    new Update("2023/7/2", "1.7.5.0", [
        new Update_BuffSkill([
            "プロテクション",
            "イージス",
            "フォースシールド",
            "マジカルシールド",
            "HPブースト",
            "忍術",
            "風遁の術",
        ]),
        new Update_Skill([
            "八相発破"
        ]),
        new Update_Change([
            "サンプルデータのレベルを270に変更。",
            "パレットモードの候補数値を更新。",
            "装備品選択のアイテム表示順の変更。"
        ]),
    ]),
    new Update("2023/7/8", "1.8.1.0", [
        new Update_Append(["装備品選択項目に『レジスタ他』を追加。"]),
        new Update_Function(["メニュー内のセーブリストの順番入れ替え機能"])
    ]),
    new Update("2023/7/15", "1.9.0.0", [
        new Update_Function(["ダメージ比較機能"])
    ]),
    new Update("2023/7/16", "1.9.0.1", [
        new Update_Fix([
            "スキル：ラッシュのサブ手甲装備時の威力ボーナスが抜けていた部分の修正。",
            "スキル：チャリオットのサブ手甲装備時の威力ボーナスが抜けていた部分の修正。"
        ])
    ]),
    new Update("2023/7/23", "1.10.1.1", [
        new Update_Equipment([
            "キャスケット(追加)",
            "ドラゴンマント(追加)",
            "ビックホーン(追加)",
            "ゴシック魔女帽(追加)",
            "丸サングラス(追加)"
        ]),
        new Update_Function(["サーバー同期共有機能"]),
        new Update_Fix(["一部プロパティの表記揺れ修正"])
    ]),
    new Update("2023/7/24", "1.10.1.2", [
        new Update_Fix(["比較機能で武器同士を比較した場合に、武器自体の設定ATKが考慮されていなかった部分の修正。"])
    ]),
    new Update("2023/7/26", "1.10.2.0", [
        new Update_Append(["比較モードに『攻撃スキル』を追加。"])
    ]),
    new Update("2023/8/2", "1.10.3.0", [
        new Update_BuffSkill([
            "セイバーオーラ",
            "アークセイバー"
        ])
    ]),
    new Update("2023/8/6", "1.10.4.0", [
        new Update_Append(["カラーテーマに『キャロン』を追加。"])
    ]),
    new Update("2023/8/11", "1.10.5.1", [
        new Update_Change(["メニュー内のセーブ更新に、確認選択肢を1つ追加。"]),
        new Update_Fix([
            "装備比較の武器ATK表示不良解消。",
            "シャットアウトの倍率修正",
        ])
    ]),
    new Update("2023/8/12", "1.10.6.0", [
        new Update_Crystal(["フォルバロウズ(オプション)"])
    ]),
    new Update("2023/8/13", "1.10.7.1", [
        new Update_Skill(["フォール(全弾ヒット)"]),
        new Update_Fix(["表示不良箇所の修正。"]),
    ]),
    new Update("2023/8/14", "1.10.8.0", [
        new Update_Append(["同期モードのセーブ判定"]),
        new Update_BuffSkill(["チェインキャスト"]),
    ]),
    new Update("2023/8/15", "1.11.1.1", [
        new Update_Function(["任意登録装備品選択時に『順位設定』と『タグ指定』の選択肢を追加。"]),
        new Update_Change(["セーブ数の上限を50に変更。"]),
        new Update_Fix(["特殊装備の選択不良解消"])
    ]),
    new Update("2023/8/19", "1.11.2.0", [
        new Update_BuffSkill(["不撓不屈"]),
        new Update_Skill(["一閃"])
    ]),
    new Update("2023/8/27", "1.11.2.1", [
        new Update_Fix(["バフスキルのマジックマスタリ適用時、ATK側の武器ATK%効果が適用されていなかった部分の修正。"])
    ]),
    new Update("2023/9/4", "1.11.3.0", [
        new Update_Change(["敵に無属性か否かの情報を追加。"]),
        new Update_BuffSkill([
            "エンチャントソード",
            "エンチャントバースト"
        ]),
        new Update_Skill([
            "エンチャントソード",
            "エンチャントバースト"
        ]),
        new Update_Enemy(["ピコ"])
    ]),
    new Update("2023/9/10", "1.12.0.1", [
        new Update_Function(["○○装備時系プロパの自動適用"]),
        new Update_Fix(["エンチャントソードの抜刀威力無効→有効"])
    ]),
    new Update("2023/9/16", "1.12.1.0", [
        new Update_Crystal([
            "茄竜オヴァビオ",
            "ナス力"
        ])
    ]),
    new Update("2023/9/18", "1.12.1.1", [
        new Update_Fix(["PC表示画面の位置調整。"])
    ]),
    new Update("2023/9/21", "1.12.2.0", [
        new Update_Equipment(["シャコー帽(追加)"]),
        new Update_Crystal(["尉竜ルディス(ノーマル)"]),
        new Update_Enemy([
            "尉竜ルディス",
            "ファンティカ"
        ])
    ]),
    new Update("2023/10/1", "1.12.3.0", [
        new Update_Append(["攻撃スキル分類に魔法戦士を追加。"]),
        new Update_Change([
            "攻撃スキルのエンチャントソードの仕様変更反映。",
            "バフスキルのエンチャントソードを削除。"
        ])
    ]),
    new Update("2023/10/3", "1.12.4.0", [
        new Update_Change([
            "武器入替時の有効化スキルの強制解除廃止。",
            "攻撃スキルのエンチャントバーストの仕様変更反映。。"
        ]),
        new Update_Skill([
            "エンチャントアガラル",
            "ユニオンソード",
            "リユニオンソード"
        ])
    ]),
    new Update("2023/10/15", "1.12.5.1", [
        new UpdateBase("トーラム内スキル仕様変更の反映", UpdateType.Append, [
            "エンチャントソード",
            "エンチャントバースト(溜め0)",
            "ユニオンソード",
            "リユニオンソード"
        ]),
        new Update_Item([
            "ドーピング剤(物理攻撃)",
            "油揚げ(HP)",
            "リュアーク鎮静剤(HP)",
            "焼けたラム肉(HP)",
            "白いプルプル(回避)",
            "黄金ポム酒(回避)",
        ]),
        new Update_Fix(["特定条件下でのバフスキルの解除不良の修正。"])
    ]),
    new Update("2023/10/17", "1.12.5.2", [
        new Update_Fix(["攻撃スキルのリユニオンソードの適用安定率を魔法安定率を使用するように修正。"])
    ]),
    new Update("2023/10/19", "1.12.6.0", [
        new Update_Equipment([
            "バットイヤー帽子(追加)",
            "乗っかり魔女猫(追加)",
            "フランケンボルト(追加)",
            "ハロウィン帽子(追加)",
            "しにがみフード(追加)",
            "ぐるぐる包帯頭(追加)",
            "ダンディウルフ(追加)",
            "ハロウィンテディ(追加)",
            "ハロウィンブレラ(追加)",
            "夜闇のランタン(追加)",
            "ハッピーハロウィン(追加)",
            "紅月の外套(追加)",
            "紅月の帽子(追加)",
            "紅月の魔衣(体)",
            "苦南瓜のお守り(特殊)",
            "蝙蝠の牙矢(矢)",
        ]),
        new Update_Crystal([
            "エリプマーブ(オプション)",
            "コッファニア(ノーマル)"
        ])
    ]),
    new Update("2023/10/26", "1.12.6.1", [
        new Update_Change(["クリスタ能力表示UIの変更。"])
    ]),
    new Update("2023/10/29", "1.13.1.0", [
        new Update_Function(["装備品選択モード変更機能"]),
        new Update_BuffSkill(["コンバージョン"]),
        new Update_Item([
            "弾力ゼリー(防御)",
            "パンプソンパフェ(物理威力)",
            "リリーフグミ(魔法威力)"
        ])
    ]),
    new Update("2023/11/5", "1.13.2.1", [
        new Update_BuffSkill(["デュアルブリンガー"]),
        new Update_Skill(["エレメントスラッシュ"]),
        new Update_Fix(["衰弱付与時の魔法クリ率計算を敵が無属性の時無効化するように修正。"])
    ]),
    new Update("2023/11/16", "1.13.3.0", [
        new Update_Equipment([
            "スチールメイルP(体)",
            "スチールメイルM(体)",
            "スチールヘルム(追加)",
            "スチールリング(力)(特殊)",
            "スチールリング(魔)(特殊)",
            "スチールリング(閃)(特殊)",
            "スチールリング(耐)(特殊)",
        ]),
        new Update_Crystal(["アルタダール(アーマー)"])
    ]),
    new Update("2023/11/23", "1.13.3.1", [
        new Update_Fix(["2023/6/25以前のセーブデータが読み込めていなかった部分の修正。"])
    ]),
    new Update("2023/11/26", "1.13.3.2", [
        new Update_Fix([
            "装備品付加クリスタ選択の表示不良修正。",
            "装備品ダメージ差表示の特殊計算時の不良修正。",
        ])
    ]),
    new Update("2023/11/30", "1.13.4.0", [
        new Update_Equipment([
            "ソードメイス(武器)",
            "抑えきれぬ邪眼(追加)",
            "サイドポニー(追加)",
            "アンガーナイフ(短剣)",
        ]),
        new Update_Crystal(["ドン・プロフンド(ウェポン)"])
    ]),
    new Update("2023/12/1", "1.13.5.0", [
        new Update_Crystal(["モケロー(ノーマル)"]),
        new Update_BuffSkill([
            "クジラ肉(HP)",
            "茹でロブスター(HP)"
        ])
    ]),
    new Update("2023/12/7", "1.13.6.0", [
        new Update_Equipment([
            "ウィンター衣装Ⅱ(体)",
            "リースクラウン(追加)",
            "ニットベル帽(追加)",
            "ツリーケープ(追加)",
        ]),
        new Update_Crystal([
            "ディアルク(ウェポン)",
            "ゲーグナー(ノーマル)"
        ])
    ]),
    new Update("2023/12/11", "1.13.7.0", [
        new Update_BuffSkill(["画竜点睛"]),
        new UpdateBase("スキル調整内容反映", UpdateType.Append, [
            "ツインバスターブレード",
            "コンクェスター",
            "天流乱星",
            "不撓不屈",
            "霞雪月花",
        ])
    ]),
    new Update("2023/12/14", "1.13.8.0", [
        new Update_Crystal(["叫声の禍影(アクセサリー)"])
    ]),
    new Update("2024/1/4", "1.14.0.0", [
        new Update_Function(["攻撃スキルの特性情報表示"])
    ]),
    new Update("2024/1/19", "1.14.1.0", [
        new Update_Item([
            "ポム屋の焼き団子(物理威力)",
            "ポム屋のお雑煮(魔法威力)"
        ])
    ]),
    new Update("2024/2/4", "1.14.2.0", [
        new Update_Crystal([
            "リマシナ(ノーマル)",
            "バテュード(ウェポン)",
            "いにしえの女帝(オプション)"
        ]),
        new Update_Enemy([
            "リマシナ",
            "バテュード"
        ])
    ]),
    new Update("2024/2/10", "1.14.2.1", [
        new Update_Fix(["バグの修正。"])
    ]),
    new Update("2024/2/12", "1.14.3.1", [
        new Update_Crystal(["ペルルラージ(オプション)"]),
        new Update_Fix([
            "ローカルデータ関連のバグ修正。",
            "セーブ/引継ぎ関連のバグ関連。"
        ])
    ]),
    new Update("2024/2/21", "1.14.4.1", [
        new Update_Change(["サンプルデータのレベルを280に変更。"]),
        new Update_Equipment([
            "十露盤の盾(盾)",
            "魅力的なくちびる(追加)",
            "フルフェイス(追加)",
        ]),
        new Update_Crystal([
            "轟竜ボビナリー(ウェポン)",
            "ジルヴァ(アクセサリー)"
        ]),
        new Update_Enemy([
            "轟竜ボビナリー",
            "ジルヴァ"
        ]),
        new Update_Fix(["レジスタの無の構えの適用倍率をコンボ倍率に修正。"])
    ]),
    new Update("2024/2/23", "1.14.5.1", [
        new Update_Change(["装備品比較機能の不使用プロパの調整。"]),
        new Update_Fix(["カスタム装備品の入力不良不具合の修正。"])
    ]),
    new Update("2024/3/9", "1.14.6.0", [
        new Update_Equipment([
            "ライムドグレイブ(武器：槍)",
            "ホワイトデーリボン(追加)",
            "コリンクーヘン(追加)",
            "ホワイトニット帽(追加)",
            "クッキーの被り物(追加)",
        ]),
        new Update_Crystal(["バングルドム(アーマー)"])
    ]),
    new Update("2024/3/22", "1.14.7.0", [
        new Update_Equipment([
            "アンティークメイル(体)",
            "立派なヒゲ(追加)",
            "ホースシッポ(追加)",
            "ストロームヘルム(追加)",
            "真珠のお守り(特殊)",
            "紅真珠のお守り(特殊)",
            "蒼真珠のお守り(特殊)",
            "翠真珠のお守り(特殊)",
            "紫真珠のお守り(特殊)",
        ]),
        new Update_Crystal([
            "ドリトディ(ウェポン)",
            "ヒュミーダ(アクセサリー)",
            "ルトセーザ(ノーマル)"
        ])
    ]),
    new Update("2024/4/18", "1.14.8.0", [
        new Update_Change(["一部スキルに旧仕様表記の追加。"]),
        new Update_Crystal([
            "ブリータ(アクセサリー)",
            "タップラー(ノーマル)",
            "リリカロラ(ノーマル)",
        ]),
    ]),
    new Update("2024/4/19", "1.14.8.1", [
        new Update_Fix([
            "ATK計算不良によるダメ最低値表示",
            "同期モードの強制解除問題解消。"
        ])
    ]),
    new Update("2024/5/3", "1.15.1.1", [
        new Update_Function(["セーブ共有機能"]),
        new Update_Append([
            "未実装のプロパティ入力項目を追加。",
            "シミュレータ内未実装プロパティを既存装備品に追加。"
        ]),
        new Update_Change([
            "トーラムのスキル調整内容の反映。",
        ]),
        new Update_Equipment([
            "ブリータマスク(追加)",
            "昼春ハット(追加)",
            "昼春ヘッドドレス(追加)"
        ]),
        new Update_BuffSkill(["オーラブレード"]),
        new Update_Fix([
            "画竜点睛バフを弓抜刀時も選択できるように修正。",
            "無影斬の弓抜刀時、ロングレンジが起用されるように修正。"
        ])
    ]),
    new Update("2024/5/5", "1.16.0.0", [
        new Update_Function(["武器特性のカスタム装備品内セット登録機能"])
    ]),
    new Update("2024/5/16", "1.16.1.0", [
        new Update_Equipment([
            "ポトゥムブレイド(両手剣)",
            "乗っかりフラッペン(追加)",
        ]),
        new Update_Crystal([
            "勇者ポトゥムⅣ(ウェポン)",
            "ポトゥムッターⅡ(アクセサリー)"
        ]),
        new Update_Enemy([
            "ヒュミーダ",
            "ルトセーザ",
            "ドリトディ"
        ])
    ]),
    new Update("2024/5/19", "1.16.2.0", [
        new Update_Skill(["LブーメランⅢ"]),
        new Update_Change(["期待値計算モードの適用範囲拡張"])
    ]),
    new Update("2024/5/20", "1.16.2.1", [
        new Update_Fix([
            "セーブ記録不具合の修正。",
            "期待値計算モードの表示不良修正"
        ])
    ]),
    new Update("2024/5/25", "1.17.1.0", [
        new Update_Function(["ステータス表示変更機能"]),
        new Update_BuffSkill(["レゾナンス"]),
        new UpdateBase("レジスタの追加", UpdateType.Append, [
            "レゾナンス3種"
        ])
    ]),
    new Update("2024/5/30", "1.17.2.0", [
        new Update_Crystal([
            "ミーティア(アーマー)",
            "ジブリールⅢ(オプション)"
        ])
    ]),
    new Update("2024/6/4", "1.17.3.1", [
        new Update_Append(["ステ振り上昇値の確認画面"]),
        new Update_Crystal(["ムルグウン・ハンド(アーマー)"]),
        new Update_Change([
            "サンプルデータのレベルを285に変更。",
            "パレットモードの候補地を更新。"
        ]),
        new Update_Fix(["レゾナンスの適用武器種修正"])
    ]),
    new Update("2024/6/7", "1.17.4.1", [
        new Update_BuffSkill([
            "前線維持Ⅱ",
            "強力な追撃"
        ]),
        new Update_Skill(["赫焉シャイニングクロス"]),
        new Update_Fix(["FREE⇒FLEE"])
    ]),
    new Update("2024/6/20", "1.18.1.1", [
        new Update_Function(["装備品選択フィルター"]),
        new Update_Change([
            "装備品選択の初期選択表示変更"
        ]),
        new Update_Equipment([
            "ディグニダー(武器：手甲)",
            "鮭とばの双拳(武器：手甲)",
            "スターダストガード(追加)",
            "ブローカーの印(特殊)"
        ]),
        new Update_Crystal(["原初の誘月華(ウェポン)"]),
        new Update_Fix(["装備品誤記の修正。"])
    ]),
    new Update("2024/6/27", "1.19.1.0", [
        new Update_Function(["装備品名称絞り込みフィルター"]),
        new Update_Crystal([
            "デフォーミス(ウェポン)",
            "カレリーフ(ノーマル)"
        ]),
        new Update_Enemy([
            "デフォーミス",
            "カレリーフ"
        ])
    ]),
    new Update("2024/7/16", "1.19.1.1", [
        new Update_Fix(["装備品増殖バグの修正。"])
    ]),

    new Update("2024/8/4", "1.20.1.1", [
        new Update_Function(["重複装備品強制修正機能(ver2)"]),
        new Update_Enemy(["レイドボス各種"]),
        new Update_Change(["サンプルデータのレベルを290に変更。",]),
        new Update_Fix(["バフスキルの魔術の導のCSPDをトーラム本来の仕様に修正。"])
    ]),
    new Update("2024/8/5", "1.20.2.1", [
        new Update_Append(["BringerA/M表示の追加。"]),
        new Update_Fix(["攻撃スキルのユニオンソードにデュアルブリンガーによる補正値を含めるように修正。"])
    ]),
    new Update("2024/8/7", "1.20.2.2", [
        new Update_Fix([
            "攻撃スキルのエンチャントソードの２撃目をトーラム仕様変更内容に修正。",
            "強制有利+敵無属性時の特性修正",
            "スチールメイル誤表記修正",
            "コリンクーヘン誤表記修正"
        ])
    ]),
    new Update("2024/8/11", "1.20.3.0", [
        new Update_Equipment([
            "気になるカッパ君(追加)",
            "ビーチボール盾(盾)"
        ]),
        new Update_Crystal(["深海の晶怪獣(オプション)"]),
        new Update_BuffSkill(["オーガスラッシュ"]),
        new Update_Skill(["オーガスラッシュ"])
    ]),
    new Update("2024/8/13", "1.20.4.0", [
        new Update_Append(["パレットモード3の追加。"])
    ]),
    new Update("2024/8/14", "1.20.4.1", [
        new Update_Fix(["ルーナディザスターの特性修正。"])
    ]),
    new Update("2024/8/15", "1.20.5.1", [
        new Update_Append(["カラーモード：サイバーを追加。"]),
        new Update_Fix(["特定条件での入力不能バグの解消。"])
    ]),
    new Update("2024/8/23", "1.21.0.0", [
        new Update_Function(["装備品セットダメージ比較機能"]),
        new UpdateBase("機能廃止", UpdateType.Append, [
            "与ダメ側ダメ比較機能の一部削除(装備品比較)"
        ])
    ]),
    new Update("2024/8/25", "1.21.1.0", [
        new Update_Equipment(["王者のベルト(追加)"]),
        new Update_Crystal(["王者メギストン(ウェポン)"]),
        new Update_BuffSkill(["急速チャージ"])
    ]),
    new Update("2024/8/29", "1.21.2.0", [
        new Update_Equipment(["カスティリアシリーズ"]),
        new Update_Crystal(["カスティリア(オプション)"])
    ]),
    new Update("2024/9/1", "1.21.3.0", [
        new Update_Append(["バフスキルの操作説明表示の追加。"])
    ]),
    new Update("2024/9/7", "1.22.0.1", [
        new Update_Function(["装備品お気に入り設定機能"]),
        new Update_Fix(["表記の修正"])
    ]),
    new Update("2024/9/12", "1.22.1.0", [
        new Update_Append(["バフスキルの説明に武器種により適用しない方の能力値も追加。"])
    ]),
    new Update("2024/9/23", "1.22.2.0", [
        new Update_Equipment([
            "団子帽子(串)(追加)",
            "ふわもこフード(追加)"
        ]),
        new Update_Crystal(["フビット(ウェポン)"]),
        new Update_Skill(["エアスライド"])
    ]),
    new Update("2024/9/25", "1.22.3.1", [
        new Update_BuffSkill(["マナリチャージ"]),
        new Update_Fix([
            "敵情報のガルドゴーレムのボス属性を修正。",
            "アシュラオーラのクリ率修正"
        ])
    ]),
    new Update("2024/10/13", "1.22.4.1", [
        new Update_Change(["共有コードからも登録時データを取得できるように変更。"]),
        new Update_Equipment([
            "ラスグリフナックル(武器)",
            "エルモターバン(追加)",
            "ラフレシア帽(追加)",
        ]),
        new Update_Crystal([
            "メンティ(ウェポン)",
            "ダンドリオン(アーマー)",
        ]),
        new Update_Enemy([
            "メンティ",
            "ダンドリオン"
        ]),
        new Update_Skill(["ドラゴニックチャージ(バリエーション)"]),
        new Update_Fix([
            "素手の最低安定率を1%に修正。",
            "HPのマイナス基礎時の計算式修正。",
            "バグの修正。",
            "表記の修正。"
        ])
    ]),
    new Update("2024/10/17", "1.22.5.1", [
        new Update_Change(["装備品選択モード2を指定プロパ選択制(ランキング)に変更"]),
        new Update_Fix(["バグの修正"])
    ]),
    new Update("2024/10/18", "1.22.5.2", [
        new Update_Fix(["表示エラーの修正"])
    ]),
    new Update("2024/10/19", "1.22.6.0", [
        new Update_Change(["HP上限設定の追加"])
    ]),
    new Update("2024/10/22", "1.23.1.0", [
        new Update_Function(["現入力版のセーブ共有コード発行機能"]),
        new Update_Append(["プロパティ：TECの追加"])
    ]),
    new Update("2024/10/24", "1.23.2.0", [
        new Update_Equipment([
            "エアリアルシールド(盾)",
            "おしゃぶり(追加)",
            "レトロサングラス(追加)",
            "エポレットマント(追加)",
            "ダンサースカート(追加)",
            "アクマヴェール(追加)",
            "骸骨ツインリボン(追加)",
            "ゾンビトロフィー(追加)",
            "うさゾンリュック(追加)",
            "死霊のヴェール(追加)",
        ]),
        new Update_Crystal(["ビーモズ(アーマー)"])
    ]),
    new Update("2024/10/31", "1.23.3.1", [
        new Update_Append([
            "攻撃スキル欄に『威力参照/攻撃力』を追加。",
            "プロパティに爆発軽減を追加。"
        ]),
        new Update_Equipment([
            "エクトピエズム(追加)",
            "ファントムケープ(追加)",
            "メディカルメッサー(短剣)"
        ]),
        new Update_Crystal([
            "彼方の残影(ノーマル)",
            "バングルドム(バリエーション)",
        ]),
        new Update_Fix([
            "スタビリス発動時の安定率上限を120%に修正。",
            "文章の修正"
        ])
    ]),
    new Update("2024/11/3", "1.23.3.2", [
        new Update_Fix(["死霊のヴェールのプロパティを修正。"])
    ]),
    new Update("2024/11/4", "1.23.3.3", [
        new Update_Fix(["ダンサースカートのプロパティを修正。"])
    ]),
    new Update("2024/11/5", "1.23.4.0", [
        new Update_Crystal(["ゼーレザウガⅡ(オプション)"])
    ]),
    new Update("2024/11/12", "1.23.5.0", [
        new Update_Append(["基本ステータス(壁)にクリ率/安定率の表示を追加。"]),
        new Update_Change(["セーブ共有取得時に名称を表示するように変更。"])
    ]),
    new Update("2024/11/19", "1.23.6.1", [
        new Update_Change(["レイド系ボスのデフォルトレベルを288に変更。"]),
        new Update_Fix([
            "サテライトアローのボウガンハンター適用漏れ修正",
            "ドラゴニックチャージの遠距離有効⇒無効に修正"
        ])
    ]),
    new Update("2024/11/21", "1.24.1.0", [
        new Update_Function(["データ切替機能"]),
        new Update_Append(["データ管理メニュー画面"]),
        new Update_Change(["キャストマスタリの最大値を150に変更。"]),
        new Update_Equipment([
            "重鉄の腰甲(追加)",
            "リボンピアス(追加)",
            "アクセツインテール(追加)",
            "ウエストローブ(追加)"
        ]),
        new Update_Crystal([
            "メデューソ(ウェポン)",
            "ビスキーバ(アーマー)"
        ]),
    ]),
    new Update("2024/12/1", "1.24.2.0", [
        new Update_Append(["バフアイテムに魔法防御カテゴリを追加。"]),
        new Update_Change([
            "アイテムバフ：防御の名称を物理防御に変更。",
            "アイテムバフ選択順を並び替え。",
            "敵カスタム入力の耐性値の下限を-1000%に変更。"
        ]),
        new Update_Item([
            "謎のポーション(Y)(物理防御)",
            "謎のポーション(P)(魔法防御)"
        ]),
        new Update_Equipment([
            "グラシャルウィング(追加)"
        ])
    ]),
    new Update("2024/12/3", "1.24.2.1", [
        new Update_Fix(["表記の修正。"])
    ]),
    new Update("2024/12/8", "1.24.3.1", [
        new Update_Fix([
            "バフスキルのナイトプレッジの精錬値判定方法をバフスキル内判定に修正。"
        ]),
        new Update_Change([
            "攻撃スキルのシャープスナイプを現行仕様の調整内容に変更。"
        ]),
        new Update_Item([
            "モニスタグミ(物理威力)",
            "ミイラロール(魔法威力)"
        ]),
        new Update_BuffSkill([
            "フォーカス",
            "カムフラージュ(アクティブバフ)",
            "狩人の知識",
            "ナイトプレッジ",
            "暗殺の極意"
        ]),
        new Update_Skill([
            "ハードヒット",
            "火遁の術",
            "風遁の術",
            "雷遁の術",
            "風遁・兜割り",
            "雷遁・紫電一閃",
        ]),
    ]),
    new Update("2024/12/13", "1.24.4.0", [
        new Update_Change([
            "バフスキルのブレイブオーラに使用者判定を追加。"
        ]),
        new Update_Crystal([
            "グランプロムス(アーマー)",
            "フォービダンサー(オプション)"
        ]),
        new Update_Equipment([
            "小人の帽子(追加)",
            "チェック柄ベレー(追加)",
            "雪だるまリュック(追加)",
            "クリスマスキャンドル(追加)",
            "ジンジャースマイル(追加)",
            "サンタおっきい帽子(追加)",
            "ジンジャーウインク(追加)",
            "ゴリ・タリスマン(特殊)"
        ])
    ]),
    new Update("2024/12/18", "1.24.5.2", [
        new Update_Fix(["スキル表示名称の修正。"]),
        new Update_BuffSkill(["パンプキンスープ(属性攻撃)"])
    ]),
    new Update("2024/12/22", "1.24.6.0", [
        new Update_Equipment(["ジンジャーサンタ(追加)"]),
        new Update_Skill(["術式/ブラスト"])
    ]),
    new Update("2025/1/2", "1.24.7.0", [
        new Update_Change(["バフスキルの表示位置変更。"])
    ]),
    new Update("2025/1/3", "1.24.8.1", [
        new Update_Fix(["特定武器使用時の計算不良修正"]),
        new Update_Append(["PTバフスキルの表示優先設定"]),
        new Update_Equipment(["王獣の腕輪(特殊)"])
    ]),
    new Update("2025/1/4", "1.24.8.2", [
        new Update_Fix(["カムフラージュのヘイト修正"])
    ]),
    new Update("2025/1/10", "1.24.9.0", [
        new Update_BuffSkill(["クイックオーラにLv選択を追加。"]),  
    ]),
    new Update("2025/2/2", "1.24.10.1", [
        new Update_Fix(["クリスタ：ビルロッシュのヘイト適用値修正"]),
        new Update_Change([
            "勲章ボーナスステータスポイントの基準をLv295時点に変更。",
            "ステータスポイントの上限値を510に変更。",
            "サンプルデータのレベルをLv295に変更。"
        ]),
        new Update_Item([
            "猛者の赤褌(HP)",
            "キニナーレ(MP)"
        ]),
        new Update_Enemy([
            "ビスキーパ",
            "ピヌグールガ",
            "メデューソ",
            "マバーキ",
        ]),
    ]),
    new Update("2025/2/6", "1.24.11.0", [
        new Update_Crystal(["ピヌグールガ(ノーマル)"]),
    ]),
    new Update("2025/2/9", "1.24.11.1", [
        new Update_Fix(["名称の修正"])
    ]),
    new Update("2025/2/15", "1.24.12.0", [
        new Update_Equipment([
            "マルミミハット(追加)",
            "バレンタインケープ(追加)",
            "バレンタインテディ(追加)",
            "本命覆面チョコ(追加)",
            "パティシエ帽子(追加)"
        ]),
        new Update_Crystal([
            "アイヤーク(オプション)",
            "マバーキ(アクセサリー)"
       ]) 
    ]),
    new Update("2025/2/17", "1.24.13.2", [
        new Update_Fix([
            "旋身番撃ちの威力ボーナス、追撃にロングレンジが乗ってしまっていた部分の修正。",
            "一部表記の修正"
        ]),
        new Update_Equipment([
            "異国の前掛け(追加)",
            "海霧のコンパス(特殊)"
        ])
    ]),
    new Update("2025/2/24", "1.24.14.0", [
        
        new Update_Equipment([
            "一周巻きマフラー(追加)",
            "マカロンヘッド(追加)"
        ]),
        new Update_Crystal(["春方の夢見草(ウェポン)"]),
    ]),
    new Update("2025/3/19", "1.24.15.0", [
        new Update_Equipment([
            "ズキューンハート(追加)",
            "チョコくまミミ(追加)",
            "フラワーバッグ(追加)",
            "ブルーローズウィング(追加)",
        ]),
        new Update_Crystal([
            "ゴブリン・ズコット(オプション)",
            "暴獣リグシー(ノーマル)"
       ]) 
    ]),
    new Update("2025/3/21", "1.24.16.0", [
        new Update_NonTitle(["操作マニュアルの追加※メニューから"]),
        new Update_Crystal([
            "キングウシキングⅡ(オプション)",
            "真・魔晶の獣(ウェポン)"
       ])
    ]),
    new Update("2025/3/24", "1.24.16.1", [
        new Update_Fix(
            [
                "幽森の姫巫女のプロパ修正",
                "UIの修正"
            ]
        ),
    ]),
    new Update("2025/4/1", "1.24.16.2", [
        new Update_Fix([
            "ゴブリン・ズコットのヘイト値修正",
            "データロード時の特性プロパの表示漏れの修正"
       ]) 
    ]),
    new Update("2025/4/10", "1.24.16.3", [
       new Update_Fix(["表示の修正"]) 
    ]),
    new Update("2025/4/14", "1.24.16.4", [
        new Update_Fix(["表示の再修正"]) 
    ]),    
    new Update("2025/4/15", "1.24.17.1", [
        new Update_Fix(["クイックオーラのテキスト修正"]) ,
        new Update_Crystal(["バクザン(ウェポン)"]),
        new Update_Skill(["トールハンマー(単発)"])
    ]),   
    new Update("2025/4/16", "1.24.17.2", [
        new Update_Fix([
            "表示の再々修正",
            "マバーキのプロパティ修正",
            "海霧のコンパスのプロパティ修正"
        ])
    ]),
    new Update("2025/04/20", "1.24.17.3", [
       new Update_Fix(["コンボスキル表示不良の修正"]) 
    ]),
    new Update("2025/04/24", "1.24.17.4", [
       new Update_Fix(["ドラゴニックチャージ2段目のMATKを特殊MATKに変更。"]) 
    ]),
    new Update("2025/4/29", "1.24.18.1", [
        new Update_Fix([
            "エタナイ、破壊時の防御計算順序修正",
            "攻撃スキルのステータス補正呼称統一(基礎または補正後)"
        ]),
        new Update_Change([
            "サンプルデータのレベルをLv300に変更。"
        ]),
        new Update_ToramFix([
            "コンバージョンにINTに応じた基礎MATK上昇効果を追加(手甲を除く)",
            "アシュラオーラの倍率をスキルツリーにより1.1または1.3倍に変更",
            "レパージブーメランⅢの倍率1500%⇒1350%(前提含めLv10)"
        ]),
        new Update_Item([
            "葉桜茶(命中)"
        ]),
        new Update_Skill([
            "ワイドスプレッド",
            "ペネトレイター"
        ]),
    ]),
    new Update("2025/5/1", "1.24.18.2", [
        new Update_Fix(["特定スキルによる動作不良修正"])
    ]),
    new Update("2025/5/25", "1.24.19.1", [
        new Update_Fix([
            "ビスキーパ→ビスキーバ",
            "クリスマスキャンドル(異常耐性30%→20%)"
        ]),
        new Update_Skill([
            "ライトニングへイル",
            "トールハンマーバリエーション",
            "エアリアルレイ(魔道具ver除く)"
        ]),
        new Update_Enemy(["バクザン"])
    ]),
    new Update("2025/6/15", "1.24.20.1", [
        new Update_Fix(["天流乱星(段位可変)の不撓不屈ボーナス適用漏れの修正。"]),
        new Update_Change([
            "ランキング機能に昇順項目を追加。"
        ]),
        new Update_Append(["ランキング機能に優先度3を追加。"]),
        new Update_Equipment(["てるてるポトゥム(追加)"]),
        new Update_Skill([
            "天流乱星・斬維"
        ])
    ]),
    new Update("2025/6/16", "1.24.21.0", [
        new Update_Skill([
            "フリンチナイフ",
            "ファイティングナイフ",
            "桜花爛漫",
            "クロノスドライブ"
        ])
    ]),
    new Update("2025/6/17", "1.24.21.1", [
        new Update_Fix(["コンボ無効スキルに対する無の構えの適用漏れ修正。"]),
    ]),
    new Update("2025/6/21", "1.24.21.2", [
        new Update_Append(["カスタム入力の攻撃スキルにATKの選択肢を追加。"]),
        new Update_Skill(["ルーナディザスター(バリエーション)"])
    ]),
    new Update("2025/6/23", "1.24.21.3", [
        new Update_Fix(["TECステのMP適用値の修正"])
    ]),
    new Update("2025/6/26", "1.24.22.0", [
        new Update_Item([
            "ドンドゥルマ(HP)",
            "ちらし寿司(速度)",
            "いなり寿司(詠唱速度)",
        ]),
        new Update_Equipment([
            "螺鈿真珠の手甲(武器)",
            "サリーの短剣(手甲)(武器)",
            "カナデのキューブ(武器)",
            "シャドウホーン(追加)"
        ]),
        new Update_Crystal([
            "グーラ(オプション)",
            "黒リグシー(アクセサリー)",
            "機械神メイプル(アクセサリー)"
        ])
    ]),
    new Update("2025/7/14", "1.24.22.1", [
        new Update_Fix([
            "トールハンマーの威力ボーナス一部適用漏れの修正。",
            "エアスライサーのレジスタ威力ボーナスの上昇値修正。"
        ])
    ]),
    new Update("2025/7/15", "1.24.22.2", [
        new Update_Fix(["Lブーメランの2撃目威力倍率を1500%→1350%に修正。"])
    ]),
    new Update("2025/7/21", "1.24.22.3", [
        new Update_Fix([
            "双剣クリ率計算方法の修正。",
            "ライトニングへイルの距離威力適用無効化。",
            "トールハンマーの距離威力適用無効化。"
        ])
    ]),
    new Update("2025/8/10", "1.24.23.0", [
        new Update_Equipment([
            "サメスイムウェア(体)",
            "海賊骸帽(追加)",
            "頭乗りサメっ子(追加)",
            "ポトゥムビアサーバー(追加)",
            "サメスイムテール(追加)",
        ])
    ]),
    new Update("2025/8/12", "1.24.23.1", [
        new Update_Fix(["ブレッパのDEF修正。"])
    ]),
    new Update("2025/8/16", "1.24.24.0", [
        new Update_Enemy(["スクルーダ"]),
        new Update_Skill(["トールハンマー(追撃8hit総ダメ)"])
    ]),
    new Update("2025/8/21", "1.24.24.1", [
        new Update_Fix([
            "フラッシュアーツの参照慣れ修正",
            "トールハンマーのINTボーナスの小数点以下の計算方法を修正"
        ])
    ]),
    new Update("2025/8/27", "1.24.24.2", [
        new Update_Fix(["3溜めクロスファイアの補正値ボーナスを1→3倍に修正。"])
    ]),
    new Update("2025/8/28", "1.24.25.0", [
        new Update_Equipment([
            "ドゥアトローブ(体)",
            "ドゥアトローブ(冥)(体)",
            "ドゥアトローブ(審)(体)",
            "ドゥアトマスク(追加)"
        ]),
        new Update_Crystal(["メルゼハール(アーマー)"]),
        new Update_Fix(["プロパティ名称を一部変更。"])
    ]),
    new Update("2025/9/10", "1.24.26.0", [
        new Update_Change(["攻撃スキル：ブリザードを魔法系統に移動。"]),
        new Update_Crystal(["コロン大親分(ノーマル)"]),
        new Update_BuffSkill(["魔術研究"]),
        new Update_Skill([
            "ライトニング",
            "メテオストライク",
            "インペリアルレイ"
        ])
    ]),
    new Update("2025/9/13", "1.24.26.1", [
        new Update_Fix([
            "HP計算時小数点以下のVITを切り捨てするように修正。",
            "プロパティ検索でワードをATKとした時、MATK系を除外するように修正。"
        ])
    ]),
    new Update("2025/9/26", "1.24.27.1", [
        new Update_Fix(["葉桜茶の効果修正"]),
        new Update_Append(["ステータス確認に隠しステの項目を追加"]),
        new Update_ToramFix([
            "ドラゴニックチャージ",
            "ディメンジョンティル",
            "ルーナディザスター"
        ]),
        new Update_BuffSkill(["神の槍捌き"])
    ]),
    new Update("2025/10/9", "1.24.28.0", [
        new Update_BuffSkill(["ルーナディザスター・強襲(レジスタ)"])
    ]),
    new Update("2025/10/26", "1.24.29.0", [
        new Update_Fix([
            "一部バフスキルで想定外の数値になる問題の修正。",
            "一部環境下での表示UI調整。"
        ]),
        new Update_Append(["プロパティ：基礎武器ATK"]),
        new Update_BuffSkill(["瑞風"]),
        new Update_Crystal([
            "クロモモ忍者(アーマー)",
            "モンジャ(アーマー)"
        ])
    ]),
    new Update("2025/11/2", "1.24.30.1", [
        new Update_Fix([
            "クロノスドライブの補正値修正。"
        ]),
        new Update_ToramFix([
            "ツインバスターブレード2撃目に確定クリティカル属性を追加。"
        ]),
        new Update_Append([
            "自由入力欄4-7",
            "装備品選択タブ名称変更"
        ]),
        new Update_Crystal([
            "魔影の騎屍(オプション)",
            "オロバイド(アクセサリー)",
            "チュルミナ(ノーマル)"
        ]),
        new Update_BuffSkill([
            "一陣",
            "一陣・改"
        ]),
        new Update_Skill([
            "雲雀",
            "雁渡",
            "居吹",
            "荒南風",
            "四季折々"
        ]),
    ]),
    new Update("2025/11/3", "1.24.31.0", [
        new Update_Fix([
            "武器選択時のスキル表示整理"
        ]),
        new Update_ToramFix([
            "コンクェスターの威力情報判定をツインストームのバフ数に変更。",
            "パラボラキャノンの特性反映"
        ]),
        new Update_Change([
            "コンクェスター(ボルト切れ)削除"
        ]),
        new Update_BuffSkill([
            "ツインストーム"
        ])
    ]),
    new Update("2025/11/15", "1.24.32.1", [
        new Update_Fix([
            "パライズショット、急速チャージが非表示になってしまう不具合の修正。"
        ]),
        new Update_Equipment([
            "ツインイーグルⅡ(武器)",
            "シュライフウィング(武器)",
            "ライトニングフレイムⅡ(武器)"
        ]),
        new Update_Crystal([
            "ポムーチェンⅢ(ウェポン)",
            "ポトゥムッターⅢ(アクセサリー)"
        ])
    ]),
    new Update("2025/11/17", "1.24.32.2", [
        new Update_Fix(["一部バフスキルの表示不良修正。"])
    ]),
    new Update("2025/11/24", "1.25.1.1", [
        new Update_Fix(["機械神メイプルの情報修正。"]),
        new Update_Function([
            "バフアイテムカスタム(プリセットカスタム内)",
            "バフスキルカスタム"
        ]),
        new Update_NameChange(["装備品カスタム→プリセットカスタム"]),
        new Update_Skill(["ホライゾナルカット"])
    ]),
    new Update("2025/11/26", "1.25.1.2", [
        new Update_Fix(["ゴリアステイクショット(溜め可変)の補正値修正。"])
    ]),
    new Update("2025/11/29", "1.25.2.1", [
        new Update_Fix(["同期モード間でカスタムを削除した際の挙動修正。"]),
        new Update_ToramFix([
            "アロー、ストームの固定値を最新の情報に修正。"
        ]),
        new Update_Crystal([
            "プイエット(オプション)"
        ]),

    ]),
    new Update("2025/12/2", "1.25.2.2", [
        new Update_Fix(["ブレイブ、フィロ、バスター適用時の武器ATK適用漏れの修正。"])
    ]),
    new Update("2025/12/3", "1.25.2.3", [
        new Update_Fix(["術式/ランサーの武器種別Hit数修正。"])
    ]),
    new Update("2025/12/7", "1.25.2.4", [
        new Update_Fix(["術式/インパクトの杖/魔道具装備時の威力修正。"])
    ]),
    new Update("2025/12/28", "1.25.3.0", [
        new Update_Change([
            "HPが1以下になる場合の表示方法変更"
        ]),
        new Update_Equipment([
            "戦律の短剣(サブ)",
            "トゲトゲチョーカー(追加)",
            "なりきり辺境伯(追加)"
        ]),
        new Update_Crystal([
            "幻奏の辺境伯(ウェポン)",
            "マギフィレーシア改(ウェポン)",
            "グロック(アーマー)",
            "トップスターポトゥム(オプション)"
        ])
    ]),
    new Update("2026/1/5", "1.25.3.1", [
        new Update_Fix(["クロノスドライブ追撃のスキル補正値の修正。"])
    ]),
    new Update("2026/2/2", "1.25.4.0", [
        new Update_Crystal(["ジョコ(ノーマル)"])
    ]),
    new Update("2026/2/19", "1.25.5.1", [
        new Update_Fix(["クリスタ：ダンドリオンの装備ボーナス適用不良修正"]),
        new Update_Change(["装備品のグループ順番整理"]),
        new Update_Equipment(["ゴシックチョコ帽子(追加)"])
    ]),
    new Update("2026/3/23", "1.25.6.0", [
        new Update_Append(["サブ装備に装備品情報を追加。"]),
        new Update_Equipment([
            "インセクトナイフ(短剣)",
            "ゴスペルリング(特殊装備)"
       ]), 
    ]),
    new Update("2026/4/6", "1.25.7.0", [
        new Update_Equipment(["スナイパーレンズ(追加)"]),
        new Update_Crystal([
            "カナヨガン(オプション)",
            "デラダンビット(オプション)"
        ])
    ]),
    new Update("2026/4/7", "1.25.8.0", [
        new Update_Crystal([
            "ドイ(ウェポン)",
            "マリ(アーマー)"
        ])
    ]),
    new Update("2026/4/10", "1.25.9.0", [
        new Update_Equipment([
            "銀の盾(Bemmo)(盾)"
        ]),
    ]),
    new Update("2026/4/15", "1.25.10.1", [
        new Update_Fix([
            "割合バリアを%に修正。"
        ]),
        new Update_Crystal([
            "デスタレス(ウェポン)"
        ]),

    ]),
    new Update("2026/4/29", "1.25.11.1", [
        new Update_Fix([
            "ルーナディザスター追撃の距離特性の強制適用化"
        ]),
        new Update_Skill(["サモンモデモニックシリーズ"])
    ]),
    new Update("2026/5/24", "1.25.12.2", [
        new Update_Fix([
            "術式/カノンでサブ魔道具指定時に威力が上がらないように修正",
        ]),
        new Update_ToramFix([
            "ツインバスターブレード"
        ])
    ]),
    new Update("2026/5/25", "1.25.13.0", [
        new Update_Crystal([
            "ロンディネ(ウェポン)",
            "ハウドヴィス(ウェポン)"
        ])
    ]),
    new Update("2026/6/4", "1.25.14.1", [
        new Update_Fix([
            "カスタムクリスタが削除できない不具合の修正。"
        ]),
        new Update_Crystal([
            "豪雷破閃(アーマー)"
        ])
    ]),
    new Update("2026/6/10", "1.25.15.0", [
        new Update_Equipment([
            "トナカホーン(追加)"
        ])
    ])
];

/**更新履歴を表示する。 */
export function ViewArchive(ViewInfo = true) {
    const TopElem = Judey.$Element("div").Class("Reference_Back");
    const ArchiveElem = Judey.$Element("div").Class("UpdateArchives").AppendLast(`
        <i class="Close"><i></i></i>    
        <div>
            <h2 class="UpdateArchives_TopInfo">更新履歴</h2>
            <div class="UpdateArchives_Versions"></div>
        </div>
        
    `);

    const VersionElems = ArchiveElem.$Ncls("UpdateArchives_Versions");

    UpdateArchives.forEach(archive => {
        const VersionElem = Judey.$Element("div").Class("UpdateArchives_Item");
        VersionElem.AppendLast(`
            <div class="Flex UpdateArchives_Item_DateVersion">
                <h3>${archive.Date}</h3>
                <span>ver.${archive.Version}</span>
            </div>
            
        `);

        archive.Items.forEach(item => {
            const SectionElem = Judey.$Element("div").Class("UpdateArchives_Item_Sections");
            SectionElem.AppendLast(`<h4 class="UpdateArchives_Item_Sections_Info">${item.Name}</h4>`);

            item.Items.forEach(content => {
                SectionElem.AppendLast(`
                    <div class="UpdateArchives_Item_Sections_Section Flex">
                        <p>・</p>
                        <p>${content.replaceAll("\n","<br>")}</p>
                    </div>
                `);
            });
            VersionElem.AppendLast(SectionElem);
        });
        VersionElems.AppendFirst(VersionElem);
    });

    TopElem.AppendLast(ArchiveElem);

    if (ViewInfo) {
        TopElem.$Ncls("UpdateArchives_TopInfo").AppendLast(`
            <p>※更新履歴はメニューからも確認できます。</p>
        `);
    }

    //閉じるボタン
    TopElem.$Ncls("Close").OnceEvent("click", () => TopElem.Rem());

    Judey.$tag("body").AppendFirst(TopElem);
}
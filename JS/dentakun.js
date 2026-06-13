class CalcConfig{
  _Value = 0;
  _InputTarget;
  constructor(RangeSet = [],Ex = null) {
    this.Base = RangeSet[0] || 0;
    this.Min = RangeSet[1] || -999;
    this.Max = RangeSet[2] || 999;
    this.IsUnder0 = this.Min < 0 ? true : false;
    this.Ex = Ex;
  }
  Render = (ParentElem, Type) => {
    const elem = Judey.$Element("div", "", "Dentakun")
      .Child("div", "", "Flex");
    
    if (Type === "Dentaku") {
      elem.Child("div", "", "Dentaku")
        .Child("p", "", "Denta_CalcTitle")
        .Text("電卓").Breaker()
        .Child("table", "", "Denta_TenkeySet")
        .Child("tobody")
        .Child("tr")
        .Child("td", "", "Denta_Tenkey")
        .Text("AC")
        .Attr("data-value", "del")
        .Style("background-color:red").Breaker()
        .Child("td", "", "Denta_Tenkey")
        .Text("マイナス(-)")
        .Attr("data-value", "-")
        .Attr("colspan", "2")
        .Style("background-color:blue").Breaker(2);
          
      
      const BaseNum = [1, 2, 3];
      for (let i = 0; i < 3; i++) {
        elem.Child("tr");
        BaseNum.forEach(num => {
          const value = String(num + i * 3);
          elem.Child("td", "", "Denta_Tenkey")
            .Text(value)
            .Attr("data-value", value).Breaker();
        })
        elem.Breaker();
      }
      elem.Child("tr")
        .Child("td", "", "Denta_Tenkey")
        .Text("0")
        .Attr("colspan", "3")
        .Attr("data-value", "0").Breaker(5);
    }
    //共通
    elem.Child("div", "", "Kouho");
    this.Render_kouho(elem, false);
    elem.Breaker(3)
      .Child("p", "", "Dentakun_Exit").Breaker(2);
    
    //レンダリング
    ParentElem.insertAdjacentElement("afterend", elem.Elem());
    this._Event();
  }
  Render_kouho = (elem = null, IsReload = true) => {
    if (!elem) elem = Judey.$cls("Kouho");
    if (IsReload) elem.RemChild();
    elem.Child("p", "", "Denta_CalcTitle")
      .Text("候補").Breaker()
      .Child("ul", "", "List");
    if (!this.Ex) return;
    for (let value of this.Ex) {
      if (value === undefined) continue;
      const Cls = value > 0 ? "Plus" : value < 0 ? "Minus" : "";
      elem.Child("li", "", "Denta_Calc").Text(String(value))
        .Attr("data-value", String(value))
        .Class(Cls).Breaker();
    }
  }
  _Event = (IsOnlykouho = false) => {
    //入力候補
    Judey.$cls("Denta_Calc").Event("click", (e) => {
      const value = e.target.dataset.value;
      this.SetValue(value, true);
      this._InputTarget.value = this.GetValue();
      this._InputTarget.dispatchEvent(new Event("change"));
    })
    
    if (IsOnlykouho) return;

    //テンキー操作時の動作
    const TenKey = Judey.$cls("Denta_Tenkey");
    TenKey.Event("click", (e) => {
      const Target = Judey.$elem(e.target);
      const Target_value = e.target.dataset.value;

      TenKey.RemClass("Denta_Tenkey_clicked");
      Target.Class("Denta_Tenkey_clicked");
      
      //削除
      this.SetValue(Target_value);

      //選択要素への適用とイベント発生
      this._InputTarget.value = this.GetValue();
      this._InputTarget.dispatchEvent(new Event("change"));
      if (this.GetValue() === 0) this._InputTarget.value = 0;
    })

    //閉じる
    Judey.$cls("Dentakun_Exit").OnceEvent("click",this.Exit);
  }
  GetValue = () => this._Value;
  SetValue = (Mode, NoCheck = false) => {
    if (NoCheck) {
      this._Value = Mode;
      return;
    }
    if (Mode === "del") {
      this._Value = 0;
    } else if (Mode === "-") {
      if (this._Value === 0) {
        this._Value = "-";
        return;
      }
      this._Value = Number(`-${this._Value}`) || 0;
    } else {
      const Result = Number(`${this._Value}${Mode}`);
      this._Value = Result > this.Max ? this.Max
        : Result < this.Min ? this.Min
          : Result;
    }
  }
  SetTarget = Target => {
    this._InputTarget = Target;
    this._Value = this._InputTarget.value;
    this.Ex = this._InputTarget?.dataset?.kouho?.split(",") || null;
    [this.Base, this.Min, this.Max] = this._InputTarget?.dataset?.range?.split(",") || [0, -150, 150];
    this.IsUnder0 = this.Min < 0 ? true : false;
    this.Render_kouho();
    this._Event(true);
  }
  Exit = () => {
      //マイナスで終了時は0にする。
      if (this.GetValue() === "-") {
        this._InputTarget.value = 0;
        this._InputTarget.dispatchEvent(new Event("change"));
      }
      Judey.$cls("Dentakun").Rem();
  }
}



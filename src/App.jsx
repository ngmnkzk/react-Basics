/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import ColofulMNessage from "./components/ClolrfulMessage";

const App = () => {
  console.log(
    "ステートの変更があると再レンダリングするために読み込みがされる。"
  );
  const [num, setNum] = useState(0); //numは自由、ステートとして使用する変数名、　ステートを変更するための関数、setNumが一般的
  const [charShowFlag, setcharShowFlag] = useState(false);
  const onClickCountup = () => setNum(num + 1);

  const onClickSwitchFlag = () => {
    setcharShowFlag(!charShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        charShowFlag || setcharShowFlag(true);
      } else {
        charShowFlag && setcharShowFlag(false);
      }
    }
  }, [num]); //第２引数が変化があったのみに実行される。
  //eslint-disable-next-line react-hooks/exhaustive-deps　これか１行目にすることでeslintを無効にすることができる。
  return (
    //<React.Fragment>省略できる(Reactは複数行のリターンをするときはエラーになるためそれを回避する策)
    <>
      <h1 style={{ color: "red" }}>Hello World!</h1>
      <ColofulMNessage color="blue">hogehoge~</ColofulMNessage>
      <ColofulMNessage color="pink">hoge~</ColofulMNessage>
      <button onClick={onClickCountup}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchFlag}>on/off</button>
      <p>{num}</p>
      {charShowFlag && <p>見えたり、見えなかったり</p>}
    </>
    //</React.Fragment>
    //{}で書こうとJavascriptと認識されるので、関数を呼び出す際などに使用する。
    //cssでもレイアウトは整えれるし、直接入れること(関数とかでもできる)もできる。
    //{{}}外側はjavascriptで内側はオブジェクトをさしている
  );
};

export default App;

//Props コンポーネントに渡す引き渡す引数のようなもの
//<ColofulMNessage color="blue" message="hogehoge" />
//<ColofulMNessage color="pink" message="hoge~" />
//state 書くコンポーネントが持つ状態。Stateが変更されると再レンダリングされる。
//再レンダリング

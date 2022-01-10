/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShow, setfaceShow] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitch = () => {
    setfaceShow(!faceShow);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShow || setfaceShow(true);
    } else {
      faceShow && setfaceShow(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickSwitch}>on/off</button>
      <p>{num}</p>
      {faceShow && <p>😄</p>}
    </>
  );
};

export default App;

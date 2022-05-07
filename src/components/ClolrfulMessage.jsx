import React from "react";

const Colorfulmessage = (props) => {
  //props.color,props,childrenを省略できるようにする。
  const { color, children } = props;
  console.log(props);
  const contentStyle = {
    //color: color,のように同じ場合は省略することができる。
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
  //return <p style={contentStyle}>{props.message}</p>;
};

export default Colorfulmessage;

//exoirt cibst 関数名でもexportできる
//その場合 importするときは import { 関数名 } form ~ で分割代入する必要がある

import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState("white")

  const changeColor = (newChildColor) => {
    const randomColor = getRandomColor();
    setColor(randomColor)
    setChildColor(newChildColor)
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={changeColor} color={childColor} />
      <Child onChangeColor={changeColor} color={childColor} />
    </div>
  );
}

export default Parent;

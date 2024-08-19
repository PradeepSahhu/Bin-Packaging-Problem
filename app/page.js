"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const colorsArray = ["#CD5C08", "#FF8A8A", "#800000", "#1A4870", "#D95F59"];

  const [dicContext, setDivContext] = useState([]);

  const randomcolor = () => {
    const color = Math.floor(Math.random() * colorsArray.length);
    // console.log(color);
    return colorsArray[color];
  };
  // const addNewElement = () => {
  //   const stack1 = document.getElementById("stack1");
  //   const newDiv = document.createElement("div");
  //   const color = randomcolor();
  //   console.log(color);
  //   newDiv.classList.add("h-24");
  //   newDiv.classList.add("w-10");
  //   newDiv.classList.add("inline-block");
  //   newDiv.classList.add("border-black");
  //   newDiv.classList.add("border-2");
  //   newDiv.classList.add("bg-yellow-400");
  //   newDiv.classList.add("border");

  //   stack1.appendChild(newDiv);
  // };

  const randomWidth = () => {
    const width = Math.floor(Math.random() * 500);
    console.log(width);
    return width;
  };

  const addNewElement = () => {
    const clr = randomcolor();
    const width = randomWidth();

    const divObj = {
      color: "yello-400",
      width: width,
    };

    dicContext.push(divObj);
    console.log(dicContext);
  };

  useEffect(() => {
    console.log("re-render");
  }, [dicContext.length]);
  return (
    <div className="">
      <div>
        <div id="stack1" className="w-full h-24 bg-blue-400">
          {dicContext.map((item, index) => (
            <div
              key={index}
              className={`bg-yellow-400  border-2 border-black h-24 w-20 inline-block `}
            ></div>
          ))}
        </div>
      </div>
      <div>
        <div id="stack2" className="w-full h-24 bg-pink-400"></div>
      </div>

      <div>
        <button onClick={() => addNewElement()}> Add new Div</button>
      </div>
    </div>
  );
}

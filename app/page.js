"use client";
import Image from "next/image";

export default function Home() {
  const addNewElement = () => {
    const stack1 = document.getElementById("stack1");
    const newDiv = document.createElement("div");
    newDiv.classList.add("h-24");
    newDiv.classList.add("w-10");
    newDiv.classList.add("inline-block");
    newDiv.classList.add("bg-yellow-400");
    newDiv.classList.add("border");

    stack1.appendChild(newDiv);
  };
  return (
    <div className="">
      <div>
        <div id="stack1" className="w-full h-24 bg-blue-400"></div>
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

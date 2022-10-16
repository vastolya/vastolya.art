import React from "react";
import "../App.css";

const header = () => {
  return (
    <div className="bg-slate-200 flex justify-around h-12">
      <div className="m-3">vastolya.art</div>
      <ul className="flex gap-x-12 m-3">
        <li><a href="#home">home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#contacts">contacts</a></li>
      </ul>
    </div>
  );
};

export default header;

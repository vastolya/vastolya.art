import React, { useEffect, useState } from "react";
import "../App.css";
import main__photo from "../assets/main__photo.jpg";
import Button from "./Button";

const main = () => {
  return (
    <div className="px-4 py-8 bg-red-300 md:flex">
      <div className="bg-red-400 flex-grow p-8">
        <div className="text-4xl md:font-bold pb-8">
          <a
            className=""
            href="#"
          >
            Anatoly Vasilev
          </a>
        </div>
        <div className="text-2xl pb-2">Film Editor &amp; Web Developer</div>
        <div className="text-xl pb-4">29 y.o. Based in Georgia</div>
        <Button />
      </div>
      <div className="bg-blue-500 w-72 rounded-full overflow-hidden m-auto">
        <img src={main__photo} alt="" className="max-h-72 max-w-72 m-auto" />
      </div>
    </div>
  );
};

export default main;

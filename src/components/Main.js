import React, { useEffect, useState } from "react";
import "../App.css";
import main__photo from "../assets/main__photo.jpg";
import Button from "./Button";

const main = () => {
  return (
    <div className="px-4 py-8 bg-red-300 md:flex">
      <div className="bg-red-400 flex-grow p-8">
        <div className="text-4xl md:font-bold">
          <a
            className="text-red-500 hover:text-blue-500 transition-color ease-in duration-700"
            href="#"
          >
            Anatoly Vasilev
          </a>
        </div>
        <div>Film Director</div>
        <div>
          Text
        </div>
        <Button />
      </div>
      <div className="bg-blue-500 rounded-full overflow-hidden">
        <img src={main__photo} alt="" className="max-h-72 max-w-72 m-auto" />
      </div>
    </div>
  );
};

export default main;

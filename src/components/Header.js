import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const HEADER_LIST = [
  { linkName: "projects", routeName: "/projects" },
  { linkName: "cv", routeName: "/cv" },
  { linkName: "contacts", routeName: "/сontacts" },
];

const Header = () => {
  const [toggle, showMenu] = useState(true);

  return (
    <header className="">
      <nav className="container flex justify-between items-top px-8 py-4 mx-auto">
        <div className="flex items-start"> <Link to="/" className="block hover:bg-gray-200 w-full">vastolya.art</Link></div>
        <div className={toggle ? "hidden" : "block md:hidden "}>
          <div className="gap-2 grid z-20 ">
            {HEADER_LIST.map((item) => {
              return   (  <Link
              to={item.routeName}
              className="block hover:bg-gray-200 w-full"
              onClick={() => showMenu(!toggle)}
            >
              {item.linkName}
            </Link> )
            })}
          </div>
          <button className="text-sm" onClick={() => showMenu(!toggle)}>
            close
          </button>
        </div>
        <button
          className={toggle ? "block md:hidden" : "hidden"}
          onClick={() => showMenu(!toggle)}
        >
          <div className="w-4 h-0.5 bg-gray-600 mb-1"></div>
          <div className="w-4 h-0.5 bg-gray-600 mb-1"></div>
          <div className="w-4 h-0.5 bg-gray-600 mb-0"></div>
        </button>
        <div className="hidden md:flex gap-10 ">
        {HEADER_LIST.map((item) => {
              return   (  <Link
              to={item.routeName}
              className="block hover:bg-gray-200 w-full"
            >
              {item.linkName}
            </Link> )
            })}
        </div>
      </nav>
    </header>
  );
};

export default Header;

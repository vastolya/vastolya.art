import React, { useState, useEffect, useCallback, Fragment } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../App.css";

const HEADER_LIST = [
  { linkName: "catalog", routeName: "/catalog" },
  { linkName: "cv", routeName: "/cv" },
  { linkName: "contacts", routeName: "/skills" },
];

const header = () => {
  return (
    <Fragment>
      <nav className="fixed top-0 left-0 bg-white w-full z-10">
        <div className="container m-auto flex justify-between items-center text=gray-700">
          <h1 className="pl-8 py-4 text-xl font-bold">
            <Link to="/">vastolya.art</Link>
          </h1>
          <ul className="hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer">
            {HEADER_LIST.map((link) => (
              <li key={link.linkName}>
                <Link
                  to={link.routeName}
                  className="hover:bg-gray-200 py-4 px-6"
                >
                  {link.linkName}
                </Link>
              </li>
            ))}
          </ul>

          <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group">
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div className="w-5 h-1 bg-gray-600"></div>
            <div
              className="absolute top-0 -right-full h-screen w-8/12 bg-white border opacity-0
            group-focus:right-0 group-focus:opacity-100 transition-all duration-300"
            >
              <ul className=" w-full text-base pt-10">
                {HEADER_LIST.map((link) => (
                  <li key={link.linkName}>
                    <Link
                      to={link.routeName}
                      className="block hover:bg-gray-200 py-4 px-6 w-full"
                    >
                      {link.linkName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </button>
        </div>
      </nav>
      <div className="mt-[60px]"></div>
    </Fragment>
  );
};

export default header;

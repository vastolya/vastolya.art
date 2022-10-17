import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import HoverableDiv from "./HoverableDiv.js";

const Skills = () => {
  return (
    <div className="px-4 py-8 pb-0 bg-red-300 text-center">
      <ul className="md:flex md:justify-around">
        <li className="px-8 pb-8">
          <p className="text-xl font-bold pb-8">Video Production</p>
          <ul className="pb-2 w-40 md:w-40 md:inline-block m-auto">
            <li>
              <p className="pb-2" data-tip="Indepented">
                Adobe Premiere Pro
              </p>
              <ReactTooltip />
            </li>
            <li className="pb-2">
              <p className="" data-tip="Intermediate">
                Adobe After Effects
              </p>
              <ReactTooltip />
            </li>
            <li>
              <p className="pb-2 sd:w-1/4" data-tip="Intermediate">
                Adobe Audition
              </p>
              <ReactTooltip />
            </li>
            <li className="">
              <p data-tip="Basic">Davinci Resolve</p>
              <ReactTooltip />
            </li>
          </ul>
        </li>
        <li className="px-8 pb-8">
          <p className="text-xl font-bold pb-8">Web Development</p>
          <ul className="pb-2 w-40 md:w-40 md:inline-block m-auto">
            <li className="pb-2">
              <p data-tip="Basic">JavaScript</p>
              <ReactTooltip />
            </li>
            <li className="pb-2">
              <p data-tip="Basic">React</p>
              <ReactTooltip />
            </li>
            <li className="pb-2">
              <p data-tip="Basic">Tailwind</p>
              <ReactTooltip />
            </li>
            <li className="pb-2">
              <p data-tip="Basic">Node JS</p>
              <ReactTooltip />
            </li>
            <li className="">
              <p data-tip="Basic">Git</p>
              <ReactTooltip />
            </li>
          </ul>
        </li>
        <li className="px-8">
          <p className="text-xl font-bold pb-8">Other</p>
          <ul className="pb-2 w-40 md:w-24 md:inline-block m-auto">
            <li className="pb-2">
              <p data-tip="B1">English</p>
              <ReactTooltip />
            </li>
            <li className="">
              <p data-tip="Native">Russian</p>
              <ReactTooltip />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Skills;

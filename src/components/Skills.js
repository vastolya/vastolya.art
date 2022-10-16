import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import HoverableDiv from "./HoverableDiv.js";

const Skills = () => {
  return (
    <div className="px-4 py-8 bg-red-300 text-center">
      <ul className="md:flex md:justify-around">
        <li className="px-8">
          <p className="text-xl font-bold pb-4">Video Production</p>
          <ul className="pb-2 w-40 md:w-80 m-auto">
            <li>
              <p className="pb-2" data-tip="Indepented">Adobe Premiere Pro</p>
              <ReactTooltip />
            </li>
            <li className="pb-2">
              <p className="" data-tip="Intermediate">
                Adobe After Effects
              </p>
              <ReactTooltip />
            </li>
            <li>
              <p className="pb-2 sd:w-1/4" data-tip="Intermediate">Adobe Audition</p>
              <ReactTooltip />
            </li>
            <li className="pb-4">
              <p data-tip="Basic">Davinci Resolve</p>
              <ReactTooltip />
            </li>
          </ul>
        </li>
        <li className="px-8">
          <p className="text-xl font-bold pb-4">Web Development</p>
          <ul>
            <li className="pb-2">JavaScript</li>
            <li className="pb-2">React</li>
            <li className="pb-2">Tailwind</li>
            <li className="pb-2">Git</li>
            <li className="pb-4">Node JS</li>
          </ul>
        </li>
        <li className="px-8">
          <p className="text-xl font-bold pb-4">Other</p>
          <ul>
            <li className="pb-2">
              <p data-tip="B1">English</p>
              <ReactTooltip />
            </li>
            <li className="pb-4">
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

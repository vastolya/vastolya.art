import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import HoverableDiv from "./HoverableDiv.js";

const Skills = () => {
  return (
    <div className="px-4 py-8 bg-red-300 text-center">
      <ul className="md:flex md:justify-around">
        <li className="p-8">
          <p className="text-xl font-bold">Video Production</p>
          <ul>
            <li className="py-2">
              <p data-tip="Indepented">Adobe Premiere Pro</p>
              <ReactTooltip />
            </li>
            <li className="py-2">
              <p className="" data-tip="Intermediate">Adobe After Effects</p>
              <ReactTooltip />
            </li>
            <li className="py-2">
              <p data-tip="Intermediate">Adobe Audition</p>
              <ReactTooltip />
            </li>
            <li className="py-2">
              <p data-tip="Basic">Davinci Resolve</p>
              <ReactTooltip />
            </li>
          </ul>
        </li>
        <li className="p-8">
          <p className="text-xl font-bold">Web Development</p>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Tailwind</li>
            <li>Git</li>
            <li>Node JS</li>
          </ul>
        </li>
        <li className="p-8">
          <p className="text-xl font-bold">Other</p>
          <ul>
            <li title="B1">English</li>
            <li title="Native">Russian</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Skills;

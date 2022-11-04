import React, { useState, useEffect, useCallback, Fragment } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { PROJECTS_LIST } from "../api/projectsList";

const ProjectsPage = () => {
  const data = Object.values(PROJECTS_LIST);

  return (
    <div className="grid gap-0 grid-cols-1 w-full md:max-w-screen-2xl mx-auto">
      {data.map((projectName) => (
        <div
          key={projectName.videoSrc}
          className="flex justify-between px-8 py-4 m-4"
        >
          <div className="flex flex-col justify-between md:max-w-2xl">
            <Link to={projectName.id} className="text-lg pb-4">
              {projectName.title}
            </Link>
            <h1 className="hidden md:flex text-base pb-4">{projectName.description}</h1>
            <h1 className="text-xs">{projectName.releaseDate}</h1>
          </div>
          <Link to={projectName.id} className="">
            <img
              src={projectName.pausedOverlay}
              alt=""
              className="max-w-xs md:max-w-lg"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;

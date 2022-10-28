import React, { useState, useEffect, useCallback, Fragment } from "react";
import { BrowserRouter, Routes, Route, Link, useHistory } from "react-router-dom";
import { PROJECTS_LIST } from "../api/projectsList";

const ProjectsPage = () => {
  const data = Object.values(PROJECTS_LIST);

  return (
    <div className="grid gap-0 grid-cols-1 w-full md:max-w-screen-2xl mx-auto">
      {data.map((projectName) => (
        <div
          key={projectName.videoId}
          className="block flex border rounded justify-between px-8 py-4 m-4"
        >
          <div>
            <Link to={projectName.id} className="text-lg">
              {projectName.title}
            </Link>
            <h1 className="text-sm">Description: {projectName.description}</h1>
            <h1 className="text-sm">Release Date: {projectName.releaseDate}</h1>
          </div>
          <img src={projectName.pausedOverlay} alt="" className="max-w-[300px]" />
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;

import React, { useState, useEffect, useCallback, Fragment } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { PROJECTS_LIST } from "../api/projectsList";

const ProjectsPage = () => {
  const data = Object.values(PROJECTS_LIST);

  return (
    <div className="grid gap-0 grid-cols-1 w-full md:max-w-screen-2xl mx-auto">
      {data.map((title) => (
       <Link key={title.id} to={title.id}>{title.title}</Link>
      ))}
    </div>
  );
};

export default ProjectsPage;

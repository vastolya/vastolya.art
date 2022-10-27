import React, { useState, useEffect, useCallback, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { PROJECTS_LIST } from "../api/projectsList";

const SingleProjectPage = () => {
  let { projectId } = useParams();
  const data = PROJECTS_LIST[projectId];

  return (
    <div className="grid gap-0 grid-cols-1 w-full md:max-w-screen-2xl mx-auto whitespace-pre">
      <div>
        Project ID: {projectId} <br />
        Data:
        {!!data
          ? JSON.stringify(PROJECTS_LIST[projectId], null, 4)
          : "No data 404"}
      </div>
    </div>
  );
};

export default SingleProjectPage;

import React, { useState, useEffect, useCallback, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { PROJECTS_LIST } from "../api/projectsList";

const SingleProjectPage = () => {
  let { projectId } = useParams();
  const data = PROJECTS_LIST[projectId];

  const src = `https://www.youtube.com/embed/${data.videoId}`;

  return (
    <div className="whitespace-pre px-6 md:px-8 py-4 md:max-w-screen-2xl mx-auto">
      {/* Project ID: {projectId} <br />
      Data:
      {!!data
        ? JSON.stringify(PROJECTS_LIST[projectId], null, 4)
        : "No data 404"} */}
      <div className="grid grid-cols-1 w-full px-8 py-4">
        <iframe
          className="w-full h-44"
          src={src}
          title="Youtube Player"
          frameBorder="0"
          allowFullScreen
        />
        <div>
          <h1 className="text-base">{data.title}</h1>
          <h1 className="text-base">{data.description}</h1>
          <h1 className="text-xs">{data.releaseDate}</h1>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectPage;

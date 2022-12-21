import HoverVideoPlayer from "react-hover-video-player";

import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import shuffle from "lodash/shuffle";
import { PROJECTS_LIST } from "../api/projectsList";

const Projects = () => {
  const [selected, setSelected] = useState();

  const onSelected = (id) => {
    setSelected(id);
  };

  const handleClose = () => {
    setSelected(undefined);
  };

  const data = shuffle(Object.values(PROJECTS_LIST)).slice(0, 4);

  return (
    <div className="grid gap-0 grid-cols-1 w-full md:grid-cols-2 md:max-w-screen-2xl mx-auto">
      {data.map((project) => {
        return (
          <Fragment key={project.id}>
            <Link to={`projects/${project.id}`} className="bg-gray-50">
              <HoverVideoPlayer
                className="z-0"
                videoSrc={project.videoSrc}
                style={{
                  width: "100%",
                  // The container should have a set 16:9 aspect ratio
                  // (https://css-tricks.com/aspect-ratio-boxes/)
                  paddingTop: "56.25%",
                }}
                sizingMode="container"
                pausedOverlay={
                  <div
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url(${project.pausedOverlay})`,
                      backgroundSize: "cover",
                    }}
                  />
                }
              />
            </Link>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Projects;

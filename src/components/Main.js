import HoverVideoPlayer from "react-hover-video-player";

import React, { useState, useEffect, useCallback, Fragment } from "react";
import shuffle from "lodash/shuffle";
import { PROJECTS_LIST } from "../api/projectsList";
// import { CenterModal, ModalTitle, ModalCloseTarget } from "react-spring-modal";
// import "react-spring-modal/styles.css";

const Projects = () => {
  // const [isOpen, setOpen] = React.useState(false);

  const [selected, setSelected] = useState();
  const onSelected = (id) => {
    setSelected(id);
  };

  const handleClose = () => {
    setSelected(undefined);
  };

  // const onPlayerReady = (event) => {
  //   // access to player in all event handlers via event.target
  //   event.target.pauseVideo();
  // };

  const data = shuffle(Object.values(PROJECTS_LIST)).slice(0, 4);

  const LOADER = (
    <div className="bg-black bg-opacity-80 w-full h-full flex items-center justify-center">
      <span className="loader-moon"></span>
    </div>
  );

  return (
    <div className="grid gap-0 grid-cols-1 w-full md:grid-cols-2 md:max-w-screen-2xl mx-auto">
      {data.map((project) => {
        return (
          <Fragment key={project.id}>
            <button className="bg-gray-50" onClick={() => onSelected(project.id)}>
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
                      // Make the image expand to cover the video's dimensions
                      // width: "100%",
                      // height: "100%",
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url(${project.pausedOverlay})`,
                      backgroundSize: "cover",
                    }}
                  />
                }
                loadingOverlay={LOADER}
              />
            </button>
            {/* <CenterModal
              isOpen={project.id === selected}
              onDismiss={handleClose}
            >
              <ModalTitle>
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1`}
                    title={project.title}
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </ModalTitle>
              <ModalCloseTarget>
                <div className="text-xl py-8">{project.title}</div>
                <button className="text-sm underline">close</button>
              </ModalCloseTarget>
            </CenterModal> */}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Projects;

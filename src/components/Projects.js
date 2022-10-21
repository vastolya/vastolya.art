import HoverVideoPlayer from "react-hover-video-player";
import testJpg from "../assets/test_1x1.jpg";
import testMov from "../assets/test.MOV";
import React, { useState, useEffect, useCallback, Fragment } from "react";
import { CenterModal, ModalTitle, ModalCloseTarget } from "react-spring-modal";
import "react-spring-modal/styles.css";

const PROJECTS_LIST = [
  {
    id: "first",
    pausedOverlay: testJpg,
    videoSrc: testMov,
  },
  {
    id: "second",
    pausedOverlay: testJpg,
    videoSrc: testMov,
  },
  {
    id: "third",
    pausedOverlay: testJpg,
    videoSrc: testMov,
  },
  {
    id: "fourth",
    pausedOverlay: testJpg,
    videoSrc: testMov,
  },
];

const Projects = () => {
  const [isOpen, setOpen] = React.useState(false);
  const [selected, setSelected] = useState();

  const onSelected = (id) => {
    setSelected(id);
  };

  const handleClose = () => {
    setSelected(undefined);
  };

  return (
    <div className="grid gap-0 grid-cols-1 max-w-screen-md md:grid-cols-2 md:max-w-screen-2xl mx-auto bg-red-300">
      {PROJECTS_LIST.map((project) => {
        return (
          <Fragment key={project.id}>
            <button className="leading-disable" onClick={() => onSelected(project.id)}>
              <HoverVideoPlayer
                videoSrc={project.videoSrc}
                pausedOverlay={
                  <img
                    src={project.pausedOverlay}
                    alt=""
                    style={{
                      // Make the image expand to cover the video's dimensions
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      paddingBottom: 0,
                                            
                    }}
                  />
                }
                loadingOverlay={
                  <div className="loading-overlay">
                    <div className="loading-spinner" />
                  </div>
                }
              />
            </button>
            <CenterModal
              isOpen={project.id === selected}
              onDismiss={handleClose}
            >
              <ModalTitle>{project.id}</ModalTitle>
              <ModalCloseTarget>
                <button>Close</button>
              </ModalCloseTarget>
            </CenterModal>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Projects;

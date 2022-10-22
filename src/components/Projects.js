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
    videoId: "2g811Eo7K8U",
    title: "first video title",
  },
  {
    id: "second",
    pausedOverlay: testJpg,
    videoSrc: testMov,
    videoId: "ryPBF-jy9Es",
    title: "second video title",
  },
  {
    id: "third",
    pausedOverlay: testJpg,
    videoSrc: testMov,
    videoId: "SWE2Hww3_AM",
    title: "third video title",
  },
  {
    id: "fourth",
    pausedOverlay: testJpg,
    videoSrc: testMov,
    videoId: "KGIOVaRCtxA",
    title: "fourth video title",
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

  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className="grid gap-0 grid-cols-1 max-w-screen-md md:grid-cols-2 md:max-w-screen-2xl mx-auto bg-red-300">
      {PROJECTS_LIST.map((project) => {
        return (
          <Fragment key={project.id}>
            <button
              className="leading-disable"
              onClick={() => onSelected(project.id)}
            >
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
              <ModalTitle>
                {/* <YouTube
                  videoId={project.videoId}
                  opts={opts}
                  onReady={onPlayerReady}
                /> */}
                <div className="aspect-video bg-red-500">
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
            </CenterModal>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Projects;

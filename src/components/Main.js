import HoverVideoPlayer from "react-hover-video-player";
import artRomaJpg from "../assets/art_zakladky_roma_soida.jpg"
import artRomaMp4 from "../assets/art_zakladky_roma_soida.mp4"
import artAlexeyJpg from "../assets/art_zakladky_alexey_martins.jpg"
import artAlexeyMp4 from "../assets/art_zakladky_alexey_martins.mp4"
import artBlosyakJpg from "../assets/art_zakladky_sasha_blosyak.jpg"
import artBlosyakMp4 from "../assets/art_zakladky_sasha_blosyak.mp4"
import artZakirovJpg from "../assets/art_zakladky_sanya_zakirov.jpg"
import artZakirovMp4 from "../assets/art_zakladky_sanya_zakirov.mp4"



import React, { useState, useEffect, useCallback, Fragment } from "react";
// import { CenterModal, ModalTitle, ModalCloseTarget } from "react-spring-modal";
// import "react-spring-modal/styles.css";

const PROJECTS_LIST = [
  {
    id: "first",
    pausedOverlay: artZakirovJpg,
    videoSrc: artZakirovMp4,
    videoId: "d2gQYhUiu20",
    title: "Art Zakladky - Sanya Zakirov",
  },
  {
    id: "second",
    pausedOverlay: artBlosyakJpg,
    videoSrc: artBlosyakMp4,
    videoId: "d6O03m1Toe4",
    title: "Art Zakladky - Sasha Blosyak",
  },
  {
    id: "third",
    pausedOverlay: artAlexeyJpg,
    videoSrc: artAlexeyMp4,
    videoId: "KHB-V0fQw9k",
    title: "Art Zakladky - Alexey Martins",
  },
  {
    id: "fourth",
    pausedOverlay: artRomaJpg,
    videoSrc: artRomaMp4,
    videoId: "KHB-V0fQw9k",
    title: "Art Zakladky - Roma Soida",
  },
];

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

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
    },
  };

  return (
    <div className="grid gap-0 grid-cols-1 w-full md:grid-cols-2 md:max-w-screen-2xl mx-auto">
      {PROJECTS_LIST.map((project) => {
        return (
          <Fragment key={project.id}>
            <button
              className="leading-disable max-w-screen-2xl"
              onClick={() => onSelected(project.id)}
            >
              <HoverVideoPlayer
                className="z-0"
                videoSrc={project.videoSrc}
                pausedOverlay={
                  <div
                    alt=""
                    style={{
                      // Make the image expand to cover the video's dimensions
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url(${project.pausedOverlay})`,
                      backgroundSize: "cover",
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

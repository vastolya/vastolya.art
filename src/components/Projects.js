import HoverVideoPlayer from "react-hover-video-player";
import testJpg from "../assets/test_1x1.jpg";
import testMov from "../assets/test.MOV";
import React, { useState, useEffect } from "react";
import { CenterModal, ModalTitle, ModalCloseTarget } from 'react-spring-modal';
import 'react-spring-modal/styles.css'

const Projects = () => {

  const [isOpen, setOpen] = React.useState(false);

  return (
    <div className="grid grid-cols-1 max-w-screen-md md:grid-cols-2 md:max-w-screen-2xl m-auto bg-red-300">
      <HoverVideoPlayer
        videoSrc={testMov}
        pausedOverlay={
          <img
            src={testJpg}
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
      <HoverVideoPlayer
        videoSrc={testMov}
        pausedOverlay={
          <img
            src={testJpg}
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
      <HoverVideoPlayer
        videoSrc={testMov}
        pausedOverlay={
          <img
            src={testJpg}
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
      <HoverVideoPlayer
        videoSrc={testMov}
        pausedOverlay={
          <img
            src={testJpg}
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
    <>
      <button onClick={() => setOpen(true)}>Open center modal</button>
      <CenterModal isOpen={isOpen} onDismiss={() => setOpen(false)}>
        <ModalTitle>My Center Modal</ModalTitle>
        <ModalCloseTarget>
          <button>Close</button>
        </ModalCloseTarget>
      </CenterModal>
    </>
    </div>
  );
};

export default Projects;

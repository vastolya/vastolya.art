import HoverVideoPlayer from "react-hover-video-player";
import testJpg from "../assets/test_1x1.jpg";
import testMov from "../assets/test.MOV";
import React from "react";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-ld p-8 bg-red-300">
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
    </div>
  );
};

export default Projects;

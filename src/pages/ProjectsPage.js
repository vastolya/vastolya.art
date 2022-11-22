import { React, useState } from "react";
import { Link } from "react-router-dom";
import { PROJECTS_LIST } from "../api/projectsList";
import ReadMoreReadLess from "../components/ReadMoreReadLess";

const ProjectsPage = () => {
  const data = Object.values(PROJECTS_LIST);

  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(6);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 6);
  };

  return (
    <div className="">
      <div className="md:max-w-screen-2xl md:grid md:grid-cols-3 md:pt-2 mx-auto">
        {data
          .reverse()
          .slice(0, visible)
          .map((project) => (
            <div key={project.releaseDate} className="px-8 pb-2 pt-1 hover:scale-105 transition duration-500">
              <div className="mb-4">
                <Link to={project.id}>
                  <img
                    src={project.pausedOverlay}
                    alt=""
                    className="md:mx-auto overflow-hidden rounded-md"
                  />
                </Link>
              </div>
              <div className="mb-2">
                <Link
                  to={project.id}
                  className="text-xl md:text-2xl no-underline hover:underline"
                >
                  {project.title}
                </Link>
              </div>
              <div className="">
                <ReadMoreReadLess className="">
                  {project.description}
                </ReadMoreReadLess>
              </div>
            </div>
          ))}
      </div>
      <div className="flex flex-col mx-auto md:max-w-screen-2xl">
        {data.length > visible ? (
          <button
            onClick={showMoreItems}
            className=" text-gray-500 py-4 text-base md:text-lg"
          >
            ...load more
          </button>
        ) : (
          null
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;

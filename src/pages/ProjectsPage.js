import { React } from "react";
import { Link } from "react-router-dom";
import { PROJECTS_LIST } from "../api/projectsList";
import ReadMoreReadLess from "../components/ReadMoreReadLess";

const ProjectsPage = () => {
  const data = Object.values(PROJECTS_LIST);

  return (
    <div className="">
      <div className="md:max-w-screen-2xl md:grid md:grid-cols-3 md:pt-2 mx-auto">
        {data.map((project) => (
          <div key={project.releaseDate} className="px-8 pb-2 pt-1">
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
              <ReadMoreReadLess>{project.description}</ReadMoreReadLess>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

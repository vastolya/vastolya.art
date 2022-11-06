import { React } from "react";
import { Link } from "react-router-dom";
import { PROJECTS_LIST } from "../api/projectsList";
import ReadMoreReadLess from "../components/ReadMoreReadLess";

const ProjectsPage = () => {
  const data = Object.values(PROJECTS_LIST);

  return (
    <div className="">
      <div className="md:max-w-screen-2xl md:grid md:grid-cols-3 mx-auto">
        {data.map((project) => (
          <div key={project.releaseDate} className="px-8 py-4">
            <div className="">
              <img
                src={project.pausedOverlay}
                alt=""
                className="pb-2 md:mx-auto"
              />
            </div>
            <div>
              <Link
                to={project.id}
                className="text-xl md:text-2xl no-underline hover:underline"
              >
                {project.title}
              </Link>
            </div>
            <div>
              <ReadMoreReadLess>{project.description}</ReadMoreReadLess>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

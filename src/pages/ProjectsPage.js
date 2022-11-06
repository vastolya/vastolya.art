import { React } from "react";
import { Link } from "react-router-dom";
import { PROJECTS_LIST } from "../api/projectsList";
import ReadMoreReadLess from "../components/ReadMoreReadLess";

const ProjectsPage = () => {
  const data = Object.values(PROJECTS_LIST);

  return (
    // <div className="grid gap-0 grid-cols-1 w-full md:max-w-screen-2xl mx-auto">
    //   {data.map((projectName) => (
    //     <div
    //       key={projectName.videoSrc}
    //       className="flex justify-between pb-4"
    //     >
    //       <div className="flex flex-col justify-between border w-full">
    //         <Link to={projectName.id} className="text-base md:text-xl">
    //           {projectName.title}
    //         </Link>
    //         <h1 className="hidden md:flex text-base max-w-[600px]">{projectName.description}</h1>
    //         <h1 className="text-xs">{projectName.releaseDate}</h1>
    //       </div>
    //       <Link to={projectName.id} className="">
    //         <img
    //           src={projectName.pausedOverlay}
    //           alt=""
    //           className="max-w-full md:max-w-lg hidden md:flex"
    //         />
    //       </Link>
    //     </div>
    //   ))}
    // </div>
    <div>
      <div className="px-8 py-4" >
        {data.map((project) => (
          <div key={project.id}>
            <div className="overflow-hidden">
              <img src={project.pausedOverlay} alt="" className="pb-2 " />
            </div>
            <Link to={project.id} className="text-xl md:text-xl no-underline hover:underline">
              {project.title}
            </Link>
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

import { React } from "react";
import { useParams } from "react-router-dom";
import { PROJECTS_LIST } from "../api/projectsList";

const SingleProjectPage = () => {
  let { projectId } = useParams();
  const data = PROJECTS_LIST[projectId];

  const src = `https://www.youtube.com/embed/${data.videoId}`;

  return (
    // <div className="whitespace-pre px-6 md:px-8 py-4 md:max-w-screen-2xl mx-auto">
    //   {/* Project ID: {projectId} <br />
    //   Data:
    //   {!!data
    //     ? JSON.stringify(PROJECTS_LIST[projectId], null, 4)
    //     : "No data 404"} */}
      <div className="md:max-w-screen-2xl mx-auto">
      <div className="py-4 px-8 md:flex justify-between">
        <div className="md:flex md:flex-col md:justify-between ">
          <div className="text-xl md:text-2xl pb-4">{data.title}</div>
          <div className="whitespace-pre-lineb text-base md:text-base pb-4">
            {data.description}
          </div>
          <div className="text-xs md:text-sm pb-2">Release Date: {data.releaseDate}</div>
        </div>

        <div>
          <iframe
            className="pl-4 w-full h-full md:min-w-[800px] md:min-h-[450px]"
            src={src}
            title="Youtube Player"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProjectPage;

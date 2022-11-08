import React, { useState, useEffect, useCallback, Fragment } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import myPhoto from "../assets/main__photo.jpg";

const Cv = () => {
  const EXPERIENCE_LIST = {
    first: {
      id: "XXIX",
      companyName: "2019 Winter Universiade",
      CompanyDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis lectus eu nunc suscipit ultrices. Fusce rutrum nisi volutpat felis sollicitudin pulvinar.",
      companyDates: "2018 - 2019",
      companySite: "https://en.wikipedia.org/wiki/2019_Winter_Universiade",
      companyLocation: "Krasnoyarsk",
    },
    second: {
      id: "XXIX",
      companyName: "Hearst Shkulev Media",
      CompanyDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis lectus eu nunc suscipit ultrices. Fusce rutrum nisi volutpat felis sollicitudin pulvinar. Curabitur fermentum semper consectetur.",
      companyDates: "2019 - 2020",
      companySite: "https://en.wikipedia.org/wiki/Hearst_Shkulev_Media",
      companyLocation: "Krasnoyarsk",
    },
    third: {
      id: "XXIX",
      companyName: "'Mfond' Ecological Foundation",
      CompanyDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis lectus eu nunc suscipit ultrices.",
      companyDates: "2021 - 2022",
      companySite: "https://ecosphere.press/about/",
      companyLocation: "Moscow",
    },
  };

  const experience = Object.values(EXPERIENCE_LIST);

  return (
    // <div>
    //   <div className="px-4 py-8 bg-red-300 md:flex">
    //     <div className="bg-red-400 flex-grow p-8">
    //       <div className="text-4xl md:font-bold pb-8">
    //         <a className="" href="#">
    //           Anatoly Vasilev
    //         </a>
    //       </div>
    //       <div className="text-2xl pb-2">Film Editor &amp; Web Developer</div>
    //       <div className="text-xl pb-4">29 y.o. Based in Georgia</div>
    //     </div>
    //     <div className="bg-blue-500 w-72 rounded-full overflow-hidden m-auto">
    //       <img src={main__photo} alt="" className="max-h-72 max-w-72 m-auto" />
    //     </div>
    //   </div>
    //   <div className="container__layout bg-red-300 px-4 py-8">
    //     <div className="p-8 bg-red-400">
    //       <ul>
    //         <li className="text-4xl pb-8">Education</li>
    //         <li className="text-2xl pb-1">
    //           Reshetnev Siberian State University of Science and Technology
    //         </li>
    //         <li className="text-xl pb-1">Information security</li>
    //         <li className="text-base pb-8">Russia, Krasnoyarsk, 2010-2015</li>
    //         <li className="text-2xl pb-1">Modern Art School "Conception"</li>
    //         <li className="text-xl pb-1">
    //           Video Art and Communications Strategy
    //         </li>
    //         <li className="text-base pb-0">Russia, Moscow, 2021-2022</li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="container__layout bg-red-300 px-4 py-8">
    //     <div className="px-4 py-8  bg-red-400 text-center">
    //       <ul className="md:flex md:justify-around">
    //         <li className="px-8 pb-8 md:pb-0">
    //           <p className="text-xl font-bold pb-8">Video Production</p>
    //           <ul className="pb-0 w-40 md:w-40 md:inline-block m-auto">
    //             <li>
    //               <p className="pb-2" data-tip="Indepented">
    //                 Adobe Premiere Pro
    //               </p>
    //               <ReactTooltip />
    //             </li>
    //             <li className="pb-2">
    //               <p className="" data-tip="Intermediate">
    //                 Adobe After Effects
    //               </p>
    //               <ReactTooltip />
    //             </li>
    //             <li className="pb-2">
    //               <p className="" data-tip="Intermediate">
    //                 Adobe Audition
    //               </p>
    //               <ReactTooltip />
    //             </li>
    //             <li className="">
    //               <p data-tip="Basic">Davinci Resolve</p>
    //               <ReactTooltip />
    //             </li>
    //           </ul>
    //         </li>
    //         <li className="px-8 pb-8 md:pb-0">
    //           <p className="text-xl font-bold pb-8">Web Development</p>
    //           <ul className="pb-0 w-40 md:w-40 md:inline-block m-auto">
    //             <li className="pb-2">
    //               <p data-tip="Basic">JavaScript</p>
    //               <ReactTooltip />
    //             </li>
    //             <li className="pb-2">
    //               <p data-tip="Basic">React</p>
    //               <ReactTooltip />
    //             </li>
    //             <li className="pb-2">
    //               <p data-tip="Basic">Tailwind</p>
    //               <ReactTooltip />
    //             </li>
    //             <li className="pb-2">
    //               <p data-tip="Basic">Node JS</p>
    //               <ReactTooltip />
    //             </li>
    //             <li className="pb-2">
    //               <p data-tip="Basic">Git</p>
    //               <ReactTooltip />
    //             </li>
    //           </ul>
    //         </li>
    //         <li className="px-8">
    //           <p className="text-xl font-bold pb-8">Other</p>
    //           <ul className="pb-2 w-40 md:w-24 md:inline-block m-auto">
    //             <li className="pb-2">
    //               <p data-tip="B1">English</p>
    //               <ReactTooltip />
    //             </li>
    //             <li className="">
    //               <p data-tip="Native">Russian</p>
    //               <ReactTooltip />
    //             </li>
    //           </ul>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    <div className="md:max-w-screen-2xl mx-auto">
      <div className="grid md:grid-cols-3 gap-10 py-4 px-8">
        <div className="flex flex-col col-span-3  border border-gray-100">
          <div className="text-2xl">
            Film Editor, Motion Designer, Web Developer
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-4 px-8">
        <div className="border border-gray-100">
          <div className="py-4 px-8">
            <img
              src={myPhoto}
              alt=""
              className="w-[300px] rounded-2xl mx-auto"
            />
          </div>
          <div className="py-4 px-8">
            <div className="text-xl">Anatoly Vasilev</div>
            <div>vozrast</div>
            <div>location</div>
          </div>
          <div className="py-4 px-8">
            <div>linkedin</div>
            <div>email</div>
            <div>telegram</div>
          </div>
        </div>
        <div className="md:col-span-2 border border-gray-100">
          {experience.reverse().map((company) => (
            <div className="py-4 px-8">
              <div>{company.companyName}</div>
              <div>{company.CompanyDescription}</div>
              <div>{company.companySite}</div>
              <div>{company.companyLocation}</div>
              <div>{company.companyDates}</div>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Cv;

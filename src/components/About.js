import { React } from "react";
import myPhoto from "../assets/main__photo.jpg";
import {
  EXPERIENCE_LIST,
  EDUCATION_LIST,
  EXHIBITIONS_LIST,
} from "../api/projectsList";
import facebookIcon from "../assets/icons/facebook_icon.svg";
import instagramIcon from "../assets/icons/instagram_icon.svg";
import linkedinIcon from "../assets/icons/linkedin_icon.svg";
import githubIcon from "../assets/icons/github_icon.svg";


const Cv = () => {
  const experience = Object.values(EXPERIENCE_LIST);
  const education = Object.values(EDUCATION_LIST);
  const exhibition = Object.values(EXHIBITIONS_LIST);

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
        <div className="flex flex-col col-span-3">
          <div className="text-lg md:text-2xl">
            Film Editor, Motion Designer, Web Developer
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 py-4 px-8">
        <div className="">
          <div className="py-4 px-8">
            <img
              src={myPhoto}
              alt=""
              className="w-[300px] rounded-2xl mx-auto md:mx-0"
            />
          </div>
          <div className="py-4 px-8">
            <div className="text-lg md:text-2xl pb-2">Anatoly Vasilev</div>
            <div className="flex gap-2 md:gap-4 pb-2">
              <a
                href="https://web.facebook.com/profile.php?id=100001149416568"
                target="blank"
                className="no-underline hover:underline text-base md:text-lg pb-2"
              >
                <img src={facebookIcon} alt="Facebook" className="w-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/anatoly-vasilev-522649238/"
                target="blank"
                className="no-underline hover:underline text-base md:text-lg pb-2"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="w-7" />
              </a>
              <a
                href="https://www.instagram.com/vastolya/"
                target="blank"
                className="no-underline hover:underline text-base md:text-lg pb-2"
              >
                <img src={instagramIcon} alt="Instagram" className="w-7" />
              </a>
              <a
                href="https://github.com/vastolya"
                target="blank"
                className="no-underline hover:underline text-base md:text-lg pb-2"
              >
                <img src={githubIcon} alt="Github" className="w-7" />
              </a>
            
              
            </div>
            <div className="text-xs md:text-sm">Based in Bangkok</div>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="py-4 px-8 text-sm md:text-base text-gray-500">
            Expirience
          </div>
          {experience.reverse().map((company) => (
            <div className="py-2 px-8 grid grid-col-2" key={company.id}>
              <a
                href={company.companySite}
                target="blank"
                className="no-underline hover:underline text-lg pb-2 md:text-2xl"
              >
                {company.companyName}
              </a>
              <div className="text-base w-full md:col-span-2 md:text-lg pb-2">
                {company.CompanyDescription}
              </div>
              <div className="text-xs md:text-sm">
                {company.companyLocation}, {company.companyDates}
              </div>
            </div>
          ))}
        </div>
        <div className="md:col-span-1">
          <div className="py-4 px-8 text-sm md:text-base text-gray-500">
            Education
          </div>
          {education.reverse().map((teachers) => (
            <div className="py-2 px-8 grid grid-col-2" key={teachers.id}>
              <div className="text-lg md:text-2xl pb-2">
                {teachers.educationName}
              </div>
              <div className="text-sm md:text-base pb-2">
                {teachers.educationDescription}
              </div>
              <div className="text-xs md:text-sm">
                {teachers.educationLocation}, {teachers.educationDates}
              </div>
            </div>
          ))}
        </div>
        <div className="md:col-span-2">
          <div className="py-4 px-8 text-sm md:text-base text-gray-500">
            Exhibitions
          </div>
          {exhibition.reverse().map((exhibit) => (
            <div className="py-2 px-8 grid grid-col-2" key={exhibit.id}>
              <div className="flex">
                <a
                  href={exhibit.exhibitionSite}
                  target="blank"
                  className="no-underline hover:underline text-lg md:text-2xl pb-2"
                >
                  {exhibit.exhibitionName}
                </a>
              </div>
              <div className="text-sm md:text-base pb-2">
                {exhibit.exhibitionDescription}, {exhibit.exhibitionLocation},{" "}
                {exhibit.exhibitionDates}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Cv;

"use client";
import React, { useState } from "react";
import { videoData } from "../../api/db";
import Link from "next/link";

const video = videoData;

const Video = () => {
  return (
    <main className="">
      <div className="mx-[12.5vw] grid grid-cols-6 gap-x-[1.04vw] gap-y-[1.85vh] ">
        <h1 className="col-span-6 text-[5.18vh] leading-[5.55vh] py-[1.85vh]">
          ВИДЕО ПРОЕКТЫ
        </h1>
        {video.map((item, index) => (
          <Link href={`video/${item.id}`} className="col-span-2" key={index}>
            <div className="h-[24.35vh] w-[24.32vw] bg-gray-100  flex justify-end items-end px-[2.08vw] py-[3.70vh] text-end">
              <div>
                <p className="text-[2.22vh] leading-[2.22vh] pb-[1.11vh]">
                  {item.title.toUpperCase()}
                </p>
                <p className=" text-[1.66vh] leading-[1.85vh]">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="bg-red-100 h-10 w-10"></div>
    </main>
  );
};

export default Video;
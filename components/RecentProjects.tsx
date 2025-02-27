"use client";
import { projects } from "@/data";
import React, { useState } from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  const [lC, setLc] = useState(
    projects.map(() => ({ state: false })) // Initialize state for all projects
  );

  const toggleSeeMore = (id: number) => {
    setLc((prev) =>
      prev.map((item, index) =>
        index === id ? { ...item, state: !item.state } : item
      )
    );
  };

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-16 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link, github }) => (
          <div
            id={`projects.${id}`}
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={title} href={`#projects.${id}`}>
              <div className="relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] h-[30vh] w-[80vw] overflow-hidden mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="./bg.png" alt="bg-img" />
                </div>
                {/* Clickable Image */}
                <a
                  href={link || github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-10 absolute bottom-0"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={img}
                    alt={title}
                    className="w-[464px] h-[300px] fill-none rounded-md"
                    style={{
                      transform: "rotate(-10deg)",
                    }}
                  />
                </a>
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p
                className={`lg:text-xl lg:font-normal font-light text-sm ${
                  lC[id - 1]?.state ? "" : "line-clamp-2"
                }`}
              >
                {des}
              </p>
              <button
                className="hover:underline hover:text-purple mt-5"
                onClick={() => toggleSeeMore(id - 1)}
              >
                {lC[id - 1]?.state ? "See less..." : "See more..."}
              </button>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, i) => (
                    <div
                      key={icon.icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * i * 2}px)` }}
                    >
                      <img src={icon.icon} alt={icon.alt} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center gap-4">
                  {/* Clickable "Check Live Site" */}
                  <a
                    href={github}
                    className="w-10 rounded-full hover:shadow-xl hover:shadow-white/30"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img src="/github.svg" alt="github" className="p-2" />
                  </a>

                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex lg:text-xl md:text-xs text-sm text-purple hover:underline items-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Check Live Site
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </a>
                  )}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;

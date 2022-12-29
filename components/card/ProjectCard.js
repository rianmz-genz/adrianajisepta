import Image from "next/image";
import React, { FC } from "react";
import { BsEyeFill, BsGithub } from "react-icons/bs";
import { Project } from "../../store/contentData";
const ProjectCard = ({
  demoUrl,
  description,
  preview,
  repoUrl,
  techs,
  title,
}) => {
  return (
    <li
      className="w-full bg-white dark:bg-slate-800 shadow-2xl shadow-gray-700/[.1] dark:shadow-none rounded-xl overflow-hidden group inline-block mb-4"
      key={title}
      itemScope
      itemType="https://schema.org/WebSite"
    >
      <div className="w-full relative">
        <Image
          src={preview.url}
          alt={title + " project preview"}
          width={100}
          height={(preview.originalHeight / preview.originalWidth) * 100}
          layout="responsive"
          objectFit="cover"
          quality={100}
          placeholder="blur"
          blurDataURL={preview.lowresUrl}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-4 justify-center items-center">
          {repoUrl ? (
            <a
              title="Go to Repository"
              href={repoUrl}
              target="_blank"
              className="text-4xl text-white"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          ) : (
            ""
          )}
          <a
            title="Go To Demo"
            href={demoUrl}
            target="_blank"
            className="text-4xl text-white"
            rel="noreferrer"
          >
            <BsEyeFill />
          </a>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3">
        <article>
          <h2 className="text-gray-700 dark:text-white text-2xl font-source-sans font-semibold">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-white/[.75]">
            {description}
          </p>
        </article>
        <ul className="flex gap-2 flex-wrap">
          {techs.map((tech) => (
            <li
              className="px-3 py-1 rounded bg-indigo-400 text-white"
              key={tech}
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default ProjectCard;

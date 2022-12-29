import React from "react";
import HTML from "../skill/HTML";
import contentData from "../../store/contentData";
import SectionLabel from "../text/SectionLabel";
import SectionTitle from "../text/SectionTitle";
import CSS from "../skill/CSS";
import JS from "../skill/JS";
import ReactJS from "../skill/ReactJS";
import NextJS from "../skill/NextJS";
import TailwindCSS from "../skill/TailwindCSS";
import SASS from "../skill/SASS";

const SkillSection = () => {
  return (
    <section
      id="skill"
      className="flex flex-col gap-6 py-12 items-center"
      itemScope
      itemType="https://schema.org/skills"
    >
      <article className="flex flex-col gap-1 text-center">
        <SectionLabel value={contentData.skillSection.label} />
        <SectionTitle value={contentData.skillSection.title} />
      </article>
      <div className="flex gap-6 flex-wrap justify-center">
        <HTML className="h-24" />
        <CSS className="h-24 w-24" />
        <JS className="h-24" />
        <SASS className="h-24" />
        <TailwindCSS className="h-24 w-24" />
        <ReactJS className="h-24" />
        <NextJS className="h-24" />
      </div>
    </section>
  );
};

export default SkillSection;

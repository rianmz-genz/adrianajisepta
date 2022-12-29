import Image from "next/image";
import React from "react";
import SectionTitle from "../text/SectionTitle";
import SectionLabel from "../text/SectionLabel";
import SectionDescription from "../text/SectionDescription";
import contentData from "../../store/contentData";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="transition-all duration-300 w-full py-12 flex flex-col lg:flex-row lg:justify-between items-center gap-8"
    >
      <div className="flex flex-col gap-6 sm:items-center lg:basis-6/12">
        <article className="flex flex-col gap-4">
          <div className="flex flex-col ga-1">
            <SectionLabel value={contentData.aboutSection.label} />
            <SectionTitle value={contentData.aboutSection.title} />
          </div>
          <SectionDescription
            value={contentData.aboutSection?.description ?? ""}
          />
        </article>
      </div>
      <div className="w-full lg:basis-6/12">
        <Image
          src={"/images/about-illustration.svg"}
          width={100}
          height={100}
          layout="responsive"
          loading="eager"
          alt="programmer"
        />
      </div>
    </section>
  );
};

export default AboutSection;

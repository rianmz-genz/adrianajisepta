import Image from "next/image";
import React from "react";
import { FiDownloadCloud } from "react-icons/fi";
import ButtonAnchor from "../buttons/ButtonAnchor";
import SectionDescription from "../text/SectionDescription";
import SectionLabel from "../text/SectionLabel";
import SectionTitle from "../text/SectionTitle";
import contentData from "../../store/contentData";

const BannerSection = () => {
  return (
    <section
      id="banner"
      className="w-full py-12 flex flex-col-reverse lg:flex-row lg:justify-between transition-all duration-500 items-center gap-8"
    >
      <div className="flex flex-col gap-6 sm:items-center lg:basis-6/12 transition-all duration-500">
        <article className="flex flex-col gap-1">
          <SectionLabel value={contentData.bannerSection.label} />
          <SectionTitle value={contentData.bannerSection.title} />
          <SectionDescription
            value={contentData.bannerSection?.description ?? ""}
          />
        </article>
        <div className="flex flex-col gap-2 sm:flex-row sm:w-full">
          <ButtonAnchor
            theme="primary"
            href="https://docs.google.com/document/d/1lFqxfq4jPJYIrqIWQ_ifz8uq5Hi6Z73nIRkxtFDgOFU/edit?usp=sharing"
            target={"_blank"}
            rel="noreferrer"
          >
            {contentData.bannerSection.downloadButtonCaption}{" "}
            <FiDownloadCloud className="text-xl" />
          </ButtonAnchor>
          <ButtonAnchor
            href="#about"
            theme="secondary"
            onClick={(e) => {
              e.preventDefault();
              const targetElement = document.querySelector("#about");
              if (targetElement) {
                window.scrollTo(0, targetElement?.offsetTop - 92);
              }
            }}
          >
            {contentData.bannerSection.exploreMoreButtonCaption}
          </ButtonAnchor>
        </div>
      </div>
      <div className="w-full lg:w-[400px] rounded-[50px] overflow-hidden">
        <Image
          blurDataURL="/adrian-photo.webp"
          placeholder="blur"
          loading="lazy"
          src={"/adrian-photo.webp"}
          width={100}
          height={100}
          className="w-full"
          alt="photo profile"
        />
      </div>
    </section>
  );
};

export default BannerSection;

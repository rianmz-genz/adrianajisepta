import Head from "next/head";
import Image from "next/image";
import Container from "../components/layout/Container";
import Navbar from "../components/nav/Navbar";
import BannerSection from "../components/section/BannerSection";
import AboutSection from "../components/section/AboutSection";
import SkillSection from "../components/section/SkillSection";
import ProjectSection from "../components/section/ProjectSection";
import ContactSection from "../components/section/ContactSection";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>
          Adrian Aji Septa - A passionate Frontend Developer, This is My
          Portfolio Website
        </title>
        <meta
          name="description"
          content={`My name is Adrian Aji Septa. I am a fresh graduate from SMK N 1 Purwokerto majoring in Software Engineering and is currently studying at Amikom Purwokerto University. I love programming especially in Frontend Dev.`}
        />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta
          property="og:title"
          content="Adrian Aji Septa - A passionate Frontend Developer, This is My Portfolio Website"
        />
        <meta
          property="og:description"
          content={`My name is Adrian Aji Septa. I am a fresh graduate from SMK N 1 Purwokerto majoring in Software Engineering and is currently studying at Amikom Purwokerto University. I love programming especially in Frontend Dev.`}
        />
        <meta property="og:url" content="https://adrianajisepta.my.id" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/rianmz-genz/adrian-portfolio/main/public/images/screenshot.jpg"
        />
      </Head>
      <Navbar />
      <BannerSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <footer className="py-4 text-gray-700 text-xl dark:text-white">
        Copyright © 2022. Develop by Adrian Aji Septa
      </footer>
    </Container>
  );
}

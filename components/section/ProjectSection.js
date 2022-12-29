import contentData from "../../store/contentData";
import ProjectCard from "../card/ProjectCard";
import SectionLabel from "../text/SectionLabel";
import SectionTitle from "../text/SectionTitle";

const ProjectSection = () => {
  return (
    <section id="project" className="flex flex-col gap-6 py-12">
      <article className="flex flex-col gap-1 text-center">
        <SectionLabel value={contentData.projectSection.label} />
        <SectionTitle value={contentData.projectSection.title} />
      </article>
      <ul className="columns-1 lg:columns-2 2xl:columns-3 gap-4">
        {contentData.projectSection.projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            demoUrl={project.demoUrl}
            description={project.description}
            preview={project.preview}
            repoUrl={project.repoUrl}
            techs={project.techs}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;

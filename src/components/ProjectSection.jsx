import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto py-16 px-4 scroll-mt-20"
      aria-labelledby="projects-heading"
    >
      <h2
        id="projects-heading"
        className="text-2xl font-bold mb-8 text-light-heading dark:text-dark-heading"
      >
        Proyectos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

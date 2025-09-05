export default function ProjectCard({ project }) {
  return (
    <article
      className="bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-xl p-6 shadow-lg"
      aria-label={`Proyecto: ${project.title}`}
    >
      <img
        src={project.image}
        alt={`Imagen del proyecto ${project.title}`}
        className="w-full h-64 object-cover object-top rounded mb-4 transition-transform duration-300 hover:scale-105"
        loading="lazy"
      />
      <h3 className="text-xl font-semibold mb-2 text-light-heading dark:text-dark-heading">
        {project.title}
      </h3>
      <p className="mb-4 text-light-text dark:text-dark-text">
        {project.description}
      </p>
      <ul className="flex flex-wrap gap-2 mb-4" aria-label="Tecnologías utilizadas">
        {project.tech.map((tech, idx) => (
          <li
            key={idx}
            className="bg-light-primary dark:bg-dark-primary text-white px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </li>
        ))}
      </ul>
      <a
        href={project.codeLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver código fuente del proyecto ${project.title}`}
        className="text-light-primary dark:text-dark-primary hover:text-light-hover dark:hover:text-dark-hover font-semibold"
      >
        Ver código
      </a>
    </article>
  );
}
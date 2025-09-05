  import { GitHubIcon, LinkedInIcon, DownloadIcon } from "../data/icons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-light-bg dark:bg-dark-bg"
      style={{ backgroundImage: "url('/hero-background.jpg')" }}
    >
      <h1 className="text-5xl font-bold mb-4 text-light-heading dark:text-dark-heading">
        Samuel Estévez
      </h1>
      <p className="text-xl text-light-text dark:text-dark-text mb-6">
        Desarrollador Full Stack | React Enthusiast
      </p>
      <div className="flex justify-center gap-6 mb-6">
        <a
          href="https://github.com/Aulaki"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-light-primary dark:hover:text-dark-primary transition"
          aria-label="GitHub"
        >
          {GitHubIcon}
        </a>

        <a
          href="https://www.linkedin.com/in/samuel-estevez/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-light-primary dark:hover:text-dark-primary transition"
          aria-label="LinkedIn"
        >
          {LinkedInIcon}
        </a>

        <a
          href="/CV-Samuel.pdf"
          download
          className="hover:text-light-primary dark:hover:text-dark-primary transition"
          aria-label="Descargar CV"
        >
          {DownloadIcon}
        </a>
      </div>

      <a
        href="#projects"
        className="px-6 py-3 bg-light-primary text-light-text dark:bg-dark-primary dark:text-dark-text rounded-md hover:bg-light-hover dark:hover:bg-dark-hover transition-colors"
      >
        Ver Proyectos
      </a>
    </section>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto py-16 px-4 scroll-mt-20 flex flex-col gap-10"
    >
      <h2 className="text-2xl font-bold text-left text-light-heading dark:text-dark-heading">
        Sobre mí
      </h2>

      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="max-w-md text-center md:text-left space-y-2 leading-snug text-light-text dark:text-dark-text text-base">
            <p>
              Soy{" "}
              <span className="font-semibold text-light-primary dark:text-dark-primary">
                Samuel Estévez
              </span>
              , desarrollador web con enfoque full-stack. Me desenvuelvo con
              soltura tanto en el frontend como en el backend, combinando diseño
              centrado en el usuario con soluciones técnicas eficientes.
            </p>
            <p>
              Tras una trayectoria diversa en sectores técnicos y sociales,
              encontré en la programación el espacio perfecto para unir lógica,
              creatividad y mejora continua. Disfruto trabajando en equipo,
              aprendiendo nuevas tecnologías y construyendo proyectos que
              conectan con las personas.
            </p>
          </div>

{/* {          <div className="w-36 h-36 transform rotate-[-3deg] shadow-md rounded-xl overflow-hidden border-2 border-light-border dark:border-dark-border">
            <img
              src="/tu-foto.jpg"
              alt="Samuel Estévez"
              className="w-full h-full object-cover"
            />
          </div>} */}
        </div>
      </div>
    </section>
  );
}

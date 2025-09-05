import { experience } from '../data/experience'

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-6xl mx-auto py-16 px-4 scroll-mt-20">
      <h2 className="text-2xl font-bold mb-8 text-light-heading dark:text-dark-heading">
        Experiencia
      </h2>
      <div className="space-y-8">
        {experience.map((item, idx) => (
          <div key={idx} className="bg-light-bg dark:bg-dark-bg p-6 rounded-lg border border-light-border dark:border-dark-border">
            <h3 className="text-xl font-semibold text-light-heading dark:text-dark-heading">
              {item.role} @ {item.company}
            </h3>
            <span className="text-sm text-light-text/70 dark:text-dark-text/70">
              {item.period}
            </span>
            <p className="mt-2 text-light-text dark:text-dark-text whitespace-pre-line">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
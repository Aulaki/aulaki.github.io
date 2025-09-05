import { education } from '../data/education'

export default function EducationSection() {
  return (
    <section id="education" className="max-w-6xl mx-auto py-16 px-4 scroll-mt-20">
      <h2 className="text-2xl font-bold mb-8 text-light-heading dark:text-dark-heading">
        Formación
      </h2>
      <ul className="space-y-6">
        {education.map((item, idx) => (
          <li key={idx} className="bg-light-bg dark:bg-dark-bg p-6 rounded-lg border border-light-border dark:border-dark-border">
            <h3 className="text-xl font-semibold text-light-heading dark:text-dark-heading">{item.degree}</h3>
            <p className="text-sm text-light-text/70 dark:text-dark-text/70">
              {item.institution}
            </p>
              <p className="text-sm text-light-text/70 dark:text-dark-text/70">
              {item.period}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
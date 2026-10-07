import { Section, Row } from './Layout';
import { resumeData } from '../data/resume';

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      {resumeData.experience.map((exp) => (
        <Row
          key={exp.company}
          meta={
            <>
              <p className="text-ink">{exp.period}</p>
              <p>{exp.location}</p>
            </>
          }
        >
          <h3 className="text-2xl font-semibold leading-tight">{exp.title}</h3>
          <p className="mt-1 text-lg">{exp.company}</p>
          <ul className="bullets mt-4">
            {exp.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </Row>
      ))}
    </Section>
  );
}

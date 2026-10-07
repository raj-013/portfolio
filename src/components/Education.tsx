import { Section, Row, ExtLink } from './Layout';
import { resumeData } from '../data/resume';

export default function Education() {
  return (
    <Section id="education" title="Education">
      {resumeData.education.map((edu) => (
        <Row
          key={edu.school}
          meta={
            <>
              <p className="text-ink">{edu.period}</p>
              <p>{edu.location}</p>
            </>
          }
        >
          <h3 className="text-2xl font-semibold leading-tight">{edu.degree}</h3>
          <p className="mt-1 text-lg">{edu.school}</p>
          {edu.coursework && (
            <p className="mt-4">
              <span className="text-muted">Coursework: </span>
              {edu.coursework.join(', ')}
            </p>
          )}
        </Row>
      ))}

      {resumeData.certifications.map((cert) => (
        <Row key={cert.name} tight meta="Certification">
          <ExtLink href={cert.link}>{cert.name}</ExtLink>
        </Row>
      ))}
    </Section>
  );
}

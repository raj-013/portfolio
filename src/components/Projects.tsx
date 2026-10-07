import { Section, Row, ExtLink } from './Layout';
import { resumeData } from '../data/resume';

export default function Projects() {
  const featured = resumeData.projects.filter((p) => p.featured);
  const additional = resumeData.projects.filter((p) => !p.featured);

  return (
    <Section id="projects" title="Projects">
      {featured.map((project) => (
        <Row
          key={project.name}
          meta={
            <>
              <p className="text-ink">{project.period}</p>
              {(project.demoLink || project.link) && (
                <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 md:flex-col md:items-start">
                  {project.demoLink && <ExtLink href={project.demoLink}>Demo</ExtLink>}
                  {project.link && (
                    <ExtLink href={project.link}>
                      {project.link.includes('github.com') ? 'Source' : 'Live site'}
                    </ExtLink>
                  )}
                </p>
              )}
            </>
          }
        >
          <h3 className="text-2xl font-semibold leading-tight">{project.name}</h3>
          {project.tagline && <p className="mt-1 text-lg">{project.tagline}</p>}

          {project.metrics && (
            <dl className="mt-5 flex flex-wrap gap-x-10 gap-y-3">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <dd className="display text-4xl">{m.value}</dd>
                  <dt className="mt-1 font-mono text-xs text-muted">{m.label}</dt>
                </div>
              ))}
            </dl>
          )}

          <ul className="bullets mt-5">
            {project.bullets.slice(0, 2).map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>

          <p className="mt-4 font-mono text-sm text-muted">{project.tech.join(', ')}</p>
        </Row>
      ))}

      {additional.length > 0 && (
        <>
          <h3 className="display mb-5 mt-14 text-3xl">All projects</h3>
          {additional.map((project) => (
            <Row key={project.name} tight meta={project.period}>
              <h4 className="font-semibold">
                {project.link ? <ExtLink href={project.link}>{project.name}</ExtLink> : project.name}
              </h4>
              <p className="mt-2">{project.bullets[0]}</p>
              <p className="mt-2 font-mono text-sm text-muted">{project.tech.join(', ')}</p>
            </Row>
          ))}
        </>
      )}
    </Section>
  );
}

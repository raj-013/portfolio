import { ExtLink } from './Layout';
import { resumeData } from '../data/resume';

export default function Intro() {
  const current = resumeData.experience[0];
  const masters = resumeData.education[0];

  const facts = [
    { label: 'Now', value: `${current.title}, ${current.company}` },
    { label: 'Studied', value: `${masters.degree}, ${masters.school}` },
  ];

  return (
    <section id="top" className="wrap pb-20 pt-10 sm:pb-28 sm:pt-16">
      <h1 className="display whitespace-nowrap text-[clamp(4.25rem,23vw,18.5rem)] leading-[0.8] tracking-[-0.01em]">
        {resumeData.name}
      </h1>

      <div className="mt-10 grid gap-x-8 gap-y-10 sm:mt-14 md:grid-cols-12">
        <div className="space-y-5 text-xl leading-snug sm:text-2xl sm:leading-snug md:col-span-7">
          <p>
            I'm an ML engineer. I build LLM backend services, retrieval pipelines, and the
            infrastructure that serves them.
          </p>
          <p className="text-muted">
            Since October 2025 I've led ML engineering at {current.company}, working on production
            RAG, model evaluation and monitoring, and GPU inference on AWS. Recently I built{' '}
            <a href="#projects" className="link text-ink">ContextForge</a>, a self-hosted tool that
            measures quality per token in RAG systems.
          </p>
        </div>

        <dl className="self-start font-mono text-sm md:col-span-4 md:col-start-9">
          {facts.map((fact) => (
            <div key={fact.label} className="flex gap-4 border-t border-rule py-3">
              <dt className="w-20 shrink-0 text-muted">{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
          <div className="flex gap-4 border-t border-rule py-3">
            <dt className="w-20 shrink-0 text-muted">Email</dt>
            <dd>
              <a href={`mailto:${resumeData.email}`} className="link">{resumeData.email}</a>
            </dd>
          </div>
          <div className="flex gap-4 border-y border-rule py-3">
            <dt className="w-20 shrink-0 text-muted">Elsewhere</dt>
            <dd className="flex flex-wrap gap-x-4">
              <ExtLink href={resumeData.githubUrl}>GitHub</ExtLink>
              <ExtLink href={resumeData.linkedinUrl}>LinkedIn</ExtLink>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

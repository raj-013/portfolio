import { Section, ExtLink } from './Layout';
import { resumeData } from '../data/resume';

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="border-t border-rule pt-8">
        <p className="max-w-[44rem]">
          Email is the best way to reach me, whether it's about a role, a project, or a question
          about something on this page.
        </p>
        <p className="mt-6">
          <a
            href={`mailto:${resumeData.email}`}
            className="link break-all text-[clamp(1.75rem,6.5vw,4.5rem)] font-semibold leading-tight"
          >
            {resumeData.email}
          </a>
        </p>
        <p className="mt-8 flex flex-wrap gap-x-6 gap-y-1 font-mono text-sm">
          <ExtLink href={resumeData.githubUrl}>GitHub</ExtLink>
          <ExtLink href={resumeData.linkedinUrl}>LinkedIn</ExtLink>
        </p>
      </div>
    </Section>
  );
}

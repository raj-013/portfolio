import { Section, Row } from './Layout';
import { resumeData } from '../data/resume';

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      {resumeData.skills.map((group) => (
        <Row key={group.category} tight meta={group.category}>
          <p>{group.skills.join(', ')}</p>
        </Row>
      ))}
    </Section>
  );
}

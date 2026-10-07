import { resumeData } from '../data/resume';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="wrap border-t border-rule py-6 font-mono text-xs text-muted">
      <p>© {year} {resumeData.name}</p>
    </footer>
  );
}

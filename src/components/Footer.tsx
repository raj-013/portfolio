import { resumeData } from '../data/resume';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-800/50 py-8">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold gradient-text">RP</span>
            <span className="text-surface-600 text-sm">|</span>
            <span className="text-surface-500 text-sm">{resumeData.name}</span>
          </div>
          <p className="text-surface-600 text-sm">
            © {year} {resumeData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

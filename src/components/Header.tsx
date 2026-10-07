import { resumeData } from '../data/resume';

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  return (
    <header className="wrap flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 py-5 font-mono text-sm">
      <a href="#top" className="font-medium">
        {resumeData.name}
      </a>
      <nav className="flex flex-wrap gap-x-5 gap-y-1">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="link">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

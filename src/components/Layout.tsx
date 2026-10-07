interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="wrap scroll-mt-8 pb-20 sm:pb-28">
      <h2 className="display mb-8 text-5xl sm:text-6xl">{title}</h2>
      {children}
    </section>
  );
}

interface RowProps {
  meta: React.ReactNode;
  children: React.ReactNode;
  tight?: boolean;
}

// Every section is a stack of these: mono metadata on the left, content on the right
export function Row({ meta, children, tight = false }: RowProps) {
  return (
    <div className={`grid gap-x-8 gap-y-3 border-t border-rule md:grid-cols-12 ${tight ? 'py-5' : 'py-8'}`}>
      <div className="font-mono text-sm text-muted md:col-span-3">{meta}</div>
      <div className="max-w-[44rem] md:col-span-9">{children}</div>
    </div>
  );
}

interface ExtLinkProps {
  href: string;
  children: React.ReactNode;
}

export function ExtLink({ href, children }: ExtLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="link whitespace-nowrap">
      {children}
      <svg
        viewBox="0 0 10 10"
        className="ml-1 inline-block h-[0.6em] w-[0.6em]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M1 9 9 1M3 1h6v6" />
      </svg>
    </a>
  );
}

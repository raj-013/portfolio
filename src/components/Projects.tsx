import { motion } from 'framer-motion';
import { FiGithub, FiArrowUpRight } from 'react-icons/fi';
import AnimatedSection from './AnimatedSection';
import { resumeData } from '../data/resume';

const springHover = { type: "spring" as const, stiffness: 400, damping: 25 };

const featuredThemes = [
  {
    // ContextForge — Teal
    hoverBorder: 'hover:border-[#088395]/40',
    headerBg: 'bg-[#088395]/10',
    bar: 'from-[#088395] to-[#7AB2B2]',
    metricText: 'text-[#7AB2B2]',
    hoverText: 'hover:text-[#7AB2B2]',
    groupHoverText: 'group-hover:text-[#7AB2B2]',
    tagBg: 'bg-[#088395]/10 text-[#7AB2B2] border-[#088395]/25',
    dot: 'bg-[#088395]/70',
  },
  {
    // RAG Chatbot — Amber
    hoverBorder: 'hover:border-[#E5A44E]/35',
    headerBg: 'bg-[#E5A44E]/10',
    bar: 'from-[#E5A44E] to-[#EFBF7A]',
    metricText: 'text-[#EFBF7A]',
    hoverText: 'hover:text-[#EFBF7A]',
    groupHoverText: 'group-hover:text-[#EFBF7A]',
    tagBg: 'bg-[#E5A44E]/10 text-[#EFBF7A] border-[#E5A44E]/25',
    dot: 'bg-[#E5A44E]/70',
  },
  {
    // Fine-Tuning — Violet
    hoverBorder: 'hover:border-[#8B5CF6]/35',
    headerBg: 'bg-[#8B5CF6]/10',
    bar: 'from-[#8B5CF6] to-[#C4B5FD]',
    metricText: 'text-[#C4B5FD]',
    hoverText: 'hover:text-[#C4B5FD]',
    groupHoverText: 'group-hover:text-[#C4B5FD]',
    tagBg: 'bg-[#8B5CF6]/10 text-[#C4B5FD] border-[#8B5CF6]/25',
    dot: 'bg-[#8B5CF6]/70',
  },
];

export default function Projects() {
  const featured = resumeData.projects.filter((p) => p.featured);
  const additional = resumeData.projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-radial-fade opacity-30" />
      <div className="section-container relative">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-primary-500" />
            <span className="text-primary-400 font-mono text-sm tracking-wider uppercase">Projects</span>
          </div>
          <h2 className="section-title text-white">Featured Projects</h2>
          <p className="section-subtitle">
            End-to-end ML systems and data pipelines built during graduate studies and professional work.
          </p>
        </AnimatedSection>

        {/* Featured projects — larger cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {featured.map((project, index) => {
            const theme = featuredThemes[index] ?? featuredThemes[0];
            return (
              <AnimatedSection key={project.name} delay={index * 0.12}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={springHover}
                  className={`group glass-card h-full flex flex-col overflow-hidden border border-surface-700/50 ${theme.hoverBorder} transition-colors duration-150 rounded-2xl`}
                >
                {/* Card header — flat theme-colored background */}
                <div className={`relative h-32 ${theme.headerBg} p-6 flex flex-col justify-between`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-surface-400 font-mono bg-surface-900/60 backdrop-blur-sm px-2.5 py-1 rounded-md">
                        {project.period}
                      </span>
                      {index === 0 && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full bg-[#088395]/15 border border-[#088395]/35 text-[#7AB2B2] font-mono">
                          ✦ New
                        </span>
                      )}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 text-xs font-medium text-surface-300 ${theme.hoverText} bg-surface-900/60 backdrop-blur-sm px-3 py-1.5 rounded-lg transition-colors duration-150`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiGithub className="w-3.5 h-3.5" />
                        <span>Source</span>
                        <FiArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${theme.bar} opacity-60 group-hover:opacity-100 transition-opacity duration-150`} />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className={`text-lg font-bold text-white ${theme.groupHoverText} transition-colors duration-150 mb-4`}>
                    {project.name}
                  </h3>

                  {/* Metric badges */}
                  {project.metrics && (
                    <div className="flex gap-3 mb-5">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="flex-1 bg-surface-800/60 border border-surface-700/40 rounded-xl p-3 text-center">
                          <div className={`text-lg font-bold ${theme.metricText}`}>{m.value}</div>
                          <div className="text-[10px] text-surface-500 uppercase tracking-wider mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bullets — show first 2 for featured */}
                  <ul className="space-y-2.5 mb-5 flex-1">
                    {project.bullets.slice(0, 2).map((bullet, i) => (
                      <li key={i} className="flex gap-2.5 text-surface-400 text-sm leading-relaxed">
                        <span className={`w-1 h-1 rounded-full ${theme.dot} mt-2 shrink-0`} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-surface-800/50">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`text-xs font-mono px-2.5 py-1 rounded-md border ${theme.tagBg}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          );
          })}
        </div>

        {/* Additional projects */}
        {additional.length > 0 && (
          <>
            <AnimatedSection>
              <h3 className="text-xl font-semibold text-surface-300 mb-6">More Projects</h3>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-4">
              {additional.map((project, index) => (
                <AnimatedSection key={project.name} delay={index * 0.08}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={springHover}
                    className="group glass-card-hover p-5 flex flex-col h-full"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-white group-hover:text-primary-400 transition-colors duration-150 text-sm">
                          {project.name}
                        </h4>
                        <span className="text-xs text-surface-500 font-mono">{project.period}</span>
                      </div>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 w-8 h-8 rounded-lg bg-surface-800/80 border border-surface-700/50 flex items-center justify-center text-surface-400 hover:text-primary-400 hover:border-primary-500/30 transition-colors duration-150"
                          aria-label={`View ${project.name} on GitHub`}
                        >
                          <FiGithub className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    <p className="text-surface-400 text-xs leading-relaxed mb-4 flex-1">
                      {project.bullets[0]}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-800/80 text-surface-400 border border-surface-700/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

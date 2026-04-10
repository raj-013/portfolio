import { motion } from 'framer-motion';
import { HiOutlineExternalLink } from 'react-icons/hi';
import AnimatedSection from './AnimatedSection';
import { resumeData } from '../data/resume';

const projectIcons: Record<string, string> = {
  'LLM-Powered RAG Chatbot': '💬',
  'Fine-Tuning Large Language Models': '🔬',
  'Real-Time Predictive Maintenance': '⚡',
};

const projectColors: Record<string, string> = {
  'LLM-Powered RAG Chatbot': 'from-primary-500/20 to-purple-500/20',
  'Fine-Tuning Large Language Models': 'from-cyan-500/20 to-blue-500/20',
  'Real-Time Predictive Maintenance': 'from-amber-500/20 to-orange-500/20',
};

export default function Projects() {
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
            End-to-end ML systems and data pipelines built during my graduate studies.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.projects.map((project, index) => (
            <AnimatedSection key={project.name} delay={index * 0.12}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group glass-card-hover h-full flex flex-col overflow-hidden"
              >
                {/* Header gradient */}
                <div className={`h-2 bg-gradient-to-r ${projectColors[project.name] || 'from-primary-500/20 to-purple-500/20'}`} />

                <div className="p-6 flex flex-col flex-1">
                  {/* Icon and period */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl" aria-hidden="true">{projectIcons[project.name] || '🚀'}</div>
                    <span className="text-xs text-surface-500 font-mono bg-surface-800/80 px-2.5 py-1 rounded-md">
                      {project.period}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors duration-300 mb-3">
                    {project.name}
                  </h3>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-5 flex-1">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2.5 text-surface-400 text-sm leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-primary-500/50 mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-surface-800/50">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary-500/10 text-primary-300 border border-primary-500/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Note about GitHub */}
        <AnimatedSection delay={0.5}>
          <div className="mt-12 text-center">
            <p className="text-surface-500 text-sm flex items-center justify-center gap-2">
              <HiOutlineExternalLink className="w-4 h-4" />
              GitHub links not available from resume — add them in <code className="font-mono text-primary-400 text-xs">src/data/resume.ts</code>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

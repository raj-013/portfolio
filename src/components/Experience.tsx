import { motion } from 'framer-motion';
import { HiOutlineBriefcase, HiOutlineLocationMarker } from 'react-icons/hi';
import AnimatedSection from './AnimatedSection';
import { resumeData } from '../data/resume';

const springHover = { type: "spring" as const, stiffness: 400, damping: 25 };

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="section-container">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-primary-500" />
            <span className="text-primary-400 font-mono text-sm tracking-wider uppercase">Experience</span>
          </div>
          <h2 className="section-title text-white">Where I've Worked</h2>
          <p className="section-subtitle">
            Building production systems across ML, backend engineering, and cloud infrastructure.
          </p>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-500 via-primary-500/50 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {resumeData.experience.map((exp, index) => (
              <AnimatedSection key={exp.company} delay={index * 0.15}>
                <div className="flex gap-6">
                  <div className="hidden sm:flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      transition={springHover}
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                        index === 0
                          ? 'bg-primary-500 shadow-lg shadow-primary-500/30'
                          : 'bg-surface-800 border-2 border-surface-600'
                      }`}
                    >
                      <HiOutlineBriefcase className={`w-4 h-4 ${index === 0 ? 'text-white' : 'text-surface-400'}`} />
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={springHover}
                    className="flex-1 glass-card-hover p-6 sm:p-8"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">{exp.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-primary-400 font-semibold">{exp.company}</span>
                          <span className="text-surface-600">·</span>
                          <span className="text-surface-400 text-sm flex items-center gap-1">
                            <HiOutlineLocationMarker className="w-3 h-3" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <span className="text-sm text-surface-500 font-mono whitespace-nowrap bg-surface-800/50 px-3 py-1 rounded-lg">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3 text-surface-300 text-sm leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500/60 mt-2 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

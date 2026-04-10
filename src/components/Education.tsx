import { motion } from 'framer-motion';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import AnimatedSection from './AnimatedSection';
import { resumeData } from '../data/resume';

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="absolute inset-0 bg-radial-fade opacity-30" />
      <div className="section-container relative">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-primary-500" />
            <span className="text-primary-400 font-mono text-sm tracking-wider uppercase">Education</span>
          </div>
          <h2 className="section-title text-white">Education</h2>
          <p className="section-subtitle">
            Computer Engineering background with focus on ML, systems, and architecture.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {resumeData.education.map((edu, index) => (
            <AnimatedSection key={edu.school} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card-hover p-6 sm:p-8 h-full relative overflow-hidden group"
              >
                {/* Accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-purple-500 opacity-60 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center shrink-0">
                    <HiOutlineAcademicCap className="w-6 h-6 text-primary-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                    <p className="text-primary-400 font-medium mt-1">{edu.school}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
                  <span className="text-surface-400">{edu.location}</span>
                  <span className="text-surface-600">·</span>
                  <span className="font-mono text-surface-500 bg-surface-800/50 px-2.5 py-0.5 rounded-md text-xs">
                    {edu.period}
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 mb-5">
                  <span className="text-emerald-400 font-semibold text-sm">GPA: {edu.gpa}</span>
                </div>

                {edu.coursework && (
                  <div>
                    <p className="text-xs text-surface-500 uppercase tracking-wider font-medium mb-3">Relevant Coursework</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="text-xs font-mono px-2.5 py-1 rounded-md bg-surface-800/80 text-surface-300 border border-surface-700/50"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

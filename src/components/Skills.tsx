import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { resumeData } from '../data/resume';

const springHover = { type: "spring" as const, stiffness: 400, damping: 25 };

const categoryColors: Record<string, string> = {
  'Languages': 'bg-sky-500/15 text-sky-300 border-sky-500/20',
  'ML & AI': 'bg-primary-500/15 text-primary-300 border-primary-500/20',
  'Data & Libraries': 'bg-cyan-500/15 text-cyan-300 border-cyan-500/20',
  'Databases': 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20',
  'Cloud & DevOps': 'bg-accent-500/15 text-accent-300 border-accent-500/20',
  'Tools': 'bg-rose-500/15 text-rose-300 border-rose-500/20',
};

const categoryIcons: Record<string, string> = {
  'Languages': '{ }',
  'ML & AI': '🧠',
  'Data & Libraries': '📦',
  'Databases': '🗄️',
  'Cloud & DevOps': '☁️',
  'Tools': '🔧',
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="section-container">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-primary-500" />
            <span className="text-primary-400 font-mono text-sm tracking-wider uppercase">Skills</span>
          </div>
          <h2 className="section-title text-white">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I use to build production ML systems and backend services.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.skills.map((category, index) => (
            <AnimatedSection key={category.category} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={springHover}
                className="glass-card-hover p-6 h-full"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-lg" aria-hidden="true">{categoryIcons[category.category] || '📋'}</span>
                  <h3 className="text-white font-semibold">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.03 * i, duration: 0.3 }}
                      className={`text-sm font-mono px-3 py-1.5 rounded-lg border ${
                        categoryColors[category.category] || 'bg-surface-800 text-surface-300 border-surface-700'
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

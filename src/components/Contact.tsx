import { motion } from 'framer-motion';
import { HiOutlineMail } from 'react-icons/hi';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import AnimatedSection from './AnimatedSection';
import { resumeData } from '../data/resume';

const springHover = { type: "spring" as const, stiffness: 400, damping: 25 };

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="section-container relative">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-primary-500" />
              <span className="text-primary-400 font-mono text-sm tracking-wider uppercase">Contact</span>
              <div className="w-12 h-[2px] bg-primary-500" />
            </div>
            <h2 className="section-title text-white mb-4">Let's Connect</h2>
            <p className="text-surface-400 text-lg mb-12 leading-relaxed">
              I'm always open to discussing ML engineering opportunities,
              interesting projects, or collaborations. Feel free to reach out.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-md mx-auto">
            <motion.a
              href={`mailto:${resumeData.email}`}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={springHover}
              className="glass-card-hover p-6 flex items-center gap-4 group w-full"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors duration-150">
                <HiOutlineMail className="w-5 h-5 text-primary-400" />
              </div>
              <div>
                <p className="text-xs text-surface-500 uppercase tracking-wider mb-1">Email</p>
                <p className="text-white font-medium text-sm">{resumeData.email}</p>
              </div>
            </motion.a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.a
              href={resumeData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={springHover}
              className="w-12 h-12 rounded-xl bg-surface-800/80 border border-surface-700/50 flex items-center justify-center text-surface-400 hover:text-primary-400 hover:border-primary-500/30 transition-colors duration-150"
            >
              <FiLinkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={resumeData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={springHover}
              className="w-12 h-12 rounded-xl bg-surface-800/80 border border-surface-700/50 flex items-center justify-center text-surface-400 hover:text-primary-400 hover:border-primary-500/30 transition-colors duration-150"
            >
              <FiGithub className="w-5 h-5" />
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

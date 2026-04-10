import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import AnimatedSection from './AnimatedSection';
import { resumeData } from '../data/resume';

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
          <div className="max-w-xl mx-auto grid sm:grid-cols-2 gap-4">
            <motion.a
              href={`mailto:${resumeData.email}`}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="glass-card-hover p-6 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                <HiOutlineMail className="w-5 h-5 text-primary-400" />
              </div>
              <div>
                <p className="text-xs text-surface-500 uppercase tracking-wider mb-1">Email</p>
                <p className="text-white font-medium text-sm">{resumeData.email}</p>
              </div>
            </motion.a>

            <motion.a
              href={`tel:${resumeData.phone}`}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="glass-card-hover p-6 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                <HiOutlinePhone className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-xs text-surface-500 uppercase tracking-wider mb-1">Phone</p>
                <p className="text-white font-medium text-sm">{resumeData.phone}</p>
              </div>
            </motion.a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="flex items-center justify-center gap-4 mt-10">
            <motion.a
              href="https://www.linkedin.com/in/rajpatel013/"
              aria-label="LinkedIn"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-xl bg-surface-800/80 border border-surface-700/50 flex items-center justify-center text-surface-400 hover:text-primary-400 hover:border-primary-500/30 transition-all duration-300"
              //title="LinkedIn URL not available in resume — update href in src/components/Contact.tsx"
            >
              <FiLinkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://github.com/raj-013"
              aria-label="GitHub"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-xl bg-surface-800/80 border border-surface-700/50 flex items-center justify-center text-surface-400 hover:text-primary-400 hover:border-primary-500/30 transition-all duration-300"
              //title="GitHub URL not available in resume — update href in src/components/Contact.tsx"
            >
              <FiGithub className="w-5 h-5" />
            </motion.a>
          </div>
          <p className="text-center text-surface-600 text-xs mt-4">
            ⚠️ LinkedIn and GitHub URLs were not extractable from the PDFs. Update them in <code className="font-mono text-primary-500/60">src/components/Contact.tsx</code>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

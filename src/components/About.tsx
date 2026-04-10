import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-radial-fade opacity-50" />
      <div className="section-container relative">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-primary-500" />
            <span className="text-primary-400 font-mono text-sm tracking-wider uppercase">About</span>
          </div>
          <h2 className="section-title text-white">
            Building intelligent systems<br />
            <span className="gradient-text">at the intersection of ML & Software Engineering</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <AnimatedSection delay={0.2}>
            <div className="space-y-6 text-surface-300 leading-relaxed">
              <p>
                I'm a Machine Learning Engineer and Software Developer with a Master's degree
                from <span className="text-white font-medium">NYU Tandon School of Engineering</span> (GPA: 3.93/4.0).
                My work spans building LLM-powered backend services, designing RAG pipelines,
                and deploying scalable cloud infrastructure.
              </p>
              <p>
                Currently at <span className="text-white font-medium">Emotionall</span> as Lead ML Engineer,
                I build and deploy production AI systems — from GPU-accelerated inference services
                to evaluation pipelines that ensure reliable model behavior. I'm passionate about
                bridging the gap between ML research and production-ready software.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: '🧠',
                  title: 'ML & AI',
                  desc: 'LLMs, RAG, NLP, Deep Learning',
                },
                {
                  icon: '⚙️',
                  title: 'Backend',
                  desc: 'Python, Java, Django, APIs',
                },
                {
                  icon: '☁️',
                  title: 'Cloud & DevOps',
                  desc: 'AWS, Docker, Kubernetes, CI/CD',
                },
                {
                  icon: '📊',
                  title: 'Data Engineering',
                  desc: 'Kafka, PySpark, PostgreSQL',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card-hover p-5 relative group overflow-hidden"
                >
                  <div className="text-2xl mb-3" aria-hidden="true">{item.icon}</div>
                  <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-surface-400 text-xs leading-relaxed">{item.desc}</p>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

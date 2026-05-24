'use client'
import { motion } from 'framer-motion'

const certifications = [
  { icon: '🏆', label: 'Certification', name: 'Amazon Bedrock Generative AI', color: 'rgba(245,166,35,0.12)', border: 'rgba(245,166,35,0.3)' },
  { icon: '🏆', label: 'Certification', name: 'Oracle DB PL/SQL Developer Certified Professional', color: 'rgba(245,166,35,0.12)', border: 'rgba(245,166,35,0.3)' },
  { icon: '🎓', label: 'B.Tech — Computer Science & Engineering', name: 'Sphoorthy Engineering College, JNTUH · 2018–2022', color: 'rgba(74,139,244,0.12)', border: 'rgba(74,139,244,0.3)' },
]

const tags = ['Gen AI', 'RAG Systems', 'LangGraph', 'Python', 'FastAPI', 'Oracle EBS R12', 'Hyderabad, India']

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-16 lg:px-24 bg-[#0D1528]">
      <div className="max-w-6xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: .5 }}
          className="font-mono text-xs text-[#00CFDA] tracking-widest mb-2">// about me</motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: .5, delay: .1 }}
          className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-12">
          Who I <span className="text-[#4A8BF4]">Am</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: .6, delay: .2 }}>
            <p className="text-[#7A8BAD] font-light leading-relaxed mb-5">
              I’m a <strong className="text-[#E8EDF8] font-medium">Generative AI Developer</strong> at Virtusa, where I design and
              ship intelligent applications — from enterprise RAG systems to LLM-powered internal tools — that solve real operational
              problems at scale.
            </p>
            <p className="text-[#7A8BAD] font-light leading-relaxed mb-5">
              My background bridges two worlds: <strong className="text-[#E8EDF8] font-medium">modern AI engineering</strong> (LLMs,
              vector search, agentic workflows) and <strong className="text-[#E8EDF8] font-medium">battle-tested backend development</strong> (Oracle
              PL/SQL, Oracle EBS R12, large-scale Citibank banking systems).
            </p>
            <p className="text-[#7A8BAD] font-light leading-relaxed mb-8">
              I believe the best AI engineers understand data deeply. That foundation — 2 years building financial systems for Citibank —
              informs how I approach reliability, performance, and correctness in every AI system I build.
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map(t => (
                <span key={t} className="font-mono text-xs text-[#4A8BF4] bg-[rgba(74,139,244,0.08)]
                  border border-[rgba(74,139,244,0.2)] px-3 py-1.5 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — certs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: .6, delay: .3 }}
            className="flex flex-col gap-3">
            {certifications.map((c, i) => (
              <div key={i} className="flex items-start gap-4 bg-[#0F1C34] border border-[rgba(74,139,244,0.15)]
                rounded-xl p-4 hover:border-[rgba(74,139,244,0.3)] transition-colors">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: c.color, border: `0.5px solid ${c.border}` }}>
                  {c.icon}
                </div>
                <div>
                  <p className="font-mono text-xs text-[#7A8BAD] mb-0.5">{c.label}</p>
                  <p className="text-sm font-medium text-[#E8EDF8]">{c.name}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

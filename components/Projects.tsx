'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type PillColor = 'blue' | 'cyan' | 'amber' | 'green'

interface Project {
  num: string
  type: string
  title: string
  desc: string
  featured?: boolean
  stack: { label: string; color: PillColor }[]
}

const projects: Project[] = [
  {
    num: '01', type: 'RAG · Internal Tool', featured: true,
    title: 'Policy Document RAG Application',
    desc: 'Enterprise RAG system letting Virtusa employees query 200+ pages of HR & operational policy documents in natural language — with source citations, multi-turn conversation, and a Streamlit UI for non-technical teams.',
    stack: [
      { label: 'Python',    color: 'blue' },
      { label: 'FastAPI',   color: 'blue' },
      { label: 'FAISS',     color: 'cyan' },
      { label: 'LLM APIs',  color: 'cyan' },
      { label: 'RAG',       color: 'cyan' },
      { label: 'Streamlit', color: 'green' },
    ],
  },
  {
    num: '02', type: 'LLM App · Internal Tool', featured: true,
    title: 'Intelligent Resume Builder',
    desc: 'LLM-powered recruiter tool that parses Virtusa JDs, semantically matches candidates via FAISS, and generates submission-ready resumes in Virtusa\'s standard format — automating the entire talent formatting workflow.',
    stack: [
      { label: 'Python',              color: 'blue' },
      { label: 'LLM APIs',            color: 'cyan' },
      { label: 'FAISS',               color: 'cyan' },
      { label: 'Streamlit',           color: 'green' },
      { label: 'Prompt Engineering',  color: 'amber' },
    ],
  },
  {
    num: '03', type: 'Agentic AI · Personal',
    title: 'AI News Orchestrator',
    desc: 'Multi-agent system on LangGraph to automate news ingestion, filtering & summarisation with stateful conditional edge logic and a high-concurrency FastAPI backend.',
    stack: [
      { label: 'LangGraph',   color: 'blue' },
      { label: 'FastAPI',     color: 'blue' },
      { label: 'Multi-Agent', color: 'cyan' },
      { label: 'LLM APIs',   color: 'amber' },
      { label: 'Python',      color: 'green' },
    ],
  },
  {
    num: '04', type: 'Hackathon · Virtusa 🏆',
    title: 'Smart AI E-Commerce with AI Stylist',
    desc: 'Award-winning hackathon project — AI stylist engine using Google GenAI SDK + FAISS semantic search for personalised fashion recommendations via a real-time Streamlit UI.',
    stack: [
      { label: 'Google GenAI SDK',  color: 'blue' },
      { label: 'FAISS',             color: 'cyan' },
      { label: 'Semantic Search',   color: 'cyan' },
      { label: 'Streamlit',         color: 'green' },
      { label: 'Python',            color: 'green' },
    ],
  },
]

const pillStyles: Record<PillColor, string> = {
  blue:  'text-[#4A8BF4]  bg-[rgba(74,139,244,0.08)]  border-[rgba(74,139,244,0.25)]',
  cyan:  'text-[#00CFDA]  bg-[rgba(0,207,218,0.08)]   border-[rgba(0,207,218,0.25)]',
  amber: 'text-[#F5A623]  bg-[rgba(245,166,35,0.08)]  border-[rgba(245,166,35,0.25)]',
  green: 'text-[#22C87A]  bg-[rgba(34,200,122,0.08)]  border-[rgba(34,200,122,0.25)]',
}

export default function Projects() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-24 px-6 md:px-16 lg:px-24 bg-[#060C1A]">
      <div ref={ref} className="max-w-6xl mx-auto">

        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: .5 }}
          className="font-mono text-xs text-[#00CFDA] tracking-widest mb-2">// key projects</motion.p>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .5, delay: .1 }}
          className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-12">
          What I've <span className="text-[#4A8BF4]">Built</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.div key={p.num}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: .5, delay: .15 + i * 0.08 }}
              className={`relative bg-[#0F1C34] rounded-2xl p-6 border overflow-hidden
                          hover:-translate-y-1 transition-all duration-200 group
                          ${p.featured
                            ? 'border-[rgba(74,139,244,0.3)]'
                            : 'border-[rgba(74,139,244,0.15)] hover:border-[rgba(74,139,244,0.3)]'
                          }`}>
              {/* top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4A8BF4] to-[#00CFDA]
                              transition-opacity duration-200
                              ${p.featured ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />

              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-xs text-[#7A8BAD] bg-[#060C1A] px-2 py-1 rounded">{p.num}</span>
                <span className="font-mono text-xs text-[#00CFDA] bg-[rgba(0,207,218,0.08)]
                                  border border-[rgba(0,207,218,0.2)] px-2.5 py-1 rounded-full">{p.type}</span>
              </div>

              <h3 className="font-display font-bold text-base text-[#E8EDF8] mb-3 tracking-tight">{p.title}</h3>
              <p className="text-sm text-[#7A8BAD] font-light leading-relaxed mb-5">{p.desc}</p>

              <div className="flex flex-wrap gap-1.5">
                {p.stack.map(s => (
                  <span key={s.label} className={`font-mono text-xs px-2 py-1 rounded-full border ${pillStyles[s.color]}`}>
                    {s.label}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

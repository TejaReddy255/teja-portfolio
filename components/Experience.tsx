'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Experience() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: .55, delay },
  })

  return (
    <section id="experience" className="py-24 px-6 md:px-16 lg:px-24 bg-[#0D1528]">
      <div ref={ref} className="max-w-4xl mx-auto">

        <motion.p {...fade(0)} className="font-mono text-xs text-[#00CFDA] tracking-widest mb-2">// work experience</motion.p>
        <motion.h2 {...fade(.1)} className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-14">
          Career <span className="text-[#4A8BF4]">Timeline</span>
        </motion.h2>

        {/* Timeline container */}
        <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px
                        before:bg-gradient-to-b before:from-[#4A8BF4] before:via-[#00CFDA] before:to-transparent">

          {/* Virtusa header */}
          <motion.div {...fade(.2)} className="relative mb-8">
            <div className="absolute -left-[2.1rem] top-1.5 w-3 h-3 rounded-full bg-[#4A8BF4] ring-2 ring-[#4A8BF4]/30" />
            <p className="font-display font-bold text-xl text-[#E8EDF8]">Virtusa</p>
            <p className="font-mono text-xs text-[#7A8BAD] mt-0.5">AI Engineer & Oracle PL/SQL Developer · June 2022 – Present</p>
          </motion.div>

          {/* Gen AI band */}
          <motion.div {...fade(.3)} className="relative mb-6">
            <div className="absolute -left-[2.1rem] top-1.5 w-3 h-3 rounded-full border-2 border-[#4A8BF4] bg-[#0D1528]" />
            <span className="inline-flex items-center gap-2 font-mono text-xs text-[#4A8BF4] bg-[rgba(74,139,244,0.1)]
                             border border-[rgba(74,139,244,0.3)] px-3 py-1.5 rounded-full mb-4">
              ⚡ Gen AI Development — 2024–Present
            </span>

            <div className="bg-[#0F1C34] border border-[rgba(74,139,244,0.15)] rounded-2xl p-6">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <p className="font-display font-bold text-base text-[#E8EDF8]">Generative AI Developer</p>
                <span className="font-mono text-xs text-[#7A8BAD]">2024 – Present</span>
              </div>
              <p className="text-sm text-[#4A8BF4] mb-4">Virtusa – Internal R&amp;D &amp; Innovation Projects</p>
              <p className="text-sm text-[#7A8BAD] font-light leading-relaxed mb-5">
                Led development of internal Gen AI applications at Virtusa — automating knowledge retrieval, streamlining
                talent operations, and showcasing AI-first capabilities across the organisation.
              </p>

              <p className="font-mono text-xs text-[#00CFDA] italic mb-2">Project 1: Policy Document RAG Application</p>
              <ul className="space-y-1.5 mb-5">
                {[
                  "Architected end-to-end RAG system on Virtusa\u2019s HR & policy documents using FAISS vector indexing + LLM API for natural language querying",
                  'Python ingestion pipelines for 200+ pages; FastAPI backend with multi-turn conversation history; Streamlit UI for non-technical teams',
                  'Prompt engineering to minimise hallucination and enforce policy-grounded responses with source citations',
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#7A8BAD] font-light">
                    <span className="text-[#4A8BF4] mt-0.5 text-xs flex-shrink-0">▸</span>{b}
                  </li>
                ))}
              </ul>

              <p className="font-mono text-xs text-[#00CFDA] italic mb-2">Project 2: Intelligent Resume Builder (Virtusa JD Format)</p>
              <ul className="space-y-1.5">
                {[
                  "LLM-powered resume builder auto-generating candidate profiles aligned to Virtusa\u2019s JD format, cutting manual formatting time significantly",
                  'JD parsing + FAISS semantic matching scores candidate alignment; Streamlit UI for recruiters to upload JD and receive submission-ready resumes',
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#7A8BAD] font-light">
                    <span className="text-[#4A8BF4] mt-0.5 text-xs flex-shrink-0">▸</span>{b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* PL/SQL band */}
          <motion.div {...fade(.4)} className="relative">
            <div className="absolute -left-[2.1rem] top-1.5 w-3 h-3 rounded-full border-2 border-[#F5A623] bg-[#0D1528]" />
            <span className="inline-flex items-center gap-2 font-mono text-xs text-[#F5A623] bg-[rgba(245,166,35,0.1)]
                             border border-[rgba(245,166,35,0.3)] px-3 py-1.5 rounded-full mb-4">
              🗄️ Oracle PL/SQL Development — July 2022–June 2024
            </span>

            <div className="bg-[#0F1C34] border border-[rgba(74,139,244,0.15)] rounded-2xl p-6 space-y-6">
              {[
                {
                  role: 'Oracle PL/SQL Developer',
                  org: 'Citibank N.A. – Procure to Pay (P2P)',
                  dates: 'July 2023 – June 2024',
                  bullets: [
                    'PL/SQL procedures & packages for GL module in Oracle EBS R12 for large-scale banking data manipulation',
                    'SQL*Loader inbound pipelines and concurrent outbound reporting for global finance stakeholders',
                  ],
                },
                {
                  role: 'Oracle PL/SQL Developer',
                  org: 'Citicorp Finance India Ltd. – CITI ABF',
                  dates: 'July 2022 – June 2023',
                  bullets: [
                    'Optimised PL/SQL across loan booking, repayment, securitisation & reversal modules ensuring regulatory compliance',
                    'Full defect lifecycle via ServiceNow; GIT version control across distributed Agile teams',
                  ],
                },
              ].map((exp, i) => (
                <div key={i} className={i > 0 ? 'pt-5 border-t border-[rgba(74,139,244,0.1)]' : ''}>
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                    <p className="font-display font-bold text-base text-[#E8EDF8]">{exp.role}</p>
                    <span className="font-mono text-xs text-[#7A8BAD]">{exp.dates}</span>
                  </div>
                  <p className="text-sm text-[#F5A623] mb-3">{exp.org}</p>
                  <ul className="space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#7A8BAD] font-light">
                        <span className="text-[#F5A623] mt-0.5 text-xs flex-shrink-0">▸</span>{b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

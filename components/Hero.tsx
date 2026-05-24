'use client'
import { useEffect, useState } from 'react'
import { motion, type Variants } from 'framer-motion'

const phrases = [
    'Generative AI Developer',
    'RAG Systems Engineer',
    'LangGraph Architect',
    'LLM App Builder',
    'AI/ML Engineer',
  ]

function Typewriter() {
    const [phraseIdx, setPhraseIdx] = useState(0)
    const [charIdx, setCharIdx]     = useState(0)
    const [deleting, setDeleting]   = useState(false)
    const [text, setText]           = useState('')

  useEffect(() => {
        const phrase = phrases[phraseIdx]
        let timeout: NodeJS.Timeout

                if (!deleting) {
                        timeout = setTimeout(() => {
                                  setText(phrase.slice(0, charIdx + 1))
                                  setCharIdx(c => c + 1)
                                  if (charIdx + 1 === phrase.length) {
                                              setTimeout(() => setDeleting(true), 2000)
                                  }
                        }, 80)
                } else {
                        timeout = setTimeout(() => {
                                  setText(phrase.slice(0, charIdx - 1))
                                  setCharIdx(c => c - 1)
                                  if (charIdx - 1 === 0) {
                                              setDeleting(false)
                                              setPhraseIdx(i => (i + 1) % phrases.length)
                                  }
                        }, 45)
                }
        return () => clearTimeout(timeout)
  }, [charIdx, deleting, phraseIdx])

  return (
        <span className="text-[#00CFDA]">
          {text}<span className="animate-pulse">_</span>span>
        </span>span>
      )
}

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' } }),
}
  
  export default function Hero() {
      const [mounted, setMounted] = useState(false)
          useEffect(() => { setMounted(true) }, [])
            
              return (
                    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden">
                    
                      {/* Grid background */}
                          <div className="grid-bg absolute inset-0 pointer-events-none" />
                    
                      {/* Glow blobs */}
                          <div className="absolute -top-40 -left-20 w-[600px] h-[600px] rounded-full pointer-events-none"
                                    style={{ background: 'radial-gradient(circle, rgba(74,139,244,0.10) 0%, transparent 65%)' }} />
                          <div className="absolute -bottom-20 -right-10 w-[500px] h-[500px] rounded-full pointer-events-none"
                                    style={{ background: 'radial-gradient(circle, rgba(0,207,218,0.07) 0%, transparent 65%)' }} />
                    
                          <div className="relative z-10 max-w-4xl">
                          
                            {/* Badge */}
                                  <motion.div custom={0} variants={fadeUp} initial="hidden" animate={mounted ? 'show' : 'hidden'}
                                              className="inline-flex items-center gap-2 font-mono text-xs text-[#00CFDA] border border-[rgba(0,207,218,0.3)]
                                      px-4 py-1.5 rounded-full mb-6 bg-[rgba(0,207,218,0.05)]">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#00CFDA] animate-pulse" />
                                            Open to Opportunities
                                  </motion.div>motion.div>
                          
                            {/* Name */}
                                  <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate={mounted ? 'show' : 'hidden'}
                                              className="font-display font-extrabold leading-none tracking-tight mb-2"
                                              style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}>
                                            <span className="block text-[#E8EDF8]">Annem Siva</span>span>
                                            <span className="block gradient-text">Sai Teja Reddy</span>span>
                                  </motion.h1>motion.h1>
                          
                            {/* Typewriter */}
                                  <motion.div custom={2} variants={fadeUp} initial="hidden" animate={mounted ? 'show' : 'hidden'}
                                              className="flex items-center gap-3 font-mono text-base text-[#7A8BAD] mt-5 mb-5">
                                            <span className="text-[#4A8BF4]">&gt;</span>span>
                                            <Typewriter />
                                  </motion.div>motion.div>
                          
                            {/* Description */}
                                  <motion.p custom={3} variants={fadeUp} initial="hidden" animate={mounted ? 'show' : 'hidden'}
                                              className="max-w-xl text-[#7A8BAD] font-light leading-relaxed mb-8 text-base">
                                            Building <strong className="text-[#E8EDF8] font-medium">production-grade Gen AI systems</strong>strong> — RAG pipelines,
                                            agentic orchestration &amp; LLM-powered applications. Grounded in{' '}
                                            <strong className="text-[#E8EDF8] font-medium">3+ years</strong>strong> of enterprise software engineering.
                                  </motion.p>motion.p>
                          
                            {/* CTAs */}
                                  <motion.div custom={4} variants={fadeUp} initial="hidden" animate={mounted ? 'show' : 'hidden'}
                                              className="flex flex-wrap gap-4">
                                            <a href="#projects"
                                                          className="inline-flex items-center gap-2 bg-[#4A8BF4] text-white px-6 py-3 rounded-lg
                                                font-medium text-sm hover:bg-[#5A9BFF] hover:-translate-y-0.5 transition-all">
                                                        View Projects ↓
                                            </a>a>
                                            <a href="mailto:sivasaitejaannem@gmail.com"
                                                          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm
                                                border border-[rgba(74,139,244,0.3)] text-[#E8EDF8] hover:border-[#00CFDA]
                                                hover:text-[#00CFDA] transition-all">
                                                        Get in Touch →
                                            </a>a>
                                  </motion.div>motion.div>
                          
                            {/* Stats */}
                                  <motion.div custom={5} variants={fadeUp} initial="hidden" animate={mounted ? 'show' : 'hidden'}
                                              className="flex flex-wrap gap-10 mt-14 pt-8 border-t border-[rgba(74,139,244,0.15)]">
                                    {[
                                                { value: '+3+', label: 'Years Experience' },
                                                { value: '+5+', label: 'AI Projects Built' },
                                                { value: '2',   label: 'Certifications' },
                                                          ].map(stat => (
                                                                        <div key={stat.label} className="flex flex-col gap-1">
                                                                                      <span className="font-display font-bold text-2xl text-[#4A8BF4]">{stat.value}</span>span>
                                                                                      <span className="font-mono text-xs text-[#7A8BAD]">{stat.label}</span>span>
                                                                        </div>div>
                                                                      ))}
                                  </motion.div>motion.div>
                          
                          </div>div>
                    </section>section>
                  )
                }</span>

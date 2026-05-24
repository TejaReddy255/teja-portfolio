'use client'
import { motion } from 'framer-motion'

type PillColor = 'blue' | 'cyan' | 'amber' | 'green'

interface SkillCard {
    icon: string
    category: string
    color: PillColor
    pills: string[]
}

const skillData: SkillCard[] = [
  { icon: '🤖', category: 'Gen AI & LLMs', color: 'blue',
       pills: ['LangGraph', 'LangChain', 'OpenAI API', 'Gemini', 'Amazon Bedrock', 'Google GenAI SDK', 'RAG', 'Prompt Engineering'] },
  { icon: '🔍', category: 'AI Frameworks', color: 'cyan',
       pills: ['FAISS', 'Vector Indexing', 'Semantic Search', 'Multi-Agent Orchestration', 'State Management', 'Conditional Edges'] },
  { icon: '⚡', category: 'Programming & APIs', color: 'green',
       pills: ['Python', 'FastAPI', 'Asyncio', 'Pydantic', 'SQL', 'PL/SQL', 'Shell Scripting'] },
  { icon: '🗄️', category: 'Data & Databases', color: 'amber',
       pills: ['Oracle 19c / 11g', 'Oracle EBS R12', 'SQL*Loader', 'Snowflake', 'dbt'] },
  { icon: '🛠️', category: 'Tools & DevOps', color: 'blue',
       pills: ['GIT', 'Streamlit', 'Docker', 'SQL Developer', 'ServiceNow', 'Linux / Unix'] },
  { icon: '📋', category: 'Methodologies', color: 'cyan',
       pills: ['Agile / Scrum', 'Kanban', 'SDLC', 'REST API Design', 'ETL Pipelines', 'Agentic AI Design'] },
  ]

const pillStyles: Record<PillColor, string> = {
    blue:  'text-[#4A8BF4] bg-[rgba(74,139,244,0.08)] border-[rgba(74,139,244,0.25)]',
    cyan:  'text-[#00CFDA] bg-[rgba(0,207,218,0.08)] border-[rgba(0,207,218,0.25)]',
    amber: 'text-[#F5A623] bg-[rgba(245,166,35,0.08)] border-[rgba(245,166,35,0.25)]',
    green: 'text-[#22C87A] bg-[rgba(34,200,122,0.08)] border-[rgba(34,200,122,0.25)]',
}

const iconBg: Record<PillColor, string> = {
    blue:  'bg-[rgba(74,139,244,0.12)]',
    cyan:  'bg-[rgba(0,207,218,0.12)]',
    amber: 'bg-[rgba(245,166,35,0.12)]',
    green: 'bg-[rgba(34,200,122,0.12)]',
}

export default function Skills() {
    return (
          <section id="skills" className="py-24 px-6 md:px-16 lg:px-24 bg-[#060C1A]">
                <div className="max-w-6xl mx-auto">
                
                        <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true, margin: '-80px' }}
                                    transition={{ duration: .5 }}
                                    className="font-mono text-xs text-[#00CFDA] tracking-widest mb-2">// technical skills</motion.p>motion.p>
                
                        <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-80px' }}
                                    transition={{ duration: .5, delay: .1 }}
                                    className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-12">
                                  Tech <span className="text-[#4A8BF4]">Stack</span>span>
                        </motion.h2>motion.h2>
                
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {skillData.map((card, i) => (
                        <motion.div key={card.category}
                                        initial={{ opacity: 0, y: 24 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: '-80px' }}
                                        transition={{ duration: .5, delay: .15 + i * 0.07 }}
                                        className="bg-[#0F1C34] border border-[rgba(74,139,244,0.15)] rounded-2xl p-6
                                                          hover:border-[rgba(74,139,244,0.3)] hover:-translate-y-1 transition-all duration-200">
                                      <div className="flex items-center gap-3 mb-5">
                                                      <div className={`w-9 h-9 rounded-lg ${iconBg[card.color]} flex items-center justify-center text-base`}>
                                                        {card.icon}
                                                      </div>div>
                                                      <span className="font-medium text-sm text-[#E8EDF8]">{card.category}</span>span>
                                      </div>div>
                                      <div className="flex flex-wrap gap-2">
                                        {card.pills.map(p => (
                                                            <span key={p} className={`font-mono text-xs px-2.5 py-1 rounded-full border ${pillStyles[card.color]}`}>
                                                              {p}
                                                            </span>span>
                                                          ))}
                                      </div>div>
                        </motion.div>motion.div>
                      ))}
                        </div>div>
                </div>div>
          </section>section>
        )
}</section>

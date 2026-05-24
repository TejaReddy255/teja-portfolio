'use client'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, GitBranch, Link2 } from 'lucide-react'

const vp = { once: true, margin: '-80px' } as const

export function Contact() {
    return (
          <section id="contact" className="py-24 px-6 md:px-16 lg:px-24 bg-[#0D1528] text-center">
                <div className="max-w-xl mx-auto">
                
                        <motion.p
                                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
                                    transition={{ duration: .5 }}
                                    className="font-mono text-xs text-[#00CFDA] tracking-widest mb-2">// contact</motion.p>motion.p>
                
                        <motion.h2
                                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
                                    transition={{ duration: .5, delay: .1 }}
                                    className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4">
                                  Let's <span className="text-[#4A8BF4]">Connect</span>span>
                        </motion.h2>motion.h2>
                
                        <motion.p
                                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
                                    transition={{ duration: .5, delay: .2 }}
                                    className="text-[#7A8BAD] font-light mb-10">
                                  Open to Gen AI / ML Engineering roles. Let's build something great together.
                        </motion.p>motion.p>
                
                        <motion.div
                                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
                                    transition={{ duration: .5, delay: .3 }}
                                    className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                                  <a href="mailto:sivasaitejaannem@gmail.com"
                                                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-mono text-sm
                                      text-[#4A8BF4] bg-[rgba(74,139,244,0.08)] border border-[rgba(74,139,244,0.3)]
                                      hover:bg-[rgba(74,139,244,0.15)] transition-all">
                                              <Mail size={15}/> sivasaitejaannem@gmail.com
                                  </a>a>
                                  <a href="tel:+919989643268"
                                                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-mono text-sm
                                      text-[#00CFDA] bg-[rgba(0,207,218,0.08)] border border-[rgba(0,207,218,0.3)]
                                      hover:bg-[rgba(0,207,218,0.15)] transition-all">
                                              <Phone size={15}/> +91 9989 643 268
                                  </a>a>
                        </motion.div>motion.div>
                
                        <motion.div
                                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
                                    transition={{ duration: .5, delay: .4 }}
                                    className="inline-flex items-center gap-2 font-mono text-sm text-[#7A8BAD]
                            border border-[rgba(74,139,244,0.15)] px-4 py-2 rounded-full">
                                  <MapPin size={14}/> Hyderabad, India
                        </motion.div>motion.div>
                
                  {/* Social links */}
                        <motion.div
                                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
                                    transition={{ duration: .5, delay: .5 }}
                                    className="flex justify-center gap-4 mt-8">
                                  <a href="https://github.com/TejaReddy255" target="_blank" rel="noreferrer"
                                                className="w-10 h-10 rounded-xl bg-[#0F1C34] border border-[rgba(74,139,244,0.15)]
                                      flex items-center justify-center text-[#7A8BAD] hover:text-[#4A8BF4]
                                      hover:border-[rgba(74,139,244,0.3)] transition-all">
                                              <GitBranch size={18}/>
                                  </a>a>
                                  <a href="https://linkedin.com/in/annem-siva-sai-teja-reddy" target="_blank" rel="noreferrer"
                                                className="w-10 h-10 rounded-xl bg-[#0F1C34] border border-[rgba(74,139,244,0.15)]
                                      flex items-center justify-center text-[#7A8BAD] hover:text-[#4A8BF4]
                                      hover:border-[rgba(74,139,244,0.3)] transition-all">
                                              <Link2 size={18}/>
                                  </a>a>
                        </motion.div>motion.div>
                </div>div>
          </section>section>
        )
}

export function Footer() {
    return (
          <footer className="bg-[#060C1A] border-t border-[rgba(74,139,244,0.1)] px-6 md:px-16 lg:px-24 py-6
                  flex flex-wrap justify-between items-center gap-3">
                <p className="font-mono text-xs text-[#7A8BAD]">© 2026 Annem Siva Sai Teja Reddy</p>p>
                <p className="font-mono text-xs text-[#4A8BF4]">Gen AI Developer · Hyderabad</p>p>
          </footer>footer>
        )
}</section>

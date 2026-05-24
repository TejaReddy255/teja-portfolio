'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'about',      href: '#about' },
  { label: 'skills',     href: '#skills' },
  { label: 'experience', href: '#experience' },
  { label: 'projects',   href: '#projects' },
  { label: 'contact',    href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4 flex justify-between items-center
      ${scrolled ? 'backdrop-blur-xl bg-[#060C1A]/80 border-b border-[rgba(74,139,244,0.15)]' : ''}`}>

      <a href="#" className="font-display font-extrabold text-lg text-[#4A8BF4]">
        teja<span className="text-[#00CFDA]">.dev</span>
      </a>

      {/* Desktop */}
      <ul className="hidden md:flex gap-8">
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href}
               className="font-mono text-sm text-[#7A8BAD] hover:text-[#00CFDA] transition-colors">
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a href="mailto:sivasaitejaannem@gmail.com"
         className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg
                    border border-[rgba(74,139,244,0.3)] text-[#4A8BF4] hover:bg-[rgba(74,139,244,0.1)] transition-all">
        Hire Me →
      </a>

      {/* Mobile toggle */}
      <button className="md:hidden text-[#7A8BAD]" onClick={() => setOpen(!open)}>
        {open ? <X size={22}/> : <Menu size={22}/>}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-[#0D1528] border-b border-[rgba(74,139,244,0.15)] py-4 px-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}
                   className="font-mono text-sm text-[#7A8BAD] hover:text-[#00CFDA] transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

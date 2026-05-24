import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Annem Siva Sai Teja Reddy | Gen AI Developer',
  description: 'Generative AI Developer building RAG systems, agentic AI pipelines and LLM-powered applications. Based in Hyderabad, India.',
  keywords: ['Gen AI Developer', 'RAG', 'LangGraph', 'FAISS', 'Python', 'LLM', 'Hyderabad'],
  openGraph: {
    title: 'Annem Siva Sai Teja Reddy | Gen AI Developer',
    description: 'Building production-grade Gen AI systems — RAG pipelines, agentic orchestration & LLM apps.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}

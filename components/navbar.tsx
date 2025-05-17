"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("term1")
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      const sections = ["term1", "term2", "term3", "term4"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto max-w-5xl px-4">
        <div className="flex justify-between items-center">
          {}
          <Link href="/" className="flex items-center group">
            <div className="bg-emerald-600 text-white p-2 rounded-lg transform group-hover:rotate-3 transition-all duration-300">
              <span className="font-bold">Economics</span>
            </div>
            <span className={`ml-2 text-xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors`}>
              NIS
            </span>
          </Link>

          {}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { id: "term1", label: "Term I" },
              { id: "term2", label: "Term II" },
              { id: "term3", label: "Term III" },
              { id: "term4", label: "Term IV" },
            ].map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-4 py-2 rounded-md text-slate-700 hover:text-emerald-600 transition-colors ${
                  activeSection === item.id ? "font-medium" : ""
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-emerald-500 rounded-full"></span>
                )}
              </Link>
            ))}
            <Link
              href="/materials"
              className={`relative px-4 py-2 rounded-md text-slate-700 hover:text-emerald-600 transition-colors ${
                pathname === "/materials" ? "font-medium text-emerald-600" : ""
              }`}
            >
              Materials
              {pathname === "/materials" && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-emerald-500 rounded-full"></span>
              )}
            </Link>
          </div>

          {}
          <button
            className="md:hidden text-slate-700 focus:outline-none bg-slate-100 hover:bg-slate-200 p-2 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg animate-in slide-in-from-top">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            {[
              { id: "term1", label: "Term I" },
              { id: "term2", label: "Term II" },
              { id: "term3", label: "Term III" },
              { id: "term4", label: "Term IV" },
            ].map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`text-slate-700 hover:text-emerald-600 transition-colors py-3 border-b border-slate-100 ${
                  activeSection === item.id ? "text-emerald-600 font-medium" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/materials"
              className={`text-slate-700 hover:text-emerald-600 transition-colors py-3 border-b border-slate-100 ${
                pathname === "/materials" ? "text-emerald-600 font-medium" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Materials
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

import type React from "react"
import { BookOpen } from "lucide-react"
import Link from "next/link"

interface MaterialBlockProps {
  id: string
  termNumber: number
  title: string
  icon: React.ReactNode
  pres: string
  content: {
    units: {
      title: string
      themes: string[]
      objectives: string[]
    }[]
  }
}

export default function MaterialBlock({ id, termNumber, title, icon, pres, content }: MaterialBlockProps) {
  return (
    <section id={id} className="mb-16 scroll-mt-20">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex items-center">
              <div className="bg-white/20 p-3 rounded-lg mr-4">{icon}</div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-1">Term {termNumber}</h2>
                <h3 className="text-lg md:text-xl">{title}</h3>
              </div>
            </div>
                <a
                href={pres}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 md:mt-0 inline-flex items-center gap-2 bg-white text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-lg transition-all duration-300 font-medium"
                >
                <BookOpen className="h-4 w-4" />
                Presentations & Materials
                </a>
          </div>
        </div>

        {}
        <div className="p-6">
          {content.units.map((unit, unitIndex) => (
            <div key={unitIndex} className="mb-8 last:mb-0">
              <h4 className="text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">{unit.title}</h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-emerald-700 mb-2">Themes:</h5>
                  <ul className="list-disc list-inside text-slate-700 space-y-1">
                    {unit.themes.map((theme, themeIndex) => (
                      <li key={themeIndex} className="text-sm">
                        {theme}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-medium text-emerald-700 mb-2">Learning Objectives:</h5>
                  <ul className="list-disc list-inside text-slate-700 space-y-1">
                    {unit.objectives.map((objective, objectiveIndex) => (
                      <li key={objectiveIndex} className="text-sm">
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { ChevronDown, Clock, Calendar } from "lucide-react"

type TopicPoint = string

interface Topic {
  title: string
  hours: number
  dates: string
  points?: TopicPoint[]
  isAssessment?: boolean
  isProject?: boolean
}

interface Unit {
  title: string
  topics: Topic[]
}

interface TermBlockProps {
  id: string
  termNumber: number
  title: string
  hours: number
  units: Unit[]
}

export default function TermBlock({ id, termNumber, title, hours, units }: TermBlockProps) {
  const [expandedUnits, setExpandedUnits] = useState<Record<string, boolean>>({})

  const toggleUnit = (unitTitle: string) => {
    setExpandedUnits((prev) => ({
      ...prev,
      [unitTitle]: !prev[unitTitle],
    }))
  }

  return (
    <section id={id} className="mb-16 scroll-mt-20">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Term {termNumber}</h2>
              <h3 className="text-lg md:text-xl">{title}</h3>
            </div>
            <div className="flex items-center mt-4 md:mt-0 bg-white/20 rounded-lg px-4 py-2">
              <Clock className="h-5 w-5 mr-2" />
              <span className="font-medium">{hours} hours</span>
            </div>
          </div>
        </div>

        {}
        <div className="p-6">
          {units.map((unit, unitIndex) => (
            <div key={unitIndex} className="mb-6 last:mb-0">
              <button
                className="w-full flex items-center justify-between bg-slate-100 hover:bg-slate-200 rounded-lg p-4 transition-colors"
                onClick={() => toggleUnit(unit.title)}
              >
                <h4 className="text-lg font-medium text-left">{unit.title}</h4>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${expandedUnits[unit.title] ? "rotate-180" : ""}`}
                />
              </button>

              {expandedUnits[unit.title] && (
                <div className="mt-4 pl-4 border-l-2 border-emerald-200">
                  {unit.topics.map((topic, topicIndex) => (
                    <div
                      key={topicIndex}
                      className={`mb-6 last:mb-0 ${
                        topic.isAssessment
                          ? "bg-amber-50 p-4 rounded-lg"
                          : topic.isProject
                            ? "bg-blue-50 p-4 rounded-lg"
                            : ""
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <h5
                          className={`font-medium ${
                            topic.isAssessment ? "text-amber-700" : topic.isProject ? "text-blue-700" : "text-slate-800"
                          }`}
                        >
                          {topic.title}
                        </h5>
                        <div className="flex items-center mt-2 sm:mt-0 space-x-4">
                          <div className="flex items-center text-sm text-slate-500">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{topic.hours} h</span>
                          </div>
                          <div className="flex items-center text-sm text-slate-500">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{topic.dates}</span>
                          </div>
                        </div>
                      </div>

                      {topic.points && topic.points.length > 0 && (
                        <ul className="list-disc list-inside text-slate-700 space-y-1 mt-2">
                          {topic.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="text-sm">
                              {point}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

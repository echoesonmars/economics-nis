import { ArrowDown } from "lucide-react"
import Link from "next/link"
import TermBlock from "@/components/term-block"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {}
      <Navbar />

      {}
      <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="md:w-7/12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 leading-tight">
                Learning <span className="text-emerald-600">Curriculum</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                A comprehensive guide to 11th grade economics, covering fundamental concepts, market dynamics,
                entrepreneurship, and business planning.
              </p>
              <div className="mt-8">
                <Link
                  href="#term1"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Explore 
                  <ArrowDown className="h-4 w-4" />
                </Link>
                
              </div>
            </div>

            {}
            <div className="mt-10 md:mt-0 md:w-4/12 bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-slate-100 p-4 flex justify-center">
                <div className="w-32 h-32 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center">
                  <img
                    src="/agay.png"
                    alt="Yerlan Yeskendirov"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-slate-800">Yerlan Yeskendirov</h3>
                <p className="text-emerald-600 font-medium">Economics Teacher</p>
                <div className="mt-3 flex justify-center space-x-3">
                  <span className="inline-flex items-center text-sm text-slate-500">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    NIS PHMD Shymkent
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {}
        <div className="absolute -bottom-6 left-0 right-0 flex justify-center">
          <div className="w-24 h-3 bg-emerald-500 rounded-full opacity-50"></div>
        </div>
      </section>

      {}
      <div className="container mx-auto max-w-5xl px-4 pb-20">
        <TermBlock
          id="term1"
          termNumber={1}
          title="Introduction to Economics & Supply and Demand"
          hours={21}
          units={[
            {
              title: "Unit 1.1A – Introduction to Economics",
              topics: [
                {
                  title: "Economics in Human Life",
                  hours: 3,
                  dates: "Sept 1–7",
                  points: [
                    "Describe the subject, objectives and goals of economics",
                    "Understand economics' role in everyday life",
                    "Identify participants in economic activity",
                  ],
                },
                {
                  title: "Limitation of Resources & Endless Needs",
                  hours: 3,
                  dates: "Sept 9–14",
                  points: [
                    "Explain choice under scarce resources and unlimited wants",
                    "Distinguish the four factors of production and their incomes",
                    "Define opportunity (alternative) cost",
                  ],
                },
                {
                  title: "Production Possibility Frontier (PPF)",
                  hours: 3,
                  dates: "Sept 16–21",
                  points: ["Draw and interpret the PPF curve", "Explain trade-offs and efficiency"],
                },
                {
                  title: "Summative Assessment",
                  hours: 3,
                  dates: "Sept 23–28",
                  isAssessment: true,
                },
              ],
            },
            {
              title: "Unit 1.1B – Supply & Demand",
              topics: [
                {
                  title: "Supply and Demand",
                  hours: 3,
                  dates: "Sept 30–Oct 5",
                  points: [
                    "Define and explain laws of supply and demand",
                    "Analyze shifts in demand and supply",
                    "Identify equilibrium point; calculate equilibrium price & quantity",
                  ],
                },
                {
                  title: "Elasticity of Supply & Demand",
                  hours: 3,
                  dates: "Oct 7–12",
                  points: [
                    "Understand types of demand elasticity",
                    "Understand types of supply elasticity",
                    "Explain why elasticity matters in real markets",
                  ],
                },
                {
                  title: "Summative Assessment",
                  hours: 3,
                  dates: "Oct 14–19",
                  isAssessment: true,
                },
              ],
            },
          ]}
        />

        <TermBlock
          id="term2"
          termNumber={2}
          title="Production Activity & Competitive Markets"
          hours={21}
          units={[
            {
              title: "Unit 1.2A – Production Activity of Firms",
              topics: [
                {
                  title: "Production Activity of Business Entities",
                  hours: 6,
                  dates: "Oct 28–Nov 9",
                  points: [
                    "Distinguish legal forms of business",
                    "Differentiate explicit vs. implicit; fixed vs. variable costs",
                    "Calculate costs, revenues and profit",
                    "Understand diminishing marginal returns",
                  ],
                },
                {
                  title: "Summative Assessment",
                  hours: 3,
                  dates: "Nov 11–16",
                  isAssessment: true,
                },
              ],
            },
            {
              title: "Unit 1.2B – Competitive Markets",
              topics: [
                {
                  title: "Competitive Markets",
                  hours: 6,
                  dates: "Nov 18–30",
                  points: [
                    "Compare market structures (perfect competition, monopoly, etc.)",
                    "Evaluate antitrust and competition policy",
                  ],
                },
                {
                  title: "State Regulation of Monopolies",
                  hours: 3,
                  dates: "Dec 2–7",
                  points: ["Assess the impact of government intervention"],
                },
                {
                  title: "Summative Assessment",
                  hours: 3,
                  dates: "Dec 9–14",
                  isAssessment: true,
                },
                {
                  title: "Term II Project",
                  hours: 3,
                  dates: "Dec 16–21",
                  isProject: true,
                },
              ],
            },
          ]}
        />

        <TermBlock
          id="term3"
          termNumber={3}
          title="Introduction to Entrepreneurship & Business Planning"
          hours={33}
          units={[
            {
              title: "Unit 1.3A – Introduction to Entrepreneurship",
              topics: [
                {
                  title: "Entrepreneurship as an Economic Phenomenon",
                  hours: 6,
                  dates: "Jan 9–18",
                  points: [
                    "Define entrepreneurship, its types and societal role",
                    "View entrepreneurship as self-realization and motivation",
                    "Apply a basic business-model canvas to own idea",
                    "Analyze global and national entrepreneurship trends",
                  ],
                },
                {
                  title: "Generation of Ideas",
                  hours: 3,
                  dates: "Jan 20–25",
                  points: [
                    "Use ideation tools (e.g., brainstorming, SCAMPER)",
                    "Formulate mission, vision and goals",
                    "Describe product features",
                  ],
                },
                {
                  title: "Summative Assessment",
                  hours: 3,
                  dates: "Jan 27–Feb 1",
                  isAssessment: true,
                },
              ],
            },
            {
              title: "Unit 1.3B – Business Planning & Organization",
              topics: [
                {
                  title: "Marketing Strategy Development",
                  hours: 6,
                  dates: "Feb 3–15",
                  points: [
                    "Grasp marketing's role in idea validation",
                    "Analyze competitors and market segments",
                    "Craft a go-to-market plan",
                  ],
                },
                {
                  title: "Production Planning",
                  hours: 6,
                  dates: "Feb 17–29",
                  points: [
                    "Map production processes",
                    "Build production and organizational plans",
                    "Estimate product costs and set prices",
                  ],
                },
                {
                  title: "Summative Assessment",
                  hours: 3,
                  dates: "Mar 2–7",
                  isAssessment: true,
                },
                {
                  title: "Term III Project",
                  hours: 6,
                  dates: "Mar 9–18",
                  isProject: true,
                },
              ],
            },
          ]}
        />

        <TermBlock
          id="term4"
          termNumber={4}
          title="Legal & Financial Aspects and Enterprise Development"
          hours={27}
          units={[
            {
              title: "Unit 1.4A – Legal & Financial Aspects",
              topics: [
                {
                  title: "Legal & Financial Fundamentals",
                  hours: 9,
                  dates: "Mar 25–Apr 11",
                  points: [
                    "Identify funding sources and registration steps",
                    "Outline major tax regimes",
                    "Forecast cash flows; evaluate profitability & payback",
                  ],
                },
              ],
            },
            {
              title: "Unit 1.4B – Enterprise Development",
              topics: [
                {
                  title: "Scaling & Sustainability",
                  hours: 9,
                  dates: "Apr 13–May 2",
                  points: [
                    "Spot key market trends and scaling options",
                    "Analyze risk management strategies",
                    "Embrace ethics and social responsibility",
                  ],
                },
                {
                  title: "Summative Assessment",
                  hours: 3,
                  dates: "May 4–9",
                  isAssessment: true,
                },
                {
                  title: "Term IV Capstone Project",
                  hours: 6,
                  dates: "May 11–25",
                  isProject: true,
                },
              ],
            },
          ]}
        />
      </div>

      {}
      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Economics Curriculum</h2>
              <p className="text-slate-300">11th Grade - Academic Year 2024-2025</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <Link href="#term1" className="text-slate-300 hover:text-emerald-400 transition-colors">
                Term I
              </Link>
              <Link href="#term2" className="text-slate-300 hover:text-emerald-400 transition-colors">
                Term II
              </Link>
              <Link href="#term3" className="text-slate-300 hover:text-emerald-400 transition-colors">
                Term III
              </Link>
              <Link href="#term4" className="text-slate-300 hover:text-emerald-400 transition-colors">
                Term IV
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

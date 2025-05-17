import { BookOpen, TrendingUp, Rocket, Briefcase } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import MaterialBlock from "@/components/material-block"

export default function Materials() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {}
      <Navbar />

      {}
      <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 leading-tight">
              Course <span className="text-emerald-600">Materials</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Access all learning materials, presentations, and resources for the 11th grade economics curriculum.
            </p>
          </div>
        </div>

        {}
        <div className="absolute -bottom-6 left-0 right-0 flex justify-center">
          <div className="w-24 h-3 bg-emerald-500 rounded-full opacity-50"></div>
        </div>
      </section>

      {}
      <div className="container mx-auto max-w-5xl px-4 pb-20">
        <MaterialBlock
          id="term1"
          termNumber={1}
          title="Introduction to Economics & Markets"
          icon={<BookOpen className="h-6 w-6 text-white" />}
          pres="https://drive.google.com/drive/folders/1utGMCKsJVs3AEZz3ve2GR_qmv3OM_lrO"
          content={{
            units: [
              {
                title: "Unit 11.1A – Introduction to Economics",
                themes: [
                  "Economics in human life",
                  "Limitation of resources and endless needs",
                  "Production possibility frontier",
                ],
                objectives: [
                  "Understand the purpose and role of economics in daily life",
                  "Identify participants in economic activity",
                  "Explain scarcity, unlimited wants, and opportunity cost",
                  "Distinguish four factors of production and their income types",
                  "Draw and interpret the production possibility frontier (PPF)",
                ],
              },
              {
                title: "Unit 11.1B – Supply and Demand",
                themes: ["Supply and demand", "Elasticity of supply and demand"],
                objectives: [
                  "Define and explain the laws of demand and supply",
                  "Analyze factors affecting demand and supply",
                  "Understand market equilibrium and calculate equilibrium price/quantity",
                  "Understand demand and supply elasticity, their types, and practical application",
                ],
              },
            ],
          }}
        />

        <MaterialBlock
          id="term2"
          termNumber={2}
          title="Firms and Market Structures"
          icon={<TrendingUp className="h-6 w-6 text-white" />}
          pres="https://drive.google.com/drive/folders/1SVNaWMYaletktUNjFXl0k1NTf4Av6Lpu"
          content={{
            units: [
              {
                title: "Unit 11.2A – Business Production Activity",
                themes: ["Production activity of business entities and firms"],
                objectives: [
                  "Identify legal forms of business entities",
                  "Distinguish between explicit/implicit and fixed/variable costs",
                  "Calculate cost, revenue, and profit",
                  "Understand diminishing returns in production",
                ],
              },
              {
                title: "Unit 11.2B – Competitive Markets",
                themes: ["Competitive markets", "State regulation of monopolies"],
                objectives: [
                  "Recognize types of market competition",
                  "Assess the effectiveness of antimonopoly policy",
                  "Understand government intervention in monopoly regulation",
                ],
              },
            ],
          }}
        />

        <MaterialBlock
          id="term3"
          termNumber={3}
          title="Entrepreneurship & Business Planning"
          icon={<Rocket className="h-6 w-6 text-white" />}
          pres="https://drive.google.com/drive/folders/13r13ZsFRTZ4ozLFd0LL7mQU_6ptLTUTi"
          content={{
            units: [
              {
                title: "Unit 11.3A – Introduction to Entrepreneurship",
                themes: ["Entrepreneurship as an economic phenomenon", "Generation of ideas"],
                objectives: [
                  "Understand the nature, types, and purpose of entrepreneurship",
                  "View entrepreneurship as self-realization and motivation",
                  "Use a business model canvas for an entrepreneurial idea",
                  "Analyze national and global entrepreneurship trends",
                  "Generate ideas, define mission/goals, and describe a product",
                ],
              },
              {
                title: "Unit 11.3B – Business Planning and Organization",
                themes: ["Development of marketing strategy", "Production planning"],
                objectives: [
                  "Understand the role of marketing in business development",
                  "Analyze competitive environment and market segmentation",
                  "Develop a product implementation strategy",
                  "Describe the technological process of production",
                  "Create production and organizational plans",
                  "Calculate product costs and understand pricing",
                ],
              },
            ],
          }}
        />

        <MaterialBlock
          id="term4"
          termNumber={4}
          title="Finance, Law, and Enterprise Growth"
          icon={<Briefcase className="h-6 w-6 text-white" />}
          pres="https://drive.google.com/drive/folders/1YSNOoLMEZExp0PDaNnTqkRZkcyZHaglj"
          content={{
            units: [
              {
                title: "Unit 11.4A – Legal and Financial Aspects",
                themes: ["Legal and financial aspects of business"],
                objectives: [
                  "Know sources of business funding",
                  "Understand the enterprise registration process",
                  "Describe tax regimes",
                  "Analyze financial results and forecast cash flow",
                  "Evaluate profitability and payback period",
                ],
              },
              {
                title: "Unit 11.4B – Enterprise Development",
                themes: ["Development of an enterprise"],
                objectives: [
                  "Understand market trends and business scaling strategies",
                  "Assess efficiency of scaling methods",
                  "Identify and manage business risks",
                  "Emphasize business ethics and social responsibility",
                ],
              },
            ],
          }}
        />
      </div>

      {}
      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Economics Curriculum</h2>
              <p className="text-slate-300">Academic Year 2024-2025</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <Link href="/#term1" className="text-slate-300 hover:text-emerald-400 transition-colors">
                Term I
              </Link>
              <Link href="/#term2" className="text-slate-300 hover:text-emerald-400 transition-colors">
                Term II
              </Link>
              <Link href="/#term3" className="text-slate-300 hover:text-emerald-400 transition-colors">
                Term III
              </Link>
              <Link href="/#term4" className="text-slate-300 hover:text-emerald-400 transition-colors">
                Term IV
              </Link>
              <Link href="/materials" className="text-slate-300 hover:text-emerald-400 transition-colors">
                Materials
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

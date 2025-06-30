import { useState, useEffect } from "react"
import { Navbar } from "../Navbar"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Code,
  Database,
  Cloud,
  BarChart3,
  Cpu,
  Sparkles,
  Star,
  TrendingUp,
  Zap,
  Target,
  Award,
} from "lucide-react"

const skillCategories = {
  "Data Science": {
    icon: <Database className="h-6 w-6" />,
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Python", level: 95, years: 5 },
      { name: "R", level: 85, years: 4 },
      { name: "Pandas", level: 90, years: 5 },
      { name: "NumPy", level: 90, years: 5 },
      { name: "Scikit-learn", level: 88, years: 4 },
      { name: "Jupyter", level: 92, years: 5 },
    ],
  },
  "Machine Learning": {
    icon: <Brain className="h-6 w-6" />,
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "TensorFlow", level: 90, years: 4 },
      { name: "PyTorch", level: 85, years: 3 },
      { name: "Keras", level: 88, years: 4 },
      { name: "XGBoost", level: 82, years: 3 },
      { name: "Random Forest", level: 85, years: 4 },
      { name: "Neural Networks", level: 87, years: 4 },
    ],
  },
  "AI & Deep Learning": {
    icon: <Cpu className="h-6 w-6" />,
    gradient: "from-green-500 to-emerald-500",
    skills: [
      { name: "Computer Vision", level: 85, years: 3 },
      { name: "NLP", level: 90, years: 4 },
      { name: "Transformers", level: 88, years: 3 },
      { name: "GANs", level: 75, years: 2 },
      { name: "Reinforcement Learning", level: 70, years: 2 },
      { name: "LLMs", level: 85, years: 2 },
    ],
  },
  "Software Development": {
    icon: <Code className="h-6 w-6" />,
    gradient: "from-orange-500 to-red-500",
    skills: [
      { name: "JavaScript", level: 88, years: 4 },
      { name: "TypeScript", level: 85, years: 3 },
      { name: "React", level: 90, years: 4 },
      { name: "Node.js", level: 82, years: 3 },
      { name: "Python", level: 95, years: 5 },
      { name: "SQL", level: 85, years: 4 },
    ],
  },
  "Data Analytics": {
    icon: <BarChart3 className="h-6 w-6" />,
    gradient: "from-yellow-500 to-orange-500",
    skills: [
      { name: "Tableau", level: 85, years: 3 },
      { name: "Power BI", level: 80, years: 3 },
      { name: "D3.js", level: 75, years: 2 },
      { name: "Plotly", level: 82, years: 3 },
      { name: "Statistical Analysis", level: 90, years: 5 },
      { name: "A/B Testing", level: 85, years: 4 },
    ],
  },
  "Cloud & Tools": {
    icon: <Cloud className="h-6 w-6" />,
    gradient: "from-indigo-500 to-purple-500",
    skills: [
      { name: "AWS", level: 85, years: 3 },
      { name: "GCP", level: 80, years: 2 },
      { name: "Docker", level: 82, years: 3 },
      { name: "Git", level: 90, years: 5 },
      { name: "MLflow", level: 78, years: 2 },
      { name: "Apache Spark", level: 75, years: 2 },
    ],
  },
}

const stats = [
  { number: "50+", label: "Technologies", icon: <Target className="w-5 h-5" /> },
  { number: "5+", label: "Years Experience", icon: <TrendingUp className="w-5 h-5" /> },
  { number: "15+", label: "Frameworks", icon: <Code className="w-5 h-5" /> },
  { number: "10+", label: "Certifications", icon: <Award className="w-5 h-5" /> },
]

const getSkillLevel = (level) => {
  if (level >= 90) return { label: "Expert", color: "text-green-400", bg: "bg-green-500/20" }
  if (level >= 80) return { label: "Advanced", color: "text-blue-400", bg: "bg-blue-500/20" }
  if (level >= 70) return { label: "Intermediate", color: "text-yellow-400", bg: "bg-yellow-500/20" }
  return { label: "Beginner", color: "text-gray-400", bg: "bg-gray-500/20" }
}

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [hoveredSkill, setHoveredSkill] = useState(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <Navbar />
      <section id="skills" className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-float-slow" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <Badge className="mb-6 bg-green-500/20 text-green-400 border-green-500/30 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Technical Expertise
            </Badge>

            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent">
                Technical
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              A comprehensive toolkit spanning <span className="text-blue-400 font-semibold">data science</span>,{" "}
              <span className="text-purple-400 font-semibold">machine learning</span>, and{" "}
              <span className="text-green-400 font-semibold">software development</span>
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-green-400 mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillCategories).map(([category, data], index) => (
              <Card
                key={category}
                className="bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl group relative overflow-hidden cursor-pointer"
                onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${data.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg`} />
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${data.gradient}`} />
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`bg-gradient-to-r ${data.gradient} p-4 rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                      <div className="text-white">{data.icon}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{data.skills.length}</div>
                      <div className="text-xs text-gray-400">Skills</div>
                    </div>
                  </div>

                  <CardTitle className="text-2xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-green-400 group-hover:to-blue-400 transition-all duration-300">
                    {category}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {data.skills.slice(0, 4).map((skill) => {
                      const skillInfo = getSkillLevel(skill.level)
                      return (
                        <Badge
                          key={skill.name}
                          variant="outline"
                          className={`text-xs border-white/20 text-gray-300 hover:scale-105 transition-all duration-300 ${skillInfo.bg} ${skillInfo.color} border-0`}
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          {skill.name}
                          {hoveredSkill === skill.name && <span className="ml-1 text-xs">({skill.level}%)</span>}
                        </Badge>
                      )
                    })}
                    {data.skills.length > 4 && (
                      <Badge variant="outline" className="text-xs border-white/20 text-gray-400">
                        +{data.skills.length - 4} more
                      </Badge>
                    )}
                  </div>

                  <div className={`transition-all duration-500 overflow-hidden ${selectedCategory === category ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="space-y-4 pt-4 border-t border-white/10">
                      {data.skills.map((skill) => {
                        const skillInfo = getSkillLevel(skill.level)
                        return (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <span className="text-white font-medium">{skill.name}</span>
                                <Badge className={`text-xs ${skillInfo.bg} ${skillInfo.color} border-0`}>
                                  {skillInfo.label}
                                </Badge>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-400">{skill.years}y</span>
                                <span className="text-sm font-bold text-green-400">{skill.level}%</span>
                              </div>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div
                                className={`bg-gradient-to-r ${data.gradient} h-2 rounded-full transition-all duration-1000 ease-out`}
                                style={{ width: selectedCategory === category ? `${skill.level}%` : "0%" }}
                              />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <button className="text-green-400 text-sm hover:text-green-300 transition-colors duration-300 flex items-center mx-auto">
                      {selectedCategory === category ? "Show Less" : "View Details"}
                      <Zap className="w-3 h-3 ml-1" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-400 mr-2" />
                Continuous Learning
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Technology evolves rapidly, and so do I. I'm constantly learning new tools, frameworks, and methodologies to stay at the forefront of data science and AI innovation.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Currently Learning", "Next.js 14", "LangChain", "Vector Databases", "MLOps"].map((item, index) => (
                  <Badge
                    key={item}
                    className={`${index === 0 ? "bg-green-500/20 text-green-400 border-green-500/30" : "bg-blue-500/20 text-blue-400 border-blue-500/30"}`}
                  >
                    {index === 0 && <TrendingUp className="w-3 h-3 mr-1" />}
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

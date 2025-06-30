import { useState, useEffect } from "react"
import { Navbar } from "../navbar"
import {
  Brain,
  Code,
  BarChart3,
  Award,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Target,
  Zap
} from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { number: "2+", label: "Years Experience", icon: <Award className="w-5 h-5" /> },
    { number: "15+", label: "Projects Completed", icon: <Target className="w-5 h-5" /> },
    { number: "5+", label: "ML Models Deployed", icon: <Brain className="w-5 h-5" /> },
    { number: "25+", label: "Users Impacted", icon: <Users className="w-5 h-5" /> },
  ]

  const expertise = [
    {
      icon: <Brain className="h-12 w-12" />,
      title: "AI & Machine Learning",
      desc: "Expert in developing and deploying ML models, from classical algorithms to cutting-edge deep learning architectures. Specialized in NLP, computer vision, and predictive analytics.",
      gradient: "from-green-600 to-emerald-400",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Transformers"],
      achievements: ["94% Model Accuracy", "10x Faster Processing", "Real-time Inference"],
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: "Software Development",
      desc: "Full-stack developer with expertise in building scalable web applications and APIs for data-driven products. Focus on clean architecture and performance optimization.",
      gradient: "from-blue-600 to-cyan-400",
      skills: ["React", "Node.js", "Python", "Docker","Django","Flask"],
      achievements: ["99.9% Uptime", "Sub-100ms Response", "Microservices"],
    },
    {
      icon: <BarChart3 className="h-12 w-12" />,
      title: "Data Analytics",
      desc: "Skilled in extracting insights from complex datasets and creating compelling visualizations for stakeholders. Transform raw data into actionable business intelligence.",
      gradient: "from-purple-600 to-pink-400",
      skills: ["SQL", "Tableau", "Power BI", "Apache Spark"],
      achievements: ["Real-time Dashboards", "Automated Reports"],
    },
  ]



  return (
    <>
      <Navbar />
      <section id="about" className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-800" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hero Section */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="relative w-32 h-32 mx-auto mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 rounded-full animate-spin-slow" />
              <div className="absolute inset-2 bg-gradient-to-br from-slate-900 to-black rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  BZ
                </span>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-black" />
              </div>
            </div>

            <Badge className="mb-6 bg-green-500/20 text-green-400 border-green-500/30 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Senior Data Scientist & AI Engineer
            </Badge>

            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12">
              I'm a passionate <span className="text-green-400 font-semibold">data scientist</span> with 2+ years of
              experience in <span className="text-blue-400 font-semibold">machine learning</span>,{" "}
              <span className="text-purple-400 font-semibold">AI</span>, and{" "}
              <span className="text-cyan-400 font-semibold">software development</span>. I specialize in building
              end-to-end ML systems that solve real-world problems and drive measurable business value.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
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

          {/* Expertise */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Core Expertise
            </h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {expertise.map((item, index) => (
                <Card
                  key={index}
                  className="bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl group relative overflow-hidden"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg`} />
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient}`} />
                  <CardHeader className="text-center px-6 pt-8">
                    <div className={`bg-gradient-to-r ${item.gradient} p-4 rounded-3xl w-fit mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                      <div className="text-white">{item.icon}</div>
                    </div>
                    <CardTitle className="text-2xl text-white mb-4">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-8">
                    <p className="text-gray-300 leading-relaxed mb-6">{item.desc}</p>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="bg-white/5 border-white/20 text-white">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Achievements</h4>
                      {item.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <Zap className="w-3 h-3 text-green-400" />
                          <span className="text-sm text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                    <div className={`mt-6 flex items-center justify-center space-x-2 text-sm transition-all duration-300 ${hoveredCard === index ? "text-green-400 translate-x-2" : "text-gray-500"}`}>
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Collaborate?</h3>
              <p className="text-gray-300 mb-6">
                Let's work together to turn your data into actionable insights and build intelligent solutions that
                drive real business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  Get In Touch
                </button>
                <button className="border border-white/20 hover:border-white/40 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-white/5">
                  View Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

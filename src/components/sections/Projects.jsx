"use client"

import { useState, useEffect } from "react"
import { Navbar } from "../navbar"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Brain,
  Code,
  BarChart3,
  Database,
  CheckCircle,
  Github,
  Users,
  TrendingUp,
  Star,
  Target,
  Sparkles,
  Eye,
  MessageSquare,
  ExternalLink,
  Calendar,
} from "lucide-react"

const projects = [
  {
    id: 1,
    title: "AI-Powered Customer Analytics Platform",
    description:
      "A comprehensive machine learning platform that analyzes customer behavior patterns and predicts churn with 94% accuracy using ensemble methods.",
    category: "Machine Learning",
    status: "Production",
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "Docker"],
    image: "/public/ai.jpg",
    github: "https://github.com/example/customer-analytics",
    demo: "https://demo.example.com",
    metrics: {
      users: "1.2K+",
      accuracy: "94%",
      performance: "2.3s avg",
    },
    highlights: ["Real-time predictions", "Interactive dashboards", "Automated reporting"],
    date: "2024",
  },
  {
    id: 2,
    title: "Real-time Data Pipeline Architecture",
    description:
      "Scalable data engineering solution processing 10M+ events daily with Apache Kafka, Spark, and cloud infrastructure.",
    category: "Data Engineering",
    status: "Production",
    technologies: ["Apache Kafka", "Spark", "AWS", "Python", "Kubernetes"],
    image: "/placeholder.svg?height=300&width=400",
    github: "",
    demo: "",
    metrics: {
      throughput: "10+ events/day",
      latency: "<100ms",
      uptime: "99.9%",
    },
    highlights: ["Auto-scaling", "Fault tolerance", "Real-time monitoring"],
    date: "2024",
  },
  {
    id: 3,
    title: "Computer Vision Quality Control System",
    description:
      "Deep learning system for automated quality inspection in manufacturing, reducing defect detection time by 85%.",
    category: "Computer Vision",
    status: "Production",
    technologies: ["PyTorch", "OpenCV", "FastAPI", "React", "NVIDIA TensorRT"],
    image: "/placeholder.svg?height=300&width=400",
    github: "",
    demo: "",
    metrics: {
      accuracy: "98.5%",
      speed: "85% faster",
      defects: "99.2% detection",
    },
    highlights: ["Real-time processing", "Edge deployment", "Custom CNN architecture"],
    date: "2024",
  },
  {
    id: 4,
    title: "Natural Language Processing Chatbot",
    description:
      "Intelligent conversational AI system with context awareness and multi-language support, serving 5K+ daily interactions.",
    category: "AI & NLP",
    status: "Production",
    technologies: ["Transformers", "FastAPI", "Redis", "PostgreSQL", "Docker"],
    image: "/placeholder.svg?height=300&width=400",
    github: "https://github.com/example/nlp-chatbot",
    demo: "https://chatbot-demo.example.com",
    metrics: {
      interactions: "5K+ daily",
      satisfaction: "4.8/5",
      languages: "12",
    },
    highlights: ["Context awareness", "Multi-language", "Sentiment analysis"],
    date: "2023",
  },
  {
    id: 5,
    title: "Business Intelligence Dashboard",
    description:
      "Interactive analytics platform providing real-time insights across multiple data sources with advanced visualization capabilities.",
    category: "Data Analytics",
    status: "Production",
    technologies: ["React", "D3.js", "Python", "Apache Airflow", "BigQuery"],
    image: "/placeholder.svg?height=300&width=400",
    github: "https://github.com/example/bi-dashboard",
    demo: "https://bi-demo.example.com",
    metrics: {
      datasources: "15+",
      users: "500+",
      reports: "100+",
    },
    highlights: ["Real-time updates", "Custom visualizations", "Automated insights"],
    date: "2023",
  },
  {
    id: 6,
    title: "Microservices E-commerce Platform",
    description:
      "Scalable e-commerce solution built with microservices architecture, handling 50K+ transactions daily with 99.9% uptime.",
    category: "Software Development",
    status: "Research",
    technologies: ["Node.js", "React", "MongoDB", "Redis", "Kubernetes"],
    image: "/placeholder.svg?height=300&width=400",
    github: "https://github.com/example/ecommerce-platform",
    demo: "https://ecommerce-demo.example.com",
    metrics: {
      transactions: "50K+ daily",
      uptime: "99.9%",
      response: "<200ms",
    },
    highlights: ["Microservices", "Auto-scaling", "Payment integration"],
    date: "2023",
  },
]

const categories = [
  "All",
  "Machine Learning",
  "Software Development",
  "AI & NLP",
  "Data Analytics",
  "Computer Vision",
  "Data Engineering",
]

const stats = [
  { number: "15+", label: "Projects Completed", icon: <Target className="w-5 h-5" /> },
  { number: "5", label: "In Production", icon: <TrendingUp className="w-5 h-5" /> },
  { number: "5+", label: "Technologies Used", icon: <Code className="w-5 h-5" /> },
  { number: "25+", label: "Users Impacted", icon: <Users className="w-5 h-5" /> },
]

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState(null)
  const [hoveredProject, setHoveredProject] = useState(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory,
  )

const getStatusColor = (status) => {
  switch (status) {
    case "Production":
      return "bg-black/50 text-green-400 border-green-500/30"
    case "Research":
      return "bg-black/50 text-blue-400 border-blue-500/30"
    default:
      return "bg-black/50 text-gray-400 border-gray-500/30"
  }
}


  const getCategoryIcon = (category) => {
    switch (category) {
      case "Machine Learning":
        return <Brain className="w-5 h-5" />
      case "Software Development":
        return <Code className="w-5 h-5" />
      case "Data Analytics":
        return <BarChart3 className="w-5 h-5" />
      case "Data Engineering":
        return <Database className="w-5 h-5" />
      case "Computer Vision":
        return <Eye className="w-5 h-5" />
      case "AI & NLP":
        return <MessageSquare className="w-5 h-5" />
      default:
        return <Code className="w-5 h-5" />
    }
  }

  return (
    <>
      <Navbar />
      <section id="projects" className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-800" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="mb-6 bg-purple-500/20 text-purple-400 border-purple-500/30 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Portfolio Showcase
            </Badge>

            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Featured
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              A curated selection of projects showcasing expertise across{" "}
              <span className="text-blue-400 font-semibold">machine learning</span>,{" "}
              <span className="text-green-400 font-semibold">software development</span>, and{" "}
              <span className="text-purple-400 font-semibold">data engineering</span>
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-purple-400 mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                      : "border-white/20 text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className={`group bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:bg-white/10 cursor-pointer overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=300&width=400"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getStatusColor(project.status)} border`}>
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-black/50 text-white border-white/20">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.date}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-purple-400">{getCategoryIcon(project.category)}</div>
                    <Badge variant="outline" className="text-xs border-white/20 text-gray-300">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-2 bg-white/5 rounded-lg">
                        <div className="text-sm font-bold text-white">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-white/20 text-gray-300 bg-white/5">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs border-white/20 text-gray-300 bg-white/5">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1 mb-4">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <Star className="w-3 h-3 text-yellow-400" />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white bg-transparent"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.github, "_blank")
                      }}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.demo, "_blank")
                      }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Interested in Collaboration?</h3>
              <p className="text-gray-300 mb-6">
                I'm always excited to work on challenging projects that push the boundaries of technology and create
                meaningful impact.
              </p>
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Let's Build Something Amazing
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

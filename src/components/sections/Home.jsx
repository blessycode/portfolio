import { Navbar } from "../navbar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Github,
  ChevronDown,
  Sparkles,
  Code,
  Database,
  Brain,
  ArrowRight,
} from "lucide-react"
import { useEffect, useState } from "react"

const achievements = [
  {
    icon: <Database className="w-6 h-6" />,
    title: "15+ Projects",
    desc: "ML & AI Solutions",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: <Github className="w-6 h-6" />,
    title: "Open Source",
    desc: "Active Contributor",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI Research",
    desc: "Published Papers",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Full Stack",
    desc: "End-to-End Solutions",
    color: "from-orange-400 to-red-500",
  },
]

const techStack = ["Python", "R","TensorFlow", "React", "AWS", "Docker","Power BI", "PostgreSQL"]

export const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e)  => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      <Navbar />

      {/* Cursor follower */}
      <div
        className="fixed w-6 h-6 bg-green-400/20 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: "scale(1)",
        }}
      />

      <section className="relative min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-black to-slate-800">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-float-slow" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        <div
          className={`max-w-7xl mx-auto text-center relative z-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Profile Graphic */}
          <div className="relative w-48 h-48 mx-auto mb-12 group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-full animate-spin-slow opacity-75" />
            <div className="absolute inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-green-400 rounded-full animate-reverse-spin opacity-60" />
            <div className="absolute inset-4 bg-gradient-to-br from-slate-900 to-black rounded-full flex items-center justify-center border border-green-400/30">
              <span className="text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                BZ
              </span>
            </div>
            <div className="absolute inset-0 animate-spin-slow">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-2 h-2 bg-gradient-to-r ${
                    achievements[i % 4]?.color || "from-green-400 to-blue-400"
                  } rounded-full`}
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `rotate(${i * 45}deg) translateY(-100px) translateX(-4px)`,
                  }}
                />
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 to-blue-400/0 group-hover:from-green-400/20 group-hover:to-blue-400/20 rounded-full transition-all duration-500" />
          </div>

          {/* Status Badge */}
          <div className="flex justify-center mb-8">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Available for Projects
            </Badge>
          </div>

          {/* Hero Text */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent animate-gradient-x">
              Data Scientist &
            </span>
            <span className="block bg-gradient-to-r from-green-400 via-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
              AI Engineer
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
            Transforming complex data into{" "}
            <span className="text-green-400 font-semibold relative">
              intelligent solutions
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-transparent"></span>
            </span>{" "}
            through cutting-edge{" "}
            <span className="text-blue-400 font-semibold relative">
              machine learning
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></span>
            </span>{" "}
            and{" "}
            <span className="text-purple-400 font-semibold relative">
              full-stack development
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-transparent"></span>
            </span>
            .
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {techStack.map((tech, index) => (
              <Badge
                key={tech}
                variant="outline"
                className="bg-white/5 border-white/20 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 px-4 py-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${achievement.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
                />
                <div
                  className={`text-transparent bg-gradient-to-r ${achievement.color} bg-clip-text mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  {achievement.icon}
                </div>
                <div className="text-xl font-bold text-white mb-2">
                  {achievement.title}
                </div>
                <div className="text-sm text-gray-400">{achievement.desc}</div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <Button
              size="lg"
              className="group relative bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-10 py-6 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <Mail className="mr-3 h-5 w-5" />
              Let's Collaborate
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group relative bg-transparent border-2 border-white/20 hover:border-white/40 text-white px-10 py-6 text-lg font-semibold rounded-2xl backdrop-blur-sm hover:bg-white/5 transition-all duration-300 hover:scale-105"
            >
              <Github className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              View GitHub
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="relative">
            <div className="animate-bounce cursor-pointer group">
              <div className="w-8 h-12 border-2 border-green-400/50 rounded-full mx-auto mb-2 flex justify-center">
                <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse" />
              </div>
              <ChevronDown className="h-6 w-6 mx-auto text-green-400 group-hover:text-green-300 transition-colors duration-300" />
            </div>
            <p className="text-sm text-gray-500 mt-2">Scroll to explore</p>
          </div>
        </div>
      </section>
    </>
  )
}

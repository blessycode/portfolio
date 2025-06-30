import { useState, useEffect } from "react"
import { Navbar } from "../Navbar"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  BookOpen,
  CheckCircle,
  Trophy,
  Award,
  Star,
  Calendar,
  MapPin,
  ExternalLink,
  Sparkles,
  Target,
  Brain,
  Code,
} from "lucide-react"

const education = [
  {
    degree: "Masters !Loading ",
    school: "",
    location: "",
    year: "",
    gpa: "",
    status: "",
    highlights: [
      "",
    ],
    coursework: [""],
    icon: <GraduationCap className="h-8 w-8" />,
    gradient: "from-red-500 to-pink-500",
    achievements: [" "],
  },
  {
    degree: "Bachelor of Science Honors Degree in Data Science and Systems",
    school: "University of Zimbabwe",
    location: "Mount Pleasant, Harare",
    year: "2020-2024",
    status: "Upper Second Class",
    highlights: [
      "Computer Science Honors Program",
      "Data Structures & Algorithms",
      "Software Engineering",
      "Artificial Intelligence and Expert Systems",
      "Dissertation: A Comparative Analysis of Hybrid Data Level Approaches for Imbalanced Datasets With Regularized Machine Learning Techniques",
    ],
    coursework: ["Algorithms", "Database Design and Development","Calculus", "Machine Learning","Software Engineering"],
    icon: <BookOpen className="h-8 w-8" />,
    gradient: "from-blue-500 to-indigo-500",
    achievements: ["14 distinctions"],
  },
]

const certifications = [
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    year: "2023",
    level: "Professional",
    skills: ["TensorFlow", "Deep Learning", "Neural Networks"],
    icon: <Brain className="h-5 w-5" />,
    color: "from-orange-500 to-red-500",
  },
  {
    name: "AWS Certified Machine Learning – Specialty",
    issuer: "Amazon Web Services",
    year: "2022",
    level: "Specialty",
    skills: ["AWS", "MLOps", "Cloud Computing"],
    icon: <Award className="h-5 w-5" />,
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Certified Data Scientist",
    issuer: "DataCamp",
    year: "2021",
    level: "Professional",
    skills: ["Python", "R", "Statistics"],
    icon: <Target className="h-5 w-5" />,
    color: "from-green-500 to-blue-500",
  },
  {
    name: "Google Cloud Professional ML Engineer",
    issuer: "Google Cloud",
    year: "2023",
    level: "Professional",
    skills: ["GCP", "ML Engineering", "AutoML"],
    icon: <Code className="h-5 w-5" />,
    color: "from-blue-500 to-purple-500",
  },
]

const stats = [
  { number: "2.1", label: "Degree Class", icon: <Star className="w-5 h-5" /> },
  { number: "6+", label: "Certifications", icon: <Trophy className="w-5 h-5" /> },
  { number: "0", label: "Research Papers", icon: <BookOpen className="w-5 h-5" /> },
  { number: "0", label: "Academic Awards", icon: <Award className="w-5 h-5" /> },
]


export const Education = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedEdu, setSelectedEdu] = useState(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <Navbar />
      <section id="education" className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-800" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <Badge className="mb-6 bg-blue-500/20 text-blue-400 border-blue-500/30 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Academic Excellence
            </Badge>

            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Education &
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Credentials
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Strong academic foundation from <span className="text-blue-400 font-semibold">top-tier universities</span>{" "}
              combined with <span className="text-purple-400 font-semibold">industry-recognized certifications</span>
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-blue-400 mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Academic Journey
            </h3>

            <div className="grid lg:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl group relative overflow-hidden cursor-pointer"
                  onClick={() => setSelectedEdu(selectedEdu === index ? null : index)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${edu.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg`} />
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${edu.gradient}`} />

                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`bg-gradient-to-r ${edu.gradient} p-4 rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                        <div className="text-white">{edu.icon}</div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-white/10 text-gray-300 border-white/20 mb-2 flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {edu.year}
                        </Badge>
                        <div className="text-sm text-gray-400 flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {edu.location}
                        </div>
                      </div>
                    </div>

                    <CardTitle className="text-2xl text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {edu.degree}
                    </CardTitle>
                    <CardDescription className="text-gray-300 font-semibold text-lg mb-4">{edu.school}</CardDescription>

                    <div className="flex items-center justify-between">
                      <Badge className={`bg-gradient-to-r ${edu.gradient} text-white px-3 py-1`}>{edu.status}</Badge>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-400">{edu.gpa}</div>
                        <div className="text-xs text-gray-400"></div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Highlights</h4>
                      <div className="space-y-2">
                        {edu.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={`transition-all duration-500 overflow-hidden ${selectedEdu === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3">Relevant Coursework</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course) => (
                            <Badge key={course} variant="outline" className="bg-white/5 border-white/20 text-white">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-3">Achievements</h4>
                        <div className="space-y-2">
                          {edu.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 text-center">
                      <button className="text-blue-400 text-sm hover:text-blue-300 transition-colors duration-300 flex items-center mx-auto">
                        {selectedEdu === index ? "Show Less" : "Show More"}
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Professional Certifications
              </h3>
              <p className="text-gray-300">Industry-recognized credentials validating expertise</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-black/60 hover:border-white/20 transition-all duration-300 hover:scale-105 group relative overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cert.color}`} />

                  <div className="flex items-start justify-between mb-4">
                    <div className={`bg-gradient-to-r ${cert.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">{cert.icon}</div>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 text-xs mb-1">
                        {cert.year}
                      </Badge>
                      <div className="text-xs text-gray-400">{cert.level}</div>
                    </div>
                  </div>

                  <h4 className="font-bold text-white text-lg mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {cert.name}
                  </h4>
                  <p className="text-gray-400 mb-4 font-medium">{cert.issuer}</p>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-white/5 border-white/20 text-white text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="absolute top-4 right-4 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-black" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import { useState, useEffect } from "react"
import { Navbar } from "../navbar"
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ArrowUp,
  Heart,
  Code,
  Coffee,
  MapPin,
  Phone,
  Send,
  ExternalLink,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const Footer = () => {
  const [email, setEmail] = useState("")
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/blessycode",
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/blessed-zhou-56b3b029b",
      color: "hover:text-blue-400",
    },

    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/bless13210",
      color: "hover:text-sky-400",
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:blessedzhou@datasciencesolutions.co.zw",
      color: "hover:text-green-400",
    },
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const techStack = [
    "React.js",
    "Tailwind CSS",
    
  ]

  return (
    <>
      <Navbar />
      <footer className="relative bg-gradient-to-br from-slate-950 via-black to-slate-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-400/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
              {/* Brand */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-lg">BZ</span>
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Blessed Zhou
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
                  Transforming data into intelligent solutions through cutting-edge AI and machine learning. Let's build the future together.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3 text-gray-400">
                    <MapPin className="w-4 h-4 text-green-400" />
                    <span>Chinhoyi, Zimbabwe</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Phone className="w-4 h-4 text-green-400" />
                    <span>+263 78 659 1814</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Mail className="w-4 h-4 text-green-400" />
                    <span>blessedzhou@datasciencesolutions.co.zw</span>
                  </div>
                </div>

                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 ${social.color}`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                  <Sparkles className="w-5 h-5 text-green-400 mr-2" />
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                      >
                        <span className="group-hover:translate-x-2 transition-transform duration-300">{link.name}</span>
                        <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                  <Send className="w-5 h-5 text-green-400 mr-2" />
                  Stay Updated
                </h3>
                <p className="text-gray-400 mb-6">
                  Get the latest insights on AI, ML, and data science delivered to your inbox.
                </p>
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-green-400 pr-12"
                      required
                    />
                    <Button
                      type="submit"
                      size="sm"
                      className="absolute right-1 top-1 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-3"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  {isSubscribed && (
                    <p className="text-green-400 text-sm flex items-center">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Thanks for subscribing!
                    </p>
                  )}
                </form>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <h3 className="text-center text-lg font-semibold text-white mb-8 flex items-center justify-center">
                <Code className="w-5 h-5 text-green-400 mr-2" />
                Built With
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {techStack.map((tech) => (
                  <div
                    key={tech}
                    className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-center md:text-left">
                <p className="flex items-center justify-center md:justify-start space-x-2">
                  <span>© {new Date().getFullYear()} Blessed Zhou. Made with</span>
                  <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                  <span>and</span>
                  <Coffee className="w-4 h-4 text-amber-400" />
                </p>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </footer>
    </>
  )
}

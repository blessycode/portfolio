import { useState, useEffect } from "react"
import {
  Menu,
  X,
  Home,
  User,
  Zap,
  GraduationCap,
  FolderOpen,
  Mail,
  ChevronRight
} from "lucide-react"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  const navItems = [
    { name: "About", href: "#about", icon: <User className="w-4 h-4" /> },
    { name: "Education", href: "#education", icon: <GraduationCap className="w-4 h-4" /> },
    { name: "Skills", href: "#skills", icon: <Home className="w-4 h-4" /> },
    { name: "Projects", href: "#projects", icon: <FolderOpen className="w-4 h-4" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="w-4 h-4" /> }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)

      const sections = navItems.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const scrollProgress =
    typeof window !== "undefined"
      ? Math.min(
          (window.scrollY /
            (document.documentElement.scrollHeight - window.innerHeight)) *
            100,
          100
        )
      : 0

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-white/20 shadow-2xl shadow-green-500/5"
            : "bg-black/60 backdrop-blur-md border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center space-x-3 px-3 py-2 rounded-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">BZ</span>
                </div>
                <div className="text-xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Blessed Zhou
                </div>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1)
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`relative px-4 py-2 rounded-full transition-all duration-300 group ${
                      isActive
                        ? "text-white bg-white/10"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span
                        className={`transition-colors duration-300 ${
                          isActive ? "text-green-400" : "group-hover:text-green-400"
                        }`}
                      >
                        {item.icon}
                      </span>
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <div
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/5 to-green-400/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                )
              })}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
                className="relative w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110"
              >
                <div className="relative w-6 h-6">
                  <Menu
                    className={`absolute inset-0 text-white transition-all duration-300 ${
                      isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                    }`}
                  />
                  <X
                    className={`absolute inset-0 text-white transition-all duration-300 ${
                      isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-6 bg-black/95 backdrop-blur-xl border-t border-white/10">
            <div className="space-y-2 pt-4">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1)
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group ${
                      isActive
                        ? "bg-gradient-to-r from-green-500/20 to-blue-500/20 text-white border border-green-500/30"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center space-x-3">
                      <span
                        className={`transition-colors duration-300 ${
                          isActive ? "text-green-400" : "group-hover:text-green-400"
                        }`}
                      >
                        {item.icon}
                      </span>
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-all duration-300 ${
                        isActive
                          ? "text-green-400 translate-x-1"
                          : "text-gray-500 group-hover:text-white group-hover:translate-x-1"
                      }`}
                    />
                  </button>
                )
              })}
            </div>

            {/* Mobile Footer */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="text-center text-sm text-gray-400">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Scroll Progress */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/20 z-40">
        <div
          className="h-full bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </>
  )
}

import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  MapPin,
  Send,
  MessageSquare,
  Calendar,
  Coffee,
  Sparkles,
  CheckCircle,
  Clock,
  Globe,
  Heart,
  Zap,
  Star,
} from "lucide-react";

const contactMethods = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    description: "Drop me a line anytime",
    value: "blessedzhou@datasciencesolutions.co.zw",
    href: "mailto:blessed.zhou@email.com",
    gradient: "from-blue-500 to-cyan-500",
    response: "Usually responds within 24 hours",
  },
  {
    icon: <Linkedin className="h-6 w-6" />,
    title: "LinkedIn",
    description: "Let's connect professionally",
    value: "linkedin.com/in/blessedzhou",
    href: "https://www.linkedin.com/in/blessed-zhou-56b3b029b",
    gradient: "from-blue-600 to-blue-700",
    response: "Active daily",
  },
  {
    icon: <Github className="h-6 w-6" />,
    title: "GitHub",
    description: "Check out my code",
    value: "github.com/blessycode",
    href: "https://github.com/blessycode",
    gradient: "from-gray-600 to-gray-800",
    response: "Updated regularly",
  },
  {
    icon: <Twitter className="h-6 w-6" />,
    title: "Twitter",
    description: "Follow my tech journey",
    value: "@bless13210",
    href: "https://twitter.com/bless13210",
    gradient: "from-sky-400 to-blue-500",
    response: "Daily updates",
  },
];

const availability = [
  { day: "Monday - Friday", available: true },
  { day: "Saturday", available: true },
  { day: "Sunday", available: false },
];

const collaborationTypes = [
  {
    title: "Full-time Opportunities",
    description: "Data Scientist or AI Engineer roles",
    icon: <Star className="h-5 w-5" />,
    color: "text-green-400",
  },
  {
    title: "Consulting Projects",
    description: "ML model development and data strategy",
    icon: <Zap className="h-5 w-5" />,
    color: "text-blue-400",
  },
  {
    title: "Research Collaboration",
    description: "Academic partnerships and publications",
    icon: <MessageSquare className="h-5 w-5" />,
    color: "text-purple-400",
  },
  {
    title: "Speaking Engagements",
    description: "Conferences, workshops, and tech talks",
    icon: <Coffee className="h-5 w-5" />,
    color: "text-orange-400",
  },
];

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <>
      <Navbar />
      <section id="contact" className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-800" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Badge className="mb-6 bg-green-500/20 text-green-400 border-green-500/30 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Let's Connect
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Let's Build Something
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Ready to transform your <span className="text-blue-400 font-semibold">data into insights</span>? Let's
              discuss how we can collaborate to solve{" "}
              <span className="text-purple-400 font-semibold">complex problems</span> and drive{" "}
              <span className="text-green-400 font-semibold">innovation</span>.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300">Usually responds within 24h</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">Available worldwide</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <Heart className="w-4 h-4 text-red-400" />
                <span className="text-sm text-gray-300">Open to new opportunities</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Send me a message</h3>
                <p className="text-gray-300 mb-6">
                  Have a project in mind? Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>
              <Card className="bg-black/40 backdrop-blur-xl border border-white/10">
                <CardContent className="p-6">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                      <p className="text-gray-300">Thanks for reaching out. I'll get back to you soon!</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-green-400"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                        <Input
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          required
                          className="bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                      </div>
                      <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
                <div className="grid gap-4">
                  {contactMethods.map((method, index) => (
                    <Card key={index} className="bg-black/40 backdrop-blur-xl border border-white/10">
                      <CardContent className="p-4">
                        <a href={method.href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4">
                          <div className={`bg-gradient-to-r ${method.gradient} p-3 rounded-xl`}>
                            <div className="text-white">{method.icon}</div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white">{method.title}</h4>
                            <p className="text-sm text-gray-400 mb-1">{method.description}</p>
                            <p className="text-sm text-gray-300 font-medium">{method.value}</p>
                            <p className="text-xs text-green-400">{method.response}</p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="bg-black/40 backdrop-blur-xl border border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-green-400" />
                    Availability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {availability.map((slot, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-300">{slot.day}</span>
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${slot.available ? "bg-green-400" : "bg-gray-500"}`} />
                      </div>
                    </div>
                  ))}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-xs text-gray-400">
                      <MapPin className="w-3 h-3 inline mr-1" />
                      Central African Time(CAT)
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur-xl border border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Coffee className="w-5 h-5 mr-2 text-orange-400" />
                    Open to Collaboration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {collaborationTypes.map((type, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`${type.color} mt-1`}>{type.icon}</div>
                      <div>
                        <h4 className="font-medium text-white">{type.title}</h4>
                        <p className="text-sm text-gray-400">{type.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold text-white mb-8">Prefer a quick chat?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </Button>
              <Button variant="outline" className="border-white/20 text-white px-8 py-4 rounded-full">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

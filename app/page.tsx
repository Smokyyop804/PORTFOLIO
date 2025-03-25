"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Code, ExternalLink, Github, Mail, Moon, Sun, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const { scrollYProgress } = useScroll()
  const ref = useRef(null)

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  // Parallax effect for hero section
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="text-xl font-bold">
              <span className="text-primary">Dev</span>Portfolio
            </Link>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-6"
          >
            <Link href="#about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle dark mode">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 z-0" />
          <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0" />
        </motion.div>

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block">
                Hi...... <br />I'm <span className="text-primary">Jitendra Kumar</span>
              </span>
              <span className="block mt-2">Frontend Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
              I build beautiful, interactive, and responsive web experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact">Resume</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <Link
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span>Scroll Down</span>
            <ArrowDown className="animate-bounce" />
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">
              <User className="mr-1 h-3 w-3" /> About Me
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I Am</h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square relative rounded-2xl overflow-hidden border-4 border-primary/20">
                <Image src="/placeholder1.jpg?height=600&width=600" alt="John Doe" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <p className="font-bold text-l">Few</p>

                <p className="font-bold text-l">Experience</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">Frontend Developer & UI/UX Enthusiast</h3>
              <p className="text-muted-foreground mb-6">
                I'm a passionate frontend developer creating engaging digital experiences. I
                specialize in building responsive, accessible, and performant web applications using modern
                technologies.
              </p>
              <p className="text-muted-foreground mb-6">
                My journey in web development started when I learn building website can be fun. Since then, Past 2+years I learn to build website and I've worked with few
                freelance  companies to bring their visions to life through code.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <p className="font-bold">Name:</p>
                  <p className="text-muted-foreground">Jitendra Kumar</p>
                </div>
                <div>
                  <p className="font-bold">Email:</p>
                  <p className="text-muted-foreground">jitendrayadav67890.com</p>
                </div>
                <div>
                  <p className="font-bold">Location:</p>
                  <p className="text-muted-foreground">Bhilai Power, Durg</p>
                </div>
                <div>
                  <p className="font-bold">Availability:</p>
                  <p className="text-muted-foreground">Freelance / Full-time</p>
                </div>
              </div>
              <Button asChild>
                <Link href="#contact">Let's Talk</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">
              <Code className="mr-1 h-3 w-3" /> My Skills
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "HTML & CSS", level: 95 },
              { name: "JavaScript", level: 90 },
              { name: "React", level: 85 },
              { name: "Next.js", level: 80 },
              { name: "TypeScript", level: 75 },
              { name: "UI/UX Design", level: 70 },
              { name: "Tailwind CSS", level: 90 },
              { name: "Framer Motion", level: 75 },
              { name: "Responsive Design", level: 95 },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold">{skill.name}</h3>
                      <span className="text-primary font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-primary h-2.5 rounded-full"
                      ></motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">
              <Github className="mr-1 h-3 w-3" /> My Work
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Projects</h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                description: "A modern e-commerce platform built with Next.js and Tailwind CSS.",
                image: "/placeholder.svg?height=400&width=600",
                tags: ["Next.js", "Tailwind CSS", "Stripe"],
              },
              {
                title: "Dashboard UI",
                description: "An admin dashboard with dark mode and interactive charts.",
                image: "/placeholder.svg?height=400&width=600",
                tags: ["React", "TypeScript", "Recharts"],
              },
              {
                title: "Social Media App",
                description: "A responsive social media application with real-time features.",
                image: "/placeholder.svg?height=400&width=600",
                tags: ["React", "Firebase", "Tailwind CSS"],
              },
              {
                title: "Portfolio Website",
                description: "A creative portfolio website with smooth animations.",
                image: "/placeholder.svg?height=400&width=600",
                tags: ["Next.js", "Framer Motion", "Three.js"],
              },
              {
                title: "Weather App",
                description: "A weather application with location-based forecasts.",
                image: "/placeholder.svg?height=400&width=600",
                tags: ["React", "OpenWeather API", "Geolocation"],
              },
              {
                title: "Task Management",
                description: "A drag-and-drop task management application.",
                image: "/placeholder.svg?height=400&width=600",
                tags: ["React", "DnD Kit", "Redux"],
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Button size="icon" variant="secondary" className="rounded-full">
                        <Github className="h-5 w-5" />
                      </Button>
                      <Button size="icon" variant="secondary" className="rounded-full">
                        <ExternalLink className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">
              <Mail className="mr-1 h-3 w-3" /> Contact
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6">Let's Talk About Your Project</h3>
              <p className="text-muted-foreground mb-8">
                I'm interested in freelance opportunities – especially ambitious or large projects. However, if you have
                other requests or questions, don't hesitate to contact me.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">jitendrayadav67890.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Github className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-muted-foreground">github.com/Smokyyop804</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="name"
                          className="w-full p-3 rounded-md border bg-background"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full p-3 rounded-md border bg-background"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <input
                        id="subject"
                        className="w-full p-3 rounded-md border bg-background"
                        placeholder="Subject"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full p-3 rounded-md border bg-background resize-none"
                        placeholder="Your Message"
                      ></textarea>
                    </div>

                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="text-xl font-bold">
                <span className="text-primary">Dev</span>Portfolio
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 md:mt-0"
            >
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} John Doe. All rights reserved.
              </p>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  )
}


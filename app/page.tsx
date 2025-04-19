"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, Server, Database, Code, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const headerRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      });

      // Skills animation
      gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2
      });
    });

    return () => ctx.revert();
  }, []);

  const skills = [
    { icon: <Terminal className="w-10 h-10" />, title: "Node.js", description: "Expert in building scalable backend services" },
    { icon: <Server className="w-10 h-10" />, title: "Microservices", description: "Design and implementation of distributed systems" },
    { icon: <Database className="w-10 h-10" />, title: "Databases", description: "MongoDB, PostgreSQL, Redis optimization" },
    { icon: <Code className="w-10 h-10" />, title: "Clean Code", description: "SOLID principles & design patterns" },
    { icon: <Globe className="w-10 h-10" />, title: "API Design", description: "RESTful & GraphQL API architecture" }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section ref={headerRef} className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background/0 pointer-events-none" />
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
          >
            Youssef Ali Ahmed
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-3xl text-muted-foreground mb-8"
          >
            Software Engineer | Node.js Developer
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <Button size="lg" variant="default">
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Button>
            <Button size="lg" variant="outline">
              View Projects
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="skill-card p-6 bg-card hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  {skill.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
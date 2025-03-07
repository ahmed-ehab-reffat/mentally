"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Heart, Brain, Users, Lightbulb, ArrowRight, Smile, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  const features = [
    { icon: Brain, title: "AI-Powered Analysis", description: "Advanced algorithms analyze your emotional state and provide personalized support.", href: "/features/ai-analysis" },
    { icon: Users, title: "Group Therapy", description: "Connect with others in moderated group sessions for shared experiences and support.", href: "/features/group-therapy" },
    { icon: Lightbulb, title: "Personalized Insights", description: "Gain valuable insights into your mental health patterns and progress over time.", href: "/features/insights" },
  ];

  const testimonials = [
    { quote: "This platform has completely transformed how I manage my mental health. The AI analysis is incredibly accurate.", author: "Sarah M.", role: "User" },
    { quote: "The group therapy sessions have given me a supportive community I never knew I needed.", author: "Michael R.", role: "Group Member" },
    { quote: "The personalized insights helped me understand my patterns and make positive changes.", author: "Emma L.", role: "Active User" },
  ];

  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "1000+", label: "Group Sessions" },
    { number: "92%", label: "User Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  const faqs = [
    { question: "How does the AI analysis work?", answer: "Our AI system uses advanced natural language processing to analyze your responses and emotional patterns, providing personalized support and recommendations based on your unique situation." },
    { question: "Are the group therapy sessions confidential?", answer: "Yes, all group therapy sessions are completely confidential and moderated by licensed professionals. We maintain strict privacy standards to ensure a safe space for all participants." },
    { question: "How often should I use the platform?", answer: "We recommend regular check-ins, ideally daily or weekly, to get the most benefit from the platform. However, you can use it as frequently as you need based on your personal circumstances." },
    { question: "Can I track my progress over time?", answer: "Yes, our platform provides detailed progress tracking through personalized insights, charts, and regular assessment reports to help you monitor your mental health journey." },
  ];

  const iconPaths = {
    Heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    Brain: '<path d="M9.5 3A4.5 4.5 0 0 0 5 7.5c0 1.12.41 2.14 1.08 2.92A3.5 3.5 0 0 0 4 13.5c0 2.21 1.79 4 4 4 1.1 0 2.1-.45 2.83-1.17A4.49 4.49 0 0 0 14.5 20c2.49 0 4.5-2.01 4.5-4.5 0-1.12-.41-2.14-1.08-2.92A3.5 3.5 0 0 0 20 9.5c0-2.21-1.79-4-4-4-1.1 0-2.1.45-2.83 1.17A4.49 4.49 0 0 0 9.5 3z"/>',
    Users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    Lightbulb: '<path d="M9 18h6M10 21h4M9 6a5 5 0 0 1 5 5c0 2.5-2 4-2 4H12s-2-1.5-2-4a5 5 0 0 1 5-5z"/>',
    Smile: '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>',
    Sun: '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>',
    Moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
  };

  const canvasRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const container = document.getElementById("animated-hero-container");
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    const resize = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 5 + 2,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      color: ["#FF6B6B", "#4ECDC4", "#FFD166", "#6A0572"][Math.floor(Math.random() * 4)],
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
      });
      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700">
        <div className="absolute inset-0" id="animated-hero-container">
          <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />
        </div>
        <div className="relative container mx-auto px-4 py-20 z-10">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4 font-pacifico"
            >
              Together
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500 font-pacifico"
            >
              We Can Overcome
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <Link
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
              >
                Discover How <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block p-4 rounded-full bg-gradient-to-br from-teal-500/20 to-blue-500/20"
            >
              <Heart className="w-10 h-10 text-teal-400" />
            </motion.div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-5xl font-light bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-600"
            >
              Interactive Mental Health
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              The Interactive Mental Health Support System is a 24/7 AI-powered platform designed to provide
              personalized mental health support. It uses advanced technologies such as sentiment analysis, facial
              expression recognition, and smart chatbots to analyze emotions and offer tailored recommendations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm uppercase tracking-wider text-gray-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500"
          >
            Our Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <Link href={feature.href}>
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full">
                    <div className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <feature.icon className="w-8 h-8 text-teal-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                    <div className="mt-4 text-teal-400 flex items-center text-sm font-medium">
                      Learn more <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500"
          >
            What Our Users Say
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700 relative"
              >
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center mt-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center text-purple-400 font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem value={`item-${index}`} className="border border-gray-700 mb-4 rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 hover:bg-gray-700 transition-colors text-white">
                      <span className="text-left">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-2 text-gray-300">{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-900 py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border border-gray-700"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-teal-500/20 mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-400">
                <path d="M21 5H3C2.44772 5 2 5.44772 2 6V18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18V6C22 5.44772 21.5523 5 21 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M2 6L12 13L22 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated</h2>
            <p className="text-gray-300 mb-8">Subscribe to our newsletter for mental health tips, updates, and resources.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" placeholder="Enter your email" className="flex-1 bg-gray-800 text-white border-gray-700 focus-visible:ring-teal-500" />
              <Button type="submit" className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white transition-all duration-300">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Start Your Journey to Better Mental Health</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Take the first step towards a healthier mind with our interactive platform.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/chat"
                className="bg-white text-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg inline-flex items-center justify-center"
              >
                Try Our Chatbot <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button
                onClick={() => document.getElementById("features").scrollIntoView({ behavior: "smooth" })}
                className="bg-transparent border border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center"
              >
                Explore Features
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

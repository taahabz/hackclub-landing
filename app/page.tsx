"use client"

import HeroSection from "../hero-section"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { Timeline } from "@/components/ui/timeline"
import "./globals.css"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"
import { motion } from "framer-motion"
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero"
import Chatbot from "../components/chatbot"

export default function Page() {
  const missionStatement =
    "At Hack Club NUST, we believe coding isn't an option, it's a superpower. Born from the innovative spirit of NUST, we unite coders from every corner of the campus who share our passion for pushing boundaries. Whether you're debugging your first line, or building AI-driven masterpieces, we're here to fuel your journey. Our community thrives on the rhythm of keystrokes, the power of perseverance, and the joy of shared breakthroughs. Join us as we code not just for grades, but for freedom, friendship, and the pure love of creation."

  const timelineEntries = [
    {
      id: 1,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RJ3iTXUn5SUexF6nHMZYhMoQLNCboK.png",
      alt: "Office Bearer 1",
      title: "Office Bearer 1",
      description:
        "President - Leading Hack Club NUST with vision and dedication. Passionate about building a strong coding community and empowering every member to reach their full potential.",
      layout: "left" as const,
    },
    {
      id: 2,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LN9OPh9hw0b9rwSPRSslHoejcfoKHe.png",
      alt: "Office Bearer 2",
      title: "Office Bearer 2",
      description:
        "Vice President - Supporting the club's mission and coordinating events. Committed to fostering collaboration and innovation within our coding community.",
      layout: "right" as const,
    },
    {
      id: 3,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1FdGyjVpWQANGzsDWpoPIvF5SVI2za.png",
      alt: "Office Bearer 3",
      title: "Office Bearer 3",
      description:
        "General Secretary - Managing club operations and communications. Ensuring smooth coordination between teams and keeping everyone connected and informed.",
      layout: "left" as const,
    },
    {
      id: 4,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RJ3iTXUn5SUexF6nHMZYhMoQLNCboK.png",
      alt: "Office Bearer 4",
      title: "Office Bearer 4",
      description:
        "Treasurer - Managing club finances and resources. Dedicated to ensuring sustainable growth and providing members with the best tools and opportunities.",
      layout: "right" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Hero Section */}
      <HeroSection />

      {/* Mission Statement Section with Grid Background */}
      <section id="mission" className="relative min-h-screen flex items-center justify-center py-20 bg-background transition-colors duration-300">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-12 text-foreground">OUR MISSION</h2>
            <TextGradientScroll
              text={missionStatement}
              className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-foreground/90"
              type="word"
              textOpacity="soft"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="community" className="relative py-20 bg-background transition-colors duration-300">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="relative z-10">
          <div className="container mx-auto px-6 mb-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-6 text-foreground">ALL CODERS WELCOME</h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Every coder has a unique journey. Here are just a few stories from our inclusive community.
              </p>
            </div>
          </div>

          <Timeline entries={timelineEntries} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20 bg-background transition-colors duration-300">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-wider text-foreground mb-6">
              See what our{" "}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">CODERS</span>{" "}
              say.
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
              Real stories from real coders who found their flow with Hack Club NUST.
            </p>
          </motion.div>

          <StaggerTestimonials />
        </div>
      </section>

      {/* Smooth Scroll Hero with CTA Overlay */}
      <section id="join" className="relative">
        <SmoothScrollHero
          scrollHeight={2500}
          desktopImage="/images/runners-motion-blur.png"
          mobileImage="/images/runners-motion-blur.png"
          initialClipPercentage={30}
          finalClipPercentage={70}
        />
      </section>
      {/* <Chatbot /> */}
    </div>
  )
}

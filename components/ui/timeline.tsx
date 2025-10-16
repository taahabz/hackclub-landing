"use client"

import { useScroll, useTransform, motion, useMotionValue, useSpring } from "framer-motion"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface TimelineEntry {
  id: number
  image: string
  alt: string
  title: string
  description: string
  layout: "left" | "right"
}

interface TimelineProps {
  entries: TimelineEntry[]
  className?: string
}

export function Timeline({ entries, className }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {/* Central Timeline Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2 hidden md:block transition-colors duration-300" />

      {entries.map((entry, index) => (
        <TimelineItem key={entry.id} entry={entry} index={index} scrollProgress={scrollYProgress} />
      ))}
    </div>
  )
}

interface TimelineItemProps {
  entry: TimelineEntry
  index: number
  scrollProgress: any
}

function TimelineItem({ entry, index, scrollProgress }: TimelineItemProps) {
  const itemRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: itemProgress } = useScroll({
    target: itemRef,
    offset: ["start center", "end center"],
  })

  const opacity = useTransform(itemProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3])
  const scale = useTransform(itemProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])

  // 3D Tilt Effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 300,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [15, -15]), {
    stiffness: 300,
    damping: 30,
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return

    const rect = imageRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const mouseXPos = (e.clientX - centerX) / (rect.width / 2)
    const mouseYPos = (e.clientY - centerY) / (rect.height / 2)

    mouseX.set(mouseXPos)
    mouseY.set(mouseYPos)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const isLeft = entry.layout === "left"

  return (
    <motion.div ref={itemRef} style={{ opacity, scale }} className="relative mb-20 md:mb-32">
      {/* Timeline Dot */}
      <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block transition-colors duration-300" />

      <div className="container mx-auto px-6">
        <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center")}>
          {/* Image */}
          <div
            className={cn("relative", {
              "md:order-2": isLeft,
              "md:order-1": !isLeft,
            })}
          >
            <div className="sticky top-20">
              <motion.div
                ref={imageRef}
                className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-muted scale-90 transition-colors duration-300"
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                  perspective: 1000,
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={entry.image || "/placeholder.svg"}
                  alt={entry.alt}
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{ transform: "translateZ(20px)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-black/10" />
              </motion.div>
            </div>
          </div>

          {/* Content */}
          <div
            className={cn("relative", {
              "md:order-1": isLeft,
              "md:order-2": !isLeft,
            })}
          >
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className={cn("space-y-6", {
                  "md:text-right": isLeft,
                })}
              >
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-wide text-foreground transition-colors duration-300">
                  {entry.title}
                </h3>
                <p className={cn("text-lg md:text-xl leading-relaxed text-foreground/80 max-w-lg transition-colors duration-300", {
                  "md:ml-auto": isLeft,
                })}>
                  {entry.description}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

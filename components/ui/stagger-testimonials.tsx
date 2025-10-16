"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const SQRT_5000 = Math.sqrt(5000)

// Hack Club NUST testimonials data with randomly generated icons
const testimonials = [
  {
    tempId: 0,
    testimonial:
      "Hack Club changed my life. From struggling to write 5 lines to deploying my first full-stack app, this community believed in me when I didn't believe in myself.",
    by: "Ayesha Khan, Full-Stack Developer",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AyeshaKhan&backgroundColor=3b82f6&textColor=ffffff",
  },
  {
    tempId: 1,
    testimonial:
      "I was intimidated to join a coding club, but Hack Club welcomed me with open arms. Now I have lifelong friends and the confidence to build anything.",
    by: "Ali Raza, Game Developer",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AliRaza&backgroundColor=10b981&textColor=ffffff",
  },
  {
    tempId: 2,
    testimonial:
      "The energy at Hack Club workshops is infectious. Whether you're a beginner or pro, everyone cheers you on. It's not about competition—it's about community.",
    by: "Fatima Zahid, HR Team Lead & Coder",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=FatimaZahid&backgroundColor=8b5cf6&textColor=ffffff",
  },
  {
    tempId: 3,
    testimonial:
      "After years of watching tutorials alone, finding Hack Club was a game-changer. The group projects pushed me to new skills I never thought possible.",
    by: "Omar Ahmed, AI Enthusiast",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=OmarAhmed&backgroundColor=ef4444&textColor=ffffff",
  },
  {
    tempId: 4,
    testimonial:
      "Hack Club taught me that coding isn't just work—it's therapy, friendship, and adventure all rolled into one. This club saved my semester.",
    by: "Sana Malik, Frontend Developer",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=SanaMalik&backgroundColor=f59e0b&textColor=ffffff",
  },
  {
    tempId: 5,
    testimonial:
      "From zero to deploying my first React app in 6 weeks with Hack Club's support. They meet you where you are and help you discover where you can go. Pure magic.",
    by: "Zain Butt, React Developer",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=ZainButt&backgroundColor=6366f1&textColor=ffffff",
  },
  {
    tempId: 6,
    testimonial:
      "The hackathon nights with Hack Club are spiritual experiences. There's something powerful about creating together as deadlines approach.",
    by: "Hira Nadeem, Hackathon Winner",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=HiraNadeem&backgroundColor=ec4899&textColor=ffffff",
  },
  {
    tempId: 7,
    testimonial:
      "I joined Hack Club after switching to CS. Not only did I find my coding tribe, but I found my chosen family. Code truly is superpower here.",
    by: "Usman Qureshi, Community Builder",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=UsmanQureshi&backgroundColor=06b6d4&textColor=ffffff",
  },
  {
    tempId: 8,
    testimonial:
      "Hack Club celebrates every commit, no matter how small. My first pull request felt like winning the Olympics with this crew cheering me on.",
    by: "Maryam Shah, Open Source Contributor",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MaryamShah&backgroundColor=f97316&textColor=ffffff",
  },
  {
    tempId: 9,
    testimonial:
      "The project roadmaps at Hack Club are incredible. I went from basic HTML to building ML models in just two semesters.",
    by: "Bilal Khan, ML Developer",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=BilalKhan&backgroundColor=84cc16&textColor=ffffff",
  },
  {
    tempId: 10,
    testimonial:
      "What I love about Hack Club is the diversity. Coders of all ages, backgrounds, and skills come together with one shared passion.",
    by: "Noor Jahan, Diversity Champion",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=NoorJahan&backgroundColor=a855f7&textColor=ffffff",
  },
  {
    tempId: 11,
    testimonial:
      "The accountability at Hack Club is unmatched. When you know your coding family is waiting for you, you show up to every workshop no matter what.",
    by: "Hamza Ali, Consistency King",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=HamzaAli&backgroundColor=059669&textColor=ffffff",
  },
  {
    tempId: 12,
    testimonial:
      "Hack Club's hardware workshops introduced me to the most amazing projects I never knew existed. Coding became my way to change the world.",
    by: "Amina Riaz, Hardware Hacker",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AminaRiaz&backgroundColor=0ea5e9&textColor=ffffff",
  },
  {
    tempId: 13,
    testimonial:
      "The post-workshop discussions at Hack Club are as valuable as the coding itself. We solve real problems one line at a time.",
    by: "Saad Malik, Problem Solver",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=SaadMalik&backgroundColor=dc2626&textColor=ffffff",
  },
  {
    tempId: 14,
    testimonial:
      "I never thought I'd be a coder, but Hack Club's beginner-friendly approach made it possible. Now I can't imagine life without coding.",
    by: "Laiba Hassan, Late Bloomer Developer",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=LaibaHassan&backgroundColor=7c3aed&textColor=ffffff",
  },
  {
    tempId: 15,
    testimonial:
      "The debugging support at Hack Club is incredible. When I was stuck on errors, they kept me motivated and helped me come back stronger.",
    by: "Farhan Ahmed, Comeback Coder",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=FarhanAhmed&backgroundColor=ea580c&textColor=ffffff",
  },
  {
    tempId: 16,
    testimonial:
      "Hack Club's open-source events give our code meaning. We're not just coding for ourselves, we're coding to make a difference.",
    by: "Huda Aslam, Open Source Champion",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=HudaAslam&backgroundColor=16a34a&textColor=ffffff",
  },
  {
    tempId: 17,
    testimonial:
      "The workshop series at Hack Club transformed my coding skills. I'm faster and bug-free thanks to their expert guidance.",
    by: "Yousuf Khan, Code Perfectionist",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=YousufKhan&backgroundColor=2563eb&textColor=ffffff",
  },
  {
    tempId: 18,
    testimonial:
      "Hack Club's virtual workshops during semester breaks kept me sharp. Even when we couldn't meet, we stayed connected as a community.",
    by: "Zoya Butt, Virtual Coder",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=ZoyaButt&backgroundColor=be185d&textColor=ffffff",
  },
  {
    tempId: 19,
    testimonial:
      "The mentorship at Hack Club is life-changing. Senior devs take newcomers under their wing and share their wisdom generously.",
    by: "Imran Shahid, Grateful Mentee",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=ImranShahid&backgroundColor=0891b2&textColor=ffffff",
  },
]

interface TestimonialCardProps {
  position: number
  testimonial: (typeof testimonials)[0]
  handleMove: (steps: number) => void
  cardSize: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0
  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-primary text-primary-foreground border-primary"
          : "z-0 bg-card text-card-foreground border-border hover:border-primary/50",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={testimonial.imgSrc || "/placeholder.svg"}
        alt={`${testimonial.by.split(",")[0]}`}
        className="mb-4 h-14 w-12 bg-muted object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))",
        }}
      />
      <h3 className={cn("text-base sm:text-xl font-medium", isCenter ? "text-primary-foreground" : "text-foreground")}>
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
          isCenter ? "text-primary-foreground/80" : "text-muted-foreground",
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  )
}

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365)
  const [testimonialsList, setTestimonialsList] = useState(testimonials)

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, tempId: Math.random() })
      }
    }
    setTestimonialsList(newList)
  }

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)")
      setCardSize(matches ? 365 : 290)
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-background transition-colors duration-300" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2 ? index - (testimonialsList.length + 1) / 2 : index - testimonialsList.length / 2
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        )
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}

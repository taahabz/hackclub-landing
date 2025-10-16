"use client"

import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { Menu, ChevronLeft, ChevronRight, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const slides = [
    {
      image: "/images/hero-1.jpg",
      alt: "Hero image 1",
    },
    {
      image: "/images/hero-2.jpg",
      alt: "Hero image 2",
    },
    {
      image: "/images/hero-3.jpg",
      alt: "Hero image 3",
    },
  ]

  const navItems = [
    { name: "Home", href: "#hero", isRoute: false },
    { name: "Gallery", href: "/gallery", isRoute: true },
    { name: "Mission", href: "#mission", isRoute: false },
    { name: "Community", href: "#community", isRoute: false },
    { name: "Testimonials", href: "#testimonials", isRoute: false },
    { name: "Join Us", href: "#join", isRoute: false },
  ]

  // Navigation handlers
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  const scrollToSection = (href: string, isRoute: boolean): void => {
    if (isRoute) {
      // For routes, navigation will be handled by Link component
      setIsMenuOpen(false)
      return
    }
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${slide.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-20 px-6 md:px-12 lg:px-16 py-6 md:py-8">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Image
              src="/images/logo light without text.png"
              alt="Hack Club NUST Logo"
              width={70}
              height={70}
              className="object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ThemeToggle />
            {navItems.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-white hover:text-gray-300 transition-colors duration-300 font-medium tracking-wide pb-1 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href, item.isRoute)}
                  className="relative text-white hover:text-gray-300 transition-colors duration-300 font-medium tracking-wide pb-1 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
                </button>
              ),
            )}
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className="text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/95 backdrop-blur-sm z-30 md:hidden transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className={`absolute top-6 right-6 text-white hover:text-gray-300 transition-all duration-300 ${
            isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
          }`}
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, index) =>
            item.isRoute ? (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-white text-2xl font-bold tracking-wider hover:text-gray-300 transition-all duration-500 ${
                  isMenuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 80}ms` : "0ms",
                }}
              >
                {item.name}
              </Link>
            ) : (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href, item.isRoute)}
                className={`text-white text-2xl font-bold tracking-wider hover:text-gray-300 transition-all duration-500 ${
                  isMenuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 80}ms` : "0ms",
                }}
              >
                {item.name}
              </button>
            ),
          )}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center text-white max-w-4xl">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wider mb-4 leading-none">
            HACKCLUB NUST
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-light tracking-wide mb-8 text-gray-200">Global Coding Community</p>

          {/* CTA Button - Now using LiquidButton */}
          <LiquidButton
            size="xxl"
            className="font-semibold text-lg tracking-wide"
            onClick={() => scrollToSection("#join", false)}
          >
            Join Us
          </LiquidButton>
        </div>
      </div>

      {/* Slider Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {/* Previous Arrow */}
          <button
            onClick={prevSlide}
            className="text-white hover:text-gray-300 transition-colors p-2"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-white" : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={nextSlide}
            className="text-white hover:text-gray-300 transition-colors p-2"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Side Navigation Indicators */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 hidden md:block">
        <div className="flex flex-col space-y-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-1 h-8 transition-all duration-300 ${
                currentSlide === index ? "bg-white" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

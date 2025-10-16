"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { ParticleSphere } from "@/components/particle-sphere"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function GalleryPage() {
  return (
    <div className="w-full h-screen bg-black relative">
      {/* Back Button - Top Left */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-300 bg-black/50 hover:bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full group font-instrument-serif"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="font-medium">Back</span>
      </Link>

      {/* Quote Text */}
      <div className="fixed top-20 left-0 right-0 z-10 p-6">
        <h1 className="max-w-[750px] mx-auto text-white text-center font-instrument-serif px-6 md:text-6xl text-4xl tracking-tight font-normal">
          The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.
        </h1>
      </div>

      {/* Canvas with Particle Sphere */}
      <Canvas camera={{ position: [-10, 1.5, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <ParticleSphere />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  )
}

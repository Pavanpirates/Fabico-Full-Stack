import React, { useRef, useEffect } from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  const videoRef = useRef(null)

  // Auto play/pause only when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) videoRef.current.play()
          else videoRef.current.pause()
        }
      },
      { threshold: 0.25 }
    )

    if (videoRef.current) observer.observe(videoRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative z-0 w-full overflow-hidden bg-gradient-to-br from-[#f4f4f5] via-[#e5e7eb] to-[#f4f4f5] shadow-lg border-b border-gray-300">
      <div className="w-full flex flex-col-reverse sm:flex-row items-center justify-center py-10 px-5 sm:px-16 gap-10 text-center sm:text-left">
        
        {/* Left Section */}
        <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start justify-center space-y-6 sm:pl-10">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <span className="inline-block w-8 md:w-11 h-[2px] bg-gray-600 rounded"></span>
            <span className="font-semibold text-gray-700 text-xs md:text-sm tracking-wider">
              OUR BESTSELLERS
            </span>
          </div>

          <h1 className="prata-regular text-3xl sm:text-4xl lg:text-5xl text-black font-bold leading-tight">
            Discover the <span className="text-gray-700">Latest Arrivals</span>
          </h1>

          <p className="text-gray-700 text-base md:text-lg max-w-md">
            Shop our exclusive collection of trending products, handpicked for quality and value. Enjoy fast shipping and amazing deals!
          </p>

          <div className="flex items-center justify-center sm:justify-start gap-4 mt-2">
            <a
              href="/collection"
              className="bg-black hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg shadow transition focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 animate-bounce"
            >
              Shop Now
            </a>
            <a
              href="/about"
              className="font-semibold text-gray-700 text-sm hover:underline transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Section - Reduced Video Card */}
        <div className="w-full sm:w-1/2 flex items-center justify-center z-0">
          <div className="aspect-square w-[260px] sm:w-[340px] md:w-[400px] bg-white/70 rounded-3xl border border-gray-200 shadow-2xl flex items-center justify-center transition-transform duration-300 hover:scale-105">
            <video
              ref={videoRef}
              className="w-full h-full rounded-3xl object-cover"
              src={assets.hero_video}
              loop
              muted
              playsInline
              poster={assets.hero_img}
              style={{ background: '#e5e7eb' }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Background decorative blobs */}
      <div className="absolute top-[-60px] left-[-60px] w-40 h-40 bg-gray-200 rounded-full opacity-40 blur-2xl z-0"></div>
      <div className="absolute bottom-[-60px] right-[-60px] w-48 h-48 bg-gray-300 rounded-full opacity-40 blur-2xl z-0"></div>
    </section>
  )
}

export default Hero

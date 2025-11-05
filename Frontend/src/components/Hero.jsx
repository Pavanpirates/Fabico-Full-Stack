import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#f4f4f5] via-[#e5e7eb] to-[#f4f4f5] shadow-lg border-b border-gray-300">
      <div className="w-full max-w-none flex flex-col-reverse sm:flex-row items-center justify-between py-10 px-0 sm:px-16 gap-10">
        {/* Hero Left Section */}
        <div className="w-full sm:w-1/2 flex flex-col items-start justify-center space-y-6 pl-6 sm:pl-20">
          <div className="flex items-center gap-3">
            <span className="inline-block w-8 md:w-11 h-[2px] bg-gray-600 rounded"></span>
            <span className="font-semibold text-gray-700 text-xs md:text-sm tracking-wider">OUR BESTSELLERS</span>
          </div>
          <h1 className="prata-regular text-3xl sm:text-4xl lg:text-5xl text-black font-bold leading-tight animate-fade-in">
            Discover the <span className="text-gray-700">Latest Arrivals</span>
          </h1>
          <p className="text-gray-700 text-base md:text-lg max-w-md">
            Shop our exclusive collection of trending products, handpicked for quality and value. Enjoy fast shipping and amazing deals!
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a
              href="/collection"
              className="bg-black hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg shadow transition focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 animate-bounce"
            >
              Shop Now
            </a>
            <span
            className="font-semibold text-gray-700 text-sm cursor-pointer hover:underline transition"
          >
            <a href="/about">Learn More</a>
          </span>
          </div>
        </div>
        {/* Hero Right Section - Modern Square Video Card */}
        <div className="w-full sm:w-1/2 flex items-center justify-center pr-6 sm:pr-20">
          <div className="aspect-square w-[340px] sm:w-[420px] md:w-[480px] bg-white/70 rounded-3xl border border-gray-200 shadow-2xl flex items-center justify-center transition-transform duration-300 hover:scale-105">
            <video
              className="w-full h-full rounded-3xl object-cover"
              src={assets.hero_video}
              autoPlay
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
      {/* Decorative gradient blobs in silver/gray */}
      <div className="absolute top-[-60px] left-[-60px] w-40 h-40 bg-gray-200 rounded-full opacity-40 blur-2xl z-0"></div>
      <div className="absolute bottom-[-60px] right-[-60px] w-48 h-48 bg-gray-300 rounded-full opacity-40 blur-2xl z-0"></div>
    </section>
  )
}

export default Hero
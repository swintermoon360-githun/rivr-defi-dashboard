import Navbar from './Navbar'
import HeroBadge from './HeroBadge'
import BottomLeftCard from './BottomLeftCard'
import BottomRightCorner from './BottomRightCorner'
import { motion } from 'motion/react'

// Floating 3D orb component
const FloatingOrb = ({ className }: { className: string }) => (
  <div className={`absolute rounded-full pointer-events-none ${className}`} />
)

// Particle component
const Particle = ({ delay, left, duration, size }: { delay: number; left: string; duration: number; size: number }) => (
  <div
    className="absolute bottom-0 rounded-full pointer-events-none"
    style={{
      left,
      width: size,
      height: size,
      background: 'rgba(30,50,90,0.15)',
      animation: `particleDrift ${duration}s ${delay}s linear infinite`,
      backdropFilter: 'blur(2px)',
    }}
  />
)

export default function Hero() {
  const particles = [
    { delay: 0, left: '10%', duration: 12, size: 6 },
    { delay: 2, left: '25%', duration: 15, size: 4 },
    { delay: 4, left: '40%', duration: 10, size: 8 },
    { delay: 1, left: '55%', duration: 13, size: 5 },
    { delay: 3, left: '70%', duration: 11, size: 7 },
    { delay: 5, left: '85%', duration: 14, size: 4 },
    { delay: 6, left: '18%', duration: 16, size: 5 },
    { delay: 7, left: '62%', duration: 9, size: 6 },
  ]

  return (
    <div className="w-full h-screen flex items-center justify-center p-3 md:p-5 bg-[#f0f0f0]">
      <section
        className="relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-none flex flex-col items-center bg-white/10 group perspective-container"
      >
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260428_193507_4286c423-2fd9-4efd-92bd-91a939453fc1.mp4"
            type="video/mp4"
          />
        </video>

        {/* 3D Ambient Orbs */}
        <FloatingOrb className="w-[500px] h-[500px] -top-32 -left-32 bg-blue-200/20 blur-[80px] orb1" />
        <FloatingOrb className="w-[400px] h-[400px] -bottom-20 -right-20 bg-indigo-300/15 blur-[60px] orb2" />
        <FloatingOrb className="w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-100/10 blur-[100px] orb3" />

        {/* Particle Field */}
        {particles.map((p, i) => (
          <Particle key={i} {...p} />
        ))}

        {/* Subtle scanline overlay for cinematic depth */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
          }}
        />

        {/* Content Layer */}
        <div className="relative z-10 w-full h-full flex flex-col items-center">
          <Navbar />

          {/* Text Container */}
          <div className="w-full flex flex-col items-center pt-8 px-6 text-center max-w-4xl">
            <HeroBadge />

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-normal text-[#5E6470] mb-2 tracking-tight leading-[1.05] float-3d"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Fluid Asset Streams
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-[#5E6470] opacity-80 leading-relaxed max-w-xl font-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Access Smart Vaults, stake RIVR, NFTs, transform rigid holdings into liquid cash instantly.
            </motion.p>

            {/* 3D Stats Row */}
            <motion.div
              className="flex items-center gap-6 mt-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {[{ val: '$2.4B', label: 'TVL' }, { val: '18.5%', label: 'APY' }, { val: '142K', label: 'Stakers' }].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-[rgba(30,50,90,0.85)] font-normal text-lg md:text-2xl tracking-tight">{stat.val}</span>
                  <span className="text-[rgba(30,50,90,0.45)] text-[10px] uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <BottomLeftCard />
          <BottomRightCorner />
        </div>
      </section>
    </div>
  )
}

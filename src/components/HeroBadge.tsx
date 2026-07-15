import { motion } from 'motion/react'
import { Sparkles } from 'lucide-react'

export default function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/20 mx-auto mb-3 w-fit badge-pulse"
    >
      <motion.div
        animate={{ rotate: [0, 15, -10, 15, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
      >
        <Sparkles className="w-4 h-4 text-[rgba(30,50,90,0.8)]" />
      </motion.div>
      <span className="text-[14px] font-normal text-[rgba(30,50,90,0.9)]">Fluid Staking</span>

      {/* Live dot */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
      </span>
    </motion.div>
  )
}

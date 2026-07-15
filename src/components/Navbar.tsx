import { motion } from 'motion/react'
import { ChevronRight, ArrowUpRight } from 'lucide-react'

const navItems = [
  { label: 'Ecosystem', hasDropdown: false },
  { label: 'Economics', hasDropdown: true },
  { label: 'Developers', hasDropdown: false },
  { label: 'Governance', hasDropdown: true },
]

export default function Navbar() {
  return (
    <motion.nav
      className="flex items-center justify-between py-6 px-6 md:px-10 w-full relative z-10"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Left spacer / Desktop logo */}
      <div className="flex-1 hidden md:flex items-center">
        <motion.span
          className="font-normal tracking-tighter text-xl text-[rgba(30,50,90,0.9)] select-none"
          whileHover={{ scale: 1.04 }}
          style={{ cursor: 'pointer' }}
        >
          RIVR
        </motion.span>
      </div>

      {/* Center Menu */}
      <ul className="hidden md:flex items-center gap-8 text-[rgb(45,45,45)] font-normal text-sm">
        {navItems.map((item) => (
          <li
            key={item.label}
            className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group"
          >
            {item.label}
            {item.hasDropdown && (
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Logo */}
      <div className="md:hidden">
        <span className="font-normal tracking-tighter text-xl text-[rgba(30,50,90,0.9)]">RIVR</span>
      </div>

      {/* Right CTA */}
      <div className="flex-1 flex justify-end">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center bg-[rgba(30,50,90,0.8)] text-white rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2 gap-2 md:gap-3 hover:bg-[rgba(30,50,90,1)] transition-colors group"
        >
          <div className="bg-white/20 p-1 md:p-1.5 rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <span className="text-xs md:text-sm font-normal">Book Demo</span>
        </motion.button>
      </div>
    </motion.nav>
  )
}

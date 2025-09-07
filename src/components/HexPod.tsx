
import { motion } from 'framer-motion'

export default function HexPod({ label }: { label: string }) {
  return (
    <motion.div
      className="hex bg-white shadow-md border border-gray-200 w-24 h-24 grid place-items-center text-sm font-semibold"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <span className="text-gray-800">{label}</span>
    </motion.div>
  )
}

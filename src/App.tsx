
import { useState } from 'react'
import { motion } from 'framer-motion'
import Level from './components/Level'
import HexPod from './components/HexPod'
import { LEVELS } from './data/levels'

export default function App() {
  const [step, setStep] = useState(0) // 0..LEVELS.length
  const max = LEVELS.length

  const advance = () => setStep((s) => Math.min(s + 1, max))
  const reset = () => setStep(0)

  return (
    <div className="min-h-screen p-6">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Arpoge Workflow Demo</h1>
        <div className="flex gap-2">
          <button onClick={advance} className="px-3 py-2 rounded-xl bg-black text-white">Advance Workflow</button>
          <button onClick={reset} className="px-3 py-2 rounded-xl border">Reset</button>
        </div>
      </header>

      <div className="grid grid-cols-[1fr_320px] gap-8">
        {/* Levels stack */}
        <div className="flex flex-col gap-6">
          {LEVELS.map((lvl) => (
            <Level key={lvl.id} name={lvl.name} pods={lvl.pods} />
          ))}
        </div>

        {/* Moving customer pod */}
        <div>
          <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">Customer Pod</div>
          <div className="relative border rounded-2xl p-4 h-[520px] bg-white">
            <motion.div
              className="absolute left-1/2 -translate-x-1/2"
              initial={false}
              animate={{ top: `${(1 - step / max) * 440 + 20}px` }}
              transition={{ type: 'spring', stiffness: 180, damping: 18 }}
            >
              <HexPod label={`Step ${step} / ${max}`} />
            </motion.div>

            {/* rails / labels */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(max)].map((_, i) => (
                <div key={i} className="absolute left-4 right-4" style={{ top: `${(1 - (i+1)/max) * 440 + 32}px` }}>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{LEVELS[i].name}</span>
                    <span>{i+1}</span>
                  </div>
                  <div className="mt-1 h-px bg-gray-200" />
                </div>
              ))}
            </div>
          </div>

          <p className="mt-3 text-sm text-gray-600">
            Click <strong>Advance Workflow</strong> to move the customer pod upward through each department.
          </p>
        </div>
      </div>
    </div>
  )
}

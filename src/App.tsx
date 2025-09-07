import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Level from './components/Level'
import HexPod from './components/HexPod'
import { LEVELS, QUEUES } from './data/levels'

export default function App() {
  const queueNames = Object.keys(QUEUES) as (keyof typeof QUEUES)[]
  const [queue, setQueue] = useState<keyof typeof QUEUES>(
    () => (localStorage.getItem('queue') as any) ?? 'primary'
  )
  const activeLevels = QUEUES[queue].map(n => LEVELS.find(l => l.name === n)!).filter(Boolean)
  const max = activeLevels.length

  const [step, setStep] = useState(() => Number(localStorage.getItem('step') ?? 0))
  useEffect(() => localStorage.setItem('step', String(step)), [step])
  useEffect(() => localStorage.setItem('queue', queue), [queue])

  const advance = () => setStep(s => Math.min(s + 1, max))
  const reset = () => setStep(0)

  return (
    <div className="min-h-screen p-6">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Arpoge Workflow Demo</h1>
        <div className="flex gap-2 items-center">
          <select
            className="border rounded-xl px-3 py-2"
            value={queue}
            onChange={e => setQueue(e.target.value as any)}
          >
            {queueNames.map(q => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </select>
          <button onClick={advance} className="px-3 py-2 rounded-xl bg-black text-white">
            Advance
          </button>
          <button onClick={reset} className="px-3 py-2 rounded-xl border">
            Reset
          </button>
        </div>
      </header>

      <div className="grid grid-cols-[1fr_320px] gap-8">
        <div className="flex flex-col gap-6">
          {activeLevels.map(lvl => (
            <Level key={lvl.id} name={lvl.name} pods={lvl.pods} />
          ))}
        </div>

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
          </div>

          <p className="mt-3 text-sm text-gray-600">
            Click <strong>Advance</strong> to move the customer pod upward through the selected
            queue.
          </p>
        </div>
      </div>
    </div>
  )
}

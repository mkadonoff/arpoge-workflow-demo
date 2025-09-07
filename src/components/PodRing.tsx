import HexPod from './HexPod'

export default function PodRing({ center, ring = [] as string[] }) {
  // take up to 6 ring labels
  const labels = ring.slice(0,6)
  const radius = 80
  return (
    <div className="relative w-[240px] h-[240px]">
      {/* center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <HexPod label={center} />
      </div>
      {/* ring */}
      {labels.map((lbl, i) => {
        const angle = (i / labels.length) * 2 * Math.PI
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        return (
          <div
            key={lbl}
            className="absolute left-1/2 top-1/2"
            style={{ transform: `translate(${x}px, ${y}px)` }}
          >
            <HexPod label={lbl} />
          </div>
        )
      })}
    </div>
  )
}

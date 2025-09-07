
import HexPod from './HexPod'

export default function Level({ name, pods }: { name: string; pods: string[] }) {
  return (
    <div className="flex items-center gap-6 w-full">
      <div className="w-48 text-right pr-4">
        <div className="text-xs uppercase tracking-wide text-gray-500">Level</div>
        <div className="text-base font-semibold text-gray-900">{name}</div>
      </div>
      <div className="grid grid-cols-6 gap-4">
        {pods.slice(0,6).map((p) => (
          <HexPod key={p} label={p} />
        ))}
      </div>
    </div>
  )
}

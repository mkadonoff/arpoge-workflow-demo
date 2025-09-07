import PodRing from './PodRing'

export default function Level({ name, pods }: { name: string; pods: string[] }) {
  return (
    <div className="flex items-center gap-6 w-full">
      <div className="w-48 text-right pr-4">
        <div className="text-xs uppercase tracking-wide text-gray-500">Level</div>
        <div className="text-base font-semibold text-gray-900">{name}</div>
      </div>
      <PodRing center="Workgroup" ring={pods} />
    </div>
  )
}

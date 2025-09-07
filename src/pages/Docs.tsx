export default function Docs() {
  return (
    <div className="max-w-2xl p-6">
      <h2 className="text-xl font-bold mb-2">Arpoge Workflow MVP</h2>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Pods move upward through the selected queue (floors).</li>
        <li>Each level renders a 6-pod ring around a central workgroup.</li>
        <li>Advance/Reset controls drive the elevator step.</li>
        <li>State persists across refresh (localStorage).</li>
      </ul>

      <h3 className="font-semibold mt-4">How to modify</h3>
      <ol className="list-decimal pl-6 text-sm space-y-1">
        <li>Edit <code>src/data/levels.ts</code> to change names and queues.</li>
        <li>Update ring labels via each level’s <code>pods</code> array.</li>
        <li>Style hex in <code>src/styles.css</code> (<code>.hex</code> clip-path).</li>
      </ol>
    </div>
  )
}

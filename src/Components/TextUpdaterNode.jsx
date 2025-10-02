import { Position, Handle, useStore } from "@xyflow/react";

export default function TextUpdaterNode({ id, data }) {
  const edges = useStore((state) => state.edges);

  const hasSourceConnection = edges.some((e) => e.source === id);

  return (
    <div className="text-updater-node">
      <div
        className="rounded-md w-64 bg-white"
        style={{
          boxShadow:
            '0 4px 6px rgba(0,0,0,0.1), 0 8px 20px rgba(0,0,0,0.08), 0 12px 40px rgba(0,0,0,0.06)',
        }}
      >
        {/* Top label */}
        <div className="bg-emerald-200 p-1 rounded-t-md text-center font-medium">
          Send Message
        </div>

        {/* Message content */}
        <div className="p-2.5">{data.message}</div>
      </div>

      {/* Source handle - only 1 outgoing edge allowed */}
      <Handle
        type="source"
        position={Position.Left}
        style={{
          background: hasSourceConnection ? "#aaa" : "#16a34a",
          pointerEvents: hasSourceConnection ? "none" : "auto",
        }}
      />

      {/* Target handle - unlimited incoming edges */}
      <Handle type="target" position={Position.Right} />
    </div>
  );
}

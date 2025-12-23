export default function PreviewPanel({ filters }) {
  return (
    <div>
      <h2 className="text-2xl font-extrabold mb-8">
        Selected Data
      </h2>

      <div className="space-y-5">
        {Object.entries(filters).map(([key, value]) => (
          <div
            key={key}
            className="flex justify-between items-center bg-white px-4 py-3 rounded-xl shadow-sm"
          >
            <span className="text-gray-500 capitalize">{key}</span>
            <span className="font-semibold text-gray-900">
              {value || "Blank"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PreviewPanel({ filters }) {
  return (
    <div className="
      bg-white rounded-3xl p-8
      shadow-sm ring-1 ring-gray-200
    ">
      <h2 className="text-xl font-bold mb-6">
        Selected Data
      </h2>

      <div className="space-y-4 text-sm">
        <Row label="Platform" value={filters.platform} />
        <Row label="Country" value={filters.country} />
        <Row label="Date Range" value={filters.dateRange} />
        <Row label="Category" value={filters.category} />
        <Row label="Result Type" value={filters.resultType} />
        <Row label="Result Count" value={filters.resultCount} />
      </div>
    </div>
  );
}

const Row = ({ label, value }) => (
  <div className="flex justify-between items-center bg-gray-50 rounded-xl px-4 py-3">
    <span className="text-gray-500">{label}</span>
    <span className="font-medium text-gray-900">
      {value || "Blank"}
    </span>
  </div>
);

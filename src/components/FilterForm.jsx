export default function FilterForm({ filters, setFilters }) {

  const update = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

const handleSubmit = async () => {
  await fetch(
    "https://vdev0800.app.n8n.cloud/webhook/scraper-input",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filters),
    }
  );

  alert("Data sent to n8n!");
};


  const RadioCard = ({ name, value, label }) => {
    const selected = filters[name] === value;

    return (
      <label
        className={`
          flex items-center gap-3 px-5 py-4 rounded-2xl cursor-pointer
          bg-white transition-all
          ${selected
            ? "ring-2 ring-black shadow-sm"
            : "ring-1 ring-gray-200 hover:ring-gray-400"}
        `}
      >
        <input
          type="radio"
          checked={selected}
          onChange={() => update(name, value)}
          className="accent-black"
        />
        <span className="text-sm font-medium">{label}</span>
      </label>
    );
  };

  return (
    <div className="space-y-10">

      <h2 className="text-2xl font-bold">Filters</h2>

      {/* PLATFORM */}
      <div className="space-y-4">
        <p className="text-sm font-semibold text-gray-500 uppercase">Select Platform</p>
        <div className="grid grid-cols-2 gap-4">
          <RadioCard name="platform" value="Reddit" label="Reddit" />
          <RadioCard name="platform" value="Quora" label="Quora" />
          <RadioCard name="platform" value="Instagram" label="Instagram" />
          <RadioCard name="platform" value="YouTube" label="YouTube" />
        </div>
      </div>

      {/* COUNTRY */}
      <div className="space-y-2">
        <p className="text-sm font-semibold text-gray-500 uppercase">Country</p>

        <input
          type="text"
          list="country-list"
          placeholder="Search country"
          value={filters.country || ""}
          onChange={(e) => update("country", e.target.value)}
          className="
            w-full px-5 py-4 rounded-2xl
            bg-gray-50 ring-1 ring-gray-200
            focus:ring-2 focus:ring-black outline-none
          "
        />

        <datalist id="country-list">
          <option value="India" />
          <option value="United States" />
          <option value="United Kingdom" />
          <option value="Canada" />
          <option value="Australia" />
          <option value="Germany" />
          <option value="France" />
          <option value="Italy" />
          <option value="Japan" />
          <option value="Singapore" />
          <option value="United Arab Emirates" />
          <option value="South Africa" />
        </datalist>
      </div>

      {/* DATE RANGE */}
      <div className="space-y-4">
        <p className="text-sm font-semibold text-gray-500 uppercase">Date Range</p>
        <div className="grid grid-cols-2 gap-4">
          <RadioCard name="dateRange" value="Past 7 Days" label="Past 7 Days" />
          <RadioCard name="dateRange" value="Past 1 Month" label="Past 1 Month" />
          <RadioCard name="dateRange" value="Past 30 Days" label="Past 30 Days" />
          <RadioCard name="dateRange" value="Past 1 Year" label="Past 1 Year" />
        </div>
      </div>

      {/* CATEGORY */}
      <div className="space-y-4">
        <p className="text-sm font-semibold text-gray-500 uppercase">Category</p>
        <div className="grid grid-cols-2 gap-4">
          <RadioCard name="category" value="Entertainment" label="Entertainment" />
          <RadioCard name="category" value="Technology" label="Technology" />
          <RadioCard name="category" value="Books" label="Books" />
          <RadioCard name="category" value="Movies" label="Movies" />
          <RadioCard name="category" value="Comedy" label="Comedy" />
          <RadioCard name="category" value="Artificial Intelligence" label="Artificial Intelligence" />
        </div>
      </div>

      {/* RESULT TYPE */}
      <div className="space-y-4">
        <p className="text-sm font-semibold text-gray-500 uppercase">Type of Result</p>
        <div className="grid grid-cols-2 gap-4">
          <RadioCard name="resultType" value="Most Trending" label="Most Trending" />
          <RadioCard name="resultType" value="Highly Rated" label="Highly Rated" />
        </div>
      </div>

      {/* RESULT COUNT */}
      <div className="space-y-4">
        <p className="text-sm font-semibold text-gray-500 uppercase">Number of Results</p>
        <div className="grid grid-cols-3 gap-4">
          <RadioCard name="resultCount" value={10} label="10" />
          <RadioCard name="resultCount" value={30} label="30" />
          <RadioCard name="resultCount" value={50} label="50" />
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="
          w-full mt-10 py-4 rounded-2xl
          bg-black text-white text-lg font-semibold
          hover:bg-gray-900 active:scale-[0.98]
          transition-all
        "
      >
        Scrap Data
      </button>


    </div>
  );
}

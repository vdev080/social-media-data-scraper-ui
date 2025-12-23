import { useEffect, useState } from "react";

export default function FilterForm({ filters, setFilters }) {

  /* ================= HELPERS ================= */
  const update = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  /* ================= COUNTRY STATES ================= */
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  /* ================= FETCH COUNTRIES ================= */
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => {
        const list = data
          .map(item => item?.name?.common)
          .filter(Boolean)
          .sort();
        setCountries(list);
      })
      .catch(err => console.error("Country API error:", err));
  }, []);

  /* ================= SYNC SELECTED COUNTRY ================= */
  useEffect(() => {
    setQuery(filters.country || "");
  }, [filters.country]);

  const filteredCountries = countries.filter(c =>
    c.toLowerCase().includes(query.toLowerCase())
  );

  /* ================= RADIO CARD ================= */
  const RadioCard = ({ name, value, label }) => {
    const selected = filters[name] === value;

    return (
      <label
        className={`
          flex items-center gap-3 px-5 py-4 rounded-2xl cursor-pointer
          transition-all bg-white
          ${selected
            ? "ring-2 ring-black shadow-sm"
            : "ring-1 ring-gray-200 hover:ring-gray-400"}
        `}
      >
        <input
          type="radio"
          name={name}
          checked={selected}
          onChange={() => update(name, value)}
          className="accent-black"
        />
        <span className="text-sm font-medium text-gray-800">
          {label}
        </span>
      </label>
    );
  };

  /* ================= UI ================= */
  return (
    <div className="space-y-10">

      <h2 className="text-2xl font-bold">Filters</h2>

      {/* PLATFORM */}
      <div className="space-y-4">
        <p className="text-sm font-semibold text-gray-500 uppercase">
          Select Platform
        </p>
        <div className="grid grid-cols-2 gap-4">
          <RadioCard name="platform" value="Reddit" label="Reddit" />
          <RadioCard name="platform" value="Quora" label="Quora" />
          <RadioCard name="platform" value="Instagram" label="Instagram" />
          <RadioCard name="platform" value="YouTube" label="YouTube" />
        </div>
      </div>

      {/* COUNTRY AUTOCOMPLETE */}
      <div className="space-y-2 relative">
        <p className="text-sm font-semibold text-gray-500 uppercase">
          Country
        </p>

        <input
          type="text"
          placeholder="Search country"
          value={query}
          onChange={(e) => {
            const val = e.target.value;
            setQuery(val);
            setShowDropdown(true);
            update("country", val);
          }}
          onFocus={() => setShowDropdown(true)}
          className="
            w-full px-5 py-4 rounded-2xl
            bg-gray-50 ring-1 ring-gray-200
            focus:ring-2 focus:ring-black outline-none
            text-sm
          "
        />

        {showDropdown && query && (
          <div
            className="
              absolute z-30 w-full mt-2
              bg-white rounded-2xl shadow-lg
              ring-1 ring-gray-200
              max-h-60 overflow-auto
            "
          >
            {filteredCountries.length > 0 ? (
              filteredCountries.slice(0, 10).map((country, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => {
                    setQuery(country);
                    update("country", country);
                    setShowDropdown(false);
                  }}
                  className="
                    w-full text-left px-5 py-3 text-sm
                    hover:bg-gray-100 transition
                  "
                >
                  {country}
                </button>
              ))
            ) : (
              <div className="px-5 py-3 text-sm text-gray-400">
                No results found
              </div>
            )}
          </div>
        )}
      </div>

      {/* DATE RANGE */}
      <div className="space-y-4">
        <p className="text-sm font-semibold text-gray-500 uppercase">
          Date Range
        </p>
        <div className="grid grid-cols-2 gap-4">
          <RadioCard name="dateRange" value="Past 7 Days" label="Past 7 Days" />
          <RadioCard name="dateRange" value="Past 1 Month" label="Past 1 Month" />
          <RadioCard name="dateRange" value="Past 30 Days" label="Past 30 Days" />
          <RadioCard name="dateRange" value="Past 1 Year" label="Past 1 Year" />
        </div>
      </div>

      {/* CATEGORY */}
      <div className="space-y-4">
        <p className="text-sm font-semibold text-gray-500 uppercase">
          Category
        </p>
        <div className="grid grid-cols-2 gap-4">
          <RadioCard name="category" value="Entertainment" label="Entertainment" />
          <RadioCard name="category" value="Technology" label="Technology" />
          <RadioCard name="category" value="Books" label="Books" />
          <RadioCard name="category" value="Movies" label="Movies" />
          <RadioCard name="category" value="Comedy" label="Comedy" />
          <RadioCard
            name="category"
            value="Artificial Intelligence"
            label="Artificial Intelligence"
          />
        </div>
      </div>

      {/* TYPE OF RESULT */}
      <div className="space-y-4">
        <p className="text-sm font-semibold text-gray-500 uppercase">
          Type of Result
        </p>
        <div className="grid grid-cols-2 gap-4">
          <RadioCard name="resultType" value="Most Trending" label="Most Trending" />
          <RadioCard name="resultType" value="Highly Rated" label="Highly Rated" />
        </div>
      </div>

      {/* NUMBER OF RESULTS */}
      <div className="space-y-4">
        <p className="text-sm font-semibold text-gray-500 uppercase">
          Number of Results
        </p>
        <div className="grid grid-cols-3 gap-4">
          <RadioCard name="resultCount" value={10} label="10" />
          <RadioCard name="resultCount" value={30} label="30" />
          <RadioCard name="resultCount" value={50} label="50" />
        </div>
      </div>

      {/* CTA */}
      <button
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

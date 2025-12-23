import { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import FilterForm from "../components/FilterForm";
import PreviewPanel from "../components/PreviewPanel";

export default function Home() {
  const [filters, setFilters] = useState({
    platform: "",
    country: "",
    dateRange: "",
    category: "",
    resultType: "",
    resultCount: ""
  });

  return (
    <div className="min-h-screen bg-gray-50 bg-[#f6f7f9]">

      <Header />
      <Banner />

      {/* Main Box */}
        <section className="py-14">
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] grid grid-cols-1 md:grid-cols-2 overflow-hidden">

                {/* LEFT */}
                <div className="p-10 border-r">
                <FilterForm filters={filters} setFilters={setFilters} />
                </div>

                {/* RIGHT */}
                <div className="p-10 bg-gray-50">
                <PreviewPanel filters={filters} />
                </div>

            </div>
        </section>
    </div>
  );
}

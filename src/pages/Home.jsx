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
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                    {/* LEFT – SCROLLABLE */}
                    <div>
                    <FilterForm filters={filters} setFilters={setFilters} />
                    </div>

                    {/* RIGHT – STICKY */}
                    <div className="sticky top-24">
                    <PreviewPanel filters={filters} />
                    </div>

                </div>
            </div>
        </section>
    </div>
  );
}

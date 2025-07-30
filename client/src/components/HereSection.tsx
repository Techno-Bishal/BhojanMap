import { useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const HereSection = () => {
  const [searchText, setSearchText] = useState<string>("");
  const navigate = useNavigate();

  return (
    <section
      aria-label="Search Mithoghar dishes"
      className="flex flex-col md:flex-row max-w-7xl mx-auto md:p-10 rounded-lg items-center justify-center m-4 gap-20"
    >
      <div className="flex flex-col gap-10 md:w-[40%]">
        <div className="flex flex-col gap-5">
          <h1 className="font-extrabold text-4xl md:text-5xl leading-tight text-gray-900 dark:text-white">
            Mithoghar — Taste the Tradition 🍛
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-md">
            Enjoy authentic Nepali dishes and Other dishes made with love. From momo to thakali,
            we bring the flavors of home right to your plate.
          </p>
        </div>

        <div className="relative flex items-center gap-2">
          <Input
            type="search"
            aria-label="Search Mithoghar dishes or locations"
            value={searchText}
            placeholder="Search dish or city (e.g. momo, Kathmandu)"
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-10 pr-10 shadow-md focus:ring-2 focus:ring-lime-400 transition"
          />
          <Search className="text-lime-400 absolute inset-y-2 left-3 pointer-events-none" />
          <Button
            onClick={() => navigate(`/search/${searchText.trim()}`)}
            disabled={!searchText.trim()}
            className="bg-green-600 hover:bg-green-700 shadow-md disabled:cursor-not-allowed transition px-6 py-2 text-white"
          >
            Search
          </Button>
        </div>
      </div>

      <div className="w-full md:w-[50%]">
        <img
          src="https://plus.unsplash.com/premium_photo-1723120354689-82ac201cc9aa?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Traditional Nepali food at Mithoghar"
          className="object-cover w-full max-h-[500px] rounded-lg shadow-lg"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default HereSection;

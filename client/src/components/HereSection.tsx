import { useState } from "react";
import { Input } from "./ui/input";
import { Search} from "lucide-react";
import { Button } from "./ui/button";
import HereImage from "@/assets/hero_pizza.png";
import { useNavigate } from "react-router-dom";

const HereSection = () => {
  const [searchText, setSearchText] = useState<string>("");
  const navigate = useNavigate();

  
  return (
    <section
      aria-label="Search restaurants"
      className="flex flex-col md:flex-row max-w-7xl mx-auto md:p-10 rounded-lg items-center justify-center m-4 gap-20"
    >
      <div className="flex flex-col gap-10 md:w-[40%]">
        <div className="flex flex-col gap-5">
          <h1 className="font-extrabold text-4xl md:text-5xl leading-tight text-gray-900 dark:text-white">
            Order Food Anytime & Anywhere
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-md">
            Hey! Our delicious food is waiting for you. We're always nearby, ready to satisfy your cravings.
          </p>
        </div>
        <div className="relative flex items-center gap-2">
          <Input
            type="search"
            aria-label="Search restaurants by name, city, or country"
            value={searchText}
            placeholder="Search restaurant by name, city & country"
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-10 pr-10 shadow-md focus:ring-2 focus:ring-lime-400 transition"
          />
          <Search className="text-lime-400 absolute inset-y-2 left-3 pointer-events-none" />
          {searchText && (
            <button></button>
          )}
          <Button
            onClick={() => navigate(`/search/${searchText.trim()}`)}
            disabled={!searchText.trim()}
            className="bg-green-600 hover:bg-green-700 shadow-md  disabled:cursor-not-allowed transition px-6 py-2 text-white"
          >
            Search
          </Button>
        </div>
      </div>
      <div className="w-full md:w-[50%]">
        <img
          src={HereImage}
          alt="Delicious pizza on wooden board"
          className="object-cover w-full max-h-[500px] "
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default HereSection;
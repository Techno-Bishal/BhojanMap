import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import BannerImage from "@/assets/CTA.jpg"; // Import your banner image here

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative h-50 rounded-lg p-8 max-w-4xl mx-auto text-center mt-40 bg-orange-100 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      {/* Optional overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>

      <div className="relative z-10 text-white">
        <h2 className="text-3xl font-bold mb-4">Hungry? Order your favorite food now!</h2>
        <p className="mb-6">
          Freshly cooked meals delivered straight to your doorstep.
        </p>
        <Button
          onClick={() => navigate("/search/:text")}
          className="bg-green-600 hover:bg-green-700 px-6 py-3 text-lg"
        >
          Explore Restaurants
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;

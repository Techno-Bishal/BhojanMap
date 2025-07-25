import { useRestaurantStore } from "@/store/useRestaurantStore";
import AvailableMenu from "./AvailableMenu";
import { Badge } from "./ui/badge";
import { Timer } from "lucide-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantDetail = () => {
  const params = useParams();
  const { singleRestaurant, getSingleRestaurant } = useRestaurantStore();

  useEffect(() => {
    getSingleRestaurant(params.id!);
  }, [params.id]);

  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="w-full">
        <div className="relative w-full h-32 md:h-64 lg:h-72 rounded-lg shadow-lg overflow-hidden">
          <img
            src={singleRestaurant?.imageUrl || "Loading..."}
            alt="res_image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="my-5">
            <h1 className="font-medium text-xl text-gray-900 dark:text-gray-100">
              {singleRestaurant?.restaurantName || "Loading..."}
            </h1>
            <div className="flex gap-2 my-2">
              {singleRestaurant?.cuisines.map((cuisine: string, idx: number) => (
                <Badge
                  key={idx}
                  className="bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-200"
                >
                  {cuisine}
                </Badge>
              ))}
            </div>
            <div className="flex md:flex-row flex-col gap-2 my-5">
              <div className="flex items-center gap-2">
                <Timer className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h1 className="flex items-center gap-2 font-medium text-gray-800 dark:text-gray-300">
                  Delivery Time:{" "}
                  <span className="text-green-600 dark:text-green-400">
                    {singleRestaurant?.deliveryTime || "NA"} mins
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        {singleRestaurant?.menus && <AvailableMenu menus={singleRestaurant?.menus!} />}
      </div>
    </div>
  );
};

export default RestaurantDetail;

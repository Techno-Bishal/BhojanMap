import { MenuItem } from "@/types/restaurantType";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { useCartStore } from "@/store/useCartStore";
import { useNavigate } from "react-router-dom";

const AvailableMenu = ({ menus }: { menus: MenuItem[] }) => {
  const { addToCart } = useCartStore();
  const navigate = useNavigate();

  return (
    <div className="md:p-4">
      <h1 className="text-xl md:text-2xl font-extrabold mb-6 text-gray-900 dark:text-gray-100">
        Available Menus
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {menus.map((menu: MenuItem) => (
          <Card
            key={menu._id}
            className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden flex flex-col h-full"
          >
            <img
              src={menu.image}
              alt={menu.name}
              className="w-full h-40 object-cover"
            />

            <CardContent className="p-4 flex-grow">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                {menu.name}
              </h2>

              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">
                {menu.description}
              </p>

              <h3 className="text-lg font-semibold mt-4">
                Price:{" "}
                <span className="text-green-600 dark:text-green-400">
                  ₹{menu.price}
                </span>
              </h3>
            </CardContent>

            <CardFooter className="p-4 mt-auto">
              <Button
                onClick={() => {
                  addToCart(menu);
                  navigate("/cart");
                }}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AvailableMenu;

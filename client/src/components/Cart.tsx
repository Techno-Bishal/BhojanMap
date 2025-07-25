import { Minus, Plus, Trash2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useState } from "react";
import CheckoutConfirmPage from "./CheckoutConfirmPage";
import { useCartStore } from "@/store/useCartStore";
import { CartItem } from "@/types/cartType";



const Cart = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { cart, decrementQuantity, incrementQuantity, removeFromTheCart, clearCart } = useCartStore();

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col max-w-7xl mx-auto my-10 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Your Cart</h2>
        <Button variant="ghost" onClick={clearCart} className="text-red-500 hover:underline">
          Clear All
        </Button>
      </div>

      {cart.length === 0 ? (
        <div className="text-center text-gray-500 dark:text-gray-400 mt-10">
          Your cart is empty.
        </div>
      ) : (
        <>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Items</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Total</TableHead>
                <TableHead className="text-right">Remove</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cart.map((item: CartItem, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Avatar>
                      <AvatarImage src={item.image} alt={item.name} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell className="text-gray-700 dark:text-gray-300">{item.name}</TableCell>
                  <TableCell>${item.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <div className="w-fit flex items-center rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
                      <Button
                        onClick={() => decrementQuantity(item._id)}
                        size="icon"
                        variant="ghost"
                        className="rounded-full text-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800"
                      >
                        <Minus />
                      </Button>
                      <Button
                        size="icon"
                        disabled
                        variant="ghost"
                        className="font-bold text-base"
                      >
                        {item.quantity}
                      </Button>
                      <Button
                        onClick={() => incrementQuantity(item._id)}
                        size="icon"
                        className="rounded-full bg-green-600 text-white hover:bg-green-700"
                      >
                        <Plus />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>${(item.price * item.quantity).toFixed(2)}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => removeFromTheCart(item._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow className="text-xl font-bold">
                <TableCell colSpan={4}>Total</TableCell>
                <TableCell colSpan={2} className="text-right">
                  ${totalAmount.toFixed(2)}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>

          <div className="flex justify-end my-5">
            <Button
              onClick={() => setOpen(true)}
              className="bg-green-600 hover:bg-green-600 text-white px-6 py-3 text-lg"
            >
              Proceed To Checkout
            </Button>
          </div>
        </>
      )}

      <CheckoutConfirmPage open={open} setOpen={setOpen} />
    </div>
  );
};

export default Cart;

import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";
import foodItems from "../data/foodItems.json";
import electronicItems from "../data/electronicItems.json";
import otherItems from "../data/otherItems.json";
import christmasItems from "../data/christmasItems.json";

type ShoppingCartProps = {
  isOpen: boolean;
  category: "food" | "electronics" | "christmas" | "others";
};

export function ShoppingCart({ isOpen, category }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();

  // Determine which items to use based on the category
  let currentItems = storeItems;
  if (category === "food") {
    currentItems = foodItems;
  } else if (category === "electronics") {
    currentItems = electronicItems;
  } else if (category === "christmas") {
    currentItems = christmasItems;
  } else if (category === "others") {
    currentItems = otherItems;
  }

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((cartItem) => {
            const item = currentItems.find((i) => i.id === cartItem.id);
            if (!item) return null; // Skip cart items that don't match the category
            return <CartItem key={cartItem.id} {...cartItem} />;
          })}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = currentItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

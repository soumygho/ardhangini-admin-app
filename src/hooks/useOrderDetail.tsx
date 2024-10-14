import { useContext } from "react";
import { OrderContext } from "../context/order management/order-mangement-context";

// Custom hook to get order details based on orderId
const useOrderDetail = (orderId?: string) => {
  // Access the context
  const context = useContext(OrderContext);

  // Check if the context is undefined
  if (context === undefined) {
    throw new Error("useOrderDetail must be used within an OrderProvider");
  }

  // Destructure the orders from the context
  const { orders } = context;

  // Clean up the orderId if it has a prefix
  const cleanedOrderId = orderId?.replace(/^order-id:/, "");

  // Return the order based on the cleaned orderId
  const order = cleanedOrderId
    ? orders.find((order) => order.orderId === cleanedOrderId)
    : undefined;

  return order;
};

export default useOrderDetail;

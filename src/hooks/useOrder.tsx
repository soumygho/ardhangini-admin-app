import React from "react";
import { OrderContext } from "../context/order management/order-mangement-context";

export const useOrder = () => {
  const context = React.useContext(OrderContext);
  if (!context) {
    throw new Error("useOrderContext must be used within an OrderProvider");
  }
  return context;
};

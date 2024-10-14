// src/context/OrderContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { fetchOrders, updateOrder } from "./orders.service";
import { DateRange } from "react-day-picker";
import data from "./data.json";

interface PaymentInfo {
  id: string;
  totalAmount: string;
  paymentMethod: string;
  paymentStatus: string;
  gatewayOrderId: string | null;
  gatewayPaymentId: string | null;
  failureReason: string | null;
}

interface CartLineItem {
  id: string;
  createdAt: string;
  updatedAt: string;
  productId: string;
  productName: string;
  quantity: string;
  finalTotalPrice: string;
  offerPrice: string;
}

interface orderTimeLine {
  id: string;
  eventDate: string;
  eventType: string;
  description: string | null;
}

interface Order {
  cartId: string;
  userId: string;
  cartLineItems: CartLineItem[];
  totalActualPrice: string;
  totalFinalPrice: string;
  totalCgst: string;
  totalSgst: string;
  OrderStatus: string;
  orderType: string;
  orderId: string;
  billingAddress: string;
  shippingAddress: string;
  orderTimeLine: orderTimeLine[];
  paymentInfo: PaymentInfo;
}

interface OrderContextProps {
  orders: Order[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filterDate: DateRange | undefined;
  setFilterDate: (date: DateRange | undefined) => void;
  updateOrder: (orderId: string, updateData: Partial<Order>) => Promise<void>;
  fetchOrders: () => Promise<void>;
  getOrderById: (orderId: string) => Order | undefined;
}

export const OrderContext = createContext<OrderContextProps | undefined>(
  undefined
);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [orders, setOrders] = useState<Order[]>(data);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDate, setFilterDate] = useState<DateRange | undefined>(
    undefined
  );

  // function to fetch the order
  const fetchOrdersData = async () => {
    try {
      const data = await fetchOrders();
      setOrders(data); // Ensure data is an array
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  // function to edit and update
  const updateOrderData = async (orderId: string, updateData: object) => {
    try {
      await updateOrder(orderId, updateData);
      await fetchOrdersData(); // Refresh data after update
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  // New function to get order by ID
  const getOrderById = (orderId: string): Order | undefined => {
    return orders.find((order) => order.orderId === orderId);
  };

  useEffect(() => {
    fetchOrdersData();
  }, []);

  const filteredOrders = orders
    ?.filter(
      (order) =>
        order.orderId.includes(searchQuery) ||
        order.cartLineItems.some((item) =>
          item.productName.includes(searchQuery)
        )
    )
    .filter((order) => {
      // Find the earliest date from cartLineItems, assuming you want to filter by the earliest date
      const earliestDate = order.orderTimeLine.reduce((earliest, item) => {
        const itemDate = new Date(item.eventDate);
        return itemDate < earliest ? itemDate : earliest;
      }, new Date());

      // filter if both 'from' and 'to' is given
      if (filterDate?.from && filterDate?.to) {
        return (
          earliestDate >= filterDate?.from && earliestDate <= filterDate?.to
        );
      }

      // filter if only 'from' is given
      if (filterDate?.from) {
        return earliestDate >= filterDate?.from;
      }

      // filter if only 'to' is given
      if (filterDate?.to) {
        return earliestDate <= filterDate?.to;
      }

      return true;
    });

  return (
    <OrderContext.Provider
      value={{
        orders: data,
        searchQuery,
        setSearchQuery,
        filterDate,
        setFilterDate,
        updateOrder: updateOrderData,
        fetchOrders: fetchOrdersData,
        getOrderById,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

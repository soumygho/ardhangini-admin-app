import { useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Calendar, ChevronDown, Eye, Pencil } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SingleOrderItem from "./single-order-item";

interface OrderItemProps {
  orders: Array<any>;
}

function OrderItem({ orders }: OrderItemProps) {
  // Create state for each order to track whether to show more items
  const [expandedOrders, setExpandedOrders] = useState<{
    [key: string]: boolean;
  }>({});
  const navigate = useNavigate();

  // Toggle the showMore state for a specific order based on its orderId
  const toggleShowMore = (orderId: string) => {
    setExpandedOrders((prev) => ({
      ...prev,
      [orderId]: !prev[orderId],
    }));
  };

  const items = {
    image:
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "Red",
  };

  return (
    <>
      <div className="order-item-component my-2 text-sm space-y-2">
        {orders.map((order) => {
          const isExpanded = expandedOrders[order.orderId] || false;

          return (
            <div
              key={order.cartId}
              className="main py-3 px-5 rounded-md bg-white"
            >
              {/* orderId, payment-status, total-amount */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-4">
                  <h1>
                    <strong className="font-medium">
                      Order-ID: {order.orderId}
                    </strong>
                  </h1>
                  <Badge className="text-[0.6rem] tracking-wide h-5 bg-orange-100 border-orange-400 text-orange-600">
                    {order.paymentInfo.paymentStatus}
                  </Badge>
                </div>
                <strong className="font-medium">
                  ₹{Math.ceil(order.paymentInfo.totalAmount)}
                </strong>
              </div>

              {/* date-of-order, user-name, shopping-no */}
              <div className="text-slate-500 pt-2 relative">
                <div className="flex items-center text-xs gap-x-1">
                  <Calendar size={16} />
                  <span className="pr-1">
                    {order.orderTimeLine[0].eventDate}
                  </span>{" "}
                  |
                  <span className="px-1">
                    customer:
                    <small className="text-blue-500 text-xs pl-1 font-semibold">
                      customer name
                    </small>
                  </span>
                </div>

                {/* item-detail and edit-item button */}
                <div className="flex items-center gap-x-2 absolute right-0">
                  <Badge className="bg-green-100 text-green-600 border border-green-500 h-5 text-[0.6rem] hover:bg-green-100">
                    Order Created
                  </Badge>
                  <Button
                    variant="outline"
                    className="h-7 text-xs flex gap-x-1 font-semibold px-2"
                  >
                    <Pencil size={12} />
                    Edit
                  </Button>
                  <Button
                    variant="default"
                    className="h-7 text-xs bg-blue-600 font-semibold flex gap-x-1 px-3"
                    onClick={() => navigate(`/order-detail/${order.orderId}`)}
                  >
                    <Eye size={14} />
                    View
                  </Button>
                </div>
              </div>

              {/* Show the first item */}
              <SingleOrderItem
                image={order.cartLineItems[0].image || items.image}
                productName={order.cartLineItems[0].productName}
                color={order.cartLineItems[0].color || items.color}
                quantity={order.cartLineItems[0].quantity}
              />

              {/* Show 'More X items' button if there are more than 1 item */}
              {order.cartLineItems.length > 1 && !isExpanded && (
                <Button
                  variant="ghost"
                  className="text-xs font-semibold hover:bg-transparent text-slate-500 pl-0 mt-2"
                  onClick={() => toggleShowMore(order.orderId)}
                >
                  More {order.cartLineItems.length - 1} items
                  <ChevronDown size={16} className="mx-2" />
                </Button>
              )}

              {/* Conditionally render the rest of the items */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                      staggerChildren: 0.1,
                    }}
                  >
                    {order.cartLineItems.slice(1).map((item: any) => (
                      <SingleOrderItem
                        key={item.id}
                        image={item.image || items.image}
                        productName={item.productName}
                        color={item.color || items.color}
                        quantity={item.quantity}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Show 'Show less' button to collapse items */}
              {isExpanded && (
                <Button
                  variant="ghost"
                  className="text-xs text-blue-600 font-semibold mt-2 pl-0 hover:bg-transparent"
                  onClick={() => toggleShowMore(order.orderId)} // Collapse the specific order
                >
                  Show less
                </Button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default OrderItem;

import AllOrders from "./All-Orders";
import { OrderProvider } from "../../context/order management/order-mangement-context";

const OrderManagement = () => {
  return (
    <>
      <OrderProvider>
        <AllOrders />
      </OrderProvider>
    </>
  );
};

export default OrderManagement;

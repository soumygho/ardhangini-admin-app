import { useParams } from "react-router-dom";
import { Badge } from "../ui/badge";
import ActivityTimeLine from "./activity-timeline";
import CustomerInfo from "./customer-info";
import useOrderDetail from "../../hooks/useOrderDetail";

const OrderDetail = () => {
  const { orderId } = useParams();
  const orderItems = useOrderDetail(orderId);

  if (!orderItems) {
    return <div>Order not found.</div>;
  }
  const items = {
    color: "Blue",
    image:
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <>
      <div className="order-detail-component">
        <div className="main text-sm">
          {/* orderId, date, payment-status */}
          <div className="flex items-center gap-x-4">
            <h1 className="text-lg">
              Order : <strong>{orderItems.orderId}</strong>
            </h1>
            <span className="pr-1 font-medium">
              {orderItems.orderTimeLine[0].eventDate}
            </span>
            <Badge className="text-[0.6rem] tracking-wide h-5 bg-gray-500">
              {orderItems.paymentInfo.paymentStatus}
            </Badge>
          </div>

          <div className="flex gap-2 mt-2">
            <div className="w-2/3">
              <div className="bg-white rounded-md">
                {/* order-detail */}
                <h1 className="px-4 py-3 font-semibold">Order Detail</h1>
                <hr />
                {orderItems.cartLineItems.map((item, index) => (
                  <div key={index} className="flex justify-between py-2">
                    <div className="flex gap-4 px-4">
                      <img
                        src={items.image}
                        alt="item-image"
                        className="w-14 h-14 rounded object-cover mt-0.5"
                      />
                      <div className="flex flex-col gap-y-0.5">
                        <strong className="font-medium">
                          {item.productName}
                        </strong>
                        <span className="text-slate-500 text-xs">
                          Color: <strong className="px-1">{items.color}</strong>
                        </span>
                        <span className="text-slate-500 text-xs">
                          Quantity:{" "}
                          <strong className="font-medium px-1">
                            {item.quantity}
                          </strong>
                        </span>
                      </div>
                    </div>
                    <strong className="pr-5 font-medium">
                      ₹{Math.ceil(Number(item.offerPrice))}
                    </strong>
                  </div>
                ))}
                <hr className="my-1 mr-2 ml-3" />
                <div className="grid grid-cols-2 mb-3">
                  <div className=""></div>
                  <div className="pr-5 pt-1 space-y-1.5 mb-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 text-center">
                        SubTotal
                      </span>
                      <strong className="font-medium">
                        ₹{orderItems.totalActualPrice}
                      </strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Shipping</span>
                      <strong className="font-medium">$40.65</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">cgst</span>
                      <strong className="font-medium">
                        ₹{Math.ceil(Number(orderItems.totalCgst))}
                      </strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">sgst</span>
                      <strong className="font-medium">
                        ₹{Math.ceil(Number(orderItems.totalSgst))}
                      </strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Total</span>
                      <strong className="font-medium">$240.65</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* order history timeline */}
              <div className="bg-white rounded-md flex-grow">
                <ActivityTimeLine orderTimeLine={orderItems.orderTimeLine} />
              </div>
            </div>

            {/* customer-detail -> personal-detail, shipping-address, payment-detail */}
            <div className="bg-white w-1/3 rounded-md flex-grow h-full">
              <CustomerInfo address={orderItems.billingAddress} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;

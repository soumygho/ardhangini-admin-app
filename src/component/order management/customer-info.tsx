import { Box, Eye, MapPin } from "lucide-react";
import { Badge } from "../ui/badge";

interface AddressProps {
  address: string;
}

const CustomerInfo = ({ address }: AddressProps) => {
  return (
    <>
      <div className="customer-detail-component">
        <div className="main text-[0.8rem]">
          {/* customer-info */}
          <div className="px-4 pt-3">
            <h1 className="font-semibold text-[1rem]">Customer Info</h1>
            <div className="space-y-1 mt-2">
              <div className="flex items-center gap-x-6">
                <span className="text-slate-500">Name:</span>
                <span className="font-medium">John Willesc</span>
              </div>
              <div className="flex items-center gap-x-6">
                <span className="text-slate-500">Email:</span>
                <span className="font-medium">johnwill324@gmail.com</span>
              </div>
              <div className="flex items-center gap-x-6">
                <span className="text-slate-500">Phone:</span>
                <span className="font-medium">+12-2344-2423-23</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-blue-600 py-2">
              <Box size={14} />
              <small className="font-semibold">3 orders</small>
            </div>
          </div>
          <hr />

          {/* shipping info */}
          <div className="px-4 pt-3">
            <h1 className="text-lg font-semibold text-[1rem]">Shipping Info</h1>
            <div className="space-y-1 mt-2">
              <div className="grid grid-cols-3">
                <span className="text-slate-500">Address:</span>
                <span className="font-medium col-span-2">
                  {address.split(",")[0]}
                </span>
              </div>
              <div className="grid grid-cols-3">
                <span className="text-slate-500">Phone:</span>
                <span className="font-medium col-span-2">{address.split(",")[6]}</span>
              </div>
              <div className="grid grid-cols-3">
                <span className="text-slate-500">City:</span>
                <span className="font-medium col-span-2">{address.split(",")[3]}</span>
              </div>
              <div className="grid grid-cols-3">
                <span className="text-slate-500">State:</span>
                <span className="font-medium col-span-2">{address.split(",")[4]}</span>
              </div>
              <div className="grid grid-cols-3">
                <span className="text-slate-500">PinCode:</span>
                <span className="font-medium col-span-2">{address.split(",")[5]}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-blue-600 py-2 cursor-pointer">
              <MapPin size={14} />
              <small className="font-semibold">View Map</small>
            </div>
          </div>
          <hr />

          {/* payment info */}
          <div className="px-4 pt-3">
            <h1 className="text-lg font-semibold text-[1rem]">
              Payment Details
            </h1>
            <div className="space-y-1.5 mt-2">
              <div className="grid grid-cols-3">
                <span className="text-slate-500">Method:</span>
                <span className="font-medium col-span-2">Cash On Delivery</span>
              </div>
              <div className="grid grid-cols-3">
                <span className="text-slate-500">Status:</span>
                <span className="col-span-2">
                  <Badge className="text-[0.6rem] h-4 bg-orange-500 font-medium tracking-wide">
                    Pending
                  </Badge>
                </span>
              </div>
              <div className="grid grid-cols-3">
                <span className="text-slate-500">Total Amount:</span>
                <span className="font-medium col-span-2">$243.56</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-blue-600 py-2 cursor-pointer">
              <Eye size={14} />
              <small className="font-semibold">view transactions</small>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default CustomerInfo;

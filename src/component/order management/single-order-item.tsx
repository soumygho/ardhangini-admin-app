import React from "react";

interface props {
  image: string | any;
  productName: string;
  color: string;
  quantity: string | number;
}

const SingleOrderItem = ({ image, productName, color, quantity }: props) => {
  return (
    <>
      <div className="flex gap-x-4 pt-3">
        <img
          src={image}
          alt="item-image"
          className="w-14 h-14 rounded object-cover mt-0.5"
        />
        <div className="flex flex-col gap-y-0.5">
          <strong className="font-medium">{productName}</strong>
          <span className="text-slate-500 text-xs">
            color: <strong>{color}</strong>
          </span>
          <span className="text-slate-500 text-xs">Quantity: {quantity}</span>
        </div>
      </div>
    </>
  );
};

export default SingleOrderItem;

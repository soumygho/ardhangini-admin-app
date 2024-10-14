import { useOrder } from "../../hooks/useOrder";
import React from "react";
import SearchFilterEdit from "./search-filter";
import OrderItem from "./order-item";

const AllOrders = () => {
  const {
    orders,
    searchQuery,
    setSearchQuery,
    filterDate,
    setFilterDate,
    updateOrder,
  } = useOrder();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      {/* search-filter-edit  */}
      <SearchFilterEdit
        searchQuery={searchQuery}
        handleSearch={handleSearch}
        filterDate={filterDate}
        setFilterDate={setFilterDate}
      />

      {/* order item */}
      <OrderItem orders={orders} />
    </>
  );
};

export default AllOrders;

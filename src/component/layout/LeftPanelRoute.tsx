import React from "react";
import CategoryGrid from "../category/categorygrid";
import SubCategoryGrid from "../sub-category/SubCategorygrid";
import FabricGrid from "../fabric/FabricGrid";
import ProductTypeGrid from "../product-type/FabricGrid";
import ProductDetailsGrid from "../product-details/ProductDetailsGrid";
import ManufacturerGrid from "../manufacturer/ManufacturerGrid";
import { Link, Outlet, Route, Routes, useLocation } from "react-router-dom";
import ProductColorGrid from "../color/ColorGrid";
import ProductCollectionGrid from "../collection/CollectionGrid";
import ProductOccassionGrid from "../occassion/OccassionGrid";
import ProductStyleGrid from "../style/StyleGrid";
import ProductPrintGrid from "../product-print/PrintGrid";
// import OrderManagementGrid from "../order-management/ordermangementgrid";

function LeftPanelRoute() {
  const location = useLocation();
  const getStyle = (tabName: string) => {
    if (tabName) {
      if (tabName === "order-management" && location.pathname === "/") {
        return "text-start text-black my-2";
      }
      if (`/${tabName}` === location.pathname) {
        return "text-start text-black my-2";
      }
      return "text-start text-black my-2";
    }
  };

  return (
    <section className="py-5 bg-dark">
      <div className="container-fluid">
        {/* left side navigation Pane */}

        <div className="flex items-start p-3 text-white">
          <div
            className="nav flex-col me-3"
            id="v-pills-tab"
            aria-orientation="vertical"
            style={{ maxHeight: 600, overflowY: "scroll", flexFlow: "column" }}
          >
            <Link
              className={getStyle("order-management")}
              id="v-pills-management-tab"
              type="button"
              to={"/order-management"}
            >
              Order Management
            </Link>
            <Link
              className={getStyle("category")}
              id="v-pills-home-tab"
              type="button"
              to={"/category"}
            >
              Category Manager
            </Link>
            <Link
              className={getStyle("sub-category")}
              id="v-pills-profile-tab"
              type="button"
              to={"/sub-category"}
            >
              SubCategory Manager
            </Link>
            <Link
              className={getStyle("fabric")}
              id="v-pills-messages-tab"
              type="button"
              to={"/fabric"}
            >
              Fabric Manager
            </Link>
            <Link
              className={getStyle("product-type")}
              id="v-pills-settings-tab"
              type="button"
              to={"/product-type"}
            >
              Product Type Manager
            </Link>
            <Link
              className={getStyle("manufacturer")}
              id="v-pills-manufacturer-tab"
              type="button"
              to={"/manufacturer"}
            >
              Manufacturer Manager
            </Link>
            <Link
              className={getStyle("colour")}
              id="v-pills-manufacturer-tab"
              type="button"
              to={"/colour"}
            >
              Product Colour Manager
            </Link>
            <Link
              className={getStyle("collection")}
              id="v-pills-manufacturer-tab"
              type="button"
              to={"/collection"}
            >
              Product Collection Manager
            </Link>
            <Link
              className={getStyle("occassion")}
              id="v-pills-manufacturer-tab"
              type="button"
              to={"/occassion"}
            >
              Product Occassion Manager
            </Link>
            <Link
              className={getStyle("style")}
              id="v-pills-manufacturer-tab"
              type="button"
              to={"/style"}
            >
              Product Style Manager
            </Link>
            <Link
              className={getStyle("print")}
              id="v-pills-manufacturer-tab"
              type="button"
              to={"/print"}
            >
              Product Print Manager
            </Link>
            <Link
              className={getStyle("product-details")}
              id="v-pills-product-tab"
              type="button"
              to={"/product-details"}
            >
              Product Manager
            </Link>
          </div>
          <div
            className="tab-content col-10 px-4 py-5 bg-light"
            id="v-pills-tabContent"
          >
            <Routes>
              <Route path="/" element={<CategoryGrid />} />
              {/* <Route path="/" element={<OrderManagementGrid />} /> */}
              <Route path="category" element={<CategoryGrid />} />
              <Route path="sub-category" element={<SubCategoryGrid />} />
              <Route path="fabric" element={<FabricGrid />} />
              <Route path="product-type" element={<ProductTypeGrid />} />
              <Route path="product-details" element={<ProductDetailsGrid />} />
              <Route path="manufacturer" element={<ManufacturerGrid />} />
              <Route path="colour" element={<ProductColorGrid />} />
              <Route path="collection" element={<ProductCollectionGrid />} />
              <Route path="occassion" element={<ProductOccassionGrid />} />
              <Route path="style" element={<ProductStyleGrid />} />
              <Route path="print" element={<ProductPrintGrid />} />
              {/* <Route path="order-detail" element={<OrderDetails/>}/> */}
              {/* <Route path="*" element={<OrderManagementGrid />} /> */}
            </Routes>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftPanelRoute;

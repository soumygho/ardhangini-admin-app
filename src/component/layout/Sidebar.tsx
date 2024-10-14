import React from "react";
import {
  Grid,
  Tag,
  Shirt,
  Box,
  Factory,
  Palette,
  Archive,
  Star,
  Scissors,
  Logs,
  PaintRoller,
  BookUser,
  ChartNoAxesGantt,
} from "lucide-react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import CategoryGrid from "../category/categorygrid";
import SubCategoryGrid from "../sub-category/SubCategorygrid";
import FabricGrid from "../fabric/FabricGrid";
import ProductTypeGrid from "../product-type/FabricGrid";
import ProductDetailsGrid from "../product-details/ProductDetailsGrid";
import ManufacturerGrid from "../manufacturer/ManufacturerGrid";
import ProductColorGrid from "../color/ColorGrid";
import ProductCollectionGrid from "../collection/CollectionGrid";
import ProductOccassionGrid from "../occassion/OccassionGrid";
import ProductStyleGrid from "../style/StyleGrid";
import ProductPrintGrid from "../product-print/PrintGrid";
import OrderManagement from "../order management/order-management";
import OrderDetail from "../order management/order-detail";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { OrderProvider } from "../../context/order management/order-mangement-context";

// Define types for the sidebar items
interface SidebarItem {
  id: number;
  name: string;
  icon: React.ReactNode;
  to?: string;
  children?: SidebarItem[];
}

const Sidebar: React.FC = () => {
  const location = useLocation();

  const LeftSideMenu: SidebarItem[] = [
    {
      id: 1,
      name: "Order Management",
      icon: <Logs size={20} />,
      to: "/order-management",
    },
    {
      id: 2,
      name: "Category Manager",
      icon: <Grid size={20} />,
      to: "/category",
    },
    {
      id: 3,
      name: "SubCategory Manager",
      icon: <Tag size={20} />,
      to: "/sub-category",
    },
    { id: 4, name: "Fabric Manager", icon: <Shirt size={20} />, to: "/fabric" },
    {
      id: 5,
      name: "Manufacturer",
      icon: <Factory size={20} />,
      to: "/manufacturer",
    },
    {
      id: 6,
      name: "Product",
      icon: <ChartNoAxesGantt />,
      children: [
        {
          id: 7,
          name: "Product Type Manager",
          icon: <Box size={20} />,
          to: "/product-type",
        },
        {
          id: 8,
          name: "Product Color Manager",
          icon: <Palette size={20} />,
          to: "/color",
        },
        {
          id: 9,
          name: "Product Collection Manager",
          icon: <Archive size={20} />,
          to: "/collection",
        },
        {
          id: 10,
          name: "Product Occasion Manager",
          icon: <Star size={20} />,
          to: "/occasion",
        },
        {
          id: 11,
          name: "Product Style Manager",
          icon: <Scissors size={20} />,
          to: "/style",
        },
        {
          id: 12,
          name: "Product Print Manager",
          icon: <PaintRoller size={20} />,
          to: "/print",
        },
        {
          id: 13,
          name: "Product Manager",
          icon: <BookUser size={20} />,
          to: "/product-details",
        },
      ],
    },
  ];

  return (
    <section className="flex">
      <aside className="fixed top-14 left-0 h-[calc(100vh-56px)] bg-white border-r border-gray-200 w-56 shadow-md z-40 overflow-y-auto no-scrollbar">
        {LeftSideMenu.map((item) => (
          <div key={item.id}>
            {item.children ? (
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={`item-${item.id}`}>
                  <AccordionTrigger
                    className={`py-2 px-1 cursor-pointer border-t ${
                      location.pathname.startsWith(item.to || "")
                        ? ""
                        : "hover:bg-gray-100 text-gray-500"
                    }`}
                  >
                    <div className="flex gap-x-4 text-slate-500">
                      <span>{item.icon}</span>
                      <p className="text-sm font-medium">{item.name}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.children.map((child) => (
                      <Link to={child.to || "#"} key={child.id}>
                        <div
                          className={`flex items-center gap-x-4 py-3 px-2 cursor-pointer border-t ${
                            location.pathname === child.to
                              ? "bg-gray-700 text-white"
                              : "hover:bg-gray-100 text-gray-500"
                          }`}
                        >
                          <span>{child.icon}</span>
                          <p className="text-sm font-medium">{child.name}</p>
                        </div>
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <Link to={item.to || "#"}>
                <div
                  className={`flex items-center gap-x-4 py-3 px-2 cursor-pointer border-t ${
                    location.pathname.startsWith(item.to || "")
                      ? "bg-gray-700 text-white"
                      : "hover:bg-gray-100 text-gray-500"
                  }`}
                >
                  <span>{item.icon}</span>
                  <p className="text-sm font-medium">{item.name}</p>
                </div>
              </Link>
            )}
          </div>
        ))}
      </aside>

      {/* Content section that scrolls */}
      <main className="ml-56 mt-14 w-full h-[calc(100vh-56px)] overflow-y-auto bg-gray-100 p-3">
        <Routes>
          <Route path="/" element={<OrderManagement />} />
          <Route
            path="order-detail/:orderId"
            element={
              <OrderProvider>
                <OrderDetail />
              </OrderProvider>
            }
          />
          <Route path="category" element={<CategoryGrid />} />
          <Route path="sub-category" element={<SubCategoryGrid />} />
          <Route path="fabric" element={<FabricGrid />} />
          <Route path="product-type" element={<ProductTypeGrid />} />
          <Route path="product-details" element={<ProductDetailsGrid />} />
          <Route path="manufacturer" element={<ManufacturerGrid />} />
          <Route path="color" element={<ProductColorGrid />} />
          <Route path="collection" element={<ProductCollectionGrid />} />
          <Route path="occasion" element={<ProductOccassionGrid />} />
          <Route path="style" element={<ProductStyleGrid />} />
          <Route path="print" element={<ProductPrintGrid />} />
          <Route path="*" element={<OrderManagement />} />
        </Routes>
      </main>
    </section>
  );
};

export default Sidebar;

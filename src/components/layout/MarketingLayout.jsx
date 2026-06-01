import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartSidebar from "@/components/cart/CartSidebar";
import PageTransition from "@/components/layout/PageTransition";

export default function MarketingLayout() {
  return (
    <>
      <Navbar />
      <main>
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
      <CartSidebar />
    </>
  );
}

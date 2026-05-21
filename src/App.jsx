import { Routes, Route } from "react-router-dom";
import MarketingLayout from "@/components/layout/MarketingLayout";
import AdminLayout from "@/layouts/AdminLayout";
import HomePage from "@/pages/HomePage";
import MealKitsPage from "@/pages/MealKitsPage";
import ProductPage from "@/pages/ProductPage";
import SubscriptionPage from "@/pages/SubscriptionPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import TrackPage from "@/pages/TrackPage";
import LoginPage from "@/pages/LoginPage";
import CheckoutPage from "@/pages/CheckoutPage";
import DashboardPage from "@/pages/DashboardPage";
import TermsPage from "@/pages/TermsPage";
import PrivacyPage from "@/pages/PrivacyPage";
import NotFoundPage from "@/pages/NotFoundPage";
import AdminOverviewPage from "@/pages/admin/AdminOverviewPage";
import AdminOrdersPage from "@/pages/admin/AdminOrdersPage";
import AdminInventoryPage from "@/pages/admin/AdminInventoryPage";
import AdminDeliveryPage from "@/pages/admin/AdminDeliveryPage";
import AdminUsersPage from "@/pages/admin/AdminUsersPage";
import AdminPaymentsPage from "@/pages/admin/AdminPaymentsPage";
import AdminAnalyticsPage from "@/pages/admin/AdminAnalyticsPage";
import AdminCouponsPage from "@/pages/admin/AdminCouponsPage";

export default function App() {
  return (
    <Routes>
      <Route element={<MarketingLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/meal-kits" element={<MealKitsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/track" element={<TrackPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminOverviewPage />} />
        <Route path="orders" element={<AdminOrdersPage />} />
        <Route path="inventory" element={<AdminInventoryPage />} />
        <Route path="delivery" element={<AdminDeliveryPage />} />
        <Route path="users" element={<AdminUsersPage />} />
        <Route path="payments" element={<AdminPaymentsPage />} />
        <Route path="analytics" element={<AdminAnalyticsPage />} />
        <Route path="coupons" element={<AdminCouponsPage />} />
      </Route>

      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

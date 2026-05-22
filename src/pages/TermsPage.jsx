import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import { ShieldCheck, FileText, CheckCircle } from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using FOODBOX (the 'Service'), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services. We reserve the right to update these terms at any time.",
    },
    {
      title: "2. Subscription & Billing",
      content: "FOODBOX offers weekly and monthly subscription plans. Your subscription will automatically renew at the end of each billing cycle unless paused or cancelled. You can manage, pause, or terminate your subscription directly from your customer dashboard at least 48 hours before your next scheduled delivery.",
    },
    {
      title: "3. Delivery & Ingredient Safety",
      content: "We source our ingredients daily to guarantee maximum freshness. Upon delivery, you are responsible for checking the integrity of the packaging and immediately refrigerating the perishable ingredients. FOODBOX is not liable for spoilage due to delayed storage after delivery.",
    },
    {
      title: "4. Refunds & Cancellations",
      content: "Because our food kits contain fresh, perishables ingredients, we cannot accept returns. However, if you receive a kit with missing ingredients or damaged items, please contact our support team within 24 hours of delivery for a replacement or store credit.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pb-20">
      <PageHero
        title="Terms & Conditions"
        subtitle="Please read our terms of service carefully to understand your rights and obligations."
        breadcrumbs={[{ label: "Terms & Conditions" }]}
      />

      <div className="mx-auto max-w-4xl px-4 mt-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card-base p-8 md:p-12 border border-gray-100/50 dark:border-gray-800/50"
        >
          <div className="flex items-center gap-3 pb-6 mb-8 border-b border-gray-100 dark:border-gray-800">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-semibold text-brand-orange uppercase tracking-wider">Last Updated</p>
              <h2 className="text-sm font-bold text-gray-900 dark:text-white">May 2026</h2>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none space-y-8">
            {sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green shrink-0" />
                  {section.title}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed pl-7">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-brand-green/5 dark:bg-brand-green/10 border border-brand-green/10 flex flex-col sm:flex-row items-center gap-4">
            <ShieldCheck className="h-10 w-10 text-brand-green shrink-0" />
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">Need help understanding our terms?</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                If you have questions regarding our delivery zones, custom allergies, or plans, feel free to reach out to legal@foodbox.in.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

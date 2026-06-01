import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import { Shield, Eye, Lock, Database } from "lucide-react";

export default function PrivacyPage() {
  const policies = [
    {
      icon: Eye,
      title: "Data We Collect",
      content: "We collect basic contact information (name, email address, shipping address, and phone number) to process your orders and handle deliveries smoothly. We also monitor site usage using secure cookies to optimize your experience.",
    },
    {
      icon: Lock,
      title: "Security & Encryption",
      content: "Your security is our absolute priority. All financial transactions are handled by PCI-DSS compliant secure payment gateways. FOODBOX never stores your credit card credentials on our servers. Your password is stored using state-of-the-art secure hashing protocols.",
    },
    {
      icon: Database,
      title: "Third-Party Sharing",
      content: "We never sell, rent, or trade your personal data. We only share critical logistics data with verified shipping partners to ensure your kitchen kits reach your doorstep fresh and on time.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pb-20">
      <PageHero
        title="Privacy Policy"
        subtitle="Learn how we protect your personal data, secure your transactions, and respect your privacy."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <div className="mx-auto max-w-4xl px-4 mt-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card-base p-8 md:p-12 border border-gray-100/50 dark:border-gray-800/50"
        >
          <div className="flex items-center gap-3 pb-6 mb-8 border-b border-gray-100 dark:border-gray-800">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-semibold text-brand-green uppercase tracking-wider">Privacy Standard</p>
              <h2 className="text-sm font-bold text-gray-900 dark:text-white">GDPR & DPB Compliant</h2>
            </div>
          </div>

          <div className="space-y-8">
            {policies.map((p, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{p.title}</h3>
                  <p className="mt-2 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {p.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-brand-orange/5 dark:bg-brand-orange/10 border border-brand-orange/10 flex flex-col sm:flex-row items-center gap-4">
            <Shield className="h-10 w-10 text-brand-orange shrink-0 animate-pulse" />
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">Your data rights</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                Under modern data protection regulations, you have full rights to request access to, edit, or delete any personal information we hold. Simply email privacy@foodbox.in.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

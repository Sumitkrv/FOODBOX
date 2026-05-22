import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pb-20">
      <PageHero
        title="Contact Us"
        subtitle="Have a question, feedback, or need help with a custom order? Our friendly team is here to help!"
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      <div className="mx-auto max-w-7xl px-4 mt-16 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-12 lg:grid-cols-2 items-start"
        >
          {/* Left Column: Form Card */}
          <motion.div variants={itemVariants} className="relative group">
            {/* Ambient background glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-green/20 to-brand-orange/20 opacity-70 blur-xl group-hover:opacity-100 transition duration-500" />
            
            <form
              className="relative card-base space-y-6 p-8 md:p-10 border border-gray-100/50 dark:border-gray-800/50"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Send Us a Message</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Name</label>
                  <input
                    type="text"
                    required
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email</label>
                  <input
                    type="email"
                    required
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Message</label>
                  <textarea
                    rows={4}
                    required
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    placeholder="How can we help?"
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary w-full cursor-pointer py-3.5 flex items-center justify-center gap-2">
                <Send className="h-5 w-5" /> Send Message
              </button>
            </form>
          </motion.div>

          {/* Right Column: Contact Details */}
          <div className="space-y-6">
            {[
              {
                icon: MapPin,
                title: "Our Head Office",
                text: "123 Food Street, Bandra West, Mumbai 400050",
                color: "text-brand-green bg-brand-green/10 dark:bg-brand-green/20",
              },
              {
                icon: Phone,
                title: "Call Us Anytime",
                text: "+91 98765 43210",
                subtext: "Mon-Sun, 8 AM - 10 PM",
                color: "text-brand-orange bg-brand-orange/10 dark:bg-brand-orange/20",
              },
              {
                icon: Mail,
                title: "Email Support",
                text: "hello@foodbox.in",
                subtext: "We respond within a day",
                color: "text-brand-green bg-brand-green/10 dark:bg-brand-green/20",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="card-base flex gap-5 p-6 border border-gray-100/50 dark:border-gray-800/50 hover:shadow-card-hover hover:-translate-y-1 transition duration-300 group"
              >
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${item.color} group-hover:scale-110 transition duration-300`}>
                  <item.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="mt-1 text-base text-gray-600 dark:text-gray-300 font-medium">{item.text}</p>
                  {item.subtext && <p className="mt-0.5 text-xs text-gray-400 dark:text-gray-500">{item.subtext}</p>}
                </div>
              </motion.div>
            ))}

            {/* Embedded maps or visual placeholder element to make the right side richer */}
            <motion.div
              variants={itemVariants}
              className="relative rounded-2xl overflow-hidden shadow-card dark:shadow-none h-60 border border-gray-100/50 dark:border-gray-800/50"
            >
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 flex flex-col items-center justify-center p-6 text-center">
                <MapPin className="h-10 w-10 text-brand-green animate-bounce" />
                <h4 className="mt-2 font-bold text-gray-800 dark:text-white">Interactive Kitchen Map</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-xs">
                  We prepare our kits in sterile, high-quality central kitchens across top metros.
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="inline-flex items-center rounded-full bg-brand-green/10 px-2.5 py-0.5 text-xs font-semibold text-brand-green">Mumbai</span>
                  <span className="inline-flex items-center rounded-full bg-brand-green/10 px-2.5 py-0.5 text-xs font-semibold text-brand-green">Delhi</span>
                  <span className="inline-flex items-center rounded-full bg-brand-green/10 px-2.5 py-0.5 text-xs font-semibold text-brand-green">Bangalore</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

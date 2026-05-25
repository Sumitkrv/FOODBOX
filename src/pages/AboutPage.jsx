import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sprout, ChefHat, RefreshCw, Award, Sparkles } from "lucide-react";

export default function AboutPage() {
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-deep-forest pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Our Story Hero"
            className="w-full h-full object-cover brightness-[0.7]"
            src="https://lh3.googleusercontent.com/aida/ADBb0uii_g_SeWW9c5RrtBkbZMDbuq9nk5YD6wIs1uUyI65KwxKuqrLEI2JFVCXbT6in5UIuJxBZKv4BOZw3Jw20LsYxtCg94-9kJE-cxx92ZirnaPeVbOBRaWMwZXybpqE8osXlkF2tvvlKxhYcbtfKRMe8VhtloN1I5GZW2QSz-PndgJedDUT0brbM5hNFWf4d4GULvmMrZZ72bs5reot8lQ8klC1s7DhaE-S1hkqDAU0LRIm0mJz2k8u9aQ"
          />
          <div className="absolute inset-0 bg-black/15" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-black/5 dark:border-gray-800"
          >
            <h1 className="font-serif text-[42px] leading-tight font-extrabold text-brand-green dark:text-white mb-4">
              Our Story
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
              Bringing culinary traditions to modern kitchens. We started with a simple belief: that the warmth of a home-cooked meal shouldn't be lost to the pace of modern life.
            </p>
            <div className="mt-8">
              <span className="inline-block w-20 h-1 bg-brand-orange rounded-full"></span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-extrabold text-brand-green dark:text-white md:text-4xl">
            The FOODBOX Philosophy
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-semibold mt-2 text-sm uppercase tracking-wider">
            Rooted in quality, dedicated to you.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Farm to Table */}
          <motion.div
            variants={itemVariants}
            className="group bg-sage-wash dark:bg-brand-green-light/10 p-8 rounded-3xl border border-brand-green/5 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-brand-green dark:bg-brand-green-light rounded-2xl flex items-center justify-center mb-6 shadow-md text-white shadow-brand-green/10">
              <Sprout className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-xl font-bold text-brand-green dark:text-white mb-4">Farm-to-Table</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-medium">
              We source directly from local organic farms to ensure every ingredient arrives at its peak nutritional value and flavor.
            </p>
          </motion.div>

          {/* Chef Curated */}
          <motion.div
            variants={itemVariants}
            className="group bg-white dark:bg-gray-900 p-8 rounded-3xl border border-black/5 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-brand-orange rounded-2xl flex items-center justify-center mb-6 shadow-md text-white shadow-brand-orange/10">
              <ChefHat className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-xl font-bold text-brand-green dark:text-white mb-4">Chef-Curated</h3>
            <p className="text-gray-650 dark:text-gray-400 text-sm leading-relaxed font-medium">
              Our recipes are developed by Michelin-experienced chefs who translate complex culinary techniques into simple, joyful experiences.
            </p>
          </motion.div>

          {/* Sustainable */}
          <motion.div
            variants={itemVariants}
            className="group bg-sage-wash dark:bg-brand-green-light/10 p-8 rounded-3xl border border-brand-green/5 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-brand-green dark:bg-brand-green-light rounded-2xl flex items-center justify-center mb-6 shadow-md text-white shadow-brand-green/10">
              <RefreshCw className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-xl font-bold text-brand-green dark:text-white mb-4">Sustainable Packaging</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-medium">
              We lead the industry in compostable materials and zero-waste logistics, because a good meal shouldn't cost the Earth.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Meet Our Chefs - Asymmetric Layout */}
      <section className="bg-brand-green dark:bg-brand-green-dark py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2 grid grid-cols-2 gap-6"
            >
              <div className="pt-12">
                <img
                  className="rounded-3xl w-full h-[400px] object-cover shadow-2xl border border-white/5"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-7vxWDKz9j3_3GA-rKwDuW2OM4aMEVEznJmuE5qwMfRRrg4eQyYBjdUFBoX_sGmPENRmmvsArh2tPIskq3g4F0YtbUEpaX4XrX8PiFYSMoAsbH9u-DXddcY1JmW5HaCJrQqXHvq1wH2pZNFGL1sflE_n22VYCUyoAbnLzSEh8rG0soxRqSod4XfruNvNyCrNyZaGOmKmFEwfwmT-DpkFGuMaPI_FBI82FxoABuUkWPjfU1kwS3ZLC-y0YDFbNqVSCmG9RvwxUHCU"
                  alt="Michelin Star Chef"
                  loading="lazy"
                />
              </div>
              <div>
                <img
                  className="rounded-3xl w-full h-[400px] object-cover shadow-2xl border border-white/5"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0zom3u4mP0GoLwXmt0Dj1QQgNmpggjLZIJMn_fMJtuByaYAP4jvQ8pWzhXiC6cSOqpfZ5i6vQz0iXwRHzUlMUuUpdCbTCWcRBE3c56d0jvLxHu6JabV6N1f9jCOuzas9WlkeUCyMWmMUOK95ntRTRX2xcMpS2fM1tXyzvcf7Yb6ysL4zGwl9Vme0JXGRm11iXOI2VzJJm8v6qXfZr8AfHmwEcBMo0GYNJiLnm4mYi-X0N4Fvy4NSRZD2JX3f-jyUTPWC2Zg_mGzI"
                  alt="Executive Culinary Chef"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <h2 className="font-serif text-[42px] leading-tight font-extrabold mb-6">Meet Our Chefs</h2>
              <p className="text-base md:text-lg text-brand-cream/80 mb-8 leading-relaxed font-medium">
                Our culinary team is led by veterans of the world's most prestigious kitchens. They bring a lifetime of experience in flavor profiles, seasonal sourcing, and precise technique to every kit we create.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Award className="text-brand-orange-light h-7 w-7 shrink-0" />
                  <div>
                    <h4 className="font-serif font-bold text-lg text-white">Global Expertise</h4>
                    <p className="text-brand-cream/70 text-sm font-medium">Techniques mastered from Paris to Tokyo.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sparkles className="text-brand-orange-light h-7 w-7 shrink-0" />
                  <div>
                    <h4 className="font-serif font-bold text-lg text-white">Modern Innovation</h4>
                    <p className="text-brand-cream/70 text-sm font-medium">Redefining tradition with contemporary wellness.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-32 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-serif text-sm font-bold uppercase tracking-widest text-brand-orange mb-4 block">
                Our Impact
              </span>
              <h2 className="font-serif text-3xl font-extrabold text-brand-green dark:text-white mb-6">
                Supporting Local Ecosystems
              </h2>
              <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-10 leading-relaxed font-medium">
                We partner with over 40 family-owned farms. These partnerships are the heartbeat of FOODBOX, allowing us to support sustainable land management while delivering unrivaled freshness.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-gray-100 dark:border-gray-800 pt-10">
                <div>
                  <div className="text-4xl font-serif font-extrabold text-brand-orange mb-2">40+</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    Active Farmer Partnerships
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-serif font-extrabold text-brand-orange mb-2">12M</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    Lbs of Carbon Offset
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-sage-wash rounded-full -z-10 opacity-50 dark:opacity-10" />
              <img
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover border border-black/5 dark:border-gray-850"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDwxmjxw41bXgO-_EnZn1JQzztrYi4dzhYbMG78sQlcTVNB4jTItMjRfHytNKDVqcpU-CRtRNsPbLTogICpp6PgpL-Pj8_WjKA4FoqZoUg6zP6kBTVFzCyf2iLvUqKSSll7-U4pVI7VScdBLkXPDboJTESsDgIujGIJbXcWEhleECiGvFv5oLS5dEfLL8_Z8t_V9fMFCqNNR2Mys08Ie0RiWF6U63WgRRXw2i9Xs4vLtdnXWh0ipbHLAFExL069U9a3g6IAA2-rMw"
                alt="Sustainable organic farm Crop Grid"
                loading="lazy"
              />
              <div className="absolute bottom-8 left-8 bg-white/95 dark:bg-gray-900/95 backdrop-blur p-6 rounded-2xl border border-black/5 dark:border-gray-800 shadow-xl max-w-xs">
                <p className="font-serif text-base font-bold text-brand-green dark:text-white italic">
                  "Quality begins in the soil."
                </p>
                <p className="text-xs font-semibold text-gray-400 mt-2">
                  — Marcus Thorne, Head Forager
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto bg-brand-green-dark text-white rounded-3xl p-16 text-center shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
          <div className="relative z-10">
            <h2 className="font-serif text-[42px] leading-tight font-extrabold mb-6">Taste the Tradition</h2>
            <p className="max-w-xl mx-auto text-base md:text-lg opacity-80 mb-10 leading-relaxed font-medium">
              Join thousands of busy families rediscovering the joy of real, premium home cooking.
            </p>
            <Link
              to="/meal-kits"
              className="bg-brand-orange text-white px-10 py-4.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-orange-700 hover:shadow-lg transition-all shadow-md shadow-brand-orange/15 cursor-pointer inline-block"
            >
              Choose Your First Kit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

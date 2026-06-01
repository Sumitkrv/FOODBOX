import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '../../lib/homepage-data';
import { stagger, staggerChild, fadeUp, viewport, ease } from '../../lib/animations';

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group transition-all duration-200"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 pr-4 group-hover:text-cta transition-colors">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: ease.out }}
          className="shrink-0 w-8 h-8 rounded-full bg-gray-50 group-hover:bg-[#FFF3E8] flex items-center justify-center transition-colors"
        >
          <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-[#FF6B35] transition-colors" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: ease.out }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-500 leading-relaxed pr-8 text-sm md:text-base">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-gray-50/50 overflow-hidden">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp(0, 20)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport('-80px')}
          className="text-center mb-12"
        >
          <span className="section-label">FAQ</span>
          <h2 className="section-title mt-4">Common Questions</h2>
          <p className="section-subtitle mx-auto mt-4">
            Everything you need to know about FOODBOX.
          </p>
        </motion.div>

        {/* Accordion Grid with Stagger Entrance */}
        <motion.div
          variants={stagger(0.06, 0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport('-40px')}
          className="bg-white border border-gray-200 rounded-3xl px-6 lg:px-8 shadow-[0_2px_18px_rgba(0,0,0,0.02)]"
        >
          {faqItems.map((item, i) => (
            <motion.div key={i} variants={staggerChild}>
              <FAQItem
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Sparkles } from 'lucide-react';
import { fadeUp, hoverLiftSm, tapPress, floatLoop, floatRotateLoop, viewport } from '../../lib/animations';

export default function FinalCTA() {
  const reduce = useReducedMotion();

  return (
    <section className="py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp(0, 30)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport('-80px')}
          className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-[2.5rem] px-8 py-16 lg:px-16 lg:py-24 text-center"
        >
          {/* Decorative gradient orbs */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-cta/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

          {/* Floating decorative leaf and sparkles inside card */}
          {!reduce && (
            <>
              <motion.div
                animate={floatLoop(8, 4.5, 0.4)}
                className="absolute top-10 left-[12%] text-white/8 w-6 h-6 pointer-events-none"
              >
                <Leaf className="w-full h-full rotate-[40deg]" />
              </motion.div>
              <motion.div
                animate={floatRotateLoop(10, 15, 6, 0.2)}
                className="absolute bottom-12 right-[14%] text-[#FF6B35]/12 w-8 h-8 pointer-events-none"
              >
                <Sparkles className="w-full h-full fill-current" />
              </motion.div>
            </>
          )}

          <div className="relative">
            <motion.h2
              variants={fadeUp(0.1, 15)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport('-40px')}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              Ready To Start Cooking
              <br />
              <span className="text-cta">Smarter?</span>
            </motion.h2>

            <motion.p
              variants={fadeUp(0.18, 15)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport('-40px')}
              className="mt-5 text-lg text-gray-400 max-w-lg mx-auto leading-relaxed"
            >
              Join thousands of happy customers who&apos;ve transformed their
              weeknight meals. Your first box is on us.
            </motion.p>

            <motion.div
              variants={fadeUp(0.26, 15)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport('-40px')}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <motion.div
                whileHover={hoverLiftSm}
                whileTap={tapPress}
              >
                <Link to="/meal-kits" className="btn-primary text-base px-8 py-4 inline-flex items-center gap-2 rounded-xl">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

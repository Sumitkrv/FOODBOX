import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { trustStats } from '../../lib/homepage-data';
import { stagger, staggerChild, ease, viewport } from '../../lib/animations';

function AnimatedNumber({ value, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    const numericStr = value.replace(/[^0-9.]/g, '');
    const numericValue = parseFloat(numericStr);
    const hasPlus = value.includes('+');
    const hasK = value.includes('K');
    const duration = 1400;
    const steps = 35;
    const stepDuration = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = numericValue * eased;

      if (hasK) {
        setDisplay(`${Math.round(current)}K${hasPlus ? '+' : ''}`);
      } else if (value.includes('.')) {
        setDisplay(`${current.toFixed(1)}${hasPlus ? '+' : ''}`);
      } else {
        setDisplay(`${Math.round(current)}${hasPlus ? '+' : ''}`);
      }

      if (step >= steps) {
        setDisplay(value);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function TrustBar() {
  return (
    <section className="py-4 lg:py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger(0.06, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport('-40px')}
          className="bg-white border border-gray-200 rounded-3xl p-6 lg:p-8 shadow-[0_2px_18px_rgba(0,0,0,0.02)]"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {trustStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={staggerChild}
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.22, ease: ease.out }}
                className={`text-center py-2 px-4 rounded-2xl hover:bg-[#FAFAF8] transition-colors duration-250 cursor-default ${
                  i < trustStats.length - 1
                    ? 'lg:border-r lg:border-gray-100'
                    : ''
                }`}
              >
                <div className="text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix || ''} />
                </div>
                <div className="mt-1.5 text-xs lg:text-sm text-gray-500 font-medium tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

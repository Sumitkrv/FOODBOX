import { motion } from 'framer-motion';
import { Star, CheckCircle2 } from 'lucide-react';
import { customerStories } from '../../lib/homepage-data';
import { stagger, staggerChild, fadeUp, ease, viewport } from '../../lib/animations';

const avatarColors = [
  'bg-cta-light text-cta',
  'bg-blue-50 text-blue-600',
  'bg-green-50 text-green-600',
  'bg-purple-50 text-purple-600',
];

export default function CustomerStories() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp(0, 20)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport('-80px')}
          className="text-center mb-16"
        >
          <span className="section-label">Customer Stories</span>
          <h2 className="section-title mt-4">Loved By Thousands</h2>
          <p className="section-subtitle mx-auto mt-4">
            Real stories from real customers who cook with FOODBOX every week.
          </p>
        </motion.div>

        {/* Testimonial Grid with Stagger Entrance */}
        <motion.div
          variants={stagger(0.08, 0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport('-40px')}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
        >
          {customerStories.map((story, i) => (
            <motion.div
              key={story.name}
              variants={staggerChild}
              whileHover={{
                y: -6,
                scale: 1.015,
                boxShadow: '0 20px 40px rgba(0,0,0,0.06), 0 0 0 1px rgba(255,107,53,0.06)',
                borderColor: 'rgba(255,107,53,0.1)'
              }}
              transition={{ duration: 0.25, ease: ease.out }}
              className="p-6 bg-white border border-gray-200 rounded-2xl transition-all duration-300 cursor-default"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: story.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-5">
                &ldquo;{story.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-5 pt-5 border-t border-gray-100 flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${
                    avatarColors[i % avatarColors.length]
                  } flex items-center justify-center text-sm font-bold shrink-0`}
                >
                  {story.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-sm text-gray-900 truncate">
                      {story.name}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  </div>
                  <span className="text-xs text-gray-500">{story.occupation}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

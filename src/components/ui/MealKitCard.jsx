import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Clock, Users, Flame, ShoppingCart, Heart, Eye, Check } from 'lucide-react';
import { useCart } from '../../context/CartContext';

/* ─── Spice color helpers ─────────────────────────── */
const spiceLabels = ['Mild', 'Light', 'Medium', 'Hot', 'Extra Hot'];
const spiceColor = (level) =>
  level >= 4 ? '#FF6B35' : level === 3 ? '#F59E0B' : '#16A34A';

export default function MealKitCard({ kit, categoryName = '' }) {
  const { addItem } = useCart();
  const [saved, setSaved] = useState(false);
  const [added, setAdded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleAdd = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      addItem(kit, 1);
      setAdded(true);
      setTimeout(() => setAdded(false), 1600);
    },
    [addItem, kit]
  );

  const handleSave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setSaved((s) => !s);
  }, []);

  return (
    <motion.article
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col bg-white rounded-[20px] overflow-hidden"
      style={{
        border: '1px solid rgba(0,0,0,0.07)',
        boxShadow: hovered
          ? '0 20px 60px rgba(0,0,0,0.10), 0 0 0 1px rgba(255,107,53,0.08)'
          : '0 2px 12px rgba(0,0,0,0.04)',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      {/* ── Image ──────────────────────────────────── */}
      <Link to={`/product/${kit.id}`} className="block relative overflow-hidden bg-gray-50" style={{ aspectRatio: '4/3' }}>
        {/* Photo with zoom */}
        <motion.img
          src={kit.image}
          alt={kit.name}
          loading="lazy"
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Bottom gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Quick-view overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: 'rgba(0,0,0,0.22)', backdropFilter: 'blur(2px)' }}
            >
              <motion.span
                initial={{ scale: 0.88, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.88, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white"
                style={{ background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.35)', backdropFilter: 'blur(8px)' }}
              >
                <Eye className="w-3.5 h-3.5" />
                Quick View
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Top-left: Spice badge ── */}
        <div
          className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wide"
          style={{
            background: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(8px)',
            color: spiceColor(kit.spiceLevel),
            boxShadow: '0 1px 6px rgba(0,0,0,0.08)',
          }}
        >
          🌶️ {spiceLabels[(kit.spiceLevel ?? 1) - 1]}
        </div>

        {/* ── Top-right: Save / heart ── */}
        <button
          onClick={handleSave}
          aria-label={saved ? 'Remove from saved' : 'Save'}
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
          style={{
            background: saved ? '#FF6B35' : 'rgba(255,255,255,0.88)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 1px 6px rgba(0,0,0,0.10)',
          }}
        >
          <Heart
            className="w-4 h-4 transition-all duration-200"
            style={{ color: saved ? 'white' : '#9CA3AF', fill: saved ? 'white' : 'none' }}
          />
        </button>

        {/* ── Bottom-left: cook time chip ── */}
        <div
          className="absolute bottom-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold"
          style={{
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(6px)',
            color: 'white',
          }}
        >
          <Clock className="w-3 h-3" />
          {kit.cookTime} min
        </div>
      </Link>

      {/* ── Body ────────────────────────────────────── */}
      <div className="flex flex-col flex-grow p-5">

        {/* Category + rating row */}
        <div className="flex items-center justify-between mb-2">
          {categoryName ? (
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              {categoryName}
            </span>
          ) : (
            <span />
          )}
          <span
            className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md"
            style={{ background: '#FFF7ED', color: '#FF6B35' }}
          >
            <Star className="w-3 h-3 fill-current" />
            {kit.rating ?? 4.7}
          </span>
        </div>

        {/* Title */}
        <Link to={`/product/${kit.id}`} className="block">
          <h3
            className="font-bold text-[0.95rem] leading-snug transition-colors duration-200"
            style={{ color: hovered ? '#FF6B35' : '#111827' }}
          >
            {kit.name}
          </h3>
        </Link>

        {/* Description */}
        <p className="mt-1.5 text-gray-400 text-xs leading-relaxed line-clamp-2 flex-grow">
          {kit.description}
        </p>

        {/* Meta pills */}
        <div className="mt-3 flex items-center gap-2 flex-wrap">
          <span
            className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-semibold text-gray-500"
            style={{ background: '#F9FAFB', border: '1px solid #F3F4F6' }}
          >
            <Users className="w-3 h-3" />
            {kit.servings} serving{kit.servings > 1 ? 's' : ''}
          </span>
          {kit.nutrition?.[0] && (
            <span
              className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-semibold text-gray-500"
              style={{ background: '#F9FAFB', border: '1px solid #F3F4F6' }}
            >
              <Flame className="w-3 h-3" />
              {kit.nutrition[0].value}
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="my-4 border-t border-gray-100" />

        {/* Price + CTA */}
        <div className="flex items-center justify-between gap-3">
          {/* Price block */}
          <div className="flex flex-col leading-none">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Price</span>
            <span className="mt-1 text-xl font-extrabold tracking-tight text-gray-900">
              ₹{kit.price}
            </span>
          </div>

          {/* Add to Cart CTA */}
          <motion.button
            onClick={handleAdd}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white overflow-hidden"
            style={{
              background: added
                ? 'linear-gradient(135deg, #16A34A, #15803D)'
                : 'linear-gradient(135deg, #FF6B35, #FF8C5A)',
              boxShadow: added
                ? '0 4px 14px rgba(22,163,74,0.35)'
                : '0 4px 14px rgba(255,107,53,0.35)',
              transition: 'background 0.3s ease, box-shadow 0.3s ease',
              minWidth: '110px',
              justifyContent: 'center',
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {added ? (
                <motion.span
                  key="added"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.18 }}
                  className="flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" /> Added!
                </motion.span>
              ) : (
                <motion.span
                  key="add"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.18 }}
                  className="flex items-center gap-1.5"
                >
                  <ShoppingCart className="w-3.5 h-3.5" /> Add to Box
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* ── Brand-color bottom glow line on hover ── */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, scaleX: hovered ? 1 : 0.6 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-[20px]"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #FF6B35 40%, #FF9A5C 60%, transparent 100%)',
        }}
      />
    </motion.article>
  );
}

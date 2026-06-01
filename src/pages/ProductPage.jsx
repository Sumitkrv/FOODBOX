import { useState, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Clock, Flame, Users, Star, Minus, Plus, ShoppingCart, ChefHat, Sparkles, Check, Leaf, Truck, Package, ThumbsUp, CheckCircle2 } from "lucide-react";
import { getMealKit, addOns, spiceLabels } from "@/lib/data";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

const formatNumber = (num) => Number.isInteger(num) ? num : Number(num.toFixed(1));

const getIngredientIcon = (name) => {
  const lower = name.toLowerCase();
  if (lower.includes('spinach') || lower.includes('mint') || lower.includes('coriander') || lower.includes('leaf') || lower.includes('puree') || lower.includes('herb') || lower.includes('chili') || lower.includes('onion') || lower.includes('tomato') || lower.includes('garlic') || lower.includes('ginger') || lower.includes('potato') || lower.includes('lemon')) {
    return <Leaf className="h-3.5 w-3.5 text-green-500 shrink-0" />;
  }
  return <Sparkles className="h-3.5 w-3.5 text-amber-500 shrink-0" />;
};

export default function ProductPage() {
  const { id } = useParams();
  const kit = getMealKit(id);
  const baseServings = kit?.servings || 1;
  const [persons, setPersons] = useState(1);
  const [customIngredients, setCustomIngredients] = useState({});
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const { addItem } = useCart();
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 480) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!kit) {
    return <Navigate to="/404" replace />;
  }

  const addOnTotal = addOns
    .filter((a) => selectedAddOns.includes(a.id))
    .reduce((s, a) => s + a.price, 0);

  const toggleAddOn = (addonId) => {
    setSelectedAddOns((prev) =>
      prev.includes(addonId) ? prev.filter((x) => x !== addonId) : [...prev, addonId]
    );
  };

  const handleIngredientChange = (ingName, delta, baseAmount, unit) => {
    setCustomIngredients(prev => {
      let step = 1;
      if (unit === 'g' || unit === 'ml') step = 25;
      
      const defaultVal = (baseAmount / baseServings) * persons;
      const currentVal = prev[ingName] !== undefined ? prev[ingName] : defaultVal;
      const newVal = Math.max(0, currentVal + (delta * step));
      
      return { ...prev, [ingName]: newVal };
    });
  };

  const getIngredientAmount = (ingName, baseAmount) => {
    if (customIngredients[ingName] !== undefined) return customIngredients[ingName];
    return (baseAmount / baseServings) * persons;
  };

  const baseTotalWeight = kit?.ingredients.reduce((sum, ing) => sum + ing.amount, 0) || 1;
  const currentTotalWeight = kit?.ingredients.reduce((sum, ing) => sum + getIngredientAmount(ing.name, ing.amount), 0) || 1;
  const weightRatio = currentTotalWeight / baseTotalWeight;

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <div className="min-h-screen bg-canvas pb-24 relative overflow-hidden">
      {/* Decorative background orbs */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(255,107,53,0.06) 0%, transparent 60%)' }}
      />
      <div
        className="absolute top-1/4 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 20% 50%, rgba(99,102,241,0.04) 0%, transparent 60%)' }}
      />

      {/* ── Product Hero Section ── */}
      <section className="pt-20 lg:pt-24 pb-8 px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <motion.nav 
            custom={0} initial="hidden" animate="visible" variants={fadeUp}
            className="flex items-center text-xs font-semibold text-gray-400 mb-4 space-x-2" 
            data-purpose="breadcrumbs"
          >
            <Link className="hover:text-gray-900 transition-colors" to="/">Home</Link>
            <span>/</span>
            <Link className="hover:text-gray-900 transition-colors" to="/meal-kits">Meal Kits</Link>
            <span>/</span>
            <span className="text-gray-900 truncate max-w-[200px]">{kit.name}</span>
          </motion.nav>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-14 items-center">
            {/* Left: Product Info */}
            <div className="order-2 lg:order-1">
              <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp}>
                <div
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[0.1em] uppercase mb-3.5"
                  style={{ background: 'rgba(255,107,53,0.08)', border: '1px solid rgba(255,107,53,0.18)', color: '#FF6B35' }}
                >
                  <Sparkles size={11} />
                  Signature Recipe
                </div>
                <h1 className="text-[clamp(2.1rem,3.8vw,3.1rem)] font-extrabold mb-3.5 leading-[1.08] tracking-tight text-gray-900">
                  {kit.name}
                </h1>
                <p className="text-[0.95rem] text-gray-500 mb-6 max-w-lg leading-relaxed">
                  {kit.description}
                </p>
              </motion.div>

              {/* Quick Stats Grid */}
              <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp} className="grid grid-cols-2 gap-3 mb-6" data-purpose="quick-stats">
                <div className="bg-white p-3 rounded-xl border border-gray-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.015)]">
                  <span className="block text-gray-400 text-[9px] font-bold uppercase tracking-wider mb-0.5">Time</span>
                  <span className="font-bold text-gray-900 text-sm flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-cta shrink-0" /> {kit.cookTime} Min
                  </span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-gray-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.015)]">
                  <span className="block text-gray-400 text-[9px] font-bold uppercase tracking-wider mb-0.5">Spice</span>
                  <span className="font-bold text-gray-900 text-sm flex items-center gap-1.5">
                    <Flame className="h-3.5 w-3.5 text-cta shrink-0" /> {spiceLabels[kit.spiceLevel - 1]}
                  </span>
                </div>
              </motion.div>

              {/* Pricing, Quantity & Add button */}
              <motion.div 
                custom={3} 
                initial="hidden" 
                animate="visible" 
                variants={fadeUp} 
                className="flex items-center justify-between gap-4 pt-5 pb-1 border-t border-gray-200/60 w-full"
              >
                {/* Price Display with clean Slide Transition */}
                <div className="flex flex-col">
                  <span className="block text-gray-400 text-[9px] font-bold uppercase tracking-wider mb-0.5">Price Total</span>
                  <div className="h-7 relative flex items-center min-w-[76px] overflow-hidden">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={persons}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="text-2xl font-black text-gray-850 tracking-tight absolute"
                      >
                        ₹{Math.round((kit.price / baseServings) * persons + addOnTotal)}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Premium Servings selector with Slide Transition */}
                  <div className="flex items-center gap-2 bg-[#FAFAF8] dark:bg-neutral-850 px-2.5 py-1.5 rounded-2xl border border-gray-200/80 dark:border-neutral-800/80 shadow-[0_2px_12px_rgba(0,0,0,0.015)]">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.85 }}
                      onClick={() => {
                        setPersons(Math.max(1, persons - 1));
                        setCustomIngredients({});
                      }}
                      className="w-8 h-8 flex items-center justify-center rounded-xl bg-white dark:bg-neutral-800 text-gray-500 hover:text-gray-900 border border-gray-200/60 dark:border-neutral-700/30 transition-colors shadow-sm"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </motion.button>
                    
                    <div className="flex flex-col items-center px-1 min-w-[64px] h-7 justify-center">
                      <span className="text-[8px] font-extrabold text-gray-450 uppercase tracking-widest leading-none">Pack</span>
                      <div className="h-4 relative flex items-center justify-center mt-0.5 w-full overflow-hidden">
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.span
                            key={persons}
                            initial={{ y: 8, opacity: 0, scale: 0.8 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: -8, opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="font-extrabold text-gray-850 text-xs tracking-tight absolute whitespace-nowrap"
                          >
                            {persons} Serving{persons > 1 ? 's' : ''}
                          </motion.span>
                        </AnimatePresence>
                      </div>
                    </div>

                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.85 }}
                      onClick={() => {
                        setPersons(persons + 1);
                        setCustomIngredients({});
                      }}
                      className="w-8 h-8 flex items-center justify-center rounded-xl bg-white dark:bg-neutral-800 text-gray-500 hover:text-gray-900 border border-gray-200/60 dark:border-neutral-700/30 transition-colors shadow-sm"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </motion.button>
                  </div>

                  {/* High-Impact Add to Box Button */}
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.03, y: -2, boxShadow: '0 10px 28px rgba(255,107,53,0.38)' }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => addItem(kit, 1, persons, customIngredients)}
                    className="h-11 inline-flex items-center justify-center gap-2 px-6 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] text-white font-black uppercase tracking-wider text-[11px] rounded-2xl shadow-[0_6px_20px_rgba(255,107,53,0.25)] transition-all"
                  >
                    <ShoppingCart className="h-4 w-4 shrink-0" /> Add to Box
                  </motion.button>
                </div>
              </motion.div>

              {/* Trust & Credibility Indicators Card Grid */}
              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mt-5 pt-4 border-t border-gray-150/60 grid grid-cols-2 gap-2.5"
              >
                {[
                  { icon: Star, text: "4.8 Rating", subtext: "(234 Reviews)", color: "text-amber-500 bg-amber-50 border-amber-100/50" },
                  { icon: Truck, text: "Free Delivery", subtext: "Above ₹499", color: "text-green-600 bg-green-50 border-green-100/50" },
                  { icon: Leaf, text: "Fresh Ingredients", subtext: "🥬 Sourced Daily", color: "text-green-600 bg-green-50 border-green-100/50" },
                  { icon: Flame, text: "Chef Curated", subtext: "🔥 Easy Recipes", color: "text-[#FF6B35] bg-orange-50 border-orange-100/50" }
                ].map(({ icon: Icon, text, subtext, color }) => (
                  <div 
                    key={text} 
                    className="flex items-center gap-2.5 p-2 bg-white border border-gray-200/80 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.015)] hover:border-gray-300 transition-colors"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold text-gray-800 leading-none truncate">{text}</p>
                      <p className="text-[9px] font-semibold text-gray-400 mt-0.5 leading-none truncate">{subtext}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Image side */}
            <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp} className="relative order-1 lg:order-2 w-full max-w-[420px] mx-auto lg:mx-0">
              <div className="aspect-[4/3] sm:aspect-square rounded-[1.8rem] overflow-hidden border border-gray-200/80 shadow-[0_12px_45px_rgba(0,0,0,0.06)] bg-white relative">
                <img alt={kit.name} className="w-full h-full object-cover" src={kit.image} />
                <div className="absolute inset-0 border border-black/5 rounded-[1.8rem] pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Details Section ── */}
      <section className="py-20 px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            
            {/* Ingredients Column */}
            <div className="lg:col-span-4 space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-gray-200/80"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 tracking-tight">Ingredients</h3>
                    <span className="text-[10px] font-bold text-green-600 bg-green-50 border border-green-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
                      Fresh Harvest
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    {kit.ingredients.map((ing) => {
                      const amount = getIngredientAmount(ing.name, ing.amount);
                      return (
                        <div
                          key={ing.name}
                          className="flex items-center justify-between py-3 border-b border-gray-100/60 dark:border-neutral-850/50 last:border-0 last:pb-0"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-green-50 dark:bg-green-950/20 flex items-center justify-center shrink-0 border border-green-150/40">
                              <Check className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
                            </div>
                            <div className="flex items-center gap-2">
                              {getIngredientIcon(ing.name)}
                              <span className="text-gray-800 text-sm font-semibold">
                                {ing.name}
                              </span>
                            </div>
                          </div>
                          <span className="text-gray-600 font-bold text-xs font-mono">
                            {formatNumber(amount)} {ing.unit}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Extra Selection / Add-ons */}
                <div className="mt-10 pt-6 border-t border-dashed border-gray-200">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-4">Add Customizations</p>
                  <div className="space-y-2.5">
                    {addOns.map((addon) => {
                      const isSelected = selectedAddOns.includes(addon.id);
                      return (
                        <label
                          key={addon.id}
                          className={`flex items-center p-3.5 rounded-xl cursor-pointer transition-all border ${
                            isSelected
                              ? "border-cta bg-cta/5 shadow-sm"
                              : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => toggleAddOn(addon.id)}
                            className="w-4 h-4 rounded text-cta focus:ring-cta mr-3.5 accent-cta cursor-pointer border-gray-300"
                          />
                          <div className="flex-1 flex justify-between items-center">
                            <span className="block font-semibold text-sm text-gray-900">{addon.name}</span>
                            <span className="text-xs text-cta font-bold">+₹{addon.price}</span>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              {/* What's Included In Your Box Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white p-6 sm:p-7 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-gray-200/80 relative overflow-hidden"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50/40 rounded-full blur-2xl pointer-events-none -mr-8 -mt-8" />
                
                <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-5 pb-3 border-b border-gray-100 flex items-center gap-2 relative z-10">
                  <span className="p-1.5 rounded-lg bg-orange-50 text-cta shrink-0">
                    <Package className="h-4.5 w-4.5" />
                  </span>
                  What's Included In Your Box
                </h3>

                <div className="grid grid-cols-1 gap-3 relative z-10">
                  {[
                    { icon: Leaf, title: "Fresh Ingredients", desc: "Farm-sourced, premium herbs & bases", color: "text-green-600 bg-green-50/60 border-green-100" },
                    { icon: Package, title: "Pre-Portioned Quantities", desc: "Exactly what you need, zero food waste", color: "text-blue-600 bg-blue-50/60 border-blue-100" },
                    { icon: Sparkles, title: "Chef Curated Spice Mix", desc: "Custom spice blends for authentic taste", color: "text-[#FF6B35] bg-orange-50/60 border-orange-100" },
                    { icon: Clock, title: "Easy Recipe Guide", desc: "Simple step-by-step visual guide card", color: "text-purple-600 bg-purple-50/60 border-purple-100" },
                    { icon: ChefHat, title: "Cooking Instructions", desc: "Chef instructions for standard preparation", color: "text-indigo-600 bg-indigo-50/60 border-indigo-100" },
                    { icon: Leaf, title: "Fresh Produce", desc: "Sourced locally, washed and chilled", color: "text-emerald-600 bg-emerald-50/60 border-emerald-100" }
                  ].map(({ icon: Icon, title, desc, color }, index) => (
                    <motion.div 
                      key={title}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ y: -2, scale: 1.01, boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}
                      className="flex items-center gap-3.5 p-3 bg-[#FAFAF8]/50 border border-gray-150/40 rounded-2xl hover:border-gray-250 transition-all cursor-default"
                    >
                      {/* Checkmark and Icon Container */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="text-green-500 font-bold text-sm">✓</span>
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center border ${color}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="min-w-0">
                        <p className="text-[12px] font-bold text-gray-800 leading-none">{title}</p>
                        <p className="text-[9.5px] font-semibold text-gray-400 mt-1 leading-none">{desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-5 p-3 rounded-2xl bg-amber-50/40 border border-amber-100/50 text-center">
                  <span className="text-[10px] font-bold text-amber-800 uppercase tracking-widest flex items-center justify-center gap-1">
                    <Sparkles className="h-3 w-3 text-amber-600" /> Premium Meal Experience Guaranteed
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Nutrition & Steps Column */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Nutrition Info Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-gray-200/80"
              >
                <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-6">Nutrition Profile</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {kit.nutrition.map((n) => {
                    const numMatch = n.value.match(/(\d+(?:\.\d+)?)/);
                    let displayValue = n.value;
                    if (numMatch) {
                       const baseNumPerServing = parseFloat(numMatch[1]);
                       const totalBaseNutrition = baseNumPerServing * baseServings;
                       const scaledNum = totalBaseNutrition * weightRatio;
                       displayValue = n.value.replace(numMatch[1], formatNumber(scaledNum));
                    }

                    return (
                      <div key={n.label} className="text-center p-5 bg-gray-50 rounded-2xl border border-gray-100">
                        <span className="block text-2xl font-extrabold mb-1 tracking-tight text-gray-900">{displayValue}</span>
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{n.label}</span>
                      </div>
                    );
                  })}
                </div>
                <p className="mt-5 text-[11px] text-gray-400 font-medium">
                  * Values are approximate per serving based on standard recipe preparation.
                </p>
              </motion.div>

              {/* Cooking Steps Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-950 text-white p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden"
              >
                {/* Decorative glow inside dark card */}
                <div
                  className="absolute top-0 right-0 w-[400px] h-[300px] pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 80% 0%, rgba(255,107,53,0.1) 0%, transparent 65%)' }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8 pb-5 border-b border-white/10">
                    <div className="w-12 h-12 bg-white/10 rounded-xl border border-white/10 flex items-center justify-center mr-4 text-white shrink-0">
                      <ChefHat className="h-6 w-6 text-cta" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">Simple Cooking Steps</h3>
                  </div>

                  <div className="space-y-8">
                    {kit.instructions.map((step, i) => (
                      <div key={i} className="flex items-start space-x-5 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-white group-hover:bg-cta group-hover:border-cta transition-colors">
                          {i + 1}
                        </div>
                        <div className="pt-1">
                          <p className="text-gray-300 leading-relaxed text-sm">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Customer Reviews & Ratings Section ── */}
      <section className="py-16 pb-24 px-5 sm:px-6 lg:px-8 relative z-10 border-t border-gray-150/60 bg-[#FAF9F5]/40">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-10 text-center md:text-left">
            <span className="text-[10px] font-bold text-cta bg-orange-50 border border-orange-100 px-3 py-1 rounded-full uppercase tracking-wider">
              Customer Love
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight mt-3">
              Real Reviews From Real Home Cooks
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              See how other food lovers are using FoodBox to cook restaurant-quality dishes.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Ratings Summary & Distribution */}
            <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.015)] space-y-6">
              {/* Overall Score */}
              <div className="text-center pb-6 border-b border-gray-100">
                <div className="text-6xl font-black text-gray-900 tracking-tighter leading-none">
                  {kit.rating ?? "4.8"}
                </div>
                <div className="flex items-center justify-center gap-1 mt-3.5 text-amber-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-2">
                  Based on {kit.reviews ?? 234} reviews
                </p>
              </div>

              {/* Star Distribution Progress Bars */}
              <div className="space-y-3">
                {[
                  { stars: 5, percentage: 88 },
                  { stars: 4, percentage: 8 },
                  { stars: 3, percentage: 2 },
                  { stars: 2, percentage: 1 },
                  { stars: 1, percentage: 1 },
                ].map(({ stars, percentage }) => (
                  <div key={stars} className="flex items-center gap-3 text-xs">
                    <span className="w-10 text-gray-500 font-bold shrink-0 flex items-center gap-0.5 justify-end">
                      {stars} <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    </span>
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"
                      />
                    </div>
                    <span className="w-8 text-gray-400 font-bold text-right shrink-0">
                      {percentage}%
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-100/80 text-center">
                <p className="text-xs font-semibold text-gray-600 leading-relaxed">
                  🥬 Sourced 100% locally from high-standard farms with strict quality assurance checkmarks.
                </p>
              </div>
            </div>

            {/* Right Column: Customer Review Feed */}
            <div className="lg:col-span-8 space-y-4">
              {[
                {
                  name: "Priya Sharma",
                  location: "Mumbai",
                  rating: 5,
                  date: "2 days ago",
                  text: "Wow! I am absolutely blown away by how fresh the ingredients are. The spinach puree was vibrant green and tasted freshly plucked. Portion sizes were perfectly measured, which meant I cooked it in 15 minutes flat with zero waste. Highly recommend!",
                  liked: ["Super Fresh Ingredients", "Perfect Spice Balance", "Zero Waste"],
                  avatarColor: "from-orange-400 to-pink-500",
                },
                {
                  name: "Rahul Mehta",
                  location: "Bangalore",
                  rating: 5,
                  date: "1 week ago",
                  text: "This tastes exactly like premium restaurant-grade food, but for a fraction of the price! The chef-curated spice mix is the real game-changer here; it gives that slow-cooked flavor. Ordering this at least twice a week now.",
                  liked: ["Restaurant Quality", "Great Value", "Easy Guide"],
                  avatarColor: "from-blue-500 to-teal-400",
                },
                {
                  name: "Anita Desai",
                  location: "Pune",
                  rating: 4,
                  date: "2 weeks ago",
                  text: "So convenient! With busy workdays, the prep work usually kills my mood to cook. The pre-portioned packs saved my evening. Excellent packaging and super simple instructions that my kids could easily help with.",
                  liked: ["Ultra Convenient", "Clear Cooking Steps"],
                  avatarColor: "from-purple-500 to-indigo-500",
                },
                {
                  name: "Vikram Singh",
                  location: "Delhi",
                  rating: 5,
                  date: "3 weeks ago",
                  text: "Exactly what I needed for my healthy lifestyle. I can track all my macros perfectly since the calorie stats are provided clearly. Tastes clean, nutritious, and absolutely fresh.",
                  liked: ["Highly Nutritious", "Macro Friendly", "Top-Tier Packaging"],
                  avatarColor: "from-emerald-400 to-green-600",
                }
              ].map(({ name, location, rating, date, text, liked, avatarColor }) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -2 }}
                  className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.01)] space-y-4 hover:border-gray-300 transition-colors"
                >
                  {/* User Profile info */}
                  <div className="flex items-start justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-extrabold text-sm bg-gradient-to-br ${avatarColor} shadow-inner shrink-0`}>
                        {name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-900 text-sm">{name}</span>
                          <span className="inline-flex items-center gap-1 text-[9.5px] font-bold text-green-600 bg-green-50/60 px-2 py-0.5 rounded-full border border-green-100">
                            <CheckCircle2 className="h-2.5 w-2.5" /> Verified Buyer
                          </span>
                        </div>
                        <p className="text-[10px] font-bold text-gray-400 mt-0.5">{location} • {date}</p>
                      </div>
                    </div>

                    {/* Ratings */}
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rating)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-650 text-sm leading-relaxed font-medium">
                    "{text}"
                  </p>

                  {/* Liked Tags & Helpful interactive element */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-gray-50">
                    <div className="flex flex-wrap gap-1.5">
                      {liked.map(tag => (
                        <span key={tag} className="text-[9.5px] font-bold text-gray-500 bg-[#FAFAF8] border border-gray-150/40 px-2 py-0.5 rounded-lg">
                          ✓ {tag}
                        </span>
                      ))}
                    </div>

                    <button 
                      type="button"
                      className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 font-bold transition-colors"
                    >
                      <ThumbsUp className="h-3 w-3" />
                      Helpful?
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Sticky Purchase Bar ── */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-gray-200/80 shadow-[0_-8px_32px_rgba(0,0,0,0.08)] py-3.5 px-4 sm:px-6 lg:px-8"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
              {/* Product metadata area */}
              <div className="flex items-center gap-3.5 min-w-0">
                <img
                  src={kit.image}
                  alt={kit.name}
                  className="w-12 h-12 rounded-xl object-cover border border-gray-150/45 shrink-0 hidden sm:block shadow-sm"
                />
                <div className="min-w-0">
                  <h4 className="font-bold text-gray-900 text-sm md:text-base leading-tight truncate">
                    {kit.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <span className="inline-flex items-center gap-0.5 text-amber-500 font-bold text-xs">
                      <Star className="h-3 w-3 fill-current" /> {kit.rating ?? 4.8}
                    </span>
                    <span className="text-[10px] text-gray-400 font-bold">•</span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      {kit.cookTime} Min Cook
                    </span>
                  </div>
                </div>
              </div>

              {/* Servings count, dynamic price & CTA */}
              <div className="flex items-center gap-4 shrink-0">
                {/* servings selector label (desktop only) */}
                <div className="hidden md:flex flex-col items-end">
                  <span className="text-[9px] font-bold text-gray-450 uppercase tracking-widest leading-none">Servings Selected</span>
                  <span className="font-extrabold text-gray-800 text-xs mt-1">
                    {persons} Pack{persons > 1 ? "s" : ""}
                  </span>
                </div>

                {/* Price tag */}
                <div className="text-right">
                  <span className="block text-gray-400 text-[8px] font-bold uppercase tracking-widest leading-none mb-1">Total Price</span>
                  <span className="text-lg md:text-xl font-black text-gray-950 tracking-tight">
                    ₹{Math.round((kit.price / baseServings) * persons + addOnTotal)}
                  </span>
                </div>

                {/* Compact elegant Add to Box CTA */}
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03, y: -1, boxShadow: "0 6px 20px rgba(255,107,53,0.3)" }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => addItem(kit, 1, persons, customIngredients)}
                  className="h-10 inline-flex items-center justify-center gap-1.5 px-5 sm:px-6 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] text-white font-black uppercase tracking-wider text-[10.5px] rounded-xl transition-all shadow-md"
                >
                  <ShoppingCart className="h-3.5 w-3.5 shrink-0" />
                  <span className="hidden xs:inline">Add to Box</span>
                  <span className="xs:hidden">Add</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

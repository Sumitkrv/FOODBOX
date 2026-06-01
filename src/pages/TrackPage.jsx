import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Package, Box, Truck, CheckCircle, MessageSquare, 
  Phone, ChevronDown, Check, Sparkles, Bike, Home, 
  MapPin, Navigation, Compass, Star, Award 
} from "lucide-react";

const stages = [
  { id: "preparing", label: "Preparing", icon: Package, desc: "✓ Kitchen Accepted • Sourcing organic herbs", date: "11:45 AM" },
  { id: "packed", label: "Box Packed", icon: Box, desc: "✓ Sealed in Eco-Ice Box • Double-checked", date: "12:30 PM" },
  { id: "delivery", label: "In Transit", icon: Truck, desc: "⚡ Rahul Mehta is on his way!", date: "ETA 12 Min" },
  { id: "delivered", label: "Delivered", icon: CheckCircle, desc: "🎁 Delivered • Handed to customer", date: "Pending" },
];

const faqs = [
  {
    q: "What time will my delivery arrive?",
    a: "Deliveries typically occur between 8:00 AM and 8:00 PM. On the morning of your delivery, you will receive a 2-hour delivery window notification.",
  },
  {
    q: "Do I need to be home to receive my kit?",
    a: "No! Our insulated boxes are designed to keep your ingredients fresh for up to 24 hours on your doorstep. You can specify a delivery spot in your profile settings.",
  },
  {
    q: "Can I change my delivery address?",
    a: "Changes to delivery addresses must be made at least 48 hours before your scheduled delivery day via your account dashboard.",
  },
];

export default function TrackPage() {
  const [orderId, setOrderId] = useState("FBX-28471");
  const [activeStage, setActiveStage] = useState(1);
  const [openFaq, setOpenFaq] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((s) => (s < 2 ? s + 1 : s));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const simulateTrack = () => {
    if (!orderId.trim()) return;
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setActiveStage(0);
      setTimeout(() => {
        setActiveStage(2);
      }, 300);
      document.getElementById("tracking-result")?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  };

  // Horizontal progress bar percentage calculation
  const progressWidth = activeStage === 0 ? "0%" : activeStage === 1 ? "33%" : activeStage === 2 ? "66%" : "100%";

  return (
    <div className="min-h-screen bg-[#FAF9F5] pb-16 relative overflow-hidden select-none font-sans">
      {/* Stripe-style high-end mesh grid background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />
      
      {/* Decorative premium ambient glowing color orbs */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none z-0 filter blur-[80px] opacity-[0.4]"
        style={{ background: 'radial-gradient(circle, rgba(255,107,53,0.1) 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-1/4 left-[-100px] w-[500px] h-[500px] pointer-events-none z-0 filter blur-[100px] opacity-[0.25]"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)' }}
      />

      {/* ── Visual Polish Header Section ── */}
      <header className="relative pt-28 pb-10 px-5 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-7xl mx-auto">
          {/* Uber Eats & Stripe style breadcrumb typography */}
          <nav className="flex items-center justify-center text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4 space-x-2">
            <Link className="hover:text-gray-900 transition-colors flex items-center gap-1.5" to="/">
              <Home size={11} className="stroke-[2.5px] mt-[-1px]" /> HOME
            </Link>
            <span className="text-gray-300">•</span>
            <span className="text-[#FF6B35] font-black">TRACK ORDER</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight max-w-2xl mx-auto">
            Track Your Harvest
          </h1>
          <p className="mt-3 max-w-xl mx-auto text-sm text-gray-500 font-semibold leading-relaxed">
            Enter your order ID below to verify your telemetry and track your farm-fresh ingredients on their journey straight to your kitchen.
          </p>

          {/* Search Card: Stripe Input Style */}
          <div className="max-w-xl mx-auto bg-white/80 backdrop-blur-md p-5 sm:p-6 rounded-[24px] shadow-[0_2px_8px_rgba(0,0,0,0.02),0_12px_28px_rgba(0,0,0,0.015)] border border-gray-200/60 mt-8 text-left relative overflow-hidden transition-all hover:shadow-[0_4px_16px_rgba(0,0,0,0.03),0_16px_36px_rgba(0,0,0,0.025)]">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <label className="block text-[9px] font-black uppercase tracking-[0.15em] text-gray-400 mb-2 ml-1" htmlFor="order_id">
                  Order Reference ID
                </label>
                <div className="relative">
                  <input
                    className="w-full rounded-xl border border-gray-200/80 bg-[#FAFAF8] px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#FF6B35] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/10 font-bold text-sm transition-all shadow-inner"
                    id="order_id"
                    placeholder="e.g. FBX-28471"
                    type="text"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                  />
                  <div className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 items-center gap-1.5 px-2 py-1 rounded bg-gray-100 border border-gray-200 pointer-events-none select-none">
                    <span className="text-[9px] font-black text-gray-400 font-mono">⌘K</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-end">
                <motion.button
                  whileHover={{ scale: 1.02, y: -1, boxShadow: "0 8px 24px rgba(255,107,53,0.25)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={simulateTrack}
                  disabled={isSearching}
                  className="w-full md:w-auto h-11 inline-flex items-center justify-center gap-2 px-6 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] text-white font-black uppercase tracking-wider text-[11px] rounded-xl transition-all shadow-[0_4px_12px_rgba(255,107,53,0.15)] cursor-pointer"
                >
                  {isSearching ? (
                    <span className="h-4.5 w-4.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Truck className="h-4.5 w-4.5" />
                  )}
                  Track Delivery
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Tracking Visualizer Section ── */}
      <section className="py-12 bg-white border-y border-gray-100 relative z-10 shadow-[0_1px_3px_rgba(0,0,0,0.015)]" id="tracking-result">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          
          {/* Stage Progress Tracker */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative pb-4">
            {/* Desktop progress bar track line */}
            <div className="hidden md:block absolute top-8 left-12 right-12 h-1 bg-gray-100 rounded-full z-0 overflow-hidden border border-gray-200/10">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full animate-progress-flow"
                style={{ width: progressWidth }}
              />
            </div>

            {stages.map((stage, i) => {
              const isActive = i <= activeStage;
              const isCurrent = i === activeStage;
              
              return (
                <div key={stage.id} className="flex md:flex-col items-center gap-4 md:gap-4 relative z-10 group/node">
                  {/* Status Node Circle */}
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center border transition-all duration-500 shrink-0 ${
                      isActive
                        ? "bg-gradient-to-tr from-emerald-500 to-emerald-600 text-white border-emerald-600 shadow-[0_4px_12px_rgba(16,185,129,0.25)]"
                        : "bg-[#F8FAFC] text-gray-400 border-gray-200"
                    } ${
                      isCurrent
                        ? "ring-4 ring-emerald-500/20 scale-105 shadow-[0_0_20px_rgba(16,185,129,0.35)] animate-bounce-pulse"
                        : ""
                    } group-hover/node:scale-105`}
                  >
                    <stage.icon className="h-6.5 w-6.5 stroke-[2.2px]" />
                  </div>
                  
                  {/* Text Details Area */}
                  <div className="md:text-center min-w-0">
                    <div className="flex flex-wrap md:flex-col items-center justify-start md:justify-center gap-1.5 md:gap-1">
                      <h3
                        className={`text-sm md:text-[14.5px] font-black transition duration-300 ${
                          isActive ? "text-gray-900" : "text-gray-400"
                        }`}
                      >
                        {stage.label}
                      </h3>
                      {/* Timestamp Badge */}
                      <span className="text-[9px] font-bold text-gray-400 bg-gray-50 border border-gray-200/50 px-2 py-0.5 rounded-full font-mono">
                        {stage.date}
                      </span>
                    </div>
                    
                    {/* Status Descriptor Card */}
                    <p className={`text-[10px] font-semibold mt-2.5 leading-snug px-3 py-1.5 rounded-xl border text-center max-w-[170px] mx-auto transition-all ${
                      isCurrent
                        ? "text-[#FF6B35] bg-orange-50/60 border-orange-100 font-bold animate-pulse shadow-sm"
                        : isActive
                        ? "text-gray-500 bg-gray-50 border-gray-150/40"
                        : "text-transparent bg-transparent border-transparent"
                    }`}>
                      {stage.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Delivery Insights Cards Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Order ID", value: orderId, sub: "Verified Secure Purchase", icon: Box, color: "text-blue-600 bg-blue-50/80 border-blue-100/50" },
              { label: "Estimated Arrival", value: "12 Mins (On Time)", sub: "Live GPS Telemetry", icon: Compass, color: "text-[#FF6B35] bg-orange-50/80 border-orange-100/50" },
              { label: "Distance Remaining", value: "1.8 km Left", sub: "Calculated Real-Time", icon: Truck, color: "text-green-600 bg-green-50/80 border-green-100/50" },
              { label: "Current Status", value: stages[activeStage]?.label || "In Transit", sub: stages[activeStage]?.desc || "On the way", icon: CheckCircle, color: "text-indigo-600 bg-indigo-50/80 border-indigo-100/50" },
              { label: "Last Updated", value: "Just Now", sub: "Active Socket Connection", icon: Sparkles, color: "text-amber-600 bg-amber-50/80 border-amber-100/50" },
              { label: "Delivery Address", value: "Bandra West, Mumbai", sub: "Eco-Insulated Home Drop", icon: MapPin, color: "text-emerald-600 bg-emerald-50/80 border-emerald-100/50" },
            ].map(({ label, value, sub, icon: Icon, color }, idx) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(0,0,0,0.015),0_10px_24px_rgba(0,0,0,0.01)", borderColor: "rgba(0,0,0,0.15)" }}
                className="bg-[#FAFAF8]/40 border border-gray-200/60 p-4.5 rounded-2xl transition-all flex items-start gap-3.5 hover:bg-white"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${color} shadow-sm`}>
                  <Icon className="w-5 h-5 stroke-[2.2px]" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[8px] font-black text-gray-400 uppercase tracking-[0.15em] leading-none mb-1.5">{label}</span>
                  <span className="block font-black text-gray-900 text-[13.5px] leading-tight truncate">{value}</span>
                  <span className="block text-[9.5px] font-bold text-gray-400 mt-1 leading-none flex items-center gap-1">
                    {label === "Last Updated" && (
                      <span className="flex h-1.5 w-1.5 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                      </span>
                    )}
                    {sub}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Uber Eats style Rider Card */}
          {activeStage >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 rounded-3xl bg-white border border-gray-200/80 p-5 sm:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.015),0_12px_24px_rgba(0,0,0,0.015)] relative overflow-hidden hover:shadow-[0_4px_16px_rgba(0,0,0,0.025),0_16px_36px_rgba(0,0,0,0.02)] transition-all"
            >
              {/* Top accent visual design line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A]" />
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 relative z-10">
                {/* Rider Avatar with Online indicator */}
                <div className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-orange-400 to-[#FF6B35] text-white flex items-center justify-center font-black text-xl border border-white/50 shadow-md relative overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.15)_50%,transparent_75%)] bg-[size:250%_250%] animate-shine pointer-events-none" />
                      RM
                    </div>
                    {/* Live Online Pulse */}
                    <span className="absolute -bottom-1 -right-1 w-4.5 h-4.5 bg-emerald-500 rounded-full border-3 border-white shadow-sm flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                    </span>
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-black text-gray-900 text-[15.5px]">Rahul Mehta</span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[8.5px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-100">
                        <Award size={9.5} className="stroke-[2.5px]" /> SUPER PARTNER
                      </span>
                    </div>

                    {/* Rider Trust Metrics */}
                    <div className="flex items-center gap-3 mt-1 text-[11.5px] text-gray-500 font-semibold">
                      <span className="flex items-center gap-0.5 text-amber-500 font-bold">
                        <Star className="h-3.5 w-3.5 fill-current" /> 4.9
                      </span>
                      <span className="text-gray-300">•</span>
                      <span>1,200+ Deliveries Done</span>
                    </div>

                    {/* Vehicle Registration */}
                    <p className="text-[10px] text-gray-400 font-bold mt-1.5 uppercase tracking-wider leading-none">
                      🛵 Hero Splendor • MH-12-PQ-9876
                    </p>
                  </div>
                </div>

                {/* Call / Chat Interactive Group */}
                <div className="flex items-center justify-between sm:justify-end gap-5 w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                  <div className="text-left sm:text-right">
                    <span className="block text-[8px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Estimated Arrival</span>
                    <span className="inline-flex items-center gap-1 text-[10.5px] font-black text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-lg">
                      On Time • 12 Mins
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <motion.a 
                      whileHover={{ scale: 1.04, y: -1 }}
                      whileTap={{ scale: 0.96 }}
                      href="tel:+919876543210" 
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FAFAF8] border border-gray-200/80 hover:border-[#FF6B35] text-gray-600 hover:text-[#FF6B35] hover:bg-white shadow-sm transition-all cursor-pointer"
                      aria-label="Call Rider"
                    >
                      <Phone className="h-4.5 w-4.5 stroke-[2.2px]" />
                    </motion.a>
                    
                    <motion.button 
                      whileHover={{ scale: 1.04, y: -1 }}
                      whileTap={{ scale: 0.96 }}
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FAFAF8] border border-gray-200/80 hover:border-[#FF6B35] text-gray-600 hover:text-[#FF6B35] hover:bg-white shadow-sm transition-all cursor-pointer"
                      aria-label="Chat with Rider"
                    >
                      <MessageSquare className="h-4.5 w-4.5 stroke-[2.2px]" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Animated Custom Vector Map Section */}
          <div className="mt-6 rounded-[28px] overflow-hidden border border-gray-200/80 h-96 relative group shadow-[0_2px_8px_rgba(0,0,0,0.015),0_12px_24px_rgba(0,0,0,0.015)] bg-[#FAF9F5] select-none hover:shadow-[0_4px_16px_rgba(0,0,0,0.025),0_16px_36px_rgba(0,0,0,0.02)] transition-all">
            {/* Grid Backdrop Pattern representing Map Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

            {/* Custom SVG Vector Map Layer */}
            <svg className="absolute inset-0 w-full h-full text-gray-250 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              {/* Neutral minimalist streets */}
              <path d="M -50 120 L 600 120 L 1000 240" fill="none" stroke="#F1EDE4" strokeWidth="18" strokeLinecap="round" />
              <path d="M 120 -50 L 120 500" fill="none" stroke="#F1EDE4" strokeWidth="14" strokeLinecap="round" />
              <path d="M 380 -50 L 380 500" fill="none" stroke="#F1EDE4" strokeWidth="16" strokeLinecap="round" />
              <path d="M -50 280 L 1000 280" fill="none" stroke="#F1EDE4" strokeWidth="18" strokeLinecap="round" />
              <path d="M 680 -50 L 680 500" fill="none" stroke="#F1EDE4" strokeWidth="15" strokeLinecap="round" />
              
              {/* Scenic Water Body - pale elegant transparent blue */}
              <path d="M -50 30 C 200 40, 400 -20, 600 20 C 800 60, 950 10, 1050 40 L 1050 -50 L -50 -50 Z" fill="#E5F2FF" opacity="0.8" />

              {/* Dotted Route Glow (underlay) */}
              <path 
                d="M 200 280 L 380 280 L 380 120 L 680 120" 
                fill="none" 
                stroke="#FF6B35" 
                strokeWidth="8" 
                strokeLinecap="round" 
                opacity="0.12"
              />

              {/* Animated Route Path connecting Rider to Customer */}
              <path 
                d="M 200 280 L 380 280 L 380 120 L 680 120" 
                fill="none" 
                stroke="#FF6B35" 
                strokeWidth="4.5" 
                strokeLinecap="round" 
                strokeDasharray="8 6"
                className="animate-route-flow"
              />
            </svg>

            {/* Custom CSS styles */}
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes routeFlow {
                to { stroke-dashoffset: -20; }
              }
              .animate-route-flow {
                animation: routeFlow 1s linear infinite;
              }
              @keyframes radarPulse {
                0% { transform: scale(0.9); opacity: 1; }
                100% { transform: scale(2.4); opacity: 0; }
              }
              .animate-radar-pulse {
                animation: radarPulse 2.2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
              }
              @keyframes progressFlow {
                0% { background-position: 0 0; }
                100% { background-position: 30px 0; }
              }
              .animate-progress-flow {
                background-size: 30px 30px;
                background-image: linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);
                animation: progressFlow 1s linear infinite;
                transition: width 0.8s ease-in-out;
              }
              @keyframes bouncePulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
              }
              .animate-bounce-pulse {
                animation: bouncePulse 2s ease-in-out infinite;
              }
              @keyframes shine {
                0% { background-position: -150%; }
                50% { background-position: 150%; }
                100% { background-position: 150%; }
              }
              .animate-shine {
                animation: shine 4s infinite linear;
              }
            `}} />

            {/* Customer Location Pin */}
            <div className="absolute top-[120px] left-[68%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              {/* Radar Ring */}
              <div className="absolute w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 animate-radar-pulse" />
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg relative z-10 border-3 border-white">
                <Home className="w-4.5 h-4.5 stroke-[2.2px]" />
              </div>
              <span className="mt-1.5 bg-emerald-600 text-white text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md relative z-10 border border-white/10 shadow-sm whitespace-nowrap">
                Destination
              </span>
            </div>

            {/* Rider Location Pin */}
            <motion.div 
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[280px] left-[200px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
            >
              {/* Radar Ring */}
              <div className="absolute w-14 h-14 rounded-full bg-orange-500/20 border border-orange-500/30 animate-radar-pulse" />
              <div className="w-10 h-10 rounded-full bg-[#FF6B35] text-white flex items-center justify-center shadow-lg relative z-10 border-3 border-white">
                <Bike className="w-5 h-5 stroke-[2.2px]" />
              </div>
              <span className="mt-1.5 bg-gray-900 text-white text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md relative z-10 border border-white/10 shadow-sm whitespace-nowrap">
                Rahul M.
              </span>
            </motion.div>

            {/* Float Badge 1: Uber Eats Live Connectivity Header */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-gray-200/80 shadow-md flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-[9.5px] font-black text-gray-500 uppercase tracking-widest leading-none">
                Live Status: S.V. Road • Updated 2s ago
              </span>
            </div>

            {/* Float Badge 2: Zomato/Swiggy Live ETA and Distance Widget */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto bg-white/95 backdrop-blur-md px-6 py-4 rounded-3xl border border-gray-200/80 shadow-xl max-w-sm flex items-center justify-between gap-6">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF6B35] flex items-center justify-center shrink-0 border border-orange-100/50 shadow-sm">
                  <Compass className="w-5 h-5 animate-spin" style={{ animationDuration: '8s' }} />
                </div>
                <div className="min-w-0">
                  <span className="block text-[8px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Estimated Arrival</span>
                  <span className="text-lg font-black text-gray-900 tracking-tight leading-none">12 Mins</span>
                </div>
              </div>
              
              <div className="h-8 border-l border-gray-150" />

              <div className="text-right shrink-0">
                <span className="block text-[8px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Distance Left</span>
                <span className="text-sm font-extrabold text-emerald-700 tracking-tight leading-none block">1.8 km</span>
              </div>
            </div>
          </div>

          {/* Live Delivery Activity Feed */}
          <div className="mt-8 bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-[0_2px_8px_rgba(0,0,0,0.015),0_12px_24px_rgba(0,0,0,0.015)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.025),0_16px_36px_rgba(0,0,0,0.02)] transition-all relative overflow-hidden">
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B35] to-emerald-600" />
            
            <div className="flex items-center justify-between border-b border-gray-100 pb-5 mb-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider text-[#FF6B35] bg-orange-50 border border-orange-100/50">
                  Real-Time Updates
                </span>
                <h3 className="text-xl font-black text-gray-900 tracking-tight mt-1.5">
                  Live Delivery Activity
                </h3>
              </div>
              {/* Pulsing LIVE Indicator Badge */}
              <div className="flex items-center gap-2 bg-[#FAFAF8] border border-gray-200/80 px-3 py-1.5 rounded-xl">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider text-gray-700">LIVE Feed</span>
              </div>
            </div>

            {/* Timeline Steps */}
            <div className="relative pl-6 sm:pl-8 border-l border-dashed border-gray-200 ml-4 space-y-8">
              {[
                {
                  id: "out-for-delivery",
                  title: "Out For Delivery",
                  desc: "Rahul Mehta has collected your custom FoodBox and is heading towards your location. ETA remains solid at 12 minutes.",
                  time: "12:12 PM",
                  relative: "Just Now",
                  status: "active",
                  icon: Bike,
                  color: "bg-[#FF6B35] text-white border-[#FF6B35]",
                  glow: "shadow-[0_0_15px_rgba(255,107,53,0.3)] ring-4 ring-orange-100/50",
                  cardClass: "border-l-4 border-l-[#FF6B35] bg-orange-50/20"
                },
                {
                  id: "reached-hub",
                  title: "Rider Reached Nearby Hub",
                  desc: "Rider completed the mid-route checkpoint at Bandra Hub. Prep boxes checked, cold-insulation verified, and routed for dispatch.",
                  time: "12:08 PM",
                  relative: "4 mins ago",
                  status: "completed",
                  icon: Check,
                  color: "bg-emerald-600 text-white border-emerald-600",
                  glow: "",
                  cardClass: "border-l-4 border-l-emerald-600 bg-emerald-50/10"
                },
                {
                  id: "picked-up",
                  title: "Rider Picked Up Order",
                  desc: "Rahul Mehta checked-in at our kitchen, retrieved your eco-insulated thermo-ice box, and confirmed the unboxing checklist.",
                  time: "11:58 AM",
                  relative: "14 mins ago",
                  status: "completed",
                  icon: Check,
                  color: "bg-emerald-600 text-white border-emerald-600",
                  glow: "",
                  cardClass: "bg-[#FAFAF8]/20"
                },
                {
                  id: "packed",
                  title: "Ingredients Packed",
                  desc: "Every organic ingredient portioned, double-sanitized, and vacuum-sealed to ensure chef-grade farm freshness.",
                  time: "11:40 AM",
                  relative: "32 mins ago",
                  status: "completed",
                  icon: Check,
                  color: "bg-emerald-600 text-white border-emerald-600",
                  glow: "",
                  cardClass: "bg-[#FAFAF8]/20"
                },
                {
                  id: "confirmed",
                  title: "Order Confirmed",
                  desc: "Order payment verified by the central kitchen. Culinary prep queue initiated and recipe cards formatted.",
                  time: "11:32 AM",
                  relative: "40 mins ago",
                  status: "completed",
                  icon: Check,
                  color: "bg-emerald-600 text-white border-emerald-600",
                  glow: "",
                  cardClass: "bg-[#FAFAF8]/20"
                }
              ].map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="relative group/step"
                  >
                    {/* Circle timeline bullet */}
                    <div className={`absolute -left-[39px] sm:-left-[47px] top-0 w-8 h-8 rounded-full flex items-center justify-center border-2 bg-white transition-all duration-300 ${step.color} ${step.glow} group-hover/step:scale-110`}>
                      {step.status === "active" ? (
                        <span className="relative flex h-3.5 w-3.5 items-center justify-center">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                          <Icon className="relative h-3 w-3 stroke-[2.5px]" />
                        </span>
                      ) : (
                        <Icon className="h-4.5 w-4.5 stroke-[3px]" />
                      )}
                    </div>

                    <div className={`flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 sm:gap-6 border border-gray-200/50 p-4.5 rounded-2xl group-hover/step:bg-[#FAFAF8]/80 group-hover/step:border-gray-300 transition-all duration-300 shadow-sm ${step.cardClass}`}>
                      <div className="min-w-0">
                        {/* Title with Status Indicator */}
                        <div className="flex items-center gap-2">
                          <h4 className={`font-black text-[13.5px] tracking-tight ${step.status === "active" ? "text-[#FF6B35]" : "text-gray-900"}`}>
                            {step.status === "completed" ? "✔ " : ""} {step.title}
                          </h4>
                          {step.status === "active" && (
                            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#FF6B35] animate-pulse" />
                          )}
                        </div>
                        <p className="text-[11.5px] text-gray-500 font-semibold leading-relaxed mt-1">
                          {step.desc}
                        </p>
                      </div>

                      {/* Timestamp Badge */}
                      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-1 shrink-0 mt-2 sm:mt-0 pt-2.5 sm:pt-0 border-t sm:border-t-0 border-gray-100/50">
                        <span className="text-[10px] font-black text-gray-900 font-mono">
                          {step.time}
                        </span>
                        <span className={`text-[8.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md ${step.status === "active" ? "text-[#FF6B35] bg-orange-50 border border-orange-100/50" : "text-gray-400 bg-gray-50 border border-gray-150/30"}`}>
                          {step.relative}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-14 bg-[#FAF9F5]/70 relative z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <span className="text-[9.5px] font-black text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full uppercase tracking-widest font-mono">
                SUPPORT DESK
              </span>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight mt-4 mb-3">
                Delivery Help
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed font-semibold">
                Have questions about your artisanal harvest? Our team is here to ensure your farm-to-table experience is seamless.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-black text-[11px] uppercase tracking-wider cursor-pointer transition-colors"
              >
                Contact Support <span className="font-serif">➔</span>
              </Link>
            </div>

            <div className="md:w-2/3 grid gap-4 items-start">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.015)] overflow-hidden transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.02)]"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left p-5 flex justify-between items-center cursor-pointer font-bold text-sm md:text-base text-gray-900 hover:text-[#FF6B35] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-gray-500 font-semibold leading-relaxed border-t border-gray-100">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

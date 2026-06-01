/**
 * FoodBox Shared Animation Library
 * ─────────────────────────────────
 * Central source of truth for all motion values.
 * Import from this file in every component — never
 * define ad-hoc variants inline.
 */

/* ─── Core easing curves ────────────────────────────────── */
export const ease = {
  out:    [0.22, 1, 0.36, 1],   // expo out — fast start, gentle land
  inOut:  [0.4,  0, 0.2,  1],   // material standard
  spring: { type: 'spring', stiffness: 380, damping: 30 },
  springBounce: { type: 'spring', stiffness: 500, damping: 20 },
};

/* ─── Fade + translate presets ──────────────────────────── */
export const fadeUp = (delay = 0, distance = 22) => ({
  hidden:  { opacity: 0, y: distance },
  visible: { opacity: 1, y: 0,       transition: { duration: 0.58, delay, ease: ease.out } },
  exit:    { opacity: 0, y: -distance * 0.5, transition: { duration: 0.25, ease: ease.inOut } },
});

export const fadeIn = (delay = 0) => ({
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delay, ease: ease.out } },
  exit:    { opacity: 0, transition: { duration: 0.2 } },
});

export const fadeLeft = (delay = 0, distance = 30) => ({
  hidden:  { opacity: 0, x:  distance },
  visible: { opacity: 1, x: 0,        transition: { duration: 0.58, delay, ease: ease.out } },
});

export const fadeRight = (delay = 0, distance = 30) => ({
  hidden:  { opacity: 0, x: -distance },
  visible: { opacity: 1, x: 0,        transition: { duration: 0.58, delay, ease: ease.out } },
});

export const scaleIn = (delay = 0) => ({
  hidden:  { opacity: 0, scale: 0.93 },
  visible: { opacity: 1, scale: 1,   transition: { duration: 0.5, delay, ease: ease.out } },
});

/* ─── Stagger container ─────────────────────────────────── */
export const stagger = (staggerSec = 0.07, delayChildren = 0) => ({
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: staggerSec, delayChildren },
  },
});

/** Child variant for stagger containers — pair with stagger() on parent */
export const staggerChild = {
  hidden:  { opacity: 0, y: 18, scale: 0.97 },
  visible: { opacity: 1, y: 0,  scale: 1,   transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Viewport config ───────────────────────────────────── */
/** Standard once-only viewport trigger with generous margin */
export const viewport = (margin = '-60px') => ({ once: true, margin });

/* ─── Hover / tap presets (pass to whileHover / whileTap) ── */
export const hoverLift    = { y: -4,  transition: { duration: 0.22, ease: ease.out } };
export const hoverLiftSm  = { y: -2,  transition: { duration: 0.2,  ease: ease.out } };
export const hoverScale   = { scale: 1.04, transition: { duration: 0.22, ease: ease.out } };
export const tapPress     = { scale: 0.96 };
export const tapPressHard = { scale: 0.93 };

/* ─── Floating loop animation (for decorative elements) ──── */
export const floatLoop = (yAmt = 10, duration = 4, delay = 0) => ({
  y: [0, -yAmt, 0],
  transition: {
    duration,
    delay,
    repeat: Infinity,
    ease: 'easeInOut',
  },
});

export const floatRotateLoop = (yAmt = 8, rotateDeg = 5, duration = 5, delay = 0) => ({
  y:      [0, -yAmt, 0],
  rotate: [0, rotateDeg, 0],
  transition: {
    duration,
    delay,
    repeat: Infinity,
    ease: 'easeInOut',
  },
});

/* ─── Page transition (for PageTransition.jsx) ───────────── */
export const pageTransition = {
  initial:  { opacity: 0, y: 12, filter: 'blur(4px)' },
  animate:  { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.4, ease: ease.out } },
  exit:     { opacity: 0, y: -8, filter: 'blur(4px)', transition: { duration: 0.22, ease: ease.inOut } },
};

/* ─── Counter animation helper ───────────────────────────── */
export function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

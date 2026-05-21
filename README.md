# FOODBOX

Premium meal-kit marketing site: **React 19**, **JavaScript**, **Vite 7**, and **Tailwind CSS v4**.

## Scripts

```bash
npm install
npm run dev    # http://localhost:5173
npm run build
npm run preview
```

## Stack

- [Vite](https://vitejs.dev/) — dev server & production build  
- [React Router](https://reactrouter.com/) — client-side routes (home, meal kits, product `/product/:id`, dashboard, admin `/admin/*`, etc.)  
- [Tailwind CSS v4](https://tailwindcss.com/) — `@tailwindcss/vite`, theme tokens in `src/index.css` (`@theme`)  
- [Framer Motion](https://www.framer.com/motion/) — hero & page transitions  
- [react-helmet-async](https://github.com/staylor/react-helmet-async) — per-route titles/meta  

No TypeScript — all source is `.jsx` / `.js`.

## Structure

- `src/pages/` — route-level screens  
- `src/components/` — UI (navbar, home sections, cart, etc.)  
- `src/layouts/AdminLayout.jsx` — admin shell + `<Outlet />`  
- `src/lib/data.js` — static meal kit & plan data  

## Note

This is a front-end demo: cart and checkout use React context only (no API).

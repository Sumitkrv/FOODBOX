import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 pt-28">
      <h1 className="text-6xl font-bold text-brand-green">404</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">This page doesn&apos;t exist.</p>
      <Link to="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </div>
  );
}

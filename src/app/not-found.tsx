import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <span className="font-mono text-mono-s text-text-tertiary block mb-4">404</span>
        <h1 className="font-display text-display-m text-text-primary mb-4">Page not found</h1>
        <p className="font-body text-body-l text-text-secondary mb-8">
          This page doesn&apos;t exist — but the work does.
        </p>
        <Link
          href="/"
          className="font-body text-body-m font-medium text-text-primary hover:opacity-60 transition-opacity"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}

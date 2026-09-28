"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isBFPage = pathname === "/work/between-feelings";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300",
          scrolled || menuOpen
            ? isBFPage
              ? "bg-[#0D0B14]/95 backdrop-blur-md border-b border-[#2D2540]"
              : "bg-[#F8F6F1]/95 backdrop-blur-md border-b border-[#E2DED7]"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <nav
          className="container-content h-full flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Wordmark */}
          <Link
            href="/"
            className={cn(
              "font-body text-[17px] font-medium tracking-tight transition-colors duration-200",
              isBFPage ? "text-[#E8E0F0] hover:text-white" : "text-text-primary hover:text-text-secondary"
            )}
          >
            Qingyun Yao
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                isBFPage={isBFPage}
                isActive={pathname === link.href}
              />
            ))}
            <a
              href="/Qingyun_Yao_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "font-body text-[15px] font-medium tracking-[0.01em] transition-colors duration-200",
                isBFPage
                  ? "text-[#9B90B0] hover:text-[#E8E0F0]"
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              Resume ↗
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={cn(
              "md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]",
              "rounded"
            )}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "block w-5 h-px",
                isBFPage ? "bg-[#E8E0F0]" : "bg-text-primary"
              )}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.1 }}
              className={cn(
                "block w-5 h-px",
                isBFPage ? "bg-[#E8E0F0]" : "bg-text-primary"
              )}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "block w-5 h-px",
                isBFPage ? "bg-[#E8E0F0]" : "bg-text-primary"
              )}
            />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "fixed inset-0 z-40 flex flex-col items-center justify-center",
              isBFPage ? "bg-[#0D0B14]" : "bg-[#F8F6F1]"
            )}
          >
            <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "font-display text-[40px] leading-none transition-opacity hover:opacity-60",
                      isBFPage ? "text-[#E8E0F0]" : "text-text-primary"
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.3 }}
              >
                <a
                  href="/Qingyun_Yao_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "font-display text-[40px] leading-none transition-opacity hover:opacity-60",
                    isBFPage ? "text-[#9B90B0]" : "text-text-secondary"
                  )}
                >
                  Resume ↗
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── NAV LINK SUB-COMPONENT ──────────────────────────────────────────────────

function NavLink({
  href,
  label,
  isBFPage,
  isActive,
}: {
  href: string;
  label: string;
  isBFPage: boolean;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "relative font-body text-[15px] font-medium tracking-[0.01em] transition-colors duration-200",
        "after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-px",
        "after:transition-transform after:duration-250 after:ease-smooth",
        isBFPage
          ? "text-[#9B90B0] hover:text-[#E8E0F0] after:bg-[#E8E0F0]"
          : "text-text-secondary hover:text-text-primary after:bg-text-primary",
        isActive
          ? "text-text-primary after:scale-x-100"
          : "after:scale-x-0 after:origin-left hover:after:scale-x-100"
      )}
    >
      {label}
    </Link>
  );
}

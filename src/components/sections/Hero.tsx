"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export function Hero() {
  return (
    <section className="relative pt-52 pb-32 md:pt-60 md:pb-40 overflow-hidden">
      <div className="container-content">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.span
            custom={0}
            variants={variants}
            className="section-label text-text-secondary block mb-8"
          >
            Product & UX Designer&nbsp;&nbsp;·&nbsp;&nbsp;Cornell MPS Information Science&nbsp;&nbsp;·&nbsp;&nbsp;Penn State HCDD
          </motion.span>

          {/* H1 */}
          <motion.h1
            custom={1}
            variants={variants}
            className="font-display text-display-l md:text-display-xl text-text-primary mb-8"
          >
            <span className="block">Qingyun Yao</span>
            <span
              className="block text-text-secondary"
              style={{ fontStyle: "italic" }}
            >
              Product & UX Designer
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            custom={2}
            variants={variants}
            className="font-body text-body-l md:text-body-xl text-text-secondary max-w-[560px] mb-10"
          >
            I design human-centered digital experiences, combining user research, interaction design, and emerging technologies to solve real-world problems.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={variants}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 font-body text-body-m font-medium text-text-primary transition-opacity hover:opacity-60"
            >
              View Work
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                aria-hidden="true"
              >
                ↓
              </motion.span>
            </a>

            <span className="font-body text-body-s text-text-tertiary">
              Open to Summer 2027 Product Design & UX Design Internships
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative horizontal rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.8, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ transformOrigin: "left" }}
        className="absolute bottom-0 left-0 right-0 h-px bg-border"
        aria-hidden="true"
      />
    </section>
  );
}

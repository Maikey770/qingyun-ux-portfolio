import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-0">
      <div className="container-content py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Left */}
          <div>
            <p className="font-body text-[15px] font-medium text-text-primary mb-1">
              Let&apos;s work together.
            </p>
            <a
              href="mailto:yaoqingyun849@gmail.com"
              className="font-body text-body-s text-text-secondary hover:text-text-primary transition-colors"
            >
              yaoqingyun849@gmail.com
            </a>
          </div>

          {/* Center links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/qingyun-yao-79b74b369"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-body-s text-text-secondary hover:text-text-primary transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/qingyunyao"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-body-s text-text-secondary hover:text-text-primary transition-colors"
            >
              GitHub ↗
            </a>
          </div>

          {/* Right */}
          <p className="font-body text-caption text-text-tertiary">
            © {year} Qingyun Yao
          </p>
        </div>
      </div>
    </footer>
  );
}

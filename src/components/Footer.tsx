import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { name: "Twitter",  href: "https://twitter.com",  icon: Twitter  },
  { name: "GitHub",   href: "https://github.com/ArkayenLabs", icon: Github   },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
];

export const Footer = () => {
  return (
    <footer
      className="relative py-14"
      style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo & copyright */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/logo.png" alt="Arkayen Labs" className="w-12 h-12 object-contain" />
              <span className="text-lg font-bold text-foreground font-heading">Arkayen Labs</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              © 2026 Arkayen Labs. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 flex-wrap justify-center">
          <div className="flex items-center gap-5 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-200 cursor-pointer"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

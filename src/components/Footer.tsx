import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
];

export const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sunrise-orange to-sunrise-amber flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-foreground">Arkayen Labs</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              © 2026 Arkayen Labs. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <Link
              to="/privacy"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

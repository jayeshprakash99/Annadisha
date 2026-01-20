import { Heart, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-display font-bold mb-4">ANNADISHA</h3>
            <p className="text-primary-foreground/70 mb-4 leading-relaxed">
              Bihar's authentic traditional snacks, handcrafted with love by a women-led team.
            </p>
            <div className="flex items-center gap-2 text-golden-light">
              <Heart className="w-4 h-4" fill="currentColor" />
              <span className="text-sm font-medium">Women-Empowered Brand</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Products", "About Us", "Why Choose Us", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Our Products</h4>
            <ul className="space-y-3">
              <li className="text-primary-foreground/70">Thekua</li>
              <li className="text-primary-foreground/70">Nimki</li>
              <li className="text-primary-foreground/70">Gujia (Pedhokia)</li>
              <li className="text-golden-light font-medium">🧈 Ghee Special Range</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Connect With Us</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://wa.me/918409236506"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-green-500/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/annadishaofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-pink-500/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              🚚 Delivering All Over India
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} ANNADISHA. All rights reserved.</p>
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-accent" fill="currentColor" />
              <a
                href="https://webytesolutions.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:underline"
              >
                by WeByte Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

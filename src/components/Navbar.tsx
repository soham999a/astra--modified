import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <a
          href="/"
          className="flex items-center group"
          aria-label="Home"
        >
          <h1 className="text-xl md:text-2xl font-bold text-mystic-gold group-hover:scale-105 transition-transform duration-300">
            Logo
          </h1>
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-charcoal hover:text-mystic-gold transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 z-40 bg-soft-cream/98 backdrop-blur-sm transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out md:hidden`}
          style={{
            top: isScrolled ? '56px' : '68px',
            height: 'calc(100vh - 56px)',
            maxHeight: '-webkit-fill-available'
          }}
        >
          <div className="h-full w-full overflow-y-auto pb-20 safe-area-inset-bottom">
            <nav className="flex flex-col items-center justify-center h-full space-y-8 text-xl pt-8">
              <NavLinks onClick={() => setIsMenuOpen(false)} />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLinks = ({ onClick }: { onClick?: () => void }) => {
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    {
      to: '/numerology',
      label: 'Numerology',
      submenu: [
        { to: '/numerology#name-correction', label: 'Name Correction' },
        { to: '/numerology#personality-analysis', label: 'Personality Analysis' },
        { to: '/numerology#compatibility', label: 'Compatibility' }
      ]
    },
    {
      to: '/vastu',
      label: 'Vastu',
      submenu: [
        { to: '/vastu#home', label: 'Home Vastu' },
        { to: '/vastu#business', label: 'Business Vastu' },
        { to: '/vastu#plot', label: 'Plot Selection' }
      ]
    },
    { to: '/astrology', label: 'Astrology' },
    { to: '/contact', label: 'Contact Us' },
    { to: '/dashboard', label: 'Dashboard' },
  ];

  return (
    <>
      {links.map((link) => {
        const isActive = location.pathname === link.to;
        const hasSubmenu = link.submenu && link.submenu.length > 0;

        if (isActive) {
          // Render active link with enhanced indicator
          return (
            <div key={link.to} className="relative group">
              <span
                className="relative font-medium text-mystic-gold cursor-default inline-flex items-center
                  after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-mystic-gold after:bottom-[-6px] after:left-0
                  before:content-[''] before:absolute before:w-full before:h-0.5 before:bg-mystic-gold/30 before:bottom-[-10px] before:left-0 before:scale-x-75"
              >
                {link.label}
                {hasSubmenu && (
                  <ChevronDown size={16} className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
                )}
              </span>

              {/* Submenu for active link */}
              {hasSubmenu && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    {link.submenu.map((sublink) => (
                      <a
                        key={sublink.to}
                        href={sublink.to}
                        className="block px-4 py-2 text-sm text-charcoal hover:bg-mystic-gold/10 hover:text-mystic-gold transition-colors duration-200"
                        onClick={onClick}
                      >
                        {sublink.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        } else {
          // Render clickable link with enhanced hover effects
          return (
            <div key={link.to} className="relative group">
              <a
                href={link.to}
                className="relative font-medium text-charcoal transition-all duration-300 inline-flex items-center
                  hover:text-mystic-gold hover:scale-105
                  after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-mystic-gold after:bottom-[-6px] after:left-0
                  hover:after:w-full after:transition-all after:duration-300
                  before:content-[''] before:absolute before:w-0 before:h-0.5 before:bg-mystic-gold/30 before:bottom-[-10px] before:left-0
                  hover:before:w-full before:transition-all before:duration-500 before:scale-x-0 hover:before:scale-x-75"
                onClick={hasSubmenu ? undefined : onClick}
              >
                {link.label}
                {hasSubmenu && (
                  <ChevronDown size={16} className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
                )}
              </a>

              {/* Submenu for inactive link */}
              {hasSubmenu && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    {link.submenu.map((sublink) => (
                      <a
                        key={sublink.to}
                        href={sublink.to}
                        className="block px-4 py-2 text-sm text-charcoal hover:bg-mystic-gold/10 hover:text-mystic-gold transition-colors duration-200"
                        onClick={onClick}
                      >
                        {sublink.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        }
      })}
    </>
  );
};

export default Navbar;

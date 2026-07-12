import { useState } from 'react';

const navItems = [
  { id: 'dev', label: 'Development & Integration' },
  { id: 'ux', label: 'UI & UX Design' },
  { id: 'connect', label: 'Connect' },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState('dev');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    setActiveSection(id);
  };

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="brand">
          <img src="/assets/logo.svg" alt="fourtitude" />
        </div>
        <button
          className="site-header__menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}>
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`site-nav__link ${activeSection === id ? 'site-nav__link--active' : ''}`}
              onClick={() => handleNavClick(id)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;

import { useState, useEffect, useRef } from 'react';

export default function Header({ toggleTheme, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const handleNavClick = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => menuOpen && setMenuOpen(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const lineColor = darkMode ? 'bg-dark-text' : 'bg-light-text';

  return (
    <>
      {menuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-light-bg/30 dark:bg-dark-bg/30 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <header className="fixed top-0 inset-x-0 z-50 bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-lg border-b border-light-border dark:border-dark-border shadow-md">
<nav
  ref={navRef}
  className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between p-4"
>
  {/* Bloque izquierdo: solo móvil */}
  <div className="flex items-center justify-between w-full md:hidden">
    <button
      className="focus:outline-none"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-expanded={menuOpen}
      aria-controls="main-menu"
      aria-label={menuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
    >
      <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
        <span className={`${lineColor}`}></span>
        <span className={`${lineColor}`}></span>
        <span className={`${lineColor}`}></span>
      </div>
    </button>

    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text hover:bg-light-hover dark:hover:bg-dark-hover transition-colors"
      aria-label="Cambiar tema"
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  </div>

  {/* Menú de navegación */}
  <ul
    id="main-menu"
    className={`overflow-hidden transition-all duration-300 ease-in-out md:flex md:items-center gap-6 ${
      menuOpen ? 'max-h-[500px] mt-4' : 'max-h-0'
    } md:max-h-none md:mt-0`}
  >
    <li><a href="#hero" onClick={handleNavClick} className="block py-2 text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary">Inicio</a></li>
    <li><a href="#projects" onClick={handleNavClick} className="block py-2 text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary">Proyectos</a></li>
    <li><a href="#experience" onClick={handleNavClick} className="block py-2 text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary">Experiencia</a></li>
    <li><a href="#education" onClick={handleNavClick} className="block py-2 text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary">Formación</a></li>
    <li><a href="#about" onClick={handleNavClick} className="block py-2 text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary">Sobre mí</a></li>
    <li><a href="#contact" onClick={handleNavClick} className="block py-2 text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary">Contacto</a></li>
  </ul>

  {/* Botón de tema en escritorio */}
  <div className="hidden md:block ml-auto">
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text hover:bg-light-hover dark:hover:bg-dark-hover transition-colors"
      aria-label="Cambiar tema"
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  </div>
</nav>
      </header>
    </>
  );
}
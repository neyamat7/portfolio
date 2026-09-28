import { useEffect, useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    if (sectionId === "home") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
      return;
    }

    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isProjectsPage = location.pathname.startsWith("/projects") || location.pathname.startsWith("/all-projects");

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/80 backdrop-blur-md border-b border-white/10 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo & Brand */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <img
              className="h-12 w-12 object-contain group-hover:scale-105 transition-transform duration-300"
              src="/logo.png"
              alt="Neyamat Ullah"
            />
            <span className="text-2xl font-black bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              Neyamat
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-7">
            <button
              onClick={() => handleNavClick("home")}
              className={`transition-colors duration-200 capitalize font-medium text-sm ${
                location.pathname === "/" && !location.hash
                  ? "text-purple-400 font-semibold"
                  : "text-gray-300 hover:text-purple-400"
              }`}
            >
              Home
            </button>
            {["about", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-200 capitalize font-medium text-sm"
              >
                {item}
              </button>
            ))}

            <Link
              to="/projects"
              className={`px-3 py-1 rounded-[4px] text-sm font-medium transition-all duration-200 ${
                isProjectsPage
                  ? "bg-purple-600/30 text-purple-300 border border-purple-500/40"
                  : "text-gray-300 hover:text-purple-400"
              }`}
            >
              All Projects
            </Link>

            {/* Resume Button */}
            <a
              href="/Resume_of_Md_Neyamat_Ullah.pdf"
              download="Resume_of_Md_Neyamat_Ullah.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-[4px] bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <FiDownload size={14} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="/Resume_of_Md_Neyamat_Ullah.pdf"
              download="Resume_of_Md_Neyamat_Ullah.pdf"
              className="p-2 rounded-[4px] bg-white/10 text-white hover:bg-white/20 text-xs flex items-center gap-1"
            >
              <FiDownload size={14} />
              <span>CV</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-gray-200 hover:text-purple-400 p-2 rounded-[4px] transition-colors duration-200"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-[4px] shadow-2xl mb-4 p-4 space-y-2 animate-fadeIn">
            <button
              onClick={() => handleNavClick("home")}
              className="block w-full text-left px-4 py-2.5 text-gray-200 hover:text-purple-400 hover:bg-white/5 rounded-[4px] transition-colors duration-200 capitalize font-medium text-sm"
            >
              Home
            </button>
            {["about", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="block w-full text-left px-4 py-2.5 text-gray-200 hover:text-purple-400 hover:bg-white/5 rounded-[4px] transition-colors duration-200 capitalize font-medium text-sm"
              >
                {item}
              </button>
            ))}
            <Link
              to="/projects"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-4 py-2.5 text-purple-400 hover:bg-white/5 rounded-[4px] font-medium text-sm"
            >
              All Projects ({isProjectsPage ? "Active" : "View"})
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

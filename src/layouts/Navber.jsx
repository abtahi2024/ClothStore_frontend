import { useEffect, useState } from "react";
import {
  BiChevronDown,
  BiHeart,
  BiMenu,
  BiSearch,
  BiShoppingBag,
  BiX,
} from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import { LogOut, Settings, UserIcon } from "lucide-react";
import useCartContext from "../hooks/useCartContext";

const navItems = [
  { label: "Home", id: "/", href: "/" },
  { label: "Shop", id: "shop", href: "/shop" },
  { label: "Pages", id: "pages" },
  { label: "Blog", id: "blog", href: "/blogs" },
  { label: "Contacts", id: "contacts", href: "/contact" },
];
const pagesSubLinks = [
  { name: "About Us", href: "/about" },
  { name: "Shop Details", href: "" },
  { name: "Shopping Cart", href: "/cart" },
  { name: "Check Out", href: "/orders" },
  { name: "Blog Details", href: "/blog" },
];

const Navber = () => {
  const [activeItem, setActiveItem] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPagesHovered, setIsPagesHovered] = useState(false);
  const [isMobilePagesOpen, setIsMobilePagesOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, logoutUser } = useAuthContext();
  const { cart, wishlist, fetchWishlist } = useCartContext();

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsSearchOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const handleNavClick = (id) => {
    if (id !== "pages") {
      setActiveItem(id);
      setIsMobileMenuOpen(false);
    }
  };
  return (
    <div className="flex flex-col w-full relative z-50">
      {/* Topbar */}
      <header className="w-full sticky top-0 z-50 shadow-sm">
        <div className="bg-[#111111] text-white py-3 px-4 sm:px-8">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-[13px] font-medium tracking-wide">
            <div className="mb-2 sm:mb-0">
              <p>Free shipping, 30-day return or refund guarantee.</p>
            </div>
            <div className="flex items-center space-x-8 uppercase">
              <Link
                to="/login"
                className="hover:text-red-500 transition-colors"
              >
                Sign In
              </Link>
              <a href="#" className="hover:text-red-500 transition-colors">
                FAQs
              </a>
              <div className="flex items-center cursor-pointer hover:text-red-500 transition-colors">
                <span>USD</span>
                <BiChevronDown size={14} className="ml-1" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navebar */}
      <nav className="bg-white py-6 px-4 md:px-10 lg:px-20 border-b border-gray-100 relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="shrink-0">
            <Link
              to="/"
              className="flex items-center text-2xl font-black tracking-[-1.5px] text-[#111111] uppercase"
            >
              MALE FASHION
              <span className="w-1.75 h-1.75 bg-red-600 ml-1 rounded-full self-end mb-1.5"></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative group py-2"
                onMouseEnter={() =>
                  item.id === "pages" && setIsPagesHovered(true)
                }
                onMouseLeave={() =>
                  item.id === "pages" && setIsPagesHovered(false)
                }
              >
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`text-[15px] font-bold tracking-[1.5px] uppercase transition-all duration-300 flex items-center
                  ${activeItem === item.id ? "text-black" : "text-[#111111] hover:text-red-600"}`}
                >
                  <Link to={item.href}>{item.label}</Link>
                  {item.id === "pages" && (
                    <BiChevronDown
                      size={18}
                      className={`ml-1 transition-transform duration-300 ${isPagesHovered ? "rotate-180" : ""}`}
                    />
                  )}
                </button>

                {/* Active/Hover Underline */}
                <div
                  className={`absolute bottom-0 left-0 h-0.75 bg-red-600 transition-all duration-300 
                  ${activeItem === item.id ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"}`}
                />

                {/* Dropdown Menu (Desktop) */}
                {item.id === "pages" && (
                  <div
                    className={`absolute top-full left-0 w-52 bg-[#111111] py-4 shadow-2xl transition-all duration-300 transform origin-top z-110
                    ${isPagesHovered ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-0 pointer-events-none"}`}
                  >
                    <div className="flex flex-col">
                      {pagesSubLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="px-6 py-3 text-[13px] text-gray-400 hover:text-white hover:pl-8 transition-all duration-300 font-bold tracking-wider uppercase"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Icons & Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              {user ? (
                <>
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="avatar avatar-online"
                  >
                    <div className="w-8 rounded-full">
                      <img
                        src={user.image || "https://i.pravatar.cc/150"}
                        alt="profile"
                      />
                    </div>
                  </button>

                  {/* Dropdown */}
                  {isProfileOpen && (
                    <div className="absolute right-0 mt-3 w-48 bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden z-50">
                      <div className="p-4 border-b border-gray-50 bg-gray-50/50">
                        <p className="text-sm font-bold text-gray-900">
                          {user.last_name}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {user.email}
                        </p>
                      </div>
                      <div className="p-2">
                        <button className="w-full flex items-center space-x-3 px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors">
                          <UserIcon size={18} />
                          <Link to="/profile">
                            <span>My Profile</span>
                          </Link>
                        </button>
                        <button className="w-full flex items-center space-x-3 px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors">
                          <Settings size={18} />
                          <span>Account Settings</span>
                        </button>
                        <button className="w-full flex items-center space-x-3 px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors">
                          <BiHeart size={18} />
                          <span>Wishlist</span>
                        </button>
                      </div>
                      <div className="p-2 border-t border-gray-50">
                        <button
                          onClick={logoutUser}
                          className="w-full flex items-center space-x-3 px-3 py-2.5 text-sm font-bold text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                        >
                          <LogOut size={18} />
                          <span>Logout</span>
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                ""
              )}
            </div>

            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-black hover:text-red-600 transition-colors"
            >
              <BiSearch size={24} />
            </button>
            <div className="relative">
              <button className="text-black hover:text-red-600 transition-colors hidden sm:block">
                <Link to={"/wishlist"}>
                  <BiHeart size={22} />
                </Link>
                <span className="absolute -top-2 -right-2 bg-black text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlist?.length || 0}
                </span>
              </button>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer group">
              <Link to="/cart">
                <div className="relative">
                  <BiShoppingBag
                    size={24}
                    className="text-black group-hover:text-red-600 transition-colors"
                  />
                  <span className="absolute -top-1.5 -right-1.5 bg-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-black group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors">
                    {cart?.items?.length || 0}
                  </span>
                </div>
              </Link>
              <span className="hidden sm:inline font-black text-[15px] text-[#111111]">
                ${cart?.total_price?.toFixed(2) || 0}
              </span>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-black p-1 hover:text-red-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <BiX size={32} /> : <BiMenu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 z-120 bg-white transition-all duration-500 transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-10 border-b pb-6">
              <a
                href="/"
                className="text-2xl font-black tracking-[-1.5px] text-[#111111] uppercase"
              >
                MALE FASHION
                <span className="w-1.5 h-1.5 bg-red-600 ml-0.5 rounded-full inline-block"></span>
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-black hover:text-red-600"
              >
                <BiX size={36} />
              </button>
            </div>

            <div className="flex flex-col space-y-6 overflow-y-auto pb-10">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col border-b border-gray-50 pb-4"
                >
                  <button
                    onClick={() => {
                      if (item.id === "pages") {
                        setIsMobilePagesOpen(!isMobilePagesOpen);
                      } else {
                        handleNavClick(item.id);
                      }
                    }}
                    className={`text-2xl font-black uppercase text-left flex items-center justify-between
                    ${activeItem === item.id ? "text-red-600" : "text-[#111111]"}`}
                  >
                    {item.label}
                    {item.id === "pages" && (
                      <BiChevronDown
                        className={`transition-transform duration-300 ${isMobilePagesOpen ? "rotate-180" : ""}`}
                      />
                    )}
                  </button>

                  {/* Mobile Submenu */}
                  {item.id === "pages" && (
                    <div
                      className={`flex flex-col space-y-5 pl-4 overflow-hidden transition-all duration-300 
                      ${isMobilePagesOpen ? "max-h-80 mt-6 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      {pagesSubLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="text-[15px] font-bold text-gray-500 uppercase tracking-widest hover:text-red-600 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="flex flex-col space-y-6 pt-8">
                <button className="flex items-center space-x-4 text-[#111111] font-black uppercase text-sm tracking-widest hover:text-red-600 transition-colors">
                  <CgProfile size={24} /> <span>Account</span>
                </button>
                <div className="relative">
                  <button className="flex items-center space-x-4 text-[#111111] font-black uppercase text-sm tracking-widest hover:text-red-600 transition-colors">
                    <BiHeart size={24} />{" "}
                    <span className="absolute -top-2 -right-2 bg-black text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                      {wishlist?.length || 0}
                    </span>
                    <Link to={"/wishlist"}>
                      <span>Wishlist</span>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-100 bg-black/95 flex flex-col items-center justify-center animate-in fade-in duration-300">
          <button
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-10 right-10 text-white hover:text-red-600 transition-colors p-2"
          >
            <BiX size={48} />
          </button>
          <div className="w-full max-w-2xl px-6">
            <input
              type="text"
              autoFocus
              placeholder="SEARCH HERE..."
              className="w-full bg-transparent border-b-2 border-white/20 text-white text-3xl sm:text-5xl py-4 px-2 focus:outline-none focus:border-red-600 transition-all placeholder:text-white/10 font-bold tracking-tight"
            />
            <p className="text-white/40 mt-6 text-xs uppercase tracking-[4px] font-black text-center">
              Press Esc to close
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navber;

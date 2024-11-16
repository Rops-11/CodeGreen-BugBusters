import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../utils/supabase";

const AdminHeader = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleHomePage = () => {
    navigate("/admin");
  };

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      error ? alert(error) : navigate("/login");
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className="flex items-center justify-between w-full max-w-5xl mx-auto px-8 py-4">
      <div className="flex items-center">
        <button
          className="relative group overflow-hidden rounded-2xl"
          onClick={handleHomePage}>
          <img
            src="../assets/3.png"
            alt="Logo"
            className="w-2/3 h-2/3 object-contain"
          />
        </button>
      </div>

      <nav className="flex space-x-20 text-white font-medium text-lg">
        <Link
          to="/encode"
          className="hover:text-textgreen transition-colors">
          Encode
        </Link>

        <Link
          to="/driverslist"
          className="hover:text-textgreen transition-colors">
          Drivers
        </Link>

        <Link
          to="/violatorslist"
          className="hover:text-textgreen transition-colors">
          Violators
        </Link>

        <div
          className="relative"
          ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="text-white hover:text-textgreen transition-colors">
            Account
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-black text-white rounded-sm shadow-lg text-center">
              <Link
                to="/profile"
                className="block px-4 py-2 hover:bg-buttongreen rounded-sm">
                View Profile
              </Link>

              <span
                onClick={handleSignOut}
                className="block px-4 py-2 hover:bg-buttongreen rounded-sm">
                Log Out
              </span>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default AdminHeader;

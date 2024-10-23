import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { HashLink as Link } from "react-router-hash-link";
import { FaUser } from "react-icons/fa"; // Import user icon

function NavBar({isLogged}) {
  const [hidden, setHidden] = useState("hidden");
  const [dropdownVisible, setDropdownVisible] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev); // Toggle dropdown visibility
  };

  return (
    <div className="bg-[#FBFBFB] p-4">
      <div className="flex items-center justify-between container mx-auto px-4">
        <div className="text-4xl font-extrabold tajawal-extralight">
          <Link to="/">إيــفـــــاد</Link>
        </div>

        <div className="md:flex hidden gap-4">
          <Link to="/" className="hover:underline underline-offset-[6px]">الرئيسية</Link>
          <Link to="/#about" smooth className="hover:underline underline-offset-[6px]">حول المنصة</Link>
          <Link to="/terms" className="hover:underline underline-offset-[6px]">المصطلحات الطبية</Link>
          <Link to="/report" className="hover:underline underline-offset-[6px]">تقرير</Link>
        </div>
{!isLogged&&(
        <Link to="/user/login" className="md:block hidden hover:scale-110 transition-transform duration-200">
          <div className="bg-gradient-to-b from-[#f96f5e99] via-[#E6BCC4] to-[#DFD0E0] font-medium text-[#002933] rounded-full p-[1px]">
            <span className="flex w-full bg-white rounded-full py-3 px-6">جربه الآن</span>
          </div>
        </Link>
)}
        {/* User Icon with Dropdown */}
        {isLogged && (
          <div className="relative md:block hidden">
            <div onClick={toggleDropdown} className="flex items-center cursor-pointer">
              <FaUser size="1.5rem" className="text-[#002933] mr-2" />
              <span className="text-[#002933]">الملف الشخصي</span>
            </div>
            {dropdownVisible && (
              <div className="absolute right-0 bg-white shadow-md rounded mt-2 w-48">
                <Link
                  to="/user/history"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDropdownVisible(false)} // Close dropdown on click
                >
                  السجل
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setDropdownVisible(false); // Close dropdown on click
                    localStorage.clear(); // Clear localStorage
                  }}
                >
                  تسجيل الخروج
                </Link>
              </div>
            )}
          </div>
        )}

        {/* mobile header */}
        <div className="block md:hidden">
          {hidden === "hidden" ? (
            <RxHamburgerMenu onClick={() => setHidden("")} size="2rem" />
          ) : (
            <IoClose onClick={() => setHidden("hidden")} size="2rem" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="block md:hidden z-30 w-full top-0 left-0 fixed bg-[#FBFBFB]">
        <div className={`h-screen ${hidden} p-4`}>
          <div className="flex items-center justify-between container mx-auto px-4">
            <div className="text-4xl font-extrabold tajawal-extralight">
              <Link to="/">إيــفـــــاد</Link>
            </div>

            <div className="block md:hidden">
              {hidden === "hidden" ? (
                <RxHamburgerMenu onClick={() => setHidden("")} size="2rem" />
              ) : (
                <IoClose onClick={() => setHidden("hidden")} size="2rem" />
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-16 h-[90%]">
            <Link to="/" className="hover:underline underline-offset-[6px] text-xl font-bold">الرئيسية</Link>
            <Link to="/#about" className="hover:underline underline-offset-[6px] text-xl font-bold" smooth>حول المنصة</Link>
            <Link to="/terms" className="hover:underline underline-offset-[6px] text-xl font-bold">المصطلحات الطبية</Link>
            <Link to="/report" className="hover:underline underline-offset-[6px] text-xl font-bold">تقرير</Link>
            {!isLogged&&(
            <Link to="/user/login">
              <div className="bg-gradient-to-b from-[#f96f5e99] via-[#E6BCC4] to-[#DFD0E0] text-[#002933] font-medium rounded-full p-[1px]">
                <span className="flex w-full bg-white rounded-full py-3 px-6">جربه الآن</span>
              </div>
            </Link>
            )}
            {/* Mobile user icon with dropdown */}
            {isLogged && (
              <div className="relative block md:hidden">
                <div onClick={toggleDropdown} className="flex items-center cursor-pointer">
                  <FaUser size="1.5rem" className="text-[#002933] mr-2" />
                  <span className="text-[#002933]">الملف الشخصي</span>
                </div>
                {dropdownVisible && (
                  <div className="absolute right-0 bg-white shadow-md rounded mt-2 w-48">
                    <Link
                      to="/user/history"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setDropdownVisible(false)}
                    >
                      السجل
                    </Link>
                    <Link
                      to="/"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => {
                        setDropdownVisible(false);
                        localStorage.clear();
                      }}
                    >
                      تسجيل الخروج
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { HashLink as Link } from "react-router-hash-link";
import { FiUser } from "react-icons/fi";
import bgTop from "../Images/bgTop.png";
import mainBg from "../Images/mainBG.png";
import i18n from  "../i18n";

function NavBar() {
  const [hidden, setHidden] = useState("hidden");

  const userData = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="p-4">
      <div className="flex items-center justify-between container mx-auto px-4">
        <div className="text-4xl font-extrabold tajawal-extralight text-black">
          <Link to="/">
            {/* <img src="" className="object-cover" /> */}
            إيــفـــــاد
          </Link>
        </div>

        <div className="md:flex hidden gap-4">
          <Link to="/" className="hover:underline underline-offset-[6px]">
            الرئيسية
          </Link>
          <Link
            to="/#about"
            smooth
            className="hover:underline underline-offset-[6px]"
          >
            حول المنصة
          </Link>
          <Link to="/terms" className="hover:underline underline-offset-[6px]">
            المصطلحات الطبية
          </Link>
          <Link to="/report" className="hover:underline underline-offset-[6px]">
            تحليل
          </Link>
        </div>
        <div className="flex flex-row-reverse gap-5">
  <div className={userData ? `hidden` : ""}>
    <Link
      to="/user/login"
      className="md:block hidden hover:scale-110 transition-transform duration-200"
    >
      <div className="bg-gradient-to-b from-[#f9705ea9] via-[#edb9c2] to-[#d6bcd8] font-medium text-[#002933] rounded-full p-[1px]">
        <span className="flex w-full bg-white rounded-full py-3 px-6">
          حلل الآن
        </span>
      </div>
    </Link>
  </div>

  <div className=" gap-2 items-center hidden">
    <div className="flex flex-row-reverse gap-2">
      {/* SVG for language toggle */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => {
          // Toggle language on SVG click
          const newLanguage = i18n.language === 'ar' ? 'en' : 'ar';
          i18n.changeLanguage(newLanguage);
        }}
        style={{ cursor: 'pointer' }} // Change cursor to indicate it's clickable
      >
        <path
          d="M16.3639 16.236C14.7352 14.6073 12.4852 13.6 9.99995 13.6C7.51467 13.6 5.26467 14.6073 3.63599 16.236"
          stroke="#0AC6F2"
          strokeWidth="1.63"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.63599 3.76392C5.26467 5.3926 7.51467 6.39995 9.99995 6.39995C12.4852 6.39995 14.7352 5.3926 16.3639 3.76392"
          stroke="#0AC6F2"
          strokeWidth="1.63"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="10" r="9" stroke="#0AC6F2" strokeWidth="1.63" strokeLinecap="round" strokeLinejoin="round" />
        <ellipse cx="10" cy="10" rx="3" ry="9" stroke="#0AC6F2" strokeWidth="1.63" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 9.99995H1" stroke="#0AC6F2" strokeWidth="1.63" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {/* Optional: Display current language text */}
      <span className="ml-2">
        {i18n.language === 'ar' ? 'العربية' : 'English'}
      </span>
    </div>
  </div>
</div>


        

        <div className={userData ? `dropdown dropdown-end` : "hidden"}>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost hover:bg-transparent btn-circle avatar md:flex items-center hidden"
          >
            <div className="rounded-full flex items-center">
              <FiUser size="2rem" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-[#FBFBFB] flex flex-col gap-4"
          >
            <li>
              <Link to="/user/history">الملف الشخصي</Link>
            </li>

            <li>
              <Link
                className="border-t"
                onClick={() => {
                  localStorage.removeItem("user");
                  navigate("/");
                }}
              >
                تسجيل الخروج
              </Link>
            </li>
          </ul>
        </div>

        {/* mobile header */}
        <div className="block md:hidden">
          {hidden === "hidden" ? (
            <RxHamburgerMenu
              onClick={() => {
                setHidden("");
              }}
              size="2rem"
            />
          ) : (
            <IoClose
              onClick={() => {
                setHidden("hidden");
              }}
              size="2rem"
            />
          )}
        </div>
      </div>

      <div
        className="block md:hidden z-30 w-full top-0 left-0 fixed bg-no-repeat"
        style={{ backgroundImage: `url(${mainBg})` }}
      >
        <div
          className={`h-screen ${hidden} p-4 bg-no-repeat`}
          style={{ backgroundImage: `url(${bgTop})` }}
        >
          <div className="flex items-center justify-between container mx-auto px-4">
            <div className="text-4xl font-extrabold tajawal-extralight text-black">
              <Link to="/">
                {/* <img src="" className="object-cover" /> */}
                إيــفـــــاد
              </Link>
            </div>

            <div className="block md:hidden">
              {hidden === "hidden" ? (
                <RxHamburgerMenu
                  onClick={() => {
                    setHidden("");
                  }}
                  size="2rem"
                />
              ) : (
                <IoClose
                  onClick={() => {
                    setHidden("hidden");
                  }}
                  size="2rem"
                />
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-between pt-20 h-[90%]">
            <div className="flex flex-col items-center justify-center gap-10">
              <Link
                to="/"
                className="hover:underline underline-offset-[6px] text-xl font-bold"
              >
                الرئيسية
              </Link>
              <Link
                to="/#about"
                className="hover:underline underline-offset-[6px] text-xl font-bold"
                smooth
              >
                حول المنصة
              </Link>
              <Link
                to="/terms"
                className="hover:underline underline-offset-[6px] text-xl font-bold"
              >
                المصطلحات الطبية
              </Link>
              <Link
                to="/report"
                className="hover:underline underline-offset-[6px] text-xl font-bold"
              >
                تحليل
              </Link>

              <div className={userData ? `hidden` : ""}>
                <Link to="/user/login">
                  <div className="bg-gradient-to-b from-[#f9705ea9] via-[#edb9c2] to-[#d6bcd8] text-[#002933] font-medium rounded-full p-[1px]">
                    <span className="flex w-full bg-white rounded-full py-3 px-6">
                      حلل الآن
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex justify-between items-center w-full">
              <Link
                to="/user/history"
                className={
                  userData
                    ? `hover:underline underline-offset-[6px] text-lg font-semibold`
                    : "hidden"
                }
              >
                الملف الشخصي
              </Link>

              <Link
                className={
                  userData
                    ? `hover:underline underline-offset-[6px] text-lg font-semibold`
                    : "hidden"
                }
                onClick={() => {
                  localStorage.removeItem("user");
                  navigate("/");
                }}
              >
                تسجيل الخروج
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

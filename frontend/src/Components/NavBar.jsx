import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { HashLink as Link } from "react-router-hash-link";
import { FiUser } from "react-icons/fi";

function NavBar() {
  const [hidden, setHidden] = useState("hidden");

  const userData = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="bg-[#FBFBFB] p-4">
      <div className="flex items-center justify-between container mx-auto px-4">
        <div className="text-4xl font-extrabold tajawal-extralight">
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

        <div className={userData ? `hidden` : ""}>
          <Link
            to="/user/login"
            className="md:block hidden hover:scale-110 transition-transform duration-200"
          >
            <div className="bg-gradient-to-b from-[#f96f5e99] via-[#E6BCC4] to-[#DFD0E0] font-medium text-[#002933] rounded-full p-[1px]">
              <span className="flex w-full bg-white rounded-full py-3 px-6">
                حلل الآن
              </span>
            </div>
          </Link>
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

      <div className="block md:hidden z-30 w-full top-0 left-0 fixed bg-[#FBFBFB]">
        <div className={`h-screen ${hidden} p-4`}>
          <div className="flex items-center justify-between container mx-auto px-4">
            <div className="text-4xl font-extrabold tajawal-extralight">
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
          <div className="flex flex-col items-center justify-center justify- gap-10 h-[90%]">
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

            <Link
              to="/user/history"
              className={
                userData
                  ? `hover:underline underline-offset-[6px] text-xl font-bold`
                  : "hidden"
              }
            >
              الملف الشخصي
            </Link>

            <Link
              className={
                userData
                  ? `hover:underline underline-offset-[6px] text-xl font-bold`
                  : "hidden"
              }
              onClick={() => {
                localStorage.removeItem("user");
                navigate("/");
              }}
            >
              تسجيل الخروج
            </Link>

            <div className={userData ? `hidden` : ""}>
              <Link to="/user/login">
                <div className="bg-gradient-to-b from-[#f96f5e99] via-[#E6BCC4] to-[#DFD0E0] text-[#002933] font-medium rounded-full p-[1px]">
                  <span className="flex w-full bg-white rounded-full py-3 px-6">
                    حلل الآن
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

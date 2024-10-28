import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { HashLink as Link } from "react-router-hash-link";
import { FiUser } from "react-icons/fi";
import bgTop from "../Images/bgTop.png";
import mainBg from "../Images/mainBG.png";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [hidden, setHidden] = useState("hidden");

  const userData = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  return (
    <div className="p-4">
      <div className="flex items-center justify-between container mx-auto px-4">
        <div className="text-4xl font-extrabold tajawal-extralight text-black">
          <Link to="/">
            <img src={logo} className="object-cover w-40" />
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
            التحليل الذكي
          </Link>
        </div>

        <div className={userData ? `hidden` : ""}>
          <Link
            to="/user/login"
            className="md:block hidden hover:scale-110 transition-transform duration-200"
          >
            <div className="bg-gradient-to-b from-[#f9705ea9] via-[#edb9c2] to-[#d6bcd8] font-medium text-[#002933] rounded-full p-[1px]">
              <span className="flex w-full bg-white rounded-full py-3 px-6">
                ابدأ الآن
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
                <img src={logo} className="object-cover w-40" />
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
                التحليل الذكي
              </Link>

              <div className={userData ? `hidden` : ""}>
                <Link to="/user/login">
                  <div className="bg-gradient-to-b from-[#f9705ea9] via-[#edb9c2] to-[#d6bcd8] text-[#002933] font-medium rounded-full p-[1px]">
                    <span className="flex w-full bg-white rounded-full py-3 px-6">
                      ابدأ الآن
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

import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { HashLink as Link } from "react-router-hash-link";

function NavBar() {
  const [hidden, setHidden] = useState("hidden");

  return (
    <div className="bg-[#FBFBFB] p-4">
      <div className="flex items-center justify-between container mx-auto px-4">
        <div>
          <Link to="/">
            {/* <img src="" className="object-cover" /> */}
            الشعار
          </Link>
        </div>

        <div className="md:flex hidden gap-4">
          <Link to="/" className="hover:underline underline-offset-[6px]">
            الرئيسية
          </Link>
          <Link to="/#about" className="hover:underline underline-offset-[6px]">
            حول المنصة
          </Link>
          <Link to="/terms" className="hover:underline underline-offset-[6px]">
            المصطلحات الطبية
          </Link>
          <Link to="/report" className="hover:underline underline-offset-[6px]">
            تقرير
          </Link>
        </div>

        <Link to="/user/login" className="md:block hidden">
          <div className="bg-gradient-to-b from-[#f96f5e99] via-[#E6BCC4] to-[#DFD0E0] font-medium text-[#002933] rounded-full p-[1px]">
            <span className="flex w-full bg-white rounded-full py-3 px-6">
              جربه الآن
            </span>
          </div>
        </Link>

        {/* mobile header */}
        <div className="block lg:hidden">
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

      <div className="block lg:hidden">
        <div className={`h-screen ${hidden}`}>
          <div className="flex flex-col items-center justify-center gap-16 h-[90%]">
            <Link
              to="/"
              className="hover:underline underline-offset-[6px] text-xl font-bold"
            >
              الرئيسية
            </Link>
            <Link
              to="/#about"
              className="hover:underline underline-offset-[6px] text-xl font-bold"
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
              تقرير
            </Link>

            <Link to="/user/login">
              <div className="bg-gradient-to-b from-[#f96f5e99] via-[#E6BCC4] to-[#DFD0E0] text-[#002933] font-medium rounded-full p-[1px]">
                <span className="flex w-full bg-white rounded-full py-3 px-6">
                  جربه الآن
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

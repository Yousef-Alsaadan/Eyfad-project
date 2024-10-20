import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Footer() {
  return (
    <div className="bg-[#FBFBFB] p-4">
      <div className="flex items-center justify-between container mx-auto py-3 px-4">
        <div className="flex gap-6">
          <Link to="/">
            {/* <img src="" className="object-cover" /> */}
            الشعار
          </Link>

          <div className="md:flex-row flex flex-col gap-4">
            <Link to="/" className="hover:underline underline-offset-[6px]">
              الرئيسية
            </Link>
            <Link
              to="/#about"
              className="hover:underline underline-offset-[6px]"
            >
              حول المنصة
            </Link>
            <Link
              to="/terms"
              className="hover:underline underline-offset-[6px]"
            >
              المصطلحات الطبية
            </Link>
            <Link
              to="/report"
              className="hover:underline underline-offset-[6px]"
            >
              تقرير
            </Link>
          </div>
        </div>

        <a
          href="https://github.com/Yousef-Alsaadan/Eyfad-project"
          target="_blank"
        >
          ايفاد ©2024
        </a>
      </div>
    </div>
  );
}

export default Footer;

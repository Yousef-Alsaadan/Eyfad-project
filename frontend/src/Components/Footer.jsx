import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import bgTop from "../Images/bgTop.png";

function Footer() {
  return (
    <div className="p-4" style={{ backgroundImage: `url(${bgTop})` }}>
      <div className="flex flex-col md:flex-row items-center justify-between container gap-20 md:text-start text-center mx-auto py-3 px-4">
        <div className="flex flex-col items-center md:flex-row gap-6">
          <Link to="/" className="text-4xl font-extrabold tajawal-extralight">
            {/* <img src="" className="object-cover" /> */}
            إيــفـــــاد
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
              تحليل
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

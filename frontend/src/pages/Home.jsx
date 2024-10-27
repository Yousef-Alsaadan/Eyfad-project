import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { HashLink as Link } from "react-router-hash-link";
import HeroSvg2 from "../Components/style/HeroSvg2";
import HeroSvg3 from "../Components/style/HeroSvg3";
import HeroSvg4 from "../Components/style/HeroSvg4";
import reportIcon from "../assets/reportIcon.svg";
import arrow from "../assets/arrow.svg";
import ai from "../assets/aiIcon.svg";
import aboutImg from "../assets/aboutImg.svg";
import aboutImg2 from "../assets/aboutImg2.svg";
import aboutImg3 from "../assets/aboutImg3.svg";
import contactTop from "../assets/contactTop.svg";
import contactB from "../assets/contactB.svg";
import Typewriter from "typewriter-effect";

import circleBG from "../Images/circleBG.png";

function Home() {
  return (
    <div className="bg-gradient-to-br from-[#dcf3ff] via-[#f5ffff] to-[#fff] to-[20%]">
      <NavBar />

      {/* hero section */}
      <div className="flex flex-col items-center justify-center min-h-[90vh] p-4 bg-gradient-to-tl from-[#dcf3ff] via-[#f5ffff] to-transparent md:to-[20%] to-[40%]">
        <div className=" rounded-[100%] w-[47.52rem] max-h-[40rem] h-full md:block hidden absolute">
          <img src={circleBG} />
        </div>

        <div className="flex flex-col text-center gap-6 xl:h-[96%] items-center z-10">
          <div className="max-w-2xl text-black flex flex-col items-center">
            <p className="font-semibold text-2xl pb-6">إيـفـــاد</p>
            <h1 className="mb-5 text-5xl font-semibold">
              منصتك لفهم وتحليل <br />
              <br />
              التقارير الطبية بذكاء
            </h1>
            <p className="mb-5 text-[#04040499]">
              منصة مبتكرة لتحليل التقارير الطبية المعقدة بطريقة مبسطة. نقدم
              توصيات صحية ونوفر معجم شامل لجميع الوحدات والمصطلحات الطبية.
            </p>

            <HeroSvg2 />

            <Link
              to="/user"
              className="w-fit mt-4 hover:scale-110 transition-transform duration-200"
            >
              <div className="bg-gradient-to-l from-[#f9705ea9] via-[#edb9c2] to-[#d6bcd8] text-[#002933] font-medium rounded-full p-[1px]">
                <span className="flex w-full bg-transparent rounded-full py-3 px-10 hover:text-[#002933]">
                  ابدأ الآن
                </span>
              </div>
            </Link>
          </div>

          <Link
            smooth
            to="/#about"
            className="hover:scale-110 transition-transform duration-200"
          >
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.6231 0C9.2424 0 8.1231 1.1193 8.1231 2.50003V7.50008C8.1231 10.2615 10.3617 12.5001 13.1231 12.5001V2.50003C13.1231 1.1193 12.0038 0 10.6231 0ZM3.75046 11.4601C2.55471 10.7697 1.02572 11.1794 0.335357 12.3751C-0.355006 13.5709 0.0546862 15.0999 1.25043 15.7902L9.91077 20.7903C11.2915 18.3988 10.4721 15.3408 8.08063 13.9601L3.75046 11.4601ZM18.2458 11.4601C19.4415 10.7697 20.9705 11.1794 21.6609 12.3751C22.3513 13.5709 21.9416 15.0999 20.7458 15.7902L12.0855 20.7903C10.7048 18.3988 11.5241 15.3408 13.9156 13.9601L18.2458 11.4601Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
        <div className="absolute flex flex-col items-center justify-center min-h-[90vh] p-4">
          <div className="absolute xl:top-32 xl:left-96 lg:top-80 lg:left-80 md:top-52 md:left-80 md:block hidden">
            <HeroSvg3 />
          </div>

          <div className="absolute xl:bottom-20 xl:right-80 lg:bottom-80 lg:right-80 md:bottom-44 md:right-80 md:block hidden">
            <HeroSvg4 />
          </div>

          <div className="absolute xl:top-20 xl:right-80 lg:top-96 lg:right-80 md:top-52 md:right-80 md:block hidden">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0514 9.58062C14.0514 12.0499 12.0496 14.0516 9.58037 14.0516C7.11111 14.0516 5.10938 12.0499 5.10938 9.58062C5.10938 7.11135 7.11111 5.10962 9.58037 5.10962C12.0496 5.10962 14.0514 7.11135 14.0514 9.58062Z"
                fill="url(#paint0_linear_645_9461)"
                fillOpacity="0.5"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.58071 18.7356C14.6368 18.7356 18.7356 14.6368 18.7356 9.58071C18.7356 4.5246 14.6368 0.425809 9.58071 0.425809C4.5246 0.425809 0.425809 4.5246 0.425809 9.58071C0.425809 14.6368 4.5246 18.7356 9.58071 18.7356ZM9.58071 19.1614C14.872 19.1614 19.1614 14.872 19.1614 9.58071C19.1614 4.28943 14.872 0 9.58071 0C4.28943 0 0 4.28943 0 9.58071C0 14.872 4.28943 19.1614 9.58071 19.1614Z"
                fill="url(#paint1_linear_645_9461)"
                fillOpacity="0.5"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_645_9461"
                  x1="9.58071"
                  y1="0"
                  x2="10.0369"
                  y2="31.4795"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6369" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_645_9461"
                  x1="9.58071"
                  y1="-6.34505e-09"
                  x2="9.79361"
                  y2="23.2066"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#002B35" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute xl:bottom-20 xl:left-80 lg:bottom-80 lg:left-72 md:bottom-44 md:left-72 md:block hidden">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0514 9.58062C14.0514 12.0499 12.0496 14.0516 9.58037 14.0516C7.11111 14.0516 5.10938 12.0499 5.10938 9.58062C5.10938 7.11135 7.11111 5.10962 9.58037 5.10962C12.0496 5.10962 14.0514 7.11135 14.0514 9.58062Z"
                fill="url(#paint0_linear_645_9461)"
                fillOpacity="0.5"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.58071 18.7356C14.6368 18.7356 18.7356 14.6368 18.7356 9.58071C18.7356 4.5246 14.6368 0.425809 9.58071 0.425809C4.5246 0.425809 0.425809 4.5246 0.425809 9.58071C0.425809 14.6368 4.5246 18.7356 9.58071 18.7356ZM9.58071 19.1614C14.872 19.1614 19.1614 14.872 19.1614 9.58071C19.1614 4.28943 14.872 0 9.58071 0C4.28943 0 0 4.28943 0 9.58071C0 14.872 4.28943 19.1614 9.58071 19.1614Z"
                fill="url(#paint1_linear_645_9461)"
                fillOpacity="0.5"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_645_9461"
                  x1="9.58071"
                  y1="0"
                  x2="10.0369"
                  y2="31.4795"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6369" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_645_9461"
                  x1="9.58071"
                  y1="-6.34505e-09"
                  x2="9.79361"
                  y2="23.2066"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#002B35" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* about section */}
      <div className="md:min-h-screen bg-gradient-to-bl from-[#dcf3ff] via-[#f5ffff] to-transparent md:to-[20%] to-[40%]">
        <div
          id="about"
          className="rounded-br-[200px] border-b border-black min-h-screen py-20"
        >
          <div className="container mx-auto px-4 md:py-20 pt-8 pb-32">
            <h1 className="font-bold text-5xl">كيف يعمل إيـفـــاد</h1>

            <div className="flex xl:flex-row flex-col gap-20 xl:gap-0 items-center justify-between mt-20">
              <div className="flex flex-col gap-4 xl:mb-0 mb-20">
                <h1 className="font-extrabold text-3xl mx-8">
                  رفع التقرير الطبي
                </h1>

                <div className="bg-white h-[250px] w-[360px] rounded-3xl shadow-lg grid place-items-center">
                  <img src={reportIcon} className="mt-8 w-72" />
                </div>
              </div>

              <Link to="/#ai" smooth className="cursor-default">
                <div className="-rotate-90 xl:rotate-0">
                  <img src={arrow} />
                </div>
              </Link>

              <div className="flex flex-col gap-4 text-center" id="ai">
                <h1 className="font-extrabold text-3xl">الذكاء الاصطناعي</h1>

                <div className="bg-transparent h-[250px] w-fit  rounded-3xl grid place-items-center">
                  <img src={ai} />
                </div>
              </div>

              <Link to="/#text" smooth className="cursor-default">
                <div className="-rotate-90 xl:rotate-0">
                  <img src={arrow} />
                </div>
              </Link>

              <div className="flex flex-col gap-4" id="text">
                <h1 className="font-extrabold text-3xl mx-8">شرح مبسط ومخصص</h1>

                <div className="bg-white h-[250px] w-[360px] rounded-3xl shadow-lg flex items-center">
                  <div className="font-bold text-sm flex flex-col gap-4 p-4">
                    <Typewriter
                      options={{ autoStart: true, loop: true }}
                      onInit={(typewriter) => {
                        typewriter
                          .typeString(
                            "الهيموغلوبين (Hemoglobin):<br><br>النتيجة: 13.5 جم/دل<br><br>الوضع: طبيعي<br><br>التفسير: مستوى الهيموغلوبين لديك في النطاق الطبيعي, مما يشير الى عدم وجود مشاكل تتعلق بفقر الدم"
                          )
                          .changeDeleteSpeed(1000)
                          .start();
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f4f5f987] rounded-tl-[200px] rounded-br-[200px] h-auto py-20">
        <div className="container mx-auto px-4 py-20">
          <h1 className="font-bold text-5xl">بالاضافة الى:</h1>

          <div className="flex flex-col gap-20 items-center justify-between mt-12">
            <div className="flex-col xl:flex-row gap-8 flex justify-around items-center w-full">
              <div className="flex flex-col text-center gap-4 max-w-sm">
                <h1 className="font-bold text-xl">التتبع وحفظ السجلات</h1>
                <p>
                  يقوم المستخدم بتخزين كافة تقاريره الصحية داخل المنصة، مما يسمح
                  له بتتبع تطور حالته الصحية على مدار الوقت، ومراجعة أي تغييرات
                  أو تحسن في حالته الصحية.
                </p>
              </div>
              <div className="bg-gradient-to-r from-[#f9f8fb] via-[#fff] to-[#eff5fd] h-[250px] w-[360px] rounded-3xl border border-[#468cbd3d] shadow-xl shadow-[#edf5fb] grid place-items-center">
                <img src={aboutImg} />
              </div>
            </div>

            <div className="flex-col xl:flex-row-reverse gap-8 flex justify-around items-center w-full">
              <div className="flex flex-col text-center gap-4 max-w-sm">
                <h1 className="font-bold text-xl">التوصيات الصحية</h1>
                <p>
                  بناءً على نتائج التحليل، يتم تقديم نصائح طبية مخصصة للمستخدم
                  لتحسين حالته الصحية. تشمل هذه التوصيات تغييرات في النظام
                  الغذائي أو النصائح العامة للعناية بالصحة.
                </p>
              </div>
              <div className="bg-gradient-to-r from-[#f9f8fb] via-[#fff] to-[#eff5fd] h-[250px] w-[360px] rounded-3xl border border-[#468cbd3d] shadow-xl shadow-[#edf5fb] grid place-items-center p-2">
                <img src={aboutImg2} />
              </div>
            </div>

            <div className="flex-col xl:flex-row gap-8 flex justify-around items-center w-full">
              <div className="flex flex-col text-center gap-4 max-w-sm">
                <h1 className="font-bold text-xl">التنبؤ بالحالة الصحية</h1>
                <p>
                  بناءً على تحليل التقرير والبيانات السابقة، يقدم النظام توقعات
                  حول الأعراض أو المشاكل الصحية المحتملة التي قد تظهر في
                  المستقبل.
                </p>
              </div>
              <div className="bg-gradient-to-r from-[#f9f8fb] via-[#fff] to-[#eff5fd] h-[250px] w-[360px] rounded-3xl border border-[#468cbd3d] shadow-xl shadow-[#edf5fb] grid place-items-center">
                <img src={aboutImg3} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact section */}
      <div className="bg-gradient-to-t from-[#6ba4ff1a] from-[5%] via-[#6ba4ff24] via-[15%] to-[#fff] to-[80%]">
        <div className="border-b border-black rounded-bl-[200px] pt-20 pb-40">
          <img src={contactTop} className="absolute right-24" />
          <div className="container mx-auto px-4 pb-20">
            <div className="flex justify-between items-center pt-20">
              <h1 className="font-bold md:text-5xl text-4xl">
                التواصل مع المطورين
              </h1>
            </div>
          </div>

          <div className="grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-8">
            <div className="lg:w-[13.75rem] lg:h-[11.25rem] h-[15.625rem] w-[22.5rem] bg-[#dae0e7] rounded-tl-xl rounded-bl-xl rounded-br-xl rounded-tr-full"></div>
            <div className="lg:w-[13.75rem] lg:h-[11.25rem] h-[15.625rem] w-[22.5rem] bg-[#C5D4E9] rounded-xl p-4">
              <div className="flex flex-col items-center justify-between h-full">
                <p className="text-[#6B6969] text-lg">Software Developer</p>

                <p className="font-bold text-2xl">يوسف السعدان</p>

                <div className="flex items-center justify-around w-full border-dashed rounded-lg border border-[#2b44e740] p-1">
                  <a
                    href="mailto:yousefmalsaadan@gmail.com"
                    target="_blank"
                    className="hover:scale-110 transition-transform duration-200"
                  >
                    <div className="border p-2 border-gray-400 rounded-lg">
                      <svg
                        width="22"
                        height="20"
                        viewBox="0 0 22 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16.2135 0.123728C15.0714 -1.45286e-05 13.6318 -8.0335e-06 11.7952 1.32337e-07H9.70475C7.86821 -8.0335e-06 6.42861 -1.45286e-05 5.28648 0.123728C4.12094 0.250006 3.17656 0.512324 2.37024 1.09815C1.88209 1.45281 1.45281 1.88209 1.09815 2.37024C0.93647 2.59277 0.798011 2.82781 0.679871 3.07797C0.318084 3.84404 0.156711 4.73237 0.0780647 5.79168C-4.5076e-06 6.84323 -2.43067e-06 8.13224 1.32337e-07 9.72156V9.79525C-8.0335e-06 11.6318 -1.45286e-05 13.0714 0.123728 14.2135C0.250006 15.3791 0.512324 16.3234 1.09815 17.1298C1.45281 17.6179 1.88209 18.0472 2.37024 18.4018C3.17656 18.9877 4.12094 19.25 5.28648 19.3763C6.42859 19.5 7.86817 19.5 9.70465 19.5H11.7953C13.6318 19.5 15.0714 19.5 16.2135 19.3763C17.3791 19.25 18.3234 18.9877 19.1298 18.4018C19.6179 18.0472 20.0472 17.6179 20.4018 17.1298C20.9877 16.3234 21.25 15.3791 21.3763 14.2135C21.5 13.0714 21.5 11.6318 21.5 9.79535V9.7209C21.5 8.12073 21.5 6.82486 21.4202 5.76904C21.3399 4.70506 21.1748 3.81379 20.8046 3.04546C20.6899 2.80734 20.5565 2.58304 20.4018 2.37024C20.0472 1.88209 19.6179 1.45281 19.1298 1.09815C18.3234 0.512324 17.3791 0.250006 16.2135 0.123728ZM3.25191 2.31168C3.75992 1.94259 4.41013 1.72745 5.44804 1.615C6.49999 1.50103 7.85843 1.5 9.75 1.5H11.75C13.6416 1.5 15 1.50103 16.052 1.615C17.0899 1.72745 17.7401 1.94259 18.2481 2.31168C18.6087 2.57369 18.9259 2.89081 19.1879 3.25139L17.2907 5.14861C15.6091 6.83026 14.4001 8.03703 13.3572 8.83267C12.3317 9.6151 11.5556 9.92893 10.75 9.92893C9.94438 9.92893 9.16825 9.6151 8.14275 8.83267C7.09994 8.03703 5.89092 6.83026 4.20926 5.1486L2.31205 3.25139C2.57412 2.89081 2.89128 2.57369 3.25191 2.31168ZM19.7873 4.77337C19.8477 5.09361 19.8925 5.45891 19.9245 5.88204C19.9995 6.87493 20 8.11482 20 9.75C20 11.6416 19.999 13 19.885 14.052C19.7725 15.0899 19.5574 15.7401 19.1883 16.2481C18.9262 16.6089 18.6089 16.9262 18.2481 17.1883C17.7401 17.5574 17.0899 17.7725 16.052 17.885C15 17.999 13.6416 18 11.75 18H9.75C7.85843 18 6.49999 17.999 5.44804 17.885C4.41013 17.7725 3.75992 17.5574 3.25191 17.1883C2.89111 16.9262 2.57382 16.6089 2.31168 16.2481C1.94259 15.7401 1.72745 15.0899 1.615 14.052C1.50103 13 1.5 11.6416 1.5 9.75C1.5 8.12645 1.50047 6.89244 1.57395 5.90274C1.60601 5.47084 1.65131 5.09885 1.71271 4.77337L3.18917 6.24983C4.82144 7.88212 6.10062 9.16131 7.23288 10.0252C8.39181 10.9094 9.48455 11.4289 10.75 11.4289C12.0155 11.4289 13.1082 10.9094 14.2671 10.0252C15.3994 9.16132 16.6785 7.88213 18.3108 6.24986L19.7873 4.77337Z"
                          fill="#090909"
                        />
                      </svg>
                    </div>
                  </a>

                  <a
                    href="https://github.com/Yousef-Alsaadan"
                    target="_blank"
                    className="hover:scale-110 transition-transform duration-200"
                  >
                    <div className="border p-2 border-gray-400 rounded-lg">
                      <svg
                        width="22"
                        height="20"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.0124 0C6.71094 0 0 6.76041 0 15.124C0 21.8094 4.29993 27.4685 10.2651 29.4714C11.0109 29.622 11.284 29.146 11.284 28.7456C11.284 28.395 11.2595 27.1931 11.2595 25.9409C7.08337 26.8425 6.21374 24.138 6.21374 24.138C5.54261 22.3853 4.54822 21.9348 4.54822 21.9348C3.18139 21.0083 4.64778 21.0083 4.64778 21.0083C6.16396 21.1085 6.95953 22.5607 6.95953 22.5607C8.30148 24.8642 10.4639 24.2133 11.3338 23.8126C11.458 22.836 11.8559 22.16 12.2784 21.7845C8.94771 21.4339 5.44336 20.1319 5.44336 14.3225C5.44336 12.6699 6.0395 11.3178 6.98412 10.2663C6.83508 9.89079 6.31299 8.33804 7.13346 6.25983C7.13346 6.25983 8.40104 5.85912 11.2592 7.81227C12.4828 7.48121 13.7448 7.3128 15.0124 7.31138C16.28 7.31138 17.5721 7.48685 18.7654 7.81227C21.6238 5.85912 22.8914 6.25983 22.8914 6.25983C23.7118 8.33804 23.1894 9.89079 23.0404 10.2663C24.0099 11.3178 24.5815 12.6699 24.5815 14.3225C24.5815 20.1319 21.0771 21.4087 17.7215 21.7845C18.2685 22.2602 18.7405 23.1615 18.7405 24.5888C18.7405 26.617 18.7159 28.2447 18.7159 28.7453C18.7159 29.146 18.9894 29.622 19.7349 29.4717C25.7 27.4682 29.9999 21.8094 29.9999 15.124C30.0245 6.76041 23.289 0 15.0124 0Z"
                          fill="#24292F"
                        />
                      </svg>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/yousef-mohammed-b01685249"
                    target="_blank"
                    className="hover:scale-110 transition-transform duration-200"
                  >
                    <div className="border p-2 border-gray-400 rounded-lg">
                      <svg
                        width="22"
                        height="20"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.2936 16.5361L16.2976 16.5354V10.4709C16.2976 7.5041 15.6682 5.21875 12.2501 5.21875C10.6069 5.21875 9.5042 6.1337 9.054 7.0012H9.00651V5.49572H5.76562V16.5354H9.1403V11.0689C9.1403 9.6297 9.4092 8.2379 11.1657 8.2379C12.8965 8.2379 12.9223 9.8804 12.9223 11.1613V16.5361H16.2936Z"
                          fill="#111111"
                        />
                        <path
                          d="M0.267578 5.49219H3.6463V16.5318H0.267578V5.49219Z"
                          fill="#111111"
                        />
                        <path
                          d="M1.95689 0C0.87659 0 0 0.88948 0 1.98566C0 3.08184 0.87659 3.98993 1.95689 3.98993C3.03718 3.98993 3.91377 3.08184 3.91377 1.98566C3.91309 0.88948 3.0365 0 1.95689 0Z"
                          fill="#111111"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-[13.75rem] lg:h-[11.25rem] h-[15.625rem] w-[22.5rem] bg-[#cbe9f1] rounded-xl p-4">
              <div className="flex flex-col items-center justify-between h-full">
                <p className="text-[#6B6969] text-lg">Software Developer</p>

                <p className="font-bold text-2xl">احمد الحربي</p>

                <div className="flex items-center justify-around w-full border-dashed rounded-lg border border-[#2b44e740] p-1">
                  <a
                    href="mailto:ahmedfalahalharbi@gmail.com"
                    target="_blank"
                    className="hover:scale-110 transition-transform duration-200"
                  >
                    <div className="border p-2 border-gray-400 rounded-lg">
                      <svg
                        width="22"
                        height="20"
                        viewBox="0 0 22 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16.2135 0.123728C15.0714 -1.45286e-05 13.6318 -8.0335e-06 11.7952 1.32337e-07H9.70475C7.86821 -8.0335e-06 6.42861 -1.45286e-05 5.28648 0.123728C4.12094 0.250006 3.17656 0.512324 2.37024 1.09815C1.88209 1.45281 1.45281 1.88209 1.09815 2.37024C0.93647 2.59277 0.798011 2.82781 0.679871 3.07797C0.318084 3.84404 0.156711 4.73237 0.0780647 5.79168C-4.5076e-06 6.84323 -2.43067e-06 8.13224 1.32337e-07 9.72156V9.79525C-8.0335e-06 11.6318 -1.45286e-05 13.0714 0.123728 14.2135C0.250006 15.3791 0.512324 16.3234 1.09815 17.1298C1.45281 17.6179 1.88209 18.0472 2.37024 18.4018C3.17656 18.9877 4.12094 19.25 5.28648 19.3763C6.42859 19.5 7.86817 19.5 9.70465 19.5H11.7953C13.6318 19.5 15.0714 19.5 16.2135 19.3763C17.3791 19.25 18.3234 18.9877 19.1298 18.4018C19.6179 18.0472 20.0472 17.6179 20.4018 17.1298C20.9877 16.3234 21.25 15.3791 21.3763 14.2135C21.5 13.0714 21.5 11.6318 21.5 9.79535V9.7209C21.5 8.12073 21.5 6.82486 21.4202 5.76904C21.3399 4.70506 21.1748 3.81379 20.8046 3.04546C20.6899 2.80734 20.5565 2.58304 20.4018 2.37024C20.0472 1.88209 19.6179 1.45281 19.1298 1.09815C18.3234 0.512324 17.3791 0.250006 16.2135 0.123728ZM3.25191 2.31168C3.75992 1.94259 4.41013 1.72745 5.44804 1.615C6.49999 1.50103 7.85843 1.5 9.75 1.5H11.75C13.6416 1.5 15 1.50103 16.052 1.615C17.0899 1.72745 17.7401 1.94259 18.2481 2.31168C18.6087 2.57369 18.9259 2.89081 19.1879 3.25139L17.2907 5.14861C15.6091 6.83026 14.4001 8.03703 13.3572 8.83267C12.3317 9.6151 11.5556 9.92893 10.75 9.92893C9.94438 9.92893 9.16825 9.6151 8.14275 8.83267C7.09994 8.03703 5.89092 6.83026 4.20926 5.1486L2.31205 3.25139C2.57412 2.89081 2.89128 2.57369 3.25191 2.31168ZM19.7873 4.77337C19.8477 5.09361 19.8925 5.45891 19.9245 5.88204C19.9995 6.87493 20 8.11482 20 9.75C20 11.6416 19.999 13 19.885 14.052C19.7725 15.0899 19.5574 15.7401 19.1883 16.2481C18.9262 16.6089 18.6089 16.9262 18.2481 17.1883C17.7401 17.5574 17.0899 17.7725 16.052 17.885C15 17.999 13.6416 18 11.75 18H9.75C7.85843 18 6.49999 17.999 5.44804 17.885C4.41013 17.7725 3.75992 17.5574 3.25191 17.1883C2.89111 16.9262 2.57382 16.6089 2.31168 16.2481C1.94259 15.7401 1.72745 15.0899 1.615 14.052C1.50103 13 1.5 11.6416 1.5 9.75C1.5 8.12645 1.50047 6.89244 1.57395 5.90274C1.60601 5.47084 1.65131 5.09885 1.71271 4.77337L3.18917 6.24983C4.82144 7.88212 6.10062 9.16131 7.23288 10.0252C8.39181 10.9094 9.48455 11.4289 10.75 11.4289C12.0155 11.4289 13.1082 10.9094 14.2671 10.0252C15.3994 9.16132 16.6785 7.88213 18.3108 6.24986L19.7873 4.77337Z"
                          fill="#090909"
                        />
                      </svg>
                    </div>
                  </a>

                  <a
                    href="https://github.com/AhmedFalahALharbi"
                    target="_blank"
                    className="hover:scale-110 transition-transform duration-200"
                  >
                    <div className="border p-2 border-gray-400 rounded-lg">
                      <svg
                        width="22"
                        height="20"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.0124 0C6.71094 0 0 6.76041 0 15.124C0 21.8094 4.29993 27.4685 10.2651 29.4714C11.0109 29.622 11.284 29.146 11.284 28.7456C11.284 28.395 11.2595 27.1931 11.2595 25.9409C7.08337 26.8425 6.21374 24.138 6.21374 24.138C5.54261 22.3853 4.54822 21.9348 4.54822 21.9348C3.18139 21.0083 4.64778 21.0083 4.64778 21.0083C6.16396 21.1085 6.95953 22.5607 6.95953 22.5607C8.30148 24.8642 10.4639 24.2133 11.3338 23.8126C11.458 22.836 11.8559 22.16 12.2784 21.7845C8.94771 21.4339 5.44336 20.1319 5.44336 14.3225C5.44336 12.6699 6.0395 11.3178 6.98412 10.2663C6.83508 9.89079 6.31299 8.33804 7.13346 6.25983C7.13346 6.25983 8.40104 5.85912 11.2592 7.81227C12.4828 7.48121 13.7448 7.3128 15.0124 7.31138C16.28 7.31138 17.5721 7.48685 18.7654 7.81227C21.6238 5.85912 22.8914 6.25983 22.8914 6.25983C23.7118 8.33804 23.1894 9.89079 23.0404 10.2663C24.0099 11.3178 24.5815 12.6699 24.5815 14.3225C24.5815 20.1319 21.0771 21.4087 17.7215 21.7845C18.2685 22.2602 18.7405 23.1615 18.7405 24.5888C18.7405 26.617 18.7159 28.2447 18.7159 28.7453C18.7159 29.146 18.9894 29.622 19.7349 29.4717C25.7 27.4682 29.9999 21.8094 29.9999 15.124C30.0245 6.76041 23.289 0 15.0124 0Z"
                          fill="#24292F"
                        />
                      </svg>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ahmed-alharbi-7a8436304/"
                    target="_blank"
                    className="hover:scale-110 transition-transform duration-200"
                  >
                    <div className="border p-2 border-gray-400 rounded-lg">
                      <svg
                        width="22"
                        height="20"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.2936 16.5361L16.2976 16.5354V10.4709C16.2976 7.5041 15.6682 5.21875 12.2501 5.21875C10.6069 5.21875 9.5042 6.1337 9.054 7.0012H9.00651V5.49572H5.76562V16.5354H9.1403V11.0689C9.1403 9.6297 9.4092 8.2379 11.1657 8.2379C12.8965 8.2379 12.9223 9.8804 12.9223 11.1613V16.5361H16.2936Z"
                          fill="#111111"
                        />
                        <path
                          d="M0.267578 5.49219H3.6463V16.5318H0.267578V5.49219Z"
                          fill="#111111"
                        />
                        <path
                          d="M1.95689 0C0.87659 0 0 0.88948 0 1.98566C0 3.08184 0.87659 3.98993 1.95689 3.98993C3.03718 3.98993 3.91377 3.08184 3.91377 1.98566C3.91309 0.88948 3.0365 0 1.95689 0Z"
                          fill="#111111"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-[13.75rem] lg:h-[11.25rem] h-[15.625rem] w-[22.5rem] bg-[#F6E8F1] rounded-xl p-4">
              <div className="flex flex-col items-center justify-between h-full">
                <p className="text-[#6B6969] text-lg">Software Developer</p>

                <p className="font-bold text-2xl">نورة التويم</p>

                <div className="flex items-center justify-around w-full border-dashed rounded-lg border border-[#2b44e740] p-1">
                  <a
                    href="mailto:nourahaltuaim@gmail.com"
                    target="_blank"
                    className="hover:scale-110 transition-transform duration-200"
                  >
                    <div className="border p-2 border-gray-400 rounded-lg">
                      <svg
                        width="22"
                        height="20"
                        viewBox="0 0 22 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16.2135 0.123728C15.0714 -1.45286e-05 13.6318 -8.0335e-06 11.7952 1.32337e-07H9.70475C7.86821 -8.0335e-06 6.42861 -1.45286e-05 5.28648 0.123728C4.12094 0.250006 3.17656 0.512324 2.37024 1.09815C1.88209 1.45281 1.45281 1.88209 1.09815 2.37024C0.93647 2.59277 0.798011 2.82781 0.679871 3.07797C0.318084 3.84404 0.156711 4.73237 0.0780647 5.79168C-4.5076e-06 6.84323 -2.43067e-06 8.13224 1.32337e-07 9.72156V9.79525C-8.0335e-06 11.6318 -1.45286e-05 13.0714 0.123728 14.2135C0.250006 15.3791 0.512324 16.3234 1.09815 17.1298C1.45281 17.6179 1.88209 18.0472 2.37024 18.4018C3.17656 18.9877 4.12094 19.25 5.28648 19.3763C6.42859 19.5 7.86817 19.5 9.70465 19.5H11.7953C13.6318 19.5 15.0714 19.5 16.2135 19.3763C17.3791 19.25 18.3234 18.9877 19.1298 18.4018C19.6179 18.0472 20.0472 17.6179 20.4018 17.1298C20.9877 16.3234 21.25 15.3791 21.3763 14.2135C21.5 13.0714 21.5 11.6318 21.5 9.79535V9.7209C21.5 8.12073 21.5 6.82486 21.4202 5.76904C21.3399 4.70506 21.1748 3.81379 20.8046 3.04546C20.6899 2.80734 20.5565 2.58304 20.4018 2.37024C20.0472 1.88209 19.6179 1.45281 19.1298 1.09815C18.3234 0.512324 17.3791 0.250006 16.2135 0.123728ZM3.25191 2.31168C3.75992 1.94259 4.41013 1.72745 5.44804 1.615C6.49999 1.50103 7.85843 1.5 9.75 1.5H11.75C13.6416 1.5 15 1.50103 16.052 1.615C17.0899 1.72745 17.7401 1.94259 18.2481 2.31168C18.6087 2.57369 18.9259 2.89081 19.1879 3.25139L17.2907 5.14861C15.6091 6.83026 14.4001 8.03703 13.3572 8.83267C12.3317 9.6151 11.5556 9.92893 10.75 9.92893C9.94438 9.92893 9.16825 9.6151 8.14275 8.83267C7.09994 8.03703 5.89092 6.83026 4.20926 5.1486L2.31205 3.25139C2.57412 2.89081 2.89128 2.57369 3.25191 2.31168ZM19.7873 4.77337C19.8477 5.09361 19.8925 5.45891 19.9245 5.88204C19.9995 6.87493 20 8.11482 20 9.75C20 11.6416 19.999 13 19.885 14.052C19.7725 15.0899 19.5574 15.7401 19.1883 16.2481C18.9262 16.6089 18.6089 16.9262 18.2481 17.1883C17.7401 17.5574 17.0899 17.7725 16.052 17.885C15 17.999 13.6416 18 11.75 18H9.75C7.85843 18 6.49999 17.999 5.44804 17.885C4.41013 17.7725 3.75992 17.5574 3.25191 17.1883C2.89111 16.9262 2.57382 16.6089 2.31168 16.2481C1.94259 15.7401 1.72745 15.0899 1.615 14.052C1.50103 13 1.5 11.6416 1.5 9.75C1.5 8.12645 1.50047 6.89244 1.57395 5.90274C1.60601 5.47084 1.65131 5.09885 1.71271 4.77337L3.18917 6.24983C4.82144 7.88212 6.10062 9.16131 7.23288 10.0252C8.39181 10.9094 9.48455 11.4289 10.75 11.4289C12.0155 11.4289 13.1082 10.9094 14.2671 10.0252C15.3994 9.16132 16.6785 7.88213 18.3108 6.24986L19.7873 4.77337Z"
                          fill="#090909"
                        />
                      </svg>
                    </div>
                  </a>

                  <a
                    href="https://github.com/tunourah"
                    target="_blank"
                    className="hover:scale-110 transition-transform duration-200"
                  >
                    <div className="border p-2 border-gray-400 rounded-lg">
                      <svg
                        width="22"
                        height="20"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.0124 0C6.71094 0 0 6.76041 0 15.124C0 21.8094 4.29993 27.4685 10.2651 29.4714C11.0109 29.622 11.284 29.146 11.284 28.7456C11.284 28.395 11.2595 27.1931 11.2595 25.9409C7.08337 26.8425 6.21374 24.138 6.21374 24.138C5.54261 22.3853 4.54822 21.9348 4.54822 21.9348C3.18139 21.0083 4.64778 21.0083 4.64778 21.0083C6.16396 21.1085 6.95953 22.5607 6.95953 22.5607C8.30148 24.8642 10.4639 24.2133 11.3338 23.8126C11.458 22.836 11.8559 22.16 12.2784 21.7845C8.94771 21.4339 5.44336 20.1319 5.44336 14.3225C5.44336 12.6699 6.0395 11.3178 6.98412 10.2663C6.83508 9.89079 6.31299 8.33804 7.13346 6.25983C7.13346 6.25983 8.40104 5.85912 11.2592 7.81227C12.4828 7.48121 13.7448 7.3128 15.0124 7.31138C16.28 7.31138 17.5721 7.48685 18.7654 7.81227C21.6238 5.85912 22.8914 6.25983 22.8914 6.25983C23.7118 8.33804 23.1894 9.89079 23.0404 10.2663C24.0099 11.3178 24.5815 12.6699 24.5815 14.3225C24.5815 20.1319 21.0771 21.4087 17.7215 21.7845C18.2685 22.2602 18.7405 23.1615 18.7405 24.5888C18.7405 26.617 18.7159 28.2447 18.7159 28.7453C18.7159 29.146 18.9894 29.622 19.7349 29.4717C25.7 27.4682 29.9999 21.8094 29.9999 15.124C30.0245 6.76041 23.289 0 15.0124 0Z"
                          fill="#24292F"
                        />
                      </svg>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/noura-a-altuwaim/"
                    target="_blank"
                    className="hover:scale-110 transition-transform duration-200"
                  >
                    <div className="border p-2 border-gray-400 rounded-lg">
                      <svg
                        width="22"
                        height="20"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.2936 16.5361L16.2976 16.5354V10.4709C16.2976 7.5041 15.6682 5.21875 12.2501 5.21875C10.6069 5.21875 9.5042 6.1337 9.054 7.0012H9.00651V5.49572H5.76562V16.5354H9.1403V11.0689C9.1403 9.6297 9.4092 8.2379 11.1657 8.2379C12.8965 8.2379 12.9223 9.8804 12.9223 11.1613V16.5361H16.2936Z"
                          fill="#111111"
                        />
                        <path
                          d="M0.267578 5.49219H3.6463V16.5318H0.267578V5.49219Z"
                          fill="#111111"
                        />
                        <path
                          d="M1.95689 0C0.87659 0 0 0.88948 0 1.98566C0 3.08184 0.87659 3.98993 1.95689 3.98993C3.03718 3.98993 3.91377 3.08184 3.91377 1.98566C3.91309 0.88948 3.0365 0 1.95689 0Z"
                          fill="#111111"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-[13.75rem] lg:h-[11.25rem] h-[15.625rem] w-[22.5rem] bg-[#d4f4ef] rounded-xl p-4">
              <div className="flex flex-col items-center justify-between h-full">
                <p className="text-[#6B6969] text-lg">Software Developer</p>

                <p className="font-bold text-2xl">مدى الوذيناني</p>

                <div className="flex items-center justify-around w-full border-dashed rounded-lg border border-[#2b44e740] p-1">
                  <a
                    href="mailto:madaawadh1@gmail.com"
                    target="_blank"
                    className="hover:scale-110 transition-transform duration-200"
                  >
                    <div className="border p-2 border-gray-400 rounded-lg">
                      <svg
                        width="22"
                        height="20"
                        viewBox="0 0 22 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16.2135 0.123728C15.0714 -1.45286e-05 13.6318 -8.0335e-06 11.7952 1.32337e-07H9.70475C7.86821 -8.0335e-06 6.42861 -1.45286e-05 5.28648 0.123728C4.12094 0.250006 3.17656 0.512324 2.37024 1.09815C1.88209 1.45281 1.45281 1.88209 1.09815 2.37024C0.93647 2.59277 0.798011 2.82781 0.679871 3.07797C0.318084 3.84404 0.156711 4.73237 0.0780647 5.79168C-4.5076e-06 6.84323 -2.43067e-06 8.13224 1.32337e-07 9.72156V9.79525C-8.0335e-06 11.6318 -1.45286e-05 13.0714 0.123728 14.2135C0.250006 15.3791 0.512324 16.3234 1.09815 17.1298C1.45281 17.6179 1.88209 18.0472 2.37024 18.4018C3.17656 18.9877 4.12094 19.25 5.28648 19.3763C6.42859 19.5 7.86817 19.5 9.70465 19.5H11.7953C13.6318 19.5 15.0714 19.5 16.2135 19.3763C17.3791 19.25 18.3234 18.9877 19.1298 18.4018C19.6179 18.0472 20.0472 17.6179 20.4018 17.1298C20.9877 16.3234 21.25 15.3791 21.3763 14.2135C21.5 13.0714 21.5 11.6318 21.5 9.79535V9.7209C21.5 8.12073 21.5 6.82486 21.4202 5.76904C21.3399 4.70506 21.1748 3.81379 20.8046 3.04546C20.6899 2.80734 20.5565 2.58304 20.4018 2.37024C20.0472 1.88209 19.6179 1.45281 19.1298 1.09815C18.3234 0.512324 17.3791 0.250006 16.2135 0.123728ZM3.25191 2.31168C3.75992 1.94259 4.41013 1.72745 5.44804 1.615C6.49999 1.50103 7.85843 1.5 9.75 1.5H11.75C13.6416 1.5 15 1.50103 16.052 1.615C17.0899 1.72745 17.7401 1.94259 18.2481 2.31168C18.6087 2.57369 18.9259 2.89081 19.1879 3.25139L17.2907 5.14861C15.6091 6.83026 14.4001 8.03703 13.3572 8.83267C12.3317 9.6151 11.5556 9.92893 10.75 9.92893C9.94438 9.92893 9.16825 9.6151 8.14275 8.83267C7.09994 8.03703 5.89092 6.83026 4.20926 5.1486L2.31205 3.25139C2.57412 2.89081 2.89128 2.57369 3.25191 2.31168ZM19.7873 4.77337C19.8477 5.09361 19.8925 5.45891 19.9245 5.88204C19.9995 6.87493 20 8.11482 20 9.75C20 11.6416 19.999 13 19.885 14.052C19.7725 15.0899 19.5574 15.7401 19.1883 16.2481C18.9262 16.6089 18.6089 16.9262 18.2481 17.1883C17.7401 17.5574 17.0899 17.7725 16.052 17.885C15 17.999 13.6416 18 11.75 18H9.75C7.85843 18 6.49999 17.999 5.44804 17.885C4.41013 17.7725 3.75992 17.5574 3.25191 17.1883C2.89111 16.9262 2.57382 16.6089 2.31168 16.2481C1.94259 15.7401 1.72745 15.0899 1.615 14.052C1.50103 13 1.5 11.6416 1.5 9.75C1.5 8.12645 1.50047 6.89244 1.57395 5.90274C1.60601 5.47084 1.65131 5.09885 1.71271 4.77337L3.18917 6.24983C4.82144 7.88212 6.10062 9.16131 7.23288 10.0252C8.39181 10.9094 9.48455 11.4289 10.75 11.4289C12.0155 11.4289 13.1082 10.9094 14.2671 10.0252C15.3994 9.16132 16.6785 7.88213 18.3108 6.24986L19.7873 4.77337Z"
                          fill="#090909"
                        />
                      </svg>
                    </div>
                  </a>

                  <a
                    href="https://github.com/meme-mw"
                    target="_blank"
                    className="hover:scale-110 transition-transform duration-200"
                  >
                    <div className="border p-2 border-gray-400 rounded-lg">
                      <svg
                        width="22"
                        height="20"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.0124 0C6.71094 0 0 6.76041 0 15.124C0 21.8094 4.29993 27.4685 10.2651 29.4714C11.0109 29.622 11.284 29.146 11.284 28.7456C11.284 28.395 11.2595 27.1931 11.2595 25.9409C7.08337 26.8425 6.21374 24.138 6.21374 24.138C5.54261 22.3853 4.54822 21.9348 4.54822 21.9348C3.18139 21.0083 4.64778 21.0083 4.64778 21.0083C6.16396 21.1085 6.95953 22.5607 6.95953 22.5607C8.30148 24.8642 10.4639 24.2133 11.3338 23.8126C11.458 22.836 11.8559 22.16 12.2784 21.7845C8.94771 21.4339 5.44336 20.1319 5.44336 14.3225C5.44336 12.6699 6.0395 11.3178 6.98412 10.2663C6.83508 9.89079 6.31299 8.33804 7.13346 6.25983C7.13346 6.25983 8.40104 5.85912 11.2592 7.81227C12.4828 7.48121 13.7448 7.3128 15.0124 7.31138C16.28 7.31138 17.5721 7.48685 18.7654 7.81227C21.6238 5.85912 22.8914 6.25983 22.8914 6.25983C23.7118 8.33804 23.1894 9.89079 23.0404 10.2663C24.0099 11.3178 24.5815 12.6699 24.5815 14.3225C24.5815 20.1319 21.0771 21.4087 17.7215 21.7845C18.2685 22.2602 18.7405 23.1615 18.7405 24.5888C18.7405 26.617 18.7159 28.2447 18.7159 28.7453C18.7159 29.146 18.9894 29.622 19.7349 29.4717C25.7 27.4682 29.9999 21.8094 29.9999 15.124C30.0245 6.76041 23.289 0 15.0124 0Z"
                          fill="#24292F"
                        />
                      </svg>
                    </div>
                  </a>

                  <a
                    href=""
                    target="_blank"
                    className="hover:scale-110 transition-transform duration-200"
                  >
                    <div className="border p-2 border-gray-400 rounded-lg">
                      <svg
                        width="22"
                        height="20"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.2936 16.5361L16.2976 16.5354V10.4709C16.2976 7.5041 15.6682 5.21875 12.2501 5.21875C10.6069 5.21875 9.5042 6.1337 9.054 7.0012H9.00651V5.49572H5.76562V16.5354H9.1403V11.0689C9.1403 9.6297 9.4092 8.2379 11.1657 8.2379C12.8965 8.2379 12.9223 9.8804 12.9223 11.1613V16.5361H16.2936Z"
                          fill="#111111"
                        />
                        <path
                          d="M0.267578 5.49219H3.6463V16.5318H0.267578V5.49219Z"
                          fill="#111111"
                        />
                        <path
                          d="M1.95689 0C0.87659 0 0 0.88948 0 1.98566C0 3.08184 0.87659 3.98993 1.95689 3.98993C3.03718 3.98993 3.91377 3.08184 3.91377 1.98566C3.91309 0.88948 3.0365 0 1.95689 0Z"
                          fill="#111111"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-[13.75rem] lg:h-[11.25rem] h-[15.625rem] w-[22.5rem] bg-[#dae0e7] rounded-tl-xl rounded-bl-full rounded-br-xl rounded-tr-xl"></div>
          </div>
          <img src={contactB} className="absolute right-80 xl:block hidden" />

          <div className="bg-[#F76C35] w-[20px] h-[20px] rounded-full absolute left-16 translate-y-[6.5rem]"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

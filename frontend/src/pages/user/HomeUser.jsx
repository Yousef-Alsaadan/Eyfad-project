import React, { useEffect } from "react";
import userImage from "../../images/user.png";
import NavBar from "../../Components/NavBar";
import bgImage from "../../Images/bgUserPage.png";
import { Link, useNavigate } from "react-router-dom";

const HomeUser = () => {
  const userData = JSON.parse(localStorage.getItem("user"));

  localStorage.setItem("user1", JSON.stringify({ userData }));

  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate("/user/login");
    }
  });
  return (
    <div
      className="overflow-hidden lg:h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <NavBar />
      <div className="h-screen">
        <div className="flex flex-col items-center gap-5 sm:gap-10 m-5 sm:m-20">
          <h1 className="text-3xl sm:text-5xl text-center">
            مرحبًا بكـ{" "}
            <span className="font-extrabold text-black text-3xl sm:text-4xl">
              {userData ? userData.firstName : " "}{" "}
              <span className="ml-3">
                {userData ? userData.secondName : " "}
              </span>
            </span>
          </h1>
          <h1 className="text-3xl sm:text-5xl text-center mt-5">
            كيف يمكننا مساعدتك اليوم؟
          </h1>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 md:gap-28 w-3/4 mt-14 justify-center items-center px-5">
            <Link to={"/report"}>
              <div className="bg-[rgba(255,255,255,0.29)] border-2 border-[rgba(43,68,231,0.23)] px-4 pt-5 pb-10 w-full rounded-xl text-gray-600 shadow-[0_4px_10px_rgba(43,68,231,0.2)] transition-colors cursor-pointer hover:bg-white">
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <svg
                    width="15"
                    height="19"
                    viewBox="0 0 15 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.78186 1.44444V4.55556C8.78186 5.5374 9.54096 6.33333 10.4774 6.33333H13.4445M5.96709 13.8889V12.5556M8.93416 13.8889V9.8889M2.69548 1H8.07966C8.52926 1 8.96056 1.1873 9.27856 1.5207L13.3718 5.81263C13.6898 6.14604 13.8684 6.59821 13.8684 7.0697V16.2222C13.8684 17.2041 13.1093 18 12.1729 18H2.69548C1.75909 18 1 17.2041 1 16.2222V2.77778C1 1.79594 1.75909 1 2.69548 1Z"
                      stroke="#2B44E7"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <h1 className="font-bold">
                    اكتشف نتائج تقريرك بسرعة مع الذكاء الاصطناعي
                  </h1>
                </div>
                <div className="text-right text-[14px] hidden md:block mt-4">
                  <p>
                    ميزة تستخدم الذكاء الاصطناعي لتحليل تقاريرك بسرعة وتقديم
                    ملخصات دقيقة للنتائج، مما يسهل عليك فهم المعلومات الطبية أو
                    البيانات المعقدة بشكل فوري
                  </p>
                </div>
              </div>
            </Link>

            <Link to={"/terms"}>
              <div className="bg-[rgba(255,255,255,0.29)] border-2 border-[rgba(43,68,231,0.23)] px-4 pt-5 pb-10 w-full rounded-xl text-gray-600 shadow-[0_4px_10px_rgba(43,68,231,0.2)] transition-colors cursor-pointer hover:bg-white">
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <svg
                    width="26"
                    height="25"
                    viewBox="0 0 26 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.645 8.7533L16.2467 11.355M13.645 8.7533L4.53884 17.8594C3.82039 18.5779 3.82039 19.7427 4.53884 20.4612C5.25729 21.1796 6.42213 21.1796 7.14058 20.4612L16.2467 11.355M13.645 8.7533L16.8601 5.53884C17.5786 4.82039 18.7434 4.82039 19.4619 5.53884C20.1803 6.25729 20.1803 7.42213 19.4619 8.14059L16.2467 11.355"
                      stroke="#2B44E7"
                      strokeWidth="2"
                    />
                    <path
                      d="M7.25 1V7M9.5 4H5"
                      stroke="#2B44E7"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M22.25 11V17M24.5 14H20"
                      stroke="#2B44E7"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <h1 className="font-bold">
                    ابحث عن مصطلح طبي تود المعرفة عنه
                  </h1>
                </div>
                <div className="text-right text-[14px] hidden md:block mt-4">
                  <p>
                    ميزة تتيح للمستخدمين البحث بسهولة عن أي مصطلح طبي للحصول على
                    شرح مبسط وسريع حوله، مما يساعد على فهم المعلومات الطبية
                    المعقدة بطريقة ميسرة.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeUser;

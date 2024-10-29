import React, { useEffect, useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";
import subLogo from "../../assets/subLogo.svg";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorBorder, setErrorBorder] = useState("");

  const userData = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      navigate("/user");
    }
  });

  const handleSubmit = async (e) => {
    if (email === "" || password === "") {
      errorLog("الرجاء تعبأة الحقول");
      return;
    }
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: response.data.user._id,
          firstName: response.data.user.firstName,
          secondName: response.data.user.secondName,
          email: response.data.user.email,
          token: response.data.token,
          isAdmin: response.data.user.isAdmin,
        })
      ); // Save token to local storage
      // Redirect or update UI after successful login
      // console.log(response);

      // Set a timeout to remove 'user' from localStorage after 5 hours
      setTimeout(() => {
        localStorage.removeItem("user");
      }, 5 * 60 * 60 * 1000);

      navigate("/user");

      setEmail("");
      setPassword("");
    } catch (err) {
      errorLog(err.response.data.message);
    }
  };

  const errorLog = (message) => {
    setErrorMessage(message);
    setErrorBorder("border-[#FF6565]");
  };

  return (
    <div className="bg-gradient-to-br from-[#dcf3ff] via-[#f5ffff] to-[#fff] to-[20%]">
      <div className="flex items-center justify-center h-screen bg-gradient-to-tl from-[#dcf3ff] via-[#f5ffff] to-transparent md:to-[20%] to-[40%]">
        <div className="rounded-3xl px-4 pb-12 pt-6 shadow-xl bg-white z-50 shadow-[#00293333] text-center flex flex-col items-center gap-4 md:gap-8 xl:w-2/5 md:w-9/12 w-full">
          <div className="w-full h-0 text-2xl">
            <div className="w-fit rounded-full p-2 float-left">
              <Link to="/" className="p-2">
                <IoIosArrowBack />
              </Link>
            </div>
          </div>

          <div className="">
            <img src={subLogo} className="object-cover w-20" />
          </div>

          <h1 className="font-medium text-4xl">مرحبا!</h1>

          <div className="flex flex-col gap-2">
            <p className="text-[#737D7F] text-sm">
              الرجاء إدخال بريدك الإلكتروني وكلمة المرور أدناه <br /> للوصول إلى
              إيفاد
            </p>
          </div>

          <div className="w-full md:px-4 flex flex-col gap-4">
            <p className="text-[#FF6565] text-sm text-start">{errorMessage}</p>

            <p className="text-start">
              البريد الالكتروني
              <span className="text-[#EF3061]"> *</span>
            </p>
            <label
              className={`input input-bordered border-2 ${errorBorder} flex items-center gap-2 focus-within:outline-none`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
          </div>

          <div className="w-full md:px-4 flex flex-col gap-4">
            <p className="text-start">
              كلمة المرور
              <span className="text-[#EF3061]"> *</span>
            </p>
            <label
              className={`noto_font input input-bordered border-2 ${errorBorder} flex items-center gap-2 focus-within:outline-none`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="••••••••"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label>
          </div>

          <p className="text-start w-full md:px-4 text-[#737D7F] text-sm">
            ليس لديك حساب ؟{" "}
            <span className="text-[#0AC6F2] hover:underline">
              <Link to="/user/signup">إنشاء حساب</Link>
            </span>
          </p>

          <div className="font-bold text-base">
            <button
              onClick={handleSubmit}
              className="border-2 border-[#002933] rounded-full hover:text-[#fff] px-8 py-2 hover:bg-[#002933] hover:border-[#002933] text-black flex items-center justify-center gap-2"
            >
              الدخول{" "}
              <span className="text-xl mt-1">
                <IoMdArrowRoundForward className="hover:text-[#fff] rotate-180" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;

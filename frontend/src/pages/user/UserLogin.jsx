import React from "react";

import React, { useEffect, useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
// import LogIn from "../assets/Login-img.png";
import axios from "axios";
function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorBorder, setErrorBorder] = useState("");

  // const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    if (email === "" || password === "") {
      errorLog("Please fill in all fields!");
      return;
    }

    console.log(email, password);

    // const user = users.find((data) => data.email === email);
    // if (!user) {
    //   errorLog("Email or password is wrong!");
    //   return;
    // }

    // if (user.password !== password) {
    //   errorLog("Email or password is wrong!");
    //   return;
    // }
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      localStorage.setItem(
        "user",
        JSON.stringify({
          firstName: response.data.user.firstName,
          secondName: response.data.user.secondName,
          email: response.data.user.email,
          token: response.data.token,
          isAdmin: response.data.user.isAdmin,
        })
      ); // Save token to local storage
      // Redirect or update UI after successful login
      console.log(response);
      // setTimeout(() => {

      navigate("/user-page");

      setEmail("");
      setPassword("");
    } catch (err) {
      errorLog(err.response.data.message);
    }
  };
  // localStorage.setItem(
  //   "user",
  //   JSON.stringify({
  //     firstName: user.firstName,
  //     secondName: user.secondName,
  //     email: user.email,
  //   })
  // );

  const errorLog = (message) => {
    setErrorMessage(message);
    setErrorBorder("border-[#FF6565]");
  };

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="rounded-3xl px-4 pb-12 pt-6 shadow-xl bg-transparent z-10 shadow-[#00293333] text-center flex flex-col items-center gap-4 md:gap-8 xl:w-2/5 md:w-9/12 w-full">
          <div className="w-full h-0 text-2xl">
            <div className="w-fit rounded-full p-2">
              <Link to="/" className="p-2">
                <IoIosArrowBack />
              </Link>
            </div>
          </div>

          <h1 className="font-medium text-4xl">مرحبا!</h1>

          <div className="flex flex-col gap-2">
            <p className="text-[#737D7F] text-sm">
              الرجاء إدخال بريدك الإلكتروني وكلمة المرور أدناه <br /> للوصول إلى
              إيفاد
            </p>
          </div>

          <div className="w-full md:px-4 flex flex-col gap-4">
            <p className="text-[#FF6565] text-sm text-end">{errorMessage}</p>

            <p className="text-end">
              <span className="text-[#EF3061]">*</span> البريد الالكتروني
            </p>
            <label
              className={`input input-bordered border-2 ${errorBorder} flex items-center gap-2 focus-within:outline-none`}
            >
              <input
                type="text"
                className="grow text-end"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
            </label>
          </div>

          <div className="w-full md:px-4 flex flex-col gap-4">
            <p className="text-end">
              <span className="text-[#EF3061]">*</span> كلمة المرور
            </p>
            <label
              className={`input input-bordered border-2 ${errorBorder} flex items-center gap-2 focus-within:outline-none`}
            >
              <input
                type="password"
                className="grow text-end"
                placeholder="••••••••"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
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
            </label>
          </div>

          <p className="text-end w-full md:px-4 text-[#737D7F] text-sm">
            ليس لديك حساب ؟{" "}
            <span className="text-[#0AC6F2] hover:underline">
              <Link to="/signup">إنشاء حساب</Link>
            </span>
          </p>

          <div className="font-bold text-base">
            <button
              onClick={handleSubmit}
              className="border-2 border-[#6622CE] rounded-full hover:text-[#fff] px-8 py-2 hover:bg-[#6622CE] hover:border-[#6622CE] text-[#6622CE] flex items-center justify-center gap-2"
            >
              الدخول{" "}
              <span className="text-xl mt-1">
                <IoMdArrowRoundForward className="hover:text-[#fff]" />
              </span>
            </button>
          </div>
        </div>

        <div className="absolute md:bottom-40 md:right-40 bottom-32 right-4">
          {/* <img src={LogIn} className="h-[50px]" /> */}
        </div>
        <div className="absolute md:bottom-2/3  md:left-[88%] bottom-2/3 right-4 -z-50">
          <svg
            width="88"
            height="139"
            viewBox="0 0 88 139"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden md:block"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 45.8869C0 43.3498 2.05679 41.293 4.59397 41.293C7.13115 41.293 9.18794 43.3498 9.18794 45.8869V133.61C9.18794 136.147 7.13115 138.204 4.59397 138.204C2.05679 138.204 0 136.147 0 133.61L0 45.8869Z"
              fill="#C5D4E9"
              className="xs:hidden"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M52.0781 32.4572C52.0781 29.9201 54.1349 27.8633 56.6721 27.8633C59.2093 27.8633 61.2661 29.9201 61.2661 32.4573V120.18C61.2661 122.717 59.2093 124.774 56.6721 124.774C54.1349 124.774 52.0781 122.717 52.0781 120.18L52.0781 32.4572Z"
              fill="#C5D4E9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M78.1211 4.59397C78.1211 2.05679 80.1779 0 82.7151 0C85.2522 0 87.309 2.05679 87.309 4.59397V92.3169C87.309 94.8541 85.2522 96.9109 82.7151 96.9109C80.1779 96.9109 78.1211 94.8541 78.1211 92.3169L78.1211 4.59397Z"
              fill="#001926"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M26.043 16.7092C26.043 14.172 28.0998 12.1152 30.6369 12.1152C33.1741 12.1152 35.2309 14.172 35.2309 16.7092V104.432C35.2309 106.969 33.1741 109.026 30.6369 109.026C28.0998 109.026 26.043 106.969 26.043 104.432L26.043 16.7092Z"
              fill="#6622CE"
            />
          </svg>
        </div>
        <div className="absolute md:bottom-1/4  md:right-[88%] bottom-1/4 right-4 -z-50">
          <svg
            width="88"
            height="139"
            viewBox="0 0 88 139"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden md:block"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 45.8869C0 43.3498 2.05679 41.293 4.59397 41.293C7.13115 41.293 9.18794 43.3498 9.18794 45.8869V133.61C9.18794 136.147 7.13115 138.204 4.59397 138.204C2.05679 138.204 0 136.147 0 133.61L0 45.8869Z"
              fill="#C5D4E9"
              className="xs:hidden"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M52.0781 32.4572C52.0781 29.9201 54.1349 27.8633 56.6721 27.8633C59.2093 27.8633 61.2661 29.9201 61.2661 32.4573V120.18C61.2661 122.717 59.2093 124.774 56.6721 124.774C54.1349 124.774 52.0781 122.717 52.0781 120.18L52.0781 32.4572Z"
              fill="#C5D4E9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M78.1211 4.59397C78.1211 2.05679 80.1779 0 82.7151 0C85.2522 0 87.309 2.05679 87.309 4.59397V92.3169C87.309 94.8541 85.2522 96.9109 82.7151 96.9109C80.1779 96.9109 78.1211 94.8541 78.1211 92.3169L78.1211 4.59397Z"
              fill="#001926"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M26.043 16.7092C26.043 14.172 28.0998 12.1152 30.6369 12.1152C33.1741 12.1152 35.2309 14.172 35.2309 16.7092V104.432C35.2309 106.969 33.1741 109.026 30.6369 109.026C28.0998 109.026 26.043 106.969 26.043 104.432L26.043 16.7092Z"
              fill="#6622CE"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;

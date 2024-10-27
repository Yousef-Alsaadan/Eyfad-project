import React from "react";

const InfoBox = ({ title, description }) => {
  return (
    <div className="p-6 sm:p-10 md:p-12 md:px-20 space-y-6 bg-white min-h-[350px] rounded-3xl shadow-lg max-w-2xl w-full ">
      <div className="flex flex-row items-center gap-3 md:gap-5">
        <div>
          <svg
            width="48"
            height="48"
            viewBox="0 0 89 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.5 69C54.0015 69 69 54.0015 69 35.5C69 16.9985 54.0015 2 35.5 2C16.9985 2 2 16.9985 2 35.5C2 54.0015 16.9985 69 35.5 69Z"
              fill="#F3F7FF"
              stroke="#1F64E7"
              strokeWidth="2.5"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M30.1321 61.4939C31.8908 61.8185 33.6801 61.9872 35.5 62C50.1355 62 62 50.1355 62 35.5C62 20.8645 50.1355 9 35.5 9C31.7404 9 28.1636 9.78293 24.9238 11.1946C19.2938 13.6479 14.6816 17.9999 11.896 23.4419C10.0445 27.0589 9 31.1575 9 35.5C9 39.44 9.85985 43.1792 11.4021 46.5401C12.5032 48.9396 13.9521 51.1463 15.6843 53.0956"
              fill="white"
            />
            <path
              d="M30.1321 61.4939C31.8908 61.8185 33.6801 61.9872 35.5 62C50.1355 62 62 50.1355 62 35.5C62 20.8645 50.1355 9 35.5 9C31.7404 9 28.1636 9.78293 24.9238 11.1946C19.2938 13.6479 14.6816 17.9999 11.896 23.4419C10.0445 27.0589 9 31.1575 9 35.5C9 39.44 9.85985 43.1792 11.4021 46.5401C12.5032 48.9396 13.9521 51.1463 15.6843 53.0956"
              stroke="#1F64E7"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M18.7974 56.0747C20.9455 57.8207 23.3723 59.237 26.0008 60.2466"
              stroke="#1F64E7"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path d="M63 62L69 68" stroke="#1F64E7" strokeWidth="2.5" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M68.0304 67.0303C66.1377 68.923 66.1377 71.9917 68.0304 73.8844L79.1157 84.9697C81.0084 86.8625 84.0771 86.8625 85.9698 84.9697C87.8625 83.077 87.8625 80.0083 85.9698 78.1156L74.8845 67.0303C72.9918 65.1376 69.9231 65.1376 68.0304 67.0303Z"
              fill="#E8F0FE"
              stroke="#1F64E7"
              strokeWidth="2.5"
            />
            <path
              d="M73 69L84 80"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M29 24C29 35.598 38.4021 45 50 45C52.2784 45 54.472 44.6372 56.5262 43.9662C53.1732 52.2871 45.0225 58.1607 35.5 58.1607C22.9849 58.1607 12.8394 48.0152 12.8394 35.5C12.8394 24.1596 21.1697 14.7648 32.045 13.1011C30.113 16.2793 29 20.0097 29 24Z"
              fill="#E8F0FE"
            />
            <path
              d="M36 17C34.7266 17 33.4825 17.1253 32.2793 17.3642M28.6447 18.4761C21.8039 21.3508 17 28.1144 17 36"
              stroke="#75A4FE"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h2 className="text-lg sm:text-xl font-semibold text-right text-blue-900 max-w-[80%] break-words">
          {title}
        </h2>
      </div>

      <p className="text-right text-sm sm:text-base text-gray-700">
        {description}
      </p>
    </div>
  );
};

export default InfoBox;

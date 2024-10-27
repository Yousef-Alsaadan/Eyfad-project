import { useRouteError } from "react-router-dom";
import Error from "../Images/error.png";
import background from "../Images/bacground.png";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  // console.error(error);

  return (
    <div
      id="error-page"
      className="h-screen w-screen flex justify-center items-center bg-white relative"
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-white grid grid-cols-12 gap-4"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="relative z-10 flex flex-col md:flex-row justify-evenly items-center">
        <div className="mb-8 md:mb-0">
          <img src={Error} alt="error image" className="w-40 md:w-64" />
        </div>

        {/* Error message */}
        <div className="text-center">
          <h1 className="text-9xl font-bold text-black">404</h1>
          <p className="text-2xl font-semibold">صفحة غير موجودة</p>
          <p className="text-lg text-gray-600">
            {error?.message || "حدث خطأ ما. حاول مرة أخرى لاحقًا."}
          </p>
          <Link
            to="/"
            className="mt-4 inline-block px-8 py-2 text-white bg-indigo-600 rounded-full hover:bg-indigo-800 transition"
          >
            الصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}

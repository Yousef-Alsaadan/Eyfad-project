import React from 'react';
import userImage from '../../images/user.png';
import NavBar from '../../Components/NavBar';
import { Link } from 'react-router-dom';

const HomeUser = () => {
 
  return (
    <div className=''>
      <NavBar />
      <div className='flex flex-col gap-10 m-10 '>
        <h1 className='text-2xl text-center'>
          اهلا بك <span className='font-extrabold text-indigo-300'>
        
          </span>
        </h1>
        <div>
          <img
            src={userImage}
            alt='user'
            className='sm:w-2/5 mx-auto animate-fadeIn'
          />
        </div>
        

        <div className="w-full text-center mt-10">
  <Link to={'/report'}>
    <button className="relative inline-block lg:w-1/2 text-indigo-900 sm:text-3xl px-4 py-2 md:py-6 rounded-lg 
      transition duration-300 ease-in-out bg-white border-[1px] border-indigo-900 hover:bg-indigo-900 hover:text-white">
      <span className="absolute inset-0 border-2 border-white rounded-lg"></span>
      <span className="relative z-10">اكتشف نتائج تقريرك بسرعة مع الذكاء الاصطناعي</span>
    </button>
  </Link>
</div>


         
        <div className='flex justify-center items-center mt-5 '>
          <svg
            width="23"
            height="24"
            viewBox="0 0 23 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.0313 0.194513C9.65083 0.169194 8.5112 1.26778 8.48588 2.64827L8.36753 9.10082C8.3169 11.8618 10.5141 14.1411 13.2751 14.1917L13.4851 2.73996C13.5104 1.35947 12.4118 0.219833 11.0313 0.194513ZM18.2956 13.2009C19.5734 12.4101 21.1491 12.8612 21.8148 14.2084C22.4806 15.5557 21.9844 17.2889 20.7065 18.0797L12.0688 23.425C10.7372 20.7305 11.7296 17.2641 14.2853 15.6826L18.2956 13.2009ZM4.04603 12.9402C2.79803 12.1031 1.20692 12.4961 0.492197 13.818C-0.222527 15.14 0.209783 16.8902 1.45779 17.7273L9.89374 23.3858C11.3232 20.742 10.4586 17.2415 7.96256 15.5673L4.04603 12.9402Z"
              fill="black"
            />
          </svg>
        </div>
        
      </div>
    </div>
  );
};

export default HomeUser;

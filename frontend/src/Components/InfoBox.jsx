import React from 'react'

const InfoBox = ({ title, description }) => {
  return (
 
 
    <div className="p-6 sm:p-10 md:p-12 md:px-20 space-y-6   shadow-2xl max-w-2xl w-full rounded-l-3xl rounded-tr-3xl  md:rounded-l-full md:rounded-tr-full">
      <div className="flex flex-col-reverse md:flex-row items-center justify-end gap-3 md:gap-5">
        <h2 className="text-lg sm:text-xl font-semibold text-right text-blue-900">
          {title}
        </h2>
        <div>
          <svg
            width="48" // Adjusting the size for smaller screens
            height="48"
            viewBox="0 0 58 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="29" cy="29" r="29" fill="#DBAAB4" />
            <rect
              x="29"
              y="9"
              width="28"
              height="28"
              transform="rotate(45 29 9)"
              fill="#F76C35"
            />
            <path
              d="M37.0461 35.2381L36.6937 34.8834L36.6925 34.8846L37.0461 35.2381ZM22.9539 35.2381L23.3075 34.8846L23.3063 34.8834L22.9539 35.2381ZM30 42.2842L29.6464 42.6377L30 42.9913L30.3536 42.6377L30 42.2842ZM36.7175 34.8596C36.7096 34.8676 36.7017 34.8755 36.6937 34.8834L37.3984 35.5929C37.4071 35.5842 37.4159 35.5755 37.4246 35.5668L36.7175 34.8596ZM36.7175 21.4246C40.4275 25.1346 40.4275 31.1497 36.7175 34.8596L37.4246 35.5668C41.5251 31.4663 41.5251 24.818 37.4246 20.7175L36.7175 21.4246ZM23.2825 21.4246C26.9925 17.7146 33.0075 17.7146 36.7175 21.4246L37.4246 20.7175C33.3241 16.617 26.6759 16.617 22.5754 20.7175L23.2825 21.4246ZM23.2825 34.8596C19.5725 31.1497 19.5725 25.1346 23.2825 21.4246L22.5754 20.7175C18.4749 24.818 18.4749 31.4663 22.5754 35.5668L23.2825 34.8596ZM23.3063 34.8834C23.2983 34.8755 23.2904 34.8676 23.2825 34.8596L22.5754 35.5668C22.5841 35.5755 22.5929 35.5842 22.6016 35.5929L23.3063 34.8834ZM30.3536 41.9306L23.3075 34.8846L22.6004 35.5917L29.6464 42.6377L30.3536 41.9306ZM36.6925 34.8846L29.6464 41.9306L30.3536 42.6377L37.3996 35.5917L36.6925 34.8846Z"
              fill="#002933"
            />
          </svg>
        </div>
      </div>

      <p className="text-right text-sm sm:text-base text-gray-700">
        {description}
      </p>
      
    </div>
 
 
  
  )
}

export default InfoBox
import React, { useState } from "react";
import axios from "axios";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Title from "../Components/Title";
import InfoBox from "../Components/InfoBox";


function MedicalTerms() {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(''); // Reset error before making a new request
    const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;


    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',  // Chat-based model
          messages: [
            {
              role: "system",
              content: "You are a helpful assistant providing medical terms explanations in Arabic."
            },
            {
              role: "user",
              content: `Give me a simple explanation in Arabic about ${searchTerm}, if the ${searchTerm} is a medical terms write including its description, what happens if it's too high or too low, and related symptoms. Arrange the output like this with sections separated by ###:
              ### الوصف:
              - محتوى الوصف
              ### اعراض الارتفاع والانخفاض:
              - محتوى اعراض الارتفاع والانخفاض
              ### نصائح الارتفاع والانخفاض:
              - محتوى نصائح الارتفاع والانخفاض
              Each section should be on a new line.
              if the ${searchTerm} not a medical terms said it's not a medical terms`
            }
          ],
          temperature: 0,
        },
        {
          headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,  // Replace with your real API key
          },
        }
      );

      setResult(response.data.choices[0].message.content); // Get the result from GPT
    } catch (error) {
      console.error('Error fetching details:', error);
      setError('Failed to fetch medical term details. Please try again.');
    }
  };
  const formatResult = (text) => {
    const sections = text.split('###').filter(Boolean); // Split text into sections
    return sections.map((section, index) => {
      const [title, ...content] = section.split(':'); // Split each section by ':'
      return (
        <div key={index}>
          <strong>{title.trim()}:</strong>
          <p>{content.join(':').trim()}</p>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-custom-gradient">
      <NavBar />
      <div className="flex-grow container mx-auto w-full text-center my-10 px-4">
      <Title 
  title={<span>ابحث عن <span   className="highlight">المصطلح الطبي</span> تود المعرفة عنه</span>} 
  linkPath="/" 
/>        <div className="flex flex-col items-center p-6 space-y-6">
          
          {/* Search Bar */}
          <div className="relative w-full max-w-lg mb-10">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="ابحث عن المصطلح الطبي ..."
                className="w-full px-6 h-12 border rounded-full shadow-sm focus:outline-none"
              />
              <button className="absolute top-0 left-0 h-full flex items-center px-3 hover:scale-110  transition duration-200 ease-in-out hover:text-gray-700 group">
              <svg
                className="w-10 h-10 text-gray-500 "
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="24.4102"
                  cy="24"
                  r="23.5"
                  fill="#001926"
                  className="group-hover:fill-indigo-900 transition duration-300 ease-in-out"
                />
                <path
                  d="M34.623 31.7949C34.9922 32.2051 34.9922 32.8203 34.582 33.1895L33.4336 34.3379C33.0645 34.748 32.4492 34.748 32.0391 34.3379L27.9785 30.2773C27.7734 30.0723 27.6914 29.8262 27.6914 29.5801V28.8828C26.2148 30.0312 24.4102 30.6875 22.4414 30.6875C17.7246 30.6875 13.9102 26.873 13.9102 22.1562C13.9102 17.4805 17.7246 13.625 22.4414 13.625C27.1172 13.625 30.9727 17.4805 30.9727 22.1562C30.9727 24.166 30.2754 25.9707 29.168 27.4062H29.8242C30.0703 27.4062 30.3164 27.5293 30.5215 27.6934L34.623 31.7949ZM22.4414 27.4062C25.3125 27.4062 27.6914 25.0684 27.6914 22.1562C27.6914 19.2852 25.3125 16.9062 22.4414 16.9062C19.5293 16.9062 17.1914 19.2852 17.1914 22.1562C17.1914 25.0684 19.5293 27.4062 22.4414 27.4062Z"
                  fill="white"
                />
                <path
                  d="M22.6354 40.6764C22.2848 40.5596 22.2848 40.0646 22.6354 39.9477L24.6933 39.2625C25.1456 39.1117 25.5567 38.8576 25.8938 38.5203C26.2309 38.1831 26.4848 37.772 26.6354 37.3196L27.3206 35.2629C27.4375 34.9124 27.9326 34.9124 28.0495 35.2629L28.7347 37.3206C28.8855 37.773 29.1397 38.1839 29.477 38.521C29.8143 38.8581 30.2254 39.1119 30.6779 39.2625L32.7347 39.9477C32.8115 39.9729 32.8784 40.0217 32.9258 40.0871C32.9731 40.1525 32.9987 40.2313 32.9987 40.3121C32.9987 40.3929 32.9731 40.4716 32.9258 40.537C32.8784 40.6025 32.8115 40.6512 32.7347 40.6764L30.6768 41.3616C30.2246 41.5123 29.8136 41.7663 29.4765 42.1033C29.1394 42.4404 28.8854 42.8513 28.7347 43.3035L28.0495 45.3612C28.0243 45.438 27.9755 45.5048 27.91 45.5522C27.8446 45.5996 27.7658 45.6251 27.685 45.6251C27.6042 45.6251 27.5255 45.5996 27.4601 45.5522C27.3946 45.5048 27.3458 45.438 27.3206 45.3612L26.6354 43.3035C26.4846 42.8513 26.2307 42.4404 25.8936 42.1033C25.5565 41.7663 25.1455 41.5123 24.6933 41.3616L22.6354 40.6764ZM17.2181 44.7801C17.1721 44.7649 17.132 44.7355 17.1036 44.6963C17.0753 44.657 17.06 44.6097 17.06 44.5613C17.06 44.5128 17.0753 44.4656 17.1036 44.4263C17.132 44.387 17.1721 44.3577 17.2181 44.3424L18.4526 43.9313C19.0029 43.7476 19.4343 43.3163 19.6181 42.766L20.0292 41.5316C20.0445 41.4856 20.0738 41.4456 20.1131 41.4172C20.1524 41.3888 20.1996 41.3735 20.2481 41.3735C20.2966 41.3735 20.3438 41.3888 20.3831 41.4172C20.4224 41.4456 20.4517 41.4856 20.467 41.5316L20.8781 42.766C20.9685 43.0374 21.1209 43.284 21.3232 43.4863C21.5255 43.6885 21.7722 43.8409 22.0436 43.9313L23.2781 44.3424C23.3241 44.3577 23.3642 44.387 23.3925 44.4263C23.4209 44.4656 23.4362 44.5128 23.4362 44.5613C23.4362 44.6097 23.4209 44.657 23.3925 44.6963C23.3642 44.7355 23.3241 44.7649 23.2781 44.7801L22.0436 45.1912C21.7722 45.2816 21.5255 45.434 21.3232 45.6363C21.1209 45.8386 20.9685 46.0852 20.8781 46.3566L20.467 47.591C20.4517 47.637 20.4224 47.677 20.3831 47.7054C20.3438 47.7338 20.2966 47.749 20.2481 47.749C20.1996 47.749 20.1524 47.7338 20.1131 47.7054C20.0738 47.677 20.0445 47.637 20.0292 47.591L19.6181 46.3566C19.5276 46.0852 19.3752 45.8386 19.173 45.6363C18.9707 45.434 18.724 45.2816 18.4526 45.1912L17.2181 44.7801ZM16.1036 37.2707C16.0733 37.2602 16.0471 37.2406 16.0285 37.2145C16.01 37.1884 16 37.1572 16 37.1252C16 37.0931 16.01 37.0619 16.0285 37.0358C16.0471 37.0098 16.0733 36.9901 16.1036 36.9796L16.9259 36.7056C17.2935 36.5834 17.5814 36.2955 17.7036 35.9279L17.9777 35.1057C17.9882 35.0755 18.0078 35.0492 18.0339 35.0307C18.06 35.0121 18.0912 35.0021 18.1233 35.0021C18.1553 35.0021 18.1865 35.0121 18.2126 35.0307C18.2387 35.0492 18.2583 35.0755 18.2688 35.1057L18.5429 35.9279C18.6032 36.1091 18.7048 36.2737 18.8398 36.4087C18.9748 36.5436 19.1394 36.6453 19.3206 36.7056L20.1429 36.9796C20.1732 36.9901 20.1994 37.0098 20.218 37.0358C20.2365 37.0619 20.2465 37.0931 20.2465 37.1252C20.2465 37.1572 20.2365 37.1884 20.218 37.2145C20.1994 37.2406 20.1732 37.2602 20.1429 37.2707L19.3206 37.5448C19.1394 37.605 18.9748 37.7067 18.8398 37.8417C18.7048 37.9766 18.6032 38.1412 18.5429 38.3224L18.2688 39.1435C18.2583 39.1738 18.2387 39.2 18.2126 39.2186C18.1865 39.2371 18.1553 39.2471 18.1233 39.2471C18.0912 39.2471 18.06 39.2371 18.0339 39.2186C18.0078 39.2 17.9882 39.1738 17.9777 39.1435L17.7036 38.3213C17.5814 37.9538 17.2935 37.6659 16.9259 37.5437L16.1036 37.2707Z"
                  fill="#FEFEFE"
                />
              </svg>
            </button>
            </form>
          </div>

          {/* Info Box */}
          {result && (
            <InfoBox
              title={` ${searchTerm}`}
              description={
                <div style={{ direction: 'rtl', textAlign: 'right' }}>
                  {formatResult(result)}  {/* Format and display the result */}
                </div>
              }
            />
          )}

          {/* Error Message */}
          {error && <div className="text-red-500">{error}</div>}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MedicalTerms;

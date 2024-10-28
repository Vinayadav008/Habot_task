import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

function Home() {
  const city = [
    "Abu Dhabi",
    "Dubai",
    "Sharjah & Ajman",
    "Fujairah",
    "Ras Al Khaimah",
    "Umm Al Quwain",
  ];
  return (
    <>
      <div className="bg-Homebg h-screen bg-center  bg-no-repeat">
        <Header />

        <div className="h-[80%] flex flex-col justify-center items-center space-y-8">
          <div className="text-white text-center text-2xl sm:text-4xl">
            <p className="font-bold  ">Are You a Supplier?</p>
            <p className="font-light">Explore Matching Opportunities.</p>
          </div>
          <div className="flex justify-center gap-2">
            <div className="hidden md:flex gap-2 items-center text-sm bg-white rounded-md px-4 py-3 pr-8 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="orange"
                  fill-rule="evenodd"
                  d="M7.25 5.461v1.42l-1.694.138a2.61 2.61 0 0 0-2.367 2.184q-.062.387-.114.775a.3.3 0 0 0 .169.308l.077.036c5.429 2.57 11.93 2.57 17.358 0l.077-.036a.3.3 0 0 0 .168-.308a27 27 0 0 0-.113-.775a2.61 2.61 0 0 0-2.367-2.184l-1.694-.137v-1.42a1.75 1.75 0 0 0-1.49-1.731l-1.22-.183a13.8 13.8 0 0 0-4.08 0l-1.22.183a1.75 1.75 0 0 0-1.49 1.73m6.567-.43a12.3 12.3 0 0 0-3.634 0l-1.22.183a.25.25 0 0 0-.213.247v1.315a57 57 0 0 1 6.5 0V5.461a.25.25 0 0 0-.213-.247z"
                  clip-rule="evenodd"
                />
                <path
                  fill="orange"
                  d="M21.118 12.07a.2.2 0 0 0-.282-.17c-5.571 2.467-12.101 2.467-17.672 0a.2.2 0 0 0-.282.17a27 27 0 0 0 .307 5.727a2.61 2.61 0 0 0 2.367 2.185l1.872.15c3.043.246 6.1.246 9.144 0l1.872-.15a2.61 2.61 0 0 0 2.367-2.185c.306-1.895.41-3.815.307-5.726"
                />
              </svg>
              <input
                className="outline-none md:w-60"
                type="text"
                placeholder="Search your required service here"
              />
            </div>
            <div className="hidden md:flex gap-2 items-center text-sm bg-white rounded-md px-4 py-3 pr-8 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="orange"
                  d="M19 9A7 7 0 1 0 5 9c0 1.387.409 2.677 1.105 3.765h-.008L12 22l5.903-9.235h-.007A6.97 6.97 0 0 0 19 9m-7 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6"
                />
              </svg>
              <input
                className="outline-none sm:w-60"
                type="text"
                placeholder="Search your desired location here"
              />
            </div>
            <button className="bg-success text-white font-medium  rounded-md  px-8">
              Search
            </button>
          </div>
          <p className="text-white text-center">
            <strong> Are you a buyer? </strong> &nbsp;{" "}
            <u> Click here if you are looking to post a requirements</u>
          </p>
        </div>
      </div>

      {/* -------------Ready to Dive Start--------------- */}
      <div className="px-8 flex md:flex-nowrap flex-wrap justify-between py-4 gap-2">
        <div className="w-full flex flex-col gap-4">
          <p className="text-2xl font-bold">Ready to dive into HABOT?</p>
          <p className="text-sm text-justify">
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </p>
          <div className="flex  items-center ">
            <button className=" rounded-md w-64 h-10 text-md bg-success text-center  text-white font-medium cursor-pointer">
              Sign up Today !
            </button>
            <svg
              className="relative right-10 "
              xmlns="http://www.w3.org/2000/svg"
              width="2.3em"
              height="2.3em"
              viewBox="0 0 40 40"
            >
              <path
                fill="white"
                d="M24.73 28.146a.5.5 0 0 0 .36-.153l7.359-7.631a.5.5 0 0 0 0-.693l-7.391-7.662a.5.5 0 1 0-.72.693l7.056 7.315l-7.024 7.284a.5.5 0 0 0 .36.847"
              />
              <path
                fill="white"
                d="M7.91 20.515h24.18a.5.5 0 0 0 0-1H7.91a.5.5 0 0 0 0 1"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-wrap w-full md:justify-end gap-4">
          {city.map((i) => (
            <div className="flex items-center">
              <button className="border border-orange rounded-md w-28 sm:w-40 lg:w-52 h-10 text-sm hover:bg-orange text-center hover:text-white duration-500 peer">
                {i}
              </button>
              <svg
                className="relative right-10 hidden  peer-hover:flex"
                xmlns="http://www.w3.org/2000/svg"
                width="2.3em"
                height="2.3em"
                viewBox="0 0 40 40"
              >
                <path
                  fill="currentColor"
                  d="M24.73 28.146a.5.5 0 0 0 .36-.153l7.359-7.631a.5.5 0 0 0 0-.693l-7.391-7.662a.5.5 0 1 0-.72.693l7.056 7.315l-7.024 7.284a.5.5 0 0 0 .36.847"
                />
                <path
                  fill="currentColor"
                  d="M7.91 20.515h24.18a.5.5 0 0 0 0-1H7.91a.5.5 0 0 0 0 1"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
      {/* -------------Ready to Dive End--------------- */}

      {/* Verified */}
      <div className="bg-secondary flex gap-4 flex-wrap justify-between px-8 py-10">
        <p className="text-md font-medium">Let Suppliers Find You</p>
        <button className="bg-orange text-white  rounded-md px-6 py-1 ">
          Get Verified
        </button>
      </div>

      <div className="px-8 py-10 text-center">
        <p className="font-semibold text-lg ">How it works?</p>
        <p className="text-center">
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with potential buyers, and build successful
          business relationships, sharing valuable feedback.
        </p>
        <div>
          <div></div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;

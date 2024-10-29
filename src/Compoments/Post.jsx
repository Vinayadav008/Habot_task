import React, { useState } from "react";
import Thumbnail from "../assets/Images/Thumbnail.png"
import { TiTick } from "react-icons/ti";
function Post() {
  const [isBuyer, setIsBuyer] = useState(true);
  return (
    <div className="bg-blue p-8 py-20 flex flex-wrap md:flex-nowrap gap-10 lg:gap-20">
      <div className="">
        <img className="md:max-w-sm lg:max-w-md" src={Thumbnail} alt="" />
      </div>
      <div className="">
        <div className="flex gap-8 h-8 mb-8">
          <button
            onClick={() => setIsBuyer(true)}
            className={`${
              isBuyer
                ? "border-b-2 border-orange text-orange  "
                : "text-white"
            } px-6 font-semibold text-lg`}
          >
            Buyer
          </button>
          <button
            onClick={() => setIsBuyer(false)}
            className={`${
              !isBuyer
                ? "border-b-2 border-orange text-orange duration-150 "
                : "text-white"
            } px-6 font-semibold text-lg`}
          >
            Supplier
          </button>
        </div>

        {isBuyer?
        <div className="space-y-2 max-w-96">
          <p className="text-white flex items-start gap-2  text-md">
          <svg className="mt-1 min-w-4"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 15 15"
            >
              <path
                fill="white"
                fill-rule="evenodd"
                d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z"
                clip-rule="evenodd"
              />
            </svg>
            Post your requirements.
          </p>
          <p className="text-white flex items-start gap-2  text-md">
          <svg className="mt-1 min-w-4"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 15 15"
            >
              <path
                fill="white"
                fill-rule="evenodd"
                d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z"
                clip-rule="evenodd"
              />
            </svg>
            Sit back for multiple suppliers to contact you.
          </p>
         <p className="text-white flex items-start gap-2  text-md">
          <svg className="mt-1 min-w-4"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 15 15"
            >
              <path
                fill="white"
                fill-rule="evenodd"
                d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z"
                clip-rule="evenodd"
              />
            </svg>
            Choose among the suppliers based on the ratings and reviews.
          </p>
        </div>
        : <div className="space-y-2 max-w-96" >
        <p className="text-white flex items-start gap-2  text-md">
          <svg className="mt-1 min-w-4"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 15 15"
          >
            <path
              fill="white"
              fill-rule="evenodd"
              d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z"
              clip-rule="evenodd"
            />
          </svg>
          Complete your profile and get verified.
        </p>
        <p className="text-white flex items-start gap-2  text-md">
          <svg className="mt-1 min-w-4"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 15 15"
          >
            <path
              fill="white"
              fill-rule="evenodd"
              d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z"
              clip-rule="evenodd"
            />
          </svg>
          Select service tags for relevant opportunities.
        </p>
        <p className="text-white flex items-start gap-2  text-md">
          <svg className="mt-1 min-w-4"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 15 15"
          >
            <path
              fill="white"
              fill-rule="evenodd"
              d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z"
              clip-rule="evenodd"
            />
          </svg>
          Reach out to buyers and expends your bussiness.
        </p>
      </div>}
      </div>
    </div>
  );
}

export default Post;

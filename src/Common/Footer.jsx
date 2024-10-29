import React from "react";
import logo from "../assets/Images/logodark.png";

function Footer() {
  return (
    <div className="bg-primary text-white  py-6 px-8 mt-4">
      <div className="border-t border-b border-gray py-4 flex justify-between items-center flex-wrap md:flex-nowrap gap-4">
        <div className="flex flex-wrap md:flex-nowrap gap-4 w-full justify-between">
          <div>
            <img src={logo} alt="logo" />
            <p className="text-xs pl-4 mt-4">&copy; R Singhania</p>
          </div>
          <div className=" space-y-2">
            <p className="text-md font-medium">Company</p>
            <p className="text-sm">About</p>
            <p className="text-sm">FAQ</p>
          </div>
          <div className=" space-y-2">
            <p className="text-md font-medium">Terms</p>
            <p className="text-sm">Data privacy</p>
            <p className="text-sm">Terms</p>
            <p className="text-sm">Accessibility</p>
          </div>
          <div className=" space-y-2">
            <p className="text-md font-medium">Related</p>
            <p className="text-sm">Find Buyer</p>
            <p className="text-sm">Feedback</p>
          </div>
        </div>
        <div className="flex gap-2 w-96 lg:w-full md:justify-end">
          <button className="rounded-full border border-gray p-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
              />
            </svg>
          </button>
          <button className="rounded-full border border-gray p-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22.213 5.656a8.4 8.4 0 0 1-2.402.658A4.2 4.2 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.87 11.87 0 0 1-8.621-4.37a4.17 4.17 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.2 4.2 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.2 4.2 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.4 8.4 0 0 1-6.192 1.732a11.83 11.83 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9q0-.271-.012-.541a8.5 8.5 0 0 0 2.086-2.164"
              />
            </svg>
          </button>
          <button className="rounded-full border border-gray p-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
              />
            </svg>
          </button>
          <button className="rounded-full border border-gray p-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;

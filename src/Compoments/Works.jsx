import React from "react";
import buyer from "../assets/Images/buyer.png";
import contact from "../assets/Images/contact.png";
import parties from "../assets/Images/parties.png";
import role from "../assets/Images/role.png";
import supplier from "../assets/Images/supplier.png";
import review from "../assets/Images/review.png";
function Works() {
  return (
    <div className="px-8 py-10 text-center">
      <p className="font-bold text-xl md:text-3xl ">How it works?</p>
      <p className="text-justify max-w-2xl mx-auto">
        Buyers post their needs and review top suppliers, while suppliers
        complete profiles, connect with potential buyers, and build successful
        business relationships, sharing valuable feedback.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3  max-w-4xl mx-auto mt-4">
        <div className=" bg-secondary p-8  ">
          <img src={role} className="m-auto mb-4 h-12 w-12" />
          <p className="font-semibold">Select Your Role and Sign Up</p>
        </div>
        <div className="  p-8  ">
          <img src={buyer} className="m-auto mb-4 h-12 w-12" />
          <p className="font-semibold">Buyers Post Your Requirements</p>
        </div>
        <div className=" bg-secondary p-8  ">
          <img src={review} className="m-auto mb-4 h-12 w-12" />
          <p className="font-semibold">
            {" "}
            Review, Select, and Contact the Best Suppliers
          </p>
        </div>
        <div className=" p-8  ">
          <img src={supplier} className="m-auto mb-4 h-12 w-12" />
          <p className="font-semibold">
            {" "}
            Suppliers Complete your profile and get notified for opportunities
          </p>
        </div>
        <div className=" bg-secondary p-8  ">
          <img src={contact} className="m-auto mb-4 h-12 w-12" />
          <p className="font-semibold">
            Contact to Buyers and Share your Quote for the service
          </p>
        </div>
        <div className=" p-8  ">
          <img src={parties} className="m-auto mb-4 h-12 w-12" />
          <p className="font-semibold">
            Both the Parties can Connect and Make Business Leave a Feedback
          </p>
        </div>
      </div>
    </div>
  );
}

export default Works;

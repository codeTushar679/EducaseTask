// import React, { useState } from "react";

import Link from "next/link";


const SignupPage = () => {

  return (
    <div className="h-190 w-90 rounded-xl bg-[#FBFBFB] drop-shadow-xl border border-[#BCCCDC] flex justify-center p-5">
      <div className="mt-5 flex justify-start flex-col w-full">
        <h2 className="text-2xl font-medium mb-4">Create your <br /> PopX account</h2>

        {/* Full Name */}
        <div className="mb-4">
          <label className="text-[#7743DB] text-sm font-semibold">Full Name <span className="text-red-700">*</span></label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter Name"
            className="w-full p-2 border border-gray-300 rounded mt-1 outline-[#BCCCDC]"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="text-[#7743DB] text-sm font-semibold">Phone number <span className="text-red-700" >*</span></label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Enter phone number"
            className="w-full p-2 border border-gray-300 rounded mt-1 outline-[#BCCCDC]"
          />
        </div>

        {/* Email Address */}
        <div className="mb-4">
          <label className="text-[#7743DB] text-sm font-semibold">Email address <span className="text-red-700">*</span></label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            className="w-full p-2 border border-gray-300 rounded mt-1 outline-[#BCCCDC]"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="text-[#7743DB] text-sm font-semibold">Password <span className="text-red-700">*</span></label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="w-full p-2 border border-gray-300 rounded mt-1 outline-[#BCCCDC]"
          />
        </div>

        {/* Company Name */}
        <div className="mb-4">
          <label className="text-[#7743DB] text-sm font-semibold">Company name</label>
          <input
            type="text"
            name="companyName"
            placeholder="Enter company name"
            className="w-full p-2 border border-gray-300 rounded mt-1 outline-[#BCCCDC]"
          />
        </div>

        {/* Agency Selection */}
        <div className="mb-4">
          <label className="text-[#7743DB] text-sm font-semibold">Are you an Agency? <span className="text-red-700">*</span></label>
          <div className="flex items-center space-x-4 mt-2">
            <label className="flex items-center space-x-1 cursor-pointer">
              <input
                type="radio"
                name="isAgency"
                value="yes"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-1 cursor-pointer">
              <input
                type="radio"
                name="isAgency"
                value="no"
              />
              <span>No</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <Link href="/profile" className="mt-17 h-10 flex justify-center items-center p-3 rounded bg-[#6900FF] text-white font-semibold">
          Create Account
        </Link>
      </div>
    </div>
  );
};


export default SignupPage;
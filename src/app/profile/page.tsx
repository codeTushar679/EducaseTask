import Link from "next/link";
import React from "react";

const AccountSettings = () => {
  return (
    <>
    <div className="flex-col h-190 w-90 rounded-xl bg-[#FBFBFB] drop-shadow-xl border border-[#BCCCDC] flex justify-start p-5">
      <div className="border-b-2 border-dotted border-gray-400 h-65">
        <div className="border-b-2 mb-5">
        <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
        </div>
        
        {/* Profile Section */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img 
              src="https://c1.wallpaperflare.com/preview/660/591/728/man-portrait-face-eyes.jpg" 
              alt="Profile" 
              className="w-19 h-19 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 bg-blue-300 text-white rounded-full p-1 ">
            📷
            </span>
          </div>
          <div>
            <h3 className="text-lg font-medium">Jerry Doe</h3>
            <p className="text-gray-500 text-sm">jerry123@gmail.Com</p>
          </div>
        </div>

        {/* Bio Section */}
        <p className=" text-sm mt-4">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat, Sed Diam
        </p>
      </div>

      <div>
      </div>

      <div className="flex justify-center mt-5 font-medium text-[#49108B]">
      <Link href="/">Go to Home Page</Link>
      </div>
    </div>
    </>
  );
};

export default AccountSettings;

import React from "react";

const Carousel = () => {
  return (
    <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
      <h1 className="text-3xl text-center font-bold text-indigo-500">
        How to use Share-A-Meal
      </h1>
      <div className="border-l-2 mt-10">
        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

          <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

          <div className="flex-auto">
            <h1 className="text-lg">Step 1</h1>
            <h1 className="text-xl font-bold">Create Account</h1>
            <h3>Create a Account using your Email Id and a password</h3>
          </div>
        </div>

        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

          <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

          <div className="flex-auto">
            <h1 className="text-lg">Step 2</h1>
            <h1 className="text-xl font-bold">
              Create a Post if your A Organization
            </h1>
            <h3>
              {
                "Create a Post if your A Organization to let now NGO's that you want to donate and have excess of food or supplies"
              }
            </h3>
          </div>
        </div>

        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

          <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

          <div className="flex-auto">
            <h1 className="text-lg">Step 3</h1>
            <h1 className="text-xl font-bold">
              Browse The post if you are an NGO
            </h1>
            <h3>
              Browse The post if you are an NGO posted by different organization
              call them and talk to them to arrange food
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

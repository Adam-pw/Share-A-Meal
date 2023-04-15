import React from "react";

const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="https://i0.wp.com/www.wedamor.com/wp-content/uploads/feeding.jpg?resize=768%2C431&ssl=1"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 rounded-2xl py-6 bg-[rgba(0,0,0,0.5)]">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Nourishing the World, Share and feeding the Needed
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Share-a-Meal is a website that connects NGOs with leftover food from
            organizations to reduce food waste and combat food insecurity. NGOs
            can register and search for available food donations nearby, while
            organizations can post their food donations on the user-friendly
            platform. Together, we can ensure that nutritious food reaches those
            in need.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            <a href="#">#ReduceFoodWaste</a>

            <a href="#">#FightHunger</a>

            <a href="#">#FoodSharing</a>

            <a href="#">#SustainableSolutions</a>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-300">
                Helped Families
              </dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                12
              </dd>
            </div>

            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-300">
                {"Connected Ngo's"}
              </dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                300+
              </dd>
            </div>

            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-300">
                Number of Meals
              </dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                40
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Hero;

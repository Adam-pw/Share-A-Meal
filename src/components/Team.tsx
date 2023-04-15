import React from "react";

const Team = () => {
  return (
    <>
      <section className="">
        <div className="container px-6 py-10 mx-auto bg-white">
          <div className="xl:flex xl:items-center xL:-mx-4">
            <div className="xl:w-1/2 xl:mx-4">
              <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">
                Our Team
              </h1>

              <p className="max-w-2xl mt-4 text-gray-500">
                {
                  "The Share-a-Meal website was created by a dedicated team of software developers, designers, and project managers who share a common goal of reducing food waste and fighting hunger. Their expertise and passion are reflected in the intuitive and user-friendly platform, which provides an efficient and sustainable solution to address the issue of food waste and insecurity."
                }
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
              <div>
                <img
                  className="object-cover rounded-xl h-64 w-full"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">
                  John Doe
                </h1>

                <p className="mt-2 text-gray-500 capitalize">
                  Full stack developer
                </p>
              </div>

              <div>
                <img
                  className="object-cover rounded-xl h-64 w-full"
                  src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize ">
                  Mia
                </h1>

                <p className="mt-2 text-gray-500 capitalize">
                  Graphic Designer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;

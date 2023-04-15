import { db } from "@/config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/router";
import { title } from "process";
import React, { useState } from "react";

const Addpost = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    name: "",
    address: "",
    number: "",
    date: "",
    time: "",
    other: "",
  });

  const addPost = (e: any) => {
    e.preventDefault();
    addDoc(collection(db, "Post"), {
      name: values.name,
      address: values.address,
      number: values.number,
      date: values.date,
      time: values.time,
      other: values.other,
    }).then(() => {
      router.push("/");
    });

    setValues({
      name: "",
      address: "",
      number: "",
      date: "",
      time: "",
      other: "",
    });
  };
  
  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Name of Organization
                </label>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="First Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, name: event.target.value }))
                  }
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Address
                </label>
                <input
                  type="text"
                  name="lName"
                  id="lName"
                  placeholder="Last Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  onChange={(event) =>
                    setValues((prev) => ({
                      ...prev,
                      address: event.target.value,
                    }))
                  }
                />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Contact Number
            </label>
            <input
              type="number"
              name="guest"
              id="guest"
              placeholder="XXXXX-XXXXX"
              min="0"
              className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, number: event.target.value }))
              }
            />
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, date: event.target.value }))
                  }
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, time: event.target.value }))
                  }
                />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Give other details about how much food is leftover and other
              things
            </label>
            <input
              type="text"
              name="guest"
              id="guest"
              placeholder="Food for 12 persons etc"
              min="0"
              className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, other: event.target.value }))
              }
            />
          </div>
          <div>
            <button
              className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              onClick={addPost}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addpost;

import { db } from "@/config/firebase";
import { query, collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";

const Postrender = () => {
  const [post, setPost] = useState<any>([]);
  useEffect(() => {
    const q = query(collection(db, "Post"));
    onSnapshot(q, (querySnapshot) => {
      setPost(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  
  return (
    <>
      {post.map((value: any, index: any) => {
        return (
          <>
            <div
              className="w-full max-w-6xl mx-auto bg-white p-8 rounded-md shadow-md mt-6"
              key={index}
            >
              <div className="flex justify-between">
                <div className="text-xl font-semibold">{value.data.name}</div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <div className="text-sm text-gray-500">{value.data.time}</div>
                  <div className="text-sm text-gray-500">{value.data.date}</div>
                </div>
              </div>
              <div className="mt-4">{value.data.other}</div>
              <div className="mt-6 flex gap-2 items-center">
                <MdLocationOn /> {value.data.address}
              </div>
              <div className="mt-8">
                <button className="px-4 py-2 rounded-xl bg-[#6A64F1] text-white flex items-center gap-3">
                  <FiPhoneCall />
                  {value.data.number}
                </button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Postrender;

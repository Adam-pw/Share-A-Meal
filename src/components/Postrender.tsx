import { db } from "@/config/firebase";
import {
  query,
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/config/firebase";

const Postrender = () => {
  const [user, loading, error] = useAuthState(auth);
  const [post, setPost] = useState<any>([]);
  const [comment, setComment] = useState<any>([]);

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

  const addComment = (e: any, value: any) => {
    e.preventDefault();
    console.log(comment);
    updateDoc(doc(db, "Post", value.id), {
      comments: [
        ...value.data.comments,
        {
          comment: comment,
          user: user?.displayName,
        },
      ],
    });
  };

  return (
    <>
      {post.map((value: any, index: any) => {
        return (
          <>
            <div
              className="w-full max-w-6xl mx-auto bg-white p-8 rounded-md shadow-md mt-6"
              key={index}
            >
              <div className="font-semibold text-md mb-2">
                Posted by: {value.data.user}
              </div>
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
              <div className="mt-8 flex justify-between">
                <button className="px-4 py-2 rounded-xl bg-[#6A64F1] text-white flex items-center gap-3">
                  <FiPhoneCall />
                  {value.data.number}
                </button>
                {user?.uid === value.data.user ? (
                  <>
                    <button
                      className="px-4 py-2 rounded-xl bg-[#6A64F1] text-white"
                      onClick={() => {
                        deleteDoc(doc(db, "Post", value.id));
                      }}
                    >
                      Delete Post
                    </button>
                  </>
                ) : (
                  <></>
                )}
              </div>
              {value.data.comments && (
                <>
                  {value.data.comments.map((com: any, ind: any) => {
                    return (
                      <>
                        {com.comment && (
                          <>
                            <div
                              className="px-2 py-2 bg-neutral-200 my-2 rounded-lg text-md"
                              key={ind}
                            >
                              <div className="font-semibold">
                                Commented By: {com.user}
                              </div>
                              <div className="">{com.comment}</div>
                            </div>
                          </>
                        )}
                      </>
                    );
                  })}
                </>
              )}
              <form>
                <div className="flex gap-4 mt-4 justify-end">
                  <input
                    placeholder="Write your comment"
                    className="px-4 py-2 w-96 rounded-xl focus:outline-none border border-gray-300"
                    onChange={(event) => {
                      setComment([event.target.value]);
                    }}
                  ></input>
                  <button
                    className="px-4 py-2 rounded-xl bg-[#6A64F1] text-white w-32 text-center"
                    onClick={(e) => {
                      addComment(e, value);
                    }}
                  >
                    Comment
                  </button>
                </div>
              </form>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Postrender;

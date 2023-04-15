import Addpost from "@/components/Addpost";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { auth } from "@/config/firebase";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const Post = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <>
      {user ? (
        <>
          <Navbar />
          <Addpost />
          <Footer />
        </>
      ) : (
        <>
          <Navbar />
          <div className="m-8 text-center text-3xl">Please Login</div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Post;

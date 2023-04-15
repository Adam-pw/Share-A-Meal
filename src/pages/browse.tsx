import Addpost from "@/components/Addpost";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Postrender from "@/components/Postrender";
import { auth } from "@/config/firebase";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const Browse = () => {
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
          <div className="m-8 text-center text-3xl">Please Login Or Creat a New Accouunt</div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Browse;

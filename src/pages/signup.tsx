import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Signup from "@/components/Signup";
import Head from "next/head";
import React from "react";

const signup = () => {
  return (
    <>
      <Head>
        <title>Share-A-Meal</title>
      </Head>
      <Navbar />
      <Signup />
      <Footer />
    </>
  );
};

export default signup;

import Footer from "@/components/Footer";
import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import React from "react";

const login = () => {
  return (
    <>
     <Head>
      <title>Share-A-Meal</title>
    </Head>
      <Navbar />
      <Login />
      <Footer />
    </>
  );
};

export default login;

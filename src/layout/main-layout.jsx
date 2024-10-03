import React from "react";
import Header from "./header/header";
import { Outlet } from "react-router-dom";
import Footer from "./footer/footer";

const Mainlayout = () => {
  return (
    <div className="main_wrap">
      <div className="wrap">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Mainlayout;

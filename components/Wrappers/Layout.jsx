import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="border-red-500 border-2">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

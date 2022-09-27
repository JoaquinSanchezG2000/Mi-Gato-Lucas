import React, { useContext } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Context } from "../../Context/menuContext";


const Layout = ({ children }) => {
  const { handleCartClose, handleMenuClose } = useContext(Context);
  


  return (
    <div onClick={() => {
      handleCartClose()
      handleMenuClose();
      
    } 
    }>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

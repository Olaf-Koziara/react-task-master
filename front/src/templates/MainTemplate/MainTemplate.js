import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const MainTemplate = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default MainTemplate;

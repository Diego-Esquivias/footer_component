import Footer from "./components/Footer";
import React from "react";


function Test() {
  return (
    <>
    <Footer logo="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" aboutLinks={{aboutUs: '/about', FAQ: '/FAQ', contact: '/contact'}} socialLinks={{ github: "https://github.com/johndoe", instagram: "https://instagram.com/johndoe", facebook: "https://facebook.com/johndoe" }} />
    </>
  );
}

export default Test;

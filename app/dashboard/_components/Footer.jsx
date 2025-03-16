import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center mt-5 bg-gray-900 text-primary-content p-10 text-center">
      <p className="font-bold text-gray-300">NEXT.JS</p>
      <p className="text-gray-500">
        Copyright © {new Date().getFullYear()} - All right reserved by Chetan.
      </p>
    </footer>
  );
};

export default Footer;

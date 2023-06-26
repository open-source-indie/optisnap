import React from "react";
import 'remixicon/fonts/remixicon.css'

function SocialSharing({ onClick }) {
  return (
    <div className="flex">
      <i className="ri-facebook-box-fill text-5xl cursor-pointer" ></i>
      <i className="ri-twitter-fill text-5xl cursor-pointer"></i>
      <i className="ri-instagram-fill text-5xl cursor-pointer"></i>
    </div>
  );
}

export default SocialSharing;
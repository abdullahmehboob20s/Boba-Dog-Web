import React from "react";
import "./SocialLinkBtn.css";

function SocialLinkBtn(props) {
  return (
    <button
      className={`social-link-btn pointer block ${
        props.name == "twitter" ? "twitter" : ""
      }`}
    >
      <img src={props.img} alt="" />
    </button>
  );
}

export default SocialLinkBtn;

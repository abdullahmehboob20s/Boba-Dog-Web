import React from "react";
import "./SideBySideSection.css";

function SideBySideSection(props) {
  const { reverse, img, grid = false, children, title, discriptions } = props;
  return (
    <div className="side-by-side-wrapper py-50px">
      {children}
      <div className="container-wrapper">
        <div className={`side-by-side-section ${reverse ? "reverse" : ""}`}>
          <div className="section-left">
            <img src={img} alt="" className="side-by-side-img" />
          </div>
          <div className="section-right">
            {title ? (
              <p className="fs-40px black weight-5 title mb-30px ">{title}</p>
            ) : (
              ""
            )}
            {discriptions.map((text, index) => (
              <p key={index} className="fs-16px gray subtitle lh-22px mb-30px">
                {text}
              </p>
            ))}

            {grid ? (
              <div className="side-by-side-grid mt-60px">
                <div className="grid-item bg-light-blue radius-5px">
                  <p className="white fs-25px weight-5 title">10 Trillion</p>
                  <p className="white fs-16px subtitle">Total Supply</p>
                </div>
                <div className="grid-item bg-light-blue radius-5px">
                  <p className="white fs-25px weight-5 title">10 Trillion</p>
                  <p className="white fs-16px subtitle">Total Supply</p>
                </div>
                <div className="grid-item bg-light-blue radius-5px">
                  <p className="white fs-25px weight-5 title">10 Trillion</p>
                  <p className="white fs-16px subtitle">Total Supply</p>
                </div>
                <div className="grid-item bg-light-blue radius-5px">
                  <p className="white fs-25px weight-5 title">10 Trillion</p>
                  <p className="white fs-16px subtitle">Total Supply</p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBySideSection;

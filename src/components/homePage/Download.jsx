import React from "react";
import { Mockup, Playstore, Appstore, QR } from "../common/Assets.js";

const Download = () => {
  return (
    <div className="app">
      <div className="appdiv">
        <div className="mockup">
          <img src={Mockup} width="90%" alt="" />
        </div>
        <div className="downloadct">
          <h5>Download our Cogo Smart App</h5>
          <h6>
            Cogo Smart is available on both Android and iOS devices. Simply
            visit the Google Play Store or Apple App Store and search for Cogo
            Smart.
          </h6>
          <div className="d-flex align-items-center gap-2">
            <a href="">
              <img src={Appstore} height="60px" alt="" />
            </a>
            <a href="">
              <img src={Playstore} height="60px" alt="" />
            </a>
          </div>
        </div>
        <div className="qr d-flex align-items-center flex-column mx-auto">
          <img src={QR} width="70%" alt="" />
          <h6>Scan QR to Download</h6>
        </div>
      </div>
    </div>
  );
};

export default Download;

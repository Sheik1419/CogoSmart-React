import React from "react";
import { Home_BG_3 } from "../common/Assets.js";

const Whoweare = () => {
  return (
    <div className="whoweare">
      <div className="whowearediv">
        <div className="whowearevideo">
          <video autoPlay muted loop className="rounded-2">
            <source src={Home_BG_3} type="video/mp4" />
          </video>
        </div>
        <div className="whowearect">
          <h3>Who We Are!</h3>
          <h6>
            Cogo Smart, we are dedicated to revolutionizing the way businesses
            handle billing and payments. We understand the unique challenges
            faced by farmers and traders in managing their businesses and data.
            The complexities of tracking sales, managing businesses and
            maintaining financial records can be overwhelming, often leading to
            inefficiencies and errors. That's why we created a simple, powerful
            billing platform designed to streamline business operations and
            bring much-needed clarity and control.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Whoweare;

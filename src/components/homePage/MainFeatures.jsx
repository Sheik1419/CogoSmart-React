import React from "react";
import { Card_Img_1, Card_Img_2, Card_Img_3 } from "../common/Assets.js";

const MainFeatures = () => {
  return (
    <div className="mainfeatures">
      <div className="mainfeaturesdiv">
        <div className="mainfeatures_1">
          <div className="mainfeatures-content mainfeatures-one">
            <div className="mainfeatures-ct">
              <h5>----------------- Get Started</h5>
              <h1>The First Software for Tender Coconut Traders</h1>
              <h6>
                Cogo Smart is proud to be the first software designed
                specifically for managing coconut traders. Our app streamlines
                account management for traders, farmers, and parties, with
                integrated payout systems.
                <br />
                Cogo Smart is your all-in-one solution for managing parties,
                employees, farmers, loads, expenses, and more, ensuring smooth
                operations and efficient tracking.
              </h6>
            </div>
          </div>
          <div className="mainfeatures-img">
            <img
              src={Card_Img_1}
              width="80%"
              className="d-flex ms-auto"
              alt=""
            />
          </div>
        </div>
        <div className="mainfeatures_1">
          <div className="mainfeatures-img">
            <img
              src={Card_Img_2}
              width="80%"
              className="d-flex me-auto"
              alt=""
            />
          </div>
          <div className="mainfeatures-content mainfeatures-two d-flex mx-auto justify-content-end flex-column">
            <div className="mainfeatures-ct">
              <h5>----------------- Hiking Essentials</h5>
              <h1>Multi-Language</h1>
              <h6>
                Cogo Smart is proud to offer multi-language support. Initially,
                we provide English and Kannada, making it easier than ever for
                users to interact with our platform in their preferred language.
                Whether you're at home, at work, or on the go. <br />
                The entire Cogo Smart interface is now available in Kannada.
                Navigate through settings, menus, and options with ease in your
                native language, ensuring a smooth and intuitive user
                experience.
              </h6>
            </div>
          </div>
        </div>
        <div className="mainfeatures_1">
          <div className="mainfeatures-content mainfeatures-three">
            <div className="mainfeatures-ct">
              <h5>----------------- Where you go is the key</h5>
              <h1>Digitalized Bank Account Activation</h1>
              <h6>
                Cogo Smart makes banking effortless by creating a personalized
                bank account for you. Once your account is set up, you can
                easily manage your finances, make secure payments, and track
                your transactions all in one place.
              </h6>
            </div>
          </div>
          <div className="mainfeatures-img">
            <img
              src={Card_Img_3}
              width="80%"
              className="d-flex ms-auto"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFeatures;

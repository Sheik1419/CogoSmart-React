import React from "react";
import { Card_Img_4 } from "./Assets.js";

const KeyFeatures = () => {
  return (
    <div className="keyfeatures">
      <div className="keyfeaturesdiv">
        <div className="keyfeatureshead">
          <h3>Key Features</h3>
        </div>

        <div className="card-main">
          <div className="card-left">
            <div className="card-main-ct">
              <div className="accordion" id="accordionExample1">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collaps01"
                    >
                      Mobile App Version
                    </button>
                  </h2>
                  <div
                    id="collaps01"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample1"
                  >
                    <div className="accordion-body">
                      <h6>
                        User-friendly mobile interface designed specifically for
                        the tender coconut trade.
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse02"
                    >
                      Multi-Language System
                    </button>
                  </h2>
                  <div
                    id="collapse02"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample1"
                  >
                    <div className="accordion-body">
                      <h6>Providing Multi-Language Interface and Support.</h6>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse03"
                    >
                      Payment Gateway
                    </button>
                  </h2>
                  <div
                    id="collapse03"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample1"
                  >
                    <div className="accordion-body">
                      <h6>
                        Integrated payment gateway for smooth financial
                        transactions.
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse04"
                    >
                      GST and Tax System
                    </button>
                  </h2>
                  <div
                    id="collapse04"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample1"
                  >
                    <div className="accordion-body">
                      <h6>Simplified GST and Tax management solutions.</h6>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse05"
                    >
                      Cloud Storage
                    </button>
                  </h2>
                  <div
                    id="collapse05"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample1"
                  >
                    <div className="accordion-body">
                      <h6>
                        Cloud storage for organized, accessible documents
                        anytime, anywhere.
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse06"
                    >
                      Scalable Solution
                    </button>
                  </h2>
                  <div
                    id="collapse06"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample1"
                  >
                    <div className="accordion-body">
                      <h6>
                        Scalable solutions to grow your business confidently.
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-right">
            <img
              src={Card_Img_4}
              className="d-flex mx-auto"
              width="100%"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;

import React, { useEffect } from "react";
import { Icon1, Icon2, Icon3, Icon4, Icon5 } from "../common/Assets.js";
import Splide from "@splidejs/splide";

const Choose = () => {
  useEffect(() => {
    new Splide("#carousel1", {
      type: "loop",
      perPage: 4,
      autoplay: true,
      interval: 3000,
      arrows: false,
      pagination: false,
      breakpoints: {
        1098: {
          perPage: 3,
        },
        600: {
          perPage: 2,
        },
        500: {
          perPage: 1,
        },
      },
    }).mount();
  }, []);

  return (
    <div className="choose">
      <div className="choosediv">
        <div className="choosehead">
          <h3>Why Choose Cogo Smart ?</h3>
        </div>

        <div id="carousel1" className="splide">
          <div className="splide__track">
            <ul className="splide__list">
              <li className="splide__slide">
                <div className="choose-content">
                  <div className="carousel-img">
                    <img src={Icon1} height="60px" className="d-flex me-auto" />
                  </div>
                  <div className="carousel-content">
                    <h5>Efficient Digital Invoicing</h5>
                    <h6>
                      Say goodbye to manual invoicing errors. Generate precise
                      digital invoices instantly.
                    </h6>
                  </div>
                </div>
              </li>
              <li className="splide__slide">
                <div className="choose-content">
                  <div className="carousel-img">
                    <img src={Icon2} height="60px" className="d-flex me-auto" />
                  </div>
                  <div className="carousel-content">
                    <h5>Seamless Payment Tracking</h5>
                    <h6>
                      Real-time updates on payments. Eliminate discrepancies and
                      double payments.
                    </h6>
                  </div>
                </div>
              </li>
              <li className="splide__slide">
                <div className="choose-content">
                  <div className="carousel-img">
                    <img src={Icon3} height="60px" className="d-flex me-auto" />
                  </div>
                  <div className="carousel-content">
                    <h5>In-depth Financial Insights</h5>
                    <h6>
                      Access comprehensive reports and analytics Monitor your
                      revenue, expenses, and profits effortlessly.
                    </h6>
                  </div>
                </div>
              </li>
              <li className="splide__slide">
                <div className="choose-content">
                  <div className="carousel-img">
                    <img src={Icon4} height="60px" className="d-flex me-auto" />
                  </div>
                  <div className="carousel-content">
                    <h5>Robust Auto-Reconciliation</h5>
                    <h6>
                      Automate your financial reconciliation. Maintain accuracy
                      without manual intervention
                    </h6>
                  </div>
                </div>
              </li>
              {/* <li className="splide__slide">
                <div className="choose-content">
                  <div className="carousel-img">
                    <img src={Icon5} height="60px" className="d-flex me-auto" />
                  </div>
                  <div className="carousel-conteknt">
                    <h5>Scalable Solution</h5>
                    <h6>
                      Whether you are a small trader or a large-scale operation,
                      Cogo Smart is designed to scale with your business,
                      providing the tools you need to grow and succeed.
                    </h6>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;

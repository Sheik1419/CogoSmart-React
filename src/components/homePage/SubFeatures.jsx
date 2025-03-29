import React from "react";
import { Icon6, Icon7, Icon8, Icon9, Icon10, Icon11 } from "./Assets.js";

const SubFeatures = () => {
  return (
    <div className="subfeatures">
      <div className="subfeaturesdiv">
        <div className="subfeatureshead">
          <h3>Features</h3>
        </div>

        <div className="cards-div">
          <div className="cards-ct">
            <img src={Icon6} alt="" />
            <h5>Load Management for Purchasers (Parties)</h5>
            <h6>
              Cogo Smart helps purchasers easily manage and track coconut loads.
              View available loads, plan logistics, and coordinate deliveries
              efficiently. Our app keeps all load-related information in one
              place, minimizing confusion and errors.
            </h6>
          </div>
          <div className="cards-ct">
            <img src={Icon7} alt="" />
            <h5>Advance Payment Tracking for Farmers</h5>
            <h6>
              Farmers can track advance payments received from traders, ensuring
              full transparency and up-to-date financial records. Cogo Smart
              helps maintain clear records for all transactions, empowering
              farmers to plan better.
            </h6>
          </div>
          <div className="cards-ct">
            <img src={Icon8} alt="" />
            <h5>Employee Management & Availability</h5>
            <h6>
              Employees can view the availability of loads in the market, update
              their status, and track their work in real time. Cogo Smart offers
              load assignments and employee shifts, enhancing workforce
              efficiency.
            </h6>
          </div>
          <div className="cards-ct">
            <img src={Icon9} alt="" />
            <h5>Expense Tracking</h5>
            <h6>
              Keep track of all expenses involved in the coconut trade. From
              transportation costs to handling charges, Cogo Smart lets you log,
              track, and analyze your expenses to ensure profitable operations.
            </h6>
          </div>
          <div className="cards-ct">
            <img src={Icon10} alt="" />
            <h5>Load Shifting Management</h5>
            <h6>
              Manage and track the shifting of loads with ease. Cogo Smart
              ensures that all load movements are documented and that the
              correct information is available to all stakeholders.
            </h6>
          </div>
          <div className="cards-ct">
            <img src={Icon11} alt="" />
            <h5>Payout Integration</h5>
            <h6>
              Cogo Smart integrates with leading payout systems to streamline
              payments and settlements for all parties involved, whether it's
              for farmers, employees, or traders.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubFeatures;

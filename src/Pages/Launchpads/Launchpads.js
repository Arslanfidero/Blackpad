import React from "react";
import "./Launchpads.css";
import PresaleEnd from "../../Components/PresaleEnd/PresaleEnd";
import RobocatPresale from "../../Components/RobocatPresale/RobocatPresale";

import TokenMetrics from "../../Components/TokenMetrics/TokenMetrics";


function Launchpads(props) {
  window.document.title = "Blackcat - The Launchpad Protocol for Everyone!";
  return (
    <div id="Launchpads">
      <section>
        <div className="section_wrapper flex_section">
          <div className="section_lg_grow">
            <RobocatPresale></RobocatPresale>
            <TokenMetrics></TokenMetrics>
          </div>
          <div className="section_sm_item">
            <PresaleEnd></PresaleEnd>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Launchpads;

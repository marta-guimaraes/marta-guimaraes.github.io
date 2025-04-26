import React from "react";
import "../styles/Papers.css";
import Carousel from "react-bootstrap/Carousel";
import SchoolIcon from "@material-ui/icons/School";

class Papers extends React.Component {
  render() {
    const spotlightPapers = {
      "Paper 1": {
        title: "Data-Driven Identification of Main Behavioural Classes and Characteristics of Resident Space Objects in LEO Through Unsupervised Learning",
        desc: "Using Masked Autoencoders to find patterns in the data and group the RSOs by their intrinsic characteristics, orbital information, and patterns of life.",
        link: "https://amostech.com/TechnicalPapers/2024/Poster/Guimaraes.pdf"
      },
      "Paper 2": {
        title: "Predicting the Position Uncertainty at the Time of Closest Approach with Diffusion Models",
        desc: "Diffusion-baseed inpainting as forecasting.",
        link: "https://arxiv.org/abs/2311.05417"
      },
      "Paper 3": {
        title: "Decision Support Models for Predicting and Explaining Airport Passenger Connectivity From Data",
        desc: "Predicting missed flight connections using historical data on flights and passengers, and analyse the factors that contribute additively to the predicted outcome for each decision horizon.",
        link: "https://ieeexplore.ieee.org/abstract/document/9712170"
      }
    };

    return (
      <div id="papers">
        <div className="section-header">
          <span className="section-title">/ papers</span>
        </div>

        <Carousel indicators={false}>
          {Object.keys(spotlightPapers).map((key, i) => (
            <Carousel.Item key={i}>
              <div className="paper-box">
                <div className="paper-content">
                  <h3>{spotlightPapers[key]["title"]}</h3>
                  <p>{spotlightPapers[key]["desc"]}</p>
                  <a className="paper-link" href={spotlightPapers[key]["link"]} target="_blank" rel="noopener noreferrer">
                    View Paper
                  </a>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="see-more-container">
          <a
            href="https://scholar.google.com/your-profile-link"
            className="see-more-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SchoolIcon color="inherit"></SchoolIcon>
            {" See all papers"}
          </a>
        </div>
      </div>
    );
  }
}

export default Papers;

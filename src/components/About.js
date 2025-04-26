import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently an <b>AI Researcher</b> at
        <a href="https://www.neuraspace.com/"> Neuraspace</a>,
        developing Machine Learning solutions for satellite collision avoidance
        and space debris mitigation. I am also a <b>PhD student</b> at
        <a href="https://www.fct.unl.pt/en"> NOVA-FCT</a> and
        <a href="https://www.tum.de/en/"> TUM</a>.
      </p>
    );
    const two = (
      <p>
        When I’m not coding, I’m usually traveling somewhere warm,
        skating around the city, or diving into books — mostly sci-fi or non-fiction rabbit holes.
      </p>
    );

    const tech_stack = [
      "Transformers",
      "Masked Autoencoders",
      "Diffusion Models",
      "Graph Neural Networks",
      "XGBoost & Traditional ML",
      "Statistical Learning"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some topics I have been playing with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Marta Guimaraes" src={"/assets/me.jpeg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;

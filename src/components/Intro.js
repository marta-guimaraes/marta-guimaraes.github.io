import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";
import ThreeBody from "./ThreeBody";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="intro">
        <ThreeBody></ThreeBody>
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"marta"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">I model stuff sometimes.</div>
          <div className="intro-desc">
            I'm an AI Researcher from Lisbon, Portugal. I have a general interest in
            Machine Learning and Deep Learning, but what truly inspires me is the
            opportunity to apply this knowledge in space science and exploration.
          </div>
          <a
            href="mailto:marta.guimaraes@neuraspace.com"
            className="intro-contact"
          >
            <EmailRoundedIcon color="inherit"></EmailRoundedIcon>
            {" Get in touch"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;

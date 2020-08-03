import React from "react";
import PropTypes from "prop-types";
import ScrollToNext from "@components/ScrollToNext";
import "./style.scss";

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary },
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              My interest are <span className="highlight">JavaScript</span>{" "}
              Web/Mobile development and{" "}
              <span className="highlight">Python</span> for Machine learning
              project.
            </p>
            <p>
              I keen on reading about{" "}
              <span className="highlight">Functional programming</span>, <span className="highlight">Machine learning</span>, <span className="highlight">Deep learning</span>, new
              trends. My favourite framework of technologies are{" "}
              <span className="highlight">Keras</span>,{" "}
              <span className="highlight">Scikit-learn</span>
              <span className="highlight">Reactjs</span>,{" "}
              <span className="highlight">Nodejs</span>
            </p>
            <p>
              In my free time, I learn about new stuffs like{" "}
              <span className="highlight">Docker</span>,{" "}
              <span className="highlight">CI/CD</span>,{" "}
              <span className="highlight">Firebase</span>. Sometime, I try to
              build something with these technologies
            </p>
            <p className="text-emoji" style={{ color: colorPrimary }}>
              \ (•◡•) /
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any,
};

export default AboutPage;

import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
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
              My interest are <span className="highlight">JavaScript</span> and
              everything web.
            </p>
            <p>
              I keen on reading about <span className="highlight">Functional programming</span>, new trends.
              My favourite stack of technologies are <span className="highlight">React</span>, <span className="highlight">GraphQl</span>, <span className="highlight">NodeJs</span>   
            </p>
            <p>
              I have used many UI libraries likes <span className="highlight">Bootstrap React</span>, <span className="highlight">Semantic UI</span>, <span className="highlight">styled-components</span>,
              especially <span className="highlight">Material UI</span>
            </p>
            <p>
              In my free time, I learn about new stuffs like <span className="highlight">Docker</span>, <span className="highlight">CI/CD</span>, <span className="highlight">Firebase</span>
              . Sometime, I try to build something with these technologies
            </p>
            <p className="text-emoji" style={{ color: colorPrimary }}>
              \ (•?•) /
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;

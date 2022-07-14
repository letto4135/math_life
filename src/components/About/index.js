import React from 'react';
import './About.css';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <h1 className="about-h1-small">Originally inspired by a connect four variant my wife made that I decided I could program.</h1>
        <h2 className="about-h2-small">
            <a href="https://mister-life.com" rel="noreferrer" target="_blank">
                My Website
            </a>
        </h2>
      </div>
    );
  }
}

import React from 'react';
import { Link } from 'react-router-dom';

export class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="landing">
        <header className="lading-header">
          <div className="header-logo">
          </div>
          <div className="right-header">
          </div>
        </header>
        <section className="masthead">
          <div className="hero-container">
            <h1>Move work</h1>
            <h1>forward</h1>
            <div className="hero-subtext">
              <p>Vinyasa is the easiest way for teams to</p>
              <p>track their work - and get results.</p>
            </div>
            <div className="get-started-hero">
              <button>Get Started</button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

import React from 'react';
import Scroll from '../Scroll';

const Intro = () => {
  return (
    <section id="top" className="intro">
      <div className="container">
        <header>
          <h2 className="alt">
            <span role="img" aria-label="wave">
              👋
            </span>
            , I'm Jeff
            <br />
            Welcome to my portfolio!
          </h2>
          <p>I am a javascript developer. Check out my work below</p>
        </header>

        <footer>
          <Scroll type="id" element={'projects'}>
            <a href="#projects" className="">
              Show me
            </a>
          </Scroll>
        </footer>
      </div>
    </section>
  );
};

export default Intro;

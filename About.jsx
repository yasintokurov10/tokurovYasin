import React from "react";
import "./ForAll.css";
const About = () => {
  return (
    <>
      <div class="aboutme" id="aboutme">
        <div class="container">
          <div class="image">
            {/* <img src="https://i.imgur.com/iqyO3x4.jpg" alt="Test"> */}
          </div>
          <div class="info">
            <h2>About me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua,, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua,Lorem ipsum dolor sit amet.{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div class="hobbies">
              <div class="content">
                <div class="icon">
                  {/* <img src="https://i.imgur.com/6MuQPBz.png" alt=""> */}
                </div>

                <div class="text">
                  <h3>Web Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              <div class="content">
                <div class="icon">
                  {/* <img src="https://i.imgur.com/g8AxlCE.png" alt=""> */}
                </div>

                <div class="text">
                  <h3>Graphic Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              <div class="content">
                <div class="icon">
                  {/* <img src="https://i.imgur.com/Zc8l50u.png" alt=""> */}
                </div>

                <div class="text">
                  <h3>SEO</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              <div class="content">
                <div class="icon">
                  {/* <img src="https://i.imgur.com/jASup8l.png" alt=""> */}
                </div>

                <div class="text">
                  <h3>Online Marketing</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

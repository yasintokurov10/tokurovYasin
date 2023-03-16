import React from "react";
import "./ForAll.css";

const ContactMe = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="container">
          <div className="info">
            <h2>Contact me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua, Lorem
              ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p>123 33rd Street East Saskatoon, Sk S7K 1R9.</p>
            <p>
              <strong>Email:</strong> me@email.com
              <strong>Phone:</strong> 01129995610
            </p>
          </div>
          <div className="form">
            <label>Name *</label>
            <input type="text" />
            <label>Email Adress *</label>
            <input type="text" />
            <label>Message *</label>
            <textarea></textarea>
            <input type="submit" value="CONTACT ME" />
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <span>Copyright &copy; 2014 Focal-Built with passion</span>
          <ul>
            {/* <li><image src="https://i.imgur.com/k2br2Gt.png"></li>
        <li><image src="https://i.imgur.com/Sq9fdNw.png"></li>
        <li><image src="https://i.imgur.com/qwSOYp2.png"></li>
        <li><image src="https://i.imgur.com/V4GD4HN.png"></li>
        <li><image src="https://i.imgur.com/vilSTih.png"></li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ContactMe;

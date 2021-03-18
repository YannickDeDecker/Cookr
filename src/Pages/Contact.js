import React from "react";
import "./Contact.css";
import ContactForm from "../Components/ContactForm";
import Mail from "../Images/envelope-solid.svg";
import LinkedIn from "../Images/linkedin-in-brands.svg";
import Instagram from "../Images/instagram-brands.svg";
import Github from "../Images/github-brands.svg";
import Mobile from "../Images/phone-alt-solid.svg";
import Website from "../Images/laptop-solid.svg";
import styled, { keyframes } from "styled-components";
import { fadeInDown, fadeInRightBig } from "react-animations";
import Photo from "../Images/contact-photo.jpg";

const Contact = () => {
  const bounceAnimation = keyframes`${fadeInDown}`;
  const fadeAnimation = keyframes`${fadeInRightBig}`;
  const BouncyDiv = styled.div`
    animation: 2s ${bounceAnimation};
  `;
  const FadeDiv = styled.div`
    animation: 2s ${fadeAnimation};
  `;

  return (
    <div>
      <div className="contact-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <BouncyDiv>
                <h1>bel me, mail me</h1>
              </BouncyDiv>
              <h2>Of laat gewoon een berichtje achter! Your choice.</h2>
              <ul>
                <li className="figure">
                  <img className="image-main" alt="Mail Back" src={Mail}></img>
                  yannickdedecker@msn.com
                </li>
                <li className="figure">
                  <img
                    className="image-main"
                    alt="Mail Back"
                    src={Mobile}
                  ></img>
                  0487 14 09 39
                </li>
                <li className="figure">
                  <img
                    className="image-main"
                    alt="Mail Back"
                    src={Website}
                  ></img>
                 <a href="http://yannickdedecker.be" target="_blank">www.yannickdedecker.be</a>
                </li>
                <li className="figure">
                  <img
                    className="image-main"
                    alt="Mail Back"
                    src={LinkedIn}
                  ></img>
                  <a href="https://www.linkedin.com/in/yannickdedecker/" target="_blank">/yannickdedecker</a>
                </li>
                <li className="figure">
                  <img
                    className="image-main"
                    alt="Mail Back"
                    src={Instagram}
                  ></img>
                  <a href="https://www.instagram.com/iamyannickdd/" target="_blank">/iamyannickdd</a>
                </li>
                <li className="figure">
                  <img
                    className="image-main"
                    alt="Mail Back"
                    src={Github}
                  ></img>
                  <a href="https://github.com/YannickDeDecker" target="_blank">/YannickDeDecker</a>
                </li>
              </ul>
            </div>
            <div className="contact-photo col-lg-6">
            </div>
          </div>
        </div> 
      </div>
      <div className="container">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

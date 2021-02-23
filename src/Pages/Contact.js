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
            <div className="col-md-6">
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
                  Under Construction
                </li>
                <li className="figure">
                  <img
                    className="image-main"
                    alt="Mail Back"
                    src={LinkedIn}
                  ></img>
                  /in/yannickdedecker
                </li>
                <li className="figure">
                  <img
                    className="image-main"
                    alt="Mail Back"
                    src={Instagram}
                  ></img>
                  /iamyannickdd
                </li>
                <li className="figure">
                  <img
                    className="image-main"
                    alt="Mail Back"
                    src={Github}
                  ></img>
                  /YannickDeDecker
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <FadeDiv>
                <img className="contact-img" src={Photo}></img>
              </FadeDiv>
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

import React from "react";
import "./Contact.css";
import Mail from "../Images/envelope-solid.svg";
import MailGreen from "../Images/envelope-solid-green.svg"
import LinkedIn from "../Images/linkedin-in-brands.svg";
import LinkedInGreen from "../Images/linkedin-in-brands-green.svg";
import Instagram from "../Images/instagram-brands.svg";
import InstagramGreen from "../Images/instagram-brands-green.svg";
import Github from "../Images/github-brands.svg";
import GithubGreen from "../Images/github-brands-green.svg";
import Mobile from "../Images/phone-alt-solid.svg";
import MobileGreen from "../Images/phone-alt-solid-green.svg";
import Website from "../Images/laptop-solid.svg";
import WebsiteGreen from "../Images/laptop-solid-green.svg";
import styled, { keyframes } from "styled-components";
import { fadeInDown, fadeInRightBig } from "react-animations";

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
            <BouncyDiv><h1>bel me, mail me</h1></BouncyDiv>
              <h2>Of laat gewoon een berichtje achter! Your choice.</h2>
              <ul>
                <li className="figure">
                  <img className="image-main" alt="Mail Back" src={Mail}></img><img className="image-hover" alt="Mail Front" src={MailGreen}></img>yannickdedecker@msn.com
                </li>
                <li className="figure">
                  <img className="image-main" alt="Mail Back" src={Mobile}></img><img className="image-hover" alt="Mail Front" src={MobileGreen}></img>0487 14 09 39
                </li>
                <li className="figure">
                  <img className="image-main" alt="Mail Back" src={Website}></img><img className="image-hover" alt="Mail Front" src={WebsiteGreen}></img>Under Construction
                </li>
                <li className="figure">
                  <img className="image-main" alt="Mail Back" src={LinkedIn}></img><img className="image-hover" alt="Mail Front" src={LinkedInGreen}></img>/in/yannickdedecker
                </li>
                <li className="figure">
                  <img className="image-main" alt="Mail Back" src={Instagram}></img><img className="image-hover" alt="Mail Front" src={InstagramGreen}></img>/iamyannickdd
                </li>
                <li className="figure">
                  <img className="image-main" alt="Mail Back" src={Github}></img><img className="image-hover" alt="Mail Front" src={GithubGreen}></img>/YannickDeDecker
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <FadeDiv><div className="form-group">
                <label for="">Voornaam:</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                ></input>
                <label for="">Achternaam:</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                ></input>
                <label for="">Bedrijf:</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                ></input>
                <label for="">E-mail:</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                ></input>
                <label for="">GSM:</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                ></input>
                <label for="">Bericht:</label>
                <textarea name="" id=""></textarea>
                <button type="submit">Verzenden</button>
              </div></FadeDiv>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

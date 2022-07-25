/* dev */
import React from "react";
import styled from "styled-components";

/* images */
import logo from "../assets/logo.svg";

const FooterReal = styled.footer`
  background: var(--very-dark-black-blue);
  border-radius: 0 100px 0 0;
  justify-content: center;
  display: flex;
`;
const GridFooter = styled.div`
  place-content: center;
  place-items: center;
  display: grid;
  max-width: 1000px;
  padding: 3rem;

  & h5 {
    font-weight: 500;
    color: var(--white);
    font-family: Ubuntu;
    margin: 2rem 0;
    font-size: 1rem;
  }
  & div {
    width: 100%;
    text-align: center;
  }
  & a {
    color: var(--grayish-blue);
    font-family: Ubuntu;
    display: block;
    padding: 0.4rem;
    font-weight: 400;
  }
  & .logo-footer {
    margin-bottom: 1rem;
  }
  @media (min-width: 1000px) {
    width: 100%;
    grid-template-columns: repeat(4, auto);
    place-content: normal;
    place-items: normal;
    justify-content: space-between;
    & div {
      height: 100%;
    }
    & .logo-footer > img {
      margin-top: 2rem;
    }
    & h5 {
      text-align: left;
    }
    & a {
      text-align: left;
    }
    & a:hover {
      text-decoration: 1px underline;
    }
  }
`;
function Footer() {
  return (
    <FooterReal>
      <GridFooter>
        <div className="logo-footer">
          <img src={logo} alt="logo" />
        </div>
        <div className="text-footer">
          <h5>Product</h5>
          <ul>
            <li>
              <a href="">Overview</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Markeplace</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Integrations</a>
            </li>
          </ul>
        </div>
        <div className="text-two-footer">
          <h5>Company</h5>
          <ul>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Team</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
          </ul>
        </div>
        <div className="text-three-footer">
          <h5>Connect</h5>
          <ul>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Newsletter</a>
            </li>
            <li>
              <a href="">LinkedIn</a>
            </li>
          </ul>
        </div>
      </GridFooter>
    </FooterReal>
  );
}

export default Footer;

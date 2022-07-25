/* dev */
import React, { useState } from "react";
import styled from "styled-components";
/* images */
import logo from "../assets/logo.svg";
import ham from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";

const Navigator = styled.div`
  position: relative;
  max-width: 1000px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const DesktopUl = styled.ul`
  padding: 3rem 1rem;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  & .ham-close {
    display: none;
  }
  & span {
    cursor: pointer;
  }
  @media (min-width: 1000px) {
    & span {
      display: none;
    }
  }
  @media (min-width: 1000px) {
    width: auto;
  }
`;
const MobileUl = styled.ul`
  position: absolute;
  z-index: 500;
  background-color: var(--white);
  width: 90%;
  left: 0;
  right: 0;
  margin: 8.5rem auto;
  padding: 1rem 2rem 2rem 2rem;
  border-radius: 2%;
  box-shadow: 0px 10px 20px 15px rgba(0, 0, 0, 0.15);
  & svg {
    transition: 0.3s;
    margin-left: 5px;
  }
  & .mobile-ul-box-one > li > a {
    font-family: Overpass;
    font-weight: 600;
    color: var(--very-dark-desaturated-blue);
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem;
  }
  & .mobile-ul-box-two > .login-btn > a {
    font-weight: 600;
    color: var(--very-dark-desaturated-blue);
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem;
    font-family: Overpass;
  }
  & .mobile-ul-box-two > .register-btn {
    display: flex;
    justify-content: center;
  }
  & .mobile-ul-box-two > .register-btn > a {
    font-weight: 600;
    color: var(--white);
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem;
    font-family: Overpass;
    background: linear-gradient(
      143deg,
      rgba(255, 143, 112, 1) 0%,
      rgba(255, 136, 110, 1) 8%,
      rgba(255, 130, 108, 1) 15%,
      rgba(255, 61, 83, 1) 100%
    );
    border-radius: 255px;
    max-width: 150px;
  }
`;
const UlSecondDisplace = styled.ul`
  background: var(--displace-bg);
  place-items: center;
  display: grid;
  border-radius: 4%;
  height: 0;
  visibility: hidden;
  transition: 0.3s;
  overflow: hidden;

  & > li > a {
    font-family: Overpass;
    font-weight: 600;
    color: var(--color-displace);
    display: block;
    width: 100%;
    text-align: center;
    padding: 0.5rem;
    transition: 0.3s;
  }
  @media (min-width: 1000px) {
    width: 150px;
    position: absolute;
    z-index: 500;
    background: var(--white);
    box-shadow: 0px 10px 20px 15px rgba(0, 0, 0, 0.15);
    & > li > a {
      font-family: Ubuntu;
      color: var(--very-dark-black-blue);
      font-size: 0.8rem;
      font-weight: 500;
      text-align: left;
      padding: 0.5rem 1.5rem;
    }
    & > li:hover > a {
      font-weight: 700;
    }
    & > li {
      width: 100%;
    }
  }
`;
const UlDisplaceDesktop = styled.ul`
  display: none;
  margin-left: 3rem;
  & .mobile-ul-box-one {
    display: flex;
  }
  & .mobile-ul-box-one > li > a {
    font-size: 0.8rem;
    color: var(--white);
    font-weight: 600;
    font-family: Ubuntu;
    display: block;
    padding: 1rem;
    opacity: 0.8;
  }
  & .mobile-ul-box-one > li > a > svg {
    margin-left: 5px;
    transform: scale(0.8);
    transition: 0.3s;
  }
  @media (min-width: 1000px) {
    display: block;
  }
`;
const UlDisplaceDesktopTwo = styled.ul`
  display: none;

  & .mobile-ul-box-one > li > a {
    font-weight: 600;
    color: var(--very-dark-desaturated-blue);
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem;
  }
  & .mobile-ul-box-two > .login-btn > a {
    font-weight: 600;
    color: var(--white);
    display: block;
    width: 100%;
    text-align: center;
    padding: 0.8rem 2rem;
    font-size: 0.8rem;
    transition: 0.3s;
    font-family: Ubuntu;
  }
  & .mobile-ul-box-two > .login-btn > a:hover {
    opacity: 0.8;
  }
  & .mobile-ul-box-two > .register-btn {
    display: flex;
    justify-content: center;
  }
  & .mobile-ul-box-two > .register-btn > a {
    font-weight: 600;
    display: block;
    width: 100%;
    text-align: center;
    padding: 0.8rem 2rem;
    font-size: 0.8rem;
    font-family: Ubuntu;
    background: var(--white);
    border-radius: 255px;
    color: var(--light-red);
    max-width: 150px;
    transition: 0.3s;
  }
  & .mobile-ul-box-two > .register-btn > a:hover {
    background: var(--hov);
    color: var(--white);
  }
  & .mobile-ul-box-two {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 1000px) {
    display: flex;
  }
`;
function Nav() {
  const [menu, setMenu] = useState(false);
  const [contact, setContact] = useState(false);
  const [product, setProduct] = useState(false);
  const [company, setCompany] = useState(false);
  function logicDisplaceActive(hook, e) {
    hook(true);
    let targetElement = e.target;
    let height = targetElement.nextElementSibling.scrollHeight;
    if (window.innerWidth > 1000) {
      targetElement.style.color = "var(--white)";
      targetElement.style.opacity = "1";
      targetElement.style.textDecoration = " 2px underline";
    } else {
      targetElement.style.color = "var(--color-displace)";
    }
    targetElement.nextElementSibling.style.height = `${height}px`;
    targetElement.nextElementSibling.style.visibility = "visible";
    targetElement.firstElementChild.style.rotate = "180deg";
  }
  function logicDisplaceDeactivate(hook, e) {
    hook(false);
    let targetElement = e.target;
    let height = 0;
    if (window.innerWidth > 1000) {
      targetElement.style.color = "var(--white)";
      targetElement.style.opacity = "0.8";
      targetElement.style.textDecoration = "none";
    } else {
      targetElement.style.color = "var(--very-dark-desaturated-blue)";
    }
    targetElement.nextElementSibling.style.height = `${height}px`;
    targetElement.nextElementSibling.style.visibility = "hidden";
    targetElement.firstElementChild.style.rotate = "0deg";
  }

  const handleClick = (e) => {
    let targetElement = e.target;
    if (!menu) {
      setMenu(true);
      targetElement.style.display = "none";
      targetElement.nextElementSibling.style.display = "block";
    } else {
      targetElement.style.display = "none";
      targetElement.previousElementSibling.style.display = "block";
      setMenu(false);
      setContact(false);
      setCompany(false);
      setProduct(false);
    }
  };
  const handleDisplaceContact = (e) => {
    e.preventDefault();
    if (!contact) logicDisplaceActive(setContact, e);
    else logicDisplaceDeactivate(setContact, e);
  };
  const handleDisplaceProduct = (e) => {
    e.preventDefault();
    if (!product) logicDisplaceActive(setProduct, e);
    else logicDisplaceDeactivate(setProduct, e);
  };
  const handleDisplaceCompany = (e) => {
    e.preventDefault();
    if (!company) logicDisplaceActive(setCompany, e);
    else logicDisplaceDeactivate(setCompany, e);
  };
  return (
    <nav>
      <Navigator>
        <DesktopUl>
          <img src={logo} alt="logo" />
          <span>
            <img src={ham} alt="ham-open" onClick={handleClick} />
            <img
              src={close}
              alt="ham-close"
              className="ham-close"
              onClick={handleClick}
            />
          </span>
          {/* nav desktop */}
          <UlDisplaceDesktop>
            <div className="mobile-ul-box-one">
              <li>
                <a href="" onClick={handleDisplaceProduct}>
                  Product{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7">
                    <path
                      fill="none"
                      stroke="#FFFFFF"
                      stroke-width="2"
                      d="M1 1l4 4 4-4"
                    />
                  </svg>
                </a>
                <UlSecondDisplace>
                  <li className="second-ul-li" style={{ marginTop: "0.5rem" }}>
                    <a href="" className="second-li-a">
                      Overview
                    </a>
                  </li>
                  <li className="second-ul-li">
                    <a href="" className="second-li-a">
                      Pricing
                    </a>
                  </li>
                  <li className="second-ul-li">
                    <a href="" className="second-li-a">
                      Marketplace
                    </a>
                  </li>
                  <li className="second-ul-li">
                    <a href="" className="second-li-a">
                      Features
                    </a>
                  </li>
                  <li
                    className="second-ul-li"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    <a href="" className="second-li-a">
                      Integrations
                    </a>
                  </li>
                </UlSecondDisplace>
              </li>
              <li>
                <a href="" onClick={handleDisplaceCompany}>
                  Company{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7">
                    <path
                      fill="none"
                      stroke="#FFFFFF"
                      stroke-width="2"
                      d="M1 1l4 4 4-4"
                    />
                  </svg>
                </a>
                <UlSecondDisplace>
                  <li className="second-ul-li" style={{ marginTop: "0.5rem" }}>
                    <a href="" className="second-li-a">
                      About
                    </a>
                  </li>
                  <li className="second-ul-li">
                    <a href="" className="second-li-a">
                      Team
                    </a>
                  </li>
                  <li className="second-ul-li">
                    <a href="" className="second-li-a">
                      Blog
                    </a>
                  </li>
                  <li
                    className="second-ul-li"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    <a href="" className="second-li-a">
                      Careers
                    </a>
                  </li>
                </UlSecondDisplace>
              </li>

              <li>
                <a href="" onClick={handleDisplaceContact}>
                  Connect{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7">
                    <path
                      fill="none"
                      stroke="#FFFFFF"
                      stroke-width="2"
                      d="M1 1l4 4 4-4"
                    />
                  </svg>
                </a>
                <UlSecondDisplace>
                  <li className="second-ul-li" style={{ marginTop: "0.5rem" }}>
                    <a href="" className="second-li-a">
                      Contact
                    </a>
                  </li>
                  <li className="second-ul-li">
                    <a href="" className="second-li-a">
                      Newsletter
                    </a>
                  </li>
                  <li
                    className="second-ul-li"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    <a href="" className="second-li-a">
                      LinkdIn
                    </a>
                  </li>
                </UlSecondDisplace>
              </li>
            </div>
          </UlDisplaceDesktop>
        </DesktopUl>
        {menu && (
          <>
            <MobileUl>
              <div className="mobile-ul-box-one">
                <li>
                  <a href="" onClick={handleDisplaceProduct}>
                    Product{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="7"
                    >
                      <path
                        fill="none"
                        stroke="#FF7B86"
                        stroke-width="2"
                        d="M1 1l4 4 4-4"
                      />
                    </svg>
                  </a>
                  <UlSecondDisplace>
                    <li
                      className="second-ul-li"
                      style={{ marginTop: "0.5rem" }}
                    >
                      <a href="" className="second-li-a">
                        Overview
                      </a>
                    </li>
                    <li className="second-ul-li">
                      <a href="" className="second-li-a">
                        Pricing
                      </a>
                    </li>
                    <li className="second-ul-li">
                      <a href="" className="second-li-a">
                        Marketplace
                      </a>
                    </li>
                    <li className="second-ul-li">
                      <a href="" className="second-li-a">
                        Features
                      </a>
                    </li>
                    <li
                      className="second-ul-li"
                      style={{ marginBottom: "0.5rem" }}
                    >
                      <a href="" className="second-li-a">
                        Integrations
                      </a>
                    </li>
                  </UlSecondDisplace>
                </li>
                <li>
                  <a href="" onClick={handleDisplaceCompany}>
                    Company{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="7"
                    >
                      <path
                        fill="none"
                        stroke="#FF7B86"
                        stroke-width="2"
                        d="M1 1l4 4 4-4"
                      />
                    </svg>
                  </a>
                  <UlSecondDisplace>
                    <li
                      className="second-ul-li"
                      style={{ marginTop: "0.5rem" }}
                    >
                      <a href="" className="second-li-a">
                        About
                      </a>
                    </li>
                    <li className="second-ul-li">
                      <a href="" className="second-li-a">
                        Team
                      </a>
                    </li>
                    <li className="second-ul-li">
                      <a href="" className="second-li-a">
                        Blog
                      </a>
                    </li>
                    <li
                      className="second-ul-li"
                      style={{ marginBottom: "0.5rem" }}
                    >
                      <a href="" className="second-li-a">
                        Careers
                      </a>
                    </li>
                  </UlSecondDisplace>
                </li>

                <li>
                  <a href="" onClick={handleDisplaceContact}>
                    Connect{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="7"
                    >
                      <path
                        fill="none"
                        stroke="#FF7B86"
                        stroke-width="2"
                        d="M1 1l4 4 4-4"
                      />
                    </svg>
                  </a>
                  <UlSecondDisplace>
                    <li
                      className="second-ul-li"
                      style={{ marginTop: "0.5rem" }}
                    >
                      <a href="" className="second-li-a">
                        Contact
                      </a>
                    </li>
                    <li className="second-ul-li">
                      <a href="" className="second-li-a">
                        Newsletter
                      </a>
                    </li>
                    <li
                      className="second-ul-li"
                      style={{ marginBottom: "0.5rem" }}
                    >
                      <a href="" className="second-li-a">
                        LinkdIn
                      </a>
                    </li>
                  </UlSecondDisplace>
                </li>
              </div>
              <hr />
              <div className="mobile-ul-box-two">
                <li className="login-btn">
                  <a href="">Login</a>
                </li>
                <li className="register-btn">
                  <a href="">Sign up</a>
                </li>
              </div>
            </MobileUl>
          </>
        )}
        <UlDisplaceDesktopTwo>
          <div className="mobile-ul-box-two">
            <li className="login-btn">
              <a href="">Login</a>
            </li>
            <li className="register-btn">
              <a href="">Sign up</a>
            </li>
          </div>
        </UlDisplaceDesktopTwo>
      </Navigator>
    </nav>
  );
}

export default Nav;

/* dev */
import React from "react";
import styled from "styled-components";

/* images */
import laptopMobil from "../assets/illustration-laptop-mobile.svg";
import laptopDesktop from "../assets/illustration-laptop-desktop.svg";

const GridSectionFr = styled.div`
  display: grid;
  place-content: center;
  place-items: center;
  text-align: center;
  & .grid-one-four {
    width: 100%;
    max-width: 498px;
    overflow: hidden;
  }
  & .grid-one-four > img {
    width: 100%;
  }
  & .grid-one-four > .laptop-mobil {
    width: 100%;
    height: auto;
    transform: scale(1.1);
  }
  & .grid-one-four > .laptop-desktop {
    display: none;
  }
  & .grid-two-four {
    padding: 3rem 2rem 6rem 2rem;
    font-family: Overpass;
    max-width: 410px;
  }
  & .grid-two-four p {
    line-height: 30px;
    color: var(--very-dark-grayish-blue);
    margin-top: 1rem;
  }
  & .grid-two-four h2 {
    font-weight: 600;
    color: var(--very-dark-blue);
    font-size: 1.5rem;
  }
  & .grid-two-four > .grid-two-four-second {
    margin-top: 2rem;
  }
  @media (min-width: 1000px) {
    grid-template-columns: auto auto;
    width: 100%;
    max-width: 1000px;
    margin-top: 100px;
    margin-bottom: 100px;
    & .grid-one-four > .laptop-mobil {
      display: none;
    }
    & .grid-one-four > .laptop-desktop {
      display: block;
      width: 200%;
      position: relative;
      left: -450px;
    }
    & .grid-two-four {
      padding: 3rem 0rem;
      max-width: 600px;
      text-align: left;
    }
    & .grid-one-four {
      overflow: visible;
    }
  }
`;
const SectionFour = styled.section`
  margin-top: 100px;
  @media (min-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
  }
`;
function SectionFr() {
  return (
    <SectionFour>
      <GridSectionFr>
        <div className="grid-one-four">
          <img src={laptopMobil} alt="laptop" className="laptop-mobil" />
          <img src={laptopDesktop} alt="laptop" className="laptop-desktop" />
        </div>
        <div className="grid-two-four">
          <h2>Free, open, simple</h2>
          <p>
            {" "}
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.{" "}
          </p>
          <h2 className="grid-two-four-second">Powerful tooling</h2>
          <p>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </GridSectionFr>
    </SectionFour>
  );
}

export default SectionFr;

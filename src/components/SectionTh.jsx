/* dev */
import React from "react";
import styled from "styled-components";
/* images */
import bgBlue from "../assets/bg-pattern-circles.svg";
import cellphoneMobile from "../assets/illustration-phones.svg";
const SectionThree = styled.section`
  position: relative;
  margin-top: 200px;
  text-align: center;
  border-radius: 0 130px 0 130px;
  background: rgb(44, 45, 62);
  background: linear-gradient(
    143deg,
    rgba(44, 45, 62, 1) 0%,
    rgba(62, 64, 100, 1) 100%
  );
  @media (min-width: 1000px) {
    display: flex;
    margin-top: 50px;
    justify-content: center;
    align-content: center;
    align-items: center;
    & .center-all-th {
      display: flex;
      width: 100%;
      justify-content: center;
    }
    & .center-bg-content {
      max-width: 1500px;
      position: absolute;
      height: 100%;
      width: 100%;
    }
  }
`;
const BgImage = styled.div`
  background-image: url("${bgBlue}");
  width: 100%;
  height: 100%;
  position: absolute;
  background-position: center;
  background-size: cover;
  background-position-y: -300px;
  background-repeat: no-repeat;
  border-radius: 0 130px 0 130px;
  @media (min-width: 1000px) {
    max-width: 618px;
    background-position-y: -280px;
    border-radius: 0;
  }
`;
const GridTh = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & .content-image-section-three {
    width: 100%;
    max-width: 522px;
    position: relative;
  }
  & .content-image-section-three > img {
    width: 100%;
    height: auto;
    margin-top: -170px;
  }
  & .content-text-section-three {
    font-family: Overpass;
    color: var(--white);
    position: relative;
    max-width: 410px;
    padding: 3rem 3rem 5rem 3rem;
  }
  & .content-text-section-three > h2 {
    margin-bottom: 2rem;
    font-size: 2.2rem;
  }
  & .content-text-section-three > p {
    font-size: 1rem;
    line-height: 30px;
  }

  @media (min-width: 1000px) {
    grid-template-columns: auto auto;
    display: grid;
    width: 100%;
    gap: 100px;
    max-width: 1000px;
    & .content-image-section-three {
      max-width: none;
      width: 170%;
      right: 60px;
    }
    & .content-image-section-three > img {
      margin-top: -170px;
      margin-bottom: -200px;
    }
    & .content-text-section-three {
      max-width: none;
      padding: 5rem 0 5rem 5rem;
      text-align: left;
    }
  }
`;
function SectionTh() {
  return (
    <SectionThree>
      <div className="center-bg-content">
        <BgImage></BgImage>
      </div>
      <div className="center-all-th">
        <GridTh>
          <div className="content-image-section-three">
            <img src={cellphoneMobile} alt="cellphone" />
          </div>
          <div className="content-text-section-three">
            <h2> State of the Art Infrastructure</h2>
            <p>
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </GridTh>
      </div>
    </SectionThree>
  );
}

export default SectionTh;

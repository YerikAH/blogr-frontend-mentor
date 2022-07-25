/* dev */
import React from "react";
import styled from "styled-components";

const FirstSection = styled.section`
  height: 60vh;
  padding: 3rem 1rem;
  color: var(--white);
  display: grid;
  place-content: start;
  place-items: center;
  justify-content: center;
  & h1 {
    font-family: Overpass;
    font-size: 2rem;
    text-align: center;
    max-width: 300px;
    width: 100%;
    @media (min-width: 700px) {
      font-size: 3rem;
      max-width: 700px;
    }
  }
  & p {
    font-family: Overpass;
    text-align: center;
    margin: 1rem 0 0 0;
    padding: 0 2rem;
  }
  & .box-btn {
    margin: 3rem 0 0;
    width: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: auto auto;
    gap: 15px;
  }
  & .box-btn button {
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
    font-weight: 700;
    font-family: Ubuntu;
    border-radius: 255px;
  }
  & .box-btn .box-btn-one {
    border: none;
    background: var(--white);
    color: var(--light-red);
    transition: 0.3s;
  }
  & .box-btn .box-btn-one:hover {
    color: var(--white);
    background-color: var(--hov);
  }
  & .box-btn .box-btn-two {
    background: transparent;
    color: var(--white);
    border: 1px solid var(--white);
    transition: 0.3s;
  }
  & .box-btn .box-btn-two:hover {
    color: var(--hov);
    border: none;
    background-color: var(--white);
  }
  @media (min-width: 600px) {
    height: 350px;
  }
`;
function Section() {
  return (
    <FirstSection>
      <h1>A modern publishing platform</h1>
      <p>Grow your audience and build your online brand</p>
      <div className="box-btn">
        <button className="box-btn-one">Start For Free</button>
        <button className="box-btn-two">Learn More</button>
      </div>
    </FirstSection>
  );
}

export default Section;

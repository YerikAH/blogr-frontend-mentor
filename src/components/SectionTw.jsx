/* dev */
import React from "react";
import styled from "styled-components";

/* images */

import editorMobile from "../assets/illustration-editor-mobile.svg";
import editorDesktop from "../assets/illustration-editor-desktop.svg";

const SectionTwo = styled.section`
  margin: 7rem 0 0;
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & .titleSectionTwo {
    text-align: center;
    font-family: Overpass;
    margin-bottom: 3rem;
  }

  & .titleSectionTwo h3 {
    font-weight: 600;
    font-size: 1.8rem;
    color: var(--very-dark-blue);
  }
  & .system-grid-section-two {
    display: grid;
    grid-template-rows: auto auto;
    place-items: center;
    width: 100vw;
    place-content: center;
    @media (min-width: 1000px) {
      grid-template-areas: "sectionTwoTwoGrid sectionTwoOneGrid";
      width: 100%;
      max-width: 1000px;
    }
  }
  & .system-grid-section-two .image-section-two {
    width: 100%;
    max-width: 406px;
    @media (min-width: 1000px) {
      grid-area: sectionTwoOneGrid;
    }
  }
  & .system-grid-section-two .image-section-two .img-mobile-estwo {
    width: 100%;
    height: auto;
  }
  & .system-grid-section-two .image-section-two .img-desktop-estwo {
    display: none;
  }
  @media (min-width: 1000px) {
    & .system-grid-section-two .image-section-two .img-mobile-estwo {
      display: none;
    }
    & .system-grid-section-two .image-section-two .img-desktop-estwo {
      display: block;
      width: 200%;
      position: relative;
      right: -30px;
    }
  }

  & .system-grid-section-two .text-section-two {
    width: 100%;
    max-width: 410px;
    text-align: center;
    font-family: Overpass;
    padding: 3rem 2rem;

    @media (min-width: 1000px) {
      grid-area: sectionTwoTwoGrid;
    }
  }
  & p {
    line-height: 30px;
    color: var(--very-dark-grayish-blue);
    margin-top: 1rem;
  }
  & h2 {
    font-weight: 600;
    color: var(--very-dark-blue);
  }
  & .system-grid-section-two .text-section-two .title-second-section-two {
    margin-top: 2rem;
  }
  @media (min-width: 1000px) {
    & .system-grid-section-two .text-section-two {
      max-width: none;
      text-align: left;
      padding: 5rem 8rem 3rem 0;
    }
  }
  @media (min-width: 1000px) {
    & .titleSectionTwo {
      margin-bottom: -7rem;
    }
    & .titleSectionTwo > h3 {
      font-size: 2.3rem;
    }
  }
`;
function SectionTw() {
  return (
    <SectionTwo>
      <div className="titleSectionTwo">
        <h3>Designed for the future</h3>
      </div>
      <div className="system-grid-section-two">
        <div className="image-section-two">
          <img
            src={editorMobile}
            alt="designed-future"
            className="img-mobile-estwo"
          />
          <img
            src={editorDesktop}
            alt="designed-future"
            className="img-desktop-estwo"
          />
        </div>
        <div className="text-section-two">
          <h2>Introducing an extensible editor</h2>
          <p>
            {" "}
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.{" "}
          </p>
          <h2 className="title-second-section-two">
            Robust content management
          </h2>
          <p>
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </p>
        </div>
      </div>
    </SectionTwo>
  );
}

export default SectionTw;

/* dev */
import styled from "styled-components";
/*files*/
import Main from "./components/Main";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

/*images*/
import bgPrincipal from "./assets/bg-pattern-intro-mobile.svg";
import bgPrincipalDesktop from "./assets/bg-pattern-intro-desktop.svg";

function App() {
  const BgAbsolute = styled.div`
    position: absolute;
    width: 100vw;
    height: 80vh;
    @media (min-width: 600px) {
      height: 500px;
    }
  `;
  const BgColor = styled.div`
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 80vh;
    background-color: var(--very-light-red);
    background: linear-gradient(
      130deg,
      rgb(255, 143, 112) 0%,
      rgb(255, 61, 83) 100%
    );
    border-radius: 0 0 0 100px;
    @media (min-width: 600px) {
      height: 500px;
    }
  `;
  const BgSection = styled.div`
    background-image: url("${bgPrincipal}");
    width: 100vw;
    height: 80vh;
    background-size: cover;
    transform: scale(2.3);
    position: absolute;
    background-position: -7vw 7vh;
    @media (min-width: 600px) {
      background-image: url("${bgPrincipalDesktop}");
      background-position: 195px;
      height: 500px;
    }
  `;
  return (
    <>
      <BgAbsolute>
        <BgColor>
          <BgSection></BgSection>
        </BgColor>
      </BgAbsolute>
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;

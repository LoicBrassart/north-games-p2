import styled from "styled-components";

const SApp = styled.div`
  font-family: "Montserrat", sans-serif;
  background: linear-gradient(#146cbd, #0b2687);
  color: white;
  width: 100vw;
  min-height: 100vh;

  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr 7fr;
  grid-template-areas: "logo header" "nav main";

  #logo {
    grid-area: logo;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  main {
    grid-area: main;
  }

  a,
  a:visited {
    color: white;
    text-decoration: none;
  }
`;

export { SApp };

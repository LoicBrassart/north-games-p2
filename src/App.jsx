import styled from "styled-components";
import { Switch, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import { Home } from "./pages";

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

function App() {
  return (
    <SApp>
      <Link to="/" id="logo">
        <img src="/assets/img/logo.svg" alt="logo" />
      </Link>
      <Header />
      <Nav />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    </SApp>
  );
}

export default App;

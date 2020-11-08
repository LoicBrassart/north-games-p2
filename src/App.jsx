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

  // Layout Grid
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr 7fr;
  grid-template-areas: "logo header" "nav main";

  // Children
  img {
    // Layout Grid
    grid-area: logo;
  }

  main {
    // Layout Grid
    grid-area: main;
  }
`;

function App() {
  return (
    <SApp>
      <Link to="/">
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

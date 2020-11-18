import { Switch, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import { Home } from "./pages";

import { SApp } from "./style";

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

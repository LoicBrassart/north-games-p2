import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SNav = styled.nav`
  grid-area: nav;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

const SNavLink = styled(NavLink)`
  display: flex;

  margin: 1.3em;
  opacity: 0.5;

  img {
    height: 1.5em;
    width: 1.5em;
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;

    text-transform: uppercase;
    padding: 0.3em;
    opacity: 0;
  }

  &:hover {
    opacity: 1;

    p {
      opacity: 1;
    }
  }
`;

export { SNav, SNavLink };

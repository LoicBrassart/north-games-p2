import styled from "styled-components";

const SNav = styled.nav`
  // Layout Grid
  grid-area: nav;

  // Flex
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  // Children
  li {
    display: flex;
    img {
      height: 1.5em;
      width: 1.5em;
    }
    p {
      // Flex
      display: flex;
      justify-content: center;
      align-items: center;

      text-transform: uppercase;
    }
  }
`;

export default function Nav() {
  return (
    <SNav>
      <ul>
        <li>
          <img src="/assets/img/icons/home.svg" alt="Home" />
          <p>Home</p>
        </li>
        <li>
          {" "}
          <img src="/assets/img/icons/crowdfunding.svg" alt="Profile" />
          <p>Profile</p>
        </li>
        <li>Messages</li>
        <li>News</li>
        <li>Events</li>
        <li>Games</li>
        <li>Groups</li>
        <li>Games</li>
        <li>Market Place</li>
      </ul>
      <ul>
        <li>Settings</li>
        <li>FAQ</li>
      </ul>
    </SNav>
  );
}

import { SNav, SNavLink } from "./style";

export default function Nav() {
  return (
    <SNav>
      <ul>
        <li>
          <SNavLink to="/" activeClassName="active">
            <img src="/assets/img/icons/home.svg" alt="Home" />
            <p>Home</p>
          </SNavLink>
        </li>
        <li>
          <SNavLink to="/" activeClassName="active">
            <img src="/assets/img/icons/user.svg" alt="Profile" />
            <p>Profile</p>
          </SNavLink>
        </li>
        <li>
          {" "}
          <SNavLink to="/" activeClassName="active">
            <img src="/assets/img/icons/messages.svg" alt="Profile" />
            <p>Messages</p>
          </SNavLink>
        </li>
        <li>
          <SNavLink to="/" activeClassName="active">
            <img src="/assets/img/icons/news.svg" alt="Profile" />
            <p>News</p>
          </SNavLink>
        </li>
        <li>
          <SNavLink to="/" activeClassName="active">
            <img src="/assets/img/icons/events.svg" alt="Profile" />
            <p>Events</p>
          </SNavLink>
        </li>
        <li>
          <SNavLink to="/" activeClassName="active">
            <img src="/assets/img/icons/parties.svg" alt="Profile" />
            <p>Parties</p>
          </SNavLink>
        </li>
        <li>
          <SNavLink to="/" activeClassName="active">
            <img src="/assets/img/icons/groups.svg" alt="Profile" />
            <p>Groups</p>
          </SNavLink>
        </li>
        <li>
          <SNavLink to="/" activeClassName="active">
            <img src="/assets/img/icons/library.svg" alt="Profile" />
            <p>Library</p>
          </SNavLink>
        </li>
        <li>
          <SNavLink to="/" activeClassName="active">
            <img src="/assets/img/icons/market.svg" alt="Profile" />
            <p>Market Place</p>
          </SNavLink>
        </li>
      </ul>
      <ul>
        <li>
          <SNavLink to="/" activeClassName="active">
            <img src="/assets/img/icons/settings.svg" alt="Profile" />
            <p>Settings</p>
          </SNavLink>
        </li>
        <li>
          <SNavLink to="/" activeClassName="active">
            <img src="/assets/img/icons/FAQ.svg" alt="Profile" />
            <p>FAQ</p>
          </SNavLink>
        </li>
      </ul>
    </SNav>
  );
}

import styled from "styled-components";

const SHeader = styled.header`
  grid-area: header;

  display: flex;
  justify-content: space-between;

  // Children
  div {
    display: flex;
    align-items: center;
  }

  input {
    height: 1.5em;
  }
`;

export default function Header() {
  return (
    <SHeader>
      <div>
        <input default="Search" />
      </div>
      <div>
        <div>Avatar</div>
      </div>
    </SHeader>
  );
}

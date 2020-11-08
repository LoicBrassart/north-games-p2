import styled from "styled-components";

const SHeader = styled.header`
  // Layout Grid
  grid-area: header;

  // Flex
  display: flex;
  justify-content: space-between;

  // Children
  div {
    // Flex
    display: flex;
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

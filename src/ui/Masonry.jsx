import styled from "styled-components";
import { GridLayout } from "@egjs/react-infinitegrid";

const Masonry = styled(GridLayout)``;

const Stone = styled.div`
  width: 200px;
  max-height: 300px;
  overflow: hidden;

  > * {
    width: 90%;
  }
`;

export { Masonry, Stone };

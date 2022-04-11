import styled from "styled-components";
import { SmallText } from "@styles";

export const NewsBar = styled.div`
  background-color: var(--theme);
  padding: 0.4rem 0;
  width: 100%;
  margin-bottom: 1rem;
  z-index: 996;
`;
export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;
export const Description = styled(SmallText)`
  color: var(--alwayswhite);
  margin: 0;
  justify-content: center;

  a {
    color: inherit;
    text-decoration: underline;

    :hover {
      text-decoration: none;
    }
  }
`;
export const CloseButton = styled.button`
  display: flex;
  color: var(--alwayswhite);

  svg {
    width: 16px;
  }
`;

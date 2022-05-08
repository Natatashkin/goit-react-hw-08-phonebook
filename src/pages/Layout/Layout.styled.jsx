import { styled } from '@mui/material/styles';

const MainContainer = styled('main')`
  display: flex;
  background-color: ${({ theme: { palette } }) => palette.background.default};
`;

export default MainContainer;

export const LayoutWrapper = styled('div')`
  display: flex;
  flex-direction: column;
`;

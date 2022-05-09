import { styled } from '@mui/material/styles';

const SectionStyled = styled('section')`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding: ${({ theme: { spacing } }) => spacing(0, 6)};
`;

const Title = styled('h2')`
  margin-bottom: ${({ theme: { spacing } }) => spacing(4)};
  color: ${({ theme: { palette } }) => palette.text.primary};
`;

export { SectionStyled, Title };

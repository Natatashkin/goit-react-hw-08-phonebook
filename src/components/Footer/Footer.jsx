import Container from '@mui/material/Container';
import { FooterText, StyledFooter } from './Footer.styled';

export const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth={'sm'}>
        <FooterText>
          Developed by
          <a
            href="https://linkedin.com/in/nataliia-semeshenko"
            target="_blank"
            rel="noreferrer"
          >
            Nataliia Semeshenko
          </a>
        </FooterText>
      </Container>
    </StyledFooter>
  );
};

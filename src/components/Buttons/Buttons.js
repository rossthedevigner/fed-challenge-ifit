import styled from 'styled-components/macro';

export const ButtonCTA = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 0.063rem 0.125rem ${(props) => props.theme.colors.shadowGrey};
  border-radius: 0.25rem;
  padding: 0.625rem 1rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.031rem;
  line-height: 1rem;
  font-size: 0.875rem;
  max-height: 2.25rem;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0.125rem 0.125rem 0 ${(props) => props.theme.colors.shadowGrey};
    background-color: ${(props) => props.theme.colors.darkBlue};
  }

  &:focus {
    outline: none;
  }
`;

export const ButtonSignUp = styled(ButtonCTA)`
  background-color: ${(props) => props.theme.colors.royalBlue};
  color: ${(props) => props.theme.colors.white};
`;

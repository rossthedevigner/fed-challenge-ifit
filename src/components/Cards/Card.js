import styled from 'styled-components/macro';

export const Card = styled.div`
  min-width: 18rem;
  max-width: 25rem;
  width: 100%;
  height: 17.5rem;
  box-shadow: 0 0.0625rem 0.125rem ${(props) => props.theme.colors.shadowGrey};
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme.colors.white};
  transition: 0.28s ease-in;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0.438rem 0.75rem ${(props) => props.theme.colors.shadowGrey};
    transition: 0.28s ease-in-out;
    transform: translateY(-0.0625rem);
  }
`;

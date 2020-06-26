import React from 'react';
import styled from 'styled-components/macro';

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 27.5rem;
  height: 11.5rem;
  box-shadow: 0 0.063rem 0.125rem ${(props) => props.theme.colors.shadowGrey};
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme.colors.white};
  align-items: center;
  justify-content: center;
  margin: 0 0.75rem;
`;

const Review = styled.span`
  width: 22.5rem;
  height: 2.813rem;
  opacity: 0.8;
  color: ${(props) => props.theme.colors.fullGrey};
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.019rem;
  line-height: 1.5;
  text-align: center;
`;

const ReviewLogo = styled.img`
  max-width: 100%;
  margin-bottom: 1rem;
`;

const ReviewCard = ({ review: { quote, logo } }) => {
  return (
    <CardStyled>
      <ReviewLogo src={logo} />
      <Review>{quote}</Review>
    </CardStyled>
  );
};

export { ReviewCard };

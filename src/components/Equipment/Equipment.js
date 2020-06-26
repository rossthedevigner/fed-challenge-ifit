import React, { useRef } from 'react';
import styled from 'styled-components/macro';

import { equipmentData } from '../../data';
import { Card } from '../Cards/Card';

import { useOnScreen } from '../../helpers/hooks/useOnScreen';

const EquipmentWrapper = styled.section`
  width: 100%;
  min-height: 25rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3.125rem 0;
  padding: 0 1.25rem;
`;

const EquipmentContainer = styled.div`
  width: 100%;
  justify-content: center;
  max-width: 90rem;
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(20.625rem, 1fr));

  @media ${(props) => props.theme.breakpoints.medium} {
    grid-template-columns: repeat(2, 20.625rem);
  }

  @media ${(props) => props.theme.breakpoints.xxlarge} {
    grid-template-columns: repeat(auto-fill, 20.625rem);
  }

  gap: 1.5rem;
  margin: 0 auto;
  width: 100%;
  justify-items: center;
  opacity: 0;
  transform: translateY(1.875rem);
  transition: opacity 0.28s ease-in-out, transform 0.8s ease-in-out;

  &.in-view {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.2s;
  }
`;

const EquipmentImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const EquipmentCard = styled(Card)`
  width: 20.625rem;
  height: 20.625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h2`
  opacity: 0.8;
  color: ${(props) => props.theme.colors.charcoal};
  letter-spacing: 0.3;
  text-align: center;
  margin: 0;
  padding: 0 0 1.5rem;
`;

const EquipmentText = styled.h4`
  opacity: 0.8;
  color: ${(props) => props.theme.colors.fullGrey};
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.019;
  line-height: 1.17;
  margin: 0.625rem 0 0;
`;

const Equipment = () => {
  const inViewElement = useRef(null);
  const { inView } = useOnScreen(inViewElement, { threshold: '0.10' }, false);

  return (
    <EquipmentWrapper>
      <Header>Interested in our exciting iFit-enabled equipment?</Header>
      <EquipmentContainer ref={inViewElement} className={`${inView ? 'in-view' : ''}`}>
        {equipmentData.map(({ title, image }) => {
          return (
            <EquipmentCard key={title}>
              <EquipmentImage src={image} alt={title} />
              <EquipmentText>{title}</EquipmentText>
            </EquipmentCard>
          );
        })}
      </EquipmentContainer>
    </EquipmentWrapper>
  );
};

export { Equipment };

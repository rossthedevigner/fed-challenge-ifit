import React, { useRef } from 'react';
import styled from 'styled-components/macro';

import { WorkoutSeriesCard } from '../Cards/WorkoutSeriesCard';
import { workoutLibraryData } from '../../data';
import { useOnScreen } from '../../helpers/hooks/useOnScreen';

const WorkoutLibraryWrapper = styled.section`
  background: ${(props) => props.theme.colors.white};
  display: flex;
  width: 100%;
  min-height: 25rem;
  background: ${(props) => props.theme.colors.white};
  align-items: center;
  justify-content: center;
  margin: 3.125rem 0 0.625rem;
  padding: 0 2.5rem;
  flex-direction: column;
`;

const WorkoutLibraryContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 18rem);
  gap: 1.5rem;
  grid-column: span 12;
  justify-content: center;
  max-width: 76.5625rem;
  opacity: 0;
  transform: translateY(1.875rem);
  transition: opacity 0.28s ease-in-out, transform 0.8s ease-in-out;

  &.in-view {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.2s;
  }
`;

const WorkoutLibrary = () => {
  const inViewElement = useRef(null);
  const { inView } = useOnScreen(inViewElement, { threshold: '0.10' }, false);

  return (
    <WorkoutLibraryWrapper>
      <WorkoutLibraryContainer ref={inViewElement} className={`${inView ? 'in-view' : ''}`}>
        {workoutLibraryData.map((workout) => {
          return <WorkoutSeriesCard key={workout.title} {...workout} />;
        })}
      </WorkoutLibraryContainer>
    </WorkoutLibraryWrapper>
  );
};

export { WorkoutLibrary };

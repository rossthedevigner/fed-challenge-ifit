import React from 'react';
import styled from 'styled-components/macro';

import { Card } from './Card';
import Icon from '../Icons/Icon';

const CardImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 10.25rem;
  overflow: hidden;
`;

const SeriesOverlay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 100%;
  right: 0;
  background-color: ${(props) => props.theme.colors.overlayBlack};
  color: ${(props) => props.theme.colors.white};

  span {
    margin-bottom: 0.5rem;
  }
`;

const SeriesImage = styled.img`
  min-width: 100%;
`;

const SeriesLength = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.75rem;
  font-weight: 400;
  letter-spacing: 0.031;
  line-height: 1.875rem;
`;

const SeriesLabel = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.019rem;
  line-height: 0.75rem;
  text-transform: uppercase;
`;

const CardMeta = styled.div`
  padding: 1rem;
  width: 100%;
  height: 7.25rem;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.p`
  width: 13.75rem;
  height: 2.25rem;
  color: ${(props) => props.theme.colors.fullGrey};
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.019rem;
  line-height: 1.125;
`;

const AvatarImage = styled.img`
  width: 1.75rem;
  height: 1.75rem;
`;

const SeriesDetails = styled.div`
  letter-spacing: 0.3;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`;

const Subtext = styled.span`
  display: inline-block;
  margin: 0 0.5rem 0 0.25rem;
  color: ${(props) => props.theme.colors.fullGrey};
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.019rem;
  line-height: 0.75rem;
  text-transform: uppercase;
`;

const SeriesLink = styled.p`
  margin-top: 0.75rem;
  text-transform: uppercase;
  margin-top: auto;
  color: ${(props) => props.theme.colors.royalBlue};
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.5;
  line-height: 1.14;
  opacity: 0;

  .workoutCard :hover & {
    opacity: 1;
  }
`;

const WorkoutSeriesCard = ({ avatar, image, distance = false, time = false, seriesLength, title }) => {
  return (
    <Card className="workoutCard">
      <CardImageContainer>
        {seriesLength && (
          <SeriesOverlay>
            <SeriesLength>{seriesLength}</SeriesLength>
            <SeriesLabel>Workouts</SeriesLabel>
            <Icon name="playlist" />
          </SeriesOverlay>
        )}
        <SeriesImage src={image} />
      </CardImageContainer>
      <CardMeta>
        <CardTitle>
          <Title>{title}</Title>
          <AvatarImage src={avatar} />
        </CardTitle>
        {distance && time && (
          <SeriesDetails>
            <Icon name="stopwatch" />
            <Subtext>{time}</Subtext>
            <Icon name="distance" />
            <Subtext>{distance}</Subtext>
          </SeriesDetails>
        )}
        <SeriesLink>View Details</SeriesLink>
      </CardMeta>
    </Card>
  );
};

export { WorkoutSeriesCard };

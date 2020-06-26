import React from 'react';
import styled from 'styled-components/macro';

import { ReviewCard } from '../Cards/ReviewCard';
import { reviewData } from '../../data';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import rightArrow from '../../assets/icons/right-nav.png';
import leftArrow from '../../assets/icons/left-nav.png';

const SliderWrapper = styled.section`
  background-color: ${(props) => props.theme.colors.offWhite};
  width: 100%;
  height: 14.5rem;
  border-radius: 0.125rem;
  overflow: hidden;
`;

const Slider = styled.div`
  display: flex;
  position: relative;
  height: 14.5rem;
  align-items: center;
  justify-content: center;
  max-width: ${(props) => props.theme.breakpoints.xxlarge};
  overflow: hidden;
`;

const NavButton = styled.div`
  z-index: 2;
  outline: none;
  cursor: pointer;
  top: 68%;
  width: 3.75rem;
  height: 3.75rem;
  position: absolute;
  @media ${(props) => props.theme.breakpoints.small} {
    top: 40%;
  }
`;

const RightNavButton = styled(NavButton)`
  right: 0.125rem;
  background: transparent url(${rightArrow}) no-repeat center center;
`;

const LeftNavButton = styled(NavButton)`
  left: 0.125rem;
  background: transparent url(${leftArrow}) no-repeat center center;
`;

const Slides = styled.div`
  position: relative;
  display: flex;
`;

const SliderReview = () => {
  /**
   * NOTE: a `findDOMNode is deprecated in StrictMode` warning is thrown by
   * the <Carousel /> component in dev mode but does not adversely affect the functionality
   */

  return (
    <SliderWrapper>
      <Slides>
        <Carousel
          centered
          infinite
          arrows
          slidesPerPage={3}
          slidesPerScroll={1}
          itemWidth={440}
          addArrowClickHandler
          arrowLeft={<LeftNavButton />}
          arrowRight={<RightNavButton />}>
          {reviewData.map((review) => {
            return (
              <Slider key={review.source}>
                <ReviewCard className="slide" review={review} />
              </Slider>
            );
          })}
        </Carousel>
      </Slides>
    </SliderWrapper>
  );
};

export { SliderReview };

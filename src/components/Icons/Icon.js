import React from 'react';
import styled from 'styled-components/macro';

// workout series icons
import { ReactComponent as StopWatchIcon } from '../../assets/icons/svg/stopwatch-icon.svg';
import { ReactComponent as DistanceIcon } from '../../assets/icons/svg/distance-icon.svg';
import { ReactComponent as PlaylistIcon } from '../../assets/icons/svg/playlist-icon.svg';

// social footer icons
import { ReactComponent as YoutubeIcon } from '../../assets/icons/svg/youtube.svg';
import { ReactComponent as PinterestIcon } from '../../assets/icons/svg/pinterest.svg';
import { ReactComponent as FacebookIcon } from '../../assets/icons/svg/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icons/svg/twitter.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/svg/instagram.svg';

import { ReactComponent as DropdownArrow } from '../../assets/icons/svg/dropdown-arrow.svg';
import { ReactComponent as IFitCoachIcon } from '../../assets/icons/svg/ifit-coach-logo.svg';

const GetIcon = ({ name }) => {
  switch (name) {
    case 'stopwatch':
      return <StopWatchIcon />;
    case 'distance':
      return <DistanceIcon />;
    case 'playlist':
      return <PlaylistIcon />;
    case 'youtube':
      return <YoutubeIcon />;
    case 'pinterest':
      return <PinterestIcon />;
    case 'facebook':
      return <FacebookIcon />;
    case 'twitter':
      return <TwitterIcon />;
    case 'instagram':
      return <InstagramIcon />;
    case 'dropdown':
      return <DropdownArrow />;
    case 'ifitcoach':
      return <IFitCoachIcon />;
    default:
      return null;
  }
};

const IconSpan = styled.span`
  margin: -0.25rem 0 0;
`;

const Icon = ({ name, className }) => {
  return (
    <IconSpan className={className}>
      <GetIcon name={name} />
    </IconSpan>
  );
};

export default Icon;

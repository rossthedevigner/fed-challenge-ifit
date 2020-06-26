// avatars
import alex from '../assets/images/avatars/alex-silver-fagan.png';
import eden from '../assets/images/avatars/eden-hannah-avatar.png';
import francia from '../assets/images/avatars/francia-susan-avatar.png';
import gideon from '../assets/images/avatars/gideon-akande-avatar.png';
import gregory from '../assets/images/avatars/gregory-alex-avatar.png';
import desmond from '../assets/images/avatars/nanchengwa-desmond-avatar.png';
import sanita from '../assets/images/avatars/puspure-sanita-avatar.png';
import mary from '../assets/images/avatars/whipple-mary-avatar.png';

// workout series covers
import bostonSeries from '../assets/images/marketing/charles-river-boston.png';
import fullbodySeries from '../assets/images/marketing/full-body-hiit-series.png';
import irelandSeries from '../assets/images/marketing/ireland-pyramid.jpg';
import kafueSeries from '../assets/images/marketing/kafue-river-series.png';
import performanceSeries from '../assets/images/marketing/performance-series.png';
import shredSeries from '../assets/images/marketing/shred-and-burn-series.png';
import slowSeries from '../assets/images/marketing/slow-pulls-fast-series.png';
import toneSeries from '../assets/images/marketing/twenty-minutes-tones.png';

// equipment
import bike from '../assets/images/equipment/bike-person.png';
import elliptical from '../assets/images/equipment/elliptical-person.png';
import pulley from '../assets/images/equipment/pulley-person.png';
import treadmill from '../assets/images/equipment/treadmill-person.png';

// logos
import mashableLogo from '../assets/images/logos/mashable-logo.svg';
import wiredLogo from '../assets/images/logos/wired-logo.svg';
import gearjunkieLogo from '../assets/images/logos/gear-junkie-logo.svg';

export const languages = ['English', 'Deutsch', 'Nederlands', 'Español', 'Italiano', 'Norsk'];

export const mainNavigationLinks = [
  {
    title: 'Exercise',
    link: '/'
  },
  {
    title: 'Nutrition',
    link: '/'
  },
  {
    title: 'Activity',
    link: '/'
  },
  {
    title: 'Sleep',
    link: '/'
  }
];

export const reviewData = [
  {
    source: 'gear-junkie',
    quote: '“You focus on putting in the work, and the technology handles the rest.”',
    logo: gearjunkieLogo
  },
  {
    source: 'wired',
    quote: '“Literally transports you from home to wherever you choose to run.”',
    logo: wiredLogo
  },
  {
    source: 'mashable',
    quote: '“Breathes new life into a tired, old running routine.”',
    logo: mashableLogo
  }
];

export const equipmentData = [
  {
    title: 'Treadmills',
    image: treadmill
  },
  {
    title: 'Bikes',
    image: bike
  },
  {
    title: 'Ellipticals',
    image: elliptical
  },
  {
    title: 'Strength',
    image: pulley
  }
];

export const workoutLibraryData = [
  {
    title: 'Lake Inniscarra, Ireland—Pyramid',
    image: irelandSeries,
    time: '30:53',
    distance: '6,248 M',
    seriesLength: null,
    avatar: sanita
  },
  {
    title: 'Performance Series',
    image: performanceSeries,
    seriesLength: 9,
    avatar: francia
  },
  {
    title: 'Slow Pulls and Fast Intervals',
    image: slowSeries,
    time: '44:13',
    distance: '9,948 M',
    seriesLength: null,
    avatar: alex
  },
  {
    title: '20 Minutes to Toned',
    image: toneSeries,
    seriesLength: 12,
    avatar: gregory
  },
  {
    title: 'Charles Race, Boston, Massachusetts',
    image: bostonSeries,
    time: '36:22',
    distance: '8,648 M',
    seriesLength: null,
    avatar: mary
  },
  {
    title: 'Full-Body HIIT Series',
    image: fullbodySeries,
    seriesLength: 12,
    avatar: eden
  },
  {
    title: 'Kafue River, Zambia—Power Stroke Pyramid',
    image: kafueSeries,
    time: '22:22',
    distance: '4,660 M',
    seriesLength: null,
    avatar: desmond
  },
  {
    title: 'Shred & Burn Series',
    image: shredSeries,
    seriesLength: 16,
    avatar: gideon
  }
];

export const footerData = {
  navLinks: {
    company: {
      title: 'Company',
      sublinks: [
        {
          title: 'About'
        },
        {
          title: 'Contact Us'
        },
        {
          title: 'Careers'
        }
      ]
    },
    account: {
      title: 'Account',
      sublinks: [
        {
          title: 'Log In'
        },
        {
          title: 'Create Account'
        }
      ]
    },
    support: {
      title: 'Support',
      sublinks: [
        {
          title: 'Help Center'
        },
        {
          title: 'Accessibility'
        }
      ]
    }
  },
  socialLinks: [
    { title: 'youtube', link: '/' },
    { title: 'pinterest', link: '/' },
    { title: 'facebook', link: '/' },
    { title: 'twitter', link: '/' },
    { title: 'instagram', link: '/' }
  ],
  legalLinks: [
    { title: '\u00A9 iFit.com. All Rights Reserved.' },
    { title: 'Privacy Policy', link: '/' },
    { title: 'Terms of Use', link: '/' }
  ]
};

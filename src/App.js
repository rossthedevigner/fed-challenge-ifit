import React, { useState } from 'react';

import { Theme } from './styles/Theme';
import { AppWrapper } from './components/Wrappers/AppWrapper';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { SliderReview } from './components/SliderReview/SliderReview';
import { WorkoutLibrary } from './components/WorkoutLibrary/WorkoutLibrary';
import { Equipment } from './components/Equipment/Equipment';
import { Footer } from './components/Footer/Footer';
import { AppProvider } from './context/AppProvider';

const App = () => {
  const [isNavSticky, setIsNavSticky] = useState(true);

  return (
    <Theme>
      <AppProvider>
        <Header isNavSticky={isNavSticky} />
        <AppWrapper>
          <Hero setIsNavSticky={setIsNavSticky} />
          <SliderReview />
          <WorkoutLibrary />
          <Equipment />
          <Footer />
        </AppWrapper>
      </AppProvider>
    </Theme>
  );
};

export { App };

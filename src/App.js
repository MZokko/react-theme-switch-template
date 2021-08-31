import React from 'react';
import ContentContainer from './components/UI/ContentContainer';
import Title from './components/UI/Title';
import TopBar from './components/UI/TopBar';
import { ThemeStore } from './contexts/ThemeStore';
import Theme from './Theme';

const App = () => {
  return (
    <>
      <ThemeStore>
        <Theme>
          <TopBar />
          <ContentContainer>
            <Title>THEME SWITCHING WITH STYLED-COMPONENTS</Title>
          </ContentContainer>
        </Theme>
      </ThemeStore>
    </>
  );
};

export default App;

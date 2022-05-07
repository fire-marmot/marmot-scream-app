import React from 'react';

import PersonalCard from '../sections/aboutPage/personalCard';
import { 
  IanStory,
  BiaocaStory,
  ClarissaStory,
  ChrisStory } from '../sections/aboutPage/personalTexts';


const AboutPage = () => {

  return (
    <>
      <h1>About Page</h1>
      <PersonalCard 
        text={IanStory}
        cardHeader={'Custom Header'}
        />
    </>
  )
}

export default AboutPage;

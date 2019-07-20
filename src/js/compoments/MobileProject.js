import React from 'react';
import SlideDisplay from './SlideDisplay';

const MobileProject = () => {
  const projects = [
    {
      title: 'Taylor Songs Mobile App',
      subtitle: '| React | React-Native | Android Studio | ',
      text:
        'This mobile app is for practice react native that implement by android studio, etc.',
      image: require('../../img/TaylorSongsApp.jpg'),
      githubUrl: 'https://github.com/ping58972/Taylor-songs-mobile-app'
    }
  ];

  return <SlideDisplay projectArray={projects} bgColor='#745360' />;
};

export default MobileProject;

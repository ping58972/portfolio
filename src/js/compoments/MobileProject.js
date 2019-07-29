import React from 'react';
import SlideDisplay from './SlideDisplay';

const MobileProject = () => {
  const projects = [
    {
      title: 'Manager Mobile App',
      subtitle: '| Google Firebase | React | Redux | React-Native |',
      text:
        'This mobile app is for practice react native, react reduxe, and google firebase that implement by android studio, etc.',
      image: require('../../img/manager_edit.png'),
      githubUrl: 'https://github.com/ping58972/manager-mobile-app'
    },
    {
      title: 'Taylor Songs Mobile App',
      subtitle: '| React | React-Native | Android Studio | ',
      text:
        'This mobile app is for practice react native that implement by android studio, etc.',
      image: require('../../img/TaylorSongsApp.jpg'),
      githubUrl: 'https://github.com/ping58972/Taylor-songs-mobile-app'
    },
    {
      title: 'Tech Stack Mobile App',
      subtitle: '| React | Redux | React-Native | Android Studio | ',
      text:
        'This mobile app is for practice react native that implement by android studio, etc.',
      image: require('../../img/tech_stack.png'),
      githubUrl: 'https://github.com/ping58972/tech-stack-mobile-app'
    }
  ];

  return <SlideDisplay projectArray={projects} bgColor='#745360' />;
};

export default MobileProject;

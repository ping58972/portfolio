import React from 'react';
import SlideDisplay from './SlideDisplay';

const MobileProject = () => {
  const projects = [
    {
      title: 'Coming Soon',
      text: 'Coming Soon'
    }
  ];

  return <SlideDisplay projectArray={projects} bgColor='#745360' />;
};

export default MobileProject;

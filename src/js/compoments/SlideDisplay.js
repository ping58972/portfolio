import React from 'react';
import Swiper from 'react-id-swiper';
import ProjectCard from './ProjectCard';

const SlideDisplay = props => {
  return (
    <div className='swiper-container'>
      <div className='swiper-wrapper'>
        <Swiper {...props.params}>
          {props.projectArray.map(project => {
            return (
              <div className='swiper-slide'>
                <ProjectCard
                  title={project.title}
                  subtitle={project.subtitle}
                  text={project.text}
                  image={project.image}
                  bgColor={props.bgColor}
                  githubUrl={project.githubUrl}
                  projectUrl={project.projectUrl}
                />
              </div>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default SlideDisplay;

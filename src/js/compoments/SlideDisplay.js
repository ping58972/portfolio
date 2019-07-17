import React from 'react';
import Swiper from 'react-id-swiper';
import ProjectCard from './ProjectCard';
import { params } from './swiperParams';

const SlideDisplay = props => {
  const param = props.params ? props.params : params;
  return (
    <div className='swiper-container'>
      <div className='swiper-wrapper'>
        <Swiper {...param}>
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
                  serverUrl={project.serverUrl}
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

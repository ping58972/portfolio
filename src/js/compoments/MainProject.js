import React from 'react';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/scss/swiper.scss';
import ProjectCard from './SubProject';

const MianProject = () => {
  const params = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,
    autoplay: {
      delay: 3000
      // disableOnInteraction: false,
    },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function(index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    }
  };

  return (
    <div className='swiper-container'>
      <div className='swiper-wrapper'>
        <Swiper {...params}>
          <div className='swiper-slide'>
            <ProjectCard />
          </div>
          <div className='swiper-slide'>
            <ProjectCard />
          </div>
          <div className='swiper-slide'>
            <ProjectCard />
          </div>
          <div className='swiper-slide'>
            <ProjectCard />
          </div>
          <div className='swiper-slide'>
            <ProjectCard />
          </div>
          <div className='swiper-slide'>
            <ProjectCard />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default MianProject;

import React from 'react';
import Swiper from 'react-id-swiper';
import ProjectCard from './SubProject';

const MianProject = () => {
  const params = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 5,
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
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      2510: {
        slidesPerView: 6,
        spaceBetween: 60
      },
      1960: {
        slidesPerView: 5,
        spaceBetween: 40
      },
      1636: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 5
      },
      440: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  };

  return (
    <div className='swiper-container'>
      <div className='swiper-wrapper'>
        <Swiper {...params}>
          <div className='swiper-slide'>
            <ProjectCard
              title='Projexttss'
              subtitle='subsdjf'
              text={
                <p>
                  &ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Architectoenetur, id cum.&rdquo;
                </p>
              }
            />
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

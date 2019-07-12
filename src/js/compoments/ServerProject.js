import React from 'react';
import SlideDisplay from './SlideDisplay';
import pingImage from '../../img/Ping.jpg';
import ooh from '../../img/Untitled.png';

const ServerProject = () => {
  const paramsSlide = {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 5,
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
  const projects = [
    {
      title: 'Message Post Restful api',
      subtitle: '| Node | Express | MongoDB | Socket | Mocha&Chai |',
      text:
        'his project is used for Restful api with Expressjs and using cloud' +
        ' database MongoDB Atlas. The api features: CRUD for Message Post website.' +
        ' The website can process with authentication, validation, up&download Images, testing with Mocha & Chai, etc.',
      githubUrl: 'https://github.com/ping58972/testing-node-rest-api-mocha-chai'
    },
    {
      title: 'Message Post Restful api',
      subtitle: '| Node | Express | MongoDB | Socket | Mocha&Chai |',
      text:
        'his project is used for Restful api with Expressjs and using cloud' +
        ' database MongoDB Atlas. The api features: CRUD for Message Post website.' +
        ' The website can process with authentication, validation, up&download Images, testing with Mocha & Chai, etc.',
      githubUrl: 'https://github.com/ping58972/testing-node-rest-api-mocha-chai'
    }
  ];

  return (
    <SlideDisplay
      params={paramsSlide}
      projectArray={projects}
      bgColor='#3e3947'
    />
  );
};

export default ServerProject;

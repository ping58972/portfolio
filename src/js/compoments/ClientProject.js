import React from 'react';
import SlideDisplay from './SlideDisplay';
import ooh from '../../img/Untitled.png';

const ClientProject = () => {
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
      title: 'My Portfolio',
      subtitle: '| HTML5 | SASS | Webpack | React | JQuery | swiper |',
      text:
        'The purpose of website is for looking jobs about software engineering, web developer, and programmer. The website include: showing my resume, side projects and skill, etc.',
      image: require('../../img/portfolio.png'),
      githubUrl: 'https://github.com/ping58972/portfolio',
      projectUrl: 'https://ping58972.github.io/portfolio'
    },
    {
      title: 'Portfolio Response Website',
      subtitle: '| HTML | SASS | Javascript | swiper | Xd | Ps | Ai | ',
      text:
        'The purpose of website is for practice front-end skill with vary technology. And practice how to design a website page, etc.',
      image: require('../../img/ResponseWeb.png'),
      githubUrl: 'https://github.com/ping58972/myportfolio',
      projectUrl: 'https://ping58972.github.io/myportfolio/'
    },
    {
      title: 'Modern Response Website',
      subtitle: '| HTML5 | SASS | Javascript |',
      text:
        'The purpose of website is for practice front-end skill with vary technology. And practice how to design a website page, etc.',
      image: require('../../img/responseWeb_Tra.png'),
      githubUrl: 'https://github.com/ping58972/practice-web-response',
      projectUrl: 'https://ping58972.github.io/practice-web-response/'
    },
    {
      title: 'Bicycle Website',
      subtitle: '| HTML5 | CSS |',
      text:
        'The purpose of website is for practice front-end skill with vary technology. And practice how to design a website page, etc.',
      image: require('../../img/bycicle.png'),
      githubUrl: 'https://github.com/ping58972/responseweb-bicycle'
    }
  ];

  return (
    <SlideDisplay
      params={paramsSlide}
      projectArray={projects}
      bgColor='#745360'
    />
  );
};

export default ClientProject;

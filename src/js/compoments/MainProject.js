import React from 'react';
import SlideDisplay from './SlideDisplay';
import ooh from '../../img/Untitled.png';
import evg from '../../img/evg.jpg';
import shopImage from '../../img/shop1.png';

const MianProject = () => {
  const paramsSlide = {
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
  const projects = [
    {
      title: 'Shop and Sell Website',
      subtitle: '| Node | Express | MongoDB |',
      text:
        'Features: creating own product for selling or looking buy some products. processing with authentication, validation, up&download files, saving data to MongoDB cloud, etc.',
      image: require('../../img/shop1.png'),
      githubUrl: 'https://github.com/ping58972/node-deploy-shopping-server',
      projectUrl: 'https://node-deploy-shopping-server.herokuapp.com'
    },
    {
      title: 'Post Message APP',
      subtitle: '| React | Socket | Node | Express | MongoDB |',
      text:
        'This project is the single page that build by React and fetch all data by web server  using MongoDB to save data this server API that has been deployed to Heroru and testing with Mocha&Chai',
      image: require('../../img/messageNode.png'),
      githubUrl:
        'https://github.com/ping58972/react-restful-api-basic-socket-io',
      serverUrl:
        'https://github.com/ping58972/testing-node-rest-api-mocha-chai',
      projectUrl:
        'https://ping58972.github.io/react-restful-api-basic-socket-io'
    },
    {
      title: 'Coming Soon',
      text: 'Coming Soon'
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

export default MianProject;

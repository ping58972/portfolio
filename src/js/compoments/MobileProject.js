import React from 'react';
import Swiper from 'react-id-swiper';
import SlideDisplay from './SlideDisplay';
import pingImage from '../../img/Ping.jpg';
import ooh from '../../img/Untitled.png';
import evg from '../../img/evg.jpg';
import pingLogo from '../../img/image.png';

const MobileProject = () => {
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
      title: 'Shop and Sell Website',
      subtitle: '| Node | Express | MongoDB |',
      text:
        '&ldquo;Features: creating own product for selling or looking buy some products. processing with authentication, validation, up&download files, saving data to MongoDB cloud, etc.&rdquo;',
      image: pingImage,
      githubUrl: 'https://github.com/ping58972/node-deploy-shopping-server',
      projectUrl: 'https://node-deploy-shopping-server.herokuapp.com'
    },
    {
      title: 'Shop and Sell Website',
      subtitle: '| Node | Express | MongoDB |',
      text:
        '&ldquo;Features: creating own product for selling or looking buy some products. processing with authentication, validation, up&download files, saving data to MongoDB cloud, etc.&rdquo;',
      image: ooh,
      githubUrl: 'https://github.com/ping58972/node-deploy-shopping-server',
      projectUrl: 'https://node-deploy-shopping-server.herokuapp.com'
    },
    {
      title: 'Shop and Sell Website',
      subtitle: '| Node | Express | MongoDB |',
      text:
        '&ldquo;Features: creating own product for selling or looking buy some products. processing with authentication, validation, up&download files, saving data to MongoDB cloud, etc.&rdquo;',
      image: ooh,
      githubUrl: 'https://github.com/ping58972/node-deploy-shopping-server',
      projectUrl: 'https://node-deploy-shopping-server.herokuapp.com'
    },
    {
      title: 'Shop and Sell Website',
      subtitle: '| Node | Express | MongoDB |',
      text:
        '&ldquo;Features: creating own product for selling or looking buy some products. processing with authentication, validation, up&download files, saving data to MongoDB cloud, etc.&rdquo;',
      image: ooh,
      githubUrl: 'https://github.com/ping58972/node-deploy-shopping-server',
      projectUrl: 'https://node-deploy-shopping-server.herokuapp.com'
    },
    {
      title: 'Shop and Sell Website',
      subtitle: '| Node | Express | MongoDB |',
      text:
        '&ldquo;Features: creating own product for selling or looking buy some products. processing with authentication, validation, up&download files, saving data to MongoDB cloud, etc.&rdquo;',
      image: ooh,
      githubUrl: 'https://github.com/ping58972/node-deploy-shopping-server',
      projectUrl: 'https://node-deploy-shopping-server.herokuapp.com'
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

export default MobileProject;

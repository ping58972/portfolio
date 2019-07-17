import React from 'react';
import SlideDisplay from './SlideDisplay';

const ClientProject = () => {
  const paramsSlide = {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 5,
    // spaceBetween: 30,
    // slidesPerGroup: 5,
    // loop: true,
    // loopFillGroupWithBlank: true,
    // freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function(index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    },
    navigation: {
      nextEl: '.swiper-button-prev',
      prevEl: '.swiper-button-next'
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
      title: 'My Stream Video',
      subtitle: '| React | Redux | json-server | node-media-server |',
      text:
        'The purpose of website is for practicing React and stream api by CRUD. The website features include: creating own stream video for living stream. And can process with authentication, validation, etc.',
      image: require('../../img/streamAll.png'),
      githubUrl: 'https://github.com/ping58972/my-stream-react-redux'
    },
    {
      title: 'Search Videos On Youtube Api',
      subtitle: '| React | axios |',
      text:
        'The purpose of website is for practicing React Search Videos On Youtube Api by implement fetching videos from Youtube API, etc.',
      image: require('../../img/searchVideosOnYoutubeApi.jpg'),
      githubUrl:
        'https://github.com/ping58972/react-practice-searchVideosOnYoutubeApi',
      projectUrl:
        'https://ping58972.github.io/react-practice-searchVideosOnYoutubeApi/'
    },
    {
      title: 'Search Images to Arrange',
      subtitle: '| React | axios |',
      text:
        'The purpose of website is for practicing React Form Event Handle by implement fetching images from an API, etc.',
      image: require('../../img/reactFormEventHandle.jpg'),
      githubUrl: 'https://github.com/ping58972/react-practrice-FormEventHandle',
      projectUrl: 'https://ping58972.github.io/react-practrice-FormEventHandle'
    },
    {
      title: 'Songs Selecting',
      subtitle: '| React | Redux |',
      text:
        'The purpose of website is for practicing React and Redux by implement React and Redux to build the compunents, etc.',
      image: require('../../img/react-redux-practice-songs.png'),
      githubUrl: 'https://github.com/ping58972/react-redux-practice-songs',
      projectUrl: 'https://ping58972.github.io/react-redux-practice-songs'
    },
    {
      title: 'Translate Key Words',
      subtitle: '| React | React-Context |',
      text:
        'The purpose of website is for practicing React and Context to Translate Key Words in the website by implement React and react-context, etc.',
      image: require('../../img/Translate.png'),
      githubUrl: 'https://github.com/ping58972/react-context-translate-app',
      projectUrl: 'https://ping58972.github.io/react-context-translate-app'
    },
    {
      title: 'Blog Post List',
      subtitle: '| React | Redux | Redux-Thunk |',
      text:
        'The purpose of website is for practicing React, Redux and thunk to fetch data to post list by implement React and Redux to build the compunents, etc.',
      image: require('../../img/fetchDataPostList.jpg'),
      githubUrl:
        'https://github.com/ping58972/react-redux-thunk-practice-fetchDataPostList',
      projectUrl:
        'https://ping58972.github.io/react-redux-thunk-practice-fetchDataPostList/'
    },
    {
      title: 'Simple Post and Todo: React-Hook',
      subtitle: '| React | Hook |',
      text:
        'The purpose of website is for practicing React and Hook by implement fetching post and Todos for an API, etc.',
      image: require('../../img/react-hooks-simple.png'),
      githubUrl: 'https://github.com/ping58972/react-hooks-simple-practice',
      projectUrl: 'https://ping58972.github.io/react-hooks-simple-practice'
    },
    {
      title: 'My Portfolio',
      subtitle: '| HTML | SASS | Webpack | React | JQuery | swiper |',
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

import React from 'react';
import SlideDisplay from './SlideDisplay';

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
      title: 'Message Post GraphQL API',
      subtitle: '| Node | Express | MongoDB | GraphQL | Nodemon |',
      text:
        'This project is to be the Restful API for the single page website by using GraphQl with Expressjs and using cloud database MongoDB Atlas. The website features include: creating own message and posting, you can CRUP some messages in the website. The website can process with authentication, validation, up&download files, etc.The single page web of this API is on Github: (https://github.com/ping58972/react-graphql-frontend)',
      serverUrl: 'https://github.com/ping58972/node-express-graphql'
    },
    {
      title: 'Message Post Restful api & Testing',
      subtitle: '| Node | Express | MongoDB | Socket | Mocha&Chai |',
      text:
        'his project is used for Restful api with Expressjs and using cloud' +
        ' database MongoDB Atlas. The api features: CRUD for Message Post website.' +
        ' The website can process with authentication, validation, up&download Images, testing with Mocha & Chai, etc.',
      serverUrl: 'https://github.com/ping58972/testing-node-rest-api-mocha-chai'
    },
    {
      title: 'Post Rest-API Sever ',
      subtitle: '| Node | Express | MongoDB | Socket |',
      text:
        'This project is to be the Restful API for the single page website with Expressjs and using cloud database MongoDB Atlas. The website features include: creating own message and posting, you can CRUP some messages in the website. The website can process with authentication, validation, up&download files, etc./n The single page web of this API is on Github:(https://github.com/ping58972/react-restful-api-basic-socket-io)',
      serverUrl: 'https://github.com/ping58972/node-rest-api-basic'
    },
    {
      title: 'Shop Server: Cookies-Sessions Authentication Validation',
      subtitle: '| Node | Express | MongoDB | nodemailer |',
      text:
        'This project is the multiple pages render web server, All page on back-end by using EJS templating with Expressjs and using cloud database MongoDB Atlas. The website features include: creating own product for selling or looking buy some products in the website. The website can process with authentication, validation, up&download files, etc.',
      serverUrl: 'https://github.com/ping58972/shopping-server-validation'
    },
    {
      title: 'Shop Server: MongoDB & Mongoosejs',
      subtitle: '| Node | Express | MongoDB | Mongoosejs |',
      text:
        'This project is the multiple pages render web server, All page on back-end by using EJS templating with Expressjs and using cloud database MongoDB Atlas. The website features include: creating own product for selling or looking buy some products in the website, etc.',
      serverUrl: 'https://github.com/ping58972/shopping-server-mongoose'
    },
    {
      title: 'Shop Server: MySQL & Sequelize',
      subtitle: '| Node | Express | MySQL | Sequelize |',
      text:
        'This project is the multiple pages render web server, All page on back-end by using EJS templating with Expressjs and using MySQL and Sequelize. The website features include: creating own product for selling or looking buy some products in the website, etc.',
      serverUrl:
        'https://github.com/ping58972/nodejs-shopping-server-mysql-sequelizejs'
    },
    {
      title: 'Shop Server: Up-Download-Files, Pagination, and Payment',
      subtitle: '| Node | Express | MongoDB | pdfkit | stripe |',
      text:
        'shopping-server-expressjs-mongodb-mongoose-cookies-sessions-authentication-validation-up-download-files This project is the multiple pages render web server, All page on back-end by using EJS templating with Expressjs and using cloud database MongoDB Atlas. The website features include: creating own product for selling or looking buy some products in the website. The website can process with authentication, validation, up&download files, etc.',
      serverUrl:
        'https://github.com/ping58972/shopping-server-up-download-files'
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

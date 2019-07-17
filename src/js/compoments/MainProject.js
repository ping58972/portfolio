import React from 'react';
import SlideDisplay from './SlideDisplay';
import { paramsEffect } from './swiperParams';

const MianProject = () => {
  const projects = [
    {
      title: 'Shop and Sell Website',
      subtitle: '| Node | Express | MongoDB |',
      text:
        'Features: creating own product for selling or looking buy some products. processing with authentication, validation, up&download files, saving data to MongoDB cloud, etc.',
      image: require('../../img/shop1.jpg'),
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
      params={paramsEffect}
      projectArray={projects}
      bgColor='#3e3947'
    />
  );
};

export default MianProject;

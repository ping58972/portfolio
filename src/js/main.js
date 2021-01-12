import React from 'react';
import ReactDOM from 'react-dom';
import '../css/main.css';
import '../scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faTwitter,
  faGithub,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import { faEye, faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';

import MianProject from './compoments/MainProject';
import ClientProject from './compoments/ClientProject';
import ServerProject from './compoments/ServerProject';
import MobileProject from './compoments/MobileProject';
import CollegeProject from './compoments/CollegeProject';

library.add(faTwitter, faLinkedinIn, faGithub, faEye, faFilePdf, faServer);
dom.watch();

ReactDOM.render(<MianProject />, document.querySelector('#ml-dl-project'));
ReactDOM.render(<ClientProject />, document.querySelector('#client-project'));
ReactDOM.render(<ServerProject />, document.querySelector('#server-project'));
ReactDOM.render(<MobileProject />, document.querySelector('#mobile-project'));
ReactDOM.render(<CollegeProject />, document.querySelector('#college-project'));

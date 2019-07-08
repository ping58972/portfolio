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

import MianProject from './compoments/MainProject';
import ClientProject from './compoments/ClientProject';

library.add(faTwitter, faLinkedinIn, faGithub, faEye, faFilePdf);
dom.watch();

ReactDOM.render(<MianProject />, document.querySelector('#main-project'));
ReactDOM.render(<ClientProject />, document.querySelector('#client-project'));
ReactDOM.render(<ClientProject />, document.querySelector('#server-project'));
ReactDOM.render(<ClientProject />, document.querySelector('#mobile-project'));
ReactDOM.render(<ClientProject />, document.querySelector('#college-project'));

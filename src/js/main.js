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

import MianProject from './compoments/MainProject';
import ProjectCard from './compoments/SubProject';

library.add(faTwitter, faLinkedinIn, faGithub);
dom.watch();

ReactDOM.render(<MianProject />, document.querySelector('#main-project'));
ReactDOM.render(<ProjectCard />, document.querySelector('#sub-project'));

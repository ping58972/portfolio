import React from 'react';
import ReactDOM from 'react-dom';
import '../css/main.css';
import '../scss/main.scss';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faTwitter,
  faGithub,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

import MianProject from './compoments/MainProject';
import CardExampleGroups from './compoments/SubProject';

library.add(faTwitter, faLinkedinIn, faGithub);
dom.watch();

ReactDOM.render(<MianProject />, document.querySelector('#main-project'));
ReactDOM.render(<CardExampleGroups />, document.querySelector('#sub-project'));

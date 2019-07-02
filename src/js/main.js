import '../css/main.css';
import '../scss/main.scss';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faTwitter,
  faGithub,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

library.add(faTwitter, faLinkedinIn, faGithub);
dom.watch();

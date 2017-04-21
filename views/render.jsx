import React from 'react';
import ReactDOM from 'react-dom';

import Index from './components/index';
import config from '../config';

ReactDOM.render(<Index config={config} />, document.getElementById('chat'));

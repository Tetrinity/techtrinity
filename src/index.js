import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Website from './main/Website'

import './index.min.css';

ReactDOM.render(<Router><Website/></Router>, document.getElementById('root'));
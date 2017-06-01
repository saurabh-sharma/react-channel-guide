import React from 'react';
import { render } from 'react-dom';
import App from './components';

//Importing Styles
import './scss/style.scss';

const elem = document.querySelector('#app');

render (<App/>, elem);
import React from 'react';
////єтот імпорт не нужен, если спольз  jsx

import ReactDOM from 'react-dom';
// import './modern-normalize/modern-normalize.css';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

ReactDOM.render(<App />, document.querySelector('#root'));

import React from 'react';
////єтот імпорт не нужен, если спольз  jsx

import ReactDOM from 'react-dom';
// import './modern-normalize/modern-normalize.css';
import './index.css';
import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// const data = {
//     "id": "id-1",
//     "url": "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
//     "title": "Feathers. Art abstract",
//     "price": 500,
//     "author": {
//       "tag": "ractapopulous",
//       "url": "https://pixabay.com/users/ractapopulous-24766/"
//     },
//     "quantity": 10
//   }

// ReactDOM.render(<Painting url={data.url} title={data.title} authorName={data.author.url} profileUrl={data.author.url} />, document.querySelector('#root'))
ReactDOM.render(<App />, document.querySelector('#root'));

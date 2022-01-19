import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import microApp from '@micro-zoe/micro-app';
import App from './App';
import reportWebVitals from './reportWebVitals';

microApp.start({
  disableScopecss: true, // 不设置true点击事件无效
  destroy: true,
  lifeCycles: {
    created (e) {
      console.log('created')
    },
    beforemount (e) {
      console.log('beforemount')
    },
    mounted (e) {
      console.log('mounted')
    },
    unmount (e) {
      console.log('unmount')
    },
    error (e) {
      console.log('error')
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

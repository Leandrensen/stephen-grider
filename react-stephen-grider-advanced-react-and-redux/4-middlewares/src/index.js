import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Root from 'Root';
import App from 'components/App';

ReactDOM.render(
  <React.StrictMode>
    <Root>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Root>
  </React.StrictMode>,
  document.querySelector('#root')
);

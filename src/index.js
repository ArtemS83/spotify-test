import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';
import 'modern-normalize/modern-normalize.css';
import './index.css';

ReactDOM.render(
  // <StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  // </StrictMode>,
  document.getElementById('root'),
);

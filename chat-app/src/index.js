import React from 'react';
import ReactDOM from 'react-dom/client';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './Service/graphQl'
import store from './Redux/store';

import { createBrowserHistory } from "history";
export const history = createBrowserHistory({ window });

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rootNavigate = (to) => {
  history.push(to);
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        {/* <HistoryRouter history={history}> */}
        <App />
        {/* </HistoryRouter> */}
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

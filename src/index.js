import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from 'react-moralis';
import { MoralisDappProvider } from './contexts/MoralisDappProvider';
 
const APP_ID = "Ule3vKGffPvCeljv5O1GMC28a3A7OGebTRQZmDhG";
const SERVER_URL = "https://e7e8lhnsdker.usemoralis.com:2053/server";


const Application = () => {
  const isServerInfo = APP_ID && SERVER_URL ? true : false;
  if (isServerInfo)
    return (
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <MoralisDappProvider>
          <App isServerInfo />
        </MoralisDappProvider>
      </MoralisProvider>
    );
  else {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1>Hello My Friend</h1>
      </div>
    );
  }
};
ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

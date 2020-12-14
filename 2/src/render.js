import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {correctAccauntAvatar, correctAccauntInfo, correctMessagesSend} from './Data/Data.js';

export let rerender = function(data){
	ReactDOM.render(
  <React.StrictMode>
    <App data={data} 
    	correctAccauntAvatar={correctAccauntAvatar} correctAccauntInfo={correctAccauntInfo}
    	correctMessagesSend={correctMessagesSend}/>
  </React.StrictMode>,
  document.getElementById('root')
  )
}
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';

import Header from './Header/Header.js';
import Sidebar from './Sidebar/Sidebar.js';

import MyAccaunt from './Content/MyContent/MyAccaunt.js';
import MyFriends from './Content/MyContent/MyFriends.js';
import MyMessages from './Content/MyContent/MyMessages.js';

import GlobalMedia from './Content/Global/GlobalMedia.js';

import Settings from './Content/Settings/Settings.js';

import Footer from './Footer/Footer.js';

function App(props) {
  let MyAccaunts = function(){return <MyAccaunt data={props.data} 
    correctAccauntAvatar={props.correctAccauntAvatar} correctAccauntInfo={props.correctAccauntInfo}/>}
  let MyFriends1 = function(){return <MyFriends data={props.data}/>}
  let MyMessages1 = function(){return <MyMessages data={props.data}
    correctMessagesSend={props.correctMessagesSend}/>}
  let GlobalMedias = function(){return <GlobalMedia data={props.data}/>}
  let Settings1 = function(){return <Settings data={props.data}/>}

  return (
    <BrowserRouter>
    <div>
      <table className="pageBody" border="1">
        <tr>
          <td colspan="2" className="header">
            <Header/>
          </td>
        </tr>
        <tr>
          <td className="sidebar">
            <Sidebar data={props.data}/>
          </td>
          <td className="content">
            <Route component={MyAccaunts} path="/MyAccaunt"/>
            <Route component={MyFriends1} path="/MyFriends"/>
            <Route component={MyMessages1} path="/MyMessages"/>
            <Route component={GlobalMedias} path="/GlobalMedia"/>
            <Route component={Settings1} path="/Settings"/>
          </td>
        </tr>
        <tr>
          <td colspan="2" className="footer">
            <Footer/>
          </td>
        </tr>
      </table>
    </div>
    </BrowserRouter>
  );
}

export default App;

import React, { Component } from 'react';

import RecentEdits from './components/Recent-Edits';
import Notifications from './components/Notifications';
import Calendar from './components/Calendar';
import getToken from './../../components/login-page/token.service';
import setAuthorization from './../../components/login-page/utils/setAuthorizationToken';
import './style.css';

if(localStorage.id_token){
  setAuthorization(getToken());
}

export default class Dashboard extends Component {
  render() {
    return (

<div className='container'>
  <ul>
  <li>
  <RecentEdits />
  </li>
  <li>
  <Notifications />
  </li>
  </ul>
</div>

      <div>
        <Calendar />
      </div>


    )
  }
}

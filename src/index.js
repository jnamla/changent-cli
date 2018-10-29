import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios' 

import apiConf from '../api-conf'
import Reboot from './components/Reboot'

axios.get(`${apiConf.changent.serverApi}/changents`)
  .then(resp => {
    ReactDOM.hydrate(
      <Reboot changents={resp.data}/>,
      document.getElementById('root')
    );
  }).catch(console.error)


import React from 'react'
import ReactDOMServer from 'react-dom/server'
import axios from 'axios' 

import apiConf from './api-conf'
import Reboot from './src/components/Reboot'

const serverRender = () =>
  axios.get(`${apiConf.changent.serverApi}/changents`)
    .then(resp => {
      return {
        content: ReactDOMServer.renderToString(<Reboot changents={resp.data}/>),
        initialData: resp.data
      }
    }).catch(console.error)

export default serverRender
import express from 'express' 
import sassMiddleware from 'node-sass-Middleware'
import path from 'path'
import bodyParser from 'body-parser'

import config from './conf'
import serverRender from './serverRender'

const server = express()
server.use(bodyParser.json());

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}))

server.set('view engine', 'ejs')

server.get('/', (req, res) => {
  serverRender()
    .then((content, initialData) => {
      res.render('index', {
        content, 
        initialData
      })
    })
    .catch(error => {
      console.error(error);
      res.status(404).send('Bad Request');
    });
})

server.use(express.static('public'))

server.listen(config.port, config.host, () => {
  console.info('Express listening on port ', config.port)
})
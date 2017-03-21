import 'marko/express'
import express from 'express'
import compression from 'compression'
import path from 'path'
import helmet from 'helmet'
import Context from './core/context'
import config from '../tools/config'

const PORT = process.env.PORT || config.backendPort || 9001
const app = express()

app.use(helmet())
app.use(compression())

app.use(express.static(path.join(__dirname, 'public')))

app.use(function(req, res, next) {
  req.context = new Context
  next();
})

app.get('/', require('./routes/home'))
app.get('/about', require('./routes/about'))

app.listen(PORT, function(err) {
  if (err) {
    throw err
  }
  console.log(`Listening at http://localhost:${PORT}/`)
})

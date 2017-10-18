import 'marko/express'
import express from 'express'
import compression from 'compression'
import path from 'path'
import helmet from 'helmet'
import Context from './core/context'
import config from '../tools/config'

const PORT = process.env.PORT || config.backendPort || 9000
const app = express()

app.use(helmet())
app.use(compression())

app.use(express.static(path.join(__dirname, 'public')))

app.use(function(req, res, next) {
  let context = new Context()
  context.user = {
    name: 'foo',
    email: 'xxx@xxx.com'
  }
  req.context = context
  next()
})

app.get('/', require('./routes/home'))
app.get('/home', require('./routes/home'))
app.get('/test', require('./routes/test'))
app.get('/test-issue-getEl', require('./routes/issue-getEl'))

let logger = console
app.listen(PORT, function(err) {
  if (err) {
    throw err
  }
  logger.log(`Listening at http://localhost:${PORT}/`) // eslint-disable-line
})

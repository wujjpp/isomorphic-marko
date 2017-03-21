import 'marko/express'
import express from 'express'
import compression from 'compression'
import path from 'path'
import config from '../tools/config'

const PORT = process.env.PORT || config.backendPort || 9001;
const app = express();
app.use(compression());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', require('./routes/home'));
app.get('/home2', require('./routes/home2'));

app.listen(PORT, function(err) {
  if (err) {
    throw err;
  }
  console.log(`Listening at http://localhost:${PORT}/`)
});

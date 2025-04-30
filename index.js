import express from 'express'
import dotenv from 'dotenv'
import path from 'path';
import { fileURLToPath } from 'url';
import { pokeRouter } from './src/routes/routes.js'

dotenv.config()
const port = process.env.PORT || 3000
const app = express()
app.use(express.json())
app.use('/', pokeRouter)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => { console.log(`App listening on port ${port}`) })

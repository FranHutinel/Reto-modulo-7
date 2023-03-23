import express, { json, urlencoded } from 'express';
const app = express();

import { join ,dirname} from 'path';
import { fileURLToPath } from 'url';

import { create } from 'express-handlebars';
import cors from 'cors';


import rutas from './routes/views.routes.js'

const PORT =3000;

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors())
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, 'public')));

app.use(rutas)

app.set("views", join(__dirname, "views/"));

const hbs = create({
  
  defaultLayout: "main",
  
  layoutsDir: join(app.get("views"), "layouts"),
  partialsDir: join(app.get("views"), "partials"),
  
  extname: ".handlebars",
});
app.listen(PORT, () => console.log("http://localhost:3000"));
app.engine(".handlebars", hbs.engine);
app.set("view engine", ".handlebars");


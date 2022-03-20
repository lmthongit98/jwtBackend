import express from "express";
import configViewEngine from './config/viewEngine';
import initWebRoutes from './routes/web';
import bodyParser from 'body-parser';
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

// config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Config view engine
configViewEngine(app);

// Init web routes
initWebRoutes(app);

app.listen(PORT, () => {
    console.log(">>> JWT Backend is running on the port: ", + PORT);
})
// import express from 'express';
// import cors from 'cors';
// import HelloController from './controllers/hello-controller.js';
// import UserController from "./controllers/users/users-controller.js";
// import TuitsController from './controllers/tuits/tuits-controller.js';
// const app = express()
// app.use(cors())    // configure cors right after instantiating express
// app.use(express.json()); //This middleware function is used to parse incoming JSON data from the request body and make it available in req.body property of the request object.
// HelloController(app)
// UserController(app)
// TuitsController(app);
// // app.listen(4000)

// app.listen(process.env.PORT || 4000);

import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
// mongoose.connect('mongodb://127.0.0.1:27017/tuiter');
mongoose.connect(CONNECTION_STRING);
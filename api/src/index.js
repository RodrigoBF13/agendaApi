import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import usuarioController from './controller/usuarioController.js'
import {con} from './repository/connect.js';

const server = express();
server.use(cors());
server.use(express.json());

// Endpoint
server.use(usuarioController)

server.listen(process.env.PORT, () => {
    console.log("API ONLINE NA PORTA: "+process.env.PORT)
});
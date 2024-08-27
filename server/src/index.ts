// Set Express Server
import express from 'express';
import http from 'http';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(express.json());

const server = http.createServer(app);

// /Add listener

server.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});

const MONGO_URL = process.env.DB_URL;

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));

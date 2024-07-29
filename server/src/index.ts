// Set Express Server
import express from 'express';
import http from 'http';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

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

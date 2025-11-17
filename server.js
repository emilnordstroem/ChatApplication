import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import session from 'express-session';
import fs from 'fs/promises'

import chatRouter from './routes/chatRouter.js'

const app = express();
const port = 10000;

const encryption = await fs.readFile('secret.txt')

app.use(
    session({
        secret: encryption,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24,
            secure: false
        }
    })
);

app.set('view engine', 'pug');

app.use(morgan('short'));
app.use(express.static('assets'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// chat router
app.get('/chats', chatRouter)
app.get('/chats/:id', chatRouter)
app.get('/chats/:id/messages', chatRouter)
app.get('/chats/messages/:id', chatRouter)

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
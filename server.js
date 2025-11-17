import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import session from 'express-session';
import fs from 'fs/promises'

import signUpRouter from './routes/signUpRouter.js'
import logInRouter from './routes/logInRouter.js'
import chatRouter from './routes/chatRouter.js'
import userRouter from './routes/userRouter.js'

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

app.use((request, response, next) => {
    if (request.session.isLoggedIn === true) {
        return next()
    } else if (request.path === '/login' || request.path === '/signup') {
        // if user is redirected to either login or signup, let it continue
        return next()
    }
    response.redirect('/login')
})

// initial access to site
app.get('/', (request, response) => {
    response.redirect('/signup')
})

// routers
app.use('/signup', signUpRouter)
app.use('/login', logInRouter)
app.use('/chats', chatRouter)
app.use('/users', userRouter)


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
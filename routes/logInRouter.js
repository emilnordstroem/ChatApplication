import express from "express";

const router = express.Router();

router.get('/login', (request, response) => {
    response.render('logInPage')
})

router.post('/login', (request, response) => {
    
})

export default router;
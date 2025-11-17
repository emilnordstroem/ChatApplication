import express from "express";

const router = express.Router();

router.get('/signup', (request, response) => {
    response.render('signUpPage')
})

router.post('/signup', (request, response) => {
    
})

export default router;
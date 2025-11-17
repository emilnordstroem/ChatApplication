import express from "express";

const router = express.Router();

router.get('/', (request, response) => {
    response.render('signUpPage')
})

router.post('/', (request, response) => {
    
})

export default router;
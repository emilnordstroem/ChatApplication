import express from "express";

const router = express.Router();

router.get('/', (request, response) => {
    response.render('logInPage')
})

router.post('/', (request, response) => {
    
})

export default router;
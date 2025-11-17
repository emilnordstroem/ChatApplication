import express from "express";

const router = express.Router();

async function getUsers () {
    
}

router.get('/', async (request, response) => {
    const users = await getUsers()
    response.send({ list: users })
})

router.get('/:id', async (request, response) => {
    const users = await getUsers()

})

router.get('/:id/messages', async (request, response) => {
    const users = await getUsers()

})

export default router;
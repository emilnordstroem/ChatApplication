import express from "express";
import fs from 'fs/promises'

const router = express.Router();

async function getChats () {
    const data = await fs.readFile('chats.json')
    
    const json = await data.json()
    return json.chats
}

router.get('/', async (request, response) => {
    const chats = await getChats()
    response.send({ list: chats })
})

router.get('/:id', async (request, response) => {
    const chats = await getChats()
    
})

router.get('/:id/messages', async (request, response) => {
    const chats = await getChats()

})

router.get('/messages/:id', async (request, response) => {
    const chats = await getChats()  

})

export default router;
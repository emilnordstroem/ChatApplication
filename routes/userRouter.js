import express from "express";
import { readFile } from "fs";
import fs from 'fs/promises'

const router = express.Router();

router.get('/users', async (request, response) => {
    const data = await fs.readFile('./users.json', 'utf-8')
    const json = JSON.parse(data)
    const users = json.users
    response.json(users)
})

router.get('/users/:id', (request, response) => {

})

router.get('/users/:id/messages', (request, response) => {

})

export default router;
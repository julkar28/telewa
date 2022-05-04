// import qrcode from 'qrcode-terminal'
// import ww from 'whatsapp-web.js'
// const { Client, LocalAuth, MessageMedia } = ww

// const client = new Client({
//     authStrategy: new LocalAuth()
// })
// client.on('qr', qr => {
//     qrcode.generate(qr, {small: true})
// })

// client.on('ready', () => {
//     console.log('Client ready!')
// })

// client.initialize()

// client.on('message', async (msg) => {
//     const m = await msg.downloadMedia()
//     console.log(m.mimetype)
//     client.sendMessage('6281290819484@c.us', 'media')
// })

import express from 'express'
import axios from 'axios'
const app = express()
app.get("/", (req, res) => {
    res.json({})
})
app.listen(3000, () => {
    console.log("Running on port 3000")
    setInterval(() => {
        axios.get("https://localhost:3000")
    }, 60000)
})
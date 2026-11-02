const express = require('express')
const app = express()
const PORT = 3000
app.get('/', (req, res) => res.send('Hello, World!\n'))
app.get('/good-evening', (req, res) => res.type('text/plain').send('Good evening\n'))
app.listen(PORT)

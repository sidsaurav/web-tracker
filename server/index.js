const express = require('express')
const dotenv = require('dotenv')

const app = express()

dotenv.config()
app.use(express.json())

app.listen(process.env.PORT, () => {
  console.log('server running on port ' + process.env.PORT)
})

app.get('/', (req, res) => {
  res.json('heyaa')
})

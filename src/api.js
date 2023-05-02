const express = require('express')
const serverless = require('serverless-http')

const app = express()
const router = express.Router()

router.get('/', (req, res) => {
  res.send("lol send is working")
})
router.get('/another', (req, res) => {
  res.json({ 'data': ['start', 'work', 'piece', 'of', 'shit'] })
})


app.use('/.netlify/functions/api/', router)

module.exports.handler = serverless(app)

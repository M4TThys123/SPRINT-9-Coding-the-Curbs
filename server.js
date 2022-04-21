const express = require('express')
const app = express()
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))
const port = 1337
const url = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'
const res = require('express/lib/response')
const { request } = require('express')

// Serve public files
app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views', './views')

app.listen(port, () => {
    console.log(`the server has been sterted @port: ${port}`)
})

app.get('/render', (req, res) => {
    fetchJson(url).then(function (jsonData) {
      res.render('render', {
        smartzones: jsonData.data,
      })
    })
  })

app.get('/:id', (req, res) => {

    res.send('Hi id route')
})

async function fetchJson(url) {
    return await fetch(url)
      .then((response) => response.json())
      .catch((error) => error)
  }
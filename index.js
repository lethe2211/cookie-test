const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const port = process.env.PORT || 3000;

app.use(cookieParser())

app.get('/', (req, res) => {
  console.log(req.cookies)

  // Sample Cookies 
  const cookieOption = {
    httpOnly: true
  }
  res.cookie('key', 'value', cookieOption)
  res.cookie('key2', 'value2')

  res.send(`Cookie: ${res.get('Set-Cookie')}`) 
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

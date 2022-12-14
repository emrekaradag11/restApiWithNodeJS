const http = require('http')
const bodyParser = require('body-parser')
const express = require('express')
const routers = require('./src/routes/route')
const basicAuth = require('express-basic-auth')
require('dotenv').config()


const app = express() 
const port = process.env.PORT || 6001;

// parse request data content type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))

// parse request data content type application/json
app.use(bodyParser.json())

// basic auth
app.use(basicAuth({
    users: {
        // username - password
        [process.env.AUTH_USER]: process.env.AUTH_PASS
    }, 
    unauthorizedResponse: (req) => { 
        return req.auth ? { success: true, message: 'doğrulanamadı' } : ''
    }
}))

app.use(``,routers);

const server = http.createServer(app);
server.listen(port, () => {
    console.log("express is running");
})
 
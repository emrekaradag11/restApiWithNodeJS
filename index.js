const http = require('http')
const bodyParser = require('body-parser')
const express = require('express')
const routers = require('./src/routes/route')
const basicAuth = require('express-basic-auth')

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
        'root': 'u1FqShNcPIr!5B$Z$aF9S3138e^VKB6'
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
 
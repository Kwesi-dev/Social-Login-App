const express = require("express")
const cookieSession = require("cookie-session")
const passport = require("passport")
const cors = require('cors')
const passportSetup = require('./passsport')
const authRoute = require('./Routes/auth')
const app = express()

app.use(cookieSession({
    name: "session", keys: ["kwesi"], maxAge: 24 * 60 * 60 * 100,
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    credentials: true
}))

app.use('/auth', authRoute)

app.listen(5000, ()=>{
    console.log("backend server is running")
})
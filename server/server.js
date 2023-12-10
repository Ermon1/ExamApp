const express = require('express')
const dbConnection=require('./db.js')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const userRouter=require('./router/userRouter')
const examRouter = require('./router/examRouter')
const categoryRouter = require('./router/catagoryRouter')
const subjectController =require('./router/subjectRouter')
app.use(cors())
app.use(bodyParser.json())
app.use('/api/user', userRouter)
app.use("/api/category", categoryRouter);
app.use("/api/subjects", subjectController);

app.listen(5001, () => {
    console.log("listing on the port 5000")
})

const express = require('express')
const dbConnection=require('./db.js')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const userRouter=require('./router/userRouter')
const examRouter = require('./router/examRouter')
const categoryRouter = require('./router/catagoryRouter')
const subjectController = require('./router/subjectRouter')
const questionCatagory = require('./router/questionCategoryRouter')
app.use(cors())
app.use(bodyParser.json())
app.use('/api/user', userRouter)
app.use("/api/exam", examRouter);
//app.use("/api/category", categoryRouter);
app.use("/api/subjects", subjectController);
app.use("/api/questioncategory", questionCatagory);
app.listen(5001, () => {
    console.log("listing on the port 5000")
})

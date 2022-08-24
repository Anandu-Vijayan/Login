const express =require('express')
const notes = require("../backend/data/note")
const dotenv =require('dotenv')
const connectDB = require("./config/db")
const userRoutes = require("./routes/userRoutes")
const { notFound, errorHandler } = require('./middlewares/errorMiddlewares')

const app = express()
dotenv.config()
connectDB();
app.use(express.json());


app.get('/', (req,res)=>{
    res.send('Api running')
})
 

app.get('/notes',(req,res)=>{
    res.json(notes)
})

app.get('/notes/:id',(req,res)=>{
    const note = notes.find((n)=>n._id === req.params.id)
    res.json(note)
})

app.use('/users',userRoutes)

app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000 

app.listen(PORT,console.log(`Server connected PORT ${PORT}`));
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb';


//App Config

const PORT = process.env.PORT || 4000
const app =express();

await connectDB() 


// Intialize  meddilewares


app.use(express.json())
app.use(cors())

//APP Routes

app.get('/',(req,res) => res.send(" API WORKING"))


app.listen(PORT,()=>{
    console.log('Server is running at Port NO '+PORT);
})

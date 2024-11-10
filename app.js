
// Improting the moudle 
const express= require('express'); 
const app = express();

// request logger middleware 
const requestLogger= async(req,res,next)=>{
    const currentTime= new Date().toISOString();
    
    console.log(`[${currentTime}] ${req.method} request ${req.url}`)
    next();
}

// Use the middleare globally

app.use(requestLogger);



// creating a server
const PORT = 8000
app.get('/', (req,res)=>{
    res.send('Hello World!')
}); 


app.listen(PORT, (req,res)=>{
    console.log(`Server is running on port ${PORT}`)
})
const express= require('express');
const cors = require('cors')
const app =express()
const port=process.env.PORT || 5000;

//middleware
app.use(cors())
app.use(express.json())

const user=[
    {id:1, name:'Minhaz', email:'minhaz666@gmail.com'},
    {id:2, name:'Mahadi', email:'mahadi666@gmail.com'},
    {id:3, name:'Labib', email:'labib666@gmail.com'},
]

app.get('/',(req,res)=>
{
    res.send('server is running');
})

app.get('/user',(req,res)=>
{
    res.send(user);
})

app.post('/user',(req,res)=>
{
    console.log('post hit the server');
    const newuser=req.body;
    newuser.id=user.length+1;
    user.push(newuser);
    res.send(newuser)
    console.log(newuser)
})


app.listen(port,()=>
{
    console.log(`listening on port ${port}`)
})
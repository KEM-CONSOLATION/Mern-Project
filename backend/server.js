const express = require ('express')


// express app
const app = express ()

app.get('/', (req, res)=>{
    res.json({mssg: 'welcome to the app'})
})


// listen for request
app.listen(4000, ()=>{
    console.log(' listening in port 4000');
})
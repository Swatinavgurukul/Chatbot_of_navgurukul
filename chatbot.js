const express = require('express');
const app = express();

const fs = require('fs')

app.use(express.json());
app.get("/navgurukul/:info", (req,res) => {
    fs.readFile('navgurukul_data.json',(err,data)=>{
    var body = req.params.info
    var data1 = JSON.parse(data);
    var out = data1[body]
    
    return res.json(out);

    })
}),
app.listen(3000, () => console.log('server is listening'));
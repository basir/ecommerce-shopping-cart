var express = require('express');
var cors = require('cors');
var path = require('path');
const app = express();
app.use(cors());

const port = 8000;

app.get('/api/products', (req, res)=>{
    res.sendFile(path.join(__dirname, 'data', 'products.json'));
});
app.listen(port, ()=>{
    console.log("Api is ready at port "+ port);
})
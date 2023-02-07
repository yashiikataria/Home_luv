import express from 'express';
import path from 'path';
const app = express();
const port = 2000;
app.use('/public',express.static('public'));
app.get('/', async (req, res) => {
    let value;
    let data;
    if (req.query.category) {
        value = await fetch(`https://stage-api.homluv.com/api/nlc/category?pagesize=${req.query.pagesize}&page=${req.query.pgNo}&category=${req.query.category}&ctr=5`);
    } else if (req.query.search) {
        value = await fetch(`https://stage-api.homluv.com/api/nlc/articles?pagesize=${req.query.pagesize}&page=${req.query.pgNo}&search=${req.query.search}&ctr=12`);
    } 
    else if(req.query.tile)
    {
        value = await fetch(`https://stage-api.homluv.com/api/nlc/detail?title=${req.query.tile}`);
    }
    else {
        value = await fetch(`https://stage-api.homluv.com/api/nlc/articles?pagesize=${req.query.pagesize}&page=${req.query.pgNo}&ctr=14`);
    }
    data = await value.json();
    res.send(data);
});
app.get('/allarticles', async (req, res) => {
    res.sendFile(path.join(__dirname, '../src/main.html'))
});
app.listen(port, () => {
    console.log(`Connected succesfully on port ${port}`)
});
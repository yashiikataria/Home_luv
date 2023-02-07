import express from 'express';
import cors from 'cors';
import { allarticlesRouter, getDetailRouter } from './routes/articles.routes';
// import { port } from "../src/utils/constants";


const app=express();
const port=2000;
app.use(cors())

app.use('/articlepage',allarticlesRouter)

app.use('/detailpage',getDetailRouter)

app.listen(port, () => {
    console.log(`Connected succesfully on port ${port}`)
});

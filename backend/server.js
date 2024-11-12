import express from 'express';
import cors from 'cors';
import urlRoutes from './routes/urlRoutes.js'

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/analyze', urlRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})
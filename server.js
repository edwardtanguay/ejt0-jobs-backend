import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jobs from './models/jobs_mdFiles.js';

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(cors());

app.get('/jobs', (req, res) => {
    res.send(jobs);
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});

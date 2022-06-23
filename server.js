import express from 'express';
import cors from 'cors';

const app = express();
const port = 3021;
app.use(cors());

app.get('/jobs', (req, res) => {
    res.send([
        {
            name: 'Job #1'
        },
        {
            name: 'Job #2'
        }
    ]);
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});

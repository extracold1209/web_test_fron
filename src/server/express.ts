import path from 'path';
import express from 'express';

const app = express();

app.use(express.json());
app.use('/static', express.static(path.join(__dirname, '..', '..', 'statics')))
app.get('/', (req, res) => {
    res.send('hello world');
});

export default app;
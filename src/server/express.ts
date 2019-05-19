import express from 'express';
import path from 'path';

const app = express();

app.use(express.json());
app.use('/static', express.static(path.join(__dirname, '..', '..', 'statics')));
app.use('/build', express.static(path.join(__dirname, '..', '..', 'build')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

export default app;

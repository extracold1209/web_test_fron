import express from 'express';
import path from 'path';
import vendorRouter from './vendorRouter';

const app = express();

app.use(express.json());

app.use('/static', express.static(path.join(__dirname, '..', '..', 'statics')));
app.use('/build', express.static(path.join(__dirname, '..', '..', 'build')));
app.use(vendorRouter({
    mappingName: '/vendor',
    libraryNames: ['materialize-css'],
}));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

export default app;

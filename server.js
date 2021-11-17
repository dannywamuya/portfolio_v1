const express = require('express');
const path = require('path');
const express_enforces_ssl = require('express-enforces-ssl');

const app = express();

app.enable('trust proxy');
app.use(express_enforces_ssl());

const port = process.env.PORT || 8000;

app.use('/res', express.static(path.resolve(__dirname, 'src', 'res')));
app.use('/static', express.static(path.resolve(__dirname, 'src', 'static')));
app.use(
	'/index.js',
	express.static(path.resolve(__dirname, 'src', 'index.js'))
);

app.get('/*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'src', 'index.html'));
});

app.listen(port, () => console.log(`listening on ${port}...`));

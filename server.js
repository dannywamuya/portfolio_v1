const express = require('express');
const path = require('path');

const app = express();
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

const express = require('express')
const app = express()

const port = process.env.PORT || config.get('port');

app.get('/', (req, res) => res.send('Hello World!'))

app.use((err, req, res, next) => {
    res.status(500).json({ code: 'Invalid Request', message: err.message });
});

app.listen(port, () => console.log(`Listening on ${port}`));
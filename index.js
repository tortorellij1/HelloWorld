let express = require('express');
let app = express();

app.get('/', (req, res) => { 
    res.send('hello world');
});

app.listen(3000, () => { 
    console.log('listenin on port 3000');
});
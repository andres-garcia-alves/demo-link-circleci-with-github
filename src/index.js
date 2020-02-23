const express = require('express')
const app = express();

app.set('PORT', process.env.PORT || 4000);

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.listen(app.get('PORT'), () => {
    console.log('Server running on port', app.get('PORT'));
})
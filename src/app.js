const path = require('path');
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.resolve(__dirname, 'views'));

app.listen(app.get('port'), ()=> console.log('listening on port http://localhost:' + app.get('port')))
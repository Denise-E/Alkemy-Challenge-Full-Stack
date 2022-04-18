const path = require('path');
const method = require("method-override");
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs')

app.listen(app.get('port'), ()=> console.log('listening on port http://localhost:' + app.get('port')));

app.use(express.static(path.resolve(__dirname, "../public")));

app.use(express.urlencoded({extended:true}));
app.use(method("m"));

app.use(require('./routes/main.js'));
app.use('/operations', require('./routes/operations.js'));
app.use('/api', require('./routes/api.js'));
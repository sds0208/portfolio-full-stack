const express = require('express');
const app = express();

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/images', express.static(__dirname + 'public/images'));
                           
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

const aboutRouter = require('./routes/about');
const projectRouter = require('./routes/projects');

app.use('/about', aboutRouter);
app.use('/projects', projectRouter);


app.listen(3000);
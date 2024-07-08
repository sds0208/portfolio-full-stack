const express = require('express');
const app = express();
const experienceData = require('./data/experience');
const projectData = require('./data/projects');


app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/images', express.static(__dirname + 'public/images'));
app.use('/static', express.static(__dirname, + 'public/static'))
                           
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    experienceData: experienceData.experience,
    projectData: projectData.projects
  });
});

const aboutRouter = require('./routes/about');
const projectRouter = require('./routes/projects');

app.use('/about', aboutRouter);
app.use('/projects', projectRouter);


app.listen(3000);

process.on('SIGINT', () => process.exit(0));
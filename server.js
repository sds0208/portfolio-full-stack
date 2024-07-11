const express = require('express');
const app = express();
const experienceData = require('./data/experience');
const projectData = require('./data/projects');
const { createNewRow, addClick } = require('./db');

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/images', express.static(__dirname + 'public/images'));
app.use('/static', express.static(__dirname, + 'public/static'))

app.use(express.json());
                           
app.set('view engine', 'ejs');

// Analytics tracking variables
let viewId;
let clickNum = 1;

// Render content
app.get('/', (req, res) => {
  res.render('index', {
    experienceData: experienceData.experience,
    projectData: projectData.projects
  });
});

// Send page view to database
app.post('/analytics/view', async (req, res) => {
  try {
    viewId = await createNewRow();
    res.send('View count incremented');
  } catch (error) {
    console.error(error);
  }
});

// Send link clicks to database
app.post('/analytics/click', async (req, res) => {
  try {
    if (viewId && clickNum < 11 && req?.body?.text) {
      await addClick(viewId, clickNum, req.body.text);
      clickNum++;
      res.send('Click data sent');
    } else {
      res.send('Click data not sent. This could be due to a max number of clicks being reached.')
    }
  } catch (error) {
    console.error(error);
  }
});

app.listen(process.env.PORT || 3000);

process.on('SIGINT', () => process.exit(0));
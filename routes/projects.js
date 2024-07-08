const express = require('express');
const router = express.Router();
const projectData = require('../data/projects');

router.get('/', (req, res) => {
  res.render('projects', {projectData: projectData.projects});
});

// This will eventually pass dynamic data to a template
router.get('/:id', (req, res) => {
  res.send(`Get project with id ${req.params.id}`);
});

module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('projects');
});

// This will eventually pass dynamic data to a template
router.get('/:id', (req, res) => {
  res.send(`Get project with id ${req.params.id}`);
});

module.exports = router;
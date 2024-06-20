const express = require('express');
const app = express();
const multer = require('multer')

app.use(express.static('site')); 

app.listen(3000, () => {
  console.log('Server started on port 3000');
})
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config()
const app = express();

app.use(express.static('./public'));
app.use('/uploads', express.static('uploads'));

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB Connected'));

  mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`);
});

// midllewares
// app.use(morgan('dev'));
app.use(express.json());
app.use(
    express.urlencoded({
      extended: true
    })
);
  
app.use(cors());

app.use('/api', require('./routes/category.route'));

app.use((req, res) => {
    res.status(404).json({
        errors: "page not found"
    })
})

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
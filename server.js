const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');

const profile = require('./routes/api/profile');

dotenv.config({path: './config.env'});

const app = express();

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'));
}

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api/v1/profile', profile);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Express server running on port ${port} in ${process.env.NODE_ENV} mode`.rainbow.bold);
});
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

const { connectToDB } = require('./utils/db');

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use('/api', routes);
app.use(cors());


connectToDB()
  .then(() => {
    console.log('DB connected');
    app.listen(PORT, () => {
      console.log(`Server is listening on PORT: ${PORT}`);
    });
  })
  .catch(e => {
    console.log('DB connection failed');
    console.error(e.message);
    process.exit(1);
  });
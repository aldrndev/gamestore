if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors');
const router = require('./routers');
const mongoConnect = require('./config/connection');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(router);
app.use(errorHandler);

(async () => {
  try {
    await mongoConnect();
    app.listen(PORT, () => {
      console.log(`this server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log('Failed to connect to MongoDB:', error.message);
  }
})();

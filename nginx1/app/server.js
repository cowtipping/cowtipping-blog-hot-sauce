const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

const corsOptions = {
    origin: 'http://192.168.8.131',
    optionsSuccessStatus: 200,
  };

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    const shoppingList = [
      'Milk',
      'Bread',
      'Cheese',
      'Vegetables',
      'Fruits',
      'Cereal',
    ];
    res.send(shoppingList);
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
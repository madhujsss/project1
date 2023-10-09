const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'public, max-age=300'); // setting for five minutes
  next();
});


app.get('/api/restoData', async (req, res) => {
  try {
   
    const restoUrl = `https://run.mocky.io/v3/d30d6982-86f1-4d4e-a58f-777fe98e2b90`;
    const response = await axios.get(restoUrl, {
      headers: {
        'Content-Type': 'application/json', 
      },
    });
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching data from Swiggy API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/api/menuData', async (req, res) => {
  try {
   
    const menuUrl = `https://run.mocky.io/v3/08d67b2b-9184-439d-8add-620b003a4b4c`;
    const response = await axios.get(menuUrl, {
      headers: {
        'Content-Type': 'application/json', 
      },
    });
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching data from Swiggy API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/Cart', async (req, res) => {
  try {
   
    const menuUrl = `https://run.mocky.io/v3/09a0be59-7773-4ea9-975e-f9568185c739`;
    const response = await axios.get(menuUrl, {
      headers: {
        'Content-Type': 'application/json', 
      },
    });
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching data from Swiggy API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



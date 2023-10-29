const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const Razorpay = require("razorpay");
const instance = new Razorpay({
    key_id: 'rzp_test_ViJg2kp5UGJBLq',
    key_secret: '4WuKNfk47lfUIoSbUfYYB7qt',
});

app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'public, max-age=300'); 
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

app.post("/order", (req, res) => {

  const { amount } = req.body;
  try {
    const options = {
      amount: amount * 100, 
      currency: "INR",
      receipt: "receipt#1",
      payment_capture: 0,
 
    };
  instance.orders.create(options, async function (err, order) {
    if (err) {
      return res.status(500).json({
        message: "Something Went Wrong",
      });
    }
  return res.status(200).json(order);
 });
} catch (err) {
  return res.status(500).json({
    message: "Something Went Wrong",
  });
 }
});

app.post("/capture/:paymentId", (req, res) => {
  const { amount } = req.body;

  try {
    return request(
     {
     method: "POST",
     url: `https://rzp_test_ViJg2kp5UGJBLq:4WuKNfk47lfUIoSbUfYYB7qt@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
     form: {
        amount: amount * 100, 
        currency: "INR",
      },
    },
   async function (err, response, body) {
     if (err) {
      return res.status(500).json({
         message: "Something Went Wrong",
       }); 
     }
      console.log("Status:", response.statusCode);
      console.log("Headers:", JSON.stringify(response.headers));
      console.log("Response:", body);
      return res.status(200).json(body);
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong",
   });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



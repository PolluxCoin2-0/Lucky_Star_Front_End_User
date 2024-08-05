import express from 'express';
import axios from 'axios';

const app = express();
const port = 3001;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/proxy', async (req, res) => {
  const { today, yesterday } = req.query;
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/%5EBSESN?period1=${yesterday}&period2=${today}&interval=1m&includePrePost=true&events=div%7Csplit%7Cearn&&lang=en-US&region=US`;
  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});

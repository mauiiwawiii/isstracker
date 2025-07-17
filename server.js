const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (index.html, etc.)
app.use(express.static(path.join(__dirname)));

app.get('/api/iss', async (req, res) => {
  try {
    const response = await fetch('http://api.open-notify.org/iss-now.json');
    const data = await response.json();
    res.json({ position: data.iss_position, timestamp: data.timestamp });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch ISS data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

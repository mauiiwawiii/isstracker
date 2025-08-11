const express = require('express');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (index.html, etc.)
app.use(express.static(path.join(__dirname)));

// ISS API -> miles + mph (from WhereTheISS.at)
app.get('/api/iss', async (req, res) => {
  try {
    const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
    const data = await response.json();

    const kmToMiles = 0.621371;
    const latitude = data.latitude;
    const longitude = data.longitude;
    const altitude_mi = Number((data.altitude * kmToMiles).toFixed(2)); // km -> mi
    const speed_mph = Number((data.velocity * kmToMiles).toFixed(0));   // km/h -> mph

    res.json({
      latitude,
      longitude,
      altitude_mi,
      speed_mph,
      timestamp: Date.now()
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch ISS data' });
  }
});

// Healthcheck
app.get('/health', (req, res) => {
  res.type('text').send('ok');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

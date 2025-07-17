# ISS Tracker

Live full-stack web app showing the current location of the International Space Station (ISS) on an interactive map.

## Features

- Node.js + Express backend fetching live ISS coordinates from Open Notify API  
- REST API endpoint (`/api/iss`) serving ISS position data as JSON  
- Frontend map built with Leaflet.js displaying a custom ISS icon marker  
- Auto-updating ISS position every 5 seconds  
- Responsive UI with real-time latitude and longitude display  

## Tech Stack

- Node.js  
- Express  
- Leaflet.js  
- Open Notify API  

## How to Run Locally

1. Clone the repo  
2. Run `npm install`  
3. Start server with `node server.js`  
4. Open `index.html` in your browser  

## Live Demo

[https://isstracker-api.onrender.com](https://isstracker-api.onrender.com)

## What I Learned

- Working with asynchronous API calls in Node.js  
- Serving static files alongside API routes  
- Integrating third-party APIs with frontend maps  
- Deploying fullstack apps on Render  

## Future Improvements

- Add 3D globe visualization  
- Show ISS trajectory path  
- Include countdown timer for next ISS pass over user location  

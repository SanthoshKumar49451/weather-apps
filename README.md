# Weather Web Application

A responsive full-stack weather application built with Next.js, Tailwind CSS, and Express.js. The app fetches and displays real-time weather data based on the user's current location or searched cities.

Live Demo: https://weather-apps-plum-one.vercel.app/

---

## Tech Stack

Frontend:
- Next.js
- Tailwind CSS

Backend:
- Node.js
- Express.js

API:
- OpenWeatherMap or WeatherAPI

Deployment:
- Vercel, Railway, or Render

---

## Pages

Home Page
- Displays current weather for the user’s location using geolocation
- Search bar to find weather in other cities

Search History Page
- Shows a list of all searched cities (persisted via localStorage or database)
- Clicking a city displays its weather

Weather Details Page
- Detailed weather information for a selected city
  - Temperature
  - Humidity
  - Wind
  - Conditions
  - Other metrics

About Page
- Information about the app, APIs used, and how weather data is fetched

---

## Backend API Endpoints

- GET /api/weather?city=XYZ → Returns weather data for a given city
- GET /api/weather/current → Returns weather data based on user’s coordinates
- POST /api/search → Logs the searched city
- GET /api/searches → Retrieves previously searched cities

---

## Features

- Real-time weather updates
- Search for any city
- Persistent search history using localStorage or backend database
- Fully responsive design using Tailwind CSS
- Client-friendly toast notifications for errors

---

## Installation

1. Clone the repository
git clone https://github.com/SanthoshKumar49451/weather-apps.git

2. Install dependencies
cd weather-apps
npm install



3. Create a `.env` file and add your API key
WEATHER_API_KEY=YOUR_API_KEY



4. Run the app
npm run dev

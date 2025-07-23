# HARMONIA – Emotion-Aware Music Recommendation System

**Harmonia** is a modern web-based music recommendation platform that uses facial emotion recognition and machine learning techniques to generate personalized playlists. Integrated with the Spotify API, it delivers mood-adaptive music experiences through a sleek and responsive interface.

---

## Key Features

- Emotion Detection: Detects facial expressions in real time (e.g., happy, sad, neutral) using webcam and face-api.js
- Mood-Based Playlists: Generates playlists aligned with the user's emotional state
- Smart Search: Dynamic filtering to search songs by name, genre, or artist
- Listening Insights: Provides daily emotional and listening pattern summaries
- Secure Spotify Integration: Authenticated playback, playlist creation, and account control
- Responsive UI: Built with React and Tailwind CSS for a seamless cross-device experience

---

## Tech Stack

| Layer        | Technology |
|--------------|------------|
| Frontend     | HTML, CSS, JavaScript, React.js, Tailwind CSS, framer-motion |
| Backend      | React (Logic Layer), JavaScript |
| API          | Spotify Web API |
| Emotion Detection | face-api.js, Webcam API |

---

## Project Objectives

- Deliver a personalized music experience based on real-time emotional analysis
- Reduce decision fatigue in music discovery
- Integrate Spotify’s ecosystem to provide playback control and recommendation management
- Offer a visually immersive and emotionally intelligent user interface

---

## User Interface Overview

- Home Page: Grid of personalized track recommendations
- Emotion Detection Module: Real-time webcam-based mood analysis
- Playlist Page: Mood-adaptive playlists generated via Spotify API
- Search Page: Instant song/artist lookup with intelligent filtering
- Emotion History Log: Visual timeline of user’s detected emotions

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Deo275/harmonia.git
cd harmonia

# Install dependencies
npm install

# Run the app
npm start

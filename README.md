# YouTube Clone - React + TypeScript + MUI

A responsive YouTube-style homepage built using React, TypeScript, Material UI (MUI), and Vite.  
This application fetches real-time video and shorts data from the YouTube Data API v3 and simulates a simplified YouTube UI.

---

## Features

- Video grid showing recommended videos
- Shorts section with horizontal scrolling
- Functional search bar with real-time results
- Responsive layout using Material UI
- Sidebar navigation

---

## Technologies Used

- React 18
- TypeScript
- Vite
- Material UI (MUI v5)
- YouTube Data API v3

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/youtube-clone.git
cd youtube-clone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root of the project:

```
VITE_YOUTUBE_API_KEY=your_youtube_api_key_here
```

Get your API key from: https://console.cloud.google.com/

---

## Running the Project Locally

```bash
npm run dev
```

Visit: http://localhost:5173

---

## Folder Structure

```
src/
├── components/       # Navbar, Sidebar, VideoCard, ShortsCard
├── pages/            # Home page layout
├── services/         # API interaction logic
├── App.tsx
├── main.tsx
└── ...
```

---

## Deployment

To create a production build:

```bash
npm run build
```

You can then deploy the output in the `dist/` folder to Netlify, Vercel, or GitHub Pages.

---

## License

This project is licensed under the MIT License.

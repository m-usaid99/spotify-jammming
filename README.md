# JAMMMING

<!--toc:start-->

- [JAMMMING](#jammming)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Setup and Installation](#setup-and-installation)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Screenshots](#screenshots)
  - [Deployment](#deployment)
  - [Contributing](#contributing)
  <!--toc:end-->

## Introduction

_jammming_ is a web application that allows users to connect to Spotify, search for
songs, create custom playlists, and save them directly to their Spotify account
It utilizes the Spotify API to fetch music data and enables seamless playlist management.

## Features

- **Search Functionality**: Search for tracks using the Spotify AP, and preview tracks as well.
- **Playlist Management**: Create and customize playlists.
- **Spotify Integration**: Login to Spotify using secure OAuth, and save your playlists directly to Spotify.
- **Responsive Design**: Fully Responsive and mobile-friendly interface.

## Technologies Used

- **_Frontend_**: React, JavaScript, HTML5, CSS + Emotion
- **_API_**: Spotify Web API
- **_Authentication_**: OAuth 2.0 with Spotify
- **_Deployment_**: Vercel

## Setup and Installation

### Prerequisites

- npm & Node.js
- Spotify Developer Account

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/m-usaid99/spotify-jammming.git
   cd spotify-jammming
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a Spotify Developer Account
   - Visit the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
   - Obtain your Client ID and Client Secret
4. Set Up Environment Variables:

   - Create a `.env` file in the root directory.
   - Add your Spotify credentials:

   ```env
   REACT_APP_SPOTIFY_CLIENT_ID=your_client_id
   REACT_APP_SPOTIFY_REDIRECT_URI=http://localhost:3000/callback
   ```

5. Start the application

   ```bash
   npm start
   ```

## Usage

1. Authenticate With Spotify
   - If you are not logged into Spotify on your browser, you will be automatically rerouted to Spotify's OAuth dialog to authenticate your account.
   - Once you log in, you will remain logged in until you press the "Logout" button.
2. Search For Songs
   - Use the search bar to find songs by title, artist, or album.
   - Feel free to preview the track by pressing the play button in the search result.
3. Create and Save a Playlist
   - Add selected songs to your playlist.
   - Name your playlist and save it to your Spotify account.

## Screenshots

## Deployment

The application is deployed on Vercel. You can access and use the working live version [here](https://spotify-jammming.vercel.app).

## Contributing

Contributions, issues, and feature requests are welcome! To contribute:

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m "Add some feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

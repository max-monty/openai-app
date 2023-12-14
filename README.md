# OpenAI-App

This project is a minimalist boilerplate full-stack chatbot web app with a React frontend in the `client` directory and a Node.js/Express backend in the `server` directory using the OpenAI API.

## Prerequisites

- Node.js and npm (Node Package Manager)
- An OpenAI API key (ensure this is set in your server's `.env` file or .bash_profile/.zshrc - see [OpenAI QuickStart Guide](https://platform.openai.com/docs/quickstart?context=node))

## Setup and Running the Application

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/max-monty/openai-app.git
cd web-app
```

### Backend Setup

Navigate to the server directory, install dependencies, and start the server:

```bash
cd server
npm install
npm start
```

The server will start on http://localhost:3001

### Frontend Setup

Open a new terminal window. Navigate to the client directory, install dependencies, and start the React app:

```bash
cd client
npm install
npm start
```

The React application will run on http://localhost:3000

### Accessing the Application

Open your browser and go to http://localhost:3000 to view and interact with the React frontend.

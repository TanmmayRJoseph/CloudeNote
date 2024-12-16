# CloudeNote - MERN Stack Notes Application

CloudeNote is a note-taking application built using the **MERN stack** (MongoDB, Express.js, React, Node.js). This project allows users to create, view, update, and delete notes. The app features a responsive and modern user interface to manage your notes seamlessly.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Create Notes**: Easily add new notes through the user-friendly interface.
- **View Notes**: All saved notes are displayed on the homepage.
- **Edit Notes**: Update the content of existing notes.
- **Delete Notes**: Remove notes you no longer need.
- **CRUD Operations**: Perform Create, Read, Update, and Delete actions on your notes.

## Technologies Used

- **Frontend**:
  - React.js (UI Library)
  - React Router (Navigation)
  - Tailwind CSS (Styling)
  
- **Backend**:
  - Node.js (Runtime)
  - Express.js (API Server)
  - MongoDB (Database)
  - MongoDB Atlas (Cloud Database)

- **Others**:
  - Axios (HTTP Client)
  - dotenv (Environment Variables)

## Installation

To get started with the project, follow these steps:

### Backend Setup (Server)

1. **Clone the repository**:
   ```bash
   git clone https://github.com/TanmmayRJoseph/CloudeNote.git

Navigate to the Server folder:

bash
Copy code
cd CloudeNote/Server
Install the backend dependencies:

bash
Copy code
npm install
Set up Environment Variables:

Create a .env file in the Server directory.
Add your MongoDB connection string:
env
Copy code
MONGO_URI=your_mongodb_connection_string
Start the backend server:

bash
Copy code
npm start
The server should now be running on http://localhost:5000 (default).

Frontend Setup (Client)
Navigate to the Client folder:

bash
Copy code
cd ../Client
Install the frontend dependencies:

bash
Copy code
npm install
Start the frontend development server:

bash
Copy code
npm start
The React app should now be running on http://localhost:3000.

Note:
Make sure your backend server is running before starting the frontend server to avoid any connection issues between the client and server.

Usage
Once the servers are up and running, open your browser and go to http://localhost:3000 to interact with the CloudeNote app. Here you can:

Create, view, and edit notes on the homepage.
Delete any notes you no longer need.
The app automatically syncs with the backend and stores your notes in MongoDB.
Contributing
Fork the repository.
Create a new branch (git checkout -b feature-name).
Make your changes and ensure everything works.
Commit your changes (git commit -am 'Add new feature').
Push your changes to the branch (git push origin feature-name).
Create a pull request to merge your changes.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
If you have any questions or suggestions, feel free to reach out to me:

Thank you for checking out CloudeNote! Happy coding! 🚀

vbnet
Copy code

### Explanation:
This README now includes everything you asked for, including step-by-step backend and fronte


Email: tanmmayrj@gmail.com
GitHub: TanmmayRJoseph
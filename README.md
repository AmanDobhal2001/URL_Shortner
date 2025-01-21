# URL Shortener

This project is a **URL Shortener** application that allows users to shorten long URLs into concise, manageable links. Built with a modern tech stack, this application is designed for simplicity, reliability, and seamless user experience.

## Features
- User Authentication (Signup/Login)
- URL shortening functionality
- Persistent storage of shortened URLs
- User-friendly interface
- Logout functionality with conditional rendering

## Tech Stack
- **Frontend**: React.js, Tailwind CSS, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Routing**: React Router

## Project Structure
```
URL_Shortener/
├── src/
│   ├── components/
│   │   ├── Header.jsx       // Navbar component with logout functionality
│   │   ├── Body.jsx         // Main content of the app
│   │   ├── login.jsx        // Login page
│   │   ├── signup.jsx       // Signup page
│   ├── App.jsx              // Main application file
│   ├── index.js             // Entry point of the app
├── package.json             // Project dependencies
├── README.md                // Project documentation
```

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/AmanDobhal2001/URL_Shortner.git
   ```
2. Navigate to the project directory:
   ```bash
   cd URL_Shortner
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and navigate to `http://localhost:3000`.

## API Endpoints
- **POST /api/login**: Authenticates the user and returns a token.
- **POST /api/signup**: Registers a new user.
- **POST /api/shortid**: Shortens a given URL.
- **GET /api/**: Fetches all URLs for the logged-in user.

## Usage
- **Login/Signup**: Access the app by creating an account or logging in.
- **Shorten URLs**: Paste a long URL into the input field to receive a shortened link.
- **Logout**: Log out of the application using the "Logout" button in the Navbar.

## Screenshots
  **Login Page**:
   A simple and intuitive login page for user authentication.


## Contributions
Contributions are welcome! Feel free to fork this repository, create a new branch, and submit a pull request.

## Contact
For any queries or suggestions, contact [Aman Dobhal](https://github.com/AmanDobhal2001).

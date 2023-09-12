# Highground Email-based management system

## Table of Contents

- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)


## About

This project is a PERN (PostgreSQL, Express, React, Node.js) application that
 allows users to book a specific date in Lake Maragang and receive email notifications for their bookings

## Features

- User registration and login
- Email Confirmation(nodemailer)
- Password encryption using bcrypt
- JSON Web Token (JWT) based authentication
- API rate limiting using Express middleware

## Getting Started

To get started with this project, you need to have Node.js and npm (Node Package Manager) installed on your system.

## Prerequisites

- Node.js (version 18.14.2)
- npm (version 9.8.1)
- PostgreSQL (version 15.2)

## Installation

1. Clone this repository:

git clone https://github.com/WoodWalkerr/st-highground-app.git


2. Change into the project directory:

cd frontend
cd server


3. Install dependencies:

npm install


4. Set up the database (if not already done) and update the database connection configuration in `db.js`.

5. Start the server:
npm run dev


## Usage

Once the server is running, you can access the API endpoints using tools like cURL or Postman.

## Contributing

If you find any issues or want to suggest new features, feel free to open an issue or create a pull request.

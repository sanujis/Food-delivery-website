# Food Delivery Website

## 📚 Overview

This project is a full-stack food delivery website built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides a platform for users to browse restaurants, view menus, place orders, and manage their accounts. The website also includes an admin panel for managing users, orders, and restaurant listings.

## 🛠 Technologies Used

* **Frontend**: React.js, HTML, CSS
* **Backend**: Node.js, Express.js
* **Database**: MongoDB
* **Authentication**: JWT (JSON Web Tokens)

## 🧩 Features

* **User Authentication**: Secure login and registration with JWT.
* **Restaurant Listings**: Browse and search for restaurants.
* **Menu Display**: View detailed menus with item descriptions and prices.
* **Order Management**: Add items to the cart, place orders, and track order status.
* **Admin Panel**: Manage users, orders, and restaurant listings.

## 🚀 Getting Started

### Prerequisites

* Node.js and npm installed
* MongoDB database set up

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sanujis/Food-delivery-website.git
   cd Food-delivery-website
   ```

2. Install backend dependencies:

   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:

   ```bash
   cd frontend
   npm install
   ```

4. Set up environment variables:

   * Create a `.env` file in the `backend` directory.
   * Add the following variables:

     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     PORT=port_number
     ```

5. Run the application:

   * Start the backend server:

     ```bash
     cd backend
     npm start
     ```

   * Start the frontend development server:

     ```bash
     cd frontend
     npm start
     ```

   The application should now be running at `http://localhost:PORT`, where PORT is the value you set in your .env file.

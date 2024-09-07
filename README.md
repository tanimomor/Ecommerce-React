# E-Commerce WebApp

You can view the live version of the application [here](https://ecommerce-react-mocha-gamma.vercel.app).

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This is an E-Commerce Web Application built with React and Context API on the frontend, and Local Storage for managing user authentication and cart state. The application allows users to browse products, manage their shopping cart, and securely sign in and sign up.

## Features
- **User Authentication:** Secure user sign-up, sign-in, and logout functionality.
- **Product Listing:** View a list of products with detailed descriptions.
- **Cart Management:** Add products to the cart, update quantities, and remove products.
- **Protected Routes:** Prevents unauthenticated access to specific pages, redirecting users to the login page.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **React Router**: For handling navigation and routing within the app.
- **Context API**: For state management across the application.
- **Tailwind CSS**: For styling and responsive design.
- **Local Storage**: To persist user authentication and cart data across sessions.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/e-commerce-webapp.git
   cd e-commerce-webapp

2. **Install dependencies::**
   ```bash
    npm install

3. **Start the development server:**
   ```bash
   npm run dev

## Usage
### Sign Up & Sign In
- **Sign Up**: Create a new account by providing an email and password.
- **Sign In**: Log in to the app with your registered credentials.
### Product Browsing & Cart Management
- **Browse Products**: View a list of available products.
- **Add to Cart**: Add products to your cart.
- **View Cart**: Navigate to the cart to view and manage your selected items.
- **Checkout**: Proceed to checkout (functionality to be implemented).


## Protected Routes

- Certain routes like the cart page are protected and require the user to be logged in. If not authenticated, the user will be redirected to the login page.


## Contributing

Contributions are welcome! If you would like to contribute, please fork the repository and use a feature branch. Pull requests are encouraged.

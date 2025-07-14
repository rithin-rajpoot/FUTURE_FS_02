# EliteShop – Mini E-commerce Platform

EliteShop is a modern, responsive e-commerce web application built with React, Vite, and Tailwind CSS. It features a clean UI, product catalog, shopping cart, checkout, authentication, and order history, all managed on the client side.

## Features

- Browse a catalog of premium products by category
- Search and filter products
- Add/remove products to/from the shopping cart
- User authentication (register, login, logout)
- Checkout with form validation (simulated payment)
- Order history for logged-in users
- Responsive design for desktop and mobile
- Persistent cart and user data using localStorage
- Built with React, React Router, Tailwind CSS, and Vite

## Demo Credentials
- You can use any email and password to sign in or register (no backend, all data is local).

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd ecommerceWebsite
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the App

- **Development mode:**
  ```bash
  npm run dev
  ```
  The app will be available at [http://localhost:5173](http://localhost:5173) by default.

- **Production build:**
  ```bash
  npm run build
  npm run preview
  ```

### Linting

- To check code style and lint errors:
  ```bash
  npm run lint
  ```

## Project Structure

```
├── src/
│   ├── components/         # Reusable UI components (Header, Footer, ProductCard, etc.)
│   ├── context/            # React Context for Auth and Cart
│   ├── data/               # Static product data
│   ├── pages/              # Main pages (Home, Products, Cart, Checkout, etc.)
│   ├── index.css           # Tailwind CSS imports
│   ├── App.jsx             # Main app component with routing
│   └── main.jsx            # Entry point
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Configuration
- No environment variables are required for this project.
- All data (cart, user, orders) is stored in the browser's localStorage.
- Tailwind CSS and PostCSS are pre-configured.

## Customization
- To add or edit products, modify `src/data/products.js`.
- To change branding, update the `Header`, `Footer`, and `Home` components.

## License

This project is for educational/demo purposes. Please add a license if you plan to use it in production. 

# React Single Responsibility Principle Demo

This project is a demonstration of the Single Responsibility Principle (SRP) applied to a React application. It showcases a simple product listing application with filtering functionality based on product ratings.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm.
- You have a basic understanding of React and TypeScript.

### Installing

1. Clone the repo

```bash
git clone https://github.com/adeeshsharma/SRP-REACT-DEMO.git
```

2. Navigate into the project directory

```bash
cd SRP-REACT-DEMO
```

3. Install the dependencies

```bash
yarn
```

### Running the application

Start the development server with:

```bash
yarn dev
```

## Project Structure

The main files in the project are located in the src directory:

- components/product.tsx: Displays individual product details.
- components/filter.tsx: Provides a filter by rating functionality.
- hooks/useProducts.tsx: Custom hook for fetching and managing product data.
- hooks/useRateFilter.tsx: Custom hook for managing the state of the rating filter.
- pages/good-approach.tsx: The main page that integrates all the components and hooks to showcase the SRP approach.

## Acknowledgments

This project uses the Fake Store API for product data.

- https://fakestoreapi.com/

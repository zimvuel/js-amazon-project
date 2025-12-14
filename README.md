# JavaScript Amazon Project

A simple e-commerce practice project that mimics the basic flow of Amazon. It uses vanilla JavaScript to handle products, the shopping cart, and a simulated checkout process.

## Features
* **Product Grid:** Fetches product data from an external test API and displays them.
* **Cart System:** Add items, update quantities, and remove items. Data is saved in `localStorage`.
* **Checkout:** Calculates totals, shipping, and tax.
* **Order Simulation:** "Placing an order" sends data to a test backend and saves the record locally.

## Limitations
* **No Real Payments:** The checkout process is a simulation; no actual transactions occur.
* **Test Backend:** Data is fetched from `supersimplebackend.dev`, so you cannot add new products to the database permanently.
* **Static Tracking:** The tracking page provides a visual layout but simulates package status based on hardcoded logic or test data.

## How to Run
1.  Download the files.
2.  Open `amazon.html` in your web browser.
3.  For the best experience run it using a local server (Live Server).

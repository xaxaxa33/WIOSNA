# WIOSNA Random Number Generator

Simple web application that generates 6 unique random numbers from the range 1–49.  
The application allows the user to draw numbers step by step and reset the drawing process at any time.

---

## Description

This project is a simple frontend application built with HTML, CSS and JavaScript.  
It allows users to generate a set of six unique random numbers.

The user draws numbers by clicking the "Dodaj liczbę" button. Each generated number is displayed on the screen in the order it was drawn. The application ensures that numbers do not repeat within a single session.

After six numbers have been generated, the application blocks further drawing until the user resets the state using the "Wyczyść" button.

---

## Features

- Random number generation
- Numbers generated from range 1–49
- Maximum 6 numbers per session
- Numbers must be unique
- Counter showing how many numbers are left to draw
- Reset functionality
- Responsive layout for desktop and mobile devices

---

## Application Logic

### Initial State

- No numbers drawn
- Counter shows 6 numbers remaining
- "Dodaj liczbę" button is active

### Drawing Numbers

When the user clicks "Dodaj liczbę":

- A random number between 1 and 49 is generated
- The application checks if the number is unique
- The number is added to the list
- The remaining counter decreases by 1

### After Drawing 6 Numbers

- The counter shows 0
- The draw button becomes disabled

### Reset

When the user clicks "Wyczyść":

- All numbers are removed
- The counter resets to 6
- The draw button becomes active again

---

## Technologies

- HTML5 – structure of the page
- CSS3 – styling and responsive layout
- JavaScript (ES6) – application logic

The application runs entirely in the browser and does not require a backend or database.

---

## Project Structure

```
project-folder
│
├── index.html
├── styles.css
├── app.js
└── README.md
```

---

## Authors

Jan Szwarc, Tymon Jaszke
# INTERACTIVE WEB ELEMENTS

A simple interactive webpage built using **HTML, CSS, and JavaScript** to demonstrate how JavaScript can make a webpage dynamic and interactive.

## 📌 About

This project demonstrates different interactive web elements such as buttons, toggles, dynamic text updates, and theme switching.

It was created to practice **JavaScript DOM manipulation**, event handling, CSS styling, and responsive web design.

## ✨ Features

* 🌙 Dark Mode / Light Mode
* 🔘 Interactive buttons
* 🔄 Dynamic content updates
* 👁️ Show and hide content
* 🎲 Random text generation
* 📱 Responsive design
* 🎨 Modern user interface
* ⚡ Instant webpage updates using JavaScript

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* DOM Manipulation

## 🎯 Interactive Features

### 1. Click Me

The **Click Me** button changes the content displayed in the dynamic content area.

### 2. Toggle Content

The **Toggle Content** button shows or hides the dynamic content.

### 3. Update Text

The **Update Text** button displays a randomly selected message from a predefined list.

### 4. Dark Mode

The **Dark Mode** button changes the webpage between light and dark themes.

When dark mode is enabled, the button changes to **Light Mode**.

## 📂 Project Structure

```text
INTERACTIVE_WEB_ELEMENTS/
│
├── index.html
├── styles.css
└── script.js
```

## 💻 How It Works

JavaScript is used to detect button clicks and modify webpage elements.

### DOM Manipulation

The project uses:

```javascript
document.getElementById()
document.querySelector()
```

to select and update HTML elements.

### Event Handling

Buttons use JavaScript functions to respond to user interactions.

### Theme Switching

Dark mode is created by adding or removing a CSS class from the `<body>` element.

```javascript
document.body.classList.toggle("dark");
```

### Dynamic Text

JavaScript selects a random message from an array and displays it on the webpage.

## 📱 Responsive Design

The webpage includes responsive CSS using a media query so that the layout adapts to smaller screens such as tablets and mobile devices.

## 📚 Learning Objectives

This project helps practice:

* HTML page structure
* CSS styling
* CSS Flexbox
* Responsive design
* JavaScript functions
* DOM manipulation
* Event handling
* Conditional statements
* Arrays
* Random number generation
* CSS classes
* Theme switching

## 🚀 How to Run

1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in your browser.
4. Click the buttons to interact with the webpage.

No additional libraries or frameworks are required.

## 🔮 Future Improvements

Possible improvements include:

* Add more interactive components
* Add animations and transitions
* Add a navigation menu
* Add interactive forms
* Add local storage for theme preferences
* Add more themes
* Add keyboard interactions

## 👩‍💻 Author

**Talal Ahmed**

## ⭐ Note

This project was created for learning and practicing **HTML, CSS, and JavaScript interactivity**.

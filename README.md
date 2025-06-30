
# Etch-A-Sketch Project

## Introduction

In this project, you’ll be creating a pretty neat toy to flex your **DOM manipulation** skills. You’re going to build a **browser version of something between a sketchpad and an Etch-A-Sketch**.

> ⚠️ This project should **not** be easy. You’ll probably have to Google frequently to find the right JavaScript methods and CSS to use – in fact, **that’s the point**! You *can* build this using the tools you’ve already learned.

There are plenty of resources online if you get stuck. We’ll walk you through the steps, but it's up to you to implement them.

If you need help, you can ask in the [Discord server](https://discord.com).

---

## Assignment

### 1. Set up your GitHub Repository

Follow the instructions on [setting up your project’s GitHub repository](https://github.com).

### 2. Create a 16×16 Grid of Square Divs

* Create the divs using **JavaScript** – don’t copy-paste them in HTML.
* Nest the squares inside a `container` div (this one can go in the HTML file).
* Use **Flexbox** to display them in a grid (not CSS Grid).
* Borders and margins may affect size – be cautious.

**Troubleshooting tips:**

* ✅ Is your CSS stylesheet linked?
* ✅ Open dev tools → console for JavaScript errors.
* ✅ Check the “elements” tab to see if divs are created but hidden.
* ✅ Add `console.log()` statements to debug.

### 3. Add Hover Effect

Create a hover effect so that when the mouse passes over a square, it changes color like a pixelated trail.

💡 **Hint:** Use `mouseenter` or `mouseover` event listeners.

Ways to change color:

* Add a new class to the div.
* Change the background color via JavaScript.

### 4. Add a Reset Button

Add a button that:

* Asks the user for the number of squares per side (max 100).
* Clears the current grid and generates a new one.
* Maintains total grid width (e.g., 960px).

🔹 **Tip:** Use:

* `<button>` tag to trigger action.
* `prompt()` to get input.

Example: Input `64` → creates a 64×64 grid in the same space.

### 5. Push to GitHub

Make sure your final version is pushed to your GitHub repository.

---

## Extra Credit

Transform grid behavior with advanced features:

### 1. Random RGB Coloring

Change square color to a random RGB value on each hover.

### 2. Progressive Darkening

Each interaction darkens the square by **10%**. After 10 passes, it should be completely black.

💡 **Hint:** Use the CSS `opacity` property.
See: [MDN: Opacity CSS Property](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)

---

You can implement either one or both extra credit features. It’s your choice!


# JS Bootcamp Working Files

Course: [Modern JavaScript Bootcamp (2018)](https://www.udemy.com/modern-javascript/learn/v4/content)

This is an up-to-date course with ES6.

The instructor uses VS Code as his editor. I tried it and did not like it, so I used Atom instead. This course is very good and well organized. Really starts at the beginning. Suitable for non-coders who are just starting out.

## Basics

Node is installed. The course is in the console throughout these first sections:

1. basics: variables, strings, numbers, Booleans, scope
2. functions: arguments, returns, null and undefined, more scope
3. objects: very basic; includes string and number methods, some Math; `objects-methods.js` shows several methods in an object
4. arrays: overlap with objects; for and forEach loops

## HTML and the DOM (JavaScript in the Browser)

Now we leave the console and start manipulating the DOM. We install live-server:

```bash
npm install -g live-server
```

1. notes-app: In `notes-app1.js` I listed a lot of JS commands he did not cover right away, because I was looking up jQuery equivalents. These are in a large comment at the end of the file.
2. todo-app: Instead of deleting early code, I saved it in `first-file.html` and `todo-app1.js`.

I'm doing things that in the past I have done only with jQuery. No jQuery here.

* Add or remove elements, content of elements
* Event listeners

```javascript
document.querySelector('button').addEventListener();
document.querySelectorAll('button')[0].addEventListener();
// by ID - no need for .getElementById()
document.querySelector('#unique-thing').addEventListener();
// by class - no need for .getElementsByClassName()
document.querySelectorAll('.many-things').addEventListener();
```

* Using `button` and `input` elements with JS
* Types of event: `click`, `change`, `input`


## Highlights of This Instructor's Style

I love the way this instructor keeps referring to the **MDN documentation.** This would be perfect training for beginners.

His explanation of an **empty element** &mdash; using `input` as the example, and showing [MDN's empty element page](https://developer.mozilla.org/en-US/docs/Glossary/Empty_element) &mdash; was very good (section 7, lecture 55).

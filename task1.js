// * HTML References
const number = document.getElementById("number"); // ? Reference to the html element with id number
const buttons = document.querySelectorAll("button"); // ? Reference to all html button elements

// * NOTE: I changed btn to buttons to add a more meaningful name as this reference contains an array of node elements | html elements
// * Your not wrong if you use btn but to write meaningful code makes a better coder
// console.log(buttons);

// * Variables
let counter = 0; // ? Initializing count to 0

// * Event Listeners
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const list = e.currentTarget.classList; // * Nothing wrong, just wanted to say: Broooo this is a pretty good abstraction 👏🏼👏🏼👏🏼👏🏼👏🏼
    if (list.contains("btnDecrease")) {
      counter--;
    } else if (list.contains("btnIncrease")) {
      counter++;
    } else if (list.contains("btnReset")) {
      counter = 0;
    } else if (list.contains("btnDecreaseBy2")) {
      counter = counter - 2;
    } else if (list.contains("btnIncreaseBy2")) {
      counter = counter + 2;
    }

    number.textContent = counter;
  });
});

// * Reminder: If your going to try another approach you must commit the last used
// ? Another Approach - using callbacks | arrow functions instead of simple anonymous functions and object destructuring to take the currentTarget property of the event object directly
// buttons.forEach((button) => {
//   button.addEventListener("click", ({ currentTarget }) => {
//     const btn = currentTarget.classList;
//     if (btn.contains("btnDecrease")) {
//       counter--;
//     } else if (btn.contains("btnIncrease")) {
//       counter++;
//     } else if (btn.contains("btnReset")) {
//       counter = 0;
//     } else if (btn.contains("btnDecreaseBy2")) {
//       counter = counter - 2;
//     } else if (btn.contains("btnIncreaseBy2")) {
//       counter = counter + 2;
//     }

//     number.textContent = counter;
//   });
// });

// * Reminder: If your going to try another approach you must commit the last used
// ? Less Verbose Approach - using callbacks | arrow functions instead of simple anonymous functions and object destructuring to take the currentTarget property of the event object directly and the conditional ternary operator
// * NOTE: Using the conditional ternary operator is not always the best approach for readability

// buttons.forEach((button) => {
//   button.addEventListener("click", ({ currentTarget }) => {
//     const btn = currentTarget.classList;
//     btn.contains("btnDecrease")
//       ? counter--
//       : btn.contains("btnIncrease")
//       ? counter++
//       : btn.contains("btnReset")
//       ? (counter = 0)
//       : btn.contains("btnDecreaseBy2")
//       ? (counter = counter - 2)
//       : btn.contains("btnIncreaseBy2")
//       ? (counter = counter + 2)
//       : 0;

//     number.textContent = counter;
//   });
// });

// * Reminder: If your going to try another approach you must commit the last used
// ? Divide and Conquer Approach - Use to make scalable projects
// const handleControlInteractions = ({ currentTarget }) => {
//   const btn = currentTarget.classList;
//   btn.contains("btnDecrease")
//     ? counter--
//     : btn.contains("btnIncrease")
//     ? counter++
//     : btn.contains("btnReset")
//     ? (counter = 0)
//     : btn.contains("btnDecreaseBy2")
//     ? (counter = counter - 2)
//     : btn.contains("btnIncreaseBy2")
//     ? (counter = counter + 2)
//     : 0;

//   number.textContent = counter;
// };

// * Event Listeners
// buttons.forEach((button) => {
//   button.addEventListener("click", handleControlInteractions);
// });

// ? Divide and Conquer Approach -- Deeper - Use to make scalable projects
// * For this approach you should use NodeJS you can try yourself by making a module to encapsulate the logic to control the buttons

// let container = document.getElementById("listContainer");

// let ul = document.createElement("ul");

// for (let i = 1; i <= 10; i++) {
//   const li = document.createElement("li");
//   li.textContent = i;
//   ul.append(li);
// }
// container.append(ul);

//
//2
// let listItems = document.querySelectorAll("#numbers li");

// listItems.forEach((item) => {
//   const number = parseInt(item.textContent, 10);

//   if (number % 2 === 0) {
//     item.classList.add("even");
//   } else {
//     item.classList.add("odd");
//   }
// });
//
//
//...3

const names = ["Ali", "Vali", "Olim", "Zaynab", "Laylo"];

const container = document.querySelector("#namesContainer");

names.forEach((name) => {
  const p = document.createElement("p");
  p.textContent = name;
  container.prepend(p);
});

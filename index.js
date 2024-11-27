// const friends = ["Mango", "Poly", "Ajax", "Kiwi"];
// let string = "";

// for (let i = 0; i < 4; i++) {
//   string = string + friends[i] + ", ";
// }
// console.log(string);

// console.log(friends.join(", "));

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

cards.splice(2, 1);
console.log(cards);

cards.splice(5, 0, "Карточка-6");
console.log(cards);

cards.splice(2, 1, "Карточка-4");
console.log(cards);

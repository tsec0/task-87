import "../scss/app.scss";
const R = require("ramda");
// const { pluck } = R;
// import * as R from 'ramda';

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const arrayToPluck = [
    { name: "John", class: "is-primary" },
    { age: 23, class: "is-warning" },
    { job: "programmer", class: "is-danger" },
  ];
  const articles = document.querySelectorAll("article");
  const arr_plucked = R.pluck('class', arrayToPluck);
  
  for (let index = 0; index < articles.length; index++) {
    articles[index].classList.add(arr_plucked[index]);
  }
});

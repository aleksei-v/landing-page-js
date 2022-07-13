const body = document.querySelector("body");

//creating
const main = document.createElement("main");
const title = document.createElement("h1");
const figure = document.createElement("figure");
const image = document.createElement("img");
const figcaption = document.createElement("figcaption");
//add atr
main.id = "main";
title.id = "title";
figure.id = "img-div";
image.id = "image";
image.src = "https://picsum.photos/id/237/200/30";
image.alt = "random page";
figcaption.id = "img-caption";

//add textContent
title.textContent = "- Michel Legrand -";
figcaption.textContent = "Michel Legrand conducting his orcherstra.";
//run to DOM
body.prepend(main);
main.append(title);
main.append(figure);
figure.append(image);
figure.append(figcaption);


const article = `  <article id="tribute-info">
        <div id="intro"><p>&bull; Michel Legrand (1932 - 2019) was a famous French musician. &bull;</p></div>
        <p><u>Here are some major facts about him:</u></p>
        <p>
          <ul>
          </ul>
      </p>
        <blockquote id="quote">
          <p>Writing is a mental thing, while playing is essentially a physical feeling.</p>
          <cite>-- Michel Legrand</cite>
        </blockquote>
        <hr>
        <p>To find out more about him, feel free to have a look at his biography on <a id="tribute-link" href="https://en.wikipedia.org/wiki/Michel_Legrand" target="_blank">Wikipedia</a>.</p>
      </article>`;
main.insertAdjacentHTML("beforeend", article);

const ul = document.querySelector("ul")

const facts = [
  "He was born in Paris, France on February 24<sup>th</sup>, 1932.",
  "His father was himself a conductor and composer, and his mother, who was Armenian, was the sister of a conductor.",
  "His sister was a Soprano and a member of the Swingle Singers.",
  "Along his career, he composed more than two hundred film and television scores.",
  "He was also a Jazz player and worked with giants like Miles Davis or Stan Getz.",
  "He won a huge amount of awards, including Oscars, Grammy Awards and Golden Globes.",
  "He died of sepsis during the night of the 25<sup>th</sup> to 26<sup>th</sup> January 2019 in the American Hospital of Paris.",
  "He was interred at the P&egrave;re Lachaise Cemetery in Paris, France.",
];

const createLiFromArray = (array) =>
    array.reduce((acc, el) => acc + `<li>${el}</li>`, ""); 

// const createLiFromArray = (array) => array
// .map(el => `<li>${el}</li>`)
// .join("");

const list = createLiFromArray(facts);

ul.insertAdjacentHTML("beforeend", list);
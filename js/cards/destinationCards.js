import "../clamp.js";
import destinationsList from "../data/destinations.js";

/**************************************
/**     DESTINATIONS
/**************************************/

const destinationsContainer = document.getElementById("destination-cards");

function createCard(article) {
  const { city, country, image, author, categories, title, description, link } = article;
  const { pic, name, date } = author;

  const listItem = document.createElement("li");
  listItem.classList.add("card__item");

  const card = document.createElement("article");
  card.classList.add("card");

  const cardFigure = document.createElement("figure");
  cardFigure.classList.add("card__figure");

  const cardImage = document.createElement("img");
  cardImage.classList.add("card__img");
  cardImage.setAttribute("src", image);
  cardImage.setAttribute("alt", `Image of ${city}, ${country}`);

  const cardAuthor = document.createElement("div");
  cardAuthor.classList.add("card__author");

  const cardAuthorPic = document.createElement("div");
  cardAuthorPic.classList.add("card__author-pic");

  const authorPic = document.createElement("img");
  authorPic.classList.add("card__author-img");
  authorPic.setAttribute("src", pic);
  authorPic.setAttribute("alt", `${name} profile picture`);

  const cardAuthorName = document.createElement("div");
  cardAuthorName.classList.add("card__author-name");
  cardAuthorName.textContent = name;

  const cardContent = document.createElement("div");
  cardContent.classList.add("card__content");

  const cardLocation = document.createElement("header");
  cardLocation.classList.add("card__location");

  const cardLocationName = document.createElement("div");
  cardLocationName.classList.add("card__location-name");
  cardLocationName.textContent = `${city}, ${country}`;

  const cardLocationIcons = document.createElement("div");
  cardLocationIcons.classList.add("card__location-icons");
  const categoriesHTMLArray = categories
    .map(
      category => `
  <svg>
  <use href="img/svg/sprite.svg#${category}" />
  </svg>
  `
    )
    .join("");
  cardLocationIcons.innerHTML = categoriesHTMLArray;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card__body");

  const cardTitle = document.createElement("div");
  cardTitle.classList.add("card__title");

  const header = document.createElement("h4");
  header.textContent = title;

  const cardDescription = document.createElement("p");
  cardDescription.classList.add("card__description");
  cardDescription.textContent = description;

  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card__footer-read");

  const cardDate = document.createElement("div");
  cardDate.classList.add("card__date");
  cardDate.textContent = date;

  const cardReadMore = document.createElement("div");
  cardReadMore.classList.add("card__read-more");
  cardReadMore.innerHTML = `
 <a href="${link}" class="underline-hover card__link">Read More
  <svg class="arrow-icon">
    <use href="img/svg/sprite.svg#arrow" />
  </svg></a>
  `;

  destinationsContainer.appendChild(listItem);
  listItem.appendChild(card);
  card.appendChild(cardFigure);
  card.appendChild(cardContent);
  cardFigure.appendChild(cardImage);
  cardFigure.appendChild(cardAuthor);
  cardAuthor.appendChild(cardAuthorPic);
  cardAuthorPic.appendChild(authorPic);
  cardAuthorPic.appendChild(cardAuthorName);
  cardContent.appendChild(cardLocation);
  cardLocation.appendChild(cardLocationName);
  cardLocation.appendChild(cardLocationIcons);
  cardContent.appendChild(cardBody);
  cardBody.appendChild(cardTitle);
  cardTitle.appendChild(header);
  cardBody.appendChild(cardDescription);
  cardContent.appendChild(cardFooter);
  cardFooter.appendChild(cardDate);
  cardFooter.appendChild(cardReadMore);
}

function loadDestinationCards(callback) {
  destinationsList.articles.forEach(article => {
    createCard(article);
  });

  if (callback && typeof callback === "function") {
    callback();
  }
}

loadDestinationCards(function () {
  const elements = [...document.getElementsByClassName("card__description")];
  elements.forEach(element => {
    window.$clamp(element, { clamp: 8 });
  });
});

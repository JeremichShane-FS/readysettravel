import toursList from "../data/tours.js";

/**************************************
/**     TOURS
/**************************************/
const toursContainer = document.getElementById("tour-cards");

toursList.tours.forEach(tour => {
  const { image, city, state, country, title, stops, duration, rating, header, description, price } = tour;
  const priceString = price.toLocaleString("en-US");

  const listItem = document.createElement("li");
  listItem.classList.add("tours", "card__item");

  const card = document.createElement("article");
  card.classList.add("tours", "card");

  const cardFigure = document.createElement("figure");
  cardFigure.classList.add("card__figure");

  const cardImage = document.createElement("img");
  cardImage.classList.add("card__img");
  cardImage.src = image;
  cardImage.alt = `Image of ${city}, ${country}`;

  const cardFigCaption = document.createElement("figcaption");
  cardFigCaption.classList.add("card__caption");

  const cardTourTitle = document.createElement("h3");
  cardTourTitle.classList.add("card__tour-title");
  cardTourTitle.textContent = title;

  const cardContent = document.createElement("div");
  cardContent.classList.add("card__content");

  const tourInfo = document.createElement("div");
  tourInfo.classList.add("card__tour-info");
  tourInfo.innerHTML = `${stops} stop${stops === 1 ? "" : "s"} | ${duration} day${duration === 1 ? "" : "s"}`;

  const cardLocation = document.createElement("div");
  cardLocation.classList.add("card__location");

  const cardLocationName = document.createElement("p");
  cardLocationName.classList.add("card__location-name");
  cardLocationName.innerHTML = `
  <svg class="location-icon">
    <use href="img/svg/sprite.svg#location" />
  </svg>
  ${city}, ${country || state}
  `;

  const svgRating = document.createElement("span");
  svgRating.innerHTML = `
  <svg class="rating-icon">
    <use href="img/svg/sprite.svg#rating" />
  </svg>
  `;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card__body");

  const cardTitle = document.createElement("h4");
  cardTitle.classList.add("card__title");
  cardTitle.textContent = header;

  const cardDescription = document.createElement("p");
  cardDescription.classList.add("card__description");
  cardDescription.textContent = description;

  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card__footer-book");

  const cardPrice = document.createElement("span");
  cardPrice.classList.add("card__price");
  cardPrice.textContent = `$${priceString}`;

  const cardButton = document.createElement("button");
  cardButton.classList.add("card__button");
  cardButton.setAttribute("aria-label", `Book ${title} tour`);
  cardButton.textContent = "Book Now";

  toursContainer.appendChild(listItem);
  listItem.appendChild(card);
  card.appendChild(cardFigure);
  card.appendChild(cardContent);
  cardLocation.appendChild(cardLocationName);
  cardLocation.appendChild(svgRating);
  cardFigCaption.appendChild(cardTourTitle);
  cardFigure.appendChild(cardImage);
  cardFigure.appendChild(cardFigCaption);
  cardContent.appendChild(tourInfo);
  cardContent.appendChild(cardLocation);
  cardContent.appendChild(cardBody);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardDescription);
  cardFooter.appendChild(cardPrice);
  cardContent.appendChild(cardFooter);
  cardFooter.appendChild(cardButton);
});

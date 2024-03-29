import "../clamp.js";
import blogList from "../data/blogs.js";

/**************************************
/**     BLOGS
/**************************************/
const blogsContainer = document.getElementById("blog-cards");

function createCard(blog) {
  const { author, views, image, title, description, link } = blog;
  const { pic, name, date } = author;

  const listItem = document.createElement("li");
  listItem.classList.add("blog__item");

  const card = document.createElement("article");
  card.classList.add("card");

  const cardFigure = document.createElement("figure");
  cardFigure.classList.add("card__figure");

  const cardImage = document.createElement("img");
  cardImage.classList.add("card__img");
  cardImage.src = image;
  cardImage.alt = `Image of ${title}`;

  const cardAuthor = document.createElement("div");
  cardAuthor.classList.add("card__author");

  const cardAuthorPic = document.createElement("div");
  cardAuthorPic.classList.add("card__author-pic");

  const authorImg = document.createElement("img");
  authorImg.classList.add("card__author-img");
  authorImg.src = pic;
  authorImg.alt = `${name} profile picture`;

  const cardAuthorName = document.createElement("div");
  cardAuthorName.classList.add("card__author-name");
  cardAuthorName.textContent = name;

  const cardContent = document.createElement("div");
  cardContent.classList.add("card__content");

  const cardDetails = document.createElement("header");
  cardDetails.classList.add("card__details");

  const cardCalendar = document.createElement("div");
  cardCalendar.classList.add("card__calendar");
  cardCalendar.innerHTML = `
  <svg class="calendar-icon">
    <use href="img/svg/sprite.svg#calendar" />
  </svg>
  ${date}
  `;

  const cardViews = document.createElement("div");
  cardViews.classList.add("card__views");
  cardViews.innerHTML = `
  ${views}
  <svg class="views-icon">
    <use href="img/svg/sprite.svg#views" />
  </svg>
  `;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card__body");

  const cardTitle = document.createElement("h4");
  cardTitle.classList.add("card__title");
  cardTitle.textContent = title;

  const cardDescription = document.createElement("p");
  cardDescription.classList.add("card__description");
  cardDescription.textContent = description;

  const cardReadMore = document.createElement("div");
  cardReadMore.classList.add("card__read-more");
  cardReadMore.innerHTML = `
  <a href="${link}" class="underline-hover card__link">Read More
  <svg class="arrow-icon">
    <use href="img/svg/sprite.svg#arrow" />
  </svg></a>
  `;

  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card__footer-social");

  const cardSocialLikes = document.createElement("div");
  cardSocialLikes.classList.add("card__social-icons");
  cardSocialLikes.innerHTML = `
  <svg class="card__social-icons">
    <use href="img/svg/sprite.svg#like" />
  </svg>
  Like
  `;

  const cardSocialComments = document.createElement("div");
  cardSocialComments.classList.add("card__social-icons");
  cardSocialComments.innerHTML = `
  <svg class="card__social-icons">
    <use href="img/svg/sprite.svg#comment" />
  </svg>
  Comment
  `;

  const cardSocialShare = document.createElement("div");
  cardSocialShare.classList.add("card__social-icons");
  cardSocialShare.innerHTML = `
  <svg class="card__social-icons">
    <use href="img/svg/sprite.svg#share" />
  </svg>
  Share
  `;

  blogsContainer.appendChild(listItem);
  listItem.appendChild(card);

  card.appendChild(cardFigure);
  cardFigure.appendChild(cardImage);
  cardFigure.appendChild(cardAuthor);
  cardAuthor.appendChild(cardAuthorPic);
  cardAuthorPic.appendChild(authorImg);
  cardAuthorPic.appendChild(cardAuthorName);

  card.appendChild(cardContent);
  cardContent.appendChild(cardDetails);
  cardDetails.appendChild(cardCalendar);
  cardDetails.appendChild(cardViews);
  cardContent.appendChild(cardBody);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardDescription);
  cardContent.appendChild(cardReadMore);
  cardContent.appendChild(cardFooter);
  cardFooter.appendChild(cardSocialLikes);
  cardFooter.appendChild(cardSocialComments);
  cardFooter.appendChild(cardSocialShare);
}

function loadDestinationCards(callback) {
  blogList.blogs.forEach(blog => {
    createCard(blog);
  });

  if (callback && typeof callback === "function") {
    callback();
  }
}

loadDestinationCards(function () {
  const description = [...document.getElementsByClassName("card__description")],
    title = [...document.getElementsByClassName("card__title")];

  description.forEach(description => {
    window.$clamp(description, { clamp: 3 });
  });

  title.forEach(title => {
    window.$clamp(title, { clamp: 2 });
  });
});

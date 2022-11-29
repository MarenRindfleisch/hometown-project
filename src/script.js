function openWelMenu(event) {
  event.preventDefault();
  welcomeLink.classList.add("active");
  historicPlacesLink.classList.remove("active");
  diningAndNightlifeLink.classList.remove("active");
  communityAndArtsLink.classList.remove("active");

  welcomeParagraph.style.display = "block";
  historicPlacesParagraph.style.display = "none";
  diningAndNightlifeParagraph.style.display = "none";
  communityAndArtsParagraph.style.display = "none";
}

function openHisMenu(event) {
  event.preventDefault();
  welcomeLink.classList.remove("active");
  historicPlacesLink.classList.add("active");
  diningAndNightlifeLink.classList.remove("active");
  communityAndArtsLink.classList.remove("active");

  welcomeParagraph.style.display = "none";
  historicPlacesParagraph.style.display = "block";
  diningAndNightlifeParagraph.style.display = "none";
  communityAndArtsParagraph.style.display = "none";
}

function openDinMenu(event) {
  event.preventDefault();
  welcomeLink.classList.remove("active");
  historicPlacesLink.classList.remove("active");
  diningAndNightlifeLink.classList.add("active");
  communityAndArtsLink.classList.remove("active");

  welcomeParagraph.style.display = "none";
  historicPlacesParagraph.style.display = "none";
  diningAndNightlifeParagraph.style.display = "block";
  communityAndArtsParagraph.style.display = "none";
}

function openComMenu(event) {
  event.preventDefault();
  welcomeLink.classList.remove("active");
  historicPlacesLink.classList.remove("active");
  diningAndNightlifeLink.classList.remove("active");
  communityAndArtsLink.classList.add("active");

  welcomeParagraph.style.display = "none";
  historicPlacesParagraph.style.display = "none";
  diningAndNightlifeParagraph.style.display = "none";
  communityAndArtsParagraph.style.display = "block";
}
// Declare global varialbles for menu items
let welcomeLink = document.querySelector("#welcome");
let historicPlacesLink = document.querySelector("#historic-places");
let diningAndNightlifeLink = document.querySelector("#dining-and-nightlife");
let communityAndArtsLink = document.querySelector("#community-and-arts");

let welcomeParagraph = document.querySelector("#welcome-paragraph");
let historicPlacesParagraph = document.querySelector(
  "#historic-places-paragraph"
);
let diningAndNightlifeParagraph = document.querySelector(
  "#dining-and-nightlife-paragraph"
);
let communityAndArtsParagraph = document.querySelector(
  "#community-and-arts-paragraph"
);

welcomeLink.addEventListener("click", openWelMenu);
historicPlacesLink.addEventListener("click", openHisMenu);
diningAndNightlifeLink.addEventListener("click", openDinMenu);
communityAndArtsLink.addEventListener("click", openComMenu);

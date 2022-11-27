function openHisMenu(event) {
  event.preventDefault();

  welcomeParagraph.style.display = "none";
  historicPlacesLink.classList.add("active");
  welcomeLink.classList.remove("active");
  diningAndNightlifeLink.classList.remove("active");
  communityAndArtsLink.classList.remove("active");
}

// Declare global varialbles for menu items
let welcomeLink = document.querySelector("#welcome");
let historicPlacesLink = document.querySelector("#historic-places");
let diningAndNightlifeLink = document.querySelector("#dining-and-nightlife");
let communityAndArtsLink = document.querySelector("#community-and-arts");
let welcomeParagraph = document.querySelector("#welcome-paragraph");

historicPlacesLink.addEventListener("click", openHisMenu);

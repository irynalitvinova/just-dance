(function () {
  const carouselParnersItems = [
    '<div class="partners-gallery-item"><img class="partners-gallery-item-img" src="img/partners/bolle.png" alt="Bolle icon"></div>',
    '<div class="partners-gallery-item"><img class="partners-gallery-item-img" src="img/partners/puma.png" alt="Puma icon"></div>',
    '<div class="partners-gallery-item"><img class="partners-gallery-item-img" src="img/partners/dance.png" alt="Dance icon"></div>',
    '<div class="partners-gallery-item"><img class="partners-gallery-item-img" src="img/partners/nike.png" alt="Nike icon"></div>',
    '<div class="partners-gallery-item"><img class="partners-gallery-item-img" src="img/partners/dance-city.png" alt="Dance city icon"></div>',
  ];
  let currentPartnersIndex = 0;
  function renderPartnersCard() {
    const partnersItemsContainer = document.querySelector(
      ".partners-gallery-box"
    );
    partnersItemsContainer.innerHTML = carouselParnersItems[currentPartnersIndex];
    if (window.innerWidth > 767) {
      const secondPartnersItemIndex =
        currentPartnersIndex + 1 >= carouselParnersItems.length ? 0 : currentPartnersIndex + 1;
      partnersItemsContainer.innerHTML += carouselParnersItems[secondPartnersItemIndex];

      if (window.innerWidth > 990) {
        const thirdPartnersItemIndex =
          secondPartnersItemIndex + 1 >= carouselParnersItems.length ? 0 : secondPartnersItemIndex + 1;
        partnersItemsContainer.innerHTML += carouselParnersItems[thirdPartnersItemIndex];
        if (window.innerWidth > 990) {
          const forthPartnersItemIndex =
            thirdPartnersItemIndex + 1 >= carouselParnersItems.length ? 0 : thirdPartnersItemIndex + 1;
          partnersItemsContainer.innerHTML += carouselParnersItems[forthPartnersItemIndex];
        }
      }
    }
  }
  function showNextPartnersCard() {
    currentPartnersIndex =
      currentPartnersIndex + 1 >= carouselParnersItems.length ? 0 : currentPartnersIndex + 1;
    renderPartnersCard();
  }
  function showPrevPartnersCard() {
    currentPartnersIndex =
      currentPartnersIndex - 1 < 0 ? carouselParnersItems.length - 1 : currentPartnersIndex - 1;
    renderPartnersCard();
  }
  renderPartnersCard();
  const nextPartnersButton = document.querySelector(".partners-gallery-button-next");
  nextPartnersButton.addEventListener("click", showNextPartnersCard);
  const prevPartnersButton = document.querySelector(".partners-gallery-button-prev");
  prevPartnersButton.addEventListener("click", showPrevPartnersCard);

  window.addEventListener("resize", renderPartnersCard);
})();
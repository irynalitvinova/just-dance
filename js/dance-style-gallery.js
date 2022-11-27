(function () {
  const carouselDanceStylesItems = [
    '<div class="dance-styles-gallery-item"><img class="dance-styles-gallery-item-img" src="img/styles/ballet-style.png" alt="Ballet"><p class="dance-styles-gallery-item-text">Ballet</p></div>',
    '<div class="dance-styles-gallery-item"><img class="dance-styles-gallery-item-img" src="img/styles/contemporary-style.png"alt="Contemporary dance"><p class="dance-styles-gallery-item-text">Contemporary</p></div>',
    '<div class="dance-styles-gallery-item"><img class="dance-styles-gallery-item-img" src="img/styles/hiphop-style.png" alt="Hip Hop dance"><p class="dance-styles-gallery-item-text">Hip Hop</p></div>',
    '<div class="dance-styles-gallery-item"><img class="dance-styles-gallery-item-img" src="img/styles/tango-style.png" alt="Tango"><p class="dance-styles-gallery-item-text">Tango</p></div>',
  ];
  let currentDanceStylesItemIndex = 0;
  function renderDanceStylesCard() {
    const danceStylesItemsContainer = document.querySelector(
      ".dance-styles-gallery-box"
    );
    danceStylesItemsContainer.innerHTML = carouselDanceStylesItems[currentDanceStylesItemIndex];
    if (window.innerWidth > 767) {
      const secondDanceStylesItemIndex =
        currentDanceStylesItemIndex + 1 >= carouselDanceStylesItems.length ? 0 : currentDanceStylesItemIndex + 1;
      danceStylesItemsContainer.innerHTML += carouselDanceStylesItems[secondDanceStylesItemIndex];

      if (window.innerWidth > 990) {
        const thirdDanceStylesItemIndex =
          secondDanceStylesItemIndex + 1 >= carouselDanceStylesItems.length ? 0 : secondDanceStylesItemIndex + 1;
        danceStylesItemsContainer.innerHTML += carouselDanceStylesItems[thirdDanceStylesItemIndex];
      }
    }
  }
  function showNextDanceStyleCard() {
    currentDanceStylesItemIndex =
      currentDanceStylesItemIndex + 1 >= carouselDanceStylesItems.length ? 0 : currentDanceStylesItemIndex + 1;
    renderDanceStylesCard();
  }
  function showPrevDanceStyleCard() {
    currentDanceStylesItemIndex =
      currentDanceStylesItemIndex - 1 < 0 ? carouselDanceStylesItems.length - 1 : currentDanceStylesItemIndex - 1;
    renderDanceStylesCard();
  }
  renderDanceStylesCard();
  const nextDanceStylesButton = document.querySelector(".dance-styles-gallery-button-next");
  nextDanceStylesButton.addEventListener("click", showNextDanceStyleCard);
  const prevDanceStylesButton = document.querySelector(".dance-styles-gallery-button-prev");
  prevDanceStylesButton.addEventListener("click", showPrevDanceStyleCard);

  window.addEventListener("resize", renderDanceStylesCard);
})();
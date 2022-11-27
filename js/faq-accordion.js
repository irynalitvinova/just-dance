(function () {

  let faqAccordion = document.getElementsByClassName("faq-accordion");
  let i;

  for (i = 0; i < faqAccordion.length; i++) {
    faqAccordion[i].addEventListener("click", function () {
      this.classList.toggle("faq-accordion--active");
      let faqPanel = this.nextElementSibling;
      if (faqPanel.style.display === "block") {
        faqPanel.style.display = "none";
      } else {
        faqPanel.style.display = "block";
      }
    });
  }

})();
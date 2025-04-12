const floppas = document.querySelectorAll(".floppa-img");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.target);
    if (entry.isIntersecting) {
      entry.target.src = entry.target.getAttribute("data-src");
    }
  });
});
floppas.forEach((floppa) => {
  observer.observe(floppa);
});

document.addEventListener("DOMContentLoaded", function(){
  const currentYear = new Date().getFullYear();
  const yearElement = document.createElement("span");
  yearElement.innerHTML = ` - ${currentYear}`;
  document.querySelector(".thanks").appendChild(yearElement);

  const footer = document.querySelector("footer");
  setInterval(() => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    footer.style.backgroundColor = randomColor;
  }, 3000);
  
  // Add smooth scrolling effect to the "Back to Top" link
  const backToTop = document.getElementById("back-to-top");
  backToTop.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});




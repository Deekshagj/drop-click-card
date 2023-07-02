function showDetails(element) {
  element.nextElementSibling.classList.add("active");
  element.style.transform = "translateY(100%)";
}

function hideDetails(element) {
  element.parentElement.classList.remove("active");
  element.parentElement.previousElementSibling.style.transform = "translateY(0)";
}

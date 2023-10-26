function showOverlay(event) {
  event.preventDefault();
  document.classList.add("image-overlay");
  document.querySelector(".image-text").innerHTML = `<h3>World Clock</h3>
    <p>An accurate World Clock with changeable locations</p>
    <a href="#" class="primary-button">View World Clock</a>`;
}

let images = document.querySelector("img");
images.addEventListener("mouseover", showOverlay);

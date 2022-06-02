const images = document.querySelectorAll("[data-src]");

const imageOptions = {}

function preloadImage(img)  {
  const src = img.getAttribute("data-src");
  if (!src) {
    return
  }

  img.src = src;
}

const imageObserver = new IntersectionObserver((entries, imageObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return
    } else {
      preloadImage(entry.target);
      imageObserver.unobserve(entry.target);
    }
  })
}, imageOptions);

images.forEach(image => {
  imageObserver.observe(image);
})
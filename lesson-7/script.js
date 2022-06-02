const images = document.querySelectorAll("[data-src]");

const imageOptions = {threshold: 0, rootMargin: "0px 0px 50px 0px"};

function preloadImage(img)  {
  const src = img.getAttribute("data-src");
  if (!src) {
    return
  }

  img.src = src;
}
if('IntersectionObserver' in window) {
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
}
else {
  imagesToLoad.forEach((img) => {
    preloadImage(img);
  });
}
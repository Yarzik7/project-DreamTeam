class Loader {
  constructor(element) {
    this.element = element;
    this.startAnimation();
  }

  startAnimation() {
    const loaderElement = this.element.querySelector('.loader');
    const spans = loaderElement.querySelectorAll('span');

    let rotation = 0;
    let opacity = 1;

    const animation = () => {
      rotation += 4;
      opacity -= 0.01;

      loaderElement.style.transform = `rotate(${rotation}deg)`;
      spans.forEach((span) => {
        span.style.opacity = opacity;
      });

      if (opacity <= 0) {
        clearInterval(interval);
        loaderElement.remove();
      }
    };

    const interval = setInterval(animation, 10);
  }
}

const loader = new Loader(document.querySelector('.loader-container'));
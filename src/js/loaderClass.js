import { loaderMarcup } from "./loaderMarcup";

class Loader {
  constructor(container, cssClassName) {
    this.element = document.createElement('div');
    this.container = container;
    this.cssClassName = cssClassName;
    this.interval = 0;
  }

  startAnimation() {
    const loaderElement = this.element.querySelector('.loader');
    const spans = loaderElement.querySelectorAll('span');

    let opacity = 1;
    let opacityDown = true;

    const animation = () => {
      spans.forEach(span => {
        span.style.opacity = opacity;
      });

      if (!opacityDown) {
        opacity += 0.01;
        if (opacity >= 1) opacityDown = true;
      }
      if (opacityDown) {
        opacity -= 0.01;
        if (opacity <= 0) opacityDown = false;
      }
    };

    this.interval = setInterval(animation, 10);
  }
  
  show() {
    this.element.classList.add(this.cssClassName);
    this.element.innerHTML = loaderMarcup;
    this.container.append(this.element);
    this.startAnimation();
  }

  hide() {
    clearInterval(this.interval);
    this.element.remove();
  }
}

export { Loader };
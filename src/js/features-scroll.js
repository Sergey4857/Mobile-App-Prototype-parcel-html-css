window.onscroll = function () {
  if (window.screen.width >= 768) {
    scrollY <= 700
      ? document
          .getElementById('up-button')
          .classList.remove('up-button-active')
      : document.getElementById('up-button').classList.add('up-button-active');
  } else {
    scrollY <= 700
      ? document
          .getElementById('up-button')
          .classList.remove('up-button-active')
      : document.getElementById('up-button').classList.add('features-scroll');
  }
};

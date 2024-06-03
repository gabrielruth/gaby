document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const slider = document.querySelector('.slider');
  
    function activateNext() {
      slider.appendChild(slider.firstElementChild);
    }
  
    function activatePrev() {
      slider.prepend(slider.lastElementChild);
    }
  
    nextButton.addEventListener('click', activateNext);
    prevButton.addEventListener('click', activatePrev);
  });
  

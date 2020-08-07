// Your code goes here
(function() {
    var elements;
    var windowHeight;
  
    function init() {
      elements = document.querySelectorAll('.hidden');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('fade-in-element');
          element.classList.remove('hidden');
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
    //event.stopPropagation()
  })();
  

let scrollPos = 0;
const nav = document.querySelector('.headBus');

function checkPosition() {
  let windowY = window.scrollY;
  if (windowY < scrollPos) {
    // Scrolling UP
    nav.classList.add('hide');
    nav.classList.remove('show');
  } else {
    // Scrolling DOWN
    nav.classList.add('show');
    nav.classList.remove('hide');
  }
  scrollPos = windowY;
}

window.addEventListener('scroll', checkPosition);

  
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var svgHeight = document.querySelector('svg').clientHeight;
    var windowHeight = window.innerHeight;
    var totalLength = 340 + (scrollPosition / (3 * svgHeight)) * (windowHeight * 3); // 
  
    if (totalLength < 0) {
      totalLength = 0;
    }
  
    document.querySelector('.line').style.strokeDasharray = totalLength;
  });
  
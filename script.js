document.addEventListener("DOMContentLoaded", function () {
  //Text animation
      const words = document.querySelectorAll(".word");
      const animationDelay = 80;
      const transitionDelay = 340;
      const initialWordDelay = 1000;
      const wordDisplayDelay = 1000; 
      const interval = 3000;
  
      words.forEach((word) => {
          const letters = word.textContent.split("");
          word.textContent = "";
          letters.forEach((letter) => {
              const span = document.createElement("span");
              span.textContent = letter;
              span.className = "letter";
              word.append(span);
          });
      });
  
      let currentWordIndex = 0;
      const maxWordIndex = words.length - 1;
  
      const changeText = () => {
          const currentWord = words[currentWordIndex];
          const nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
  
          Array.from(currentWord.children).forEach((letter, i) => {
              setTimeout(() => {
                  letter.classList.add("out");
              }, i * animationDelay);
          });
  
          nextWord.style.opacity = "0";
          Array.from(nextWord.children).forEach((letter, i) => {
              letter.classList.remove("in", "out", "behind");
          });
  
          setTimeout(() => {
              nextWord.style.opacity = "1";
              Array.from(nextWord.children).forEach((letter, i) => {
                  setTimeout(() => {
                      letter.classList.add("in");
                  }, (i + 1) * animationDelay);
              });
          }, transitionDelay + wordDisplayDelay); 
  
          currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
      };
  
      words[currentWordIndex].style.opacity = "1";
  
      setTimeout(() => {
          changeText();
          setInterval(changeText, interval);
      }, initialWordDelay);
  
  
      //read-more
      const aboutContainer = document.querySelector('.about-cont');
      const readMoreBtn = document.getElementById('read-more');
      const readLessLink = document.getElementById('read-less');
  
      readMoreBtn.addEventListener('click', function (event) {
          event.preventDefault();
          aboutContainer.classList.add('show-full-description');
          const aboutSection = document.getElementById('about');
          aboutSection.scrollIntoView({
              behavior: 'smooth'
          });
      });
  
      readLessLink.addEventListener('click', function (event) {
        event.preventDefault();
        aboutContainer.classList.remove('show-full-description');
    });
  
    var header = document.getElementById("h");
    var navi = document.getElementById("n");
  
    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
  
        if (scrollPosition > 0) {
            header.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--scroll-bg-color');
            navi.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--scroll-bg-color');
            
        } else {
            header.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-color');
            navi.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-color');
            
        }
    });
  });
  
  
  
  
document.addEventListener("DOMContentLoaded", function () {
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


    const scrollUpButton = document.querySelector('.scroll-to-top a');
    const scrollDownButton = document.querySelector('.scroll-to-about a');

    // Smooth scrolling for the upper arrow
    scrollUpButton.addEventListener('click', function (e) {
      e.preventDefault();

      const targetSection = document.querySelector(this.getAttribute('href'));
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    });

    // Smooth scrolling for the lower arrow
    scrollDownButton.addEventListener('click', function (e) {
      e.preventDefault();

      const targetSection = document.querySelector(this.getAttribute('href'));
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    });

    // Show/hide the scroll buttons based on scroll position
    window.addEventListener('scroll', function () {
      const aboutSection = document.getElementById('about');
      const homeSection = document.getElementById('home');
      const scrollUpButton = document.querySelector('.scroll-to-top');
      const scrollDownButton = document.querySelector('.scroll-to-about');

      if (window.scrollY > aboutSection.offsetTop) {
        scrollUpButton.style.display = 'block';
      } else {
        scrollUpButton.style.display = 'none';
      }

      if (window.scrollY < homeSection.offsetHeight) {
        scrollDownButton.style.display = 'block';
      } else {
        scrollDownButton.style.display = 'none';
      }
    });




  });


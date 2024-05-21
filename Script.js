document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function clickMenu() {
    if (itens.style.display == 'block') {
      itens.style.display = 'none'
    }  else {
      itens.style.display = 'block'
    }
  }


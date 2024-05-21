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



const myObserver = new IntersectionObserver( (entries) => {
  entries.forEach( (entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove("show")
    }
  })
})

const aparecer = document.querySelectorAll('.hidden')

aparecer.forEach( (element) => myObserver.observe(element))
const TypeWriter = function(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

TypeWriter.prototype.type = function() {
    console.log("Hello");
    setTimeout(() => this.type(), 500);
}

document.addEventListener('DOMContentLoaded', init);

function init() {
     const txtElement = document.querySelector('.txt-type');
     const words = JSON.parse(txtElement.getAttribute('data-words'));
     const wait = txtElement.getAttribute('data-wait');
     new TypeWriter(txtElement, words, wait);
}

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navMenu');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('navActive');
        burger.classList.toggle('toggle');
     });

     
}

navSlide();
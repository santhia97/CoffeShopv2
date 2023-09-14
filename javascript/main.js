let search = document.querySelector('.search-box');
let navbar = document.querySelector('.navbar');

document.querySelector('#search-icon').onclick = ()=> {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

document.querySelector('#menu-icon').onclick = ()=> {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}


window.onscroll = () =>{
    navbar.classList.remove('active');
    search.classList.remove('active');
}

//It will make the content go under the header
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0)

});


'use strict'

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('hamburger-menu').addEventListener('click', function () {
        this.classList.toggle('active');
        document.getElementById('nav').classList.toggle('active');
        document.getElementById('mask').classList.toggle('active');
    })
});

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('Arrow').addEventListener('click', function () {
        this.classList.toggle('active');
        document.getElementById('Childy').classList.toggle('active');
    })
});
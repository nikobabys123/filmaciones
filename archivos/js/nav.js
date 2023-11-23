const navbar = document.getElementById('navbar');

document.getElementById('abrirnav').addEventListener('click',function(){
    navbar.style.right = '0';
})

document.getElementById('cerrarnav').addEventListener('click',function(){
    navbar.style.right = '-600px';
})
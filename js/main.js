///////////////////navbar mobile///////////////////////////////////////////
var bars = document.getElementsByClassName('fa-bars-staggered')[0];
var navSide = document.getElementsByClassName('r-side')[0];
var closei = document.getElementsByClassName('fa-close')[0];


bars.addEventListener( 'click' , ()=>{
    navSide.classList.add('hs');
} )

closei.addEventListener( 'click' , ()=>{
    navSide.classList.remove('hs');
} )

//////////////////////////Products Details//////////////////////////////////////

var main_img = document.querySelector('.prod-main-img img');
var small_img = document.querySelectorAll('.prod-small-imgs div img');

small_img.forEach( (imgg)=>{

    imgg.addEventListener('click' , ()=>{

        main_img.src = imgg.src;

    })

} )

//////////////////////////////////////////////////////////////////
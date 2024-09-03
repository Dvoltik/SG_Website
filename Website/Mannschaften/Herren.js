onload = () => {
    let slides = document.getElementById('bild' + i); 
}

let n;
let i = 1;


function prevSlide(){
    n = -1;
    plusSlides(n);
}

function nextSlide(){
    n = 1; 
    plusSlides(n);
}

function plusSlides(n){
    checkSlide();

    slides = document.getElementById('bild' + i);
    //console.log(slides);
    slides.style.display = "none";

    i = i + n;
    checkSlide();
    slides = document.getElementById('bild' + i);
    //console.log(slides);
    slides.style.display = "block";
    
    
    return i;

}

function checkSlide(){
    if(i < 1){
        i = 2;
    } else if (i > 2){
        i = 1;
    }
    return i;
}
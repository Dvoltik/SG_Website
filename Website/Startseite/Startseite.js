onload = () => {
    startTimer();
}


let n;
let i = 0;
let timeNextSlideS = 10;                        //Sekunden nach denen die nächste Newsslide kommt
let timeNextSlideMS = timeNextSlideS * 1000;    //Millisekunden nachdenen die nächste Newsslide kommt

let timerNextSlide;

let white = 0;

let slides = document.getElementById('.News' + i);


function hoverNews(){           
    pauseTimer();
}



function exitNews(){
    startTimer();
}



function startTimer(){
    console.log("startTimer");
    console.log(timeNextSlideMS);
    timerNextSlide = setInterval(nextSlide, timeNextSlideMS);
    return timerNextSlide;
}

function pauseTimer(){
    console.log("pauseTimer");
    clearInterval(timerNextSlide);
}


function nextSlide(){
    n = 1;
    console.log("next");
    plusSlides(n);    
}

function prevSlide(){
    n = -1;
    console.log("prev");
    plusSlides(n);   
}

function plusSlides(n){

    checkSlide();

    slides = document.getElementById('News' + i);
    slides.style.display = "none";

    i = i + n;
    checkSlide();
    slides = document.getElementById('News' + i);
    slides.style.display = "block";
    
    var clearTimer = clearInterval(timerNextSlide);
    startTimer(timerNextSlide);
    return i;
}

function checkSlide(){
    if(i < 0){
        i = 3;
    } else if (i > 3){
        i = 0;
    }
    return i;
}





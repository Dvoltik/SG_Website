import { news } from '../News/News.js';


const frontPageNews = 4;


document.addEventListener("DOMContentLoaded", function(){

    news.sort((a, b) => {
        return new Date(b.datum) - new Date(a.datum);
    });
    updateFrontPageNews();
})



function updateFrontPageNews(){
    for (var i = 0; i < frontPageNews ; i++){
        console.log(news[i].ueberschrift)
    
        const ueberschrift = document.getElementById('title' +i);
        const beschreibung = document.getElementById('desrciption' +i);
        const bild = "../Bilder/" + news[i].bild;
        console.log(bild);
        
        

        ueberschrift.innerHTML = news[i].ueberschrift;
        beschreibung.innerHTML = news[i].beschreibung;
        document.getElementById("News"+i).style.backgroundImage = 'url("' +bild+ '")';
    }
}
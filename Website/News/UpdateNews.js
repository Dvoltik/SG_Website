import { news } from '../News/News.js';

let j = 0;


document.addEventListener("DOMContentLoaded", function(){

    news.sort((a, b) => {
        return new Date(b.datum) - new Date(a.datum);
    });
    updateNewsPage();
})



function updateNewsPage(){
    for(var i = 0; i < news.length; i++){
        const container = document.getElementById("dateContainer");
        j = i+1;

        const bild = "../Bilder/" + news[i].bild;
        

        const dateFormat = {year:'numeric', month: 'numeric', day: 'numeric'};

        if(news[i].datum != news[(i+1)].datum){
            const datum = new Date(news[i].datum).toLocaleDateString('de-DE', dateFormat);
            const dateline = document.createElement("h2");
            dateline.setAttribute("class", "date-lines");
            dateline.innerHTML = datum;
            container.appendChild(dateline);
            
        }
       

            const table = document.createElement('table');
            table.setAttribute('class', 'news');
            container.appendChild(table);

                const row1 = document.createElement('tr');
                row1.setAttribute('class', 'row1');
                table.appendChild(row1);

                    const td11 = document.createElement('td');
                    td11.setAttribute('rowspan', '2');
                    row1.appendChild(td11);

                        const imgTd11 = document.createElement('img');
                        imgTd11.setAttribute('class', 'newsBild');
                        imgTd11.setAttribute('src', bild);
                        td11.appendChild(imgTd11);

                    const td12 = document.createElement('td');
                    td12.setAttribute('class', 'newsHeader');
                    row1.appendChild(td12);

                        const newsHeader = document.createElement('h2')
                        newsHeader.innerHTML = news[i].ueberschrift;
                        td12.appendChild(newsHeader);

                const row2 = document.createElement('tr');
                table.appendChild(row2);

                    const td21 = document.createElement('td');
                    td21.setAttribute('class', 'beschreibung');
                    td21.innerHTML = news[i].beschreibung;
                    row2.appendChild(td21);
    }
}
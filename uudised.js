const uudised = [
    {
        title: 'AI meditsiinis',
        category: 'Tehnoloogia',
        author: 'Indrek Kald',
        time: '14:36, 14:03:2025',
        intro: 'Eesti IT-firma paneb AI arsti ja patsiendi vestlusest ravikokkuvõtet koostama',
        description: 'Eesti IT-ettevõte testib suurte keelemudelite kasutamist perearsti visiidil kõneldu automaatseks üleskirjutamiseks.'
    },
    {
        title: 'Praktiline tööriist',
        category: 'Tehnoloogia',
        author: 'Indrek Kald',
        time: '06:50, 14.03.2025',
        intro: '3 mln hange: Trinidad Wiseman arendab riigile ekspordiportaali. “Praktiline tööriist”',
        description: 'IT-ettevõte Trinidad Wiseman OÜ sõlmis riigiga kuni kolm miljonit eurot maksva hankelepingu, et arendada välja eksportivatele ettevõtetele mõeldud portaal.'
    },
    {
        title: 'Ekspordisoovitus',
        category: 'Tehnoloogia',
        author: 'Indrek Kald',
        time: '12:55, 13.03.2025',
        intro: 'Ekspordisoovitus: ära püüa kõige suuremat lepingut, alusta pilootprojektidega',
        description: 'Eesti IT-ettevõtetele tagab välisriikides edu turu ja kultuuri mõistmine, kohalike partnerite leidmine ja järk-järguline kasv, selgus teemakohasest arutelust raadiosaates Äri ja tehnoloogia.'
    },
    {
        title: 'Norris suutis vihmasel avaetapil Verstappenit selja taga hoida',
        category: 'Sport',
        author: 'Andres Nõmm',
        time: '08:38, 17.03.2025',
        intro: 'Vormel-1 MM-hooaeg algas pühapäeval vihmases Melbourneis, kus tiitlikaitsja Max Verstappen ees teenis esikoha britt Lando Norris.',
        description: 'Melbournei vihmane rada nõudis esimese ohvri juba soojendusringil, kui Racing Bullsi debütant Isack Hadjar teises kurvis seina sõitis. Hiljem oli katkestajaid veel viis, teiste seas ka Carlos Sainz Jr. ning Fernando Alonso ehk finišijoone ületas 14 autot.'
    },
    {
        title: 'Kläbo Tallinna MK-etapi eel: tunnen end siin kui kodus',
        category: 'Sport',
        author: 'Kristjan Kallaste',
        time: '16:41, 17.03.2025',
        intro: 'Sel kolmapäeval peetakse Tallinna lauluväljakul murdmaasuusatamise maailma karika sarja etapp, kus on koos mitmed maailmatipud.',
        description: 'Tallinna MK-etapil korraldatakse vaid sprindivõistlused ning võistlejad lähevad pärast võistlust üle lahe Soome, sest nädalavahetusel peetakse Lahtis MK-hooaja finaaletapp.'
    },
    {
        title: 'Maailmameister: meie pihustasime enda suusahüppekombinesoone juukselakiga',
        category: 'Sport',
        author: 'Maarja Värv',
        time: '11:11, 17.03.2025',
        intro: '2009. aastal Liberecis suurel mäel maailmameistriks kroonitud endine Šveitsi suusahüppaja Andreas Küttel avaldas kodumaa meediale, et ka tema on pettusega tegelenud.',
        description: 'Trondheimi MM-i jäid Norra suusahüppajad tahtliku petmisega vahele. Lahvatanud skandaali järel on mitmed varasemad suusahüppajad avaldanud, et petmisega on aastaid tegeletud.'
    },
    {
        title: 'Selgusid Eesti filmi- ja teleauhindade nominendid',
        category: 'Kultuur',
        author: 'Karmen Rebane',
        time: '14:41, 17.03.2025',
        intro: 'Esmaspäeval kuulutati välja Eesti filmi- ja teleauhindade nominendid. EFTA-d jagatakse välja 11. aprillil.',
        description: 'Kokku jagatakse välja 31 auhinda, millest 16 filmikategoorias ja 15 telekategoorias. Kõige rohkem nominatsioone sai filmikategoorias "Biwa järve 8 nägu" (15 nominatsiooni). Telekategoorias kogus enim nominatsioone "Reetur" (Elisa Huub/ERR).'
    },
    {
        title: 'Marja-Liisa Plats: raamatute illustreerimine on suur vastutus',
        category: 'Kultuur',
        author: 'Muusika artikli autor',
        time: '15:51, 16.03.2025',
        intro: 'Illustraator ja kultuurisaate "OP" uus stuudiokunstnik Marja-Liisa Plats sõnas, et raamatute illustreerimine on suur vastutus, sest illustratsioonid kas toetavad või rikuvad lugu.',
        description: '"OP-i" uus stuudiokunstnik Marja-Liisa Plats tõdes, et esimene päev oli natukene ehmatav. "Ma teen viimasel ajal pigem raamatuillustratsiooni ja seal on veidi teistmoodi lähenemine," lausus ta. "Nii et alguses tundus võõras, aga mul on selline trikk, et kuna intervjuud on lühikesed, siis ma kasutan võimalust ja panen pildi peale seda, mis siin ümberringi on ehk midagi, mis tõmbab tähelepanu ära näo sarnasuselt."'
    },
    {
        title: 'Arvustus. "Öörändurid": sisemise tasakaalu võimalus',
        category: 'Kultuur',
        author: 'Pop kultuuri artikli autor',
        time: '10:46, 17.03.2025',
        intro: 'Uus lavastus- Öörändurid, Rakvere teater, Autor: Conor McPherson, Esietendus 24.01 Rakvere teatri suures saalis. Arvustus ilmus Sirbis.',
        description: 'Maurice: Ainult paar korda antaksegi seda võimalust, Tommy. Üldse terves elus. Ei ole nii, et võimalusi antakse lõpmatult. Kaks-kolm korda kõige rohkem. Kui õnneks läheb, siis tunned, kuidas kõik jookseb iseenesest paika. Ilma igasugu tsirkuseta. Tsirkus, see kurat on ainult debiilikutele. (Paus) Nii lihtne see ongi. Elada nüüd ja praegu. (Paus) Tommy. (Conor McPherson, "Öörändurid")'
    }
];

//OTSIMIS SÕNA JÄRGI OTSIMINE
function searchNews(searchTerm){
    const lowerSearch=searchTerm.toLowerCase();
    const filteredNews=uudised.filter(news=>{
        return(
            news.title.toLowerCase().includes(lowerSearch) ||
            news.category.toLowerCase().includes(lowerSearch) ||
            news.author.toLowerCase().includes(lowerSearch) ||
            news.intro.toLocaleLowerCase().includes(lowerSearch) ||
            news.description.toLocaleLowerCase().includes(lowerSearch)
        );
    });
    displayNews('All', filteredNews); //Filtered news
}

//KLIKATUD ARTIKLI TÄPSEMAKS KUVAMISEKS
let currentArticleIndex = 0; // Track article index
function displayArticle(article) { //UI
    const allNewsCon = document.getElementById('allNews');
    allNewsCon.innerHTML = `
        <button id="valju">Välju</button>
        <button id="eelmine">Eelmine Uudis</button>
        <button id="jargmine">Järgmine Uudis</button>
        <h3><strong>${article.title}</strong>\t${article.category}</h3>
        <h4>${article.author} ${article.time}</h4>
        <h5>${article.intro}</h5>
        <p>${article.description}</p>
    `;
    //Väljumiseks- tagasi kõikide uudiste juurde
    document.getElementById('valju').addEventListener('click', () => displayNews('All'));
    //Tagasi liikumiseks
    document.getElementById('eelmine').addEventListener('click', () => {
        currentArticleIndex = (currentArticleIndex - 1 + uudised.length) % uudised.length; // Loop to the end if at the start
        displayArticle(uudised[currentArticleIndex]);
    });
    //Edasi liikumiseks
    document.getElementById('jargmine').addEventListener('click', () => {
        currentArticleIndex = (currentArticleIndex + 1) % uudised.length; // Loop to the start if at the end
        displayArticle(uudised[currentArticleIndex]);
    });
}

//KÕIKIDE ARTIKLITE KUVAMISEKS
function displayNews(category, newsArray = uudised) {
    const allNewsCon = document.getElementById('allNews');
    allNewsCon.innerHTML = ''; // Kustutame "Siia tulevad koik uudised"
    allNewsCon.style.display = 'flex'; // Flex layout
    allNewsCon.style.flexWrap = 'wrap'; // Allow wrapping
    allNewsCon.style.gap = '10px'; // Add spacing
    currentNewsArray = newsArray; // Update the currently displayed news array
    const filteredNews = newsArray.filter(news => category === 'All' || news.category === category);

    if (filteredNews.length === 0) {
        allNewsCon.innerHTML = `<p>Milline tühjus... proovi uuesti</p>`; // Display empty state message
    } else {
        filteredNews.forEach((news, index) => {
            const newsItem = document.createElement('div');
            newsItem.style.border = '1px solid #ccc'; // Border
            newsItem.style.padding = '10px'; // Padding
            newsItem.style.flex = '1 1 calc(33.33% - 20px)'; // Three items per row
            newsItem.style.boxSizing = 'border-box'; // Include padding in width
            newsItem.style.cursor = 'pointer'; // Change cursor to pointer
            newsItem.innerHTML = `
                <h3>${news.title}</h3>
                <p><strong>Kategooria:</strong> ${news.category}</p>
                <p><strong>Aeg:</strong> ${news.time}</p>
            `;
            newsItem.addEventListener('click', () => {
                currentArticleIndex = index; // Update the current article index
                displayArticle(news);
            });

            allNewsCon.appendChild(newsItem);
        });
    }
}

document.getElementById('searchButton').addEventListener('click', () => {
    const searchTerm=document.getElementById('searchBar').value;
    searchNews(searchTerm);
    document.getElementById('searchBar').value='';
})
document.getElementById('searchBar').addEventListener('keypress',(e)=>{
    if(e.key==='Enter'){
        const searchTerm=document.getElementById('searchBar').value;
        searchNews(searchTerm);
        document.getElementById('searchBar').value='';
    }
})

document.getElementById('All').addEventListener('click', () => displayNews('All'));
document.getElementById('Tech').addEventListener('click', () => displayNews('Tehnoloogia'));
document.getElementById('Spor').addEventListener('click', () => displayNews('Sport'));
document.getElementById('Kult').addEventListener('click', () => displayNews('Kultuur'));

displayNews('All');
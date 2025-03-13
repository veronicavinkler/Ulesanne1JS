document.addEventListener('DOMContentLoaded', function() {
    function getButton(data, outputID) { // Funktsioon nuppu moodustamise jaoks
        const elements = Object.getOwnPropertyNames(data); //Toome välja arrays olevad nimed (muud ei vaja)
        const outputFront = document.getElementById(outputID); // Get the output element
        outputFront.innerHTML = '<p></p>'; // Kustutame varasema div outputA-s
        eList=[];
        for (let i = 0; i < elements.length; i++) { //Töötame tsükkliga läbi array nimede
            const e = elements[i]; //Võtame konkreetse nime tsükklis
            const button = `<button id="buttonA${i}">${e}</button>`; //Moodustame päriselt nuppu
            outputFront.innerHTML += button; //Lisame nuppu div outputA gruppi
            eList.append(elements[i]);
            //OUTPUT B- TEINE GRUPP
            const buttonB = document.getElementById('buttonA${i}');
            createdButton.addEventListener('click', function(){
                console.log('Button ${e} clicked');
            });
            elementsB(eList);
        }
    }
    //OUTPUT B- TEINE GRUPP
    function elementsB(datab){
        
    }
    //OUTPUT A- ESIMENE GRUPP
    document.getElementById('buttonfront').addEventListener('click', function() {
        out='outputA';
        fetch('data.json') // Impordime objekti JSONi failist
            .then(response => { //Vaatame vastust
                if (!response.ok) { throw new Error('Network response was not ok'); } //Kõik on ok
                return response.json(); //Anname teada, et kõik on ok
            })
            .then(data => {getButton(data.Frontend, out); }) //Kutsume getButton() funktsiooni
            .catch(error => { console.error('There was a problem with the fetch operation:', error);}); //Kõik pole ok, anname errori
    });
    document.getElementById('buttonback').addEventListener('click', function() { //Kõik sama
        out='outputA';
        fetch('data.json')
            .then(response => {
                if (!response.ok) { throw new Error('Network response was not ok'); }
                return response.json();
            })
            .then(data => { getButton(data.Backend, out); })
            .catch(error => {console.error('There was a problem with the fetch operation:', error);});
    });
    document.getElementById('buttonfull').addEventListener('click', function() {
        out='outputA';
        fetch('data.json')
            .then(response => {
                if (!response.ok) { throw new Error('Network response was not ok'); }
                return response.json();
            })
            .then(data => { getButton(data.Fullstack, out); })
            .catch(error => {console.error('There was a problem with the fetch operation:', error);});
    });
    A= document.getElementById('outputA')
    const elements = Object.getOwnPropertyNames()
    for(let i=0, i<A.length)
});


// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Attach event listeners to buttons
    document.getElementById('lisaTreening').addEventListener('click', lisaMinuTreening);
    document.getElementById('minuTreening').addEventListener('click', viewMinuTreening);
    document.getElementById('stat').addEventListener('click', displayStats);
    document.getElementById('tumeRez').addEventListener('click', toggleDarkMode);
});
// Uue treeningu moodustamine
function addTreening(event) {
    // Takistame kohest uut submit-i
    event.preventDefault();
    // Kutsume HTML-ist vastused
    const nimi = document.getElementById('treeninguNimi').value;
    const tuup = document.getElementById('treeninguTuup').value;
    const kest = document.getElementById('treeninguKestus').value;
    const intens = document.querySelector('input[name="int"]:checked')?.value || '';
    const sage = document.getElementById('sagedus').value;
    const komment = document.getElementById('kommentaar').value;
    // Moodustame objekti
    const data = {
        n: nimi,
        t: tuup,
        ke: kest,
        i: intens,
        s: sage,
        ko: komment
    };
    // Salvestame
    let workout = JSON.parse(localStorage.getItem('treeningStorage')) || [];
    workout.push(data);
    localStorage.setItem('treeningStorage', JSON.stringify(workout));
    // Kustutame eelneva küsimustiku sisu
    event.target.reset();
    displayMyWorkout();
}

// Vaatame koostatud treeningu kavasid
function displayMyWorkout() {
    const workout = JSON.parse(localStorage.getItem('treeningStorage')) || [];
    const outputFront = document.getElementById('content');
    outputFront.innerHTML = '';
    workout.forEach((trenn, index) => {
        const item = document.createElement('div');
        item.innerHTML = `
            <h3>${trenn.n}</h3>
            <p>Tüüp: ${trenn.t}</p>
            <p>Kestus: ${trenn.ke} minutit</p>
            <p>Intensiivsus: ${trenn.i}</p>
            <p>Sagedus: ${trenn.s} korda nädalas</p>
            <p>Kommentaar: ${trenn.ko}</p>
            <hr>
        `;
        outputFront.appendChild(item);
    });
}
// Function to show the form for adding a workout
function lisaMinuTreening() {
    const lisaLoca = document.getElementById('content');
    //Kustutame eelmise sisu
    lisaLoca.innerHTML = '';
    const f = document.createElement('form');
    //Küsimustiku koostamine
    f.innerHTML = `
        <label for="treeninguNimi">Treeningu Nimi (nt "Jooksmine"):</label>
        <input type="text" id="treeninguNimi" required><br>

        <label for="treeninguTuup">Treeningu Tüüp:</label>
        <select id="treeninguTuup" required>
            <option value="joud">Jõud</option>
            <option value="kardio">Kardio</option>
            <option value="jooga">Jooga</option>
        </select><br>

        <label for="treeninguKestus">Treeningu Kestus (minutites):</label>
        <input type="number" id="treeninguKestus" required><br>

        <label>Intensiivsus:</label>
        <input type="radio" name="int" value="madal" id="madal">
        <label for="madal">Madal</label>
        <input type="radio" name="int" value="keskmine" id="keskmine">
        <label for="keskmine">Keskmine</label>
        <input type="radio" name="int" value="korge" id="korge">
        <label for="korge">Kõrge</label><br>

        <label for="sagedus">Treeningu sagedus (nädalas):</label>
        <input type="number" id="sagedus" required><br>

        <label for="kommentaar">Kommentaar (soovi korral):</label>
        <input type="text" id="kommentaar"><br>

        <button type="submit">Lisa Treening</button>
    `;

    // Attach event listener to the form
    f.addEventListener('submit', addTreening);
    lisaLoca.appendChild(f);
}
//Vaatame salvestatud treeningukavasid local
function viewMinuTreening() {
    const kavad = document.getElementById('content');
    kavad.innerHTML = '';

    const workout = JSON.parse(localStorage.getItem('treeningStorage')) || [];
    workout.forEach((trenn) => {
        const item = document.createElement('div');
        item.innerHTML = `
            <h3>${trenn.n}</h3>
            <p>Tüüp: ${trenn.t}</p>
            <p>Kestus: ${trenn.ke} minutit</p>
            <p>Intensiivsus: ${trenn.i}</p>
            <p>Sagedus: ${trenn.s} korda nädalas</p>
            <p>Kommentaar: ${trenn.ko}</p>
            <hr>
        `;
        kavad.appendChild(item);
    });
}
// Placeholder functions for stats and dark mode
function displayStats() {
    const workout = JSON.parse(localStorage.getItem('treeningStorage')) || [];
    let jou = 0; // jõud count
    let kar = 0; // kardio count
    let joo = 0; // jooga count
    let train = 0; // total workouts count
    let wPerWeek = 0; // total workouts per week (sum of frequencies)
    let tPerWorkout = 0; // total workout time
    // Käime tsükkliga läbi kõik salvestatud trennid
    workout.forEach((trenn) => {
        train++;
        wPerWeek += parseInt(trenn.s); // Add frequency to total workouts per week
        tPerWorkout += parseInt(trenn.ke); // Add duration to total workout time
        // Loeme trennide tüübid
        if (trenn.t === 'joud') {
            jou++;
        } else if (trenn.t === 'kardio') {
            kar++;
        } else if (trenn.t === 'jooga') {
            joo++;
        } else {
            console.log('error display stats grupp, please fix');
        }
    });
    //Keskmine treeningu aeg
    const avgPerWorkout = train > 0 ? (tPerWorkout / train).toFixed(2) : 0;
    // Näitame statistikat
    const kavad = document.getElementById('content');
    kavad.innerHTML = ''; // Clear previous content
    const item = document.createElement('div');
    item.innerHTML = `
        <p><strong>Nädala kohta statistika</strong></p>
        <p>Trennide arv kokku: ${train}</p>
        <p>Trennide kogu aeg: ${tPerWorkout} minutit</p>
        <p>Trennide keskmine aeg: ${avgPerWorkout} minutit</p>
        <p><strong>Harjutuste tüübid:</strong></p>
        <p>Jõu harjutus: ${jou}</p>
        <p>Kardio harjutus: ${kar}</p>
        <p>Jooga harjutus: ${joo}</p>
        <p><strong>Kokku treeninguid nädalas:</strong> ${wPerWeek}</p>
    `;
    kavad.appendChild(item); //Paneme selle ekraanile
}
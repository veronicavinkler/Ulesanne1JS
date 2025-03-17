document.addEventListener('DOMContentLoaded', function () {
    function getButton(data, outputID) {
        const outputFront = document.getElementById(outputID);
        //Eelmise outputi kustutamine
        outputFront.innerHTML = '';

        //Spetsiifilised vormingud iga võtme jaoks
        const elementKeys = {
            title: 'h2',
            description: 'p',
            url: 'a'
        };
        //Paragraafide, tiitlike ja video linkide loomine
        function renderElements(value) {
            if (Array.isArray(value)) {
                value.forEach(item => renderElements(item));
            }
            else if (typeof value === 'object' && value !== null) {
                for (const key in value) {
                    if (elementKeys.hasOwnProperty(key)) {
                        const elementType = elementKeys[key];
                        const element = document.createElement(elementType);
                        if (key === 'url') {
                            element.textContent = 'vaata ka selle kohta videot';
                            element.href = value[key];
                            //Open link in a new tab
                            element.target = '_blank';
                        }
                        else if(key ==='pic'){
                            const outputFront = document.getElementById('pilt');
                            outputFront.innerHTML += `<img src="${value[key]}">`;
                        }
                        else {element.textContent = value[key];}
                        element.classList.add('nested-info');
                        outputFront.appendChild(element);
                    }
                    else {
                        console.log(`Unexpected key in JSON: ${key}. Please fix.`);
                    }
                }
            }
        }
        //Loome nuppud ja elemendid
        for (const key in data) {
            if (data.hasOwnProperty(key) && isNaN(key)) {
                const value = data[key];

                if (elementKeys.hasOwnProperty(key)) {
                    // Create element for specific keys
                    const elementType = elementKeys[key];
                    const element = document.createElement(elementType);

                    if (key === 'url') {
                        element.textContent = 'vaata ka selle kohta videot';
                        element.href = value;
                        // Open link in a new tab
                        element.target = '_blank';
                    }
                    else if(key === 'pic'){
                        const outputFront = document.getElementById('pilt');
                        outputFront.innerHTML += `<img src="${value[key]}">`;
                    }
                    else {
                        element.textContent = value;
                    }
                    element.classList.add('nested-info');
                    outputFront.appendChild(element);
                }
                else if (typeof value === 'object' && value !== null) {
                    if (Array.isArray(value)) {
                        //Handle arrays
                        value.forEach(item => renderElements(item));
                    }
                    else {
                        // Create button for nested objects
                        const button = document.createElement('button');
                        button.textContent = key;
                        button.classList.add('nested-button');
                        outputFront.appendChild(button);

                        //Add click event listener to the button
                        button.addEventListener('click', function () {
                            //Eemalda kõik varasemad väärtused
                            const existingNestedOutputs = outputFront.querySelectorAll('.nested-output');
                            existingNestedOutputs.forEach(output => output.remove());

                            //Uus div peidetud väärtusteks
                            const nestedOutput = document.createElement('div');
                            nestedOutput.id = `nested-${key}`;
                            nestedOutput.classList.add('nested-output');
                            outputFront.appendChild(nestedOutput);

                            //Käib läbi kõik peidetud väärtused
                            getButton(value, nestedOutput.id);
                        });
                    }
                }
                else {
                    //Create paragraph for other values
                    const description = document.createElement('p');
                    description.textContent = value;
                    outputFront.appendChild(description);
                }
            }
        }
    }
    //Fetch data from JSON and render buttons
    function fetchData(category) {
        const out = 'content';
        fetch('data.json')
            .then(response => {
                if (!response.ok) { throw new Error('Network response was not ok');}
                return response.json();
            })
            .then(data => getButton(data[category], out))
            .catch(error => {
                console.error('Fetch error:', error);
                const outputFront = document.getElementById(out);
                outputFront.innerHTML = `<p style="color: red;">Error loading data. Please try again later.</p>`;
            });
    }
    //Event listeners for main buttons
    document.getElementById('buttonfront').addEventListener('click', () => fetchData('Frontend'));
    document.getElementById('buttonback').addEventListener('click', () => fetchData('Backend'));
    document.getElementById('buttonfull').addEventListener('click', () => fetchData('Fullstack'));
});
document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.createElement('button');
    themeToggleButton.className = 'theme-toggle-button';
    themeToggleButton.innerText = 'Switch to Dark Mode';
    document.body.appendChild(themeToggleButton);

    // Retrieve and apply the saved theme from localStorage (default is light)
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark-background', currentTheme === 'dark');
    updateButtonText();

    // Add an event listener for the button
    themeToggleButton.addEventListener('click', () => {
        const isDarkMode = document.documentElement.classList.toggle('dark-background');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        updateButtonText();
    });

    function updateButtonText() {
        const isDarkMode = document.documentElement.classList.contains('dark-background');
        themeToggleButton.innerText = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }
});


// Funkcija atnaujinti laikrodį
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000); // Atnaujinti kas sekundę
updateClock(); // Iškvietimas iš karto



//forma

function saveData() {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const number1 = parseInt(document.getElementById("number1").value);
    const number2 = parseInt(document.getElementById("number2").value);
    const number3 = parseInt(document.getElementById("number3").value);
    const number4 = parseInt(document.getElementById("number4").value);
    const number5 = parseInt(document.getElementById("number5").value);

    // Telefono numerio patikra
    const phoneRegex = /^[0-9]{1,10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Telefono numeris turi būti sudarytas tik iš skaičių ir ne ilgesnis nei 10 simbolių.");
        return; // Nutraukti funkciją, jei klaida
    }

    // El. pašto patikra
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("Neteisingas el. pašto adresas.");
        return; // Nutraukti funkciją, jei klaida
    }

    // Adreso patikra
    const addressRegex = /^[A-Za-z0-9\s,.-]+$/;
    if (address.length < 5 || !addressRegex.test(address)) {
        alert("Adresas turi būti bent 5 simbolių ilgio ir leisti tik raides, skaičius, tarpus ir pagrindinius skyrybos ženklus.");
        return; // Nutraukti funkciją, jei klaida
    }

    // Skaičių patikra nuo 1 iki 5
    const numbers = [number1, number2, number3, number4, number5];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 1 || numbers[i] > 5) {
            alert("Visi skaičiai turi būti nuo 1 iki 5.");
            return; // Nutraukti funkciją, jei klaida
        }
    }

    // Duomenys į objektą
    const formData = {
        name: name,
        surname: surname,
        email: email,
        phone: phone,
        address: address,
        numbers: numbers
    };

    // Skaičiuojame požymių vidurkį
    const average = formData.numbers.reduce((a, b) => a + b, 0) / formData.numbers.length;

    // Atvaizduojame duomenis naršyklės terminale
    console.log(formData);

    // Atvaizduojame duomenis puslapyje
    let resultText = `Vardas: ${formData.name}\nPavardė: ${formData.surname}\nEl. paštas: ${formData.email}\nTelefonas: ${formData.phone}\nAdresas: ${formData.address}\nPožymiai: ${formData.numbers.join(', ')}`;
    document.getElementById("result").textContent = resultText;

    // Atvaizduojame požymių vidurkį
    let averageText = `Požymių vidurkis: ${average}`;
    document.getElementById("average").textContent = averageText;

    // Vidurkio spalva pagal reikšmę
    let averageColor = "";
    if (average < 3) {
        averageColor = "red";
    } else if (average < 5) {
        averageColor = "orange";
    } else {
        averageColor = "green";
    }
    document.getElementById("average").style.color = averageColor;
}


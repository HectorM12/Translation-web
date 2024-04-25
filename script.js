const res = await fetch("https://libretranslate.com/translate", {
	method: "POST",
	body: JSON.stringify({
		q: "",
		source: "auto",
		target: "en",
		format: "text",
		api_key: ""
	}),
	headers: { "Content-Type": "application/json" }
});

console.log(await res.json());

const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    // Add more languages as needed
];

// Function to populate the language dropdown
function populateLanguages() {
    const languageSelect = document.getElementById('languageSelect');
    languages.forEach(language => {
        const option = document.createElement('option');
        option.text = language.name;
        option.value = language.code;
        languageSelect.appendChild(option);
    });
}

// Function to handle translation
async function translateText() {
    const wordInput = document.getElementById('wordInput').value;
    const languageSelect = document.getElementById('languageSelect');
    const targetLanguage = languageSelect.options[languageSelect.selectedIndex].value;

    try {
        // Translation logic here
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('translationResult').innerText = 'Translation failed. Please try again later.';
    }
}

// Populate languages dropdown when the page loads
document.addEventListener('DOMContentLoaded', () => {
    populateLanguages();
});

// Translate button click event listener
document.getElementById('translateBtn').addEventListener('click', () => {
    translateText();
});
/**
 * Improved version of the greet function.
 * @param {string} name - The name to greet.
 * @param {string} language - The language for the greeting (optional).
 */
function greet(name, language = 'en') {
    // Input validation for name
    if (!name || typeof name !== 'string') {
        console.error('Invalid input. Please provide a valid name.');
        return;
    }

    // Multilingual greetings
    let greeting;
    switch (language.toLowerCase()) {
        case 'en':
            greeting = `Hello, ${name}!`;
            break;
        case 'es':
            greeting = `¡Hola, ${name}!`;
            break;
        // Add more cases for additional languages
        default:
            greeting = `Hello, ${name}!`;
    }

    // Output the greeting
    console.log(greeting);
}

// Examples
greet('John'); // Default English greeting
greet('Maria', 'es'); // Spanish greeting
greet(); // Invalid input example

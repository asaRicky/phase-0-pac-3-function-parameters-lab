function logTwoValues(value1, value2) {
    console.log(`The two values are ${value1} and ${value2}.`);
}

function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
}

function sayHelloTo(firstName = "User") {
    console.log(`Hello, ${firstName}!`);
}

// function to return an introduction phrase with the given name
function introduction(name) {
    return `Hi, my name is ${name}.`;
}

// function to return an introduction phrase with the given name and language
function introductionWithLanguage(_name, _language = "Ember.js") {
    return `Hi, my name is ${_name} and I am learning to program in ${_language}.`;
}

// function to return an introduction phrase with the given name and defaulting to JavaScript if no language is provided
function introductionWithLanguageOptional(_name, _language = "JavaScript") {
    return `Hi, my name is ${_name} and I am learning to program in ${_language}.`;
}

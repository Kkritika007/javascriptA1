const options = {
    noun: ['dog', 'cat', 'book', 'friend', 'tree'],
    verb: ['ran', 'jumped', 'sang', 'ate', 'sleeps'],
    adjective: ['happy', 'sad', 'funny', 'tall', 'short'],
    adverb: ['quickly', 'slowly', 'loudly', 'softly', 'eagerly'],
    place: ['park', 'beach', 'mountain', 'city', 'forest']
};

let userChoices = {
    noun: '',
    verb: '',
    adjective: '',
    adverb: '',
    place: ''
};

function selectWord(category) {
    const categoryOptions = options[category];
    const selectedOption = prompt(`Select a ${category}:\nOptions: ${categoryOptions.join(', ')}`);
    
    if (categoryOptions.includes(selectedOption)) {
        userChoices[category] = selectedOption;
        updateSelectedWords();
    } else if (selectedOption !== null) {
        alert(`Invalid ${category} selected. Please choose from the provided options.`);
    }
}

function updateSelectedWords() {
    const selectedWordsDiv = document.getElementById('selected-words');
    selectedWordsDiv.innerHTML = Object.keys(userChoices).map(category => `${category}: ${userChoices[category]}`).join('<br>');
}

function showSelectedStory() {
    const { noun, verb, adjective, adverb, place } = userChoices;
    if (noun && verb && adjective && adverb && place) {
        const selectedStory = `Selected Story: Once upon a time, a ${adjective} ${noun} ${verb} ${adverb} in a ${place}.`;
        document.getElementById('story').textContent = selectedStory;
    } else {
        alert('Please select all words before showing the story.');
    }
}

function generateRandomStory() {
    for (const category in userChoices) {
        const randomIndex = Math.floor(Math.random() * options[category].length);
        userChoices[category] = options[category][randomIndex];
    }
    updateSelectedWords();
    showSelectedStory();
}

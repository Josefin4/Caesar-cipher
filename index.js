const alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
];

const form = document.forms[0];
const enc = document.getElementById('enc');
const dec = document.getElementById('dec');

form.addEventListener('submit', event => {
    event.preventDefault();
    enc.innerHTML = [...form.plaintext.value].map(char => encode(char)).join('');
    dec.innerHTML = [...form.plaintext.value].map(char => decode(char)).join('');
}
);


function encode(char) {
    const shifts = Number(form.shifts.value);
    if (alphabet.includes(char.toUpperCase())) {
        const position = alphabet.indexOf(char.toUpperCase());
        const newPosition = (position + shifts) % 26;
        return alphabet[newPosition]
    }
    else {
        return char
    }
}

function decode(char) {
    const shifts = Number(form.shifts.value);
    if (alphabet.includes(char.toUpperCase())) {
        const position = alphabet.indexOf(char.toUpperCase());
        const newPosition = (position - shifts) % 26;
        return alphabet[newPosition]
    }
    else {
        return char
    }
}
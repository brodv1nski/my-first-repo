function decode() {
    secretMessage = document.getElementById('secondMessage').value
        .split(' ').map(secretWord =>
            String.fromCharCode(secretWord.split('').reduce((prev, curr) =>
                Number(prev) + Number(curr)
            ))
        ).join('');
    document.getElementById('secondValues').innerHTML = secretMessage
};



function arrowToNum(num) {
    let arr = []
    let x = num;
    while (true) {
        let y = Math.floor(Math.random() * 10);
        x = x - y;
        arr.push(y);
        if (x < 9) {
            arr.push(x)
            break;
        }
    }
    return arr
}

let str2;

function encode() {
    let str = document.getElementById('message').value;
    if (!(/^[A-Za-z0-9_\s]+$/gm).test(str)) {
        alert('You can only enter english letters, numbers and special characters')
    } else if (str.length > 10) {
        alert('Max length is 10')
    } else {
        let str2 = str
            .split('')
            .map((letter) => arrowToNum(letter.charCodeAt()).join(""))
            .join(' ');
        document.getElementById("values").innerHTML = str2;
    }
}
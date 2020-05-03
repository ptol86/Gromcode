String.prototype.toAlternatingCase = function() {

    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (this.charAt(i) === this.charAt(i).toUpperCase()) {
            arr.push(this.charAt(i).toLowerCase());
        } else if (this.charAt(i) === this.charAt(i).toLowerCase()) {
            arr.push(this.charAt(i).toUpperCase())
        } else arr.push(this.charAt(i));

    }
    return arr.join("");
}
String.prototype.isUpperCase = function() {
    for (let i = 0; i < this.length; i++) {
        if (this.charAt(i) !== this.charAt(i).toUpperCase()) {
            return false;
        }
    }

    return true;
}

function arrayMadness(a, b) {
    let sumA = 0;
    let sumB = 0;
    for (let i = 0; i < sumA.length; i++) {
        sumA += sumA[i] ** 2;
    }

    for (let i = 0; i < sumB.length; i++) {
        sumB += sumB[i] ** 3;
    }
    return sumA > sumB;
}

function arrayMadness(a, b) {
    let sumA = 0;
    let sumB = 0;
    a.map(num => { sumA += Math.pow(num, 2) });
    b.map(num => { sumB += Math.pow(num, 3) });
    return sumA > sumB;
}
let someA = someB = 0;

function correctPolishLetters(string) {
    let polishDict = {
        "ą": "a",
        "ć": "c",
        "ę": "e",
        "ł": "l",
        "ń": "n",
        "ó": "o",
        "ś": "s",
        "ź": "z",
        "ż": "z"
    };
    let arr = string.split("");
    for (let i = 0; i < arr.length; i++) {
        let result = polishDict[arr[i]];
        if (typeof result !== "undefined") {
            arr[i] = polishDict[arr[i]];
        }

    }

    return arr.join("");
}

function expressionMatter(a, b, c) {
    let arr = [];
    arr.push(a * (b + c));
    arr.push(a + b + c);
    arr.push(a * b * c);
    arr.push(a * b + c);
    arr.push((a + b) * c);
    arr.push(a + b * c);


    return Math.max.apply(Math, arr);
}

function strCount(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {
            count += 1;
        }
    }
    return count;
}

function strCount(str, letter) {
    return str.split('').filter((curLetter) => curLetter === letter).length;
}

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return (distanceToPump <= (mpg * fuelLeft));
};

function differenceInAges(ages) {
    let arr = [];
    arr.push(Math.min.apply(Math, ages));
    arr.push(Math.max.apply(Math, ages));
    arr.push(Math.max(ages)) - (Math.min(ages));
    return arr;
}

function removeEveryOther(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}
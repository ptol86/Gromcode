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
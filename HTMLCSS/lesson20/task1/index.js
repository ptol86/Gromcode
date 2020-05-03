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
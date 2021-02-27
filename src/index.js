module.exports = function reverse (n) {
    let num = String(n).split("");
    if (num[0] === '-') {
        num.shift();
        return Number(num.reverse().join(""))
    } else {
        return Number(num.reverse().join(""))
    }
}

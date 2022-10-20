const numberToRoman = (num) => {
    let str = '';
    const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    for (let i = 0; i < val.length; i++) {
        while (num >= val[i]) {
            num = num - val[i];
            str += roman[i];
        }
    }
    return str;
}

console.log(numberToRoman(30))

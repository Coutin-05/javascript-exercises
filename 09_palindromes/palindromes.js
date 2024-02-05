const palindromes = function (str) {
    //regular expression (regex) to remove all non-alphanumeric caracters -punctuation, spaces, symbols- 
    let re = /[^A-Za-z0-9]/g;
    //turn everything lowercase
    lowRegStr = str.toLowerCase().replace(re, "");
    reverseStr = lowRegStr.split("").reverse().join("");
    return reverseStr === lowRegStr;
    
};

// Do not edit below this line
module.exports = palindromes;

function solution(s) {
    let str = s.toLowerCase();
    let newStr = str.replace(/\b[a-z]/g, char => char.toUpperCase());
    return newStr;
}
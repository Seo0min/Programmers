function solution(s) {
    let answer = '';
    let arr = s.split('')
    arr.sort();
    arr.reverse();
    answer = arr.join('')
    return answer;
}
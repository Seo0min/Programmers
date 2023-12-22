function solution(n) {
    let answer = '';
    let str = "수박";
    if (n%2===1) { //홀수일 때 
        answer = str.repeat(Math.floor(n/2))+"수"
    } else { //짝수일 때 
        answer = str.repeat(n/2)
    }
    return answer;
}
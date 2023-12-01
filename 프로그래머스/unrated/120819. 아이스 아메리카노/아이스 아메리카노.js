function solution(money) {
    let coffee = money % 5500;
    let change = Math.floor(money/5500);
    let answer = [change, coffee];
    return answer;
}
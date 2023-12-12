function solution(order) {
    let answer = 0;
    let str = order.toString();
    for(let i = 0; i < str.length; i++) {
        if(str[i] % 3 === 0 && str[i] !== '0') {
            answer += 1
        }
    }
    return answer;
}
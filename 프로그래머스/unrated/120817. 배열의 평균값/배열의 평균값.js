function solution(numbers) {
    let answer = 0;
 
    for(let i = 0; i < numbers.length; i++){
        answer += numbers[i];
    }
    return answer/numbers.length;
}
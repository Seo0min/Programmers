function solution(numbers) {
    let answer = [];
    let arr = [];
    
    for (let i = 0; i < numbers.length-1; i++){
        for(let j = i+1; j < numbers.length; j++) {
            arr.push(numbers[i] + numbers[j])
        }
    }
    arr.sort(function (a,b) {
             return a - b;
    });
    
    answer = [...new Set(arr)]
    
    return answer;
}
function solution(n) {
    let answer = 0;
    let arr = [];
    
    for (let x = 0; x < n; x++) {
        if (n % x == 1){
            arr.push(x)
        }
    }
    answer = arr[0];
    return answer;
}
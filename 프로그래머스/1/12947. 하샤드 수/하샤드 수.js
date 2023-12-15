function solution(x) {
    let answer = true;
    let arr = [];
    let sum = 0;
    
    arr = String(x).split("")
    for (let i=0; i<arr.length; i++) {
        sum += parseInt(arr[i]);
    }

    if(x % sum == 0) {
        answer = true
    } else {
        answer = false
    }
    
    return answer
   
}
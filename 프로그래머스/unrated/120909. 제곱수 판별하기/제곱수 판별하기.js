function solution(n) {
    let answer = Math.sqrt(n);
    if(Number.isInteger(answer)){
        return 1
    } else {
        return 2
    }
}
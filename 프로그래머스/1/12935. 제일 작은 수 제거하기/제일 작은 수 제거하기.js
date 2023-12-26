function solution(arr) {
    let answer = [];
    if (arr.length<=1){
        return [-1];
    } else {
        arr.splice(arr.indexOf(Math.min(...arr)),1);
        answer = arr;
        console.log(answer)
    }
    return answer;
}
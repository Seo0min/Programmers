function solution(numbers) {
    let answer = 0;
    let index = 0;
    let arr=[0,1,2,3,4,5,6,7,8,9]

    for(let i=0; i<arr.length; i++){
        index = numbers.indexOf(arr[i]);
        if(index === -1) {
            answer += i
        }
    }
    return answer;
}
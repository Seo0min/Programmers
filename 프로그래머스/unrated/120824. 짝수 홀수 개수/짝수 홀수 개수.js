function solution(num_list) {
    let evenNum = [];
    let oddNum = [];
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] % 2 === 0) {
            evenNum.push(num_list[i])
        } else {
            oddNum.push(num_list[i])
        }
    }
    return [evenNum.length, oddNum.length];
}
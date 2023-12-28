function solution(t, p) {
    let result = 0;
    for(let i = 0; i <= t.length - p.length; i++) {
        let slice = t.slice(i, i + p.length);
        console.log(slice)
        if(slice <= p) {
            result++; 
        }
    }
    return result;
}
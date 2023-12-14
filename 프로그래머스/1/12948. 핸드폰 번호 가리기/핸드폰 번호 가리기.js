function solution(phone_number) {
    let answer = '';
    let front = phone_number.length-4;
    let slice = phone_number.slice(-4)
    
    return "*".repeat(front)+slice;
}
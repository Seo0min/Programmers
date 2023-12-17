function solution(price, money, count) {
    let answer = 0;
    let ans = 0
    
    for (let i=1; i<=count; i++){
        ans += price*i 
    }

    if(money>=ans){
        answer = 0
    } else {
        answer = -(money - ans)
    }
    return answer;
}

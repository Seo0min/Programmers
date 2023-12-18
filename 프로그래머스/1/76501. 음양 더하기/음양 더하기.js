function solution(absolutes, signs) {
    let ans1 = 0;
    let ans2 = 0;
    
    for (let i = 0; i < signs.length; i++){
        if(signs[i] === true){
            ans1 += absolutes[i]
        } else {
            ans2 += absolutes[i]*-1
        } 
    
    }
    return ans1+ans2;
}
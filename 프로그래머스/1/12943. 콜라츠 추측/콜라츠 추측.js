function solution(num) {
    let answer = 0;
    while(num != 1){//숫자가 1이 될 때까지
            
            answer +=1; //반복 횟수 증가
            
        if(num%2==0){//짝수인 경우
                num /= 2;
            }else{//홀수인 경우
                num = num*3 + 1;
            }
            
        }
        
        if(answer >= 500){ //반복 횟수가 500이 넘는 경우
         answer = -1;
        }
    
    return answer;
}
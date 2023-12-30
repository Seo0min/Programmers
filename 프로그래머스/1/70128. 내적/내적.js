function solution(a, b) {
    let answer = 0;
    let array = a.map((x, y) => x * b[y]) 
   
    for(let i=0; i<array.length; i++){
        answer+=array[i]
    }
    
          
    return answer;
    }
   

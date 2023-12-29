function solution(s, n) {
    let answer = '';
    let num = 0;
  
    for(let i=0; i<s.length; i++){
        num = s.charCodeAt(i)

      if (num >= 65 && num <= 90) {
          num += n
        if (num >= 91) {
            num -= 26
        }
    }
    if (num >= 97 && num <= 122) {
         num += n
        if (num >= 123) {
            num -= 26
        }
      } 
         answer += String.fromCharCode(num);
    }
        
    return answer;
   
}
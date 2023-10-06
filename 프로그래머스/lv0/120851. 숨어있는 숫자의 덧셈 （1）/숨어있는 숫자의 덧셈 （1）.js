function solution(my_string) {
let answer = 0
   let number = my_string.replaceAll(/[A-z]/g, "").split("")
   for(let i = 0; i < number.length; i++) {
       answer += Number(number[i])
   }
    return answer
}
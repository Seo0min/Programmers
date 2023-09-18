function solution(my_string) {
    let answer = my_string;
    let vowel = ["a", "e", "i", "o", "u"];
    for(let i = 0; i < vowel.length; i++) {
            answer = answer.replaceAll(vowel[i], "")
        }
    return answer
    }
    

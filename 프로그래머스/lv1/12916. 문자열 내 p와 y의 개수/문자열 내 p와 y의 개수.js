function solution(s){
    let change = s.toLowerCase();
    let numberP = change.split("p").length;
    let numberY = change.split("y").length;
    
    if(numberP === numberY){
        return true;
    } else {
        return false;
    }
}
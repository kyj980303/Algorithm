function solution(letter) {
    let arr = letter.split(" ");
    let mos = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let alp = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",
               "q","r","s","t","u","v","w","x","y","z"]
   
    let result = "";
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < mos.length; j++) {
            if (arr[i] === mos[j]) {
                result += alp[j];
            }
        }   
    }
    
    return result;
}
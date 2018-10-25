'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let letter = ""
let result = ""
function jadenCase(text){
    for(let i = 0; i < text.length; i++){
        letter = text[i]
        if(letter == " "){
            result += " ";
            i = i +1;
            for(let j = 0; j < 26; j++){
                if(text[i] === alpha[j]){
                    result += text[i].toUpperCase()
                    
                }
            }         
        }else{
            result += letter;
        
        }
    }
    
    console.log(result.charAt(0).toUpperCase() + result.substring(1))
}

jadenCase("hello world hello")



//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof jadenCase, "function")
// End of tests */

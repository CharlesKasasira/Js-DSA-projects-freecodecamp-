// A palindrome is a word or sentence that's spelled the same way both forward 
// and backward, ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters 
//(punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.



function palindrome(str){
    let re = /[ ,.*#_$@!%^&()+=/;:?<>-]/g
    str = str.toLowerCase().replace(re, '')
    console.log(str)
    let letters = str.split('')
    let reversed = []

    for(let i = letters.length-1; i >= 0; i--){
        reversed.push(letters[i])
    }
    if(reversed.join('') === str) return true
    return false 
}

console.log(palindrome('0_0 (: /-\ :) 0-0')) // true
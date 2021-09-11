// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
// In a shift cipher the meanings of the letters are shifted by some set amount.

// The shift amount can be a positive or negative integer (a positive shift signifies a shift to right whereas negative to left).


function rot13(str) {
    return str.toUpperCase().replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0)-65 + 13 ) % 26 + 65));
  }
  
  console.log(rot13("SERR PBQR PNZC"))
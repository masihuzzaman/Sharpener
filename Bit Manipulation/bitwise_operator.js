//=============================
//  JavaScript Bitwise AND (&)
//=============================
//  5 = 0101
//  5 = 0001
//  &--------
//      0001 = 1
console.log(5 & 1);

//============================
//  JavaScript Bitwise XOR (^)
//============================
//  5 = 0101
//  5 = 0001
//  ^--------
//      0100 = 4
console.log(5 ^ 1);

//============================
//  JavaScript Bitwise OR (|)
//============================
//  5 = 0101
//  5 = 0001
//  |--------
//      0101 = 5
console.log(5 | 1);

//============================
//  JavaScript Bitwise NOT (~)
//============================
//  5 = 0000 0101
// ~5 = 1111 1010 (-6)
console.log(~5);

//============================
//  JavaScript (Zero Fill) Bitwise Left Shift (<<)
//============================
//  This is a zero fill left shift. One or more zero bits are pushed in from the right, and the leftmost bits fall off:

//      5 = 0000 0101
//   5<<1 = 0000 1010   (10)
console.log(5 << 1);

//============================
//  JavaScript (Sign Preserving) Bitwise Right Shift (>>)
//============================
//  This is a sign preserving right shift. Copies of the leftmost bit are pushed in from the left, and the rightmost bits fall off:

//      5 = 0000 0101
//   5>>1 = 0000 0010   (2)
console.log(5 >> 1);

//     -5 = 1111 1011
//  -5>>1 = 1111 1101   (-3)
console.log(-5 >> 1);


//===========================
//  JavaScript (Zero Fill) Right Shift (>>>)
//===========================
//  This is a zero fill right shift. One or more zero bits are pushed in from the left, and the rightmost bits fall off:

//      5 = 0000 0101
//  5>>>1 = 0000 0010   (2)
console.log(5 >>> 1);


//===========================
//  Converting Decimal to Binary
//===========================
function dec2bin(dec){
    return (dec >>> 0).toString(2);
  }
console.log((15 >>> 0).toString(16))
console.log((-5 >>> 0).toString(2))
console.log((5 >>> 0).toString(2))

//===========================
//  Converting Binary to Decimal
//===========================
function bin2dec(bin){
    return parseInt(bin, 2).toString(10);
  }
console.log(parseInt(1111, 2).toString(16))
console.log(parseInt(101, 2).toString(10))
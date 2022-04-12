// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
//   return str.split('').reverse().join('');
//////////////////////////////
    // let tmp='';
    // for(let i=str.length-1;i>=0;i--){
    //     tmp=tmp+str[i];
    // }
    // return tmp
    
////////////////////////////////

    // let revString='';
    // str.split('').forEach(char => revString=char+revString);
    // return revString;
//////////////////////////////

    return str.split('').reduce((revString,char)=>(
         char+revString),'')
    
    
}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
    var tmp=str.split('').reverse().join('');
    if(tmp==str)return true;
    return false;
}



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
    const revInt=int.toString().split('').reverse().join('');
    return parseInt(revInt)*Math.sign(int);
    
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
    // let ans='';
    // for(let i=0;i<str.length;i++){
    //     if(i==0 || str[i-1]==' ')ans+=str[i].toUpperCase();
    //     else ans+=str[i];
    // }
    // return  ans;
    ////////////////////////////////////
    
    return str.split(' ').map((char)=> char[0].toUpperCase()+char.substr(1)).join(' ');
    
    
}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
    const mapc={};
    let ans;
    let maxx=0;
    str.split('').forEach((char)=>{
    if(mapc[char]){
        mapc[char]++;
    }
    else {
        mapc[char]=1;
    }}
    )
    
    for(let char in mapc){
        if(mapc[char]>maxx){
            maxx=mapc[char];
            ans=char;
        }
    }
    return ans;
}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
    for(let i=1;i<=100;i++){
        if(i%15==0){
            console.log("FizzBuzz");
        }
        else if(i%5==0){
            console.log("Buzz");
        }
        else if(i%3==0){
            console.log("Fizz")
        }
        else console.log(i);
    }
}



// Call Function
const output = maxCharacter("javascript");
fizzBuzz();

console.log(output);

// let i;
// for(i=1;i<=100;i++){
//     if(i%3==0 && i%5==0){
//         console.log("FizzBuzz");
//     }
//     else if(i%3==0){
//         console.log("Fizz");
//     }
//     else if(i%5==0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(i);
//     }
// }




// function Palindrome(str) {
//     const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//     const reversedStr = cleanedStr.split('').reverse().join('');
//     return cleanedStr === reversedStr;
//   }
//   console.log(Palindrome("racecar"));
//   console.log(Palindrome("hello"));
  




// function Largenum(num) {
//     let largest = num[0];
//     for (let i = 1; i < num.length; i++) {
//       if (num[i] > largest) {
//         largest = num[i];
//       }
//     }
//     return largest;
//   }
//   console.log(Largenum([1, 5, 3, 9, 2])); 
  



// function occ(str) {
//     const charCount = {};
//     for (let char of str) {
//       if (charCount[char]) {
//         charCount[char]++;
//       } else {
//         charCount[char] = 1;
//       }
//     }
//     return charCount;
//   }
//   console.log(occ("hello")); 





// function longword(str) {
//     const words = str.split(/\s+/);  
//     let longestWord = '';  
//     for (let word of words) {
//       if (word.length > longestWord.length) {
//         longestWord = word;
//       }
//     }
//     return longestWord;
//   }
//   console.log(longword("my name is Alexander"));




// function factorial(n) {
//     if (n === 0 || n === 1) {
//       return 1;
//     }
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//       result *= i;
//     }
//     return result;
//   }  
//   console.log(factorial(5));

  
 
  
// function CeltoFar(celsius) {
//     return (celsius * 9/5) + 32;
//   }
//   console.log(CeltoFar(25)); 




// function missingNumber(arr){
//   let n=arr.length+1;
//   let sum=(n*(n+1))/2;
//   let sum1=0;
//   for(let i of arr){
//       sum1+=i;
//       }
//       return sum-sum1;
// }
// console.log(missingNumber([1,2,3,4,6,7]));
  
  









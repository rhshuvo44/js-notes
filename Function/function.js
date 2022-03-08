//এক কাজ বার বার করার জন্য function ব্যবহার করা হয় ,

// function কল করাকে programming ভাষায় invoked বলে,

// প্রতিটি function এ hiden argument paramiter থাকে ,যেমন ঃ
// function anything(){
//     var sum = 0;
//     for(var i in arguments){
//         sum = sum + arguments[i]
//     }
//     return sum;

// }

// anything();
// anything(10);
// console.log(anything(10,20,30));


// ইউজার ডিফাইন্ড function 4 প্রকার


// 1. function declaration
// ------------------------------ 
// function name( parametar) {
//     console.log('hello');  /// function startment
/////// function boby
// }
// 2. function expression
// ------------------------------ 
//   const name = function (){

//   }
// 3.IIFE (Immediately Invoked Function Expression) 
// ---------------------
// (function() {
//     statements
// })();

// 4. arrow Function
// -------------------------- 

// single line হলে return লেখতে হবে না ,multi line হলে return লেখতে হবে ..
// const name = (parametar) => { statment};

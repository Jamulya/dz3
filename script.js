// //1
// function num(a, b) {
//   if (a > b){
//     return a
// } else if (b < a) {
//   return b
// }else{
//    return "a === b"
// }
// }
// console.log(num(5,4));
// console.log(num(5,8));
// console.log(num(5,5));

// var num = function(a,b){
//   if(a > b){
//     return a
//   }else if (b < a){
//     return b
//   }else {
//     return "a === b"
//   }
// }
// console.log(num(5,4));
// console.log(num(5,8));
// console.log(num(5,5));

//2 
findChar("abbcccddddd", "d")
function findChar(text,char){
  console.log("найти " + char + ' внутри ' +text);
  for (var i = 0; i < text.length; i++){
   if (text[i] === char){
     console.log(`${char} найден по индексу ${i}`);
   }
  } 
}

//3
//  function avg() {
//    var res = 0
//    var a = []
//    var b = Array.from(arguments)
//   for (var i = 0; i < b.length; i++){
//     if (typeof b[i] === 'number'){
//       a.push(b[i])
//     }
//   }
//   for (var i = 0; i < a.length; i++) {res+=a[i] / a.length}

//   return res
// }
// console.log(avg(1,2,3));
// console.log(avg(1,2,3,4));
// console.log(avg());



  


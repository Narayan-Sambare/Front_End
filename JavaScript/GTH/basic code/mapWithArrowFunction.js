let arr=[10,20,30,40,50];

let newArr=arr.map(test);
function test(value,index,array)
{ 
   return value*2;
}
console.log(newArr);
//  Or
arr=[10,20,30,40,50];
newArr=arr.map((value,index,array)=>value*2);
console.log(newArr);
  // Or
newArr=[10,20,30,40,50].map((value,index,array)=>value*2);
console.log(newArr);
// Or
console.log([10,20,30,40,50].map((value,index,array)=>value*2));

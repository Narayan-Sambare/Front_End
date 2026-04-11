let str='{"id":1,"name":"ABC","sal":10000}';
console.log(typeof(str));
let jsonObj=JSON.parse(str);
console.log(jsonObj);
console.log(typeof(jsonObj));


let obj={"id":1,"name":"ABC","sal":10000}; //JSON object
console.log(typeof(obj));
 str=JSON.stringify(obj); //convert object into string format 
console.log(typeof(str));
console.log(str);

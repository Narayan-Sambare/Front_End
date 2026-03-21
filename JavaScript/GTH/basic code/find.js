let arr=[10,20,30,40,50,30,60,70,80,90,100];

  let result=arr.find(myFunction);
    function myFunction(value){
	  return value>40;
  }
  console.log(result);

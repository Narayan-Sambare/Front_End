let a= new Array(10,20,30,40,50);
console.log("forward direction fetching");
for(var i=0; i<a.length; i++)//forward direction fetching
{  console.log(a.at(i));
}
console.log("Backward direction fetching");
for(var i=-1;i>=-5; i--)
{ console.log(a.at(i));
}

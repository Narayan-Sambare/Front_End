let arr=[2, 7, 4, 9];
let max=0;
for(let i=0;i<arr.length;i++)
{
    if(max<arr[i])
    {
        max=arr[i];
    }
}
console.log(max);
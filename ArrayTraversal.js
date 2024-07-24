const nums=[3,4,1,2,9,7];
for(let i=0;i<nums.length;i++)
{
    console.log(nums[i]);
}
console.log('-----');

for(let i of nums){
    console.log(i);
}
console.log('-----');

nums.forEach((n)=>{console.log(n);} );

console.log('-----');

nums.forEach((n,i)=>{console.log(n,i);} );

console.log('-----');

nums.forEach((n,i,a)=>{console.log(n,i,a);} );


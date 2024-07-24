const nums=[1,2,3,4,5,6];
for(let i=0;i<nums.length;i++)
{ sq=nums[i]*nums[i]
    console.log(sq);
}


console.log('-----');

const n =[1,2,3,4,5,6];
for(let i=0;i<n.length;i++)
{ if(n[i]%2===0)
    console.log(n[i]);
}

console.log('-----');

const arr=[1,2,3,4,5,6,7,8,9,10];
ar=[]

for(let i=0;i<=arr.length;i++)
{ let sqrt= Math.sqrt(arr[i]);

    if(sqrt*sqrt === arr[i]){
        ar.push(arr[i])}}
        console.log(ar);

        console.log('-----');

    
    const x=[100,200,300,400,500];
    y=[]
    for(let i=0;i<x.length;i++){
        p=x[i]- x[i]*(10/100)
        y.push(p)
    }
    console.log(y);

    
   
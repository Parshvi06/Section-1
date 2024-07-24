//prime no.

const n1= 2;
let c=true;
 
for(i=2;i<n1; i++)
{
    if(n1%i===0)
    {
        console.log('not prime');
        prime=false;
        break;
    }
}
if(c)
    console.log('prime');

//wap to reverse a no.

let n2=21657;
let rev=0;

while(n2!=0)
{
    r=n2%10;
    rev=rev*10+r;
    n2=parseInt(n2/10);

}
console.log(rev);

//
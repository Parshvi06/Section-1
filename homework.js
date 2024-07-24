const perfectsq=(a,b)=>{
    for(let i=a;i<=b;i++){

   
   let sqrt= Math.sqrt(i);

if(sqrt*sqrt === i){
    console.log(i);
} }

}

perfectsq(1,10);

const fib=(n1,n2)=>{
    
for(i=2;i<100;++i){
   let n3=n1+n2;
    console.log(n3)
    n1=n2;
    n2=n3
    console.log()
}
    
}
fib(0,1);



const palin=(n2)=>{ 

    let rev=0;
    m=n2;
    while(n2!=0)
        {
            r=n2%10;
            rev=rev*10+r;
            n2=parseInt(n2/10);
        
        }
        if(m===rev)
        {
            console.log('Palindrome');
        }
        else{
            console.log('no');
        }
}
palin(265)



const arm=(n2)=>{

    let s=0;
    m=n2;
    while(n2!=0)
        {
            r=n2%10;
            s=s+(r*r*r);
            n2=parseInt(n2/10);
        
        }
        if(m===s)
        {
            console.log('Armstrong');
        }
        else{
            console.log('no');
        }
}
arm(153)


const prime=(a,b)=>{
    let c=true;
    for(let i=a;i<=b;i++){
        if(a%i===0){
            c=false;
            break;
        }
        if(c){
            console.log(i);
            
        }
    }
}
prime(1,10)
a=2;
b=3;
c=4;

if(a>b && a>c){
    console.log(a)
} else if( b>a && b>c){
    console.log(b)
} else{
    console.log(c)

}


n=4
sqrt= Math.sqrt(n);

if(sqrt*sqrt === n){
    console.log('Perfect Square')
} else{
    console.log('Not a Perfect Square')
}

n1= 0;
n2= 1;
c= 10;

for(i=2;i<c;++i){
    n3=n1+n2;
    console.log(n3)
    n1=n2;
    n2=n3
    console.log()
}
const user = {
    name: 'Raju',
    email : 'raju@mail.com',
    password : 'abc123'
};

console.log(user.email);

console.log(user['name']);

user.email = 'raju007@mail.com';
console.log(user);

user.address = 'indira nagar';
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));


const brand='Samsung';
const model='S24';
const price= 105000;
const colors=['red','black','white'];

const smartphones={brand,model,price,colors};
console.log(smartphones);

const {address}=user;
console.log(address);


console.log(smartphones.price);

console.log(smartphones.colors[1]);
console.log(smartphones.colors[1][2]);

smartphones.colors.push('blue');
console.log(smartphones);

smartphones.colors[2]='moonwhite';
console.log(smartphones);

const smartphoneList=[
{
    brand:'Samsung',
    model:'S24',
    price: 105000,
    colors:['red','black','white']
},
{
    brand:'Oneplus',
    model:'12',
    price: 44999,
    colors:['green','gray']
},
{
    brand:'Apple',
    model:'Iphone 15',
    price: 125000,
    colors:['black','white']
},
{
    brand:'Google',
    model:'Pixel 8',
    price: 56000,
    colors:['red','blue','white']
},
{
    brand:'Motorola',
    model:'G8',
    price: 14999,
    colors:['blue','green']
},
];

//Q1. access the price of apple iphone
 console.log(smartphoneList[2].price);
//Q2. access the last color of google pixels
 console.log(smartphoneList[3].colors[2]);
 console.log(smartphoneList[3].colors.at(-1));


 const myphones = smartphoneList.filter((phone)=> {return phone.price<=50000});
 console.log(myphones);

 const mobiles = smartphoneList.filter((ph)=>{return ph.brand==='Samsung'})
 console.log(mobiles);

//function to find substring
 const query='s';
 const mobilee = smartphoneList.filter((ph)=>{return ph.brand.toLowerCase().includes(query.toLowerCase())})
 console.log(mobilee);
 console.log('---');
 //filter all phones with white color
 
 const mob = smartphoneList.filter((ph)=>{return ph.colors.includes('white')})
 console.log(mob);



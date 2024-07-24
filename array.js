const arr1=['hello',34567,false,null];
console.log(arr1);
console.log(typeof arr1);

console.log(Array.isArray(arr1));

const movies=['Dangal','Kill','Manji','DDLJ','Jawan','PK'];
console.log(movies.length);
//indexing

console.log(movies[3]);
console.log(movies[5]);
console.log(movies.at(-1));
console.log(movies.at(-2));

movies[3]='Krish';
console.log(movies);

console.log(movies.indexOf('Kill'));

//slicing
console.log(movies);
console.log(movies.slice(2,5));
console.log(movies.slice(2,-3));
console.log(movies.slice(2));
console.log(movies.slice(2,60));

//adding and removing elements
movies.push('Kalki'); //adding of element at end of array
console.log(movies);

movies.unshift('KGF');
console.log(movies);

movies.pop(); //remove element from end of array
movies.shift(); //removes element from start of array
console.log(movies);

console.log(movies);
//movies.splice(3,2); //2 represents 3 ke baad jitne remove krne ho
//console.log(movies);

//movies.splice(3,1);
//console.log(movies);

movies.splice(3,2,'Deadpool','Venom');//replacing elements
console.log(movies);

movies.splice(3,0,'Deadpool','Venom');
console.log(movies);



 



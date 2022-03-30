//Template literals and default parameters value
/*
function favMovie(movie = 'the Room', name ='Tommy Wiseau'){
    console.log(`My  name is ${name} and myfavorite movie is ${movie}`);
}
favMovie();
favMovie('die hard', 'david');
*/

//arrow functions

let favMovie = (movie = 'the Room', name ='Tommy Wiseau') => console.log(`My  name is ${name} and myfavorite movie is ${movie}`);
favMovie();
favMovie('die hard', 'david');


let getFirstName = (fullName1) =>{
    names = fullName1.split(' ');
    console.log(names[0]);
};

getFirstName('David the Great')

let getFirstNameConcise = fullName2 => console.log(fullName2.split(" ")[0]); //shorthand of the above
getFirstNameConcise('David The Great')

let doMath= (a, b) =>({exponential: a^b, product: a*b});
result = doMath(4,2);

console.log(`the results are the exponential is ${result.exponential} and the product is ${result.product}!`);

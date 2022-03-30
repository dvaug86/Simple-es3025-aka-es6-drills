let p1 = {
    name: 'Jason',
    age: 27,
    email: 'test@test.com'
};

let p2 = {
    name: 'mark',
    age: 30,
    email: 'boom@test.com'
};

// sometimes we only care about one piece of info, and that's all we care to destructure out of the object:
let { name } = p1;
 { name } = p2;
console.log(name); // 'Jason'

// Order doesn't matter when destructuring!
// The variable names you are choosing in the destructuring group (left side) coincide with the property names in object p1 of which you want to "pluck" the values
let { email, age } = p1;
console.log(email); // 'test@test.com'
console.log(age); // 27

// You can also destructure a property and choose a different name for the variable:
let { name: studentName } = p1;
console.log(studentName); // 'Jason'

function sayHello({ name, age }) {
    console.log(`Congratulations ${name}! You've been around for ${age} years!`);
}

sayHello(p1);
// Congratulations Jason! You've been around for 27 years!
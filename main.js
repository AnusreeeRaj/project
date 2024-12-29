// let, const

let age= 30;
console.log(age);

const score=10;
console.log(score);

// string,numbers,boolean,null,undefined

const name = 'John';
const ageN = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);

// concatination
console.log('my name is '+name+ ' and i am '+ageN);
//template string
const hello =`my name is ${name} and i am ${ageN}`;

console.log(hello);
const s = 'hello world';
console.log(s.split(''));

// arrays
const fruits =['oranges','apple','cherry'];
fruits[3]='kiwi';
fruits.push('mango');
fruits.unshift('grapes');
console.log(Array.isArray('hello'));
console.log(fruits.indexOf('grapes'));
console.log(fruits);


const person = {
    firstName: 'John',
    lastName: 'Wick',
    age: 30,
    hobbies: ['fighting','movies'],
    address:{
        street: 'blah',
        city: 'blah blah',
        state: 'blah blah blah'
    }
}

console.log(person);
console.log(person.firstName);
console.log(person.hobbies[1]);

const todos =[
    {
        id:1,
        text:'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'cooking',
        isCompleted: true
    },
    {
        id: 3,
        text: 'appointments',
        isCompleted: true
    }
];
console.log(todos);

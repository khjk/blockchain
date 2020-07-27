interface Human {
    name: string,
    age : number,
    gender: string
}

const person = {
name : "cherry",
age : 25,
gender : "female"
};

const sayHi = (person : Human): string => {
    return `Hello ${person.name}, your age is ${person.age} and your gender is ${person.gender}`;
};

console.log(sayHi(person));


export {};
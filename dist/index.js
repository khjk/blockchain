"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human2 {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const hyojung = new Human2("hyojung", 25, "female");
const sayHi = (person) => {
    return `Hello ${person.name}, your age is ${person.age} and your gender is ${person.gender}`;
};
//인터페이스를 사용하면 ts측면에서 안전한데(컴파일된 javascript는 인터페이스를 갖지않음) class로 써야 react에서 사용가능
//console.log(sayHi(person));
console.log(sayHi(hyojung));
//# sourceMappingURL=index.js.map
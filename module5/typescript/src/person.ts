interface Person {
    firstName: string;
    lastName: string;
    age: any;
    isMarried?: boolean;
}

const person1: Person = {
    firstName: 'Dung',
    lastName: 'Le',
    age: '34'
};
console.log(person1);

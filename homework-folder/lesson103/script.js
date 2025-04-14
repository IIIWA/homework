let me = {
    name: 'Ivan',
    age: 25,
    weight: 100,
    city: 'Saint Petersburg',
    isAdmin: false,
    sayHello(name) {
        return `Hello ${name}`
    },

}

console.log(me)
console.log(me.sayHello('Dorothy'))



// ===========================================================>


let users = [
    {
        name: 'Ivan',
        age: 25,
        weight: 100,
        city: 'Saint Petersburg',
        isAdmin: false,
    },
    {
        name: 'Sven',
        age: 25,
        weight: 100,
        city: 'Saint Petersburg',
        isAdmin: false,
    },
    {
        name: 'Seeker',
        age: 25,
        weight: 100,
        city: 'Saint Petersburg',
        isAdmin: true,
    },
    {
        name: 'Zeus',
        age: 25,
        weight: 100,
        city: 'Saint Petersburg',
        isAdmin: false,
    },
    {
        name: 'Chaose',
        age: 25,
        weight: 100,
        city: 'Saint Petersburg',
        isAdmin: true,
    },
    {
        name: 'Nami',
        age: 25,
        weight: 100,
        city: 'Saint Petersburg',
        isAdmin: false,
    },
];

let simpleUser = 0;

for(let i = 0; i < users.length; i++){
    if(users[i].isAdmin == false){
        simpleUser++
    }
}

console.log(simpleUser);
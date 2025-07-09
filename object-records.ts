type nameAgeMap = Record<string, number>;

function addPerson(map: nameAgeMap, name: string, age: number) {
  map[name] = age;
}

function updatePerson(map: nameAgeMap, name: string, newAge:number){
    map[name] = newAge;
}

function getAge(map: nameAgeMap, name: string){
    if ( map[name] !== undefined) {
        console.log(`${name}'s age is ${map[name]}`);
    }
    else {
        console.error(`User not found`);
    }
}

function printAllPeople(map: nameAgeMap) {
    for (const name in map){
        console.log(`${name} is ${map[name]} years old`);
    }
}

const people: nameAgeMap = {}; // create an actual map to pass in

addPerson(people, 'Bob', 25);
addPerson(people, 'Coco', 102);
addPerson(people, 'IceBear', 32);
addPerson(people, 'PanPan', 29);
addPerson(people, 'Grizz', 22);

console.log(`${people.Bob}`); // should print: 25

addPerson(people, 'Bob', 26);

console.log(`${people.Bob}`); // should print: 25

getAge(people, 'CoCo');

printAllPeople(people);
/** OBJECTS
 * Objects rae a type of variable, quite simitar to arrays but
 * they have something called key-value pairs.
 * 
 * objects are created with {}.
 */

const person = {
    name: 'Heistejiri',
    stack: 'Javascript' //this is how to create an object
    };

console.log(person.name); //this is how you access an object
console.log(person.stack); //>> Dot Notation
console.log(person['name']); //>> Bracket notation

//Other ways of assigning an object
person.phone = '+234-567-8910';
console.log(person['phone']);

// You can also console log the entire person object
console.log(person);

const person2 = {
        name:'Qazi',//name > Key, Qazi > Value
        shirt: 'black'
        };
console.log(person2.name);
console.log(person2['shirt']);
console.log(person2);


//Create a function
const introducer = (name, shirt) => {   //arrow funct
    const person = {
        name: name,
        shirt: name
    }

    const intro = `Hi my name is ${person.name} and the color of my shirt is ${person.shirt}`
    // make more research on template literals (``)

    return intro;
} // Here we made used of 
  // es6 arrow function (we created 2 arguments)
  // objects
  // template literalss

console.log(introducer('Tejiri', 'Black'));
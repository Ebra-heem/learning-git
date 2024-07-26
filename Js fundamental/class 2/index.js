/**
 * Conditional Statements 
 *  two types: if..else
 *  switch..case
 */

// Hour 
// if hour is between 6am and 12pm: Good morning
// if it is between 12pm and 6pm: Good afternoon
// Otherwise: Good evening !

let hour = 20;
if(hour >= 6 && hour < 12){
    console.log('Good morning');
}
else if(hour >= 12 && hour < 18){
    console.log('Good afternoon');
}
else{
    console.log('Good evening');
}

//Switch Case

let role='guest';

switch(role){
    case 'guest':
        console.log('Guest user');
        break;
    case 'moderator':
        console.log('Moderator user');
        break;
    default:
        console.log('Unknown user');
}

//For in loops

const person = {
    name: 'Idrak',
    age: 2
};

for( let key in person){
    console.log(key, person[key]);
}

const colors = ['red','green','blue'];

for(let index in colors){
    console.log(index, colors[index]);
}

//For of loops

for(let color of colors){
    console.log(color);
}
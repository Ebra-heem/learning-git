// 1. Max of Two numbers

function maxTwoNumber(a,b){
    // if(a > b) return a;
    // else return b;


    // if(a > b) return a;
    // return b;

    return (a > b)? a : b;
    
}

let number = maxTwoNumber(10,7);
console.log(number);


// 2. Landscape or Portrait
function isLandscape(width, height){
    // if(width > height) return true;
    // return false;

    // return (width > height) ? true: false;

    return (width > height);
}

console.log(isLandscape(180, 100));

//3. FizzBuzz 

// Divisible by 3=> Fizz
// Divisible by 5=> Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by  3 or 5 => input
// Not a number => 'Not a number'

function fizzBuzz(input){
    if(typeof input !=='number')
        return 'Not a number';
    
    if((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if(input % 3 === 0)
        return 'Fizz';

    if(input % 5 === 0)
        return 'Buzz';

    return input;
}

const output=fizzBuzz('samia');

console.log(output);

// 4. Demerit Points
// Speed Limit = 70kmh or less =>ok
// then every 5km above speed limit get-->1 point
// 12 points or more = License Suspended
// Tips:Math.floor()


// function checkSpeed(speed){
//     // if(speed < 70){
//     //     console.log('Ok');
//     // }
//     const speedLimit = 70;
//     const kmPerPoint = 5;
//     if(speed < speedLimit + kmPerPoint)
//         console.log('Ok');
//     else {
//         const points = Math.floor((speed - speedLimit) / kmPerPoint);
//         if(points >= 12)
//             console.log('License Suspended');
//         else
//         console.log('Points',points);
//     }
// }

function checkSpeed(speed){
    
    const speedLimit = 70;
    const kmPerPoint = 5;
    if(speed < speedLimit + kmPerPoint){
        console.log('Ok');
        return ;
    }
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if(points >= 12)
        console.log('License Suspended');
    else
        console.log('Points',points);
    
}

checkSpeed(180);

//5. Even and odd Numbers

function showNumbers(limit){
    for(let i = 0; i <= limit; i++){
        // if(i % 2 ===0)
        //     console.log(i,'Even');
        // else
        //     console.log(i,'Odd');

    const message = (i%2===0)?'EVEN':'ODD';
    console.log(i,message);
    }
}

showNumbers(10);

// 6. Count Truthy

const isActive = true;
const name = 'Idrak'; //Truthy (true)
const nameFalsy = ''; //Falsy (false)
if(name) console.log('Hello');

//Falsy values
 
// undefined
// null 
// ''
// false
// 0
// NaN

const array =[0,'',1,2,3];
const count =countTruthy(array);
console.log('Count Truthy',count);
function countTruthy(array){
    let count = 0;
    for(let value of array){
        if(value)
            count++;
    }
    return count;
}


//7. String Properties

const movie = {
    title:'a',
    releaseYear:2024,
    rating:4.5,
    director: 'b'
};

showProperties(movie);

function showProperties(obj){
    for(let key in obj)
        if(typeof obj[key] === 'string')
            console.log(key, obj[key]);
}

// 8. Sum of Multiples of 3 and 5

// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10

console.log(sum(10));

function sum(limit){
    let sum=0;

    for(let num=1; num <= limit; num++)
        if((num%3===0) || (num%5===0))
            sum+=num;
    
    return sum;

}

//9. Grade
const marks = [80,80,50];

// Average = 70

//1-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A
console.log(calculateGrade(marks));

// function calculateGrade(marks){
//     let sum = 0;
//     for(let mark of marks)
//         sum+=mark;
//     let average = sum/marks.length;

//     // if(average >=0 && average<=59) return 'F';
//     if(average < 60) return 'F';
//     if(average < 70) return 'D';
//     if(average < 80) return 'C';
//     if(average < 90) return 'B';
//     return 'A';
// }

function calculateGrade(marks){
    
    let average = calculateAverage(marks);
    // if(average >=0 && average<=59) return 'F';
    if(average < 60) return 'F';
    if(average < 70) return 'D';
    if(average < 80) return 'C';
    if(average < 90) return 'B';
    return 'A';
}

function calculateAverage(array){
    let sum = 0;
    for(let value of array)
        sum+=value;
    return sum/array.length;
}

//10. Stars 
showStars(10)

function showStars(rows){
    for(let row=1; row <=rows; row++){
        let pattern ='';
        for(let i=0; i<row;i++)
            pattern+='*';
        console.log(pattern);
    }
}

//11. Prime Numbers Show

showPrimes(7);

//Prime(whose factors are only 1 and itself)
//Composite

//12 = 1, 2, 3, 4, 6, 12
// Can be divided evenly by its factors
// 11= 1, 11
// 13 = 1,13
// function showPrimes(limit){
//     for(let number=2; number<=limit; number++){

//         let isPrime=true;
//         for(let factor=2; factor<number; factor++){
//             if(number% factor ===0){
//                 isPrime=false;
//                 break;
//             }   
//         }
//         if(isPrime) console.log(number);
//     }
// }

function showPrimes(limit){
    for(let number=2; number<=limit; number++)
        if(isPrime(number)) console.log(number);
    
}

function isPrime(number){
    for(let factor=2; factor<number; factor++)
        if(number% factor ===0)
            return false;

    return true;
}

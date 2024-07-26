// Object Oriented Programming (OOP)
const circle={
    radius: 1,
    location:{
        x:1,
        y:1,
    },
    isVisibility:true,
    draw: function(){
        console.log('draw')
    }
};

// Factory Function
function createCircle(radius){
    return {
        radius,
        draw(){
            console.log('draw')
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);
const circle2 = createCircle(2);
console.log(circle2);

//Constructor Function

function Circle(radius){
    this.radius=radius;
    this.draw =function(){
        console.log('draw');
    }
}

const circle_ = new Circle(1); // new keyword does 3 thing , x={}, point it 'this', return Circle function

//Dynamic Nature of Object

circle.color = 'yellow';

// let x={};
// let x = new Object(); x.constructor
// some built in constructor
// new String(); ''  "" ``
// new Boolean(); true, false
// new Number(); 1 , 2,

//Function are Objects


function Circle(radius){
    this.radius=radius;
    this.draw =function(){
        console.log('draw');
    }
}
// Circle.name

// Circle.call({},1)  ==  const another =new Circle(1)  same
// Circle.call(window,1)  ==  const another = Circle(1)  same

// value vs reference Type

// let x = 10;
// let y = x;

// x=20;


// let x = {value:20};
// let y = x;

// x.value=30;


let number =10;
function increase(number){
    number++;
}
increase(number);
console.log(number)

let obj ={value:10};
function increase(obj){
    obj.value++;
}
increase(obj);
console.log(obj)
// primitives: number , string , boolian 

//  more comples types : array , objects 


// function types , parameters 




//primitives 

let age:number = 24;

age = 12.2;

let userName: string | string[]; 
userName = "Arun"


let  isInstructor : boolean;
isInstructor = true;



//more conplex types array and objects 


let hobbies : string[];

hobbies = ['sports', "cooking"];


type Person = {
    name: string;
    age:number;
};


type Aun = {
    choose : boolean;
}



let tree:Person;

tree = {
    name: "neem",
    age:5,
    choose:true
};


// person = {
//     isEmployee:true
// }


let people: {
    name:string;
    age:number;
}[]; // array full of objects 





// // type inference 

// let cource  = "React - is good cource ";

// working with union types 

let cource: string | number | boolean  = "React - is good cource ";

cource = 1512;


// assigning type aliases 




let person :[
number, string 
]





// myArray :any[] = [
//     {id:1, name: 'object 1'}
// ]


// addNewObject(){
//     const newObj = {
//         id: this.myArray.length +1 , name:"new object "
//     };
//     this.myArray.push(newObj);
// }


interface MyObject {
    key : string;
    value : number;
}


const myArray : MyObject[] = [
    {key :'item 1' , value :10},
    {key :'item 3' , value :40},
    {key :'item 4' , value :30}
]



const newObj : MyObject = 
    {key: 'item4' , value:40};
;

myArray.push(newObj);

console.log(myArray)




































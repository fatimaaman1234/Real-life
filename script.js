function constructCar(cartype, carmodel, carcolor, carcompany, numPlate, carspeed, carShape, carprice, ){
    let object = {
        "type":cartype,
        "model": carmodel,
        "color":carcolor,
        "company":carcompany,
        "numberPlate": numPlate,
        "speed": carspeed,
        "shape":carShape,
        "price": carprice,
        "data": function(){
            console.log(`This ${this.type} with model number ${this.model} has ${this.color} color which is made by ${this.company} company has a prize of ${this.price}.`);
        }
    }
    return object;
}


// function person1(name,gender,age, hobby){
//     return{
//         "name":name,
//         "gender":gender,
//         "age":age,
//         "hobbies": function(){
//             console.log(hobby);
//         } 
//     }
// }


// let idCard1 = {
//     name: "fatima",
//     gender: "female",
//     age: 20,
//     interests: ["sleeping","reading"],
//     bio: function(){
//         console.log(`${this.name} is ${ths.age} years old. she likes ${this.interests}`)
//     },
//     greet: function(){
//         console.log(`Hi, my name is  ${this.name}`)
//     }
// }

// function constructIdCard(stdname, stdgender, stdage, stdinterests, bio){
//     let obj = {
//             "name": "stdname",
//             "gender": "stdgender",
//             "age": stdage,
//             "interests": [stdinterests],
//             "bio": function(){
//                 console.log(`${this.name} is ${ths.age} years old. she likes ${this.interests}`)
//             },
//             "greet": function(){
//                 console.log(`Hi, my name is  ${this.name}`)
//             }
//         }
//     return obj;
// }

// function constructCar(cartype, carmodel, carcolor, carcompany, numPlate, carspeed, carShape, carprice, ){
//     let object = {
//         "type":cartype,
//         "model": carmodel,
//         "color":carcolor,
//         "company":carcompany,
//         "numberPlate": numPlate,
//         "speed": carspeed,
//         "shape":carShape,
//         "price": carprice,
//         "data": function(){
//             console.log(`This ${this.type} with model number ${this.model} has ${this.color} color which is made by ${this.company} company has a prize of ${this.price}.`);
//         }
//     }
//     return object;
// }
// let numbers  = [1,2,3,-3,4-4]
//
// console.log(numbers)
//
// let s = numbers.filter(num => num > 0);
// console.log(s)
// # filter ichiga call bacj function keladi


// let word = ["apple","banana","cherry"]
//
// let s = word.filter(x => x.endsWith('e'));
// console.log(s)

// let son = [12,34,33,11,56,7,89]
//
// const Person() = {
//     name:'Peter',
//     age:23,
//     adres:'sergr'
// }


function createperson(name,age,address){
    return {
        name,
        address,
        age,
        car:{
            color:"red",
            model:"tesla"
        },
        info_person : function infoPerson(){
            console.log(name)
            console.log(age)
            console.log(address)
        },
        infoAge(){
            console.log(age)
        }

    }

}

let ali = createperson("Marjona",18,'sergeli')

console.log(createperson("ss",12,"sad"))
ali.car.summa = 12;

console.log(ali.car.summa)


let s = str.substring(3,5)

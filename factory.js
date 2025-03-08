// let numbers = [12,23,43,453,2]
// let fnl = []
// for( let x  of numbers){
//     if(x > 0){
//
//         fnl.push(x)
//     }
// }
//
//
//
// let fn = numbers.filter(x =>  x> 0);
// console.log(fn)
//
// let mevalar = ["olme" , "anor","yong'oq","ku"]
let mevalar = ["olme" , "anor","yong'oq","ku"]

let fm = mevalar.map(f => `<li> ${f} </li> `);
console.log(fm)

let num = [12,2,34,4,54];
// let s = 0;
//
// for(let x of num){
//     s += x;
// }
// console.log(s)
let s = num.reduce((a,b) => a*b,0);
console.log(s)


// for(let i = 0 ; i < mevalar.length;i++){
//     for(let j = 0 ; j < j.length;j++)
//     {
//         if(j==='e') console.log(i)
//     }
//
// }
// let summa =  mevalar.filter(x => x.includes('e'))
// console.log(summa)
// mevalar.forEach(meva => {
//     console.log(meva)
// })

// function  createPerson(name,age,salary ,job){
//     this.name = name;
//     this.age = age;
//     this.salary = salary
//     this.job = job
//     fer =
//
//
//     this.info_person = function (){
//         console.log(name,age)
//     }
//
//
// }
// let ali = new createPerson("john",23);
// console.log(ali)
//
// ali.info_person()
//
// let str = "MarjonaMeliboyevaHojiakbrQizi ";
// // let m1 = str.substring()
// console.log(str);
//
// let m1 = str.substring(0, 7);
// let m2 = str.substring(17);
// let all = m1+m2
// console.log(all);

// const n = Math.floor(Math.random()*10);
// console.log(n)
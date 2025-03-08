// let text = "JavaScript";
// console.log(text.slice(0, 4));  // "Java"
// console.log(text.slice(4));     // "Script" (oxirigacha kesiladi)
// console.log(text.slice(-6));
//
//
// const salom = name => console.log("Hello " + name)
// salom("Axror")



// katta = function (a,b){
//     if(a > b) return a
//     return b;
// }
// console.log(katta(12,3))
//
// const katta1 = (a,b) => a>b? a:b
// console.log(katta1(12,34))

// const modul = (son) => son < 0? son* -1:son
// console.log(
//     modul(2)
// )

// const person = (name,age,addres) =>{
//     console.log(name)
//     console.log(age)
//     console.log(addres)
// }

function tubson(son){
    let  sanoq = 0;
    for(let i = 2;i <=son;i++){
        if(son % i ===0){
            sanoq++
        }


        if(sanoq ===2){
           return  i
        }

    }

}
tubson(20)
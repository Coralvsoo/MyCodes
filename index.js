console.log('Happy developing ✨')


let myString = "Men darsga keldim";
let ourString = myString.length


// creating random pos
let pos = Math.floor(Math.random() *myString.length)+1;
console.log(pos)

let y = 3;


// creating random string
function xString_random(random){
    let result = '';
    const characters = "ABCDEFGHIJLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxyz$%#@! ";
    const charactersLength = characters.length;
    let counter =0;
    while(counter < random){
        result += characters.charAt(Math.floor(Math.random()*charactersLength))
        counter++;
    }
    return result

}
let strm = xString_random(pos)


// let myString = "Men darsga keldim";


// inserting string into myString
myString = [myString.slice(0, pos), strm, myString.slice(pos)].join('');


let array = []
let fromArray_toStr = ""
for(let str = 0 ; str < myString.length;str++ ){
    let number = str => str.charCodeAt(str)
    let asciiNum = number(myString[str])
    array.push(asciiNum)
}
console.log(array)
console.log(fromArray_toStr)

for(let arrY = 0 ; arrY < array.length;arrY++){
    array[arrY] +=y
}
for(let arr = 0 ; arr < array.length ; arr++){
    let letter = arr => String.fromCharCode(arr)
    let StringAscii = letter(array[arr])

    console.log(StringAscii)
    fromArray_toStr += StringAscii


}
console.log(array)
console.log(fromArray_toStr)

console.log("Way to back")
console.log(`Shifrlangan Matn Qyta ASCII ga o'tkazildi!`)
console.log(`Undan Y raqam ayrildi!`)
shifredArr = []
for(let shifred  = 0;shifred < fromArray_toStr.length;shifred++){
    let number2 = shifred => shifred.charCodeAt(shifred)
    let numshifr = number2(fromArray_toStr[shifred])
    shifredArr.push(numshifr-y)
}
let matn = ''
console.log(`Endu uni qaytib matnga aylantiramiz`)
for(let arrShifrStr = 0; arrShifrStr < shifredArr.length;arrShifrStr++){
    let Matn = arrShifrStr => String.fromCharCode(arrShifrStr)
    matn += Matn(shifredArr[arrShifrStr])

}

console.log(matn)


console.log(`shu pozitsiyaga qo'shilyapti ${pos}`)
console.log(strm)
let m1 = matn.substring(0,pos)
let m2 = matn.substring(pos+1+strm.length-1,)
console.log(`m1: ${m1}`)
console.log(`m2:  ${m2}`)
all = m1 + m2;
console.log(`all: ${all}`)



import readline from "readline-sync";

// let son = Number(readline.question('Son krit'));
// let Uzunlik = parseFloat(readline.question('Uzunlik  kriting'))
//
// switch(son){
//     case 1:
//         console.log('Detsimetr')
//         console.log(Uzunlik/10)
//         break;
//     case 2:
//         console.log('Santimetr');
//         console.log(`${Uzunlik} Kilometr  ${Uzunlik*1000} metr`);
//         break;
//     case 3:
//         console.log('Metr')
//         console.log(`${Uzunlik} metr `)
//         break;
//     case 4:
//         console.log('Millimetr')
//         console.log(`${Uzunlik} millimetr ${Uzunlik/1000} metr`)
//         break;
//     case 5:
//         console.log('Santimetr')
//         console.log(`${Uzunlik} santimetr ${Uzunlik/100} metr`)
//         break;
//     default:
//         console.log("Bunday uzunlik o'lchov birligi yo'q")
//
// }

// case 7
//  const ogirliksoni = Number(readline.question('Ogirlik turini raqamda 1-5 gacha kriting'));
// const olchov = parseFloat(readline.question(' Enter weight' ));
//
// const weightkg = ogirliksoni === 1? console.log(`Kilogram ${olchov} Kilogramni o'zi`):
//     ogirliksoni ===2? console.log(`${olchov} milligram ${olchov/1000000} kilogram`):
//         ogirliksoni === 3 ?console.log(` ${olchov} Grammm ${olchov/1000} Kilogram`):
//             ogirliksoni === 4? console.log(`${olchov} tonna ${olchov* 1000} Kilogram`):
//                 ogirliksoni === 5? console(`${olchov} sentner ${olchov*100} Kilogram`): console.log("Bunday o'lchov birligi yoq");


// case 20
// const oy = Number(readline.question('Enter the month'));
// const kun = Number(readline.question('Enter the day'));
// const test = (oy ===3 && kun >=21 && kun <= 31)||(oy === 4 && kun >=1 && kun <= 20) ? console.log("Qo'y"):
//     (oy === 4 && kun >=21 && kun <= 30) ||(oy === 5 && kun >=1 && kun <=21)?
//         console.log("Buzoq"):
//         (oy === 5 && kun >= 22 && kun <= 31 )|| (oy=== 6 && kun >=1 && kun <=20)?
//             console.log("Egizakalar"):
//             (oy === 6 && kun >= 22 && kun <= 30) || (oy === 7 && kun >= 1 && kun <= 20)? console.log("Qisqichbaqa"):
//                 console.log("Bunday yo'q");


//
//
// if((oy === 3 && kun >= 21 && kun <=31 ) || (oy === 4 && kun >=1 && kun <= 20)){
//     console.log("Qo'y ");
// }
// else if ((oy === 4 && kun >=21 && kun <= 30) ||(oy === 5 && kun >=1 && kun <=21)){
//     console.log("Buzoq");
// }
// else if ((oy === 5 && kun >= 22 && kun <= 31 )|| (oy=== 6 && kun >=1 && kun <=20)){
//     console.log("Egizakalar");
// }
// else if ((oy === 6 && kun >= 22 && kun <= 30) || (oy === 7 && kun >= 1 && kun <= 20)){
//     console.log("Qisqichbaqa")
// }
// else if ((oy===7 && kun >= 23 && kun <=31) || (oy === 8 && kun <= 1 && kun <=23)){
//     console.log("Arslon")
// }
// else if ((oy === 8 && kun >=24 && kun <= 31 )||(oy === 9 && kun >= 1 && kun <=23)){
//     console.log("Parizod")
// }
// else if((oy === 9 && kun >= 24 && kun <= 30 )|| (oy === 10 && kun >=1 && kun <= 23)){
//     console.log("Tarozi")
// }
// else if(( oy === 10 && kun >=24 && kun <= 31) ||(oy === 11 && kun >= 1 && kun <=22)){
//     console.log("Chayon");
//
// }
// else if(( oy === 11 && kun >= 23 && kun <= 30 )|| (oy === 12 && kun >= 1 && kun <=21)){
//     console.log("O'qotar");
// }
// else if((oy === 12 && kun >= 22 && kun >= 31)|| (oy === 1 && kun >=1 && kun <= 20)){
//     console.log("Tog'echkisi");
// }
// else if((oy === 1 && kun >= 21 && kun <= 30 )||(oy === 2 && kun >=1 && kun <= 18)){
//     console.log("Qovg'a")
// }
// else if((oy === 2 && kun >= 19 && kun <= 28 )||(oy === 3 && kun >= 1 && kun <= 20)){
//     console.log("Baliq")
// }
// else{
//     console.log("Bunday yo'q")
// }
//
// let symbol =  oy >= 3 || oy ===4 && kun >= 21 || kun <= 20 ? console.log("Qo23'y"):



// case 8
// const day = Number(readline.question('Enter the date'));
// const month = Number(readline.question("Enter month "));
//

// switch(month){
//     case  1:
//         console.log(`Bugungi sana ${day } : Yanvar`);
//         break;
//     case 2:
//         console.log(`Bugungi sana ${day} : Fevral`);
//         break;
//     case 3:
//         console.log(`Bugungi sana ${day} : Mart`);
//         break;
//     case 4:
//         console.log(`Bugungi sana ${day} : Aprel`);
//         break;
//     case 5:
//         console.log(`Bugungi sana ${day} : May`);
//         break;
//     case 6:
//         console.log(`Bugungi sana ${day} : Iyun`);
//         break;
//     case 7:
//         console.log(`Bugungi sana ${day} : Iyul`);
//         break;
//     case 8:
//         console.log(`Bugungi sana ${day} : Avgust`);
//         break;
//     case 9:
//         console.log(`Bugungi sana ${day} : Sentyabr `);
//         break;
//     case 10:
//         console.log(`Bugungi sana ${day} : Oktyabr`);
//         break;
//     case 11:
//         console.log(`Bugungi sana ${day} : Noyabr `);
//         break;
//     case 12 :
//         console.log(`Bugungi sana ${day} : Dekabr`);
//         break;
//     default:
//             console.log(`Bunday sana yo'q`);
// }
// case 9
// const day = Number(readline.question('Enter the date'));
// const month = Number(readline.question("Enter month "));
//
// if(month === 1 || month ===3|| month === 5 || month ===7 || month ===8 || month === 10 || month === 12 ){
//     if(day !==31){
//         console.log(`${day } : ${month} keyingi sana ${day+1}  ${month}`)
//
//     }
//     else if(day ===31 && month!==12){
//         console.log(`${day } : ${month} keyingi sana ${1} :${month+1}`)
//     }
//     if(day ===31 && month===12){
//         console.log(`${day } : ${month} keyingi sana ${1} :${1}`)
//     }
//
//
// }
// else if(month === 4 || month === 6 || month === 8 || month === 9 || month === 11){
//     if (day !== 30){
//         console.log(`${day } : ${month} keyingi sana ${day + 1} :${month}`)
//     } else console.log(`${day} : ${month} keyingi sana ${1} :${month + 1}`);
//
//
// }
// else if(month===2){
//     if(day !== 28){
//         console.log(`${day } : ${month} keyingi sana ${day+1} :${month}`)
//
//     }
//     else     console.log(`${day } : ${month} keyingi sana ${1} :${month+1}`)
//
//
// }


// case 10
// const yonalish = String(readline.question("Yo'nalishini kriting"));
// const command = Number(readline.question("Buyruqni kriting"));
//
// switch(yonalish){
//     case 's':
//         const task1 = command === 0 ?console.log(`Robot shimolda va O'nga burilgan`):
//             command === 1?console.log(`Robot shimolda va chapga burilgan`):
//                 command === 2? console.log(`Robot shimol da va o'ng  tomonga burilgan`):console.log(`Boshqa buyruq yo'q`);
//         break;
//     case 'j':
//         const task2 =  command === 0 ?console.log(`Robot Janubga va O'nga burilgan`):
//             command === 1?console.log(`Robot Janubda va chapga burilgan`):
//                 command === 2? console.log(`Robot Janubda da va o'ng  tomonga burilgan`):console.log(`Boshqa buyruq yo'q`);
//         break;
//     case 'q':
//         const task3 =  command === 0 ?console.log(`Robot Sharqda va O'nga burilgan`):
//             command === 1?console.log(`Robot Sharqda va chapga burilgan`):
//                 command === 2? console.log(`Robot Sharqda da va o'ng  tomonga burilgan`):console.log(`Boshqa buyruq yo'q`);
//         break;
//     case 'g':
//         const task4 =  command === 0 ?console.log(`Robot G'arbda  va O'nga burilgan`):
//             command === 1?console.log(`Robot G'arbda va chapga burilgan`):
//                 command === 2? console.log(`Robot G'arbda da va o'ng  tomonga burilgan`):console.log(`Boshqa buyruq yo'q`);
//         break;
//     default:
//         console.log(`Bunday tomon yo'q`);
//


const elementDoira = Number(readline.question(`Doirani elementini kriting 1 dan 4 gacha`));
const elemOlchov = parseFloat(readline.question(`O'lchovni ham kriting`));
switch(elementDoira){
    case 1 :
        console.log(`Radius berildi Doira diametri ${2*elemOlchov}`);
        console.log(`Radius berildi Doira Uzunligi ${3.14 * (2*elemOlchov)}`);
        console.log(`Radius berildi Doira Yuzi ${3.14 * elemOlchov *elemOlchov}`);
        break;
    case 2:

        console.log(`Diametr berildi Doira Radius ${ elemOlchov / 2}`);
        console.log(`Diametr berildi Doira Uzunligi ${3.14*elemOlchov}`);
        console.log(`Diametr berildi Doira Yuzasi ${ 3.14 * (elemOlchov/2)*(elemOlchov/2) }`);
        break;
    case 3:
        console.log(`Uzunlik berildi Doira Radius ${(elemOlchov /3.14) /2 }`);
        console.log(`Uzunlik berildi Doira Diametr ${ elemOlchov /3.14 }`);
        console.log(`Uzunlik berildi Doira Yuzasi ${3.14*((elemOlchov /3.14 /2 ) *(elemOlchov /3.14 /2 )) }`);
        break;
    case 4:
        console.log(`Yuzasi berildi Doira Radiusi ${ Math.round(Math.sqrt(elemOlchov/3.14))}`);
        console.log(`Yuzasi berildi Doira Diametr ${(Math.round(Math.sqrt(elemOlchov/3.14))*2)}`);
        console.log(`Yuzasi berildi Doira Uzunlik ${3.14 *(Math.round(Math.sqrt(elemOlchov/3.14))*2)}`);
        break;
    default:
        console.log(`Boshqa elemez`)
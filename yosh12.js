//  Testlarni tanlash bolimi 

const body = document.querySelector('.body');
const cardFirstBG = document.createElement('div');
body.append(cardFirstBG);

cardFirstBG.style.border='solid'
// cardFirstBG.style.width='300px'
cardFirstBG.style.display = 'flex';
// cardFirstBG.style.justifyContent = 'center';
cardFirstBG.style.alignItems = 'center';
cardFirstBG.style.height='100vh'
cardFirstBG.style.backgroundColor = '#82A1D2';
cardFirstBG.style.flexDirection='column';
cardFirstBG.style.gap ='20px'

const titleBox = document.createElement('div');
const title = document.createElement('h1');
// title.style.color='#AAD0E2'
title.style.color='white'


title.textContent = 'Testni ishlashga xush kelibsiz'
cardFirstBG.append(titleBox)
titleBox.append(title)

// 2 boy cardfirst element  to'g'ri noto'gri uchun
const togriNotogri = document.createElement('div')
cardFirstBG.append(togriNotogri)

togriNotogri.style.display = 'flex';
togriNotogri.style.gap = '30px';
togriNotogri.style.width = '1200px';
// togriNotogri.style.alignItems = 'center';
togriNotogri.style.flexDirection = 'column';

const mainLog  = document.createElement('div');
cardFirstBG.append(mainLog);
mainLog.style.border = 'solid';
mainLog.style.width = '600px';
mainLog.style.height = '200px';
mainLog.style.backgroundColor = 'pink';
mainLog.style.display = 'flex';
mainLog.style.fontSize =' 60px'
mainLog.style.color ='#577FCD'
mainLog.style.border ='none'
mainLog.style.display ='flex'
mainLog.style.gap = '20px';

mainLog.style.justifyContent ='center';
mainLog.style.alignItems ='center';
mainLog.style.borderRadius ='20px';





mainLog.style.fontFamily ='Playfair Display'


const  num1 = document.createElement('span') 
const  num2 = document.createElement('span') 
const  natija = document.createElement('span');
mainLog.append(num1);
mainLog.append('x');
mainLog.append(num2);
mainLog.append('=');
mainLog.append(natija);


num1.textContent='1';
num2.textContent='2';

 
//  <span id="num1"></span> x <span id="num2"></span> = <span id="result"></span>

const butTB  = document.createElement('div');
cardFirstBG.append(butTB);

const butTog  = document.createElement('button');
const butNo  = document.createElement('button');

butTB.append(butTog);
butTB.append(butNo);
butTB.style.display ='flex';
butTB.style.justifyContent = 'center'
butTB.style.flexDirection = 'column'
butTB.style.gap = '20px'




butNo.style.border ='none';
butNo.style.borderRadius ='15px';
butNo.style.fontFamily ='EB Garamaond';
butNo.style.borderRadius ='15px';
butNo.style.fontSize ='25px';
butNo.style.color ='white';
butNo.style.backgroundColor ='#9EC9E2';

butNo.textContent = ' Notogri';
butTog.style.border ='none';
butNo.style.width = '600px';
butNo.style.height = '50px';
butTog.style.width = '600px';
butTog.textContent = ' Togri';
butTog.style.borderRadius ='15px';
butTog.style.height = '50px';
butTog.style.fontFamily ='EB Garamaond';
butTog.style.fontSize ='25px';
butTog.style.color ='white';

butTog.style.backgroundColor ='#9EC9E2';
butTog.idName = 'buTog';
butNo.classList.add('buNno1');









//    bollari
const togri = document.createElement('p')
const notogri = document.createElement('p')

const cardTogri = document.createElement('div')
const cardNotogri = document.createElement('div')

const cardTogriP = document.createElement('p')
const cardNotogriP = document.createElement('p')

togri.style.color = '#ABC4EB'
notogri.style.color = '#ABC4EB'
togri.style.fontSize = '20px'
notogri.style.fontSize = '20px'
togri.textContent = '0';
notogri.textContent = '0'


cardTogriP.textContent = "To'g'ri javoblar soni:";
cardNotogriP.textContent = "Noto'g'ri javoblar soni:";
cardTogriP.style.color = '#B9CDEE'
cardTogriP.style.fontSize = '20px'
cardNotogriP.style.color = '#B9CDEE'
cardNotogriP.style.fontSize = '20px'


togriNotogri.append(cardTogri);
togriNotogri.append(cardNotogri);

cardTogri.append(cardTogriP);
cardNotogri.append(cardNotogriP);
cardTogri.append(togri)
cardNotogri.append(notogri)

cardTogri.style.borderRadius = '10px';

cardTogri.style.width = '300px';
cardTogri.style.height = '40px';
cardTogri.style.display = 'flex';
cardTogri.style.justifyContent = 'center';
cardTogri.style.alignItems = 'center';
cardTogri.style.backgroundColor = '#577FCD';
cardTogri.style.gap = '5px';

cardNotogri.style.gap = '5px';
cardNotogri.style.borderRadius = '10px';
cardNotogri.style.width = '300px';
cardNotogri.style.height = '40px';
cardNotogri.style.display = 'flex';
cardNotogri.style.justifyContent = 'center';
cardNotogri.style.alignItems = 'center';
cardNotogri.style.backgroundColor = '#577FCD';


let son1 ;
let son2 ;
let togriJavob;
let correctScore = 0;
let incorrectScore = 0;




function generateQuestion(){
  son1 = Math.floor(Math.random()* 10) +1 // 1 dan 10 gacha random son;
  son2 = Math.floor(Math.random() * 10)  +1
  togriJavob = son1 * son2 ;
  
  const KorsatNatija = Math.random() < 0.5 ?togriJavob : Math.floor(Math.random() * 100) +1;
   num1.textContent = son1;
   num2.textContent = son2;
   natija.textContent = KorsatNatija;
};

function TekshirJavoblarni(FoydalanuvchiJavobi){
 const KorsatNatija = parseInt(natija.textContent);
 if((FoydalanuvchiJavobi === 'correct'&& KorsatNatija === togriJavob)|| (FoydalanuvchiJavobi === 'incorrect' && KorsatNatija !== togriJavob)){
 correctScore++;
 togri.textContent = correctScore;

 } else{
    incorrectScore++;
    notogri.textContent = incorrectScore;
 }
 generateQuestion()
}
butTog.addEventListener('click',() =>{
    TekshirJavoblarni('correct')
})
butNo.addEventListener('click',() =>{
    TekshirJavoblarni('incorrect')
})

generateQuestion();



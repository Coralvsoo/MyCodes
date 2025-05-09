// css part

const body = document.querySelector('body')
body.style.placeItems='center';


const card = document.querySelector('.card_big')
card.style.width='100%';
card.style.height='100vh';
card.style.border ='solid';
card.style.display='flex';
card.style.flexDirection='column';
card.style.alignItems='center'
card.style.justifyContent='center';

// card.style.backgroundColor='#B8A9FF';
card.style.backgroundColor='#F4E7FB';


// card.style.display='flex';
// card.style.justifyContent ='center'
// card.style.flexDirection='column';

// Title style
const title = document.createElement('h1')
card.append(title)
title.textContent ="Karra Jadvalini o'rganishga Xush kelibsiz!   Menu ni tanlang";
// title.style.border='solid';
title.style.margin='20px'
title.style.borderRadius='50px';
title.style.color='';
title.style.width='400px';
title.style.textAlign='center';
title.style.height='150px';
title.style.backgroundColor='#C8A8E9'
title.style.fontFamily= "Playfair Display";



const cardim= document.createElement('div');

const button= document.createElement('button');

card.append(cardim)

// cardim.append(button)
cardim.style.border='solid';

cardim.style.display='flex';
cardim.style.flexDirection='column';

for(let i = 0;i < 3;i++){
const newButton = document.createElement('button');
// newButton.textContent = `Button ${i + 1}`;
newButton.style.width = '300px';
newButton.style.height = '40px';
newButton.style.margin = '10px';
newButton.style.backgroundColor='pink'
newButton.style.borderRadius='10px'
cardim.style.backgroundColor='#0C342c'
cardim.append(newButton);
// cardim[0].textContent='hi'
button.style.height='40px'
if(i===0){
  newButton.textContent='Karra jadvali';
  newButton.onclick = function(){
    window.location.href='index4.html'
  }
}
if(i===1){
  newButton.textContent='Tasodify karra jadval testi';
    newButton.onclick = function(){
    window.location.href='yosh12.html'
  }
}
if(i===2){
  newButton.textContent='Maxsus karra jadval testi';

  newButton.onclick= function(){
    window.location.href='index2.html'
  }
}
}
// cardim.style.width='100px'
// cardim.style.height='300px'

// button.style.border='solid'

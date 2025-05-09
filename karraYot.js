const body = document.querySelector('.body'); // Use the document body directly
const card = document.createElement('div');
body.append(card);
  card.style.height='100vh'
  card.style.backgroundImage= 'url(https://i.pinimg.com/736x/25/b5/3d/25b53dc65d915828532b7281feed5b37.jpg)'
  card.style.backgroundSize='cover';
  
  card.style.backgroundPosition='center'
  card.style.backgroundRepeat='no-repeat'
  card.style.border='solid';
  card.style.flexWrap='wrap';
  card.style.display='flex';
  card.style.justifyContent='space-between';

  card.style.gap='50px'


function card1(){
    const littlecard1 = document.createElement('div')
    littlecard1.style.height='300px';
    // littlecard1.style.border='solid';
    littlecard1.style.justifyContent='center';
    littlecard1.style.display='flex'
    littlecard1.style.flexDirection='column'
    littlecard1.style.alignItems='center'
    // littlecard1.style.backgroundColor='#F7B7C4'
    littlecard1.style.backgroundColor='#E1FCFF'

    // littlecard1.style.backgroundColor='blue'



    littlecard1.style.width='250px';
    littlecard1.style.borderRadius='20px'
    // littlecard1.style.height=''
    card.append(littlecard1);
    // littlecard1.style.
    return littlecard1
}

function x2 (number,targetPlace){
    
    for (let i = 1; i <= 10; i++) {
        const para = document.createElement('p');
        para.style.fontSize='25px'

        para.textContent = `${number} x ${i} = ${number * i}`;
        targetPlace.append(para);
     para.style.color='#628B35'
    } 
}

x2(2,card1())
x2(3, card1()); 
x2(4,card1())
x2(5, card1());
x2(6,card1())
x2(7, card1()); 
x2(8,card1())
x2(9, card1());// Ensure the returned element is passed

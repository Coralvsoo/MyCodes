const body = document.querySelector('.body');
const box = document.createElement('div');
const sarlavha = document.createElement('h1');
const text = document.createElement('p');
const aylana = document.createElement('div');
body.append(box);
body.append(aylana)
box.append(text);
box.append(sarlavha)



text.innerHTML ="Hey! karra karani  o'rganib butun ilmlarni o'rganmoqchi bolgan a'lo vatanning a'lo farzandi";

text.style.width ='200px'
box.border='solid';
box.style.width='400px';
box.style.height='400px';
text.style.color='#161616';





sarlavha.textContent='Qaysi karra karrani yodlamoqchligingizni tanlang';
sarlavha.style.color='#161616';

body.style.display='flex';
body.style.justifyContent='center';
body.style.alignItems='flex-end';
// body.style.backgroundColor ='#FBF4DC'
body.style.backgroundColor ='#9fd700'


let arrayMultiple = ['2 X','3 X','4 X','5 X','6 X','7 X','8 X','9 X'];
// aylana.style.backgroundColor='#446158'
// aylana.style.backgroundColor='#F9F8F6'
aylana.style.backgroundColor='#233D37'


aylana.style.width='550px';
aylana.style.height='550px';
aylana.style.borderRadius='100%';
aylana.style.justifyContent='center';
// aylana.style.justifyContent='center';
aylana.style.display='flex';
aylana.style.alignItems='center';
aylana.style.gap='0px'
aylana.style.flexWrap='wrap';






arrayMultiple.forEach(element => {
  const buttonim= document.createElement('button');
    aylana.appendChild(buttonim);

    buttonim.innerHTML =element
    buttonim.style.border='none'
    // buttonim.style.border='JasmineUPC';
    buttonim.style.width='140px'
//    buttonim.style.backgroundColor='#9CCFCE';
  buttonim.style.backgroundColor='#F9F8F6'
    buttonim.style.height='40px'
    buttonim.style.fontFamily=" 'Playfair Display' , cursive";
    buttonim.style.fontWeight='400';
    buttonim.style.textAlign='center'
    buttonim.style.display='flex';
    buttonim.style.alignItems='center'
    buttonim.style.justifyContent='center'
    // buttonim.style.transform='translate(90px,900px)';

    buttonim.style.transform = 'rotate(40deg)';
    buttonim.style.color='#467010';
    buttonim.style.fontSize='30px'

    buttonim.style.borderRadius='40px';
    
});


// const buttons = aylana.querySelectorAll('button');
// if (buttons[0].textContent === '2 X') {
//   buttons[0].addEventListener('click', () => {
//     buttons[0].style.backgroundColor = 'green';
//   });
//   // buttons[0].style.backgroundColor = 'pink';
// }
const buttons = aylana.querySelectorAll('button');

function generateRandomQuiz() { 
{
  const quizContainer = document.createElement('div');
  quizContainer.style.marginTop = '20px';
  quizContainer.style.textAlign = 'center';
  quizContainer.style.color = '#161616';
  quizContainer.style.fontFamily = "'Playfair Display', cursive";
  quizContainer.style.fontSize = '20px';
  body.appendChild(quizContainer);

  const question = document.createElement('p');
  const input = document.createElement('input');
  const submitButton = document.createElement('button');
  const result = document.createElement('p');
  result.style.marginTop = '10px';
  result.style.fontWeight = 'bold';

  input.type = 'number';
  input.style.margin = '10px';
  input.style.padding = '5px';
  input.style.fontSize = '16px';

  submitButton.textContent = 'Submit';
  submitButton.style.padding = '5px 10px';
  submitButton.style.fontSize = '16px';
  submitButton.style.cursor = 'pointer';

  quizContainer.style.border='solid';
  // result.style.border='solid';
  // result.style.height='40px';


  quizContainer.appendChild(question);
  quizContainer.appendChild(input);
  quizContainer.appendChild(submitButton);
  quizContainer.appendChild(result);

  function generateQuestion( num1) {
    
    const num2 = Math.floor(Math.random() * 10) + 1;
    const correctAnswer = num1 * num2;

    question.textContent = `What is ${num1} x ${num2}?`;
    // result.textContent = '';

      submitButton.onclick = () => {
        const userAnswer = parseInt(input.value, 10);
        if (userAnswer === correctAnswer) {
          result.innerHTML = 'Correct!';
          result.style.color = 'pink';
          result.style.display = 'block';
          generateQuestion(num1)
        } else {
          result.textContent = `Wrong! The correct answer is ${correctAnswer}.`;
          result.style.color = 'red';
          result.style.display = 'block';
          generateQuestion(num1)
        }
        input.value = '';
      };
    }
  }

 
  
if(buttons[0].textContent==='2 X'){
  buttons[0].addEventListener('click',()=>{
    generateQuestion(2)
  
  })
}
if(buttons[1].textContent==='3 X'){
  buttons[1].addEventListener('click',()=>{
    generateQuestion(3)
  
  })
}

if(buttons[2].textContent==='4 X'){
  buttons[2].addEventListener('click',()=>{
    generateQuestion(4)
  
  })
}
if(buttons[3].textContent==='5 X'){
  buttons[3].addEventListener('click',()=>{
    generateQuestion(5)
  
  })
}
if(buttons[4].textContent==='6 X'){
  buttons[4].addEventListener('click',()=>{
    generateQuestion(6)
  
  })
}
 if(buttons[5].textContent==='7 X'){
  buttons[5].addEventListener('click',()=>{
    generateQuestion(7)
  
  })
}
if(buttons[6].textContent==='8 X'){
  buttons[6].addEventListener('click',()=>{
    generateQuestion(8)
  
  })
}
if(buttons[7].textContent==='9 X'){
  buttons[7].addEventListener('click',()=>{
    generateQuestion(9)
  
  })
}
}

generateRandomQuiz();





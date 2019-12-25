
var nextButton = document.getElementById('nextBtn');
var prevButton = document.getElementById('prevBtn');

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
 
one.style.margin = '0 -195px';
two.style.margin = '0 55px';
three.style.margin = '0 305px';

var oneFront = one.getElementsByClassName('container')[0].getElementsByClassName('front')[0];
var oneBack = one.getElementsByClassName('container')[0].getElementsByClassName('back')[0];
var twoFront = two.getElementsByClassName('container')[0].getElementsByClassName('front')[0];
var twoBack = two.getElementsByClassName('container')[0].getElementsByClassName('back')[0];
var threeFront = three.getElementsByClassName('container')[0].getElementsByClassName('front')[0];
var threeBack = three.getElementsByClassName('container')[0].getElementsByClassName('back')[0];

//Here we create the alphabet array
var anbani = 
			[ 
				{aso: 'ا٠٠' , trans: 'Seratus'},
				{aso: 'ب', trans: 'Ba'}, 
				{aso: 'ت', trans: 'Ta'}, 
				{aso: 'ث', trans: 'Tha'}, 
				{aso: 'ج', trans: 'Jim'}, 
				{aso: 'چ', trans: 'Cha'}, 
				{aso: 'ح', trans: 'Ha'}, 
				{aso: 'خ', trans: 'Kha'}, 
				{aso: 'د', trans: 'Dal'}, 
				{aso: 'ذ', trans: 'Dzal'}, 
				{aso: 'ر', trans: 'Ra'}, 
				{aso: 'ز', trans: 'Zai'}, 
				{aso: 'س', trans: 'Sin'}, 
				{aso: 'ش', trans: 'Shin'}, 
				{aso: 'ص', trans: 'Saad'}, 
				{aso: 'ض', trans: 'Dhad'}, 
				{aso: 'ط', trans: 'Tho'}, 
				{aso: 'ظ', trans: 'Dzo'}, 
				{aso: 'ع', trans: 'Ain'}, 
				{aso: 'غ', trans: 'Ghin'}, 
				{aso: 'ڠ', trans: 'Nga'}, 
				{aso: 'ف', trans: 'Fa'}, 
				{aso: 'ڨ', trans: 'Pa'}, 
				{aso: 'ق', trans: 'Qaf'}, 
				{aso: 'ک', trans: 'Kaf'}, 
				{aso: 'ݢ', trans: 'Ga'}, 
				{aso: 'ل', trans: 'Lam'}, 
				{aso: 'م', trans: 'Mim'}, 
				{aso: 'ن', trans: 'Nun'}, 
				{aso: 'و', trans: 'Wau'}, 
				{aso: 'ۏ', trans: 'Va'}, 
				{aso: 'ۃ', trans: 'Taa'}, 
				{aso: 'ہ', trans: 'Hha'}, 
				{aso: 'ي', trans: 'Ya'},
				{aso: 'ڽ', trans: 'Nya'} 
				
			];




var numOne = 34;
var numTwo = 0;
var numThree = 1;
   


nextButton.addEventListener('click', changeCard, false);
prevButton.addEventListener('click', changeCard, false);


function changeCard() {
  if(this.getAttribute('id') == 'nextBtn') {
    if(one.style.margin == '0px -195px') {
      one.style.margin = '0 305px';
      one.style.transition = 'margin 0s';
      two.style.margin = '0 -195px';
      two.style.transition = three.style.transition = 'margin 0.5s ease-out';
      three.style.margin = '0 55px';
      
      if(numOne === 34) {
        numOne = 2;
      } else if(numOne === 33) {
        numOne = 1;
      } else if(numOne === 32) {
        numOne = 0;  
      } else {
        numOne += 3;
      }     
      oneFront.innerHTML = anbani[numOne].aso;
      oneBack.innerHTML = anbani[numOne].trans;
      
    } else if(one.style.margin == '0px 55px') {
      one.style.margin = '0 -195px';
      one.style.transition = two.style.transition = 'margin 0.5s ease-out';
      two.style.margin = '0 55px';
      three.style.margin = '0 305px';
      three.style.transition = 'margin 0s';
      
      
      if(numThree === 34) {
        numThree = 2;
      } else if(numThree === 33) {
        numThree = 1;
      } else if(numThree === 32) {
        numThree = 0;  
      } else {
        numThree += 3;
      }  
      
      threeFront.innerHTML = anbani[numThree].aso;
      threeBack.innerHTML = anbani[numThree].trans;
      
    } else if(one.style.margin == '0px 305px') {
      one.style.margin = '0 55px';
      one.style.transition = three.style.transition = 'margin 0.5s ease-out';
      two.style.margin = '0 305px';
      two.style.transition = 'margin 0s';
      three.style.margin = '0 -195px';
      
      if(numTwo === 34) {
        numTwo = 2;
      } else if(numTwo === 33) {
        numTwo = 1;
      } else if(numTwo === 32) {
        numTwo = 0;  
      } else {
        numTwo += 3;
      }  
      
      twoFront.innerHTML = anbani[numTwo].aso;
      twoBack.innerHTML = anbani[numTwo].trans;
    } 
  } else if(this.getAttribute('id') == 'prevBtn') {
    if(three.style.margin == '0px 305px') {
      three.style.margin = '0 -195px';
      three.style.transition = 'margin 0s';
      two.style.margin = '0 305px';
      one.style.margin = '0 55px';
      two.style.transition = one.style.transition = 'margin 0.5s ease-out';
      
      if(numThree === 0) {
        numThree = 32;
      } else if(numThree === 1) {
        numThree = 33;
      } else if(numThree === 2) {
        numThree = 34;
      } else {
        numThree -= 3;  
      }
      
      threeFront.innerHTML = anbani[numThree].aso;
      threeBack.innerHTML = anbani[numThree].trans;
    } else if(three.style.margin == '0px 55px') {
      three.style.margin = '0 305px';
      two.style.margin = '0 55px';
      two.style.transition = three.style.transition = 'margin 0.5s ease-out';
      one.style.margin = '0 -195px';
      one.style.transition = 'margin 0s';
      
      if(numOne === 0) {
        numOne = 32;
      } else if(numOne === 1) {
        numOne = 33;
      } else if(numOne === 2) {
        numOne = 34;
      } else {
        numOne -= 3;
      }
      
      oneFront.innerHTML = anbani[numOne].aso;
      oneBack.innerHTML = anbani[numOne].trans;
    } else if(three.style.margin == '0px -195px') {
      three.style.margin = '0 55px';
      one.style.margin = '0 305px';
      one.style.transition = three.style.transition = 'margin 0.5s ease-out';
      two.style.margin = '0 -195px';
      two.style.transition = 'margin 0s';
      
      if(numTwo === 0) {
        numTwo = 32;
      } else if(numTwo === 1) {
        numTwo = 33;
      } else if(numTwo === 2) {
        numTwo = 34;
      } else {
        numTwo -= 3;  
      }
      
      twoFront.innerHTML = anbani[numTwo].aso;
      twoBack.innerHTML = anbani[numTwo].trans;
    }
  }
}
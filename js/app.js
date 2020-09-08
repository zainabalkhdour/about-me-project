'use strict';
var score = 0;


   var cats = prompt( 'do i love cats? please answer (yes/no) or (y/n) ').toLowerCase();
   if(cats=='yes' || cats =='y')
   {
    alert('unforetunatly no');
    //console.log('unforetunatly no');
   }
   else if ( cats == 'no' || cats== 'n'){
       alert('correct');
       //console.log('correct');
       
       score++
   }else{
       alert('wrong input');
       //console.log('wrong input');
       
   }
 //---------------------------------------------------------------
 var code = prompt( 'do i study coding? please answer (yes/no) or (y/n) ').toLowerCase();
 if(code=='yes' || code =='y')
 {
  alert('correct');
  //console.log('correct')
  score++
 }
 else if ( code == 'no' || code== 'n'){
     alert('not correct');
     //console.log(' not correct');
     
 }else{
     alert('wrong input');
    // console.log('wrong input');
 }
 //---------------------------------------------------------------
 var gender = prompt( 'am i female? please answer (yes/no) or (y/n) ').toLowerCase();
 if(gender=='yes' || gender =='y')
 {
  alert('yes am a female');
  //console.log('yes am a female');
  score++
 }
 else if ( gender == 'no' || gender== 'n'){
     alert(' not correct')
     //console.log(' not correct');
     
 }else{
     alert('wrong input');
     //console.log('wrong input');
 } 
 
 //---------------------------------------------------------------

var opinion = prompt('did you love this game?please answer (yes/no) or(y/n)').toLowerCase();
console.log('did you love this game?'+opinion);

if(opinion =='yes' || opinion =='y'){
    alert('you have win 100 dollers !!!');
    //console.log('you have win 100 dollers !!!');
    score++
   
}else if (opinion=='no' || opinion=='n'){
    alert('thank you for playing the game');
   // console.log('thank you for playing the game');
}else{
    alert('wrong input');
    //console.log('wrong input');
}

//---------------------------------------------------------------
var thank =prompt('did you enjoy','yes or no').toLowerCase();
switch (thank){
    case (thank=='yes' || thank =='y'):
      //  console.log('yes');
        alert('thank you');
       score++
        break;
    case ( thank == 'no' || thank== 'n') :
        alert('so sad for that');
       // console.log('no');
        break;
        
        default :
        alert('bad input')
        //console.log('yes');
        break;
        
}
//---------------------------------------------------------------

var myNum = 15;
var notpass=true

//i=0 i=1  i=2 i=3 
for (var i=0 ;i<4;i++){
    var useerNum =Number( prompt('geuss my number from 10-20 !'));
    if( useerNum ==myNum ){
        alert('correct answer !');
        console.log('correct answer !');
        notpass=false;
        score++
        break;
    }else if (useerNum>myNum){
        alert('too high');
        console.log('too high');
    }else if (useerNum<myNum){
        alert('too low');
        console.log('too low');
    }else{
        alert('string not allowed');
        console.log('string not allowed');
    }
}
if(notpass){
    alert('the correct answer is '+myNum);
    console.log('the correct answer is '+myNum);
}




//---------------------------------------------------------------
var provincies= ['amman','madaba','almafraq','irbid'];
var o = 0
notpass=true
while (o < 6) {
    var usergeuss = prompt('what are the cities names in jordan?').toLowerCase();
    console.log('what are the cities names in jordan?'+ usergeuss);
    for (var x = 0; x < provincies.length; x++) {
        if (usergeuss == provincies[x]) {
            alert('correct !!');
            console.log('correct !!')
            notpass=false;
            score++
            break;
        }

    }
if(!notpass)
break;
o++;   
}

if(notpass){
    alert('the correct answers are '+ provincies);
    console.log('the correct answers are '+ provincies);
}
//------------------------------------------------------------------
console.log (score);


'use strict';

/*if ( nationality = 'yes'){
    alert('hello jordanian lets finish this game');
    console.log('hello jordanian lets finish this game');
    
}
if( nationality='no' ){
   var foriegnNational = prompt( 'please write down your nationality')
   console.log(foriegnNational + '' + nationality);
   alert(' hey '+''+ foriegnNational + 'friend happy to have you here, lets play geussing') ;
   console.log(' hey '+''+ foriegnNational + 'friend happy to have you here, lets play geussing');
}
*/ "this our code below" /*
var name = prompt('what is your name?');
console.log('what is your name?'+''+name);
alert('weclcome'+''+name);
console.log('weclcome'+''+name);

var cats = prompt('do you love cats?','yes or no');
// console.log('do you love cats?'+ cats);
if (cats == 'yes') {
    alert('do you love cats?'+ cats);
    console.log('good for you, cats lovely animals');

} else {
    alert('good for you they are scarey');
console.log('good for you they are scarey');
    
}

var fish = prompt ('do you love fish?','yes or no');
console.log('do you love fish?'+ fish);

if (cats == fish =='yes') {
    alert(' the cats eat the fish, you have one pet now');
    console.log(' the cats eat the fish, you have one pet now');
    
} if (cats== fish== 'no') {
    alert(' cats eat the fish ,you will lose the fish but you don\'t have one '); 
    console.log(' cats eat the fish ,you will lose the fish but you don\'t have one ');
} else{
    alert('give the fish to the cat he\'s hungry');
    console.log('give the fish to the cat he\'s hungry');
}

var dogs =  prompt ('do you love dogs?','yes or no');
console.log('do you love dogs?'+dogs);

if(dogs==cats==fish=='yes'){
    alert('you lose your cat,kick out your dog');
    console.log('you lose your cat,kick out your dog');
}if(dogs==cats==fish=='no'){
    alert ('you have not got in problems, good');
    console.log('you have not got in problems, good');

}if (dogs=='yes') {
    alert('good choice'+name);
    console.log('good choice'+name);
    
}else{
    alert('your cat alive , good for you');
    console.log('your cat alive , good for you');
}

var opinion = prompt('did you love this game?','yes or no');
console.log('did you love this game?'+opinion);

if(opinion=='yes'){
    alert('you have win 100 dollers !!!');
    console.log('you have win 100 dollers !!!');
}else{
    alert('thank you for playing the game');
    console.log('thank you for playing the game');
}

var thank =prompt('did you enjoy','yes or no')
switch (thank.toLocaleLowerCase){
    case 'yes':
        console.log('yes');
       
        break;
    case 'no':
        console.log('no');
        break;
        
        default :
        console.log('yes');
        break;
        
}

*/


// // what is the number of my sibilings
// var family=prompt('what is the number of my sibilings?');
// console.log('what is the number of my sibilings?'+' ' +family);// 0+1/1+1/2+1/3

// for (let counter = 1;( (family != 8) !  (counter != 4)) ; counter++) {
//     if(0>=family>=4) {
//         var attempt = counter;
//         console.log(attempt);
//         alert('too low , used'+ attempt);
//         console.log('too low , used'+ attempt);
    
        
//     }else if(5>=family>=7){
//         var attempt = counter;
//         console.log(attempt);
//         alert('too close , used'+ attempt);
//         console.log('too close, used'+ attempt);
//     }else if(9 <= family){
//         var attempt = counter;
//         console.log(attempt);
//         alert('too high , used'+ attempt);
//         console.log('too high, used'+ attempt);

//     }else{
//         var attempt = counter;
//         console.log(attempt);
//         alert('correct!!'+' '+ family);
//         console.log('correct!!'+' '+ family);  
//         break;
//     }
    
// }
// what is the number of my sibilings
var family=prompt('what is the number of my sibilings?');
console.log('what is the number of my sibilings?'+' ' +family);// 0+1/1+1/2+1/3

if (0<=family<=4) {
    for(let counter=1; counter != 4 ;counter++){
        var attempt = counter;
        console.log(attempt);
        alert('too low , used'+ attempt);
        console.log('too low , used'+ attempt);
        family=prompt('what is the number of my sibilings?');
        console.log('what is the number of my sibilings?'+' ' +family);
      
    }
    
} else if (5<=family<=7){
    for(let counter=1; counter != 4 ;counter++){
        var attempt = counter;
        console.log(attempt);
        alert('too close , used'+ attempt);
        console.log('too close, used'+ attempt);
        family=prompt('what is the number of my sibilings?');
        console.log('what is the number of my sibilings?'+' ' +family);
       
    }
} else if (9<=family){
    for(let counter=1; counter != 4 ;counter++){
        var attempt = counter;
        console.log(attempt);
        alert('too high , used'+ attempt);
        console.log('too high, used'+ attempt);
        family=prompt('what is the number of my sibilings?');
        console.log('what is the number of my sibilings?'+' ' +family);
    }


}else{
        var attempt = counter;
        console.log(attempt);
        alert('correct!!'+' '+ family);
        console.log('correct!!'+' '+ family);
}


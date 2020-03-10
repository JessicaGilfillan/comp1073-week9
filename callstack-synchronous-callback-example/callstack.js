// JavaScript Document

//how the call stack works! 

//put a number inside each console.log statements to represent which order they will be displayed in the console 

//function context
const second = function() {
  console.log('2');
}

//function context 
const awesomesauce = function() {
  console.log('1');
  second();
  console.log('3');
}

//main context - called first
awesomesauce();
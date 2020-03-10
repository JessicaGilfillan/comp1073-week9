// JavaScript Document

//Example One - The Call Stack 

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

//Example Two - Blocking Code (Slow & Synchronous) 

//https://mdn.github.io/learning-area/javascript/asynchronous/introducing/simple-sync.html

/* const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  let myDate;
  for(let i = 0; i < 10000000; i++) {
    let date = new Date();
    myDate = date
  }

  console.log(myDate);

  let pElem = document.createElement('p');
  pElem.textContent = 'This is a newly-added paragraph.';
  document.body.appendChild(pElem);
});


When running the example, open your JavaScript console then click the button — you'll notice that the paragraph does not appear until after the dates have finished being calculated and the console message has been logged. The code runs in the order it appears in the source, and the later operation doesn't run till the earlier operation has finished running. */

//Example Three - Asynchronous Callback 

//For reasons illustrated earlier (e.g. related to blocking), many Web API features now use asynchronous code to run, especially those that access or fetch some kind of resource from an external device, such as fetching a file from the network, accessing a database and returning data from it, accessing a video stream from a web cam, or broadcasting the display to a VR headset.//

//There are two main types of asynchronous code style you'll come across in JavaScript code, old-style callbacks and newer promise-style code. In the below sections we'll review each of these in turn.

/*Async Callbacks 

Async callbacks are functions that are specified as arguments when calling a function which will start executing code in the background. When the background code finishes running, it calls the callback function to let you know the work is done, or to let you know that something of interest has happened. Using callbacks is slightly old-fashioned now, but you'll still see them in use in a number of older-but-still-commonly-used APIs. */

/*btn.addEventListener('click', () => {
  alert('You clicked me!');

  let pElem = document.createElement('p');
  pElem.textContent = 'This is a newly-added paragraph.';
  document.body.appendChild(pElem);
});*/

//The first parameter is the type of event to be listened for, and the second parameter is a callback function that is invoked when the event is fired.

//When we pass a callback function as an argument to another function, we are only passing the function's reference as an argument, i.e, the callback function is not executed immediately. It is “called back” (hence the name) asynchronously somewhere inside the containing function’s body. The containing function is responsible for executing the callback function when the time comes.

//Another Callback Example 

//here's our function to set up and work with the XHR object in order to grab an image from the server 

//However, we then create a loadAsset() function that takes a callback as a parameter, along with a URL to fetch and a content type

function loadAsset(url, type, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = type;

  xhr.onload = function() {
    callback(xhr.response);
  };
  
  xhr.send();
}

//here's our callback function 
//Here we create a displayImage() function that simply represents a blob passed to it as an object URL
// case the callback is waiting on the XHR call to finish downloading the resource (using the onload event handler) before it passes it to the callback.

function displayImage(blob) {
  let objectURL = URL.createObjectURL(blob);
  /* note - The URL interface is used to parse, construct, normalize, and encode URLs. It works by providing properties which allow you to easily read and modify the components of a URL. You normally create a new URL object by specifying the URL as a string when calling its constructor, or by providing a relative URL and a base URL. You can then easily read the parsed components of the URL or make changes to the URL */
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}

loadAsset('pizza-2.jpg', 'blob', displayImage);



/*Callbacks are versatile — not only do they allow you to control the order in which functions are run and what data is passed between them, they also allow you to pass data to different functions depending on circumstance. So you could have different actions to run on the response downloaded, such as processJSON(), displayText(), etc.*/ 

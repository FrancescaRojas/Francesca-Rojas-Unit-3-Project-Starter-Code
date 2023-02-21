/* Declare variables below to save the different sections (divs) of your story*/

let storyTitle=document.querySelector(".title");

let storyOpening=document.querySelector(".story-opening");

let option1screen=document.querySelector(".option-one-screen");

let option2screen=document.querySelector(".option-two-screen");

let option1end=document.querySelector(".option-one-end");

let option2end=document.querySelector(".option-two-end");


let button1=document.querySelector(".option-one");

let button2=document.querySelector(".option-two");

let photo1=document.querySelector(".photo1");

let photo2=document.querySelector(".photo2");


/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!*/
button1.onclick=function(){
 option1screen.style.display="block";
    storyOpening.style.display="none";
    storyTitle.innerHTML="#SayNoToDuckBreadSteal";
};

button2.onclick=function(){
 option2screen.style.display="block";
 storyOpening.style.display="none";
     storyTitle.innerHTML="#SayNoToDuckBreadSteal";
    
};

photo1.onmouseover=function(){
 option1end.style.display="block";
    photo2.style.display="none";
};

photo2.onmouseover=function(){
 option2end.style.display="block";
    photo2.style.display="none";
};




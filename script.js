/*Add your JavaScript here*/
var surviveScore=0;
var dieScore=0;
var questionCount=0;
var result= document.getElementById("result");

var q1a1= document.getElementById("q1a1");
var q1a2= document.getElementById("q1a2");

var q2a1= document.getElementById("q2a1");
var q2a2= document.getElementById("q2a2");

var q3a1= document.getElementById("q3a1");
var q3a2= document.getElementById("q3a2");

//Create event listeners
q1a1.addEventListener("click", die);
q1a2.addEventListener("click", survive);

q2a1.addEventListener("click", die);
q2a2.addEventListener("click", survive);

q3a1.addEventListener("click", survive);
q3a2.addEventListener("click", die);

//Create Functions
function die(){
  dieScore+=1;
  questionCount+=1;
console.log("questionCount="+questionCount + "dieScore=" + dieScore);
  if (questionCount==3){
  console.log("The quiz is done!");
    updateResult();
}
}
function survive(){
  surviveScore+=1;
  questionCount+=1;
console.log("questionCount="+questionCount +"surviveScore="+surviveScore);
  if (questionCount==3){
  console.log("The quiz is done!");
    updateResult();
  }
 
}

function updateResult(){
  if(dieScore>=2){
    result.innerHTML= "No...make better decisions next time.";
  console.log("No...make better decisions next time.");}
else if(surviveScore>=2){
  console.log("Yes, you would make it!");
  result.innerHTML= "Yes, you would make it!";
}
}





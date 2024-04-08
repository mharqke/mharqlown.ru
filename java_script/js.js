
var num = 0;
var year = 0;
var veg = ["carrot", "potato", "apple", "bread", "tomato", "salad", "cabage", "error", "femboy_liquid"];
var color = ["orange", "rgb(171, 111, 71)", "green","rgba(130, 71, 16, 0.84)", "red", "lightgreen", "darkgreen", "grey", "white"];
locationx = [21,5,87,23,55,46,8,15,55];
locationy = [55,15,8,46,55,34,87,5,21];

function OnClickButton(el){
  year ++;
  el.innerHTML = "какой сейчас год?" + "<br> сейчс " + year + " A.D.(неправильно)";
  console.log("какой же он тупой, даже год не может сказать")
  if(year == 2024){
    el.innerHTML = "какой сейчас год?" + "<br> сейчс " + year + " A.D.(правильно)";
  }
}
function OnClickButton2(el){
  
  el.innerHTML = veg[num];
  el.style.background = color[num];
  num++;
  if(num>8){
    num=0;
  }
}

function inpul(el){
  console.log(el.value);
}



//lesson 12

var flag = true;
document.getElementById('text').style.backgroundColor = "black"; //you can use this method or create variable
var text = document.getElementById('text');

text.title = "turtle";  //change tag title
text.style.color = 'pink';
text.style.backgroundColor = 'gray';
text.style.position = "absolute"
text.style.left = "28%";
console.log("id: " + text.id); 
console.log("title: " + text.title);
function OnClickButton1(){ //if button "destroy universe" was presed text change
  if(flag){
  text.innerHTML = "одним солнечным дождливым, пятничным утром я пошёл спать, и там бля ооо бля эта бля оаоаоаоао";
  text.style.left = "10%";
  console.log("html was pressed");
  flag = !flag;
  }else if(!flag){
  text.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing."; 
  text.style.left = "30%";
  console.log("button was changed");
  flag = !flag;
  }
}


// var spans = document.getElementsByTagName('span');
var spans = document.getElementsByClassName('spain');
for(var i =  0; i < spans.length; i++){
  console.log(spans[i].innerHTML);
}


// function checkForm(el){
//   var name = el.name.value;
//   var pass = el.pass.value;
//   var repass = el.repass.value;
//   var sex = el.state.value;
//   // var name = document.getElementById('name').value;

//   var fail ="";

// if(name=="" || pass=="" || repass=="" || sex==""){
//   fail = "не все поля разрисованы";
// }else if(name.length > 7 || name.length < 3){
//   fail = "i dont like your name";
// }else if(pass.split("3")){
//   console.log("aaaaa there are 3");
// }
// if(fail != ""){
//   document.getElementById('error').innerHTML = fail;
//   document.getElementById('error').style.color = "red";  
//   console.log(fail);
//   return false;
// }else{
//   return true;
// }

//   // console.log(name); 
//   //   console.log(pass); 
//   //   console.log(repass);
//   //   console.log(sex);   
// }


//-------------------------------------------lesson 13 timer/counter-----------------------------------------

//----------------counter------------------
var count1 = 0;
var count2 = 0;

counter1 = document.getElementById("counter1");
counter2 = document.getElementById("counter2");

function ct1(){
  count1++;
  counter1.innerHTML = count1;
  if(count1==7){
    clearInterval(m1);
    console.log("m1 stoped")
  }
}
function ct2(){
  count2++;
  counter2.innerHTML = count2;
  if(count2==7){
    clearInterval(m2);
    console.log("m2 stoped")
  }
}



var m1 = setInterval(ct1, 1000);
var m2 = setInterval(ct2, 2000);


//----------------timer-------------

// setTimeout(timer1(), 2500);

// function timer1(){
//   console.log("timerrrrr");
// }

//lesson14

// var date = new Date(); 

// console.log(date.getHours() + "  " + date.getMinutes());
// console.log(date.getMilliseconds());





var list = [1, 6,  99, 3, 0, 512, -3];


// console.log(list);
// console.log(list.length);
// console.log(list.join("-"));
// console.log(list.sort());
// console.log(list.reverse());
// console.log(list.reverse().join(" - "));

var line = list.sort().join(", ");

line = line.split(", ");

// console.log(line[3]);


//-------classes-------

class Person {
  constructor(name ,age, happiness){
    this.name = name;
    this.age = age;
    this.happiness = happiness;
  
  }
  info(){
    console.log(this.name); 
    console.log(this.age); 
    console.log(this.happiness); 
   }
  }
  
var alex = new Person('alex', '56', true);
var uri = new Person('uri', '18', true);

alex.name = "fif";
uri.info();

























































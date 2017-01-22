var prevnumber="null";
var currnumber="null";
var operandused=false;
var firstnum=true;
var negate_num=0;
var periodused=false;
var equalspressed=false;
var addpressed=false;
var subpressed=false;
var mulpressed=false;
var divpressed=false;
var endop=false;

function c() { //Function clears out operator, resets bools, and sets calculator back to 0
  document.getElementById("screen_interface").innerHTML = "0";
  var nothing="";
  document.getElementById("operator").innerHTML = nothing;
  prevnumber="null"
  currnumber="null"
  operandused=false;
  firstnum=true;
  negate_num=0;
  periodused=false;
  equalspressed=false;
  var addpressed=false;
  var subpressed=false;
  var mulpressed=false;
  var divpressed=false;
  var endop=false;
}

function compute() {
  var op=document.getElementById("operator").innerHTML;
  currnumber=document.getElementById("screen_interface").innerHTML;
  var nothing="";
  if (op=="x") {
    equalspressed=true;
    multiplication();
  }
  else if (op=="+") {
    equalspressed=true;
    addition();
  }
  else if (op=="-") {
    equalspressed=true;
    subtract();
  }
  else if (op!=nothing) {
    equalspressed=true;
    divide();
  }
  else {
    endop=true;
  }
}


function multiplication() {
  var a="x";
  document.getElementById("operator").innerHTML = a;
  var screennum = document.getElementById("screen_interface").innerHTML;
   if (prevnumber=="null") { /*Case 1: First number has been entered (e.g., 4 *)*/
     prevnumber=screennum;
     operandused=true;
     mulpressed=true;
   }
   else if (prevnumber!="null" && operandused==true && equalspressed==true) { /*Second number has been entered (e.g., 4 * 7 *) */
    var currnumber = document.getElementById("screen_interface").innerHTML;
    prevnumber=parseInt(prevnumber);
    currnumber=parseInt(currnumber);
    var answer=prevnumber*currnumber;
    var nothing="";
    operandused=false;  
    document.getElementById("operator").innerHTML = nothing;
    document.getElementById("screen_interface").innerHTML = answer;
    prevnumber="null"
    currnumber=answer;
  }
}

function divide() {
  var a='&divide';
  document.getElementById("operator").innerHTML = a;
  var screennum = document.getElementById("screen_interface").innerHTML;
   if (prevnumber=="null") { /*Case 1: First number has been entered (e.g., 4 /)*/
     prevnumber=screennum;
     operandused=true;
     divpressed=true;
   }
   else if (prevnumber!="null" && operandused==true && equalspressed==true) { /*Second number has been entered (e.g., 4 / 7 /) */
    var currnumber = document.getElementById("screen_interface").innerHTML;
    prevnumber=parseInt(prevnumber);
    currnumber=parseInt(currnumber);
    var nothing=""; 
    if (currnumber=="0") {
      document.getElementById("operator").innerHTML = nothing;
      document.getElementById("screen_interface").innerHTML = "not a number";
    }

    else{
    var answer=((prevnumber*1.0)/(currnumber*1.0));
    operandused=false; 
    document.getElementById("operator").innerHTML = nothing;
    document.getElementById("screen_interface").innerHTML = answer;
    prevnumber="null"
    currnumber=answer;}
  }
}

function addition() {
  var a="+"
  document.getElementById("operator").innerHTML = a;
  var screennum = document.getElementById("screen_interface").innerHTML;
   if (prevnumber=="null") { /*Case 1: First number has been entered (e.g., 4 /)*/
     prevnumber=screennum;
     operandused=true;
     addpressed=true;
   }

   /*else if (prevnumber!="null" && operandused==true && equalspressed==false && addpressed==true) { 
    var currnumber = document.getElementById("screen_interface").innerHTML;
    prevnumber=parseInt(prevnumber);
    currnumber=parseInt(currnumber);
    var answer=prevnumber+currnumber;
    var nothing=""; 
    operandused=false; 
    document.getElementById("operator").innerHTML = nothing;
    document.getElementById("screen_interface").innerHTML = answer;
    prevnumber="null"
    currnumber=answer;
  }*/

   else if (prevnumber!="null" && operandused==true && equalspressed==true) { /*Second number has been entered (e.g., 4 / 7 /) */
    var currnumber = document.getElementById("screen_interface").innerHTML;
    prevnumber=parseInt(prevnumber);
    currnumber=parseInt(currnumber);
    var answer=prevnumber+currnumber;
    var nothing=""; 
    operandused=false; 
    document.getElementById("operator").innerHTML = nothing;
    document.getElementById("screen_interface").innerHTML = answer;
    prevnumber="null"
    currnumber=answer;
  }
}

function subtract() {
  var a="-"
  document.getElementById("operator").innerHTML = a;
  var screennum = document.getElementById("screen_interface").innerHTML;
   if (prevnumber=="null") { /*Case 1: First number has been entered (e.g., 4 /)*/
     prevnumber=screennum;
     operandused=true;
     subpressed=true;
   }
   else if (prevnumber!="null" && operandused==true && equalspressed==true) { /*Second number has been entered (e.g., 4 / 7 /) */
    var currnumber = document.getElementById("screen_interface").innerHTML;
    prevnumber=parseInt(prevnumber);
    currnumber=parseInt(currnumber);
    var answer=prevnumber-currnumber;
    var nothing=""; 
    operandused=false; 
    document.getElementById("operator").innerHTML = nothing;
    document.getElementById("screen_interface").innerHTML = answer;
    prevnumber="null"
    currnumber=answer;
  }
}


function negate() {
  var x = document.getElementById("screen_interface").innerHTML;
  
  /*Checks to ensure that number is not 0, and currently there is no minus sign*/
  if (x!="0" && (negate_num % 2 == 0)) {
  var y="-"
  var x=y.concat(x);
  document.getElementById("screen_interface").innerHTML = x;
  negate_num+=1;
}
  /*If there is a minus sign*/
  else if (x!="0" && (negate_num % 2 != 0))  {
    x=x.substring(1);
    document.getElementById("screen_interface").innerHTML=x;
  }
}

function addperiod() {
  var x = document.getElementById("screen_interface").innerHTML;
  var pd = x.indexOf('.');
  if (pd == -1) {
    var y=x.concat(".")
    document.getElementById("screen_interface").innerHTML = y;
  }
}

function add0() {
  var x = document.getElementById("screen_interface").innerHTML;
  
  if (x=="0" && firstnum==true) {
     document.getElementById("screen_interface").innerHTML = "0";
  }
  else if (operandused==true && firstnum==true) {
    document.getElementById("screen_interface").innerHTML = "0";
    firstnum=false;
  }
  else {
  var y=x.concat("0")
  document.getElementById("screen_interface").innerHTML = y;}
}


function add1() {
  var x = document.getElementById("screen_interface").innerHTML;
  if ( x=="0" && firstnum==true) {
     document.getElementById("screen_interface").innerHTML = "1";
  }
  else if (operandused==true && firstnum==true) {
    document.getElementById("screen_interface").innerHTML = "1";
    firstnum=false;
  }
  else{
  var y=x.concat("1")
  document.getElementById("screen_interface").innerHTML = y;}
}

function add2() {
  var x = document.getElementById("screen_interface").innerHTML;
  if ( x=="0" && firstnum==true) {
     document.getElementById("screen_interface").innerHTML = "2";
  }
   else if (operandused==true && firstnum==true) {
    document.getElementById("screen_interface").innerHTML = "2";
    firstnum=false;
  }
  else {
  var y=x.concat("2")
  document.getElementById("screen_interface").innerHTML = y;}
}
function add3() {
  var x = document.getElementById("screen_interface").innerHTML; 
  if ( x=="0" && firstnum==true) {
     document.getElementById("screen_interface").innerHTML = "3";
  }
   else if (operandused==true && firstnum==true) {
    document.getElementById("screen_interface").innerHTML = "3";
    firstnum=false;
  }
  else {
  var y=x.concat("3")
  document.getElementById("screen_interface").innerHTML = y;}
}
function add4() {
   var x = document.getElementById("screen_interface").innerHTML; 
  if ( x=="0" && firstnum==true) {
     document.getElementById("screen_interface").innerHTML = "4";
  }
  else if (operandused==true && firstnum==true) {
    document.getElementById("screen_interface").innerHTML = "4";
    firstnum=false;
  }
  else {
  var y=x.concat("4")
  document.getElementById("screen_interface").innerHTML = y;}
}

function add5() {
  var x = document.getElementById("screen_interface").innerHTML;
  if ( x=="0" && firstnum==true) {
     document.getElementById("screen_interface").innerHTML = "5";
  }
  else if (operandused==true && firstnum==true) {
    document.getElementById("screen_interface").innerHTML = "5";
    firstnum=false;
  }
  else {
  var y=x.concat("5")
  document.getElementById("screen_interface").innerHTML = y;}
}
function add6() {
 var x = document.getElementById("screen_interface").innerHTML;
  if ( x=="0" && firstnum==true) {
     document.getElementById("screen_interface").innerHTML = "6";
  }
  else if (operandused==true && firstnum==true) {
    document.getElementById("screen_interface").innerHTML = "6";
    firstnum=false;
  }
  else {
  var y=x.concat("6")
  document.getElementById("screen_interface").innerHTML = y;}
}
function add7() {
  var x = document.getElementById("screen_interface").innerHTML;
  if ( x=="0" && firstnum==true) {
     document.getElementById("screen_interface").innerHTML = "7";
  }
  else if (operandused==true && firstnum==true) {
    document.getElementById("screen_interface").innerHTML = "7";
    firstnum=false;
  }
  else{
  var y=x.concat("7")
  document.getElementById("screen_interface").innerHTML = y;}
}
function add8() {
  var x = document.getElementById("screen_interface").innerHTML;
  if (x=="0" && firstnum==true) {
     document.getElementById("screen_interface").innerHTML = "8";
  }
  else if (operandused==true && firstnum==true) {
    document.getElementById("screen_interface").innerHTML = "8";
    firstnum=false;
  }
  else{
  var y=x.concat("8")
  document.getElementById("screen_interface").innerHTML = y;}
}
function add9() {
 var x = document.getElementById("screen_interface").innerHTML;
  if (x=="0" && firstnum==true) {
     document.getElementById("screen_interface").innerHTML = "9";
  }
  else if (operandused==true && firstnum==true) {
    document.getElementById("screen_interface").innerHTML = "9";
    firstnum=false;
  }
  else {
  var y=x.concat("9")
  document.getElementById("screen_interface").innerHTML = y;}
}




/*Get all buttons to work*/
window.onload=function() {
  var b0=document.getElementById("zerobutton");
  b0.addEventListener("click",add0);
  var b1=document.getElementById("button1");
  b1.addEventListener("click",add1);
  var b2=document.getElementById("button2");
  b2.addEventListener("click",add2);
  var b3=document.getElementById("button3");
  b3.addEventListener("click",add3);
  var b4=document.getElementById("button4");
  b4.addEventListener("click",add4);
  var b5=document.getElementById("button5");
  b5.addEventListener("click",add5);
  var b6=document.getElementById("button6");
  b6.addEventListener("click",add6);
  var b7=document.getElementById("button7");
  b7.addEventListener("click",add7);
  var b8=document.getElementById("button8");
  b8.addEventListener("click",add8);
  var b9=document.getElementById("button9");
  b9.addEventListener("click",add9);
  var bc=document.getElementById("cbutton");
  bc.addEventListener("click",c);
  var bpm=document.getElementById("plusminus");
  bpm.addEventListener("click",negate);
  var bd=document.getElementById("dividebutton");
  bd.addEventListener("click",divide);
  var bm=document.getElementById("multiplybutton");
  bm.addEventListener("click",multiplication);
  var bs=document.getElementById("subtractbutton");
  bs.addEventListener("click",subtract);
  var ba=document.getElementById("addbutton");
  ba.addEventListener("click",addition);
  var be=document.getElementById("equalbutton");
  be.addEventListener("click",compute);
  var bp=document.getElementById("periodbutton");
  bp.addEventListener("click",addperiod);

}


